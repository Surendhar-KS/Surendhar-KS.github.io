'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Spotlight } from '@/components/core/spotlight';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Lock to prevent scroll-driven updates from fighting with click-driven updates
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Automatically switch tabs based on scroll position!
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isManualScrolling.current) return; // Skip updates while smoothly scrolling via click
    
    const newIndex = latest >= 0.5 ? 1 : 0;
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    isManualScrolling.current = true;
    
    // Clear any existing timeout
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    
    // Release the lock after smooth scroll completes (approx 800ms)
    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 800);

    if (!containerRef.current) return;
    
    // When clicking a tab, smoothly scroll the window to the correct trigger point in the 200vh track
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Ensure we scroll deep enough into the threshold
    const targetY = scrollTop + rect.top + (index === 0 ? 0 : rect.height * 0.6);
    
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  return (
    <div id="experience" ref={containerRef} className="w-full bg-[#111] relative h-[200vh]" data-theme="dark">
      {/* The sticky container locks to the screen for the duration of the 200vh scroll */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-6 w-full">
          
          {/* Title */}
          <div className="mb-10 md:mb-16 flex items-center justify-center overflow-hidden">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-row overflow-hidden text-5xl md:text-7xl font-extrabold text-white tracking-tighter"
            >
              {Array.from("Experience.").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "100%", opacity: 0, rotate: 10, filter: "blur(4px)" },
                    visible: { y: "0%", opacity: 1, rotate: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className={`inline-block origin-bottom-left leading-[1.2] ${letter === ' ' ? 'w-[1ch]' : ''}`}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Split Panel Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 relative">
            
            {/* Left Navigation */}
            <div className="w-full lg:w-[35%] flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar relative z-20">
              {experiences.map((exp, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className={`relative flex-shrink-0 px-6 py-5 text-left text-lg md:text-2xl font-semibold transition-colors duration-300 rounded-xl outline-none cursor-pointer ${
                      isActive ? "text-[#111]" : "text-white/50 hover:text-white/80 hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Active Indicator Glide */}
                    {isActive && (
                      <motion.div
                        layoutId="activeExperienceTab"
                        className="absolute inset-0 bg-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 block tracking-tight">{exp.company}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Right Content Pane */}
            <div className="w-full lg:w-[65%] min-h-[400px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full relative overflow-hidden rounded-[32px] p-[1px] group shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <Spotlight
                    className='from-white/50 via-white/20 to-transparent blur-3xl'
                    size={400}
                  />
                  <div className="relative h-full w-full rounded-[31px] bg-[#1a1a1a] p-8 md:p-12 border border-white/5">
                    <div className="flex flex-col gap-4 mb-10">
                    <h3 className="font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight">
                      {experiences[activeIndex].role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-xl md:text-2xl text-white/60 font-medium tracking-wide">
                        {experiences[activeIndex].company}
                      </span>
                      <span className="text-white/30 hidden md:block">•</span>
                      <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 text-sm md:text-base text-white/90 font-bold tracking-wide whitespace-nowrap backdrop-blur-md border border-white/10">
                        {experiences[activeIndex].date}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="flex flex-col gap-6">
                    {experiences[activeIndex].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-white/75 text-base md:text-lg leading-relaxed font-medium">
                        <div className="w-2 h-2 rounded-full bg-white/40 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

