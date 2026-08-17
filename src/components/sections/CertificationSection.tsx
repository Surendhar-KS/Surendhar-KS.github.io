'use client';
import { ScrollFlipCard } from "../ScrollFlipCard";
import ScrollReveal from "../ScrollReveal";

export default function CertificationSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#111]" data-name="Certification Section">
      
      {/* Title & Description above the cards (restored from CraftedPrecisionSection) */}
      <div className="content-stretch flex items-center justify-center pt-[160px] pb-[40px] relative shrink-0 w-full" data-name="Crafted Precision Section">
        <ScrollReveal>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full text-center gap-4 px-6 md:px-0">
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-white tracking-tight font-sans font-semibold">
              Crafted with precision.
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-gray-400 font-sans font-normal max-w-[800px] leading-relaxed">
              A showcase of modern software, AI, and cloud solutions built for real-world impact.
            </p>
            <div className="flex flex-col items-center mt-4 md:mt-6 mb-[-40px] md:mb-[-80px] gap-2 opacity-70">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gray-400 font-semibold font-sans">Scroll</span>
              <div className="w-[1px] h-[25px] md:h-[40px] bg-gradient-to-b from-gray-500 to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* The Scroll Flip Cards */}
      <div className="w-full relative z-10 pb-32">
        <ScrollFlipCard />
      </div>
      
    </div>
  );
}
