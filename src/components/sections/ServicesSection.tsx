'use client';
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

function ServiceRow({ title, tags, index }: { title: string, tags: string[], index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      className="bg-transparent hover:bg-white content-stretch flex flex-col lg:flex-row items-start lg:items-center justify-between overflow-clip px-[20px] py-[20px] lg:py-[40.8px] relative shrink-0 w-full gap-[20px] lg:gap-0 transition-colors duration-500 rounded-[24px] cursor-pointer group"
    >
      <motion.div 
        variants={{ hover: { scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", y: -4 } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 rounded-[24px] pointer-events-none"
      />
      
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full lg:w-auto z-10">
        <motion.div 
          variants={{ hover: { x: 10 } }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="[word-break:break-word] flex flex-row items-center gap-4 font-['Archivo:Medium',sans-serif] font-medium justify-start relative shrink-0 text-white group-hover:text-[#111] text-[24px] sm:text-[28px] lg:text-[32px] tracking-[-0.56px] lg:tracking-[-0.64px] transition-colors duration-500" style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <p className="leading-[1.2] lg:leading-[38.4px] text-left">{title}</p>
          <motion.svg 
            variants={{ hover: { opacity: 1, x: 0 }, initial: { opacity: 0, x: -10 } }}
            initial="initial"
            className="w-6 h-6 lg:w-8 lg:h-8 text-white group-hover:text-[#111] shrink-0 transition-colors duration-500"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </motion.div>
      </div>
      
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.8px] border-solid inset-x-[20px] bottom-0 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
      
      <motion.div 
        variants={{ hover: { x: -10 } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="content-stretch flex gap-[10px] flex-wrap items-center justify-start lg:justify-center relative shrink-0 z-10"
      >
        {tags.map((tag, i) => (
          <div key={`tag-group-${i}`} className="flex items-center gap-[10px]">
            <div className="relative shrink-0">
              <div className="[word-break:break-word] flex flex-col font-['Archivo',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[rgba(255,255,255,0.5)] group-hover:text-[rgba(17,17,17,0.9)] text-[16px] lg:text-[18px] tracking-[-0.72px] whitespace-nowrap transition-colors duration-500" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25.2px]">{tag}</p>
              </div>
            </div>
            {i < tags.length - 1 && (
              <div className="bg-white group-hover:bg-[#111] opacity-50 relative rounded-[89px] shrink-0 size-[4px] transition-colors duration-500" />
            )}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const services = [
    { title: "Full-Stack Development", tags: ["React", "Java", "Spring Boot", "REST APIs"] },
    { title: "Cloud Computing", tags: ["AWS", "Docker", "CI/CD", "Serverless"] },
    { title: "Artificial Intelligence", tags: ["LLM Integration", "TensorFlow", "Computer Vision", "AI Automation"] },
    { title: "Data Analytics", tags: ["Power BI", "SQL", "Python", "Business Intelligence"] }
  ];

  return (
    <div id="services" className="flex flex-col items-center justify-center w-full py-32 px-6 bg-[#111] relative" data-theme="dark">
      <ScrollReveal className="w-full max-w-[1180px] flex flex-col gap-[60px] items-start justify-center">
        <div className="flex flex-col items-start relative shrink-0 w-full">
          <div className="flex items-start mb-[-0.4px] relative shrink-0">
            <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-white text-[48px] md:text-[76px] tracking-[-1.52px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[1] md:leading-[76px]">Services</p>
            </div>
          </div>
        </div>

        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
          {services.map((s, i) => (
            <div key={i} className="content-stretch flex flex-col items-start w-full relative shrink-0">
              <ServiceRow index={i} title={s.title} tags={s.tags} />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
