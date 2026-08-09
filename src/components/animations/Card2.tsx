'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const CAROUSEL_ITEMS = [
  {
    title: 'Oracle Cloud',
    desc: 'Infrastructure',
    icon: (
       <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
    )
  },
  {
    title: 'Generative AI',
    desc: 'Professional',
    icon: (
       <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path></svg>
    )
  },
  {
    title: 'Verified',
    desc: 'Credential',
    icon: (
       <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
    )
  },
  {
    title: 'OCI',
    desc: 'Cloud Technologies',
    icon: (
       <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"></path></svg>
    )
  }
];

export default function Card2() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#fcfdfd] flex flex-col items-center justify-center overflow-hidden">
       <div className="relative z-10 w-full h-full flex flex-col items-center justify-center py-6 px-6">
          
          {/* Top text content container */}
          <div className="w-[240px] h-[90px] bg-white rounded-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.12)] p-4 relative overflow-hidden flex flex-col justify-center border-t-2 border-t-[#F80000]">
             
             {/* Oracle Red Accent inside the card */}
             <div className="absolute top-2 right-3">
                <span className="text-[8px] font-bold text-[#F80000] uppercase tracking-wider">Oracle</span>
             </div>

             {CAROUSEL_ITEMS.map((item, idx) => {
               // Calculate relative position for the scroll effect
               let offset = idx - activeIndex;
               if (offset < -1) offset += CAROUSEL_ITEMS.length;
               if (offset > 1) offset -= CAROUSEL_ITEMS.length;

               let y = offset * 40; // Pixel offset vertically
               let opacity = offset === 0 ? 1 : (offset === 1 ? 0.3 : 0);
               let scale = offset === 0 ? 1 : 0.95;

               return (
                  <motion.div
                    key={idx}
                    animate={{ y, opacity, scale }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-4 right-4 flex flex-col gap-0.5"
                    style={{ pointerEvents: offset === 0 ? 'auto' : 'none' }}
                  >
                     <h3 className="text-[14px] font-bold text-black tracking-tight">{item.title}</h3>
                     <p className="text-[10px] leading-[1.35] text-black/60">{item.desc}</p>
                  </motion.div>
               );
             })}
          </div>
             
          {/* Dotted connector line */}
          <div className="w-[2px] h-14 border-l-[2px] border-dashed border-[#8BDEFC] shadow-[0_0_12px_rgba(0,187,255,0.3)]"></div>

          {/* Bottom Nav Pill */}
          <div className="relative w-[230px] h-[52px] bg-[#B9E7FA] rounded-full flex items-center justify-center gap-3 shadow-[0_2px_8px_rgba(0,187,255,0.2)] overflow-hidden">
             
             {/* Mosaic Background overlay for the pill */}
             <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none">
                <Image src="/images/framer/mosaic-bg.png" alt="Mosaic" fill className="object-cover" />
             </div>

             {CAROUSEL_ITEMS.map((item, i) => {
               const isActive = i === activeIndex;
               return (
                 <div 
                   key={i} 
                   className="relative w-9 h-9 flex items-center justify-center cursor-pointer transition-all duration-300 z-10"
                   onClick={() => setActiveIndex(i)}
                 >
                   {/* Background circle of the icon */}
                   <motion.div
                      layout
                      className={`absolute inset-0 rounded-full transition-all duration-500 ${isActive ? 'bg-white shadow-[0_0_0_4px_rgba(0,187,255,0.5)] scale-110' : 'bg-white scale-100'}`}
                   />
                   <span className={`relative z-20 transition-colors duration-300 w-5 h-5 flex items-center justify-center ${isActive ? 'text-[#00BBFF]' : 'text-[#8BDEFC]'}`}>
                     {item.icon}
                   </span>
                 </div>
               )
             })}
          </div>

       </div>
    </div>
  );
}
