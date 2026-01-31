// React page where you can informate about how i made the scrolling and dragging

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