import ScrollReveal from "../ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function BioSection() {
  return (
    <div className="flex h-[900px] w-full items-end justify-center relative shrink-0" data-name="Bio Section">
      <ScrollReveal className="flex w-full max-w-[1180px] h-[479.2px] items-end justify-between pb-[20px] relative shrink-0 px-6 md:px-0">
        
        {/* Left Side: Hey! I'm Surendhar... */}
        <div className="flex flex-col h-full justify-between items-start max-w-[300px] w-[300px]">
          <div className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#111] text-[48px] md:text-[76px] tracking-[-1.52px] leading-none" style={{ fontVariationSettings: '"wdth" 100' }}>
            Hey!
          </div>
          <div className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#111] text-[18px] md:text-[22px] tracking-[-0.88px] leading-[1.4] text-balance" style={{ fontVariationSettings: '"wdth" 100' }}>
            I'm Surendhar, a software developer focused on AI, cloud computing, and modern web technologies.
          </div>
        </div>

        {/* Right Side: Paragraphs & Button */}
        <div className="flex flex-col h-full justify-end items-start max-w-[360px] w-[360px] gap-8">
          <div className="flex flex-col gap-6 font-['Archivo:Regular',sans-serif] font-normal text-[#111] text-[16px] md:text-[18px] tracking-[-0.72px] leading-[1.4]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p>
              I design and develop AI-powered applications, full-stack web platforms, and cloud solutions that deliver real-world impact.
            </p>
            <p>
              My work combines software engineering, machine learning, and intuitive user experiences to build innovative digital products while continuously expanding my technical expertise.
            </p>
          </div>
          
          <a href="#contact" className="group flex items-center gap-3 cursor-pointer">
            <span className="font-['Archivo:Regular',sans-serif] font-normal text-[#111] text-[18px] tracking-[-0.72px]">
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
