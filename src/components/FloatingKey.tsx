"use client";

import { motion } from "framer-motion";

export default function FloatingKey() {
  return (
    <div className="relative w-64 h-96 mx-auto perspective-[1000px]">
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotateY: [0, 5, -5, 0],
          rotateX: [0, 2, -2, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 6, 
          ease: "easeInOut" 
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full bg-[#111] rounded-2xl border border-sacred/40 glowing-sacred flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sacred/10 to-transparent pointer-events-none" />
        
        {/* Hexagon Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 11.5v17L20 40 0 28.5v-17L20 0zm0 2.3L2 12.6v14.8l18 10.3 18-10.3V12.6L20 2.3z' fill='%23D4AF37' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />

        <div className="z-10 flex flex-col items-center justify-center space-y-4">
          <motion.div 
            animate={{ opacity: [0.7, 1, 0.7] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-cyan text-xs font-space tracking-[0.3em]"
          >
            NFC ENABLED
          </motion.div>
          <h2 className="text-6xl font-cinzel text-sacred drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
            148
          </h2>
          <div className="w-16 h-[1px] bg-sacred/50" />
          <p className="text-[10px] font-space text-sacred/70 tracking-widest text-center px-4">
            SOURCE CODE<br/>OF REALITY
          </p>
        </div>
      </motion.div>
    </div>
  );
}
