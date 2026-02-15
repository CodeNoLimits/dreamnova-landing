"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const includes = [
  "Nova Key NFC (Acier Inoxydable, Gravure Or)",
  "Caméa Breslov Authentique",
  "The Source Code of Reality (PDF)",
  "Tikkun HaKlali Digital",
  "Guide Méditation Azamra",
  "Kit Ambassadeur Hafatsa",
];

const breakdown = [
  { label: "Production (NFC + Caméa)", amount: "$18" },
  { label: "Shipping", amount: "$8" },
  { label: "Digital Platform", amount: "$10" },
  { label: "Hafatsa Mission (63M$)", amount: "$27" },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-gold mb-4 tracking-wide">
            LE MODÈLE 63
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Pas Un Prix. Un Code Sacré.
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto mb-16"
        >
          {/* Nova Key Card Image */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-cyan-sacred/10 rounded-2xl blur-2xl scale-105" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
              className="relative"
            >
              <Image
                src="/images/nova-key.jpg"
                alt="Nova Key NFC — Acier Inoxydable, Gravure Or"
                width={500}
                height={313}
                className="rounded-xl mx-auto shadow-xl shadow-gold/15"
              />
            </motion.div>
          </div>
          <div className="dark-card border-2 border-gold p-8 md:p-12 hover:shadow-lg hover:shadow-gold/30 transition-all duration-300">
            {/* Card Title */}
            <h3 className="font-display text-2xl md:text-3xl text-center font-bold text-gold mb-4 tracking-wide">
              THE COVENANT PACK
            </h3>

            {/* Price */}
            <div className="text-center mb-2">
              <p className="font-display text-5xl md:text-6xl font-bold sacred-gradient">
                $63
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-center text-gray-400 text-sm mb-8">
              SaG (סג) — Gematria de la Réparation
            </p>

            {/* Divider */}
            <div className="border-t border-gold/20 mb-8" />

            {/* Includes List */}
            <ul className="space-y-4 mb-8">
              {includes.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/checkout"
              className="block w-full py-3 md:py-4 bg-gold text-black font-bold text-center hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/50 tracking-wide mb-6"
            >
              RECEVOIR MA CLEF
            </Link>

            {/* Alternative Options */}
            <div className="text-center space-y-2 text-xs md:text-sm">
              <p className="text-gray-500">Alternatives:</p>
              <p>
                <Link
                  href="/checkout?variant=platinum"
                  className="text-cyan hover:text-gold transition-colors"
                >
                  Édition Platinum $149
                </Link>
                {" — "}
                <Link
                  href="/checkout?variant=duo"
                  className="text-cyan hover:text-gold transition-colors"
                >
                  Pack Duo $99
                </Link>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto p-6 md:p-8 dark-card border border-gold/20 bg-black/50"
        >
          <h4 className="font-bold text-gold text-center mb-6 tracking-wide">
            Où Va Votre $63?
          </h4>
          <div className="space-y-3">
            {breakdown.map((item, index) => (
              <div key={index} className="flex justify-between text-sm md:text-base">
                <span className="text-gray-400">{item.label}</span>
                <span className="text-gold font-semibold">{item.amount}</span>
              </div>
            ))}
            <div className="border-t border-gold/20 pt-3 mt-3 flex justify-between font-bold">
              <span className="text-gold">Total</span>
              <span className="text-gold">$63</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
