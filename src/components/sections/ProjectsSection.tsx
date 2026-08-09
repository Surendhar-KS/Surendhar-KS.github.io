'use client';
import { motion } from "framer-motion";
import ScrollExpand from "../ScrollExpand";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Interview Platform",
      description: "Smart AI hiring platform.",
      image: "/images/vnxq-lc-phw9-vb-vzy6-bdp-z8-pusa-upng.png",
      bgColor: "bg-white",
      textColor: "text-[#111]",
      descColor: "text-[#111]",
      shadow: "shadow-2xl"
    },
    {
      title: "Portable Microplastic Detection",
      description: "AI-based water analysis.",
      image: "/images/wg-ehv-rr-qs62-rgxlzrn-xjj8-rr4-png.png",
      bgColor: "bg-[linear-gradient(to_bottom,#6549BC,#6347BA)]",
      textColor: "text-white",
      descColor: "text-white/78",
      shadow: "shadow-2xl"
    },
    {
      title: "Retail Analytics Dashboard",
      description: "Data-driven business insights.",
      image: "/images/i3-aze-vtkvd-kb-gl9-tx38-tud-xeb0-png.png",
      bgColor: "bg-gradient-to-br from-rose-400 to-rose-600",
      textColor: "text-white",
      descColor: "text-white/78",
      shadow: "shadow-2xl"
    },
    {
      title: "SmartBus Live Tracker",
      description: "Live public transport tracking.",
      image: "/images/1-c3-zq-er-gdc7-pq-pib-dxt-ba-d4-vgi-qpng.png",
      bgColor: "bg-white",
      textColor: "text-[#111]",
      descColor: "text-[#111]/78",
      shadow: "shadow-2xl"
    }
  ];

  return (
    <div id="projects" className="flex items-center justify-center pt-[140px] relative w-full" data-name="Curated Projects Section">
      <div className="flex-[1_0_0] max-w-[1180px] min-w-px relative" data-name="Container">
        <div className="flex flex-col justify-center max-w-[inherit] size-full">
          <div className="w-full relative px-[20px] md:px-0">
            
            {/* ScrollExpand Background Image */}
            <ScrollExpand 
              src="/images/build-to-scale-bg.png" 
              mediaType="image" 
              title="Built to scale" 
              scrollHint="Scroll to expand" 
              mediaZoom={1.35} 
              scrollDistance={1.2} 
              holdDistance={4.2} 
              useWindowScroll={true} 
            />

            {/* Content overlayed on the ScrollExpand track */}
            <div className="absolute top-[220vh] bottom-0 left-0 px-[20px] md:px-0 w-full z-10 flex flex-col gap-[60px] pointer-events-none">
              
              {/* Title & Button Area */}
              <div className="pointer-events-auto flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Title & Button">
                <div className="flex flex-col items-start relative shrink-0 w-[320px]">
                  <h2 className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#111] text-[46px] tracking-[-0.92px] whitespace-pre" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Curated{"\n"}Projects
                  </h2>
                </div>
                
                <div className="flex items-center justify-end overflow-clip relative shrink-0 w-full" data-name="Button Wrap">
                  <div className="flex flex-col items-start relative shrink-0">
                    <a href="#projects" className="group flex items-center gap-[10px] cursor-pointer">
                      <span className="font-['Archivo:Regular',sans-serif] font-normal text-[#111] text-[18px] tracking-[-0.72px]">
                        View All Work
                      </span>
                      <div className="flex items-center justify-center size-[28px] rounded-[8px] border border-[#111] transition-transform group-hover:scale-110 group-hover:bg-[#111] group-hover:text-white">
                        <ArrowUpRight size={16} strokeWidth={1.5} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sticky Stacked Project Cards */}
              <div className="pointer-events-auto flex-1 w-full h-full">
                <div className="relative flex flex-col h-full gap-[10vh] pb-[20vh] w-full max-w-[1000px] mx-auto items-center" data-name="div.framer-6rbvdk">
                  {projects.map((project, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 150, scale: 0.85 }} 
                      whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                      viewport={{ once: false, margin: "-15%" }} 
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
                      className={`sticky w-full transition-transform duration-500 ease-out hover:scale-[1.02]`}
                      style={{ top: `${15 + index * 5}vh` }}
                    >
                      <div className={`relative flex flex-col items-start w-full ${project.shadow} rounded-[20px] ${project.bgColor} p-[30px]`}>
                        <div className="flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 w-full">
                          
                          {/* Image Wrap */}
                          <div className="flex flex-col items-center justify-center overflow-clip relative rounded-[20px] shrink-0 w-full">
                            <div className="flex flex-col aspect-[16/9] h-auto items-start justify-center relative rounded-[20px] shrink-0 w-full">
                              <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                                  <img alt={project.title} className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.03%] object-cover" src={project.image} />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Title & Description */}
                          <div className="h-[56px] overflow-clip relative shrink-0 w-full mt-4">
                            <div className="-translate-y-1/2 absolute flex flex-col items-start left-0 right-0 top-[calc(50%-11.6px)]">
                              <div className="flex flex-col items-start relative shrink-0 w-full">
                                <div className={`font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 ${project.textColor} text-[28px] tracking-[-0.56px] w-full`} style={{ fontVariationSettings: '"wdth" 100' }}>
                                  <p className="leading-[33.6px]">{project.title}</p>
                                </div>
                              </div>
                            </div>
                            <div className="-translate-y-1/2 absolute flex flex-col items-start left-0 right-0 top-[calc(50%+17.1px)]">
                              <div className="flex flex-col items-start relative shrink-0 w-full">
                                <div className={`font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 ${project.descColor} text-[16px] tracking-[-0.64px] w-full`} style={{ fontVariationSettings: '"wdth" 100' }}>
                                  <p className="leading-[22.4px]">{project.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
