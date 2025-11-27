// Scroll horizontal where i show the whole barcelona's squad 

import React, { useEffect, useState  } from 'react';
import axios from 'axios';
import { SquadMap, ShortName, excludedPlayer} from './Squad';
import useScrollDrag from './Scrollear.jsx';
import { GoArrowLeft, GoArrowRight  } from "react-icons/go";
import MoreInformation from './popUpWindow';

const API_URL = 'http://localhost:7000/squad';

const  Scrolling= () => {  

    // Crea una variable de estado. data es donde se guardarán los jugadores (inicialmente una lista vacía []).
    const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    // popUpWindow 
  const handleMoreInfo = (player) => {
   setSelectedPlayer(player);  // guarda el jugador clickeado
  setShowModal(true); 
  };

const ITEM_WIDTH = 800

     useEffect(() => {
  const fetchSquad = async () => {
    try {
      const response = await axios.get(API_URL);

      const teamInfo = response.data?.response?.[0]?.players;

      if (!teamInfo) {
        console.error("Invalid squad data:", response.data);
        return;
      }

      setData(teamInfo);

    } catch (err) {
      console.error("Frontend error fetching squad:", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchSquad();
}, []);

    
     const { 

        containerRef, 
        handleMouseDown, 
        handleMouseUp, 
        handleMouseMove,
        handleMouseLeave, // Lo que añadimos
        handleScroll
    } = useScrollDrag();

  return (
    
    <div className="relative">
        <div className= 'absolute left-1/2 transform -translate-x-1/2  top-5 text-center select-none w-[225px]'>
          <h2 className='text-4xl text- font-semibold '> BARÇA TEAM</h2>
        </div>
      <div className='hidden sm:flex absolute top-5 right-10 border-red-900 gap-x-2 scroll-smooth'>
                  
            <button className='flex items-center justify-center h-10 w-10 rounded-full transition duration-500 ease-in-out    hover:bg-blue-800/60'
            onClick={() => handleScroll(-ITEM_WIDTH)}
            >

            <GoArrowLeft className='h-7 w-7 text-gray-500' />
            </button>
            <button className='flex items-center justify-center h-10 w-10 rounded-full  transition duration-500 ease-in-out  hover:bg-blue-800/60'
            onClick={() => handleScroll(ITEM_WIDTH)}
            >

            <GoArrowRight className='h-7 w-7 text-gray-500  ' />
            </button>        
         </div>    
   <div>
        <div 
     ref={containerRef}
      onMouseDown={showModal ? undefined : handleMouseDown}
      onMouseUp={showModal ? undefined : handleMouseUp}
      onMouseLeave={showModal ? undefined : handleMouseLeave}
      onMouseMove={showModal ? undefined : handleMouseMove}
            
            // 4. CLASES CSS CRUCIALES para que no se rompa la línea : overflow-x-scroll, whitespace-nowrap, flex-none
   className="bg-white mx-1 p-5 flex overflow-x-scroll whitespace-nowrap cursor-grab rounded-b-2xl 
           scrollbar-thin
           [scrollbar-width:none]
           [&::-webkit-scrollbar]:hidden
           sm:mx-5"
>

        {data
        .filter(player => !excludedPlayer.some(ex => String(ex.id) === String(player.id)))
        .map((player,index) => {
            
            const InforNew = SquadMap[player.name]; 
            const InforNewName = ShortName[player.name]
            const fotoFinal = InforNew ? InforNew : player.photo;
            const endName = InforNewName ? InforNewName :player.name

            return (
 
        <div 
        key={player.id}
        draggable="false"
         className={`h-67 w-50 bg-linear-to-b from-gray-900 to-blue-900  mt-20 mb-10 relative flex  justify-evenly rounded-4xl flex-none select-none overflow-hidden   
          ${index === 0 ? 'ml-4' : 'ml-10'} 
        `}
        >
            <div 
            className={` absolute select-none w-full  bottom-0
            `}
            >           
              <img  
              src={fotoFinal}
              alt={player.name}
             className=' pointer-events-auto h-60 m-auto'
              >
              </img>
            </div>

            <div className="absolute inset-x-0  rounded-4xl  bottom-0 h-1/3 bg-linear-to-t from-blue-900 to-transparent ">
            </div>

        <div className=' absolute bottom-0  text-center text-3xl font-bold text-white mb-8 text-wrap select-none'>

            <h1>  
              {endName}</h1>

        </div>
        <div>
       {/* Si showModal es true, mostramos el modal */}     
       </div>  
          <MoreInformation onMoreInfo={() => handleMoreInfo(player)} />
      </div>            
         )})}
        {showModal && selectedPlayer && (
    
        //  MODAL CARTAS DE CARTAS (VENTANA EMERGENTE)
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg flex justify-center items-center h-full border-red-700 ">
          <div className='flex border bg-linear-to-b from-red-700 to-blue-900 gap-5 rounded-3xl p-3 bg-white select-none'> 
          <div>
            <img  
              src={SquadMap[selectedPlayer.name] || selectedPlayer.photo}
              alt={selectedPlayer.name}
             className=' pointer-events-auto h-60 m-auto '
              ></img>
          </div> 
          {/* <div className='h-full bg-amber-500 w-1 '></div> */}
          <div className="flex flex-col justify-between p-6 rounded-r-lg  border-3 border-transparent border-l-indigo-500 text-white text-xl font-semibold ">
           <h2 className="text-xl font-bold mb-2 text-center">{selectedPlayer.name}</h2>
            <p>Position: {selectedPlayer.position}</p>
            <p>Age: {selectedPlayer.age}</p>
            <p>Number: {selectedPlayer.number}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
        </div>
          
      )}

    </div>
    </div>
    </div>
  )
}

export default Scrolling