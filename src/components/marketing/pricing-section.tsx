"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { HolographicShimmer } from "@/components/shared/holographic-effects";

const tiers = [
  {
    name: "COVENANT",
    price: 63,
    sacred: "63 = SaG (Binah)",
    features: [
      "1 Nova Key NFC matte black",
      "DCS Profile complet",
      "Genie 3 World persistant",
      "Azamra OS",
      "Accès Communauté",
    ],
    cta: "JOIN THE COVENANT",
    href: "/checkout",
    popular: false,
  },
  {
    name: "PAIR",
    price: 99,
    sacred: "Bénédiction ×2",
    features: [
      "2 Nova Keys appariées",
      "Bénédiction mutuelle",
      "Monde partagé",
      "Tout Covenant inclus",
    ],
    cta: "PAIR UP",
    href: "/checkout?variant=duo",
    popular: true,
  },
  {
    name: "PLATINUM",
    price: 149,
    sacred: "148 = Nachman",
    features: [
      "Nova Key Premium (finition or)",
      "Contenu exclusif + early beta",
      "Kamea Tiberiade",
      "Tout Pair inclus",
    ],
    cta: "GO PLATINUM",
    href: "/checkout?variant=platinum",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-[#050508] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-20 pointer-events-none"
      >
        <source src="/videos/Cinematic_3d_floating_1080p_202602231244.mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/img/grok/nova_key_close.png')" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#D4AF37]/60 uppercase mb-4">
            03 // HARDWARE
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#D4AF37] mb-4 tracking-wide uppercase">
            Touche la clé. Mute ta réalité.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-body">
            NTAG 215. Stainless steel. Matte black. L&apos;interface physique vers votre monde.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-[#050508]/90 backdrop-blur-xl border rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                tier.popular
                  ? "border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.4)] scale-[1.03]"
                  : "border-[#1A1A2E] hover:border-[#D4AF37]/50"
              }`}
            >
              {tier.popular && <HolographicShimmer />}

              {tier.popular && (
                <div className="absolute -top-3 right-6 bg-[#D4AF37] text-black text-xs px-5 py-1 rounded-full font-display font-bold tracking-widest">
                  POPULAR • 148 ENERGY
                </div>
              )}

              <h3 className="font-display text-2xl font-bold text-[#D4AF37] mb-2 uppercase tracking-wide">
                {tier.name}
              </h3>

              <div className="mb-4">
                <span className={`font-mono text-5xl font-bold ${tier.popular ? "text-[#D4AF37]" : "text-[#00D4FF]"}`}>
                  ${tier.price}
                </span>
              </div>

              <p className="text-gray-400 text-sm font-mono mb-8 uppercase tracking-widest h-8">
                {tier.sacred}
              </p>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.popular ? "text-[#D4AF37]" : "text-[#00FF88]"}`} />
                    <span className="text-gray-300 text-sm font-body">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`block w-full py-4 font-display font-bold text-center uppercase tracking-widest transition-all duration-300 rounded-xl ${
                  tier.popular
                    ? "bg-[#D4AF37] text-black hover:bg-white"
                    : "bg-transparent border border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF] hover:text-black"
                }`}
              >
                {tier.cta} — ${tier.price}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#D4AF37]/50 uppercase">
            NTAG 215 • Acier inoxydable • Gravé 148 au laser • 10% Tsedaka • Stripe sécurisé
          </p>
        </motion.div>
      </div>
    </section>
  );
}
