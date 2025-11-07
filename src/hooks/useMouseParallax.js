import { useState, useEffect } from 'react';

/**
 * Custom hook for mouse parallax effect
 * @param {Object} options - Parallax options
 * @returns {Object} { x, y, handleMouseMove } - Parallax values and mouse handler
 */
const useMouseParallax = (options = {}) => {
  const { intensity = 0.1 } = options;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setPosition({
        x: x * intensity,
        y: y * intensity,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return position;
};

export default useMouseParallax;
