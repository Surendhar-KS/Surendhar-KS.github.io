import ScrollExpand from "@/components/ScrollExpand";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ExperienceSection } from "../../components/ExperienceSection";
import React, { useState } from "react";
import svgPaths from "./svg-tdd3bumtl6";
const imgPortraitOfPortfolioCreatorBackView = "/images/portrait-of-portfolio-creator-back-view.png";;
const imgLIIjRx5GxRdY7UWw5WqIXicPoaPng = "/images/liij-rx5-gx-rd-y7-uww5-wq-ixic-poa-png.png";;
const imgOldYsHb9RMavvQrkVrNy08ZxyePng = "/images/old-ys-hb9-rmavv-qrk-vr-ny08-zxye-png.png";;
const imgVnxqLcPHw9VbVzy6BDpZ8PUsaUPng = "/projects/project1.png";
const imgWgEhvRrQs62RgxlzrnXjj8Rr4Png = "/projects/project2.png";
const imgI3AzeVtkvdKbGl9Tx38TUdXEb0Png = "/projects/project3.png";
const img1C3ZqErGdc7PqPIbDxtBaD4VGiQPng = "/projects/project4.png";
const imgManStandingNearBalcony = "/images/man-standing-near-balcony.png";;
const imgMg7SSqT3AUbDdMeyGynYfWvAwiPng = "/images/mg7-ssq-t3-aub-dd-mey-gyn-yf-wv-awi-png.png";;
const imgGrayscalePhotoOfMan = "/images/grayscale-photo-of-man.png";;
const imgYceQcLz3ChOtgu2OZRjmfEKjYPng = "/images/yce-qc-lz3-ch-otgu2-ozrjmf-ekj-ypng.png";;
const imgManStandingNearWhiteWall = "/images/man-standing-near-white-wall.png";;
const imgGN85DqTeMmVvE57UMiHhgeL4P4Png = "/images/gn85-dq-te-mm-vv-e57-umi-hhge-l4-p4-png.png";;
const imgManInBlackButtonUpShirt = "/images/man-in-black-button-up-shirt.png";;
const imgWsYtug4CqmLiu4LwbMuqx7FdOyPng = "/images/ws-ytug4-cqm-liu4-lwb-muqx7-fd-oy-png.png";;
const imgLxtBXj3G7Bloek83WxPy1ZUuw0QPng = "/images/lxt-bxj3-g7-bloek83-wx-py1-zuuw0-qpng.png";;
const imgIc9K42RYytbJtnRujXdcNxChScPng = "/images/ic9-k42-ryytb-jtn-ruj-xdc-nx-ch-sc-png.png";;
const imgDiv = "/images/div.png";;
type Component1Props = {
  className?: string;
  variant?: "1" | "7" | "8" | "9" | "13" | "14" | "15" | "16" | "17";
};

function Component1({ className, variant = "1" }: Component1Props) {
  const is13Or14Or15Or16 = ["13", "14", "15", "16"].includes(variant);
  const is14 = variant === "14";
  const is15 = variant === "15";
  const is16 = variant === "16";
  const is7Or8 = ["7", "8"].includes(variant);
  const is8 = variant === "8";
  const is9 = variant === "9";
  return (
    <div className={className || `overflow-clip relative ${variant === "17" ? "h-[114.677px] w-[366.98px]" : is13Or14Or15Or16 ? "size-[20px]" : is9 ? "h-[20px] w-[12px]" : is7Or8 ? "size-[16px]" : "size-[64px]"}`}>
      {["1", "13", "14", "15", "16"].includes(variant) && (
        <svg className="absolute block inset-0 size-full" fill="none" height={is13Or14Or15Or16 ? "20" : "64"} preserveAspectRatio="none" viewBox={is13Or14Or15Or16 ? "0 0 20 20" : "0 0 64 64"} width={is13Or14Or15Or16 ? "20" : "64"}>
          {is13Or14Or15Or16 && (
            <g clipPath={is15 ? "url(#clip0_0_43)" : is14 ? "url(#clip0_0_41)" : undefined} id={is16 ? "832930135" : is15 ? "3343558269" : is14 ? "2660449837" : "1554250168"}>
              <path d={is16 ? svgPaths.p193f5480 : is15 ? svgPaths.pc8bab00 : is14 ? svgPaths.pdedca80 : svgPaths.p9d0b1f0} id={is16 ? "gjBIq5II1" : is15 ? "zjjX2FG5P" : is14 ? "SX1RGYN3B" : "I7SuWiIoi"} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              {["15", "16"].includes(variant) && <path d={is16 ? svgPaths.p205b7af0 : svgPaths.p3575d1f0} id={is16 ? "H7TM4gAQc" : "c0NPcsxWN"} stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />}
              {is15 && <path d={svgPaths.pd7c4380} id="rJBOynbA9" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />}
            </g>
          )}
          {["14", "15"].includes(variant) && (
            <defs>
              <clipPath id={is15 ? "clip0_0_43" : "clip0_0_41"}>
                <rect fill="white" height="20" width="20" />
              </clipPath>
            </defs>
          )}
          {variant === "1" && <path clipRule="evenodd" d={svgPaths.p3c51c4f0} fill="#888888" fillOpacity="0.2" fillRule="evenodd" id="Vector" />}
        </svg>
      )}
      {is7Or8 && (
        <div className={`absolute ${is8 ? "inset-[12.5%]" : "inset-[8.59%_8.2%_8.2%_8.59%]"}`} data-name="Group">
          <svg className="absolute block inset-0 size-full" fill="none" height={is8 ? "12" : "13.313"} preserveAspectRatio="none" viewBox={is8 ? "0 0 12 12" : "0 0 13.3135 13.313"} width={is8 ? "12" : "13.3135"}>
            <g id="Group">
              <path clipRule="evenodd" d={is8 ? svgPaths.p4bfdd00 : svgPaths.pe054c00} fill={is8 ? "#F3F3F3" : "#6841EA"} fillRule="evenodd" id="Vector" />
            </g>
          </svg>
        </div>
      )}
      {is9 && (
        <div className="absolute inset-[7.5%_0_2.5%_0]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 12 18" width="12">
            <path d={svgPaths.p2b960800} fill="black" id="Vector" />
          </svg>
        </div>
      )}
    </div>
  );
}
type ComponentProps = {
  className?: string;
  variant?: "7" | "8" | "9" | "10" | "11" | "12";
};

function Component({ className, variant = "7" }: ComponentProps) {
  return (
    <div className={className || "overflow-clip relative size-[28.284px]"}>
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="1235104226">
          <path d={svgPaths.p370e6b00} id="JgTGlz8TK" stroke={["8", "10", "11"].includes(variant) ? "#FAF7F3" : "#111111"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function PortraitOfPortfolioCreatorBackView() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full" data-name="Portrait of portfolio creator – back view">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[117.57%] left-0 max-w-none top-[-8.79%] w-full" src={imgPortraitOfPortfolioCreatorBackView} />
      </div>
    </div>
  );
}

function AvatarBack() {
  return (
    <div className="absolute content-stretch flex flex-col h-[205.2px] items-start justify-center left-0 overflow-clip rounded-[20px] top-0 w-[180px]" data-name="Avatar - Back">
      <PortraitOfPortfolioCreatorBackView />
    </div>
  );
}

function PortraitOfPortfolioCreatorFrontView() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full" data-name="Portrait of portfolio creator – front view">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[117.57%] left-0 max-w-none top-[-8.79%] w-full" src={imgPortraitOfPortfolioCreatorBackView} />
      </div>
    </div>
  );
}

function AvatarFront() {
  return (
    <div className="absolute flex h-[205.2px] items-center justify-center left-0 top-0 w-[180px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="bg-white content-stretch flex flex-col h-[205.2px] items-start justify-center overflow-clip relative rounded-[20px] w-[180px]" data-name="Avatar - Front">
          <PortraitOfPortfolioCreatorFrontView />
        </div>
      </div>
    </div>
  );
}

function AvatarWrap() {
  return (
    <motion.div initial={{ opacity: 0, y: 20, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="h-[205.2px] relative shrink-0 w-[180px]" data-name="Avatar Wrap">
      <AvatarBack />
      <AvatarFront />
    </motion.div>
  );
}

function StickyContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[780px] items-end justify-center min-w-px overflow-clip pb-[120px] sticky top-0" data-name="Sticky Container">
      <AvatarWrap />
    </div>
  );
}

function StickyAvatarWrap() {
  return (
    <div className="absolute content-stretch flex h-[780px] items-start justify-center left-0 right-0 top-0" data-name="Sticky Avatar Wrap">
      <StickyContainer />
    </div>
  );
}

function H1FramerText() {
  return (
    <div className="[word-break:break-word] font-['Archivo:ExtraBold',sans-serif] font-extrabold h-[82.8px] leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[46px] text-center tracking-[-0.92px] w-full" data-name="h1.framer-text">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+0.45px)] top-[20px] w-[267.486px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[41.4px]">{`SOFTWARE `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col justify-center left-[calc(50%+0.77px)] top-[62.1px] w-[250.189px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[41.4px]">ENGINEER</p>
      </div>
    </div>
  );
}

function DivFramer1Pbt0W() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-1pbt0w0">
      <H1FramerText />
    </div>
  );
}

function LIIjRx5GxRdY7UWw5WqIXicPoaPng() {
  return (
    <div className="h-[80.011px] relative shrink-0 w-full" data-name="lIIjRX5gxRdY7UWw5wqIXicPOA.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-[0.01%] w-full" src={imgLIIjRx5GxRdY7UWw5WqIXicPoaPng} />
      </div>
    </div>
  );
}

function HoloTriangleRounded() {
  return (
    <div className="absolute bottom-[-57.48px] flex h-[98.963px] items-center justify-center right-[-30.48px] w-[98.955px] z-[50]">
      <div className="flex-none rotate-16">
        <div className="aspect-[80/80] content-stretch flex flex-col items-start justify-center relative w-full" data-name="holo_triangle_rounded">
          <LIIjRx5GxRdY7UWw5WqIXicPoaPng />
        </div>
      </div>
    </div>
  );
}

function OldYsHb9RMavvQrkVrNy08ZxyePng() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="OLDYsHB9RMavvQrkVRNy08ZXYE.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgOldYsHb9RMavvQrkVrNy08ZxyePng} />
      </div>
    </div>
  );
}

function HoloTriangleRounded1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[-22px] top-[-44px] w-[60px]" data-name="holo_triangle_rounded">
      <OldYsHb9RMavvQrkVrNy08ZxyePng />
    </div>
  );
}

