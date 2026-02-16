'use client';

import { useTranslation } from '@/lib/LanguageContext';

import { motion } from 'framer-motion';
import { Download, ExternalLink, BookOpen, Atom, Binary, Star, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { SacredParticles } from '@/components/shared/sacred-particles';
import Image from 'next/image';

const evidence = [
  { number: '35+', labelKey: 'sc.stat.sources' },
  { number: '5', labelKey: 'sc.stat.domains' },
  { number: '148', labelKey: 'sc.stat.gematria' },
  { number: '25%', labelKey: 'sc.stat.threshold' },
];

const domains = [
  {
    icon: Binary,
    titleKey: 'sc.domain.godel.title',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/30 hover:border-cyan-400',
    descKey: 'sc.domain.godel.desc',
  },
  {
    icon: Atom,
    titleKey: 'sc.domain.quantum.title',
    color: 'text-[#00FF88]',
    borderColor: 'border-[#00FF88]/30 hover:border-[#00FF88]',
    descKey: 'sc.domain.quantum.desc',
  },
  {
    icon: Star,
    titleKey: 'sc.domain.kabbalah.title',
    color: 'text-gold',
    borderColor: 'border-gold/30 hover:border-gold',
    descKey: 'sc.domain.kabbalah.desc',
  },
];

export default function SourceCodePage() {
  const { t } = useTranslation();
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
              <span className="sacred-gradient">{t('sourcecode.hero.title2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#8A8A9A] max-w-2xl mx-auto mb-10"
            >{t('sc.hero.desc')}</motion.p>
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
                    {t(item.labelKey)}
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
                    <h3 className="font-display text-xl font-bold mb-3">{t(domain.titleKey)}</h3>
                    <p className="text-[#8A8A9A] text-sm leading-relaxed">
                      {t(domain.descKey)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Convergence Quote */}
        <section className="py-16 px-4 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="w-12 h-12 rounded-full border border-gold/15 flex items-center justify-center mx-auto mb-6">
                <span className="text-gold text-xl">↓</span>
              </div>
              <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl italic text-gold/90 leading-relaxed">
                {t('sc.quote1')}
              </blockquote>
            </div>
          </ScrollReveal>
        </section>

        {/* Na Nach Algorithm Visualization */}
        <section className="py-24 px-4 bg-[#0A0A10]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-4 uppercase text-center">
                The Recursive Structure
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
                Na Nach Nachma <span className="sacred-gradient">Nachman</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="space-y-2">
                  {[
                    { hebrew: 'נ', labelKey: 'sc.na.label', descKey: 'sc.na.desc' },
                    { hebrew: 'נח', labelKey: 'sc.nach.label', descKey: 'sc.nach.desc' },
                    { hebrew: 'נחמ', labelKey: 'sc.nachma.label', descKey: 'sc.nachma.desc' },
                    { hebrew: 'נחמן', labelKey: 'sc.nachman.label', descKey: 'sc.nachman.desc' },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-6 p-4 bg-cyan-400/[0.02] border-l-2 border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/[0.05] transition-all duration-300"
                    >
                      <div className="font-serif text-2xl md:text-3xl text-gold min-w-[100px] text-right" dir="rtl">
                        {step.hebrew}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-cyan-400">
                          {t(step.labelKey)}
                        </span>
                        <span className="text-sm text-[#8A8A9A]">{t(step.descKey)}</span>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-gold/[0.05] border border-gold/15 text-center font-mono text-sm text-gold tracking-wider">
                    1 + 2 + 3 + 4 = 10 LETTERS → 10 SEFIROT → T₄ TETRACTYS
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">{t('sc.negentropy.title')}</h3>
                  <p className="text-[#8A8A9A] mb-4 leading-relaxed">
                    The sequence operates on a <span className="text-gold">hierarchical additive structure</span> — the same Achoraim (progressive expansion) pattern used for the Tetragrammaton in its most expanded form.
                  </p>
                  <p className="text-[#8A8A9A] mb-4 leading-relaxed">
                    10 letters map to 10 Sefirot, 10 channels of consciousness, 10 Psalms of the Tikkun HaKlali. Four stages parallel four spiritual worlds: Atzilut, Beriah, Yetzirah, Assiyah.
                  </p>
                  <p className="text-[#8A8A9A] mb-4 leading-relaxed">
                    Gematria of <span className="text-gold">Nachman = 148</span>. Gematria of the full sequence = <span className="text-gold">491</span>, matching the middle letters of Proverbs 18:4. No internal contradictions.
                  </p>
                  <p className="text-[#8A8A9A] leading-relaxed">
                    The information-theoretic framing of this recursive structure as a negentropy engine — systematically reversing informational entropy through progressive self-reference — has <span className="text-gold">no direct precedent in the published literature</span>.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Thesis Quote */}
        <section className="py-24 px-4 text-center">
          <ScrollReveal>
            <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl italic font-light leading-relaxed max-w-3xl mx-auto mb-6">
              {t('sc.quote2')}
            </blockquote>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60">
              The Source Code of Reality — DreamNova Research, Jerusalem 2026
            </p>
          </ScrollReveal>
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
                <p className="text-[#8A8A9A] mb-6 leading-relaxed">{t('sc.physical.desc')}</p>
                <ul className="space-y-3 mb-8">
                  {[
                    t('sc.spec.3'),
                    'Stainless steel 0.8mm, black anodized finish',
                    'Gold laser engraving — Na Nach Nachma Nachman',
                    'Authentic Breslov Caméa included',
                    'Lifetime digital access to all content',
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
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal delay={0.1}>
                <a
                  href="/papers/source-code-reality.pdf"
                  download
                  className="sacred-card block text-left hover:border-gold group h-full"
                >
                  <Download className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-bold mb-2">
                    The Source Code of Reality
                  </h3>
                  <p className="text-[#8A8A9A] text-sm">
                    Complete academic paper — meta-logical proof of Emunah, entropy reversal, and the recursive Na Nach algorithm.
                  </p>
                  <span className="font-mono text-xs text-gold mt-3 inline-flex items-center gap-2">
                    PDF · 16 Pages <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <a
                  href="/papers/validation-report.pdf"
                  download
                  className="sacred-card block text-left hover:border-cyan-400 group h-full"
                >
                  <Download className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-bold mb-2">
                    Validation Report
                  </h3>
                  <p className="text-[#8A8A9A] text-sm">
                    Independent section-by-section research audit with corrections, sources, and priority assessment.
                  </p>
                  <span className="font-mono text-xs text-cyan-400 mt-3 inline-flex items-center gap-2">
                    PDF · 10 Pages <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <a
                  href="/papers/faith-higher-logic.pdf"
                  download
                  className="sacred-card block text-left hover:border-[#00FF88] group h-full"
                >
                  <Download className="w-8 h-8 text-[#00FF88] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-lg font-bold mb-2">
                    Faith as Higher Logic
                  </h3>
                  <p className="text-[#8A8A9A] text-sm">
                    Formal proof that faith constitutes a higher-order logical framework beyond Gödel&apos;s limits.
                  </p>
                  <span className="font-mono text-xs text-[#00FF88] mt-3 inline-flex items-center gap-2">
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
