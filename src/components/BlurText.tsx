import React, { useRef, useState, useEffect } from 'react';
import { motion, easeOut, useReducedMotion } from 'motion/react';

interface BlurTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
  highlightWord?: string;
  highlightClass?: string;
}

export default function BlurText({
  text,
  className = '',
  delayOffset = 0,
  highlightWord,
  highlightClass = '',
}: BlurTextProps) {
  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em',
      }}
    >
      {words.map((word, i) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z0-9]/g, '') ===
            highlightWord.toLowerCase().replace(/[^a-z0-9]/g, '');

        return (
          <motion.span
            key={`${word}-${i}`}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { filter: 'blur(8px)', opacity: 0, y: 30 }
            }
            animate={
              isVisible
                ? shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      filter: ['blur(8px)', 'blur(0px)'],
                      opacity: [0, 1],
                      y: [30, 0],
                    }
                : shouldReduceMotion
                ? { opacity: 0 }
                : { filter: 'blur(8px)', opacity: 0, y: 30 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.55,
              ease: easeOut,
              delay: delayOffset + (i * 65) / 1000,
            }}
            className={isHighlight ? highlightClass : undefined}
            style={{
              display: 'inline-block',
              marginRight: '0.28em',
              willChange: 'transform, opacity',
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

