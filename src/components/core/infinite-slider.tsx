'use client';

import React from 'react';
import { motion } from 'framer-motion';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  reverse?: boolean;
  className?: string;
  duration?: number;
};

export function InfiniteSlider({
  children,
  gap = 24,
  reverse = false,
  className = '',
  duration = 40,
}: InfiniteSliderProps) {
  return (
    <div className={`overflow-hidden flex w-full relative ${className}`}>
      <motion.div
        className="flex shrink-0 items-center w-max"
        style={{ gap: `${gap}px` }}
        animate={{
          x: reverse ? [`calc(-50% - ${gap / 2}px)`, 0] : [0, `calc(-50% - ${gap / 2}px)`],
        }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <div className="flex shrink-0 items-center w-max" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex shrink-0 items-center w-max" style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
