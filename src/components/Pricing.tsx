"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HolographicShimmer } from '@/components/HolographicShimmer';

const tiers = [
  {
    name: "COVENANT",
    price: 63,
    sacred: "63 = SaG (Binah)",
    features: ["1 Nova Key NFC matte black", "DCS Profile complet", "Genie 3 World persistant", "Azamra OS", "Accès Communauté"],
    cta: "JOIN THE COVENANT",
    popular: false
  },
  {
    name: "PAIR",
    price: 99,
    sacred: "Bénédiction ×2",
    features: ["2 Nova Keys appariées", "Bénédiction mutuelle NFC", "Monde partagé Genie 3", "Tout Covenant inclus"],
    cta: "PAIR UP",
    popular: true
  },
  {
    name: "PLATINUM",
    price: 149,
    sacred: "148 = Nachman",
    features: ["Nova Key Premium (finition or)", "Contenu exclusif + early beta", "Kamea Tiberiade", "Tout Pair inclus"],
    cta: "GO PLATINUM",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-void relative overflow-hidden border-y border-sacred/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="tech-text">03 // HARDWARE</span>
          <h2 className="text-4xl md:text-5xl font-cinzel text-sacred mt-4 tracking-widest">Touche la clé. Mute ta réalité.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 border rounded-2xl bg-void/90 backdrop-blur-xl flex flex-col h-full ${tier.popular 
                ? 'border-sacred shadow-[0_0_40px_rgba(212,175,55,0.4)] scale-100 md:scale-[1.03]' 
                : 'border-sacred/30 hover:border-sacred/60'}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 right-6 bg-sacred text-void text-xs px-5 py-1 rounded-full font-cinzel font-bold tracking-widest z-10">
                  POPULAR • 148 ENERGY
                </div>
              )}

              <h3 className="text-3xl font-cinzel text-sacred">{tier.name}</h3>
              <div className="mt-2 text-6xl font-space text-white">${tier.price}</div>
              <p className="text-cyan text-sm mt-1 tracking-widest uppercase font-space">{tier.sacred}</p>

              <ul className="mt-8 mb-8 space-y-4 text-white/80 font-rajdhani text-lg flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-sacred mt-1">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                className={`w-full font-cinzel tracking-widest ${tier.popular ? 'bg-sacred text-void hover:bg-yellow-500' : 'bg-transparent border border-sacred text-sacred hover:bg-sacred/10'}`}
                onClick={() => window.location.href = '#waitlist'}
              >
                {tier.cta}
              </Button>

              {tier.popular && <HolographicShimmer className="absolute inset-0 opacity-20 pointer-events-none rounded-2xl" />}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-cyan/70 text-xs tracking-[0.125em] font-space uppercase">
          NTAG 215 • Acier inoxydable • Gravé 148 au laser • 10% Tsedaka • Stripe sécurisé
        </div>
      </div>
    </section>
  );
}
