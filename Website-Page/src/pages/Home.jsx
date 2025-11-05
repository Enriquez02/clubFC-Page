import ParticlesComponent from '../components/ParticlesBackground'
import ContentBarca from '../components/contentBarca'
import Scrolling from '../components/Scrolling'
import MesQueUnClub from '../components/mesQueUnClub'

function Home() {
  return ( 
    <div>
      <div style={{ height: "100vh"}}>
        <ParticlesComponent/>
      </div>
    
    <MesQueUnClub/>
    <div className='bg-linear-to-r from-[rgb(0,77,152)] to-[#A50044]'>
<Scrolling/>
<section className="relative ">
        <ContentBarca />
      </section>
    </div>
     
     
   

    
       </div>
   
    
  )
}

export default Home;