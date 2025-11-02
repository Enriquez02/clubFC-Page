import ParticlesComponent from '../components/ParticlesBackground'
import ContentBarca from '../components/contentBarca'
import Scrolling from '../components/Scrolling'
import MesQueUnClub from '../components/mesQueUnClub'

function Home() {
  return ( 
    <div>
    <ParticlesComponent/>
    <MesQueUnClub/>
     <Scrolling/>
     
   <section className="relative ">
        <ContentBarca />
      </section>

    
       </div>
   
    
  )
}

export default Home;