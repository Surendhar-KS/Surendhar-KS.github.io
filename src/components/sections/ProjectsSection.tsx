'use client';
import { motion } from "framer-motion";
import ScrollExpand from "../ScrollExpand";
import ScrollReveal from "../ScrollReveal";

const projects = [
  { 
    id: 1, 
    image: "/projects/project1.webp", 
    alt: "Project 1"
  },
  { 
    id: 2, 
    image: "/projects/project2.webp", 
    alt: "Project 2"
  },
  { 
    id: 3, 
    image: "/projects/project3.webp", 
    alt: "Project 3"
  },
  { 
    id: 4, 
    image: "/projects/project4.webp", 
    alt: "Project 4"
  },
];

export default function ProjectsSection() {
  return (
    <div id="projects" className="content-stretch flex items-center justify-center pt-[180px] pb-[10vh] lg:pb-[20vh] relative shrink-0 w-full" data-name="Curated Projects Section">
      <ScrollReveal className="content-stretch flex flex-col items-start justify-center max-w-[1180px] relative shrink-0 w-[1180px] px-6 lg:px-0">
        
        <div className="w-full relative">
          <ScrollExpand 
            src="/images/build-to-scale-bg.webp" 
            mediaType="image" 
            title="Built to scale" 
            scrollHint="Scroll to expand" 
            mediaZoom={1.35} 
            scrollDistance={1.2} 
            holdDistance={4.2} 
            useWindowScroll={true} 
          />

          <div className="absolute top-[220vh] bottom-0 left-0 w-full z-10 flex flex-col gap-[60px] pointer-events-none">
            
            <div className="pointer-events-auto flex items-start w-full relative">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="blur-[0px] content-stretch flex items-start mb-[-0.4px] relative shrink-0" data-name="span">
                  <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111] text-[48px] md:text-[76px] tracking-[-1.52px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[1] md:leading-[76px]">Curated</p>
                  </div>
                </div>
                <div className="blur-[0px] content-stretch flex items-start relative shrink-0" data-name="span">
                  <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#111] text-[48px] md:text-[76px] tracking-[-1.52px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="leading-[1] md:leading-[76px]">Projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-auto flex-1 w-full h-full pb-[20vh]">
              <div className="relative flex flex-col h-full gap-[10vh] w-full max-w-[1000px] mx-auto items-center" data-name="div.framer-6rbvdk">
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 150, scale: 0.85 }} 
                    whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                    viewport={{ once: false, margin: "-15%" }} 
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
                    className="w-full transition-transform duration-500 ease-out hover:scale-[1.02]"
                    style={{
                      position: 'sticky',
                      top: `${15 + (index * 5)}vh`
                    }}
                  >
                    <div className="relative content-stretch flex flex-col items-start w-full shadow-2xl rounded-[20px]" data-name="div.framer-19xgbbo-container">
                      <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Project Card">
                        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Image Wrap">
                          <div className="content-stretch flex flex-col aspect-[16/9] h-auto items-start justify-center relative rounded-[20px] shrink-0 w-full" data-name="Image">
                            <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full">
                              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
                                <img alt={project.alt} className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={project.image} />
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

      </ScrollReveal>
    </div>
  );
}
