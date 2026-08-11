'use client';

import React from 'react';
import { motion } from 'framer-motion';

type GlowEffectProps = {
  colors?: string[];
  mode?: 'colorShift' | 'pulse';
  blur?: 'medium' | 'high';
  duration?: number;
};

export function GlowEffect({
  colors = ['#0894FF', '#C959DD', '#FF2E54', '#FF9004'],
  duration = 4,
}: GlowEffectProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`;
  
  return (
    <motion.div
      className="absolute -inset-[2px] rounded-[inherit]"
      style={{
        background: gradient,
        backgroundSize: '200% 200%',
        filter: 'blur(14px)',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '200% 50%'],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}
