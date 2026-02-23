"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function FundingSection() {
  const tractionData = [
    { metric: "196", label: "Investisseurs Pipeline" },
    { metric: "23 Mars", label: "Deel Pitch" },
    { metric: "÷4", label: "CPL (Modèle HA-MAZON)" },
  ];

  return (
    <section id="funding" className="relative py-20 md:py-32 bg-[#050508] border-y border-[#1A1A2E]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide uppercase">
              Funding & Traction
            </h2>
            <p className="text-[#D4AF37] font-mono tracking-widest text-sm uppercase">Berrebi prêt à l'action</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tractionData.map((data, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div className="bg-[#0A0A0A] border border-[#1A1A2E] p-8 text-center rounded-xl">
                <div className="text-5xl font-display font-bold text-white mb-4">{data.metric}</div>
                <div className="text-gray-400 font-mono text-sm uppercase tracking-widest">{data.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
