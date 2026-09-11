import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ 
  value, 
  decimals = 0, 
  prefix = '', 
  suffix = '', 
  duration = 2 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    bounce: 0,
    duration: duration * 1000,
  });

  // Use transform to format the number
  const display = useTransform(spring, (current) => {
    // Add comma separators for large numbers
    const formattedNumber = current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return prefix + formattedNumber + suffix;
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [inView, spring, value, hasAnimated]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
