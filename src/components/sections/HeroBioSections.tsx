'use client';
import HeroSection from "./HeroSection";
import BioSection from "./BioSection";
import ScrollAvatar from "../ScrollAvatar";

export default function HeroBioSections() {
  return (
    <div id="about" className="flex flex-col h-[1800px] items-center justify-center relative w-full" data-name="Hero & Bio Sections">
      {/* Sticky Avatar Track */}
      <div className="flex h-[1800px] items-start justify-center relative w-full" data-name="Sticky Avatar Wrap">
        <div className="flex flex-col h-[900px] items-end justify-center w-full sticky top-0" data-name="Sticky Container">
          {/* ScrollAvatar acts as the sticky layer that scales and flips */}
          <ScrollAvatar />
        </div>
      </div>

      {/* Content overlayed on the track */}
      <div className="absolute flex flex-col items-center justify-start left-0 right-0 top-0 overflow-clip">
        <HeroSection />
        <BioSection />
      </div>
    </div>
  );
}
