"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const problems = [
  {
    title: "BOUCLE DOPAMINERGIQUE",
    description:
      "Votre cerveau est hijacké par des algorithmes de rétention conçus pour maximiser l'engagement.",
  },
  {
    title: "PARALYSIE DÉCISIONNELLE",
    description:
      "L'excès d'options crée l'illusion du choix. Résultat: anxiété chronique.",
  },
  {
    title: "EROSION IDENTITAIRE",
    description:
      "Les réseaux sociaux fragmentent le Soi. Vous devenez une collection de personas.",
  },
  {
    title: "LE VIDE EXISTENTIEL",
    description: "79% de la Gen Z rapporte un sentiment de vide spirituel.",
  },
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

export function ProblemSection() {
  return (
    <section
      id="entropy"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />

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
            L'ENTROPIE
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Le Problème Que Personne Ne Nomme
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16"
        >
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                variants={cardVariants}
                className="group dark-card p-6 md:p-8 border border-red-900/30 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-danger flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-danger mb-3 tracking-wide">
                      {problem.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 md:p-12 border-l-4 border-gold"
        >
          <p className="font-display text-2xl md:text-3xl text-gold italic mb-4">
            כל העולם כולו גשר צר מאוד
          </p>
          <p className="text-gray-400 text-lg">
            Tout le monde est un pont très étroit — Rabbi Nachman
          </p>
        </motion.div>
      </div>
    </section>
  );
}
