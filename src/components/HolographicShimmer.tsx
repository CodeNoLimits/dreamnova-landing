"use client";

import { motion } from "framer-motion";

export function HolographicShimmer({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
          repeatDelay: 2
        }}
        className="absolute inset-0 z-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      />
    </div>
  );
}
