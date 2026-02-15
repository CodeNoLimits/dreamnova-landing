'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  color: 'gold' | 'cyan';
}

export function SacredParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = (): Particle[] => {
      return Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 2, // 2-5px
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 4, // 4-7 seconds
        color: Math.random() > 0.5 ? 'gold' : 'cyan',
      }));
    };

    setParticles(generateParticles());
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <style jsx>{`
        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) translateX(var(--drift, 0px));
          }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          will-change: transform, opacity;
          animation: float-up linear infinite;
        }

        .particle.gold {
          background: radial-gradient(circle, #D4AF37 0%, #B8960A 100%);
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.5),
                      0 0 40px rgba(212, 175, 55, 0.2);
        }

        .particle.cyan {
          background: radial-gradient(circle, #00D4FF 0%, #0099CC 100%);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.5),
                      0 0 40px rgba(0, 212, 255, 0.2);
        }
      `}</style>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color}`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float-up ${particle.duration}s linear ${particle.delay}s infinite`,
            '--drift': `${(Math.random() - 0.5) * 100}px`,
          } as React.CSSProperties & { '--drift': string }}
        />
      ))}
    </div>
  );
}
