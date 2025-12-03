import ParticlesComponent from '../features/Home/coverHome/ParticlesBackground'
import ContentBarca from '../features/Home/contentBarca/contentBarca'
import Scrolling from '../features/Home/teamScroll/Scrolling'
import MesQueUnClub from '../components/mesQueUnClub'
import BarcaFooter from '../components/footer'

function Home() {
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
   </section>
   </div>
   <footer>
    <BarcaFooter />
   </footer>
  </div>
   
    
  )
}

export default Home;