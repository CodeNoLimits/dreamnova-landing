'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { ArrowRight, Target, Heart, Zap, Users, BookOpen, Star } from 'lucide-react';
import Image from 'next/image';

const timeline = [
  {
    year: '1772',
    title: 'Rabbi Nachman is born',
    description: 'In Medzhybizh, Ukraine. He would become one of the most radical mystics in Jewish history, teaching that joy itself is the pathway to divine connection.',
    color: 'text-gold',
  },
  {
    year: '1922',
    title: 'The Petek is discovered',
    description: 'Rabbi Yisroel Ber Odesser, the "Saba," discovers a miraculous letter — the Petek — containing the phrase Na Nach Nachma Nachman MeUman. A signature from a master who died 112 years earlier.',
    color: 'text-cyan-400',
  },
  {
    year: '2026',
    title: 'The Source Code of Reality',
    description: 'David DreamNova proves the mathematical convergence between Gödel\'s incompleteness, quantum measurement, and the recursive Na Nach structure. The Nova Key is born — ancient wisdom meets modern technology.',
    color: 'text-[#00FF88]',
  },
];

const values = [
  {
    icon: Target,
    title: 'Hafatsa 2.0',
    description: 'Instead of distributing books in the street, we distribute a premium artifact that TRANSMITS Torah through technology.',
  },
  {
    icon: Heart,
    title: '$63 Sacred Pricing',
    description: '63 = gematria of SaG (סג), a Kabbalistic divine name. This is not an arbitrary price — it\'s a code. Every purchase is an act of Tikkun.',
  },
  {
    icon: Zap,
    title: 'Zero CAC Model',
    description: 'Each Nova Key owner becomes a distributor. One scan creates awareness, one share creates a sale. The product markets itself like a Torah virus.',
  },
  {
    icon: Users,
    title: 'Ambassador Network',
    description: '20% commission for every referral. Hafatsa Points gamification. Community-driven distribution across continents.',
  },
  {
    icon: BookOpen,
    title: 'Academic Legitimacy',
    description: '35+ peer-reviewed sources, 5 convergent formal domains, collaboration with researchers from McGill, Bar-Ilan, and Hebrew University.',
  },
  {
    icon: Star,
    title: '1M Keys Mission',
    description: '1 million Nova Keys distributed = 63M$ in revenue = the completion of the Hafatsa mission initiated by the Saba.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a0f] to-[#050508]">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-24">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs tracking-[0.3em] text-gold mb-6 uppercase"
            >
              The Mission
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              63 Million Dollars
              <br />
              <span className="sacred-gradient">of Hafatsa</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#8A8A9A] max-w-2xl mx-auto mb-10"
            >
              Dream Nova is not a company. It&apos;s a mission. To distribute the teachings of
              Rabbi Nachman of Breslov to 1 million souls through technology, beauty, and
              sacred mathematics.
            </motion.p>
          </div>
        </section>

        {/* Mission Progress */}
        <section className="py-8 border-y border-[#1A1A2E]">
          <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { number: '1M', label: 'Nova Keys Target' },
              { number: '$63M', label: 'Revenue Mission' },
              { number: '10', label: 'Sefirot Channels' },
              { number: '∞', label: 'Souls Touched' },
            ].map((item, i) => (
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

        {/* Timeline */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                A <span className="sacred-gradient">250-Year</span> Journey
              </h2>
              <p className="text-[#8A8A9A] text-center max-w-2xl mx-auto mb-16">
                From Medzhybizh to Jerusalem, from parchment to NFC — the thread has never broken.
              </p>
            </ScrollReveal>
            <div className="space-y-0">
              {timeline.map((event, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className="relative pl-12 pb-12 border-l border-[#1A1A2E] last:pb-0">
                    <div className={`absolute left-0 top-0 w-6 h-6 rounded-full border-2 ${
                      i === 0 ? 'border-gold bg-gold/20' :
                      i === 1 ? 'border-cyan-400 bg-cyan-400/20' :
                      'border-[#00FF88] bg-[#00FF88]/20'
                    } -translate-x-[calc(50%+0.5px)]`} />
                    <div className={`font-mono text-sm ${event.color} mb-1`}>
                      {event.year}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-[#8A8A9A] leading-relaxed">{event.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 px-4 bg-[#0A0A12]">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
                The <span className="sacred-gradient">Strategy</span>
              </h2>
              <p className="text-[#8A8A9A] text-center max-w-2xl mx-auto mb-16">
                Six pillars powering the largest Hafatsa operation in Breslov history.
              </p>
            </ScrollReveal>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="sacred-card hover:border-gold/50 transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-display text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-[#8A8A9A] text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Nova Key Image + CTA */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="relative mx-auto mb-12 max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-cyan-400/20 to-gold/30 rounded-2xl blur-3xl scale-110 opacity-40" />
                <Image
                  src="/images/nova-key.jpg"
                  alt="Nova Key NFC Card"
                  width={500}
                  height={313}
                  className="relative rounded-2xl shadow-2xl shadow-gold/20"
                />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Join the <span className="sacred-gradient">Mission</span>
              </h2>
              <p className="text-[#8A8A9A] max-w-xl mx-auto mb-8">
                Every Nova Key sold is a step toward the Tikkun. Every scan is a soul touched.
                Every share is an act of Hafatsa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/checkout" className="btn-sacred-filled">
                  <ArrowRight className="w-4 h-4" />
                  Get Your Nova Key — $63
                </a>
                <a href="/source-code" className="btn-sacred">
                  <BookOpen className="w-4 h-4" />
                  Read the Research
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Na Nach Mantra */}
        <section className="py-16 text-center border-t border-[#1A1A2E]">
          <ScrollReveal>
            <p className="font-serif text-3xl md:text-4xl text-gold mb-2" dir="rtl">
              נ נח נחמ נחמן מאומן
            </p>
            <p className="font-mono text-xs tracking-[0.3em] text-[#5A5A6A] uppercase">
              Na Nach Nachma Nachman MeUman
            </p>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
