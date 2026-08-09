'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChatAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FAFEFF] via-[#B9E7FA] to-[#8BDEFC] flex flex-col items-center justify-center overflow-hidden">
       {/* Background Mosaic Image */}
       <Image 
          src="/images/framer/mosaic-bg.png"
          alt="Mosaic Background"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
       />

       <div className="relative z-10 w-full max-w-[240px] flex flex-col gap-4 pt-8">
          
          {/* Bubble 1 (White) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring', bounce: 0.3 }}
            className="w-full bg-white rounded-lg shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-3 flex items-center justify-between"
          >
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden relative border border-gray-100">
                   <Image src="/images/framer/ryan-avatar.png" alt="Ryan Patel" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-semibold text-black">Ryan Patel</span>
                   <span className="text-[10px] text-black/50">Shared final context</span>
                </div>
             </div>
             <span className="text-[9px] text-black/40">Just Now</span>
          </motion.div>

          {/* Bubble 2 (Blue Gradient) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5, type: 'spring', bounce: 0.3 }}
            className="w-full bg-gradient-to-r from-[#37CAFF] to-[#00BBFF] rounded-lg shadow-[0_4px_24px_rgba(0,187,255,0.2)] p-3 flex items-center justify-between border border-[#1AC2FF]"
          >
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden relative border border-white/20">
                   <Image src="/images/framer/ryan-avatar.png" alt="Ryan Patel" fill className="object-cover" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-semibold text-white">Ryan Patel</span>
                   <span className="text-[10px] text-white/70">Shared final context</span>
                </div>
             </div>
             <span className="text-[9px] text-white/60">Just Now</span>
          </motion.div>
          
       </div>
    </div>
  );
}
