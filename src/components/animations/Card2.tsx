'use client';
import { motion } from 'framer-motion';

export default function Card2() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden bg-white/50">
       <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
          viewport={{ once: false, margin: "-50px" }}
          className="w-[220px] bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 overflow-hidden flex flex-col z-10"
       >
          <div className="p-4 border-b border-gray-50 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#E5D726]/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#E5D726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
             </div>
             <div className="flex flex-col gap-1.5">
                <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
                <div className="w-10 h-2 bg-gray-100 rounded-full"></div>
             </div>
          </div>
          <div className="p-4 flex flex-col gap-3 bg-gray-50/50">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: false }}
              className="flex items-center gap-3"
            >
               <div className="w-4 h-4 rounded-full bg-[#0B3B24]"></div>
               <div className="w-24 h-2 bg-gray-200 rounded-full"></div>
            </motion.div>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: false }}
              className="flex items-center gap-3"
            >
               <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
               <div className="w-16 h-2 bg-gray-200 rounded-full"></div>
            </motion.div>
            
            <div className="mt-2 w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="h-full bg-[#0B3B24] rounded-full"
                />
            </div>
          </div>
       </motion.div>
       
       {/* Background decorative elements */}
       <motion.div 
         initial={{ opacity: 0, rotate: -10 }}
         whileInView={{ opacity: 1, rotate: 0 }}
         transition={{ delay: 0.2, duration: 0.8 }}
         viewport={{ once: false }}
         className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#E5D726]/10 rounded-full blur-2xl"
       />
       <motion.div 
         initial={{ opacity: 0, rotate: 10 }}
         whileInView={{ opacity: 1, rotate: 0 }}
         transition={{ delay: 0.3, duration: 0.8 }}
         viewport={{ once: false }}
         className="absolute -left-4 top-4 w-24 h-24 bg-[#0B3B24]/5 rounded-full blur-xl"
       />
    </div>
  );
}
