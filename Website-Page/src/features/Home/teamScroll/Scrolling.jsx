// main team page 


import { useEffect, useState } from 'react';
import axios from 'axios';
import { SquadMap, ShortName, excludedPlayer } from './Squad.jsx';
import useScrollDrag from './Scrollear.jsx';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import MoreInformation from './popUpWindow.jsx';
import { getSquad } from '../../../services/squad/squadApi.jsx';

const Scrolling = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleMoreInfo = (player) => {
    setSelectedPlayer(player);
    setShowModal(true);
  };

  const ITEM_WIDTH = 800;

  useEffect(() => {
    const fetchSquad = async () => {
      const teamInfo = await getSquad();   // <--- AQUÍ LO LLAMAS
      setData(teamInfo);
      setIsLoading(false);
    };

    fetchSquad();
  }, []);

  const { 
    containerRef, handleMouseDown, handleMouseUp, handleMouseMove, 
    handleMouseLeave, handleScroll 
  } = useScrollDrag();

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="relative">
      <div className='absolute left-1/2 transform -translate-x-1/2 top-5 text-center w-[225px] select-none'>
        <h2 className='text-4xl font-semibold'>BARÇA TEAM</h2>
      </div>

      {/* Scroll buttons */}
      <div className='hidden sm:flex absolute top-5 right-10 gap-x-2'>
        <button className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-blue-800/60'
          onClick={() => handleScroll(-ITEM_WIDTH)}>
          <GoArrowLeft className='h-7 w-7 text-gray-500' />
        </button>
        <button className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-blue-800/60'
          onClick={() => handleScroll(ITEM_WIDTH)}>
          <GoArrowRight className='h-7 w-7 text-gray-500' />
        </button>
      </div>

      {/* Scrollable squad */}
      <div 
        ref={containerRef}
        onMouseDown={showModal ? undefined : handleMouseDown}
        onMouseUp={showModal ? undefined : handleMouseUp}
        onMouseLeave={showModal ? undefined : handleMouseLeave}
        onMouseMove={showModal ? undefined : handleMouseMove}
        className="bg-white mx-1 p-5 flex overflow-x-scroll whitespace-nowrap cursor-grab rounded-b-2xl scrollbar-thin [&::-webkit-scrollbar]:hidden sm:mx-5"
      >
        {data
          .filter(player => !excludedPlayer.some(ex => String(ex.id) === String(player.id)))
            .sort((a, b) => {
                    const order = [ "Goalkeeper","Defence","Left-Back", "Centre-Back","Right-Back","Midfield","Central Midfield","Attacking Midfield","Defensive Midfield", "Offence","Left Winger","Right Winger","Centre-Forward"
];
                    return order.indexOf(a.position) - order.indexOf(b.position);
               })

          .map((player, index) => {
            const fotoFinal = SquadMap[player.name] || 'https://via.placeholder.com/100';
            const endName = ShortName[player.name] || player.name;

            return (
              <div 
                key={player.id}
                draggable="false"
                className={`h-67 w-50 bg-linear-to-b from-gray-900 to-blue-900 mt-20 mb-10 relative flex justify-evenly rounded-4xl flex-none select-none overflow-hidden ${index === 0 ? 'ml-4' : 'ml-10'}`}
              >
                <div className='absolute select-none w-full bottom-0'>
                  <img src={fotoFinal} alt={player.name} className='pointer-events-auto h-60 m-auto' />
                </div>

                <div className="absolute inset-x-0 rounded-4xl bottom-0 h-1/3 bg-linear-to-t from-blue-900 to-transparent"></div>

                <div className='absolute bottom-0 text-center text-3xl font-bold text-white mb-8 text-wrap select-none'>
                  {endName}
                </div>

                <MoreInformation onMoreInfo={() => handleMoreInfo(player)} />
              </div>
            )
          })}
      </div>

      {/* Modal */}
      {showModal && selectedPlayer && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-lg flex justify-center items-center">
          <div className='flex borde bg-linear-to-b from-red-700 to-blue-900 gap-5 rounded-3xl p-3 bg-white select-none '>
            <div className='m-auto'>
              <img src={SquadMap[selectedPlayer.name]} alt={selectedPlayer.name} className='pointer-events-auto h-60 m-auto' />
            </div>
            <div className="flex flex-col justify-between p-6 rounded-r-lg border-l-indigo-500 text-white text-xl font-semibold">
              <h2 className="text-3xl font-bold mb-2 text-center">{selectedPlayer.name}</h2>
              <p>Position: {selectedPlayer.position}</p>
              <p>Birth: {selectedPlayer.dateOfBirth}</p>
              <p>Nationality: {selectedPlayer.nationality}</p>
              <button onClick={() => setShowModal(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Scrolling;
