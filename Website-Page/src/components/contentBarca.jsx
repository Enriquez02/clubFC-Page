
// Div where show information about barca,their history, Johan Cruyff and The Masia

import { useState } from "react"
import  barca from "../assets/imgContentBarca/2009.jpg";
import history from "../assets/imgContentBarca/history.jpg";
import johan from "../assets/imgContentBarca/johan.jpg";
import masia from "../assets/imgContentBarca/masia.jpg"


const ContentBarca = () => {

  const clubInfo = [
      { id: 0, title: "Our Best Team", info1: "El mejor Barcelona de la historia fue el que dirigió Pep Guardiola entre 2008 y 2012, un equipo que marcó una época y cambió la forma de entender el fútbol. Su estilo se basaba en el tiki-taka, un juego de posesión, toques cortos y movimientos constantes, " , info2: " con el objetivo de dominar el balón y desgastar al rival. Este sistema no solo buscaba ganar, sino también hacerlo con belleza, precisión y control total del partido.", img : barca
   },
      { id: 1, title: "Our History", info1: "El FC Barcelona fue fundado en 1899. Desde sus inicios, el club se convirtió  en uno de los equipos más importantes de Europa. Ha tenido épocas doradas, especialmente con figuras como Johan Cruyff, quien introdujo el estilo de juego que marcaría al club." , info2: " Más tarde, el Barça vivió uno de sus momentos más exitosos, con jugadores como Messi, Xavi e Iniesta, practicando un fútbol admirado en todo el mundo.", img : history },
  
      { id: 2, title: "Cruyff's Legacy ", info1: "  Como jugador, introdujo una forma inteligente y técnica de entender el fútbol; pero como entrenador, revolucionó el estilo con su idea del “fútbol total”, basada en la posesión, la movilidad y la formación de jugadores con pensamiento creativo.",  img : johan },
  
      { id: 3, title: "La Masia", info1: "La Masia es la academia de formación del FC Barcelona y uno de los pilares más importantes de su éxito. Fundada oficialmente en 1979, su objetivo ha sido formar no solo grandes futbolistas, sino también personas con valores como la humildad, el respeto y el trabajo en equipo.", info2: " A través de su sistema de juego basado en la filosofía de Cruyff", img:masia }
    ];

    const [infor, setInfor] = useState(0);

  return (
        <div className='relative w-full h-full  flex justify-center py-15 items-center'> 
            <div 
                className='
                    relative 
                    w-3/4 max-w-4xl h-[450px] 
                    p-1                                  
                    rounded-3xl 
                    shadow-[16px_16px_20px_#0000008c]
                    overflow-hidden
                '
            >
                {/* 2. EL BORDE ANIMADO: APLICAMOS EL DOBLE COLOR */}
                <div 
                    className='
                        absolute inset-0 
                        rounded-3xl 
                        animate-spin-slow 
                        before:absolute before:-inset-full
                        
                      
                        before:bg-[conic-gradient(transparent_0deg,transparent_100deg,#f87171_180deg,#3b82f6_280deg,#f87171_360deg)] 
                    '
                />
                
                <div 
                    className="
                    shadow-[20px_20px_20px_#00000044_inset]
                        absolute inset-2              
                        rounded-[20px] 
                        bg-[#e9e5e5] 
                        grid md:grid-cols-2 md:divide-x divide-indigo-500
                    "
                >
                    <div className="p-3 m-auto hidden md:block ">
                        <img src={clubInfo[infor].img} className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"/>
                    </div>
                    
                    <div className="flex flex-col justify-evenly items-center p-4 md:px-0 " > 
                        <div className="text-center font-bold text-3xl font-serif">
                           <h2 >{clubInfo[infor].title}</h2>
                        </div>
                        
                        <div className="px-6 text-center ">
                            <p>{clubInfo[infor].info1}</p>
                            <p className="hidden sm:block" >{clubInfo[infor].info2}</p>
                        </div>
                        
                        <div className="flex justify-center gap-2 ">
                            {clubInfo.map((club,index) =>(
                                <span
                                    key = {club.id} 
                                    onClick = {() => setInfor(index)}
                                    className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-300 ${index === infor ? 'bg-black' : 'bg-gray-400 hover:bg-gray-600'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
  }

export default ContentBarca