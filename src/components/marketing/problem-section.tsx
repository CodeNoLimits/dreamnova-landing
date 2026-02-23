"use client";

import { motion } from "framer-motion";
import { AlertTriangle, BrainCog, Activity, Users } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

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
};

export function ProblemSection() {
  const problems = [
    { title: "Digital Anxiety", icon: Activity, description: "Surcharge cognitive permanente. Taux de cortisol explosé par des notifications vides de sens." },
    { title: "Decision Paralysis", icon: BrainCog, description: "L'illusion du choix infini qui mène à l'inaction. 80% des utilisateurs scrollent sans but." },
    { title: "GenZ Burnout", icon: AlertTriangle, description: "La première génération où l'espérance de santé mentale recule. Une épidémie silencieuse de vide." },
    { title: "One-Man-Show Dilution", icon: Users, description: "L'intelligence collective remplacée par des bulles isolées, détruisant tout récit commun porteur d'espoir." },
  ];

  return (
    <section id="entropy" className="relative py-20 md:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-15 pointer-events-none"
      >
        <source src="/videos/Cinematic_3d_floating_1080p_202602231243 (2).mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#D4AF37] mb-4 tracking-wide uppercase">
            The Problem
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-body">
            Nous sommes en train de perdre le contrôle du code source de notre réalité.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  variants={cardVariants}
                  className="group bg-[#050508] p-6 md:p-8 border border-[#1A1A2E] hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] cursor-pointer rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#FF3366] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display font-bold text-lg md:text-xl text-white mb-3 tracking-wide uppercase">
                        {problem.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-body">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-8 md:p-12 border-l-4 border-[#D4AF37] bg-[#050508]/80 backdrop-blur-sm rounded-r-xl"
        >
          <p className="font-display text-2xl md:text-3xl text-[#D4AF37] italic mb-4">
            "Le temps est venu de reprendre le contrôle."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
