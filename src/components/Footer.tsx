import React from 'react';
import { motion } from 'framer-motion';

const QuickLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-white/70 hover:text-white font-['Archivo',sans-serif] text-lg transition-colors group relative"
      whileHover="hover"
      initial="initial"
    >
      {/* Decorative arrow/slash */}
      <motion.span
        variants={{
          initial: { opacity: 0.5, x: 0 },
          hover: { opacity: 1, x: 4 }
        }}
        className="text-white/40"
      >
        /
      </motion.span>
      {children}
      {/* Animated underline */}
      <motion.div
        variants={{
          initial: { width: 0, opacity: 0 },
          hover: { width: "100%", opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
        className="absolute -bottom-1 left-4 h-px bg-white"
      />
    </motion.a>
  );
};

export default function Footer() {
  const title = "Scaling software for growth.";
  const titleWords = title.split(' ');

  return (
    <footer className="w-full bg-[#111] pt-32 pb-16 px-6 relative overflow-hidden" data-name="Footer">
      <div className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-24 relative z-10">
        
        {/* Animated Title */}
        <div className="max-w-[700px]">
          <h2 className="font-['Archivo',sans-serif] font-extrabold text-[52px] md:text-[88px] tracking-[-0.04em] text-white leading-[0.95] flex flex-wrap gap-[0.25em]">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={index === 1 ? "text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Links and Contact */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 border-t border-white/10 pt-16">
          
          {/* Quick Links */}
          <div className="flex flex-col items-start gap-8">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 font-['Archivo',sans-serif] uppercase tracking-widest text-sm font-semibold"
            >
              Navigation
            </motion.h4>
            <div className="flex flex-col gap-4">
              <QuickLink href="#about">About</QuickLink>
              <QuickLink href="#services">Services</QuickLink>
              <QuickLink href="#projects">Projects</QuickLink>
              <QuickLink href="#certifications">Certifications</QuickLink>
              <QuickLink href="#contact">Contact</QuickLink>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-start gap-8 md:items-end">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/40 font-['Archivo',sans-serif] uppercase tracking-widest text-sm font-semibold"
            >
              Contact
            </motion.h4>
            <motion.a
              href="mailto:ksurendhar725@gmail.com"
              className="group flex flex-col md:items-end"
              initial="initial"
              whileHover="hover"
            >
              <span className="font-['Archivo',sans-serif] text-2xl md:text-3xl text-white font-semibold transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50">
                ksurendhar725@gmail.com
              </span>
              <motion.div
                variants={{
                  initial: { scaleX: 0, opacity: 0 },
                  hover: { scaleX: 1, opacity: 1 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-px bg-white w-full mt-2 origin-left md:origin-right"
              />
            </motion.a>
            <div className="text-white/40 font-['Archivo',sans-serif] text-sm mt-4">
              © {new Date().getFullYear()} Surendhar K. All rights reserved.
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Background Element (like the MAJD text but modern) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
      >
        <div className="font-['Archivo',sans-serif] font-bold text-[30vw] text-white whitespace-nowrap leading-none tracking-tighter">
          CREATE
        </div>
      </motion.div>
    </footer>
  );
}
