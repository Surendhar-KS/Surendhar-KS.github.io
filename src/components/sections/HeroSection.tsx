'use client';
import { motion } from "framer-motion";
import ScrollAvatar from "../ScrollAvatar";

export default function HeroSection() {
  return (
    <div className="flex min-h-[100vh] lg:h-[900px] w-full items-center justify-center relative shrink-0" data-name="Hero Section">
      <div className="flex h-full w-full max-w-[1180px] items-center relative shrink-0">
        
        {/* Title Group */}
        <div 
          className="relative flex flex-col items-center justify-center w-full mb-8 -mt-[60px] md:-mt-[140px]" 
        >
          <div className="relative flex flex-col items-center px-2 sm:px-4">
            {/* Star */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 3, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 sm:left-2 md:-left-[115px] -top-9 sm:-top-12 md:-top-[60px] w-[36px] sm:w-[50px] md:w-[110px] z-10"
            >
              <img src="/images/star.webp" alt="Star" className="w-full h-auto drop-shadow-2xl animate-pulse" />
            </motion.div>
            
            {/* Text */}
            <motion.h1 
              initial={{ color: '#d1d5db', y: 40, opacity: 0 }}
              animate={{ color: '#111111', y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Archivo:ExtraBold',sans-serif] font-extrabold text-[11vw] sm:text-[60px] md:text-[140px] lg:text-[150px] leading-[0.85] tracking-[-0.04em] text-center m-0 z-0 relative"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <span className="sr-only">Surendhar K - Software Developer</span>
              <span aria-hidden="true">
                <span className="inline-block md:inline whitespace-nowrap">SURENDHAR K</span>
                <br/>
                <span className="flex flex-row items-center justify-center gap-[100px] sm:gap-[140px] md:gap-[240px] text-[4.5vw] sm:text-[24px] md:text-[50px] lg:text-[60px] mt-6 md:mt-12 w-full">
                  <span>SOFTWARE</span>
                  <span>DEVELOPER</span>
                </span>
              </span>
            </motion.h1>
            
            {/* Lightning Bolt */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 24, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-4 sm:right-6 md:-right-[60px] -bottom-2 sm:-bottom-4 md:-bottom-[10px] w-[32px] sm:w-[45px] md:w-[100px] z-[50] drop-shadow-2xl"
            >
              <img src="/images/lightning.webp" alt="Lightning" className="w-full h-auto animate-pulse" />
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
          <div className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#111] text-[28px] sm:text-[32px] md:text-[68px] tracking-[-1.36px] leading-none" style={{ fontVariationSettings: '"wdth" 100' }}>
            ©2026
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
