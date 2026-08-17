import ScrollReveal from "../ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BioSection() {
  return (
    <div className="flex min-h-[80vh] lg:h-[900px] pt-20 lg:pt-0 w-full lg:items-end items-center justify-center relative shrink-0" data-name="Bio Section">
      <ScrollReveal className="flex flex-col lg:flex-row w-full max-w-[1180px] lg:h-[479.2px] items-start lg:items-end justify-between pb-[20px] gap-10 sm:gap-12 lg:gap-0 relative shrink-0 px-6 lg:px-0">
        
        {/* Left Side: Hey! I'm Surendhar... */}
        <div className="flex flex-col h-auto lg:h-full justify-between items-start w-full lg:max-w-[300px] lg:w-[300px] gap-6 lg:gap-0">
          <div className="font-sans font-semibold font-semibold text-[#111] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[76px] tracking-[-1.52px] leading-none" style={{ fontVariationSettings: '"wdth" 100' }}>
            Hey!
          </div>
          <div className="font-sans font-semibold font-semibold text-[#111] text-[20px] lg:text-[22px] tracking-[-0.88px] leading-[1.4] text-balance" style={{ fontVariationSettings: '"wdth" 100' }}>
            I'm Surendhar, a software developer focused on AI, cloud computing, and modern web technologies.
          </div>
        </div>

        {/* Right Side: Paragraphs & Button */}
        <div className="flex flex-col h-auto lg:h-full justify-end items-start w-full lg:max-w-[360px] lg:w-[360px] gap-8">
          <div className="flex flex-col gap-6 font-sans font-normal font-normal text-[#111] text-[16px] md:text-[18px] tracking-[-0.72px] leading-[1.4]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p>
              I design and develop AI-powered applications, full-stack web platforms, and cloud solutions that deliver real-world impact.
            </p>
            <p>
              My work combines software engineering, machine learning, and intuitive user experiences to build innovative digital products while continuously expanding my technical expertise.
            </p>
          </div>
          
          <a href="#contact" className="group flex items-center gap-3 cursor-pointer">
            <span className="font-sans font-normal font-normal text-[#111] text-[18px] tracking-[-0.72px]">
              Get Started
            </span>
            <div className="flex items-center justify-center size-[28px] rounded-lg border border-[#111] transition-transform group-hover:scale-110 group-hover:bg-[#111] group-hover:text-[#faf7f3]">
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </div>
          </a>
        </div>

      </ScrollReveal>
    </div>
  );
}
