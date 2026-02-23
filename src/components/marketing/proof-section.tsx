"use client";

import { motion } from "framer-motion";
import { Activity, Code, Globe, Shield, Users } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function ProofSection() {
  const metrics = [
    { value: "84", label: "Vercel Projects", icon: Code },
    { value: "8", label: "Sites Live", icon: Globe },
    { value: "5", label: "Clients Actifs", icon: Users },
    { value: "1.846", label: "Bits (H)", icon: Activity },
    { value: "185", label: "Références", icon: Shield },
  ];

  return (
    <section id="proof" className="relative py-20 md:py-32 bg-[#050508] border-y border-[#1A1A2E] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-10 pointer-events-none"
      >
        <source src="/videos/Cinematic_3d_floating_1080p_202602231243 (4).mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
            Proof of Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
            Nachman Science : H(F) = 1.846 bits. Status Hub Metrics. Zéro concurrence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center p-6 bg-[#0A0A0A] border border-[#1A1A2E] rounded-xl hover:border-[#D4AF37]/50 transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#D4AF37] mb-4" />
                  <span className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
                    {metric.value}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 font-display tracking-widest uppercase text-center">
                    {metric.label}
                  </span>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
