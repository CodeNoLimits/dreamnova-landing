'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, BookOpen, Atom, Binary, Star, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { SacredParticles } from '@/components/shared/sacred-particles';
import Image from 'next/image';

const evidence = [
  { number: '35+', label: 'Sources' },
  { number: '5', label: 'Domains' },
  { number: '148', label: 'Gematria' },
  { number: '25%', label: 'Threshold' },
];

const domains = [
  {
    icon: Binary,
    title: "Gödel's Incompleteness",
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/30 hover:border-cyan-400',
    description:
      'Formal proof that the recursive structure of Na Nach Nachma Nachman MeUman exhibits properties isomorphic to Gödel\'s self-referential propositions.',
  },
  {
    icon: Atom,
    title: 'Quantum Measurement',
    color: 'text-[#00FF88]',
    borderColor: 'border-[#00FF88]/30 hover:border-[#00FF88]',
    description:
      'The four-letter expansion mirrors quantum decoherence patterns — from superposition (Na) to definite state (MeUman) through recursive observation.',
  },
  {
    icon: Star,
    title: 'Kabbalistic Mathematics',
    color: 'text-gold',
    borderColor: 'border-gold/30 hover:border-gold',
    description:
      'The Sefirot system maps to a mathematical lattice structure that encodes the same recursive self-reference found in formal logic.',
  },
];

export default function SourceCodePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <SacredParticles />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-6 uppercase"
            >
              Academic Research Paper
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              The Source Code
              <br />
              <span className="sacred-gradient">of Reality</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#8A8A9A] max-w-2xl mx-auto mb-10"
            >
              A formal investigation into the mathematical structures connecting
              Gödel&apos;s incompleteness theorems, quantum measurement theory, and
              Kabbalistic recursive frameworks.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/papers/source-code-reality.pdf"
                className="btn-sacred-filled"
                download
              >
                <Download className="w-4 h-4" />
                Download Paper
              </a>
              <a href="#domains" className="btn-sacred">
                <BookOpen className="w-4 h-4" />
                Explore Research
              </a>
            </motion.div>
          </div>
        </section>

        {/* Evidence Strip */}
        <section className="py-8 border-y border-[#1A1A2E]">
          <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
            {evidence.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold sacred-gradient">
                    {item.number}
                  </div>
                  <div className="font-mono text-xs tracking-wider text-[#8A8A9A] uppercase mt-1">
                    {item.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Three Domains */}
        <section id="domains" className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                Three Domains, <span className="sacred-gradient">One Structure</span>
              </h2>
              <p className="text-[#8A8A9A] text-center max-w-2xl mx-auto mb-16">
                Independent mathematical frameworks converging on the same recursive pattern.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {domains.map((domain, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div
                    className={`sacred-card ${domain.borderColor} transition-all duration-500`}
                  >
                    <domain.icon className={`w-10 h-10 ${domain.color} mb-4`} />
                    <h3 className="font-display text-xl font-bold mb-3">{domain.title}</h3>
                    <p className="text-[#8A8A9A] text-sm leading-relaxed">
                      {domain.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Nova Key Product */}
        <section className="py-24 px-4 bg-[#0A0A12]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#1A1A2E]">
                <Image
                  src="/images/nova-key.jpg"
                  alt="Nova Key NFC Card"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="font-mono text-xs tracking-[0.3em] text-gold mb-4 uppercase">
                  The Physical Key
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Nova Key <span className="sacred-gradient">NFC</span>
                </h2>
                <p className="text-[#8A8A9A] mb-6 leading-relaxed">
                  A stainless steel NFC card with sacred gold engraving. One tap unlocks
                  the complete Source Code of Reality, Tikkun HaKlali, and the Azamra
                  meditation system. No app download required.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'NFC NTAG 215 — Universal compatibility',
                    'Stainless steel with gold laser engraving',
                    'Authentic Breslov Caméa included',
                    'Lifetime digital access',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <ArrowRight className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/checkout" className="btn-sacred-filled">
                  Get Your Nova Key — $63
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
                Download the <span className="sacred-gradient">Research</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              <ScrollReveal delay={0.1}>
                <a
                  href="/papers/source-code-reality.pdf"
                  download
                  className="sacred-card block text-left hover:border-gold group"
                >
                  <Download className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-bold mb-2">
                    The Source Code of Reality
                  </h3>
                  <p className="text-[#8A8A9A] text-sm">
                    Complete academic paper with formal proofs and mathematical analysis.
                  </p>
                  <span className="font-mono text-xs text-gold mt-3 inline-flex items-center gap-2">
                    PDF <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <a
                  href="/papers/validation-report.pdf"
                  download
                  className="sacred-card block text-left hover:border-cyan-400 group"
                >
                  <Download className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-bold mb-2">
                    Validation Report
                  </h3>
                  <p className="text-[#8A8A9A] text-sm">
                    Independent research audit and academic validation of the core thesis.
                  </p>
                  <span className="font-mono text-xs text-cyan-400 mt-3 inline-flex items-center gap-2">
                    PDF <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
