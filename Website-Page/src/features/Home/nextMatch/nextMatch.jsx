import CountDown from "./components/countDown";
import useScrollDrag from "../../../hooks/scroll"; // Asegúrate de que la ruta sea correcta


const NextMatch = ({ matches }) => {
  const now = new Date();
 const nextMatch = matches
  .filter(m => new Date(m.utcDate) > now)
  .slice(0, 3);
  
  // Llamamos a tu custom hook
  const { containerRef, handleMouseDown, handleMouseUp, handleMouseMove, handleMouseLeave } = useScrollDrag();

  if (!nextMatch) {
    return <div className="bg-amber-400 p-4 rounded-lg">No hay próximos partidos.</div>;
  }

  return (
    <div className="p-3 rounded-lg overflow-hidden w-full">
      
      {/* Título y Cuenta Regresiva */}
      <div className="flex items-center mb-4 sm:ml-10 text-white">
        <h3 className="text-2xl font-bold mr-4 pl-3">Próximo partido</h3>
        <CountDown matches={nextMatch} />
      </div>

      {/* CONTENEDOR CON ARRASTRE Y SCROLL */}
      <div 
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex overflow-x-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide gap-4 p-4 cursor-grab active:cursor-grabbing select-none"
      >

        {nextMatch.map((match, index) => (
  <div 
    key={match.id || index} 
    className="border rounded-3xl w-80 md:w-96 shrink-0 snap-start text-center bg-blue-950"
  >
    {/* Título de la competición */}
    <div className="text-white pt-3 text-lg">
      {match.competition?.name || "Partido"}
    </div>

    {/* Equipos y Escudos */}
    <div className="font-bold flex items-center justify-center gap-2 px-4 py-2 text-white">
      <img src={match.homeTeam.crest} alt="home" className="h-12 w-12 " draggable="false"/>
      <span>{match.homeTeam.shortName || match.homeTeam.name} vs {match.awayTeam.shortName || match.awayTeam.name}</span>
      <img src={match.awayTeam.crest} alt="away" className="h-12 w-12" draggable="false"/>
    </div>

    <div className="mt-1.5 text-white text-xl pb-4">
      {new Date(match.utcDate).toLocaleString([], { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}
    </div>

    {/* Pie de tarjeta con Jornada */}
    <div className="flex items-center justify-evenly py-5 bg-gray-200 rounded-b-3xl">
      <img src={match.competition.emblem} alt="comp" className="h-10 w-10"/>
      <span className="font-bold text-xl text-black"> MatchDay {match.matchday}</span>
    </div>
  </div>
))}        
      </div>
    </div>
  );
}

export default NextMatch;