function Title() {
  return (
    <motion.div 
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center justify-center w-full mb-8 -mt-8 md:-mt-[80px]" 
      data-name="Title"
    >
      <div className="relative flex flex-col items-center">
        {/* Star */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -left-6 md:-left-[115px] -top-8 md:-top-[60px] w-[55px] md:w-[110px] z-10"
        >
          <img src={imgOldYsHb9RMavvQrkVrNy08ZxyePng} alt="Star" className="w-full h-auto drop-shadow-2xl animate-pulse" />
        </motion.div>
        
        {/* Text */}
        <motion.h1 
          initial={{ color: '#d1d5db' }}
          animate={{ color: '#111111' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-['Archivo:ExtraBold',sans-serif] font-extrabold text-[52px] md:text-[174px] leading-[0.85] tracking-[-0.04em] text-center m-0 z-0 relative"
        >
          SOFT<span className="ml-[0.06em]">W</span>ARE<br/>ENGINEER
        </motion.h1>
        
        {/* Lightning Bolt */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 21 }}
          animate={{ opacity: 1, scale: 1, rotate: 24 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-6 md:-right-[115px] -bottom-6 md:-bottom-[50px] w-[50px] md:w-[100px] z-[50] drop-shadow-2xl"
        >
          <img src={imgLIIjRx5GxRdY7UWw5WqIXicPoaPng} alt="Lightning" className="w-full h-auto" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function PFramerText() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[18px] text-center tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">/CREATING SINCE 2020</p>
      </div>
    </div>
  );
}

function DivFramerJb5Itc() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-jb5itc">
      <PFramerText />
    </div>
  );
}

function Text() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }} className="absolute bottom-[80px] content-stretch flex h-[25.2px] items-end justify-center left-[30px] right-[30px]" data-name="Text">
      <DivFramerJb5Itc />
    </motion.div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-full max-w-[1180px] min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] pb-[100px] px-[10px] relative size-full">
          <Title />
          <Text />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex h-[780px] items-center justify-center relative shrink-0 w-full" data-name="Hero Section">
      <Container />
    </div>
  );
}

function H2FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[46px] tracking-[-0.92px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[46px]">Hey!</p>
      </div>
    </div>
  );
}

function PFramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[22px] tracking-[-0.88px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[30.8px] mb-0 text-balance">I'm Surendhar, a software developer focused on AI, cloud computing, and modern web technologies.</p>
      </div>
    </div>
  );
}

function TitleDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[99.4px] items-center max-w-[300px] relative shrink-0 w-[300px]" data-name="Title & Description">
      <H2FramerText />
      <PFramerText1 />
    </div>
  );
}

function PFramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[18px] tracking-[-0.72px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px] mb-0">{`I design and develop AI-powered applications, `}</p>
        <p className="leading-[25.2px] mb-0">{`full-stack web platforms, and cloud solutions `}</p>
        <p className="leading-[25.2px]">{`that deliver real-world impact.`}</p>
      </div>
    </div>
  );
}

function PFramerText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[18px] tracking-[-0.72px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px] mb-0">{`My work combines software engineering, `}</p>
        <p className="leading-[25.2px] mb-0">{`machine learning, and intuitive user `}</p>
        <p className="leading-[25.2px] mb-0">{`experiences to build innovative digital `}</p>
        <p className="leading-[25.2px] mb-0">{`products while continuously expanding `}</p>
        <p className="leading-[25.2px]">my technical expertise.</p>
      </div>
    </div>
  );
}

function PFramerTextMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[19.2px] relative shrink-0 w-full" data-name="p.framer-text:margin">
      <PFramerText3 />
    </div>
  );
}

function DivFramer159Qlij() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-159qlij">
      <PFramerText2 />
      <PFramerTextMargin />
    </div>
  );
}

function PFramerText4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[18px] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Get Started</p>
      </div>
    </div>
  );
}

function DivFramer5Piecp() {
  return (
    <div className="h-[25.2px] relative shrink-0 w-[84.05px]" data-name="div.framer-5piecp">
      <PFramerText4 />
    </div>
  );
}

function ArrowButton() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-name="Arrow Button">
      <div className="absolute border border-[#111] border-solid inset-0 rounded-[8px]" data-name="::after" />
      <Component className="-translate-x-1/2 absolute bottom-[-0.51%] flex items-center justify-center left-1/2 top-[-0.51%] w-[28.284px]" />
      <Component className="absolute bottom-[-21.14px] flex items-center justify-center left-[-21.14px] size-[28.284px]" variant="8" />
    </div>
  );
}

function Primary() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Primary">
      <DivFramer5Piecp />
      <ArrowButton />
    </div>
  );
}

function DivFramerJxruppContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-jxrupp-container">
      <Primary />
    </div>
  );
}

function Paragraphs() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-end max-w-[360px] relative shrink-0 w-full" data-name="Paragraphs">
      <DivFramer159Qlij />
      <DivFramerJxruppContainer />
    </div>
  );
}

function Container1() {
  return (
    <ScrollReveal className="flex-[1_0_0] max-w-[1180px] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[39.2px] items-start max-w-[inherit] px-[20px] relative size-full">
        <TitleDescription />
        <Paragraphs />
      </div>
    </ScrollReveal>
  );
}

function BioSection() {
  return (
    <div className="content-stretch flex items-end justify-center pt-[100px] relative shrink-0 w-full" data-name="Bio Section">
      <Container1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Content">
      <HeroSection />
      <BioSection />
    </div>
  );
}

function HeroBioSections() {
  return (
    <div id="about" className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Hero & Bio Sections">
      <StickyAvatarWrap />
      <Content />
    </div>
  );
}

function WordSpan({ text }: { text: string }) {
  return (
    <div className="flex items-start justify-center" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[24px] text-center tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28.8px]">{text}</p>
      </div>
    </div>
  );
}

function Div() {
  const words = [
    "Building", "software", "that", "makes", "an", "impact.",
    "I", "craft", "AI-powered", "applications,", "scalable", "cloud", "solutions,",
    "and", "modern", "web", "experiences", "that", "combine",
    "clean", "engineering,", "intuitive", "design,", "and", "real-world", "performance."
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-[8px] gap-y-0 relative shrink-0 w-full" data-name="div">
      {words.map((word, i) => <WordSpan key={i} text={word} />)}
    </div>
  );
}

function DivFramer7Opu6LContainer() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[540px] relative shrink-0 w-full" data-name="div.framer-7opu6l-container">
      <Div />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col h-[780px] items-center justify-center shrink-0 sticky top-0 w-full" data-name="Content">
      <DivFramer7Opu6LContainer />
    </div>
  );
}

function QuoteSectionContainer() {
  return (
    <div className="h-[1170px] max-w-[1180px] relative shrink-0 w-full" data-name="Quote Section → Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] px-[20px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function H2FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[46px] tracking-[-0.92px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[46px]">Services</p>
      </div>
    </div>
  );
}

function DivFramer1Nuet6A() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-1nuet6a">
      <H2FramerText1 />
    </div>
  );
}

function H3FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[28px] tracking-[-0.56px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Website Migration</p>
      </div>
    </div>
  );
}

function PFramerText5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Web Migration</p>
      </div>
    </div>
  );
}

function DivFramerX4K8Oa() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-0 top-[calc(50%-17.6px)] w-[105px]" data-name="div.framer-x4k8oa">
      <PFramerText5 />
    </div>
  );
}

function PFramerText6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Optimization</p>
      </div>
    </div>
  );
}

function DivFramer1Dvkwdb() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-[129px] top-[calc(50%-17.6px)] w-[92.89px]" data-name="div.framer-1dvkwdb">
      <PFramerText6 />
    </div>
  );
}

function PFramerText7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Framer Rebuild</p>
      </div>
    </div>
  );
}

function DivFramer1Eaeiv() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-0 top-[calc(50%+17.6px)] w-[112.66px]" data-name="div.framer-1eaeiv5">
      <PFramerText7 />
    </div>
  );
}

function Categories() {
  return (
    <div className="h-[60.4px] relative shrink-0 w-full" data-name="Categories">
      <div className="-translate-y-1/2 absolute bg-[#111] left-[115px] rounded-[89px] size-[4px] top-[calc(50%-17.6px)]" data-name="Dot" />
      <div className="-translate-y-1/2 absolute bg-[#111] left-[231.89px] rounded-[89px] size-[4px] top-[calc(50%-17.6px)]" data-name="Dot" />
      <DivFramerX4K8Oa />
      <DivFramer1Dvkwdb />
      <DivFramer1Eaeiv />
    </div>
  );
}

function Mobile() {
  return (
    <div className="bg-[#faf7f3] content-stretch flex flex-col gap-[20px] items-start min-h-[120px] overflow-clip pb-[20px] pt-[19.4px] relative shrink-0 w-full" data-name="Mobile">
      <H3FramerText />
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Categories />
    </div>
  );
}

function DivFramer99NfdqContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.4px]" data-name="div.framer-99nfdq-container">
      <Mobile />
    </div>
  );
}

function H3FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[28px] tracking-[-0.56px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Framer Templates</p>
      </div>
    </div>
  );
}

function PFramerText8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Startup</p>
      </div>
    </div>
  );
}

function DivFramerX4K8Oa1() {
  return (
    <div className="h-[25.2px] relative shrink-0 w-[53.88px]" data-name="div.framer-x4k8oa">
      <PFramerText8 />
    </div>
  );
}

function PFramerText9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Agency</p>
      </div>
    </div>
  );
}

function DivFramer1Dvkwdb1() {
  return (
    <div className="h-[25.2px] relative shrink-0 w-[56.39px]" data-name="div.framer-1dvkwdb">
      <PFramerText9 />
    </div>
  );
}

function PFramerText10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">SaaS</p>
      </div>
    </div>
  );
}

function DivFramer1Eaeiv1() {
  return (
    <div className="h-[25.2px] relative shrink-0 w-[40.98px]" data-name="div.framer-1eaeiv5">
      <PFramerText10 />
    </div>
  );
}

function Categories1() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_10px] items-center relative shrink-0 w-full" data-name="Categories">
      <DivFramerX4K8Oa1 />
      <div className="bg-[#111] relative rounded-[89px] shrink-0 size-[4px]" data-name="Dot" />
      <DivFramer1Dvkwdb1 />
      <div className="bg-[#111] relative rounded-[89px] shrink-0 size-[4px]" data-name="Dot" />
      <DivFramer1Eaeiv1 />
    </div>
  );
}

function Mobile1() {
  return (
    <div className="bg-[#faf7f3] content-stretch flex flex-col gap-[20px] items-start min-h-[120px] overflow-clip pb-[21.2px] pt-[19.4px] relative shrink-0 w-full" data-name="Mobile">
      <H3FramerText1 />
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Categories1 />
    </div>
  );
}

function DivFramer5X1N75Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.4px]" data-name="div.framer-5x1n75-container">
      <Mobile1 />
    </div>
  );
}

function H3FramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[28px] tracking-[-0.56px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Frontend Development</p>
      </div>
    </div>
  );
}

function PFramerText11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">UI Dev</p>
      </div>
    </div>
  );
}

function DivFramerX4K8Oa2() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-0 top-[calc(50%-17.6px)] w-[49.56px]" data-name="div.framer-x4k8oa">
      <PFramerText11 />
    </div>
  );
}

function PFramerText12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Responsive Layouts</p>
      </div>
    </div>
  );
}

function DivFramer1Dvkwdb2() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-[73.56px] top-[calc(50%-17.6px)] w-[148.78px]" data-name="div.framer-1dvkwdb">
      <PFramerText12 />
    </div>
  );
}

function PFramerText13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Web Performance</p>
      </div>
    </div>
  );
}

function DivFramer1Eaeiv2() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-0 top-[calc(50%+17.6px)] w-[132.3px]" data-name="div.framer-1eaeiv5">
      <PFramerText13 />
    </div>
  );
}

