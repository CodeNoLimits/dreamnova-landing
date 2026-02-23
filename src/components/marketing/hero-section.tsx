"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { SacredParticles } from "@/components/shared/sacred-particles";
import {
  ScanLine,
  HoloParticles,
} from "@/components/shared/holographic-effects";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  const [dcsScore, setDcsScore] = useState(148000);

  useEffect(() => {
    const interval = setInterval(() => {
      setDcsScore((prev) => prev + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-20 pointer-events-none"
      >
        <source
          src="/videos/Cinematic_3d_floating_1080p_202602231243 (1).mp4"
          type="video/mp4"
        />
      </video>

      {/* Background Particles */}
      <SacredParticles />
      <ScanLine />
      <HoloParticles count={8} />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
            DCS —{" "}
            <span className="text-[#D4AF37]">Dream Consistency Score</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-body"
        >
          Le premier passeport qualitatif du mérite humain. Crée ton monde avec
          Genie 3. Débloque-le avec la Nova Key NFC.{" "}
          <span className="text-[#00D4FF] font-semibold">
            Hafatsa 25 % en cours.
          </span>
        </motion.p>

        {/* Visual: Nova Key + DCS Counter */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto mb-10 max-w-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-[#00D4FF]/10 to-[#D4AF37]/20 rounded-2xl blur-3xl scale-110 opacity-60" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" as const }}
            className="relative bg-[#050508] border border-[#1A1A2E] p-6 rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-[#D4AF37]/10"
          >
            <Image
              src="/images/nova-key.jpg"
              alt="Nova Key NFC Matte Black"
              width={400}
              height={250}
              className="rounded-xl shadow-lg border border-[#D4AF37]/30 mb-6 object-cover"
              priority
            />
            <div className="flex flex-col items-center space-y-2">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                Live DCS Counter
              </span>
              <span className="font-mono text-4xl md:text-5xl text-[#00D4FF] font-bold tracking-tight">
                {dcsScore.toLocaleString()}
              </span>
              <span className="font-display text-sm text-[#D4AF37] tracking-widest mt-2 uppercase">
                Genie 3 + Na Nach Inside
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mb-12">
          <Link
            href="#pricing"
            className="inline-block px-10 py-5 bg-[#D4AF37] text-black font-display font-bold text-lg md:text-xl uppercase hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] tracking-wide"
          >
            GET MY NOVA KEY — $63
          </Link>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-mono text-gray-400"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> 148 = Nachman
          </div>
          <div className="hidden md:block text-[#1A1A2E]">|</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> 63 = SaG
          </div>
          <div className="hidden md:block text-[#1A1A2E]">|</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00D4FF]" /> H(F)=1.846 bits
            (Nachman Science)
          </div>
          <div className="hidden md:block text-[#1A1A2E]">|</div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Brevet DCS déposé
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
