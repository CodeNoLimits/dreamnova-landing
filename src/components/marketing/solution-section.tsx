"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Music } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import Image from "next/image";

const features = [
  {
    title: "L'ALGORITHME AZAMRA",
    icon: Sparkles,
    description:
      "Trouvez le Point de Bien en chaque instant. Une pratique quotidienne de 5 minutes qui reconfigure votre Default Mode Network.",
  },
  {
    title: "MÉTA-LOGIQUE DU RÉEL",
    icon: Zap,
    description:
      "Gödel a prouvé que tout système se transcende. Nous avons trouvé la preuve formelle dans les structures récursives de la Kabbale.",
  },
  {
    title: "LA MÉLODIE DU PETEK",
    icon: Music,
    description:
      "Na Nach Nachma Nachman MeUman — L'expansion fractale qui encode la structure profonde de la conscience.",
  },
];

const codeLines = [
  "function azamra(moment) {",
  "  const nekudaTova = find_good_point(moment);",
  "  const melody = expand(nekudaTova);",
  "  return melody.heal(consciousness);",
  "}",
  "// Output: Vitalité Pure ✨",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-cyan mb-4 tracking-wide">
            NÉGUENTROPIE
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            La Solution: NOVA-TAM
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  variants={cardVariants}
                  className="group dark-card p-6 md:p-8 border border-cyan-900/30 hover:border-cyan hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-cyan mb-4" />
                  <h3 className="font-bold text-lg md:text-xl text-cyan mb-3 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </motion.div>

        {/* Sacred Artifacts Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-cyan text-center mb-6 uppercase">
            The Sacred Artifacts
          </p>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-sacred/20 via-gold/10 to-cyan-sacred/20 rounded-2xl blur-3xl scale-105 opacity-50" />
            <Image
              src="/images/cyberpunk-camea-hero.png"
              alt="Collection de Caméas Breslov — Artefacts sacrés inclus avec chaque Nova Key"
              width={700}
              height={700}
              className="relative rounded-2xl shadow-2xl shadow-cyan-sacred/20 mx-auto"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Each Nova Key includes an authentic Breslov Caméa — handcrafted sacred amulets with the fire of Na Nach.
          </p>
        </motion.div>

        {/* Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="dark-card border border-cyan-900/30 p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                viewport={{ once: true }}
                className="text-green-400"
              >
                {line}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
