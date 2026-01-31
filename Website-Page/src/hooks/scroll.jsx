import { useState, useRef } from "react";

//Como para scrollear con el mouse

const useScrollDrag = () => {

// ARRASTRE
const containerRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);

const handleMouseDown = (e) => {
setIsDragging(true);
setStartX(e.clientX - containerRef.current.offsetLeft);
setScrollLeft(containerRef.current.scrollLeft); // Posición inicial del scroll
containerRef.current.style.cursor = 'grabbing'; // Feedback visual
};

const handleMouseUp = () => {
setIsDragging(false); // Detenemos el arrastre
containerRef.current.style.cursor = 'grab'; // Volvemos al cursor normal de arrastre
};

const handleMouseMove = (e) => {
if (!isDragging) return; // Solo funciona si el mouse está presionado
e.preventDefault(); // Evita que se seleccione el texto
const x = e.clientX - containerRef.current.offsetLeft ;
const distance = (x - startX) *2 ; // Distancia arrastrada
containerRef.current.scrollLeft = scrollLeft - distance

}
return (
{ containerRef,
handleMouseDown,
handleMouseUp,
handleMouseMove,
handleMouseLeave: handleMouseUp,
}
)
}

export default useScrollDrag;