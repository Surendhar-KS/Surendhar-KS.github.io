'use client';
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const MagneticLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative text-white/50 hover:text-white font-['Archivo',sans-serif] text-sm md:text-base uppercase tracking-[0.2em] transition-colors duration-300 py-4 px-2 group"
    >
      {children}
      <span className="absolute left-1/2 bottom-2 w-0 h-[1px] bg-white transition-all duration-500 ease-out group-hover:w-1/2 group-hover:left-1/4" />
    </motion.a>
  );
};

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <footer 
      ref={containerRef}
      id="footer"
      className="w-full bg-[#050505] relative overflow-hidden flex flex-col items-center justify-end min-h-[80vh] md:min-h-screen border-t border-white/5"
      data-name="Premium Footer"
      data-theme="dark"
    >
      {/* Subtle Noise Overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />

      {/* Top Radial Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-white/5 blur-[120px] rounded-[100%] pointer-events-none z-0" />

      {/* Parallax Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="w-full max-w-[1440px] px-6 md:px-12 flex flex-col justify-end h-full z-10 pt-32 pb-12"
      >
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end w-full mb-16 md:mb-32 gap-16 xl:gap-12">
          
          {/* Left: Massive Typography */}
          <div className="flex flex-col">
            <h2 className="font-['Archivo',sans-serif] font-bold text-[12vw] xl:text-[9vw] leading-[0.85] tracking-[-0.04em] text-white">
              SCALING
            </h2>
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="hidden sm:block h-[2px] bg-white/10 flex-1 max-w-[80px] lg:max-w-[120px]" />
              <h2 className="font-['Archivo',sans-serif] font-bold text-[12vw] xl:text-[9vw] leading-[0.85] tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700 italic pr-4">
                SOFTWARE
              </h2>
            </div>
            <h2 className="font-['Archivo',sans-serif] font-bold text-[12vw] xl:text-[9vw] leading-[0.85] tracking-[-0.04em] text-white">
              FOR GROWTH.
            </h2>
          </div>

          {/* Right: Email CTA */}
          <div className="flex flex-col items-start xl:items-end gap-6 xl:pb-4">
            <p className="text-white/40 font-['Archivo',sans-serif] text-sm md:text-base uppercase tracking-[0.2em] font-medium">
              Start a conversation
            </p>
            <motion.a 
              href="mailto:ksurendhar725@gmail.com"
              className="group flex flex-col items-start xl:items-end relative"
              whileHover="hover"
            >
              <span className="font-['Archivo',sans-serif] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-medium transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 break-all sm:break-normal">
                ksurendhar725@gmail.com
              </span>
              <motion.div
                variants={{
                  initial: { scaleX: 1, opacity: 0.3 },
                  hover: { scaleX: 1, opacity: 1 }
                }}
                className="h-[2px] bg-white w-full mt-2 origin-left xl:origin-right"
              />
              <motion.div 
                className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 hidden md:block"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </motion.div>
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar Grid */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-white/10 gap-8 lg:gap-0">
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 md:gap-x-8 gap-y-2">
            <MagneticLink href="#about">About</MagneticLink>
            <MagneticLink href="#services">Services</MagneticLink>
            <MagneticLink href="#projects">Work</MagneticLink>
            <MagneticLink href="#certifications">Certifications</MagneticLink>
          </div>

          {/* Social & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/surendhar-ks/" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/surendhar-ks" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
            <div className="text-white/30 font-['Archivo',sans-serif] text-xs md:text-sm tracking-wider uppercase">
              © {new Date().getFullYear()} SURENDHAR K.
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  );
}