function Categories2() {
  return (
    <div className="h-[60.4px] relative shrink-0 w-full" data-name="Categories">
      <div className="-translate-y-1/2 absolute bg-[#111] left-[59.56px] rounded-[89px] size-[4px] top-[calc(50%-17.6px)]" data-name="Dot" />
      <div className="-translate-y-1/2 absolute bg-[#111] left-[232.34px] rounded-[89px] size-[4px] top-[calc(50%-17.6px)]" data-name="Dot" />
      <DivFramerX4K8Oa2 />
      <DivFramer1Dvkwdb2 />
      <DivFramer1Eaeiv2 />
    </div>
  );
}

function Mobile2() {
  return (
    <div className="bg-[#faf7f3] content-stretch flex flex-col gap-[20px] items-start min-h-[120px] overflow-clip pb-[20px] pt-[19.4px] relative shrink-0 w-full" data-name="Mobile">
      <H3FramerText2 />
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Categories2 />
    </div>
  );
}

function DivFramer945PruContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.4px]" data-name="div.framer-945pru-container">
      <Mobile2 />
    </div>
  );
}

function H3FramerText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[28px] tracking-[-0.56px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Product Consulting</p>
      </div>
    </div>
  );
}

function PFramerText14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Product Direction</p>
      </div>
    </div>
  );
}

function DivFramerX4K8Oa3() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-0 top-[calc(50%-17.6px)] w-[126.61px]" data-name="div.framer-x4k8oa">
      <PFramerText14 />
    </div>
  );
}

function PFramerText15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Web Strategy</p>
      </div>
    </div>
  );
}

function DivFramer1Dvkwdb3() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-[150.61px] top-[calc(50%-17.6px)] w-[98.38px]" data-name="div.framer-1dvkwdb">
      <PFramerText15 />
    </div>
  );
}

function PFramerText16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-[rgba(17,17,17,0.5)] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">Technical Guidance</p>
      </div>
    </div>
  );
}

function DivFramer1Eaeiv3() {
  return (
    <div className="-translate-y-1/2 absolute h-[25.2px] left-0 top-[calc(50%+17.6px)] w-[144.85px]" data-name="div.framer-1eaeiv5">
      <PFramerText16 />
    </div>
  );
}

function Categories3() {
  return (
    <div className="h-[60.4px] relative shrink-0 w-full" data-name="Categories">
      <div className="-translate-y-1/2 absolute bg-[#111] left-[136.61px] rounded-[89px] size-[4px] top-[calc(50%-17.6px)]" data-name="Dot" />
      <div className="-translate-y-1/2 absolute bg-[#111] left-[258.99px] rounded-[89px] size-[4px] top-[calc(50%-17.6px)]" data-name="Dot" />
      <DivFramerX4K8Oa3 />
      <DivFramer1Dvkwdb3 />
      <DivFramer1Eaeiv3 />
    </div>
  );
}

function Mobile3() {
  return (
    <div className="bg-[#faf7f3] content-stretch flex flex-col gap-[20px] items-start min-h-[120px] overflow-clip pb-[20px] pt-[19.4px] relative shrink-0 w-full" data-name="Mobile">
      <H3FramerText3 />
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <Categories3 />
    </div>
  );
}

function DivFramerMg5C04Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[350.4px]" data-name="div.framer-mg5c04-container">
      <Mobile3 />
    </div>
  );
}

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
          className="[word-break:break-word] flex flex-row items-center gap-4 font-['Archivo:Medium',sans-serif] font-medium justify-start relative shrink-0 text-[color:var(--reveal-color,#111)] text-[24px] sm:text-[28px] lg:text-[32px] tracking-[-0.56px] lg:tracking-[-0.64px]" style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <p className="leading-[1.2] lg:leading-[38.4px] text-left">{title}</p>
          <motion.svg 
            variants={{ hover: { opacity: 1, x: 0 }, initial: { opacity: 0, x: -10 } }}
            initial="initial"
            className="w-6 h-6 lg:w-8 lg:h-8 text-[#111] shrink-0"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </motion.div>
      </div>
      
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.1)] border-b-[0.8px] border-solid inset-x-[20px] bottom-0 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
      
      <motion.div 
        variants={{ hover: { x: -10 } }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="content-stretch flex gap-[10px] flex-wrap items-center justify-start lg:justify-center relative shrink-0 z-10"
      >
        {tags.map((tag, i) => {
          const els = [
            <div key={`tag-${i}`} className="relative shrink-0">
              <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] lg:text-[18px] text-[rgba(17,17,17,0.5)] group-hover:text-[rgba(17,17,17,0.9)] tracking-[-0.72px] whitespace-nowrap transition-colors duration-300" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25.2px]">{tag}</p>
              </div>
            </div>
          ];
          if (i < tags.length - 1) {
            els.push(<div key={`dot-${i}`} className="bg-[#111] opacity-50 group-hover:opacity-100 relative rounded-[89px] shrink-0 size-[4px] transition-opacity duration-300" />);
          }
          return els;
        })}
      </motion.div>
    </motion.div>
  );
}

function ServicesCards() {
  const services = [
    { title: "Full-Stack Development", tags: ["React", "Java", "Spring Boot", "REST APIs"] },
    { title: "Cloud Computing", tags: ["AWS", "Docker", "CI/CD", "Serverless"] },
    { title: "Artificial Intelligence", tags: ["LLM Integration", "TensorFlow", "Computer Vision", "AI Automation"] },
    { title: "Data Analytics", tags: ["Power BI", "SQL", "Python", "Business Intelligence"] }
  ];
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Services Cards">
      {services.map((s, i) => (
        <div key={i} className="content-stretch flex flex-col items-start w-full relative shrink-0">
          <ServiceRow index={i} title={s.title} tags={s.tags} />
        </div>
      ))}
    </div>
  );
}

function ServicesSectionContainer() {
  return (
    <div id="services" className="max-w-[1180px] relative shrink-0 w-full" data-name="Services Section → Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center max-w-[inherit] px-[20px] relative size-full">
          <DivFramer1Nuet6A />
          <ServicesCards />
        </div>
      </div>
    </div>
  );
}

function H2FramerText2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-[320px]" data-name="h2.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[46px] tracking-[-0.92px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[46px] mb-0 whitespace-pre">{`Curated `}</p>
        <p className="leading-[46px] whitespace-pre">Projects</p>
      </div>
    </div>
  );
}

function PFramerText17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[18px] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">View All Work</p>
      </div>
    </div>
  );
}

function DivFramer5Piecp1() {
  return (
    <div className="h-[25.2px] relative shrink-0 w-[98.45px]" data-name="div.framer-5piecp">
      <PFramerText17 />
    </div>
  );
}

function ArrowButton1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-name="Arrow Button">
      <div className="absolute border border-[#111] border-solid inset-0 rounded-[8px]" data-name="::after" />
      <Component className="-translate-x-1/2 absolute bottom-[-0.51%] flex items-center justify-center left-1/2 top-[-0.51%] w-[28.284px]" variant="9" />
      <Component className="absolute bottom-[-21.14px] flex items-center justify-center left-[-21.14px] size-[28.284px]" variant="10" />
    </div>
  );
}

function Primary1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Primary">
      <DivFramer5Piecp1 />
      <ArrowButton1 />
    </div>
  );
}

function DivFramerI3ExzpContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-i3exzp-container">
      <Primary1 />
    </div>
  );
}

function ButtonWrap() {
  return (
    <div className="content-stretch flex items-center justify-end overflow-clip relative shrink-0 w-full" data-name="Button Wrap">
      <DivFramerI3ExzpContainer />
    </div>
  );
}

function TitleButton() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Title & Button">
      <H2FramerText2 />
      <ButtonWrap />
    </div>
  );
}

function VnxqLcPHw9VbVzy6BDpZ8PUsaUPng() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full" data-name="VNXQLcPHw9VbVzy6BDpZ8pUsaU.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.03%]" src={imgVnxqLcPHw9VbVzy6BDpZ8PUsaUPng} />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-col aspect-[16/9] h-auto items-start justify-center relative rounded-[20px] shrink-0 w-full" data-name="Image">
      <VnxqLcPHw9VbVzy6BDpZ8PUsaUPng />
    </div>
  );
}

function ImageWrap() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Image Wrap">
      <Image />
    </div>
  );
}

function H3FramerText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[28px] tracking-[-0.56px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">AI-Powered Interview Platform</p>
      </div>
    </div>
  );
}

function DivFramerV4Eg3F() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-11.6px)]" data-name="div.framer-v4eg3f">
      <H3FramerText4 />
    </div>
  );
}

function PFramerText18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Smart AI hiring platform.</p>
      </div>
    </div>
  );
}

function DivFramer1Eobfit() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%+17.1px)]" data-name="div.framer-1eobfit">
      <PFramerText18 />
    </div>
  );
}

function TitleDescription1() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Title & Description">
      <DivFramerV4Eg3F />
      <DivFramer1Eobfit />
    </div>
  );
}

function ProjectCard() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Project Card">
      <ImageWrap />
    </div>
  );
}

function DivFramer19XgbboContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-19xgbbo-container">
      <ProjectCard />
    </div>
  );
}

function WgEhvRrQs62RgxlzrnXjj8Rr4Png() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full" data-name="WgEHVRrQs62rgxlzrnXJJ8rr4.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.03%]" src={imgWgEhvRrQs62RgxlzrnXjj8Rr4Png} />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex flex-col aspect-[16/9] h-auto items-start justify-center relative rounded-[20px] shrink-0 w-full" data-name="Image">
      <WgEhvRrQs62RgxlzrnXjj8Rr4Png />
    </div>
  );
}

function ImageWrap1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Image Wrap">
      <Image1 />
    </div>
  );
}

function H3FramerText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-white text-[28px] tracking-[-0.56px] w-full " style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Portable Microplastic Detection</p>
      </div>
    </div>
  );
}

function DivFramerV4Eg3F1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-11.6px)]" data-name="div.framer-v4eg3f">
      <H3FramerText5 />
    </div>
  );
}

function PFramerText19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-white/78 text-[16px] tracking-[-0.64px] w-full " style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">AI-based water analysis.</p>
      </div>
    </div>
  );
}

function DivFramer1Eobfit1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%+17.1px)]" data-name="div.framer-1eobfit">
      <PFramerText19 />
    </div>
  );
}

function TitleDescription2() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Title & Description">
      <DivFramerV4Eg3F1 />
      <DivFramer1Eobfit1 />
    </div>
  );
}

function ProjectCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Project Card">
      <ImageWrap1 />
    </div>
  );
}

function DivFramer19XgbboContainer1() {
  return (
    <div className="relative content-stretch flex flex-col items-start w-full shadow-2xl rounded-[20px] bg-[linear-gradient(to_bottom,#6549BC,#6347BA)] p-[30px]" data-name="div.framer-19xgbbo-container">
      <ProjectCard1 />
    </div>
  );
}

function I3AzeVtkvdKbGl9Tx38TUdXEb0Png() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full" data-name="I3azeVtkvdKBGl9TX38tUdXEb0.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.03%]" src={imgI3AzeVtkvdKbGl9Tx38TUdXEb0Png} />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="content-stretch flex flex-col aspect-[16/9] h-auto items-start justify-center relative rounded-[20px] shrink-0 w-full" data-name="Image">
      <I3AzeVtkvdKbGl9Tx38TUdXEb0Png />
    </div>
  );
}

