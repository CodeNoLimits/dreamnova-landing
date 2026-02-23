"use client";

import { useEffect, useState } from "react";

export function Particles({ className = "" }: { className?: string }) {
  const [stars, setStars] = useState<{ x: number; y: number; s: number; o: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 1,
      o: Math.random() * 0.5 + 0.1,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.s}px`,
            height: `${star.s}px`,
            opacity: star.o,
            boxShadow: `0 0 ${star.s * 2}px #00D4FF`,
          }}
        />
      ))}
    </div>
  );
}
