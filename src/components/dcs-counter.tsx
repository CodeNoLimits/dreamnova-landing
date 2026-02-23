"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function DCSCounter() {
  const [score, setScore] = useState(148000);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-space-mono text-cyan-400 text-3xl md:text-5xl tracking-widest bg-black-matte/50 p-6 rounded-lg border border-cyan-400/20 backdrop-blur-md relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
      <motion.span
        key={score}
        initial={{ opacity: 0.8, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block"
      >
        {score.toLocaleString()}
      </motion.span>
      <div className="text-xs uppercase text-cyan-400/60 mt-2 font-rajdhani tracking-[0.2em]">
        Live Global DCS
      </div>
    </div>
  );
}
