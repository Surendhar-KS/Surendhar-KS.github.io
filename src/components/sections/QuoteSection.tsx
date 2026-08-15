import React from "react";
import QuoteReveal from "../QuoteReveal";

function WordSpan({ text }: { text: string }) {
  return (
    <div className="blur-[0px] content-stretch flex items-start relative shrink-0" data-name="span">
      <div
        className="[word-break:break-word] flex flex-col font-['Archivo',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111] text-[20px] sm:text-[24px] md:text-[36px] tracking-[-0.72px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[32px] sm:leading-[40px] md:leading-[50px]">{text}</p>
      </div>
    </div>
  );
}

export default function QuoteSection() {
  const words = [
    "Building", "software", "that", "makes", "an", "impact.",
    "I", "craft", "AI-powered", "applications,", "scalable", "cloud", "solutions,",
    "and", "modern", "web", "experiences", "that", "combine",
    "clean", "engineering,", "intuitive", "design,", "and", "real-world", "performance."
  ];

  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full bg-[#FAF7F3]"
      data-name="Quote Section"
    >
      <QuoteReveal />
      
      {/* 
        The outer container adds height so the sticky Content has room to scroll. 
        For example, height 1350px means the content sticks for 1350 - 900 = 450px of scroll. 
      */}
      <div
        className="content-stretch flex flex-col h-[900px] md:h-[1350px] items-center max-w-[1180px] w-full relative shrink-0"
        data-name="Container"
      >
        {/* 
          The sticky container that holds the text. 
        */}
        <div
          className="content-stretch flex h-[100vh] max-h-[900px] items-center justify-center overflow-clip shrink-0 sticky top-0 w-full px-6"
          data-name="Content"
        >
          <div
            className="content-stretch flex flex-col items-center max-w-[840px] relative shrink-0 w-full"
            data-name="div.framer-7opu6l-container"
          >
            <div
              className="flex flex-wrap items-center justify-center gap-x-[8px] md:gap-x-[12px] gap-y-[4px] relative shrink-0 w-full"
              data-name="div"
            >
              {words.map((word, i) => (
                <WordSpan key={i} text={word} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
