//Sponsor
import {ImgnikeOne,ImgnikeTwo,ImgnikeThree} from '../components/img-footer'

//Social Media
import face from '../assets/footer/face.png'
import x from '../assets/footer/x.png'
import youtube from '../assets/footer/youtube.png'
import instagram from '../assets/footer/ig.png'
import spotify_sm from '../assets/footer/spotify-sm.png'
import discord from '../assets/footer/discord.png'
import tiktok from '../assets/footer/tiktok.png'



function BarcaFooter() {
  return (
    <div className='bg-blue-950 w-full h-full'>
       <div className=" text-center text-white pt-5 font-sans "> 
        <h2 > OUR MAIN SPONSOR</h2>
       </div>
          <section className="grid grid-cols-3 w-5/5 md:w-4/5 lg:w-3/5  m-auto place-items-center">
            
       <ImgnikeOne/>
       <ImgnikeTwo/>
       <ImgnikeThree/>
            </section>

          <h2 className='text-center text-white pt-5 font-sans '> Follow FC Barcelona on Social Media  </h2>
          <section className='grid grid-cols-7 w-8/12 sm:w-6/12 md:w-2/5 lg:w-4/12 m-auto gap-5 py-3'>
            <img src={face} alt="socialmedia-face"  />
            <img src={x} alt="socialmedia-x" />
            <img src={youtube} alt="socialmedia-youtube" />
            <img src={instagram} alt="socialmedia-instagram" />
            <img src={spotify_sm} alt="socialmedia-spotify-sm" />
            <img src={discord} alt="socialmedia-discord" />
            <img src={tiktok} alt="socialmedia-tiktok" />
          </section>

          {/* Information */}

          <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 p-4 text-white'>
    {/* COLUMNA 1: Goalkeepers */}
    <div>
        <h2 className='pb-5 text-2xl font-semibold' >Goalkeepers</h2>
        <ul className='space-y-1 text-white/75'> 
            <li>Marc-André ter Stegen</li> 
            <li>Wojciech Szczęsny</li>
            <li>Joan Garcia</li>
        </ul>
    </div>
    
    {/* COLUMNA 2: Defenses */}
    <div>
        <h2 className='pb-5 text-2xl font-semibold'>Defenders</h2>
        <ul className='space-y-1 text-white/75'> 
            <li>Pau Cubarsí</li>
            <li>Alejandro Balde</li>
            <li>Ronald Araujo</li>
            <li>Andreas Christensen</li>
            <li>Gerard Martín</li>
            <li>Jules Kounde</li>
            <li>Eric García</li>
        </ul>
    </div>
    
    {/* COLUMNA 3: Midfielders */}
    <div>
        <h2 className='pb-5 text-2xl font-semibold'>Midfielders</h2>
        <ul className='space-y-1 text-white/75'> 
            <li>Gavi</li>
            <li>Pedri</li>
            <li>Fermín López</li>
            <li>Marc Casadó</li>
            <li>Frenkie de Jong</li>
            <li>Dani Olmo</li>
            <li>Marc Bernal</li>
        </ul>
    </div>
    
    {/* COLUMNA 4: Forwards */}
    <div>
    <h2 className='pb-5 text-2xl font-semibold'>Forwards</h2>
    <ul className='space-y-1 text-white/75'> 
        <li>Ferran Torres</li>
        <li>Robert Lewandowski</li>
        <li>Lamine Yamal</li>
        <li>Raphinha</li>
        <li>Marcus Rashford</li>
        <li>Roony Bardghji</li>
    </ul>
</div>
<div className=''>
    <h2 className='pb-5 text-2xl font-semibold'>Barça Products</h2>
    <ul className='space-y-1 text-white/75'> 
        <li>Online store</li>
    </ul>
</div>
<div className=''>
    <h2 className='pb-5 text-2xl font-semibold'>Club</h2>
    <ul className='space-y-1 text-white/75'> 
        <li>Spotify Camp Nou</li>
        <li>Ethical Channel</li>
        <li>The Crest</li>
        <li>Anthem</li>
        <li>Work at the Barça Stores</li>
    </ul>
</div>
<div className=''>
    <h2 className='pb-5 text-2xl font-semibold'>History</h2>
    <ul className='space-y-1 text-white/75'> 
        <li>2008-20. The best years in our history</li>
        <li>The era of the Dream Team</li>
        <li>Barça in the Campions League</li>
        <li>1899-1909. Foundation and survival</li>
    </ul>
</div>
            
          </section>
    </div>
  )
}

export default BarcaFooter