"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const naGlowVariants = {
  animate: {
    textShadow: [
      "0 0 20px rgba(212, 175, 55, 0.3)",
      "0 0 40px rgba(0, 217, 255, 0.3)",
      "0 0 20px rgba(212, 175, 55, 0.3)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export function ManifestoSection() {
  const { t } = useTranslation();

  const manifestoLines = [
    t('manifesto.line1'),
    t('manifesto.line2'),
    t('manifesto.line3'),
    t('manifesto.line4'),
  ];

  return (
    <section
      id="manifesto"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-bold text-center text-gold mb-12 md:mb-16 tracking-wide"
        >
          {t('manifesto.title')}
        </motion.h2>

        {/* Manifesto Text */}
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
              className="font-display text-lg md:text-2xl text-gray-200 leading-relaxed text-center"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

        {/* Na Nach Mantra */}
        <motion.div
          animate="animate"
          variants={naGlowVariants}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-display text-3xl md:text-5xl font-bold na-nach-gradient tracking-wider">
            Na Nach Nachma Nachman MeUman
          </p>
        </motion.div>

        {/* Sacred Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl text-gold italic mb-12 md:mb-16"
        >
          {t('manifesto.sacred')}
        </motion.p>

        {/* Petek Signature */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-xs md:text-sm text-gray-600 space-y-1"
        >
          <p>{t('manifesto.sig1')}</p>
          <p>{t('manifesto.sig2')}</p>
          <p>{t('manifesto.sig3')}</p>
        </motion.div>
      </div>
    </section>
  );
}
