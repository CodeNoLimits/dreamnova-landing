"use client";

import { motion } from "framer-motion";
import { Sparkles, Key, Globe, Lock } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import Image from "next/image";

const codeLines = [
  "function applyDCS(userState) {",
  "  const alignment = optimizeAzamra(userState);",
  "  const world = NaNachEngine.generate(alignment);",
  "  return NovaKey.unlock(world);",
  "}",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export function SolutionSection() {
  const features = [
    { title: "DCS (Breveté)", icon: Sparkles, description: "Dream Consistency Score : L'algorithme exclusif évaluant l'alignement de vos rêves pour générer la réalité idoine." },
    { title: "Algorithme Azamra", icon: Lock, description: "Intelligence artificielle spécialisée dans le filtrage positif de l'information via Nachman Science." },
    { title: "Mondes Persistants", icon: Globe, description: "Votre espace virtuel 'Na Nach' sur mesure : des environnements générés où votre mindset dicte la réalité." },
    { title: "Nova Key NFC", icon: Key, description: "La clé physique d'accès direct au système. Zero friction. Juste un tap pour se connecter à l'Essence." },
  ];

  return (
    <section id="solution" className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-20 pointer-events-none"
      >
        <source src="/videos/Cinematic_3d_floating_1080p_202602231243 (3).mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/img/grok/mutation_concept.png')" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#00D4FF] mb-4 tracking-wide uppercase">
            The Solution
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-body">
            Reconstruire la matrice par la joie pure et des mathématiques sacrées.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  variants={cardVariants}
                  className="group bg-[#050508] p-6 md:p-8 border border-[#1A1A2E] hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 cursor-pointer rounded-xl h-full"
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#00D4FF] mb-4" />
                  <h3 className="font-display font-bold text-lg md:text-xl text-[#00D4FF] mb-3 tracking-wide uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-body leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#050508] border border-[#1A1A2E] p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed overflow-x-auto rounded-xl">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                viewport={{ once: true }}
                className="text-[#00FF88]"
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + codeLines.length * 0.05 }}
              viewport={{ once: true }}
              className="text-[#00FF88] mt-4"
            >
              {`// Output: Reality successfully updated. DCS Active.`}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
