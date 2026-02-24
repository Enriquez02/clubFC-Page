import { useRef } from "react";

const useScrollarrow = (externalRef) => {
  const localRef = useRef(null);
  const containerRef = externalRef || localRef;

  const handleScrollArrow = (itemWidth, duration = 800) => {
    const container = containerRef.current;
    if (!container) return;

    const start = container.scrollLeft;
    const target = start + itemWidth;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      container.scrollLeft = start + (target - start) * ease;

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return { containerRef, handleScrollArrow };
};

export default useScrollarrow;
