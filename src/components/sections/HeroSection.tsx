'use client';
import { motion } from "framer-motion";
import ScrollAvatar from "../ScrollAvatar";

export default function HeroSection() {
  return (
    <div className="flex h-[900px] w-full items-center justify-center relative shrink-0" data-name="Hero Section">
      <div className="flex h-full w-full max-w-[1180px] items-center relative shrink-0">
        
        {/* Title Group */}
        <div 
          className="relative flex flex-col items-center justify-center w-full mb-8 -mt-8 md:-mt-[80px]" 
        >
          <div className="relative flex flex-col items-center">
            {/* Star */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 3, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-6 md:-left-[115px] -top-8 md:-top-[60px] w-[55px] md:w-[110px] z-10"
            >
              <img src="/images/star.webp" alt="Star" className="w-full h-auto drop-shadow-2xl animate-pulse" />
            </motion.div>
            
            {/* Text */}
            <motion.h1 
              initial={{ color: '#d1d5db', y: 40, opacity: 0 }}
              animate={{ color: '#111111', y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Archivo:ExtraBold',sans-serif] font-extrabold text-[52px] md:text-[174px] leading-[0.85] tracking-[-0.04em] text-center m-0 z-0 relative"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              SOFT<span className="ml-[0.06em]">W</span>ARE<br/>ENGINEER
            </motion.h1>
            
            {/* Lightning Bolt */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 24, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -right-6 md:-right-[115px] -bottom-6 md:-bottom-[50px] w-[50px] md:w-[100px] z-[50] drop-shadow-2xl"
            >
              <img src="/images/lightning.webp" alt="Lightning" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Text Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }} 
          className="absolute bottom-[20px] left-0 right-0 flex items-end justify-between px-6 md:px-0"
        >
          <div className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#111] text-[32px] md:text-[68px] tracking-[-1.36px] leading-none" style={{ fontVariationSettings: '"wdth" 100' }}>
            ©2026
          </div>
          <div className="font-['Archivo:Regular',sans-serif] font-normal text-[#111] text-[14px] md:text-[18px] tracking-[-0.72px] leading-none" style={{ fontVariationSettings: '"wdth" 100' }}>
            SURENDHAR K
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
