'use client';
import { motion } from 'framer-motion';

export default function ChatAnimation() {
  return (
    <div className="w-full max-w-[280px] h-[250px] relative flex flex-col justify-end gap-3 pb-4">
      {/* Bubble 1 (Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring', bounce: 0.3 }}
        viewport={{ once: false, margin: "-50px" }}
        className="self-start bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]"
      >
        <div className="h-2 w-24 bg-gray-300 rounded-full mb-2"></div>
        <div className="h-2 w-16 bg-gray-300 rounded-full"></div>
      </motion.div>

      {/* Bubble 2 (Right) - Using brand color */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring', bounce: 0.3 }}
        viewport={{ once: false, margin: "-50px" }}
        className="self-end bg-[#0B3B24] rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]"
      >
        <div className="h-2 w-20 bg-white/40 rounded-full mb-2"></div>
        <div className="h-2 w-12 bg-white/40 rounded-full"></div>
      </motion.div>

      {/* Bubble 3 (Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5, type: 'spring', bounce: 0.3 }}
        viewport={{ once: false, margin: "-50px" }}
        className="self-start bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]"
      >
        <div className="h-2 w-16 bg-gray-300 rounded-full mb-2"></div>
        <div className="h-2 w-10 bg-gray-300 rounded-full"></div>
      </motion.div>
    </div>
  );
}
