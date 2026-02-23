"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function EstherSection() {
  return (
    <section id="esther" className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-15 pointer-events-none"
      >
        <source src="/videos/DreamAI__La_licorne_tech_avec_une_âme__.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#00D4FF] mb-6 uppercase tracking-wide">
                Esther AI + TikTok Factory
              </h2>
              <p className="text-gray-300 font-body text-lg mb-6 leading-relaxed">
                Notre armée digitale automatisée. Esther AI génère du contenu de pointe avec précision et spiritualité.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 border-l-2 border-[#D4AF37] pl-4">
                  <span className="font-mono font-bold text-[#D4AF37] text-xl">2000+</span>
                  <span className="text-sm text-gray-400 font-display uppercase tracking-widest">Scripts Validés</span>
                </li>
                <li className="flex items-center gap-3 border-l-2 border-[#00D4FF] pl-4">
                  <span className="font-mono font-bold text-[#00D4FF] text-xl">RAG Local</span>
                  <span className="text-sm text-gray-400 font-display uppercase tracking-widest">Intelligence Décentralisée</span>
                </li>
                <li className="flex items-center gap-3 border-l-2 border-[#00FF88] pl-4">
                  <span className="font-mono font-bold text-[#00FF88] text-xl">0€</span>
                  <span className="text-sm text-gray-400 font-display uppercase tracking-widest">Coûts d'API</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full">
              <div className="bg-[#050508] border border-[#1A1A2E] rounded-2xl p-6 shadow-[0_0_30px_rgba(0,212,255,0.1)]">
                <div className="flex items-center justify-between mb-4 border-b border-[#1A1A2E] pb-4">
                  <span className="font-mono text-xs text-[#00D4FF]">ESTHER_AI_TERMINAL</span>
                  <span className="flex gap-2"><span className="w-2 h-2 rounded-full bg-[#FF3366]"></span><span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span><span className="w-2 h-2 rounded-full bg-[#00FF88]"></span></span>
                </div>
                <div className="font-mono text-sm text-gray-400 space-y-2">
                  <p className="text-[#00FF88]">&gt; Loading Nachman Science models...</p>
                  <p>&gt; Indexing 185 source references...</p>
                  <p>&gt; Generating viral TikTok scripts...</p>
                  <p className="text-[#D4AF37]">&gt; Content deployed successfully. ROI: Infinite.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
