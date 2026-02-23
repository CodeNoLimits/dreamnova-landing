"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCounter({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 40, damping: 15 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    spring.set(value);
    
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
      spring.set(value + Math.floor(Math.random() * 10));
    }, 3000);

    return () => clearInterval(interval);
  }, [spring, value]);

  return (
    <motion.span 
      className={`font-space text-cyan inline-block ${glitch ? 'translate-x-[2px] -translate-y-[1px] text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]' : ''}`}
    >
      {display}
    </motion.span>
  );
}
