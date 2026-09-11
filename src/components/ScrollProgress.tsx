import { motion, useScroll, useSpring } from 'motion/react';
import React from 'react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00daf3] via-white to-[#00daf3] origin-left z-[9999] shadow-[0_0_12px_rgba(0,218,243,0.8)] pointer-events-none"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