function ImageWrap2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Image Wrap">
      <Image2 />
    </div>
  );
}

function H3FramerText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-white text-[28px] tracking-[-0.56px] w-full " style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">Retail Analytics Dashboard</p>
      </div>
    </div>
  );
}

function DivFramerV4Eg3F2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-11.6px)]" data-name="div.framer-v4eg3f">
      <H3FramerText6 />
    </div>
  );
}

function PFramerText20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-white/78 text-[16px] tracking-[-0.64px] w-full " style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Data-driven business insights.</p>
      </div>
    </div>
  );
}

function DivFramer1Eobfit2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%+17.1px)]" data-name="div.framer-1eobfit">
      <PFramerText20 />
    </div>
  );
}

function TitleDescription3() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Title & Description">
      <DivFramerV4Eg3F2 />
      <DivFramer1Eobfit2 />
    </div>
  );
}

function ProjectCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Project Card">
      <ImageWrap2 />
    </div>
  );
}

function DivFramer19XgbboContainer2() {
  return (
    <div className="relative content-stretch flex flex-col items-start w-full shadow-2xl rounded-[20px] bg-gradient-to-br from-rose-400 to-rose-600 p-[30px]" data-name="div.framer-19xgbbo-container">
      <ProjectCard2 />
    </div>
  );
}

function Component1C3ZqErGdc7PqPIbDxtBaD4VGiQPng() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full" data-name="1C3zqERGdc7pqPIbDxtBaD4VGiQ.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-full left-[-0.01%] max-w-none top-0 w-[100.03%]" src={img1C3ZqErGdc7PqPIbDxtBaD4VGiQPng} />
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="content-stretch flex flex-col aspect-[16/9] h-auto items-start justify-center relative rounded-[20px] shrink-0 w-full" data-name="Image">
      <Component1C3ZqErGdc7PqPIbDxtBaD4VGiQPng />
    </div>
  );
}

function ImageWrap3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Image Wrap">
      <Image3 />
    </div>
  );
}

function H3FramerText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#111] text-[28px] tracking-[-0.56px] w-full " style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px]">SmartBus Live Tracker</p>
      </div>
    </div>
  );
}

function DivFramerV4Eg3F3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%-11.6px)]" data-name="div.framer-v4eg3f">
      <H3FramerText7 />
    </div>
  );
}

function PFramerText21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#111]/78 text-[16px] tracking-[-0.64px] w-full " style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Live public transport tracking.</p>
      </div>
    </div>
  );
}

function DivFramer1Eobfit3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 right-0 top-[calc(50%+17.1px)]" data-name="div.framer-1eobfit">
      <PFramerText21 />
    </div>
  );
}

function TitleDescription4() {
  return (
    <div className="h-[56px] overflow-clip relative shrink-0 w-full" data-name="Title & Description">
      <DivFramerV4Eg3F3 />
      <DivFramer1Eobfit3 />
    </div>
  );
}

function ProjectCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Project Card">
      <ImageWrap3 />
    </div>
  );
}

function DivFramer19XgbboContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-19xgbbo-container">
      <ProjectCard3 />
    </div>
  );
}

function DivFramer6Rbvdk() {
  return (
    <div className="relative flex flex-col h-full gap-[10vh] pb-[20vh] w-full max-w-[1000px] mx-auto items-center" data-name="div.framer-6rbvdk">
      <motion.div 
        initial={{ opacity: 0, y: 150, scale: 0.85 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        viewport={{ once: false, margin: "-15%" }} 
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
        className="sticky top-[15vh] w-full transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        <DivFramer19XgbboContainer />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 150, scale: 0.85 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        viewport={{ once: false, margin: "-15%" }} 
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
        className="sticky top-[20vh] w-full transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        <DivFramer19XgbboContainer1 />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 150, scale: 0.85 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        viewport={{ once: false, margin: "-15%" }} 
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
        className="sticky top-[25vh] w-full transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        <DivFramer19XgbboContainer2 />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 150, scale: 0.85 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        viewport={{ once: false, margin: "-15%" }} 
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
        className="sticky top-[30vh] w-full transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        <DivFramer19XgbboContainer3 />
      </motion.div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] max-w-[1180px] min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="w-full relative px-[20px]">
        
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

          <div className="absolute top-[220vh] bottom-0 left-0 px-[20px] w-full z-10 flex flex-col gap-[60px] pointer-events-none">
            <div className="pointer-events-auto">
              <TitleButton />
            </div>
            <div className="pointer-events-auto flex-1 w-full h-full">
              <DivFramer6Rbvdk />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div id="projects" className="content-stretch flex items-center justify-center pt-[140px] relative shrink-0 w-full" data-name="Curated Projects Section">
      <Container2 />
    </div>
  );
}

function H2FramerText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[46px] tracking-[-0.92px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[46px]">Testimonials</p>
      </div>
    </div>
  );
}

function DivFramer1Fv9Hd() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-1fv9hd4">
      <H2FramerText3 />
    </div>
  );
}

function PFramerText22() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[18px] tracking-[-0.72px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px] mb-0">{`Templyo completely changed how I `}</p>
        <p className="leading-[25.2px] mb-0">{`approach building sites in Framer. The `}</p>
        <p className="leading-[25.2px] mb-0">{`templates are not just beautiful, they’re `}</p>
        <p className="leading-[25.2px] mb-0">{`actually structured in a way that makes `}</p>
        <p className="leading-[25.2px]">scaling so much easier.</p>
      </div>
    </div>
  );
}

function ManStandingNearBalcony() {
  return (
    <div className="h-[50px] relative rounded-[226px] shrink-0 w-full" data-name="man standing near balcony">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[226px]">
        <img alt="" className="absolute h-[137.45%] left-0 max-w-none top-[-18.72%] w-full" src={imgManStandingNearBalcony} />
      </div>
    </div>
  );
}

function DivFramer1I87Y9P() {
  return (
    <div className="aspect-[50/50] content-stretch flex flex-col items-start justify-center relative rounded-[226px] shrink-0" data-name="div.framer-1i87y9p">
      <ManStandingNearBalcony />
    </div>
  );
}

function PFramerText23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Yakoub Kashmiri</p>
      </div>
    </div>
  );
}

function DivFramerNpgsd() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-npgsd9">
      <PFramerText23 />
    </div>
  );
}

function PFramerText24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Marketing Director</p>
      </div>
    </div>
  );
}

function DivFramerMdr6Kf() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-mdr6kf">
      <PFramerText24 />
    </div>
  );
}

function NameRole() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name & Role">
      <DivFramerNpgsd />
      <DivFramerMdr6Kf />
    </div>
  );
}

function Author() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Author">
      <DivFramer1I87Y9P />
      <NameRole />
    </div>
  );
}

function FrontFace1() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col inset-[0_0.17%_0_-0.17%] items-center justify-between pb-[20px] pt-[19.4px] px-[20px] rounded-[20px]" data-name="Front Face">
      <PFramerText22 />
      <Author />
    </div>
  );
}

function Mg7SSqT3AUbDdMeyGynYfWvAwiPng() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="MG7SSqT3AUbDDMeyGynYFWvAWI.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMg7SSqT3AUbDdMeyGynYfWvAwiPng} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="aspect-[60/60] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Logo">
      <Mg7SSqT3AUbDdMeyGynYfWvAwiPng />
    </div>
  );
}

function BackFace() {
  return (
    <div className="absolute flex inset-[0_0.17%_0_-0.17%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="bg-[#111] content-stretch flex flex-col items-center justify-center relative rounded-[20px] size-full" data-name="Back Face">
          <Logo />
        </div>
      </div>
    </div>
  );
}

function FrontFace() {
  return (
    <div className="h-[340px] relative rounded-[20px] shrink-0 w-full" data-name="Front Face">
      <FrontFace1 />
      <BackFace />
    </div>
  );
}

function DivFramerE41VzkContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-e41vzk-container">
      <FrontFace />
    </div>
  );
}

function PFramerText25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[18px] tracking-[-0.72px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px] mb-0">{`I’ve tried dozens of Framer templates, but `}</p>
        <p className="leading-[25.2px] mb-0">{`Templyo stands out. Everything feels `}</p>
        <p className="leading-[25.2px] mb-0">{`intentional, from the layout to the smallest `}</p>
        <p className="leading-[25.2px]">interactions.</p>
      </div>
    </div>
  );
}

function GrayscalePhotoOfMan() {
  return (
    <div className="h-[50px] relative rounded-[226px] shrink-0 w-full" data-name="grayscale photo of man">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[226px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGrayscalePhotoOfMan} />
      </div>
    </div>
  );
}

function DivFramer1I87Y9P1() {
  return (
    <div className="aspect-[50/50] content-stretch flex flex-col items-start justify-center relative rounded-[226px] shrink-0" data-name="div.framer-1i87y9p">
      <GrayscalePhotoOfMan />
    </div>
  );
}

function PFramerText26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Daniel K.</p>
      </div>
    </div>
  );
}

function DivFramerNpgsd1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-npgsd9">
      <PFramerText26 />
    </div>
  );
}

function PFramerText27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Indie Maker</p>
      </div>
    </div>
  );
}

function DivFramerMdr6Kf1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-mdr6kf">
      <PFramerText27 />
    </div>
  );
}

function NameRole1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name & Role">
      <DivFramerNpgsd1 />
      <DivFramerMdr6Kf1 />
    </div>
  );
}

function Author1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Author">
      <DivFramer1I87Y9P1 />
      <NameRole1 />
    </div>
  );
}

function FrontFace3() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col inset-[0_0.17%_0_-0.17%] items-center justify-between pb-[20px] pt-[19.3px] px-[20px] rounded-[20px]" data-name="Front Face">
      <PFramerText25 />
      <Author1 />
    </div>
  );
}

function YceQcLz3ChOtgu2OZRjmfEKjYPng() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="yceQCLz3chOtgu2oZRjmfEKjY.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgYceQcLz3ChOtgu2OZRjmfEKjYPng} />
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="aspect-[60/60] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Logo">
      <YceQcLz3ChOtgu2OZRjmfEKjYPng />
    </div>
  );
}

function BackFace1() {
  return (
    <div className="absolute flex inset-[0_0.17%_0_-0.17%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="bg-[#111] content-stretch flex flex-col items-center justify-center relative rounded-[20px] size-full" data-name="Back Face">
          <Logo1 />
        </div>
      </div>
    </div>
  );
}

function FrontFace2() {
  return (
    <div className="h-[340px] relative rounded-[20px] shrink-0 w-full" data-name="Front Face">
      <FrontFace3 />
      <BackFace1 />
    </div>
  );
}

function DivFramer1WumwmxContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-1wumwmx-container">
      <FrontFace2 />
    </div>
  );
}

function PFramerText28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[18px] tracking-[-0.72px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px] mb-0">{`Templyo saved me weeks of work. I was `}</p>
        <p className="leading-[25.2px] mb-0">{`able to launch my landing page in a day, `}</p>
        <p className="leading-[25.2px]">and it still looks fully custom.</p>
      </div>
    </div>
  );
}

