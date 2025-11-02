import { useState, useRef } from "react";


//Como para scrollear con el mouse
const useScrollDrag = () => {
 
  // ARRASTRE 
       // // Scroll Squad
      const containerRef = useRef(null); 
     // //   Un interruptor que dice: "¿Está el botón del mouse presionado? (true o false)"
     const [isDragging, setIsDragging] = useState(false);
     // Guarda la posición horizontal donde el mouse empezó el clic.
     const [startX, setStartX] = useState(0);
     // Guarda dónde estaba la lista antes de empezar a arrastrarla.
     const [scrollLeft, setScrollLeft] = useState(0);
 
        const handleMouseDown = (e) => {
         setIsDragging(true); // Empezamos a arrastrar
         // Tanto e.clientX como containerRef.current.offsetLeft son propiedades de JavaScript que te dan la posición exacta de elementos en la pantalla.
         setStartX(e.clientX - containerRef.current.offsetLeft); // Posición inicial del cursor
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


    //  CON FLECHAS
     const handleScroll = (item_width) => {
          const container = containerRef.current 
          const newScroll = container.scrollLeft + item_width 
          smoothScroll(container, newScroll)
      }
   
     const smoothScroll = (element, target, duration = 2000) => {
        const start = element.scrollLeft
       const distance = target - start
       const startTime = performance.now()
   
       const animate = (currentTime) => {
   
         const elapsed = currentTime - startTime
         // 
         const progress = Math.min(elapsed / duration, 1)
         // función de easing (más natural que lineal)
         const ease = 1 - Math.pow(1 - progress, 3)
         element.scrollLeft = start + distance * ease
   
         if (progress < 1) requestAnimationFrame(animate)
       }
   
       requestAnimationFrame(animate)
     }
 
     return (
     {
    containerRef,
         handleMouseDown,
         handleMouseUp,
         handleMouseMove,
         handleMouseLeave: handleMouseUp,
         handleScroll
       
 }
   )

 }
 
 

export default useScrollDrag;