'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const CAROUSEL_ITEMS = [
  {
    title: 'Command Center',
    desc: 'A calm overview of your workspace, signals, and next best actions.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-5 h-5">
        <path d="M 20 40 C 8.954 40 0 31.046 0 20 L 0 20 C 0 8.954 8.954 0 20 0 L 20 0 C 31.046 0 40 8.954 40 20 L 40 20 C 40 31.046 31.046 40 20 40 Z" fill="currentColor"></path>
        <path d="M 20.36 9 C 26.633 9 31.72 14.086 31.72 20.36 C 31.72 26.634 26.633 31.717 20.36 31.717 C 14.087 31.717 9.002 26.632 9.002 20.36 C 9.002 14.086 14.087 9 20.36 9 Z M 25.466 13.612 C 24.946 13.411 24.357 13.618 24.076 14.1 L 21.292 13.544 C 21.152 13.514 21.008 13.571 20.926 13.689 C 20.9 13.727 20.881 13.771 20.872 13.816 L 20.032 17.757 C 18.451 17.781 16.911 18.267 15.602 19.155 C 15.124 18.704 14.424 18.578 13.818 18.834 C 13.213 19.09 12.815 19.68 12.805 20.337 C 12.795 20.994 13.174 21.596 13.772 21.87 C 13.762 21.995 13.76 22.12 13.766 22.245 C 13.767 22.286 13.769 22.328 13.773 22.37 C 13.773 24.914 16.737 26.98 20.395 26.981 C 24.052 26.981 27.016 24.914 27.017 22.37 C 27.027 22.245 27.029 22.12 27.023 21.995 C 27.022 21.953 27.02 21.912 27.017 21.87 C 27.589 21.586 27.947 20.998 27.937 20.359 C 27.914 19.706 27.508 19.127 26.902 18.881 C 26.296 18.636 25.602 18.77 25.131 19.223 C 23.839 18.344 22.32 17.859 20.758 17.826 L 21.496 14.282 L 23.926 14.793 C 23.986 15.348 24.44 15.777 24.997 15.806 C 25.554 15.835 26.05 15.454 26.166 14.909 C 26.283 14.363 25.986 13.814 25.466 13.612 Z" fill="#8AEF98" />
      </svg>
    )
  },
  {
    title: 'Live Analytics',
    desc: 'Revenue, activation, and product momentum stay in sync at a glance.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-5 h-5">
        <path d="M 20 40 C 8.954 40 0 31.046 0 20 C 0 8.954 8.954 0 20 0 C 31.046 0 40 8.954 40 20 C 40 31.046 31.046 40 20 40 Z" fill="currentColor"></path>
        <path d="M 20.743 25.604 C 20.046 24.24 19.229 22.861 17.634 22.861 C 17.329 22.861 17.025 22.911 16.746 23.038 L 16.204 21.959 C 16.864 21.396 17.931 20.949 19.302 20.949 C 21.434 20.949 22.529 21.971 23.398 23.276 C 23.914 22.162 24.158 20.658 24.158 18.793 C 24.158 14.135 22.695 11.743 19.277 11.743 C 15.907 11.743 14.452 14.135 14.452 18.793 C 14.452 23.425 15.908 25.793 19.277 25.793 C 19.772 25.8 20.266 25.736 20.743 25.604 Z M 21.578 27.23 C 20.828 27.43 20.054 27.533 19.277 27.535 C 14.791 27.535 10.398 23.973 10.398 18.793 C 10.398 13.563 14.791 10 19.277 10 C 23.837 10 28.187 13.537 28.187 18.793 C 28.187 21.716 26.817 24.091 24.825 25.627 C 25.469 26.587 26.131 27.224 27.055 27.224 C 28.061 27.224 28.467 26.449 28.535 25.842 L 29.846 25.842 C 29.923 26.651 29.516 30.012 25.852 30.012 C 23.632 30.012 22.458 28.732 21.578 27.23 Z" fill="#8AEF98" />
      </svg>
    )
  },
  {
    title: 'Priority Inbox',
    desc: 'High-signal customer threads surface first with context attached.',
    icon: (
      <svg viewBox="0 0 39 39" className="w-5 h-5">
        <path d="M 19.67 39.341 C 30.534 39.341 39.34 30.534 39.34 19.671 C 39.34 8.807 30.534 0 19.67 0 C 8.806 0 0 8.807 0 19.67 C 0 30.534 8.806 39.341 19.67 39.341 Z" fill="currentColor"></path>
        <path d="M 8.434 19.239 C 8.434 19.239 18.178 15.094 21.557 13.634 C 22.853 13.05 27.246 11.182 27.246 11.182 C 27.246 11.182 29.274 10.364 29.104 12.349 C 29.048 13.167 28.598 16.028 28.147 19.122 C 27.471 23.502 26.739 28.289 26.739 28.289 C 26.739 28.289 26.626 29.632 25.669 29.865 C 24.711 30.099 23.134 29.048 22.853 28.815 C 22.627 28.639 18.628 26.012 17.164 24.727 C 16.77 24.377 16.319 23.677 17.22 22.859 C 19.248 20.932 21.67 18.539 23.134 17.02 C 23.81 16.32 24.486 14.685 21.67 16.67 C 19.041 18.546 16.394 20.395 13.728 22.217 C 13.728 22.217 12.828 22.801 11.138 22.275 C 9.448 21.75 7.476 21.049 7.476 21.049 C 7.476 21.049 6.125 20.173 8.434 19.239 Z" fill="#8AEF98" />
      </svg>
    )
  },
  {
    title: 'Smart Flows',
    desc: 'Automations adapt quietly as teams, deals, and usage patterns change.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-5 h-5">
        <path d="M 20 40 C 8.954 40 0 31.046 0 20 L 0 20 C 0 8.954 8.954 0 20 0 L 20 0 C 31.046 0 40 8.954 40 20 L 40 20 C 40 31.046 31.046 40 20 40 Z" fill="currentColor"></path>
        <path d="M 14.65 22.926 C 14.651 23.474 14.433 24 14.045 24.387 C 13.658 24.775 13.132 24.993 12.584 24.992 C 12.036 24.993 11.51 24.775 11.123 24.387 C 10.735 24 10.517 23.474 10.518 22.926 C 10.518 21.783 11.441 20.86 12.584 20.86 L 14.65 20.86 Z M 15.683 22.926 C 15.683 21.783 16.606 20.86 17.749 20.86 C 18.891 20.86 19.815 21.783 19.815 22.926 L 19.815 28.091 C 19.816 28.639 19.598 29.165 19.21 29.552 C 18.823 29.94 18.297 30.158 17.749 30.157 C 17.201 30.158 16.675 29.94 16.288 29.552 C 15.9 29.165 15.682 28.639 15.683 28.091 Z M 17.746 14.632 C 17.198 14.632 16.673 14.415 16.285 14.027 C 15.898 13.64 15.68 13.114 15.681 12.566 C 15.681 11.423 16.604 10.5 17.747 10.5 C 18.889 10.5 19.813 11.423 19.813 12.566 L 19.813 14.632 Z M 22.929 20.86 L 28.11 20.86 C 29.253 20.86 30.176 21.783 30.176 22.926 C 30.177 23.474 29.959 24 29.571 24.387 C 29.184 24.775 28.658 24.993 28.11 24.992 L 22.93 24.992 Z" fill="#8AEF98" />
      </svg>
    )
  },
  {
    title: 'Control Room',
    desc: 'Fine-tune workspace rules, permissions, and preferences in one place.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-5 h-5">
        <path d="M 20 40 C 8.954 40 0 31.046 0 20 L 0 20 C 0 8.954 8.954 0 20 0 L 20 0 C 31.046 0 40 8.954 40 20 L 40 20 C 40 31.046 31.046 40 20 40 Z" fill="currentColor"></path>
        <path d="M 16.717 3.492 L 10.847 8.073 L 4.844 3.493 L 4.851 3.5 L 4.851 9.914 L 10.781 14.594 L 16.717 10.095 Z M 18.26 2.377 L 16.719 3.492 L 16.719 10.094 L 21.569 6.37 L 21.569 4.127 C 21.569 4.127 20.981 0.923 18.26 2.377 Z M 16.719 10.093 L 16.719 18.656 L 20.437 18.656 C 20.437 18.656 21.494 18.547 21.571 17.341 L 21.571 6.369 Z M 0 6.377 L 0 17.349 C -0.003 18.009 0.481 18.57 1.134 18.664 L 4.852 18.664 L 4.843 9.906 L 0 6.376 Z" fill="#8AEF98" transform="translate(9.369 9.5)" />
      </svg>
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
       {/* Background Mosaic Image */}
       <Image 
          src="/images/framer/mosaic-bg.png"
          alt="Mosaic Background"
          fill
          className="object-cover opacity-30 mix-blend-multiply"
       />

       <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 px-6">
          
          {/* Top text content container */}
          <div className="w-full flex-1 flex flex-col items-center justify-center">
             <div className="w-[200px] h-[100px] bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-5 relative overflow-hidden flex flex-col items-center justify-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 p-4 flex flex-col items-center justify-center text-center gap-1.5"
                  >
                     <h3 className="text-[13px] font-bold text-black tracking-tight">{CAROUSEL_ITEMS[activeIndex].title}</h3>
                     <p className="text-[9px] leading-[1.3] text-black/60 px-2">{CAROUSEL_ITEMS[activeIndex].desc}</p>
                  </motion.div>
                </AnimatePresence>
             </div>
             
             {/* Dotted connector line */}
             <div className="w-[2px] h-12 border-l-2 border-dashed border-[#8AEF98]/80 shadow-[0_0_12px_rgba(5,222,34,0.4)] mt-2"></div>
          </div>

          {/* Bottom Nav Pill */}
          <div className="bg-gradient-to-r from-[rgba(5,222,34,0.1)] to-[rgba(5,222,34,0.15)] border border-[#05DE22]/20 rounded-full p-1.5 flex items-center gap-1 mb-4 shadow-sm">
             {CAROUSEL_ITEMS.map((item, i) => {
               const isActive = i === activeIndex;
               return (
                 <div 
                   key={i} 
                   className="relative w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
                   onClick={() => setActiveIndex(i)}
                 >
                   {isActive && (
                     <motion.div 
                       layoutId="activePillBg"
                       className="absolute inset-0 bg-gradient-to-b from-[#05DE22] to-[#04AF1B] rounded-full shadow-[0_2px_8px_rgba(5,222,34,0.4)]"
                       transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                     />
                   )}
                   <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-white' : 'text-black/30 hover:text-black/50'}`}>
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
