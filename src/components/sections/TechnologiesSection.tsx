'use client';
import { motion } from "framer-motion";
import { InfiniteSlider } from '@/components/core/infinite-slider';
const icons = {
    huggingface: "/icons/huggingface.svg",
    tensorflow: "/icons/tensorflow.svg",
    opencv: "/icons/opencv.svg",
  java: "/icons/java.svg",
  python: "/icons/python.svg",
  sql: "/icons/sql.svg",
  aws: "/icons/aws.svg",
  terraform: "/icons/terraform.svg",
  docker: "/icons/docker.svg",
  kubernetes: "/icons/kubernetes.svg",
  githubactions: "/icons/githubactions.svg",
  linux: "/icons/linux.svg",
  vscode: "/icons/vscode.svg",
  git: "/icons/git.svg",
  github: "/icons/github.svg",
  postman: "/icons/postman.svg",
  supabase: "/icons/supabase.svg",
  githubcopilot: "/icons/githubcopilot.svg",
  claude: "/icons/claude.svg",
  cursor: "/icons/cursor.svg",
  antigravity: "/icons/antigravity.svg",
  react: "/icons/react.svg",
  typescript: "/icons/typescript.svg",
  netlify: "/icons/netlify.svg",
  vercel: "/icons/vercel.svg",
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
        <span className="text-[10px] font-bold text-[#111]/75 whitespace-nowrap transition-all duration-300 group-hover:text-[#111]">{name}</span>
      </motion.div>
    </motion.div>
  );
}

function SkillBox({ title, description, skills, index }: { title: string, description: string, skills: {name: string, src: string}[], index: number }) {
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
        <h3 className="text-[22px] font-semibold text-[#111] tracking-tight font-sans font-semibold">{title}</h3>
        <p className="text-[15px] text-[#111]/60 font-sans font-normal leading-[1.6]">{description}</p>
      </div>

      <div className="flex flex-wrap gap-3 w-full relative z-10 mt-auto">
        {skills.map((s, i) => <SkillIcon key={i} index={i} name={s.name} src={s.src} />)}
      </div>
    </motion.div>
  );
}

export default function TechnologiesSection() {
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
    <div className="w-full flex flex-col items-center justify-center pt-[80px] md:pt-[180px] pb-[40px] px-[20px] gap-[48px] md:gap-[96px] relative overflow-hidden" data-name="Technologies Section" data-theme="dark">
      {/* Background Mesh for Glassmorphism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-tr from-[#111]/[0.05] via-transparent to-[#111]/[0.05] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="mx-auto w-full max-w-[980px] text-center">
        <motion.h2 
          initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-semibold text-[38px] font-semibold tracking-[-0.96px] text-transparent bg-clip-text bg-gradient-to-br from-[#111] to-[#444] sm:text-[46px] lg:text-[72px] lg:tracking-[-1.44px] leading-[0.95]"
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

      {/* Infinite Logo Slider */}
      <div className="w-full relative z-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <InfiniteSlider gap={32} reverse duration={40}>
          {Object.entries(icons).map(([name, src], idx) => (
             <div key={idx} className="flex items-center justify-center size-[80px]">
               <img 
                 src={src} 
                 alt={name} 
                 className="size-[48px] object-contain opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100" 
               />
             </div>
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}


