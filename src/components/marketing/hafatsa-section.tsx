"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function HafatsaSection() {
  return (
    <section id="hafatsa" className="relative py-20 md:py-32 bg-[#050508] border-b border-[#1A1A2E] overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/img/grok/hafatsa_25_visual.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4 tracking-wide uppercase">
            Hafatsa 25%
          </h2>
          <p className="text-xl text-gray-300 font-body">
            Le point de basculement. Mission 63M$.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#1A1A2E] hover:border-[#D4AF37] transition-all text-center h-full">
              <TrendingUp className="w-10 h-10 text-[#00D4FF] mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-white mb-2 uppercase">Tipping Point</h3>
              <p className="text-gray-400 font-body text-sm">
                Selon la loi de Centola, 25% suffit pour inverser un système social. Nous avons atteint la masse critique.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.1)] text-center h-full sm:scale-105">
              <Users className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-[#D4AF37] mb-2 uppercase">Mission 63M$</h3>
              <p className="text-gray-400 font-body text-sm">
                L'injection finale pour scaler la joie. Le Tikkun global financé par la technologie.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-[#0A0A0A] p-8 rounded-xl border border-[#1A1A2E] hover:border-[#00FF88] transition-all text-center h-full">
              <Heart className="w-10 h-10 text-[#00FF88] mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-white mb-2 uppercase">10% Tsedaka</h3>
              <p className="text-gray-400 font-body text-sm">
                Inscrit dans le smart contract de notre réalité. Chaque clé soutient directement la diffusion.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
