import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const experiences = [
  {
    role: "Data Visualization Intern",
    company: "Infosys",
    date: "Nov 2024 \u2013 Jan 2025",
    bullets: [
      "Analyzed 10,000+ records and built interactive Power BI dashboards for business performance tracking.",
      "Created 5+ KPI dashboards and predictive BI reports, reducing manual reporting time by 40%."
    ]
  },
  {
    role: "ServiceNow Virtual Intern",
    company: "ServiceNow",
    date: "Jul 2026 \u2013 Aug 2026",
    bullets: [
      "Completed a 1-month ServiceNow virtual internship in administration, Flow Designer, and automation.",
      "Configured workflows across 3 modules, and explored ATF, reporting, and platform administration concepts."
    ]
  }
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="relative flex items-start gap-8 md:gap-16 group w-full" ref={cardRef}>
      
      {/* Timeline dot container */}
      <div className="absolute left-[3px] md:left-[5px] top-8 z-20 flex items-center justify-center">
        {/* Glow behind the dot */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 2, 1.5], opacity: [0, 0.5, 0] }}
          viewport={{ once: true, margin: "-40% 0px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-8 h-8 bg-[#111]/20 rounded-full pointer-events-none blur-sm"
        />
        
        {/* Main solid dot */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-40% 0px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-4 h-4 md:w-5 md:h-5 bg-[#111] rounded-full border-4 border-[#faf7f3] shadow-[0_0_15px_rgba(17,17,17,0.3)] transition-transform duration-500 group-hover:scale-150" 
        />
      </div>
      
      {/* Card content */}
      <motion.div 
        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -5 }}
        className="ml-10 md:ml-12 relative bg-white/60 backdrop-blur-xl rounded-[24px] p-6 md:p-8 w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden"
      >
        {/* Subtle hover gradient inside card */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4 border-b border-[#111]/5 pb-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-xl md:text-2xl text-[#111] tracking-tight">{exp.role}</h3>
            <span className="text-base md:text-lg text-[#111]/60 font-medium">{exp.company}</span>
          </div>
          <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-[#111]/5 text-xs md:text-sm text-[#111]/70 font-semibold tracking-wide whitespace-nowrap">
            {exp.date}
          </span>
        </div>
        
        <ul className="relative z-10 flex flex-col gap-5">
          {exp.bullets.map((bullet, idx) => (
            <motion.li 
              key={idx} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
              className="flex items-start gap-3 text-[#111]/75 text-sm md:text-base leading-relaxed font-medium"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#111]/30 mt-2 shrink-0 transition-colors group-hover:bg-[#111]/60" />
              {bullet}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full max-w-[1200px] mx-auto py-32 px-6 font-['Archivo',sans-serif] relative">
      
      {/* Premium Title Reveal */}
      <div className="mb-24 flex justify-center overflow-hidden">
        <motion.h2 
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#111] to-[#555]"
        >
          Experience.
        </motion.h2>
      </div>
      
      <div className="relative w-full" ref={containerRef}>
        
        {/* Background Track Line */}
        <div className="absolute left-[10px] md:left-[14px] top-8 bottom-8 w-[2px] bg-[#111]/10 rounded-full" />
        
        {/* Animated Glowing Progress Line */}
        <motion.div 
          style={{ scaleY: smoothProgress }}
          className="absolute left-[10px] md:left-[14px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#111] via-[#333] to-[#111] origin-top rounded-full shadow-[0_0_10px_rgba(17,17,17,0.5)]" 
        />
        
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
