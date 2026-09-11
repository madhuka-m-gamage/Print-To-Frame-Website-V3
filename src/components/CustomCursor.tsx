import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Identify interactive elements
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.classList.add('cursor-none'); // Disable default cursor for the body

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('cursor-none');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#00daf3] rounded-full pointer-events-none z-[10000]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
      />
      
      {/* Expanding Targeting Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[10000] flex items-center justify-center mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.6 : 1,
          backgroundColor: isHovering ? 'rgba(0, 218, 243, 0.05)' : 'transparent',
          borderColor: isHovering ? 'rgba(0, 218, 243, 0.6)' : 'rgba(0, 218, 243, 0.3)'
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.2 }}
      >
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute w-full h-full"
          >
            {/* Crosshair marks */}
            <div className="absolute top-1/2 left-0 w-1.5 h-[1px] bg-[#00daf3] -translate-y-1/2 -translate-x-0.5" />
            <div className="absolute top-1/2 right-0 w-1.5 h-[1px] bg-[#00daf3] -translate-y-1/2 translate-x-0.5" />
            <div className="absolute top-0 left-1/2 w-[1px] h-1.5 bg-[#00daf3] -translate-x-1/2 -translate-y-0.5" />
            <div className="absolute bottom-0 left-1/2 w-[1px] h-1.5 bg-[#00daf3] -translate-x-1/2 translate-y-0.5" />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
