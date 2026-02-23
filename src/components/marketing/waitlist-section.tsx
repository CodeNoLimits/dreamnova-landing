"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#00D4FF] mb-6 tracking-wide uppercase">
            Early Access
          </h2>
          <p className="text-xl text-gray-300 font-body mb-8">
            Rejoignez la beta fermée à Tel Aviv. 500 utilisateurs fundatores.
          </p>
          
          <div className="bg-[#050508] p-8 md:p-12 rounded-2xl border border-[#00D4FF]/30 shadow-[0_0_30px_rgba(0,212,255,0.1)]">
            <h3 className="font-display font-bold text-2xl text-white mb-6 uppercase">
              "Tap the Key" Demo
            </h3>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-[#0A0A0A] border border-[#1A1A2E] text-white font-mono px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button 
                type="button" 
                className="bg-[#D4AF37] text-black font-display font-bold uppercase px-8 py-3 hover:bg-white transition-colors"
              >
                REQUEST ACCESS
              </button>
            </form>
            
            <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              Limited spots available. Priorité aux porteurs de Nova Key.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
