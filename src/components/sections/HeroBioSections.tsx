'use client';
import HeroSection from "./HeroSection";
import BioSection from "./BioSection";
import ScrollAvatar from "../ScrollAvatar";

export default function HeroBioSections() {
  return (
    <div id="about" className="relative w-full" data-name="Hero & Bio Sections">
      
      {/* Sticky Avatar Track (underneath) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center md:items-end justify-center">
          <div className="pointer-events-auto w-full h-full flex items-center justify-center md:justify-end">
            <ScrollAvatar />
          </div>
        </div>
      </div>

      {/* Content overlayed on the track, in natural document flow so heights are fluid */}
      <div className="relative z-10 flex flex-col items-center justify-start w-full pointer-events-none">
        <div className="w-full pointer-events-auto">
          <HeroSection />
        </div>
        <div className="w-full pointer-events-auto">
          <BioSection />
        </div>
      </div>
      
    </div>
  );
}
