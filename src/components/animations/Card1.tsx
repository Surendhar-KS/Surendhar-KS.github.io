'use client';
import { motion, useTime, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Card1() {
  const time = useTime();
  // One full rotation every 20 seconds
  const rotate = useTransform(time, [0, 20000], [0, 360], { clamp: false });
  const counterRotate = useTransform(time, [0, 20000], [360, 0], { clamp: false }); 

  return (
    <div className="absolute inset-0 w-full h-full bg-white flex flex-col items-center overflow-hidden">
       {/* Background Mosaic Image */}
       <Image 
          src="/images/framer/mosaic-bg.png"
          alt="Mosaic Background"
          fill
          className="object-cover opacity-20 mix-blend-multiply"
       />

       {/* Text centered inside the arch */}
       <div className="absolute top-[48%] z-20 text-center w-full flex justify-center">
          <span className="text-[13px] font-medium text-[#7A8A9E]">100+ Apps Integration</span>
       </div>

       {/* SVG Orbit Arch with Gradient */}
       <svg className="absolute w-[500px] h-[500px] top-[18%] left-1/2 -translate-x-1/2 pointer-events-none" viewBox="0 0 500 500">
          <defs>
             <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF7A59" stopOpacity="0" />
                <stop offset="20%" stopColor="#FF7A59" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#FF7A59" stopOpacity="0.6" />
                <stop offset="80%" stopColor="#FF7A59" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF7A59" stopOpacity="0" />
             </linearGradient>
          </defs>
          <circle cx="250" cy="250" r="210" fill="none" stroke="url(#orbitGrad)" strokeWidth="48" />
       </svg>

       {/* Rotating Spheres Container */}
       <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] flex items-center justify-center">
          <motion.div style={{ rotate }} className="relative w-[420px] h-[420px]">
             
             {/* Sphere 1: Zoom */}
             <div className="absolute top-[-24px] left-1/2 -ml-[24px] w-[48px] h-[48px]">
               <motion.div style={{ rotate: counterRotate }} className="w-full h-full bg-gradient-to-br from-[#FFB199] via-[#FF5E3A] to-[#E02900] rounded-full shadow-[0_4px_20px_rgba(255,94,58,0.8),inset_0_3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
               </motion.div>
             </div>

             {/* Sphere 2: Gmail (M) */}
             <div className="absolute bottom-[-24px] left-1/2 -ml-[24px] w-[48px] h-[48px]">
               <motion.div style={{ rotate: counterRotate }} className="w-full h-full bg-gradient-to-br from-[#FFB199] via-[#FF5E3A] to-[#E02900] rounded-full shadow-[0_4px_20px_rgba(255,94,58,0.8),inset_0_3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25C4.15 8.09 4 7.82 4 7.53c0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"/>
                  </svg>
               </motion.div>
             </div>

             {/* Sphere 3: Calendar */}
             <div className="absolute top-1/2 left-[-24px] -mt-[24px] w-[48px] h-[48px]">
               <motion.div style={{ rotate: counterRotate }} className="w-full h-full bg-gradient-to-br from-[#FFB199] via-[#FF5E3A] to-[#E02900] rounded-full shadow-[0_4px_20px_rgba(255,94,58,0.8),inset_0_3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                  </svg>
               </motion.div>
             </div>

             {/* Sphere 4: Drive/Cloud */}
             <div className="absolute top-1/2 right-[-24px] -mt-[24px] w-[48px] h-[48px]">
               <motion.div style={{ rotate: counterRotate }} className="w-full h-full bg-gradient-to-br from-[#FFB199] via-[#FF5E3A] to-[#E02900] rounded-full shadow-[0_4px_20px_rgba(255,94,58,0.8),inset_0_3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>
                  </svg>
               </motion.div>
             </div>

          </motion.div>
       </div>
    </div>
  );
}
