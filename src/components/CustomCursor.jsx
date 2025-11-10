import { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default'); // 'default', 'image', 'video', 'transparent', 'play-video'
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const dotPositionRef = useRef({ x: 0, y: 0 });
  const cursorTypeRef = useRef('default');
  const isVisibleRef = useRef(false);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;

    const updateMousePosition = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        // Start animation when mouse first moves
        if (!isAnimatingRef.current) {
          isAnimatingRef.current = true;
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      }
    };

    // Smooth animation for dot following - runs continuously
    const animate = () => {
      if (!isVisibleRef.current) {
        isAnimatingRef.current = false;
        return;
      }

      const currentX = dotPositionRef.current.x;
      const currentY = dotPositionRef.current.y;
      
      const newX = currentX + (targetX - currentX) * 0.15;
      const newY = currentY + (targetY - currentY) * 0.15;
      
      dotPositionRef.current = { x: newX, y: newY };
      setDotPosition({ x: newX, y: newY });
      
      // Always continue animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop immediately
    isAnimatingRef.current = true;
    animationFrameRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e) => {
      const target = e.target;
      let newType = 'default';
      
      // Check if hovering over video
      if (target.tagName === 'VIDEO' || target.closest('video')) {
        newType = 'video';
      }
      // Check if hovering over image
      else if (target.tagName === 'IMG' || target.closest('img')) {
        newType = 'image';
      }
      // Check if hovering over elements with data-cursor attribute
      else if (target.hasAttribute('data-cursor')) {
        const cursorAttr = target.getAttribute('data-cursor');
        if (cursorAttr === 'video') newType = 'video';
        else if (cursorAttr === 'image') newType = 'image';
        else if (cursorAttr === 'transparent') newType = 'transparent';
        else if (cursorAttr === 'play-video') newType = 'play-video';
      }
      
      // Only update if type changed
      if (cursorTypeRef.current !== newType) {
        cursorTypeRef.current = newType;
        setCursorType(newType);
      }
    };

    // Add event listeners with throttling
    let rafId = null;
    const throttledMouseMove = (e) => {
      updateMousePosition(e);
      handleMouseMove(e);
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });

    // Use event delegation instead of adding listeners to each element
    const handleMouseOver = (e) => {
      const target = e.target;
      let newType = 'default';
      
      if (target.tagName === 'VIDEO' || target.closest('video')) {
        newType = 'video';
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        newType = 'image';
      } else if (target.hasAttribute('data-cursor')) {
        const cursorAttr = target.getAttribute('data-cursor');
        if (cursorAttr === 'video') newType = 'video';
        else if (cursorAttr === 'image') newType = 'image';
        else if (cursorAttr === 'transparent') newType = 'transparent';
        else if (cursorAttr === 'play-video') newType = 'play-video';
      }
      
      if (cursorTypeRef.current !== newType) {
        cursorTypeRef.current = newType;
        setCursorType(newType);
      }
    };

    const handleMouseOut = () => {
      if (cursorTypeRef.current !== 'default') {
        cursorTypeRef.current = 'default';
        setCursorType('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);

    // Hide cursor when mouse leaves window
    const handleMouseLeaveWindow = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isAnimatingRef.current = false;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot that follows smoothly */}
      <div
        className={`custom-cursor-dot ${cursorType === 'image' || cursorType === 'video' || cursorType === 'transparent' || cursorType === 'play-video' ? 'dot-hover' : ''}`}
        style={{
          transform: `translate(calc(${dotPosition.x}px - 50%), calc(${dotPosition.y}px - 50%))`,
        }}
      />
      
      {/* Rounded cursor for images, videos, transparent elements, and play-video */}
      {(cursorType === 'image' || cursorType === 'video' || cursorType === 'transparent' || cursorType === 'play-video') && (
        <div
          className={`custom-cursor-circle ${
            cursorType === 'image' ? 'cursor-image' : 
            cursorType === 'video' ? 'cursor-video' : 
            cursorType === 'play-video' ? 'cursor-play-video' :
            'cursor-transparent'
          }`}
          style={{
            transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
          }}
        >
          {cursorType === 'play-video' && (
            <span className="cursor-play-video-text">PLAY VIDEO</span>
          )}
        </div>
      )}
    </>
  );
};

export default CustomCursor;