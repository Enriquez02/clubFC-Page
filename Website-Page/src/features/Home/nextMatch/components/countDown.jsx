// COUNTDOWN PARA EL PRÓXIMO PARTIDO CON API DE FUTBOL


import { useEffect, useState } from "react";

function CountDown({matches}) {
       // trae el objeto de la API
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  // Encontrar el próximo partido
  useEffect(() => {
    if (!matches ) return;   // si no hay datos, salir

    const now = new Date();
    const nextMatch = matches.find(
      m => new Date(m.utcDate) > now
    );

    if (nextMatch) {
      setTargetDate(nextMatch.utcDate);
    }
  }, [matches]);

  // Actualizar countdown cada segundo
  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      // Calcular tiempo restante
      setTimeLeft(new Date(targetDate) - new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Formatear tiempo
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const time = formatTime(timeLeft);

  return (
    <div>
      {targetDate ? (

        <div className="flex items-center justify-center gap-2 font-bold ">
            <div>   
                <span className="text-4xl">{time.days}</span>   
                <div className="text-xs">{time.days > 1 ? "DAYS" : "DAY"}</div>
            </div>
            <div>       
                <span className="text-4xl">{time.hours}</span>
                <div className="text-xs">{time.hours > 1 ? "HOURS" : "HOUR"}</div>
            </div>
            <div>
                <span className="text-4xl">{time.minutes}</span>   
                <div className="text-xs">MIN</div>
            </div>
            <div>
                <span className="text-4xl">{time.seconds}</span>
                <div className="text-xs">SEC</div>
            </div>
        </div>
      ) : (
        "No hay próximos partidos"
      )}
    </div>
  );
}

export default CountDown;
