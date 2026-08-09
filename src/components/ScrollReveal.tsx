'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollReveal({ children, className, 'data-name': dataName }: { children: React.ReactNode, className?: string, 'data-name'?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const color = useTransform(scrollYProgress, [0, 1], ["#e5e7eb", "#111111"]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, '--reveal-color': color } as any}
      className={className}
      data-name={dataName}
    >
      {children}
    </motion.div>
  );
}