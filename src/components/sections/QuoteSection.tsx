'use client';
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

export default function QuoteSection() {
  const words = [
    "Building", "software", "that", "makes", "an", "impact.",
    "I", "craft", "AI-powered", "applications,", "scalable", "cloud", "solutions,",
    "and", "modern", "web", "experiences", "that", "combine",
    "clean", "engineering,", "intuitive", "design,", "and", "real-world", "performance."
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[900px] py-32 px-6 bg-white relative">
      <div className="w-full max-w-[840px] flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        {words.map((word, i) => (
          <ScrollReveal key={i} className="inline-flex">
            <span className="font-['Archivo:Medium',sans-serif] font-medium text-[24px] md:text-[36px] tracking-[-0.72px] text-[#111]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {word}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

