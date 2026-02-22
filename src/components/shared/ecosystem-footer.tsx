'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ecosystemSites = [
  {
    name: 'Nachman Science',
    url: 'https://nachman-science.vercel.app',
    description: 'Academic Research',
    icon: '🔬',
    accent: '#00D4FF',
  },
  {
    name: 'Nova Key Research',
    url: 'https://nova-key-research.vercel.app',
    description: 'Full Research Framework',
    icon: '🔑',
    accent: '#D4AF37',
  },
  {
    name: 'DreamNova Bible',
    url: 'https://dreamnova-bible-site.vercel.app',
    description: 'Operations Center',
    icon: '📖',
    accent: '#00FF88',
  },
  {
    name: 'DreamNova Nexus',
    url: 'https://dreamnova-nexus-ultimate.vercel.app/',
    description: 'Venture Studio',
    icon: '🚀',
    accent: '#FF3366',
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function EcosystemFooter() {
  return (
    <section className="bg-sacred-black border-t border-sacred-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-sacred/60 mb-2">
            Na Nach Nachma Nachman MeUman
          </p>
          <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wider">
            <span className="text-gold">Dream</span>
            <span className="text-cyan-sacred">Nova</span>
            <span className="text-[#8A8A9A] ml-2">Ecosystem</span>
          </h3>
          <div className="mt-3 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Ecosystem Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {ecosystemSites.map((site) => (
            <motion.a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-sacred-card border border-sacred-border hover:border-gold/50 transition-colors duration-300"
              style={{
                boxShadow: `0 0 0 0 ${site.accent}00`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${site.accent}20, 0 0 60px ${site.accent}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${site.accent}00`;
              }}
            >
              {/* Icon */}
              <span className="text-2xl" role="img" aria-hidden="true">
                {site.icon}
              </span>

              {/* Name */}
              <span className="font-display text-sm font-bold uppercase tracking-wider text-[#E8E6E3] group-hover:text-gold transition-colors duration-300 text-center">
                {site.name}
              </span>

              {/* Description */}
              <span className="font-body text-xs text-[#5A5A6A] group-hover:text-[#8A8A9A] transition-colors duration-300">
                {site.description}
              </span>

              {/* External link indicator */}
              <ExternalLink className="absolute top-3 right-3 w-3.5 h-3.5 text-[#5A5A6A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full group-hover:w-3/4 transition-all duration-500"
                style={{ backgroundColor: site.accent }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <p className="text-center text-[11px] text-[#5A5A6A] mt-8 font-mono tracking-wide">
          Ein Ye&apos;ush Ba&apos;olam Klal &mdash; There is no despair in the world at all
        </p>
      </div>
    </section>
  );
}
