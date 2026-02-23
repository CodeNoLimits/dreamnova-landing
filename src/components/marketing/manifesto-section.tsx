"use client";

"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const naGlowVariants = {
  animate: {
    textShadow: [
      "0 0 20px rgba(212, 175, 55, 0.3)",
      "0 0 40px rgba(0, 217, 255, 0.3)",
      "0 0 20px rgba(212, 175, 55, 0.3)",
    ],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

export function ManifestoSection() {
  const manifestoLines = [
    "Il n'y a aucun désespoir dans le monde.",
    "La joie est le code source. La technique en est l'extension.",
    "Gödel prouve l'incomplétude. Le Petek apporte la certitude.",
    "NOVA1 I197V & ASL : l'ADN reprogrammé par l'Essence.",
  ];

  return (
    <section id="manifesto" className="relative py-20 md:py-32 bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/cyberpunk-fire-bg.png')] bg-cover bg-center opacity-5 pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-bold text-[#D4AF37] mb-12 md:mb-16 tracking-wide uppercase"
        >
          Manifesto
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8 mb-12 md:mb-16"
        >
          {manifestoLines.map((line, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="font-display text-lg md:text-2xl text-gray-200 leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          animate="animate"
          variants={naGlowVariants}
          className="mb-12 md:mb-16"
        >
          <p className="font-display text-3xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#00D4FF] to-[#00FF88]">
            Ein Ye'ush Ba'olam Klal
          </p>
          <p className="font-mono text-sm text-[#D4AF37] tracking-[0.3em] uppercase mt-4">
            Na Nach Nachma Nachman MeUman
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm text-gray-500 font-mono tracking-widest uppercase space-y-2"
        >
          <p>&gt; SOURCE CODE OF REALITY ACTIVATED</p>
          <p>&gt; DECRYPTING PETEK... 148</p>
          <p>&gt; SYSTEM STATUS: OPTIMAL JOY</p>
        </motion.div>
      </div>
    </section>
  );
}
