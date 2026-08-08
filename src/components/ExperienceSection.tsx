import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

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

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div className="w-full max-w-[1000px] mx-auto py-20 px-6 font-['Archivo',sans-serif]">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center text-[#111] tracking-tight"
      >
        Experience
      </motion.h2>
      
      <div className="relative" ref={containerRef}>
        {/* Background Vertical Line (faint) */}
        <div className="absolute left-[7px] top-4 bottom-4 w-px bg-[#111]/10 md:left-[11px]" />
        
        {/* Animated Flowing Line (dark) */}
        <motion.div 
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[7px] top-4 bottom-4 w-px bg-[#111] md:left-[11px] origin-top" 
        />
        
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6 md:gap-12 group">
              
              {/* Timeline dot container with Blow Animation */}
              <div className="absolute left-0 top-6 md:-left-[0.5px] z-10 flex items-center justify-center w-[15px] h-[15px] md:w-[23px] md:h-[23px]">
                {/* Shockwave / Blow effect triggered perfectly at center */}
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: [0.5, 2.5, 3.5], opacity: [0.8, 0.4, 0] }}
                  viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute w-full h-full bg-[#111] rounded-full pointer-events-none"
                />
                
                {/* Main solid dot popping in perfectly at center */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1.5, 1] }}
                  viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full h-full bg-[#111] rounded-full border-[3px] border-[#faf7f3] shadow-sm transition-transform duration-300 group-hover:scale-125" 
                />
              </div>
              
              {/* Card content - Fade in normally before line reaches it */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="ml-8 md:ml-12 bg-white rounded-[24px] p-8 md:p-10 w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#111]/5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
                  <div className="flex items-center flex-wrap gap-2 text-xl md:text-2xl tracking-tight">
                    <span className="font-semibold text-[#111]">{exp.role}</span>
                    <span className="text-[#111]/40 font-medium">&middot;</span>
                    <span className="text-[#111]/60 font-medium">{exp.company}</span>
                  </div>
                  <span className="text-sm md:text-base text-[#111]/50 font-medium whitespace-nowrap uppercase tracking-wider">
                    {exp.date}
                  </span>
                </div>
                
                <ul className="flex flex-col gap-4">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#111]/70 text-sm md:text-base leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#111]/40 mt-2 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
