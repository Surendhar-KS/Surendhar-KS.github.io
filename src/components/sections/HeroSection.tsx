'use client';
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="flex min-h-[100vh] lg:h-[900px] w-full items-center justify-center relative shrink-0" data-name="Hero Section">
      <div className="flex flex-col justify-between items-center w-full max-w-[1180px] h-full min-h-[100vh] lg:min-h-0 relative shrink-0 px-6 lg:px-0">
        
        {/* Top spacer for navbar clearance */}
        <div className="h-[60px] md:h-[80px] w-full shrink-0" />

        {/* Title Group */}
        <div 
          className="relative flex flex-col items-center justify-center w-full mt-auto mb-0 py-6 md:py-10" 
        >
          <div className="relative flex flex-col items-center px-4 sm:px-6 md:px-0">
            {/* Star */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -20, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 3, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-2 sm:-left-4 md:-left-[70px] lg:-left-[100px] xl:-left-[115px] -top-5 sm:-top-7 md:-top-[40px] lg:-top-[50px] xl:-top-[60px] w-[26px] sm:w-[36px] md:w-[65px] lg:w-[95px] xl:w-[110px] z-10 pointer-events-none select-none"
            >
              <img src="/images/star.webp" alt="Star" className="w-full h-auto drop-shadow-2xl animate-pulse" />
            </motion.div>
            
            {/* H1 - SURENDHAR K */}
            <motion.h1 
              initial={{ color: '#d1d5db', y: 40, opacity: 0 }}
              animate={{ color: '#111111', y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Archivo:ExtraBold',sans-serif] font-extrabold text-[10vw] sm:text-[52px] md:text-[90px] lg:text-[112px] xl:text-[134px] leading-[0.9] tracking-[-0.03em] text-center m-0 z-0 relative select-none whitespace-nowrap"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <span className="sr-only">Surendhar K - Software Developer</span>
              <span aria-hidden="true">SURENDHAR K</span>

              {/* Lightning Bolt — anchored to right edge of K, dropped to subtitle level */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.5, rotate: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, rotate: 24, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -right-[26px] sm:-right-[34px] md:-right-[55px] lg:-right-[70px] xl:-right-[85px] top-full mt-[6px] sm:mt-[8px] md:mt-[12px] lg:mt-[16px] xl:mt-[20px] w-[20px] sm:w-[28px] md:w-[50px] lg:w-[75px] xl:w-[95px] z-[50] drop-shadow-2xl pointer-events-none select-none inline-block"
              >
                <img src="/images/lightning.webp" alt="Lightning" className="w-full h-auto animate-pulse" />
              </motion.span>
            </motion.h1>

            {/* Subtitle - SOFTWARE DEVELOPER */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#555] text-[3.2vw] sm:text-[16px] md:text-[24px] lg:text-[30px] xl:text-[36px] tracking-[0.2em] md:tracking-[0.3em] text-center mt-3 sm:mt-4 md:mt-6 lg:mt-8 uppercase select-none"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              SOFTWARE DEVELOPER
            </motion.p>
          </div>
        </div>

        {/* Spacer to keep text above the image card */}
        <div className="h-[180px] sm:h-[220px] md:h-[320px] w-full shrink-0" />

        {/* Bottom Text Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }} 
          className="w-full flex items-end justify-start pb-6 md:pb-8 lg:pb-[24px] pointer-events-none z-10"
        >
          <div className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#111] text-[24px] sm:text-[32px] md:text-[48px] lg:text-[68px] tracking-[-1.36px] leading-none" style={{ fontVariationSettings: '"wdth" 100' }}>
            ©2026
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
