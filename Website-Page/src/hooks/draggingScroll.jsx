import { useRef } from "react";

const useScrollDrag = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    startX.current = e.clientX - container.offsetLeft;
    scrollStart.current = container.scrollLeft;
    container.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = false;
    container.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!isDragging.current || !container) return;

    e.preventDefault();
    const x = e.clientX - container.offsetLeft;
    const distance = (x - startX.current) * 2;
    container.scrollLeft = scrollStart.current - distance;
  };

  return {
    containerRef,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleMouseLeave: handleMouseUp,
  };
};

export default useScrollDrag;
