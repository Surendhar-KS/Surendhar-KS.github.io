'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Bubble = ({ isRight, name, message, icon, time }: { isRight: boolean, name: string, message: string, icon: React.ReactNode, time: string }) => (
  <div className={`w-[85%] ${isRight ? 'self-end bg-[#63E452] border-[#63E452] shadow-[0_4px_24px_rgba(99,228,82,0.3)]' : 'self-start bg-white border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.1)]'} rounded-xl p-3 flex items-center justify-between border`}>
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full overflow-hidden relative flex items-center justify-center shrink-0 text-sm ${isRight ? 'border border-[#032D42]/20 bg-[#032D42]/10 text-[#032D42]' : 'border border-gray-100 bg-gray-50 text-black'}`}>
         {icon}
      </div>
      <div className="flex flex-col">
         <span className={`text-xs font-semibold ${isRight ? 'text-[#032D42]' : 'text-black'}`}>{name}</span>
         <span className={`text-[10px] ${isRight ? 'text-[#032D42]/80' : 'text-black/60'} leading-tight mt-0.5`}>{message}</span>
      </div>
    </div>
    <span className={`text-[9px] shrink-0 ${isRight ? 'text-[#032D42]/60' : 'text-black/40'} ml-2`}>{time}</span>
  </div>
);

const BubbleSet = () => (
  <>
    {/* Virtual Agent */}
    <Bubble isRight={false} name="Ryan Patel" message="I need to reset my VPN password." icon={<Image src="/images/framer/ryan-avatar.webp" alt="User" fill className="object-cover" />} time="10:01" />
    <Bubble isRight={true} name="Virtual Agent" message="I can help! Verifying device..." icon="🤖" time="10:01" />
    <Bubble isRight={true} name="Virtual Agent" message="Password reset. Anything else?" icon="🤖" time="10:02" />
    <Bubble isRight={false} name="Ryan Patel" message="No, thank you! That was fast." icon={<Image src="/images/framer/ryan-avatar.webp" alt="User" fill className="object-cover" />} time="10:02" />
    
    {/* Incident Management */}
    <Bubble isRight={false} name="INC0010234" message="Critical database latency detected." icon="🚨" time="10:15" />
    <Bubble isRight={false} name="Support Tech" message="Investigating now. Locked table." icon="👨‍💻" time="10:17" />
    <Bubble isRight={true} name="Manager" message="Approved Emergency Change CHG00912." icon="👤" time="10:20" />
    <Bubble isRight={false} name="Support Tech" message="Patch applied. Closing incident." icon="👨‍💻" time="10:25" />
    
    {/* HRSD Onboarding */}
    <Bubble isRight={false} name="Workday Sync" message="New hire onboarding for John Doe." icon="📋" time="11:00" />
    <Bubble isRight={true} name="IT Provisioning" message="Laptop and software assigned." icon="💻" time="11:05" />
    <Bubble isRight={false} name="Facilities" message="Security badge ready for pickup." icon="🏢" time="11:30" />
    <Bubble isRight={true} name="Manager" message="Welcome kit ordered! Ready for Day 1." icon="👤" time="11:45" />

    {/* Service Request */}
    <Bubble isRight={false} name="REQ00491" message="Access to AWS Production." icon="🎫" time="14:00" />
    <Bubble isRight={true} name="Automated Policy" message="Security policy check passed." icon="🛡️" time="14:01" />
    <Bubble isRight={true} name="Manager" message="Approved. Use it carefully!" icon="👤" time="14:15" />
    <Bubble isRight={false} name="Active Directory" message="Access provisioned successfully." icon="⚙️" time="14:16" />
  </>
);

export default function ChatAnimation() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#032D42] via-[#21628A] to-[#3A459C] flex flex-col items-center justify-center overflow-hidden">
       {/* Background Mosaic Image */}
       <Image 
          src="/images/framer/mosaic-bg.webp"
          alt="Mosaic Background"
          fill
          className="object-cover opacity-[0.05] mix-blend-plus-lighter pointer-events-none"
       />

       {/* Scrolling Container */}
       <div className="relative z-10 w-full max-w-[280px] h-full overflow-hidden mask-image-vertical-fade mx-auto">
          <div className="w-full pt-[80%]">
             <motion.div 
                animate={{ y: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="w-full flex flex-col h-max"
             >
                {/* We render the set a few times to create a seamless infinite loop */}
                <div className="flex flex-col gap-5 w-full pb-5">
                   <BubbleSet />
                </div>
                <div className="flex flex-col gap-5 w-full pb-5">
                   <BubbleSet />
                </div>
             </motion.div>
          </div>
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
