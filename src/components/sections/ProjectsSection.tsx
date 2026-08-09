'use client';
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const projects = [
  { id: 1, image: "/projects/project1.png", title: "Project One" },
  { id: 2, image: "/projects/project2.png", title: "Project Two" },
  { id: 3, image: "/projects/project3.png", title: "Project Three" },
  { id: 4, image: "/projects/project4.png", title: "Project Four" },
];

export default function ProjectsSection() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center w-full py-32 px-6" data-name="Projects Section">
      <div className="w-full max-w-[1180px] flex flex-col items-center gap-16">
        
        {/* Title */}
        <ScrollReveal>
          <h2 className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[48px] md:text-[76px] tracking-[-1.52px] text-[#111] leading-none" style={{ fontVariationSettings: '"wdth" 100' }}>
            Projects
          </h2>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id}>
              <motion.div 
                className="group relative flex flex-col rounded-[20px] overflow-hidden shadow-xl border border-[#111]/5"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay / Hover Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-white font-['Archivo:SemiBold',sans-serif] text-2xl mb-2">{project.title}</h3>
                  <p className="text-white/80 font-['Archivo:Regular',sans-serif]">View Case Study →</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

