'use client';
import { motion, useTime, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ChatAnimation() {
  const time = useTime();
  // Scroll up infinitely: moves from 0 to -100% (or specific pixel amount) over 15 seconds
  const yOffset = useTransform(time, [0, 15000], [0, -320], { clamp: false });

  // A single set of chat bubbles (we'll duplicate it for infinite scroll)
  const BubbleSet = () => (
    <>
      {/* Bubble 1 (White, Left) */}
      <div className="w-[85%] self-start bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-3 flex items-center justify-between border border-black/5">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden relative border border-gray-100 shrink-0">
               <Image src="/images/framer/ryan-avatar.png" alt="Ryan Patel" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs font-semibold text-black">Ryan Patel</span>
               <span className="text-[10px] text-black/50">Shared final context</span>
            </div>
         </div>
         <span className="text-[9px] text-black/40 shrink-0">Just Now</span>
      </div>

      {/* Bubble 2 (Green, Right) */}
      <div className="w-[85%] self-end bg-gradient-to-r from-[#4ADE80] to-[#05DE22] rounded-xl shadow-[0_4px_24px_rgba(5,222,34,0.2)] p-3 flex items-center justify-between border border-[#4ADE80]">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden relative border border-white/20 shrink-0">
               <Image src="/images/framer/ryan-avatar.png" alt="Ryan Patel" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs font-semibold text-white">Ryan Patel</span>
               <span className="text-[10px] text-white/70">Shared final context</span>
            </div>
         </div>
         <span className="text-[9px] text-white/60 shrink-0">Just Now</span>
      </div>
      
      {/* Bubble 3 (White, Left) */}
      <div className="w-[85%] self-start bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-3 flex items-center justify-between border border-black/5">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden relative border border-gray-100 shrink-0">
               <Image src="/images/framer/ryan-avatar.png" alt="Ryan Patel" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs font-semibold text-black">Ryan Patel</span>
               <span className="text-[10px] text-black/50">Shared final context</span>
            </div>
         </div>
         <span className="text-[9px] text-black/40 shrink-0">Just Now</span>
      </div>

      {/* Bubble 4 (Green, Right) */}
      <div className="w-[85%] self-end bg-gradient-to-r from-[#4ADE80] to-[#05DE22] rounded-xl shadow-[0_4px_24px_rgba(5,222,34,0.2)] p-3 flex items-center justify-between border border-[#4ADE80]">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden relative border border-white/20 shrink-0">
               <Image src="/images/framer/ryan-avatar.png" alt="Ryan Patel" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
               <span className="text-xs font-semibold text-white">Ryan Patel</span>
               <span className="text-[10px] text-white/70">Shared final context</span>
            </div>
         </div>
         <span className="text-[9px] text-white/60 shrink-0">Just Now</span>
      </div>
    </>
  );

  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FAFFFA] via-[#B2F5C8] to-[#8AEF98] flex flex-col items-center justify-center overflow-hidden">
       {/* Background Mosaic Image */}
       <Image 
          src="/images/framer/mosaic-bg.png"
          alt="Mosaic Background"
          fill
          className="object-cover opacity-[0.15] mix-blend-multiply pointer-events-none"
       />

       {/* Scrolling Container */}
       <div className="relative z-10 w-full max-w-[280px] h-full overflow-hidden mask-image-vertical-fade flex justify-center">
          
          <motion.div 
             style={{ y: yOffset }}
             className="w-full flex flex-col gap-5 pt-[50%]" // The y-translation will loop smoothly
          >
             {/* We render the set a few times to create a seamless infinite loop */}
             <div className="flex flex-col gap-5 w-full">
                <BubbleSet />
                <BubbleSet />
                <BubbleSet />
             </div>
          </motion.div>
          
       </div>
       
       <style dangerouslySetInnerHTML={{__html: `
         .mask-image-vertical-fade {
            mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
         }
       `}} />
    </div>
  );
}