function ManStandingNearWhiteWall() {
  return (
    <div className="h-[50px] relative rounded-[226px] shrink-0 w-full" data-name="man standing near white wall">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[226px]">
        <img alt="" className="absolute h-[149.93%] left-0 max-w-none top-[-24.96%] w-full" src={imgManStandingNearWhiteWall} />
      </div>
    </div>
  );
}

function DivFramer1I87Y9P2() {
  return (
    <div className="aspect-[50/50] content-stretch flex flex-col items-start justify-center relative rounded-[226px] shrink-0" data-name="div.framer-1i87y9p">
      <ManStandingNearWhiteWall />
    </div>
  );
}

function PFramerText29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Mark M.</p>
      </div>
    </div>
  );
}

function DivFramerNpgsd2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-npgsd9">
      <PFramerText29 />
    </div>
  );
}

function PFramerText30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Startup Founder</p>
      </div>
    </div>
  );
}

function DivFramerMdr6Kf2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-mdr6kf">
      <PFramerText30 />
    </div>
  );
}

function NameRole2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name & Role">
      <DivFramerNpgsd2 />
      <DivFramerMdr6Kf2 />
    </div>
  );
}

function Author2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Author">
      <DivFramer1I87Y9P2 />
      <NameRole2 />
    </div>
  );
}

function FrontFace5() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col inset-[0_0.17%_0_-0.17%] items-center justify-between pb-[20px] pt-[19.2px] px-[20px] rounded-[20px]" data-name="Front Face">
      <PFramerText28 />
      <Author2 />
    </div>
  );
}

function GN85DqTeMmVvE57UMiHhgeL4P4Png() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="gN85dqTeMmVvE57UMiHhgeL4P4.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[81.63%] left-0 max-w-none top-[9.18%] w-full" src={imgGN85DqTeMmVvE57UMiHhgeL4P4Png} />
      </div>
    </div>
  );
}

function Logo2() {
  return (
    <div className="aspect-[60/60] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Logo">
      <GN85DqTeMmVvE57UMiHhgeL4P4Png />
    </div>
  );
}

function BackFace2() {
  return (
    <div className="absolute flex inset-[0_0.17%_0_-0.17%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="bg-[#111] content-stretch flex flex-col items-center justify-center relative rounded-[20px] size-full" data-name="Back Face">
          <Logo2 />
        </div>
      </div>
    </div>
  );
}

function FrontFace4() {
  return (
    <div className="h-[340px] relative rounded-[20px] shrink-0 w-full" data-name="Front Face">
      <FrontFace5 />
      <BackFace2 />
    </div>
  );
}

function DivFramer1TcmudkContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-1tcmudk-container">
      <FrontFace4 />
    </div>
  );
}

function PFramerText31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[18px] tracking-[-0.72px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px] mb-0">{`The quality is insane. Clean structure, `}</p>
        <p className="leading-[25.2px] mb-0">{`smooth animations, and super easy to `}</p>
        <p className="leading-[25.2px] mb-0">{`customize. It feels like a premium product `}</p>
        <p className="leading-[25.2px]">from start to finish.</p>
      </div>
    </div>
  );
}

function ManInBlackButtonUpShirt() {
  return (
    <div className="h-[50px] relative rounded-[226px] shrink-0 w-full" data-name="man in black button-up shirt">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[226px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgManInBlackButtonUpShirt} />
      </div>
    </div>
  );
}

function DivFramer1I87Y9P3() {
  return (
    <div className="aspect-[50/50] content-stretch flex flex-col items-start justify-center relative rounded-[226px] shrink-0" data-name="div.framer-1i87y9p">
      <ManInBlackButtonUpShirt />
    </div>
  );
}

function PFramerText32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Omar H.</p>
      </div>
    </div>
  );
}

function DivFramerNpgsd3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-npgsd9">
      <PFramerText32 />
    </div>
  );
}

function PFramerText33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Frontend Developer</p>
      </div>
    </div>
  );
}

function DivFramerMdr6Kf3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-mdr6kf">
      <PFramerText33 />
    </div>
  );
}

function NameRole3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name & Role">
      <DivFramerNpgsd3 />
      <DivFramerMdr6Kf3 />
    </div>
  );
}

function Author3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Author">
      <DivFramer1I87Y9P3 />
      <NameRole3 />
    </div>
  );
}

function FrontFace7() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col inset-[0_0.17%_0_-0.17%] items-center justify-between pb-[20px] pt-[19.3px] px-[20px] rounded-[20px]" data-name="Front Face">
      <PFramerText31 />
      <Author3 />
    </div>
  );
}

function WsYtug4CqmLiu4LwbMuqx7FdOyPng() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="WsYTUG4cqmLIU4lwbMUQX7FdOY.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWsYtug4CqmLiu4LwbMuqx7FdOyPng} />
      </div>
    </div>
  );
}

function Logo3() {
  return (
    <div className="aspect-[60/60] content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Logo">
      <WsYtug4CqmLiu4LwbMuqx7FdOyPng />
    </div>
  );
}

function BackFace3() {
  return (
    <div className="absolute flex inset-[0_0.17%_0_-0.17%] items-center justify-center" style={{ containerType: "size" }}>
      <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
        <div className="bg-[#111] content-stretch flex flex-col items-center justify-center relative rounded-[20px] size-full" data-name="Back Face">
          <Logo3 />
        </div>
      </div>
    </div>
  );
}

function FrontFace6() {
  return (
    <div className="h-[340px] relative rounded-[20px] shrink-0 w-full" data-name="Front Face">
      <FrontFace7 />
      <BackFace3 />
    </div>
  );
}

function DivFramerLyzmtsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-lyzmts-container">
      <FrontFace6 />
    </div>
  );
}

function TestimonialsCards() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Testimonials Cards">
      <DivFramerE41VzkContainer />
      <DivFramer1WumwmxContainer />
      <DivFramer1TcmudkContainer />
      <DivFramerLyzmtsContainer />
    </div>
  );
}

function Container3() {
  return (
    <ScrollReveal className="flex-[1_0_0] max-w-[1180px] min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center max-w-[inherit] px-[20px] relative size-full">
          <DivFramer1Fv9Hd />
          <TestimonialsCards />
        </div>
      </div>
    </ScrollReveal>
  );
}

function TestimonialsSection() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[80px] relative shrink-0 w-full" data-name="Testimonials Section">
      <Container3 />
    </div>
  );
}

function H2FramerText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[46px] tracking-[-0.92px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[46px]">Thoughts</p>
      </div>
    </div>
  );
}

function DivFramer45Mpb() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full text-center gap-4" data-name="Thoughts Header">
      <h2 className="text-[40px] lg:text-[64px] font-semibold text-[color:var(--reveal-color,#111)] tracking-tight font-['Archivo:SemiBold',sans-serif]">Crafted with precision.</h2>
      <p className="text-[16px] lg:text-[20px] text-gray-500 font-['Archivo:Regular',sans-serif] max-w-[800px] leading-relaxed">A showcase of modern software, AI, and cloud solutions built for real-world impact.</p>
      <div className="flex flex-col items-center mt-16 md:mt-24 mb-[-80px] md:mb-[-120px] gap-2 opacity-70">
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gray-400 font-semibold font-['Archivo',sans-serif]">Scroll</span>
        <div className="w-[1px] h-[35px] md:h-[50px] bg-gradient-to-b from-gray-300 to-transparent" />
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip rounded-[20px]" data-name="div">
      <Component1 className="overflow-clip relative shrink-0 size-[64px]" />
    </div>
  );
}

function LxtBXj3G7Bloek83WxPy1ZUuw0QPng() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="lxtBXj3G7Bloek83WxPY1ZUuw0Q.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-66.69%] max-w-none top-0 w-[233.38%]" src={imgLxtBXj3G7Bloek83WxPy1ZUuw0QPng} />
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Image">
      <LxtBXj3G7Bloek83WxPy1ZUuw0QPng />
    </div>
  );
}

function PFramerText34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">May 5, 2025</p>
      </div>
    </div>
  );
}

function DivFramer4Voal() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-4voal0">
      <PFramerText34 />
    </div>
  );
}

function H3FramerText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[28px] tracking-[-0.56px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px] mb-0">Building Trust</p>
        <p className="leading-[33.6px]">Through Clear Design</p>
      </div>
    </div>
  );
}

function DivFramerNa2Wwt() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-na2wwt">
      <H3FramerText8 />
    </div>
  );
}

function TitleDate() {
  return (
    <div className="content-stretch flex flex-col gap-[4.2px] items-start justify-center relative shrink-0 w-full" data-name="Title & Date">
      <DivFramer4Voal />
      <DivFramerNa2Wwt />
    </div>
  );
}

function PFramerText35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px] mb-0">{`How thoughtful visual choices create a stronger `}</p>
        <p className="leading-[22.4px]">sense of reliability for modern brands.</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <TitleDate />
      <PFramerText35 />
    </div>
  );
}

function Primary2() {
  return (
    <div className="h-[460px] relative rounded-[20px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[20px] relative size-full">
          <Div1 />
          <Image4 />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-[30%_0_0_0] rounded-bl-[20px] rounded-br-[20px] to-black" data-name="Overlay" />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function DivFramer1GwykhoContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-1gwykho-container">
      <Primary2 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip rounded-[20px]" data-name="div">
      <Component1 className="overflow-clip relative shrink-0 size-[64px]" />
    </div>
  );
}

function Ic9K42RYytbJtnRujXdcNxChScPng() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="ic9k42rYytbJtnRUJXdcNxCHSc.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-67.1%] max-w-none top-0 w-[234.2%]" src={imgIc9K42RYytbJtnRujXdcNxChScPng} />
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Image">
      <Ic9K42RYytbJtnRujXdcNxChScPng />
    </div>
  );
}

function PFramerText36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Jun 16, 2025</p>
      </div>
    </div>
  );
}

function DivFramer4Voal1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-4voal0">
      <PFramerText36 />
    </div>
  );
}

function H3FramerText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[28px] tracking-[-0.56px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[33.6px] mb-0">The Role of Art</p>
        <p className="leading-[33.6px]">Direction in Branding</p>
      </div>
    </div>
  );
}

function DivFramerNa2Wwt1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-na2wwt">
      <H3FramerText9 />
    </div>
  );
}

function TitleDate1() {
  return (
    <div className="content-stretch flex flex-col gap-[4.2px] items-start justify-center relative shrink-0 w-full" data-name="Title & Date">
      <DivFramer4Voal1 />
      <DivFramerNa2Wwt1 />
    </div>
  );
}

function PFramerText37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px] mb-0">{`Why visual direction helps brands create `}</p>
        <p className="leading-[22.4px]">emotion and a distinct point of view.</p>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <TitleDate1 />
      <PFramerText37 />
    </div>
  );
}

function Primary3() {
  return (
    <div className="h-[460px] relative rounded-[20px] shrink-0 w-full" data-name="Primary">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[20px] relative size-full">
          <Div2 />
          <Image5 />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-[30%_0_0_0] rounded-bl-[20px] rounded-br-[20px] to-black" data-name="Overlay" />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function DivFramer1GwykhoContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-1gwykho-container">
      <Primary3 />
    </div>
  );
}

