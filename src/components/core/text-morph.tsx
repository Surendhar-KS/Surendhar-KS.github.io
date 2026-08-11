'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

export function TextMorph({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={String(children)}
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="inline-block"
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
