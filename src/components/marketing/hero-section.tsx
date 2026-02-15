"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SacredParticles } from "@/components/shared/sacred-particles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const chevronVariants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background */}
      <SacredParticles />

      {/* Cyberpunk Eshsheli Fire Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="relative w-[800px] h-[800px]"
        >
          <Image
            src="/images/cyberpunk-fire-bg.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Sacred Geometry Ornament */}
        <motion.div variants={itemVariants} className="mb-8">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            className="mx-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Diamond/ornament shape */}
            <line x1="32" y1="4" x2="32" y2="12" stroke="#D4AF37" strokeWidth="2" />
            <line x1="32" y1="52" x2="32" y2="60" stroke="#D4AF37" strokeWidth="2" />
            <line x1="4" y1="32" x2="12" y2="32" stroke="#D4AF37" strokeWidth="2" />
            <line x1="52" y1="32" x2="60" y2="32" stroke="#D4AF37" strokeWidth="2" />
            {/* Diagonal lines */}
            <line x1="14" y1="14" x2="20" y2="20" stroke="#00D9FF" strokeWidth="2" />
            <line x1="44" y1="44" x2="50" y2="50" stroke="#00D9FF" strokeWidth="2" />
            <line x1="50" y1="14" x2="44" y2="20" stroke="#00D9FF" strokeWidth="2" />
            <line x1="20" y1="44" x2="14" y2="50" stroke="#00D9FF" strokeWidth="2" />
            {/* Center circle */}
            <circle cx="32" cy="32" r="8" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-xs md:text-sm tracking-widest text-gold mb-6 uppercase"
        >
          OS DE CONSCIENCE V.1
        </motion.p>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
            Ne Calculez Plus.
          </h1>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            <span className="sacred-gradient">Vivez.</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Le premier système cognitif qui transforme l'anxiété numérique en Vitalité
          Pure. Propulsé par l'algorithme fractal du Petek.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-4">
          <Link
            href="/checkout"
            className="inline-block px-8 py-4 bg-gold text-black font-bold text-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/50 tracking-wide"
          >
            OBTENIR MA NOVA KEY — $63
          </Link>
        </motion.div>

        {/* CTA Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-gray-400 mb-12"
        >
          Inclus: Nova Key NFC + Caméa + Accès Digital
        </motion.p>

        {/* Nova Key Card Image */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto mb-8 max-w-md"
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-cyan-sacred/20 to-gold/30 rounded-2xl blur-3xl scale-110 opacity-60" />
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateX: [0, 2, 0],
              rotateY: [-3, 3, -3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            <Image
              src="/images/nova-key.jpg"
              alt="Nova Key — Carte NFC sacrée Na Nach Nachma Nachman MeUman"
              width={800}
              height={500}
              className="rounded-2xl shadow-2xl shadow-gold/20"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Breslov Caméa — Included with every Nova Key */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto mb-16 max-w-xs"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-gold/60 text-center mb-4 uppercase">
            Authentic Breslov Caméa Included
          </p>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1, -1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-sacred/30 via-gold/20 to-cyan-sacred/30 rounded-2xl blur-2xl scale-110 opacity-50" />
            <Image
              src="/images/cyberpunk-camea.png"
              alt="Breslov Caméa — Authentique amulette sacrée incluse avec chaque Nova Key"
              width={300}
              height={300}
              className="relative rounded-2xl shadow-2xl shadow-cyan-sacred/30 mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate="animate"
          variants={chevronVariants}
          className="flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
