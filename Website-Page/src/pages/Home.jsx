import ParticlesComponent from '../features/Home/coverHome/ParticlesBackground'
import ContentBarca from '../features/Home/contentBarca/contentBarca'
import Scrolling from '../features/Home/teamScroll/Scrolling'
import MesQueUnClub from '../components/mesQueUnClub'
import BarcaFooter from '../components/footer'
import NextMatch from '../features/Home/nextMatch/nextMatch'
import { useMatches } from '../services/Matches/matchesApi'

function Home() {
  const { data, isLoading } = useMatches(); // Extraemos también isLoading

  return ( 
    <div>
      <div style={{ height: "100vh"}}>
          <ParticlesComponent/>
      </div>
      
      <div className='bg-linear-to-r from-[rgb(0,77,152)] to-[#A50044]'>
          <MesQueUnClub/>
          <Scrolling/>
          <section className="relative ">
              <ContentBarca />
              
              {/* USAMOS UN OPERADOR TERNARIO O && PARA ESPERAR LOS DATOS */}
              {!isLoading && data ? (
                <NextMatch matches={data.matches} />
              ) : (
                <p className="text-white text-center">Cargando próximos partidos...</p>
              )}
          </section>
      </div>
      <footer>
          <BarcaFooter />
      </footer>
    </div>
  )
}
export default Home;