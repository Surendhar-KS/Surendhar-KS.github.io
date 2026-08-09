'use client';
import { motion } from 'framer-motion';
import ChatAnimation from '../animations/ChatAnimation';
import Card1 from '../animations/Card1';
import Card2 from '../animations/Card2';

export default function FeatureSection() {
  return (
    <section className="w-full py-24 bg-[#faf7f3] flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full px-6 flex flex-col items-center gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center"
          >
            <span className="text-sm font-semibold tracking-widest text-black/60 uppercase">Features</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-black max-w-2xl leading-tight"
          >
            Workflows That Stay in Motion
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-black/60 max-w-2xl"
          >
            From creation to collaboration to delivery — without breaking context.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          
          {/* Card 1 (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 min-h-[460px] rounded-2xl bg-white shadow-sm border border-black/5 overflow-hidden flex flex-col relative group"
          >
             <Card1 />
          </motion.div>

          {/* Middle Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 rounded-2xl bg-white shadow-sm border border-black/5 flex flex-col justify-between py-8 px-6 group overflow-hidden relative"
          >
            <div className="w-full flex justify-between items-center mb-6 relative z-10">
              <h3 className="text-lg font-medium text-black/40 uppercase tracking-wider">Collaboration</h3>
            </div>
            
            <div className="w-full flex-1 flex items-center justify-center min-h-[250px] relative z-10">
               <ChatAnimation />
            </div>

            <div className="w-full flex flex-col gap-3 mt-6 border-t border-black/5 pt-6 relative z-10">
              <h4 className="text-xl font-medium text-black">Built for Team Flow</h4>
              <p className="text-black/60 leading-relaxed text-sm">
                Keep conversations, updates, and decisions moving together.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 rounded-2xl bg-white shadow-sm border border-black/5 flex flex-col justify-between py-8 px-6 group overflow-hidden relative"
          >
            <div className="w-full flex justify-between items-center mb-6 relative z-10">
              <h3 className="text-lg font-medium text-black/40 uppercase tracking-wider">Execution</h3>
            </div>
            
            <div className="w-full flex-1 flex items-center justify-center min-h-[250px] relative z-10">
               <Card2 />
            </div>

            <div className="w-full flex flex-col gap-3 mt-6 border-t border-black/5 pt-6 relative z-10">
              <h4 className="text-xl font-medium text-black">Move Work Forward</h4>
              <p className="text-black/60 leading-relaxed text-sm">
                Take action, share context, and ship without delays.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
