'use client';
import { motion } from 'framer-motion';

export default function Card1() {
  return (
    <div className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-end overflow-hidden pt-12 px-6">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: false, margin: "-50px" }}
        className="w-full h-[85%] bg-white rounded-t-xl border border-gray-200 shadow-xl flex flex-col overflow-hidden"
      >
        {/* Header bar */}
        <div className="w-full h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        
        {/* Editor Body */}
        <div className="flex-1 p-6 flex flex-col gap-4 relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '40%' }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false }}
            className="h-4 bg-gray-200 rounded-full"
          />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: false }}
            className="h-3 bg-gray-100 rounded-full"
          />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60%' }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: false }}
            className="h-3 bg-gray-100 rounded-full"
          />
          
          <div className="mt-8 flex gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              viewport={{ once: false }}
              className="w-16 h-16 bg-[#faf7f3] rounded-lg border border-gray-200 flex items-center justify-center shadow-sm"
            >
               <div className="w-8 h-8 rounded-full bg-[#0B3B24]/10"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: 'spring' }}
              viewport={{ once: false }}
              className="w-16 h-16 bg-[#faf7f3] rounded-lg border border-gray-200 flex items-center justify-center shadow-sm"
            >
               <div className="w-6 h-6 bg-[#0B3B24]/10 rounded"></div>
            </motion.div>
          </div>
          
          {/* Decorative cursor */}
          <motion.div
            initial={{ x: 100, y: 100, opacity: 0 }}
            whileInView={{ x: 30, y: 10, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8, type: 'spring', bounce: 0.2 }}
            viewport={{ once: false }}
            className="absolute right-12 bottom-12 w-6 h-6 text-[#0B3B24] drop-shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 01.35-.15h6.87a.5.5 0 00.35-.85L5.5 3.21z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