function PFramerText38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[40px] tracking-[-0.8px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[48px] mb-0">{`See how we `}</p>
        <p className="leading-[48px] mb-0">{`shape brands `}</p>
        <p className="leading-[48px] mb-0">{`with clarity and `}</p>
        <p className="leading-[48px] mb-0">{`craft— explore `}</p>
        <p className="leading-[48px]">our blog</p>
      </div>
    </div>
  );
}

function PFramerText39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[18px] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px]">View All Work</p>
      </div>
    </div>
  );
}

function DivFramer5Piecp2() {
  return (
    <div className="h-[25.2px] relative shrink-0 w-[98.45px]" data-name="div.framer-5piecp">
      <PFramerText39 />
    </div>
  );
}

function ArrowButton2() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[28px]" data-name="Arrow Button">
      <div className="absolute border border-[#faf7f3] border-solid inset-0 rounded-[8px]" data-name="::after" />
      <Component className="-translate-x-1/2 absolute bottom-[-0.51%] flex items-center justify-center left-1/2 top-[-0.51%] w-[28.284px]" variant="11" />
      <Component className="absolute bottom-[-21.14px] flex items-center justify-center left-[-21.14px] size-[28.284px]" variant="12" />
    </div>
  );
}

function White() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="White">
      <DivFramer5Piecp2 />
      <ArrowButton2 />
    </div>
  );
}

function AllPostsCard() {
  return (
    <div className="bg-[#111] h-[460px] min-h-[460px] relative rounded-[16px] shrink-0 w-full" data-name="All Posts Card">
      <div className="flex flex-col justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between min-h-[inherit] p-[24px] relative size-full">
          <PFramerText38 />
          <White />
        </div>
      </div>
    </div>
  );
}

function DivFramer1Leqxa() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleCardHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
  };

  const isExpanded = (index: number) => {
    if (expandedIndex !== null) {
      return expandedIndex === index;
    }
    return hoveredIndex === index;
  };

  const cards = [
    {
      title: 'Building Trust Through Clear Design',
      subtitle: 'How thoughtful visual choices create a stronger sense of reliability for modern brands.',
      image: 'https://framerusercontent.com/images/fzJMEh57n9IbStcFFu91Z1Zu4xk.webp?width=1920&height=1536',
      isNew: true,
      date: 'May 5, 2025'
    },
    {
      title: 'The Role of Art Direction in Branding',
      subtitle: 'Why visual direction helps brands create emotion and a distinct point of view.',
      image: 'https://framerusercontent.com/images/zGvAHyuKa93QJHozGrqt32oDdWg.webp?width=1920&height=1536',
      isNew: false,
      date: 'Jun 16, 2025'
    },
    {
      title: 'See how we shape brands with clarity and craft— explore our blog',
      subtitle: 'Dive deep into our latest thoughts and processes.',
      image: 'https://framerusercontent.com/images/s9l2avmz0ouWQb47bexsHny4e9Y.webp?width=1920&height=1920',
      isNew: false,
      date: 'View All Work'
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-[10px] items-stretch w-full h-auto lg:h-[550px] overflow-hidden" data-name="Interactive Card Grid">
      {cards.map((card, index) => {
        const expanded = isExpanded(index);

        return (
          <div
            key={index}
            className={`
              group relative overflow-hidden rounded-2xl cursor-pointer
              transition-all duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]
              bg-[#1a1a1a] h-full min-h-[400px]
              ${expanded ? 'flex-[2] shadow-[0_8px_40px_rgba(0,0,0,0.3)]' : 'flex-1 shadow-none'}
              ${!expanded ? 'hover:flex-[1.1]' : ''}
            `}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            onClick={() => handleCardClick(index)}
          >
            <img
              alt={card.title}
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-all duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                ${expanded ? 'scale-[1.05]' : 'scale-100'}
              `}
              src={card.image}
            />

            {card.isNew && (
              <div className="absolute top-3.5 right-3.5 z-10 bg-[#0a0a0a] text-white text-[10px] font-bold tracking-[0.1em] uppercase py-1.5 px-2.5 rounded pointer-events-none">
                NEW
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

            <div
              className={`
                absolute inset-0 bg-black/40 pointer-events-none
                transition-opacity duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                ${expanded ? 'opacity-100' : 'opacity-0'}
              `}
            />

            <div
              className={`
                absolute bottom-6 inset-x-6 flex flex-col items-start
                transition-opacity duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                ${expanded ? 'opacity-0' : 'opacity-100'}
                pointer-events-none
              `}
            >
              <span className="text-white/80 text-sm font-semibold mb-2">{card.date}</span>
              <span className="block text-white text-2xl font-bold font-['Helvetica_Neue',Arial,sans-serif] leading-[1.2] tracking-[-0.01em] text-left">
                {card.title}
              </span>
            </div>

            <div
              className={`
                absolute bottom-6 inset-x-6 flex flex-col items-start pointer-events-none
                transition-all duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                ${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <span className="text-white/80 text-sm font-semibold mb-2">{card.date}</span>
              <div className="text-white text-2xl lg:text-3xl font-bold font-['Helvetica_Neue',Arial,sans-serif] leading-[1.2] tracking-[-0.01em] text-left mb-3">
                {card.title}
              </div>

              <div
                className={`
                  flex flex-col items-start gap-1 mb-6
                  transition-all duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-75
                  ${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                `}
              >
                <span className="text-white/80 text-base font-normal font-['Helvetica_Neue',Arial,sans-serif] leading-[1.5] text-left max-w-[90%]">
                  {card.subtitle}
                </span>
              </div>

              <a
                href="#"
                className={`
                  inline-flex items-center justify-center size-[48px] rounded-full
                  border-2 border-white/90 bg-transparent text-white
                  transition-all duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] delay-150
                  ${expanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                  hover:bg-white hover:text-black pointer-events-auto
                `}
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="19" height="19" viewBox="0 0 18 18" fill="none">
                  <path d="M3.5 9H14.5M14.5 9L9.5 4M14.5 9L9.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Container4() {
  return (
    <ScrollReveal className="flex-[1_0_0] max-w-[1180px] min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center max-w-[inherit] px-[20px] relative size-full">
        <DivFramer1Leqxa />
        </div>
      </div>
    </ScrollReveal>
  );
}

function CraftedPrecisionSection() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[120px] pb-[32px] relative shrink-0 w-full" data-name="Crafted Precision Section">
      <DivFramer45Mpb />
    </div>
  );
}

function TestimonialsSection1() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[80px] relative shrink-0 w-full" data-name="Testimonials Section">
      <Container4 />
    </div>
  );
}

function H2FramerText5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.6px] relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[46px] tracking-[-0.92px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[46px]">Let’s talk.</p>
      </div>
    </div>
  );
}

function DivFramer15Yiv3X() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-15yiv3x">
      <H2FramerText5 />
    </div>
  );
}

function PFramerText40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[18px] tracking-[-0.72px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[25.2px] mb-0">{`Have a project or need help? Fill out the form, `}</p>
        <p className="leading-[25.2px]">{`and we'll get back to you soon.`}</p>
      </div>
    </div>
  );
}

function DivFramerJf7A8U() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-jf7a8u">
      <PFramerText40 />
    </div>
  );
}

function TitleDescription5() {
  return (
    <div className="content-stretch flex flex-col gap-[9.1px] items-center justify-center relative shrink-0 w-full" data-name="Title & Description">
      <DivFramer15Yiv3X />
      <DivFramerJf7A8U />
    </div>
  );
}

function Primary4() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="Primary">
      <Component1 className="overflow-clip relative shrink-0 size-[20px]" variant="13" />
    </div>
  );
}

function DivFramer1Vww8IcContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1vww8ic-container">
      <Primary4 />
    </div>
  );
}

function Primary5() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="Primary">
      <Component1 className="overflow-clip relative shrink-0 size-[20px]" variant="14" />
    </div>
  );
}

function DivFramerJjv3ItContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-jjv3it-container">
      <Primary5 />
    </div>
  );
}

function Primary6() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="Primary">
      <Component1 className="overflow-clip relative shrink-0 size-[20px]" variant="15" />
    </div>
  );
}

function DivFramerHsn8SvContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-hsn8sv-container">
      <Primary6 />
    </div>
  );
}

function Primary7() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[8px] shrink-0 size-[40px]" data-name="Primary">
      <Component1 className="overflow-clip relative shrink-0 size-[20px]" variant="16" />
    </div>
  );
}

function DivFramer1EmterxContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1emterx-container">
      <Primary7 />
    </div>
  );
}

function SocialMediaIcons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Social Media Icons">
      <DivFramer1Vww8IcContainer />
      <DivFramerJjv3ItContainer />
      <DivFramerHsn8SvContainer />
      <DivFramer1EmterxContainer />
    </div>
  );
}

function Main1() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Main">
      <TitleDescription5 />
      <SocialMediaIcons />
    </div>
  );
}

function PFramerText41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Name</p>
      </div>
    </div>
  );
}

function DivFramer12Xulh() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-12xulh5">
      <PFramerText41 />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[0.8px] relative shrink-0 w-full" data-name="div#placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(250,247,243,0.5)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Enter your name</p>
      </div>
    </div>
  );
}

function InputFramerFormInput() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="input.framer-form-input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start py-[9.2px] relative size-full">
          <DivPlaceholder />
        </div>
      </div>
    </div>
  );
}

function DivFramerFormTextInput() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="div.framer-form-text-input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
          <InputFramerFormInput />
          <div className="absolute inset-0 rounded-[12px]" data-name="::after">
            <div aria-hidden className="absolute border border-[rgba(250,247,243,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelFramer1Oda83C() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="label.framer-1oda83c">
      <DivFramer12Xulh />
      <DivFramerFormTextInput />
    </div>
  );
}

function PFramerText42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Email</p>
      </div>
    </div>
  );
}

function DivFramer6Ls2Bb() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-6ls2bb">
      <PFramerText42 />
    </div>
  );
}

function DivPlaceholder1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[0.8px] relative shrink-0 w-full" data-name="div#placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(250,247,243,0.5)] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Enter your email</p>
      </div>
    </div>
  );
}

function InputFramerFormInput1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="input.framer-form-input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start py-[9.2px] relative size-full">
          <DivPlaceholder1 />
        </div>
      </div>
    </div>
  );
}

function DivFramerFormTextInput1() {
  return (
    <div className="h-[44px] relative rounded-[12px] shrink-0 w-full" data-name="div.framer-form-text-input">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
          <InputFramerFormInput1 />
          <div className="absolute inset-0 rounded-[12px]" data-name="::after">
            <div aria-hidden className="absolute border border-[rgba(250,247,243,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelFramer1Wqhl3A() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="label.framer-1wqhl3a">
      <DivFramer6Ls2Bb />
      <DivFramerFormTextInput1 />
    </div>
  );
}

function PFramerText43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[16px] tracking-[-0.64px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.4px]">Your Project</p>
      </div>
    </div>
  );
}

function DivFramerAgsojd() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-agsojd">
      <PFramerText43 />
    </div>
  );
}

function DivPlaceholder2() {
  return (
    <div className="absolute bottom-[108.8px] content-stretch flex flex-col items-start left-[12px] pr-[119px] top-[12px]" data-name="div#placeholder">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(250,247,243,0.5)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">Tell us about your project</p>
      </div>
    </div>
  );
}

