'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export function Spotlight({
  className = '',
  size = 200,
}: {
  className?: string;
  size?: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    let angle = 0;
    
    const animate = () => {
      const parent = ref.current?.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Move along the perimeter
        const radiusX = rect.width / 2;
        const radiusY = rect.height / 2;
        
        angle += 0.015;
        mouseX.set(centerX + Math.cos(angle) * radiusX);
        mouseY.set(centerY + Math.sin(angle) * radiusY);
      }
      frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(frameId);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className={`pointer-events-none absolute rounded-full opacity-100 bg-gradient-to-r ${className}`}
      style={{
        width: size,
        height: size,
        left: useTransform(mouseX, x => x - size / 2),
        top: useTransform(mouseY, y => y - size / 2),
      }}
    />
  );
}
