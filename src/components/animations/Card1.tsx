'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Card1() {
  return (
    <div className="absolute inset-0 w-full h-full bg-white flex flex-col items-center justify-center overflow-hidden">
       {/* Background Mosaic Image */}
       <Image 
          src="/images/framer/mosaic-bg.png"
          alt="Mosaic Background"
          fill
          className="object-cover opacity-80"
       />

       {/* Floating Integration Pill */}
       <motion.div 
         initial={{ y: 20, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
         className="relative z-10 px-4 py-2 bg-white rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-gray-100 flex items-center justify-center"
       >
          <span className="text-sm font-medium text-black/70">100+ Apps Integration</span>
       </motion.div>

       {/* Decorative curved arrow */}
       <motion.div
         initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
         whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
         transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
         className="absolute right-[20%] top-[60%] w-16 h-16 text-black/20"
       >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M10 90 Q 50 10 90 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" fill="none" />
             <path d="M75 50 L 90 50 L 85 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
       </motion.div>
    </div>
  );
}