function TextareaFramerFormInput() {
  return (
    <div className="flex-[1_0_0] h-[140px] min-h-[140px] min-w-px overflow-x-clip overflow-y-auto relative" data-name="textarea.framer-form-input">
      <DivPlaceholder2 />
    </div>
  );
}

function DivFramerFormTextInput2() {
  return (
    <div className="content-stretch flex items-center justify-center min-h-[140px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="div.framer-form-text-input">
      <TextareaFramerFormInput />
      <div className="absolute inset-0 rounded-[12px]" data-name="::after">
        <div aria-hidden className="absolute border border-[rgba(250,247,243,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
    </div>
  );
}

function LabelFramer4B0Gvu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="label.framer-4b0gvu">
      <DivFramerAgsojd />
      <DivFramerFormTextInput2 />
    </div>
  );
}

function Span27() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-center text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">S</p>
      </div>
    </div>
  );
}

function Span28() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-center text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">u</p>
      </div>
    </div>
  );
}

function Span29() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-center text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">b</p>
      </div>
    </div>
  );
}

function Span30() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-center text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">m</p>
      </div>
    </div>
  );
}

function Span31() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-center text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">i</p>
      </div>
    </div>
  );
}

function Span32() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-center text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">t</p>
      </div>
    </div>
  );
}

function PRollingTextInnerR() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="p.rolling-text-inner-r14">
      <Span27 />
      <Span28 />
      <Span29 />
      <Span30 />
      <Span31 />
      <Span32 />
    </div>
  );
}

function Div3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="div">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <PRollingTextInnerR />
        </div>
      </div>
    </div>
  );
}

function DivFramer1Qx92KContainer() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start justify-center min-w-[318.3999938964844px] relative shrink-0" data-name="div.framer-1qx92k-container">
      <Div3 />
    </div>
  );
}

function Default() {
  return (
    <div className="bg-[#faf7f3] content-stretch flex h-[44px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-name="Default">
      <DivFramer1Qx92KContainer />
    </div>
  );
}

function DivFramer1C5Hxk7Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-1c5hxk7-container">
      <Default />
    </div>
  );
}

function FormFramer1Rwmlp() {
  return (
    <div className="bg-[#111] relative rounded-[16px] shrink-0 w-full" data-name="form.framer-1rwmlp9">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
          <LabelFramer1Oda83C />
          <LabelFramer1Wqhl3A />
          <LabelFramer4B0Gvu />
          <DivFramer1C5Hxk7Container />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <ScrollReveal className="flex-[1_0_0] max-w-[1180px] min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center max-w-[inherit] px-[20px] relative size-full">
          <Main1 />
          <FormFramer1Rwmlp />
        </div>
      </div>
    </ScrollReveal>
  );
}


function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0 w-[390.4px]" data-name="Main">
      <HeroBioSections />
      <QuoteSectionContainer />
      <ServicesSectionContainer />
      <TechnologiesSection />
      <ProjectsSection />
      <CraftedPrecisionSection />

            <ExperienceSection />
      <ContactSection />
    </div>
  );
}

function H2FramerText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h2.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[48px] tracking-[-0.96px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[48px] mb-0 whitespace-pre">{`Scaling `}</p>
        <p className="leading-[48px] mb-0 whitespace-pre">{`Start-ups for `}</p>
        <p className="leading-[48px] whitespace-pre">Growth.</p>
      </div>
    </div>
  );
}

function DivFramer1Umwttr() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[340px] min-w-[340px] relative shrink-0" data-name="div.framer-1umwttr">
      <H2FramerText6 />
    </div>
  );
}

function H4FramerText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[22px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[26.4px]">/Quick links</p>
      </div>
    </div>
  );
}

function DivFramer113Ci7D() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-113ci7d">
      <H4FramerText />
    </div>
  );
}

function Span33() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">H</p>
      </div>
    </div>
  );
}

function Span34() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">o</p>
      </div>
    </div>
  );
}

function Span35() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">m</p>
      </div>
    </div>
  );
}

function Span36() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">e</p>
      </div>
    </div>
  );
}

function PRollingTextInnerR1H() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="p.rolling-text-inner-r1h">
      <Span33 />
      <Span34 />
      <Span35 />
      <Span36 />
    </div>
  );
}

function Div4() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <PRollingTextInnerR1H />
        </div>
      </div>
    </div>
  );
}

function DivFramer9Dv2N0Container() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="div.framer-9dv2n0-container">
      <Div4 />
    </div>
  );
}

function Primary8() {
  return (
    <button className="absolute bg-[#faf7f3] content-stretch cursor-pointer flex items-center justify-center left-0 rounded-[8px] top-0" data-name="Primary">
      <DivFramer9Dv2N0Container />
    </button>
  );
}

function Span37() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">A</p>
      </div>
    </div>
  );
}

function Span38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">b</p>
      </div>
    </div>
  );
}

function Span39() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">o</p>
      </div>
    </div>
  );
}

function Span40() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">u</p>
      </div>
    </div>
  );
}

function Span41() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">t</p>
      </div>
    </div>
  );
}

function Span42() {
  return <div className="relative self-stretch shrink-0 w-[2.96px]" data-name="span" />;
}

function Span43() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">M</p>
      </div>
    </div>
  );
}

function Span44() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">e</p>
      </div>
    </div>
  );
}

function PRollingTextInnerR1I() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="p.rolling-text-inner-r1i">
      <Span37 />
      <Span38 />
      <Span39 />
      <Span40 />
      <Span41 />
      <Span42 />
      <Span43 />
      <Span44 />
    </div>
  );
}

function Div5() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <PRollingTextInnerR1I />
        </div>
      </div>
    </div>
  );
}

function DivFramer9Dv2N0Container1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="div.framer-9dv2n0-container">
      <Div5 />
    </div>
  );
}

function Primary9() {
  return (
    <button className="absolute bg-[#faf7f3] content-stretch cursor-pointer flex items-center justify-center left-[84.44px] rounded-[8px] top-0" data-name="Primary">
      <DivFramer9Dv2N0Container1 />
    </button>
  );
}

function Span45() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">S</p>
      </div>
    </div>
  );
}

function Span46() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">e</p>
      </div>
    </div>
  );
}

function Span47() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">r</p>
      </div>
    </div>
  );
}

function Span48() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">v</p>
      </div>
    </div>
  );
}

function Span49() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">i</p>
      </div>
    </div>
  );
}

function Span50() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">c</p>
      </div>
    </div>
  );
}

function Span51() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">e</p>
      </div>
    </div>
  );
}

function Span52() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">s</p>
      </div>
    </div>
  );
}

function PRollingTextInnerR1J() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="p.rolling-text-inner-r1j">
      <Span45 />
      <Span46 />
      <Span47 />
      <Span48 />
      <Span49 />
      <Span50 />
      <Span51 />
      <Span52 />
    </div>
  );
}

function Div6() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <PRollingTextInnerR1J />
        </div>
      </div>
    </div>
  );
}

function DivFramer9Dv2N0Container2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="div.framer-9dv2n0-container">
      <Div6 />
    </div>
  );
}

function Primary10() {
  return (
    <div className="absolute bg-[#faf7f3] content-stretch flex items-center justify-center left-[193.34px] rounded-[8px] top-0" data-name="Primary">
      <DivFramer9Dv2N0Container2 />
    </div>
  );
}

function Span53() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">W</p>
      </div>
    </div>
  );
}

function Span54() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">o</p>
      </div>
    </div>
  );
}

function Span55() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">r</p>
      </div>
    </div>
  );
}

function Span56() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">k</p>
      </div>
    </div>
  );
}

function Span57() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[19.2px]">s</p>
      </div>
    </div>
  );
}

function PRollingTextInnerR1L() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="p.rolling-text-inner-r1l">
      <Span53 />
      <Span54 />
      <Span55 />
      <Span56 />
      <Span57 />
    </div>
  );
}

function Div7() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <PRollingTextInnerR1L />
        </div>
      </div>
    </div>
  );
}

function DivFramer9Dv2N0Container3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="div.framer-9dv2n0-container">
      <Div7 />
    </div>
  );
}

function Primary11() {
  return (
    <div className="absolute bg-[#faf7f3] content-stretch flex items-center justify-center left-0 rounded-[8px] top-[45.2px]" data-name="Primary">
      <DivFramer9Dv2N0Container3 />
    </div>
  );
}

function Span58() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">C</p>
      </div>
    </div>
  );
}

function Span59() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">o</p>
      </div>
    </div>
  );
}

function Span60() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">n</p>
      </div>
    </div>
  );
}

function Span61() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">t</p>
      </div>
    </div>
  );
}

function Span62() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">a</p>
      </div>
    </div>
  );
}

function Span63() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">c</p>
      </div>
    </div>
  );
}

function Span64() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="span">
      <div className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[color:var(--reveal-color,#111)] text-[16px] text-left text-shadow-[0px_19.2px_0px_#111] tracking-[-0.32px] whitespace-nowrap" role="button" style={{ fontVariationSettings: '"wdth" 100' }} tabIndex={0}>
        <p className="leading-[19.2px]">t</p>
      </div>
    </div>
  );
}

function PRollingTextInnerR1N() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="p.rolling-text-inner-r1n">
      <Span58 />
      <Span59 />
      <Span60 />
      <Span61 />
      <Span62 />
      <Span63 />
      <Span64 />
    </div>
  );
}

function Div8() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <PRollingTextInnerR1N />
        </div>
      </div>
    </div>
  );
}

function DivFramer9Dv2N0Container4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="div.framer-9dv2n0-container">
      <Div8 />
    </div>
  );
}

function Primary12() {
  return (
    <button className="absolute bg-[#faf7f3] content-stretch cursor-pointer flex items-center justify-center left-[87.15px] rounded-[8px] top-[45.2px]" data-name="Primary">
      <DivFramer9Dv2N0Container4 />
    </button>
  );
}

function Links() {
  return (
    <div className="h-[80.4px] relative shrink-0 w-full" data-name="Links">
      <Primary8 />
      <Primary9 />
      <Primary10 />
      <Primary11 />
      <Primary12 />
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center max-w-[300px] relative shrink-0 w-[300px]" data-name="Quick Links">
      <DivFramer113Ci7D />
      <Links />
    </div>
  );
}

function H4FramerText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h4.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[22px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[26.4px]">/Contact</p>
      </div>
    </div>
  );
}

function DivFramer5Sim8L() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.framer-5sim8l">
      <H4FramerText1 />
    </div>
  );
}

function PFramerText44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.framer-text">
      <div className="relative shrink-0 w-full" data-name="Component 3">
        <div className="content-stretch flex items-start py-[0.6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Archivo:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#faf7f3] text-[18px] tracking-[-0.72px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[25.2px]">Mejed@Templyo.io</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Links">
      <PFramerText44 />
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-col gap-[18.4px] items-start justify-center max-w-[300px] relative shrink-0 w-[300px]" data-name="Contact">
      <DivFramer5Sim8L />
      <Links1 />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start max-w-[720px] relative shrink-0 w-full" data-name="Columns">
      <QuickLinks />
      <Contact />
    </div>
  );
}

function Container6() {
  return (
    <ScrollReveal className="flex-[1_0_0] max-w-[1180px] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[59.3px] items-start max-w-[inherit] px-[20px] relative size-full">
        <DivFramer1Umwttr />
        <Columns />
      </div>
    </ScrollReveal>
  );
}

function PFramerText45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="p.framer-text">
      <div className="[word-break:break-word] flex flex-col font-['Archivo:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[127.6px] text-[rgba(250,247,243,0.1)] text-center tracking-[-2.5517px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[114.83px]">MAJD</p>
      </div>
    </div>
  );
}

function ForeignobjectFramerFitText() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[0.01px] max-w-[367.1999816894531px] opacity-0 overflow-clip top-0 w-[366.96px]" data-name="foreignobject.framer-fit-text">
      <PFramerText45 />
    </div>
  );
}

function SvgFramer3Vb2N() {
  return (
    <div className="absolute bottom-[-50.01px] h-[114.68px] left-[3%] max-w-[1200px] opacity-0 overflow-clip right-[3%]" data-name="svg.framer-3vb2n7">
      <Component1 className="absolute bottom-0 h-[114.677px] left-0 right-0" variant="17" />
      <ForeignobjectFramerFitText />
    </div>
  );
}

function Phone() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-center overflow-clip pb-[200px] pt-[80px] relative shrink-0 w-full" data-name="Phone">
      <Container6 />
      <SvgFramer3Vb2N />
    </div>
  );
}

function DivFramerBcxrl8Container() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0.01%_0] items-start justify-center" data-name="div.framer-bcxrl8-container">
      <div className="bg-size-[161px_161px] bg-top-left flex-[1_0_0] min-h-px opacity-4 relative w-full" style={{ backgroundImage: `url("${imgDiv}")` }} data-name="div" />
    </div>
  );
}

function EndOfBodyStart() {
  return (
    <div className="bg-[#faf7f3] content-stretch flex flex-col items-center min-h-[780px] relative shrink-0 w-full" data-name="End of bodyStart">
      <Main />
      <Footer />
    </div>
  );
}

function DivToolItemDCn8We() {
  return (
    <div className="h-full relative shrink-0" data-name="div.tool-item-dCn8We">
      <div aria-hidden className="absolute border-[rgba(86,86,95,0.2)] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center pb-[1.6px] pl-[6px] pr-[6.8px] pt-[0.8px] relative size-full">
          <Component1 className="relative shrink-0 size-[16px]" variant="7" />
          <div className="[word-break:break-word] flex flex-col font-['Segoe_UI:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f3f3f3] text-[13px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Explain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivToolItemDCn8We1() {
  return (
    <div className="h-full relative shrink-0" data-name="div.tool-item-dCn8We">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] relative size-full">
        <Component1 className="overflow-clip relative shrink-0 size-[16px]" variant="8" />
      </div>
    </div>
  );
}

function DivCodeToolRootPumYm() {
  return (
    <div className="absolute bg-[#202020] content-stretch flex h-[24.4px] items-center left-[-999.2px] p-px rounded-[6px] top-[-999.2px]" data-name="div.code-tool-root-PumYm1">
      <div aria-hidden className="absolute border border-[rgba(86,86,95,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <DivToolItemDCn8We />
      <DivToolItemDCn8We1 />
    </div>
  );
}

function AFramerText() {
  return (
    <div className="content-stretch flex items-start py-[1.3px] relative shrink-0" data-name="a.framer-text">
      <button className="[word-break:break-word] cursor-pointer flex flex-col font-['Archivo:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#faf7f3] text-[22px] text-left tracking-[-0.88px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[30.8px]">Surendhar</p>
      </button>
    </div>
  );
}

function PFramerText46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1.6px]" data-name="p.framer-text">
      <AFramerText />
    </div>
  );
}

function DivFramer19J77Ah() {
  return (
    <div className="h-[30.8px] relative shrink-0 w-[45.81px]" data-name="div.framer-19j77ah">
      <PFramerText46 />
    </div>
  );
}

function Variant() {
  return (
    <div className="bg-[#faf7f3] content-stretch flex gap-[3px] h-[36px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-[44px]" data-name="Variant 1">
      <div className="bg-[#111] relative rounded-[371px] shrink-0 size-[4px]" data-name="Line" />
      <div className="bg-[#111] relative rounded-[371px] shrink-0 size-[4px]" data-name="Line" />
      <div className="bg-[#111] relative rounded-[371px] shrink-0 size-[4px]" data-name="Line" />
    </div>
  );
}

function DivFramerSblw0GContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="div.framer-sblw0g-container">
      <Variant />
    </div>
  );
}

function NavigationBarContainerLogoHamburger() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[318.4px]" data-name="Navigation Bar → Container → Logo & Hamburger">
      <DivFramer19J77Ah />
      <DivFramerSblw0GContainer />
    </div>
  );
}

function Closed() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col items-center justify-center py-[12px] relative rounded-[20px] shrink-0 w-full" data-name="Closed">
      <NavigationBarContainerLogoHamburger />
    </div>
  );
}

function DivFramer14Q8XytContainer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] right-[19.6px] top-[30px]" data-name="div.framer-14q8xyt-container">
      <Closed />
    </div>
  );
}

function LogoMaskGroup() {
  return <div className="-translate-x-1/2 absolute h-[20px] left-1/2 top-[-2px] w-[12px]" data-name="Logo:mask-group" />;
}

function DivFramer1Kflzx() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="div.framer-1kflzx5">
      <LogoMaskGroup />
    </div>
  );
}

function Content4() {
  return (
    <div className="absolute content-stretch flex inset-[28.95%_45.71%] items-center" data-name="Content">
      <DivFramer1Kflzx />
    </div>
  );
}

function Light() {
  return (
    <div className="h-[38px] relative shrink-0 w-[140px]" data-name="Light">
      <Content4 />
    </div>
  );
}

function DivFramerBadgeContainer() {
  return (
    <div className="absolute bottom-px content-stretch flex items-start justify-end left-0 p-[20px] w-[390.4px]" data-name="div#__framer-badge-container">
      <Light />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#faf7f3] content-stretch flex flex-col h-[9620px] items-start left-[0.17px] pb-[50px] right-[-0.17px] top-[-0.14px]" data-name="body">
      <EndOfBodyStart />
      <DivCodeToolRootPumYm />
      <DivFramer14Q8XytContainer />
      <DivFramerBadgeContainer />
    </div>
  );
}


const icons = {
    huggingface: "https://cdn.simpleicons.org/huggingface/FFD21E",
    tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    opencv: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    tesseract: "https://upload.wikimedia.org/wikipedia/commons/2/23/Tesseract_logo.png",

  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  githubactions: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  githubcopilot: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  claude: "https://cdn.simpleicons.org/anthropic/111111",
  cursor: "https://cdn.simpleicons.org/cursor/111111",
  antigravity: "https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  netlify: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
  vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
};

function SkillIcon({ name, src, index }: { name: string, src: string, index: number }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
      }}
      whileHover={{ y: -8, scale: 1.05 }}
      className="bg-white/40 backdrop-blur-md rounded-[20px] border border-white/60 flex flex-col items-center justify-center p-3 gap-2 size-[76px] cursor-pointer relative group transition-all duration-500 hover:shadow-[0_15px_30px_rgb(0,0,0,0.08)] hover:border-white/80 hover:bg-white/60"
    >
      {/* Pulsing ambient glow */}
      <motion.div
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-[#111]/[0.03] to-transparent rounded-[20px] pointer-events-none"
      />
      
      {/* Floating icon */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
        className="relative z-10 flex flex-col items-center justify-center gap-2"
      >
        <img 
          src={src} 
          alt={name} 
          className="size-[28px] object-contain transition-transform duration-500 group-hover:scale-[1.15] drop-shadow-sm group-hover:drop-shadow-md" 
        />
        <span className="text-[10px] font-bold text-[#111]/60 whitespace-nowrap transition-all duration-300 group-hover:text-[#111]">{name}</span>
      </motion.div>
    </motion.div>
  );
}

function SkillBox({ title, description, skills, index }: { title: string, description: string, skills: { name: string, src: string }[], index: number }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] } }
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] p-6 lg:p-8 flex flex-col items-start gap-8 w-full cursor-pointer relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#111]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]"></div>
      
      <div className="flex flex-col gap-3 w-full relative z-10">
        <h3 className="text-[22px] font-semibold text-[#111] tracking-tight font-['Archivo:SemiBold',sans-serif]">{title}</h3>
        <p className="text-[15px] text-[#111]/60 font-['Archivo:Regular',sans-serif] leading-[1.6]">{description}</p>
      </div>

      <div className="flex flex-wrap gap-3 w-full relative z-10 mt-auto">
        {skills.map((s, i) => <SkillIcon key={i} index={i} name={s.name} src={s.src} />)}
      </div>
    </motion.div>
  );
}

function TechnologiesSection() {
  const cards = [
    {
      title: "Programming",
      description: "Core languages for building robust software solutions.",
      skills: [
        { name: "Java", src: icons.java },
        { name: "Python", src: icons.python },
        { name: "SQL", src: icons.sql },
        { name: "React", src: icons.react },
        { name: "TypeScript", src: icons.typescript }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure, automation, and deployment at scale.",
      skills: [
        { name: "AWS", src: icons.aws },
        { name: "Docker", src: icons.docker },
        { name: "Git Actions", src: icons.githubactions },
        { name: "Netlify", src: icons.netlify },
        { name: "Vercel", src: icons.vercel }
      ]
    },
    {
      title: "Tools & Platform",
      description: "Essential utilities and platforms for development.",
      skills: [
        { name: "VS Code", src: icons.vscode },
        { name: "Git", src: icons.git },
        { name: "GitHub", src: icons.github },
        { name: "Postman", src: icons.postman },
        { name: "Supabase", src: icons.supabase }
      ]
    },
      {
        title: "AI Assisted Dev",
        description: "Modern AI tools to accelerate product development.",
        skills: [
          { name: "Copilot", src: icons.githubcopilot },
          { name: "Claude", src: icons.claude },
          { name: "Cursor", src: icons.cursor },
          { name: "Antigravity", src: icons.antigravity }
        ]
      }
    ];

  return (
    <div className="w-full flex flex-col items-center justify-center pt-[180px] pb-[92px] px-[20px] gap-[96px] relative overflow-hidden" data-name="Technologies Section">
      {/* Background Mesh for Glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-tr from-[#111]/[0.05] via-transparent to-[#111]/[0.05] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="mx-auto w-full max-w-[980px] text-center">
        <motion.h2 
          initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-['Archivo:SemiBold',sans-serif] text-[38px] font-semibold tracking-[-0.96px] text-transparent bg-clip-text bg-gradient-to-br from-[#111] to-[#444] sm:text-[46px] lg:text-[72px] lg:tracking-[-1.44px] leading-[0.95]"
        >
          Tools and Technologies
        </motion.h2>
      </div>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-[1280px]"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
          {cards.map((c, i) => (
            <SkillBox key={i} index={i} title={c.title} description={c.description} skills={c.skills} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Component390WDefault() {
  return (
    <div className="bg-white relative size-full" data-name="390w default">
      <Body />
    </div>
  );
}