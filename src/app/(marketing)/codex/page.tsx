'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, ChevronRight, ChevronDown, Scroll, Star, Sparkles, Eye, Layers, Brain, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SacredParticles } from '@/components/shared/sacred-particles';
import { HolographicShimmer, ScanLine, HoloParticles } from '@/components/shared/holographic-effects';
import { useTranslation } from '@/lib/LanguageContext';
import documentsData from '@/data/documents.json';

const codexDocs = documentsData.documents
  .filter((d) => d.category === 'codex' && d.isBestVersion)
  .sort((a, b) => {
    const partA = parseInt(a.title.match(/PART\s*(\d)/i)?.[1] || '0');
    const partB = parseInt(b.title.match(/PART\s*(\d)/i)?.[1] || '0');
    if (partA === 0 && a.title.includes('MASTER')) return -1;
    if (partB === 0 && b.title.includes('MASTER')) return 1;
    return partA - partB;
  });

const PART_INFO = [
  { desc: 'The original Genesis prompt and sacred source texts', icon: Scroll, color: '#D4AF37', hebrew: 'בְּרֵאשִׁית' },
  { desc: 'The Diagnosis — Dopaminergic depletion and the Prosthetic Era', icon: Brain, color: '#00D4FF', hebrew: 'דיאגנוזה' },
  { desc: 'The Master Equation — R_nc and the 10-Channel Neo-Cortical Matrix', icon: Sparkles, color: '#00FF88', hebrew: 'מַתֶּמָטִיקָה' },
  { desc: 'Likutey Moharan Integration and the Neuro-Rebbe AI Architecture', icon: Layers, color: '#FF6B9D', hebrew: 'לִקּוּטֵי מוֹהֲרַ"ן' },
];

const RESEARCH_DOMAINS = [
  {
    title: 'Neuroscience',
    desc: 'Vagal stimulation, DMN modulation, HRV coherence, stochastic resonance',
    color: '#00D4FF',
    icon: Brain,
  },
  {
    title: 'Quantum Physics',
    desc: 'Observer effect, decoherence, information theory, Constructor Theory',
    color: '#00FF88',
    icon: Eye,
  },
  {
    title: 'Kabbalah',
    desc: 'Tzimtzum, Sefirot architecture, Azamra algorithm, Tikkun HaKlali protocol',
    color: '#D4AF37',
    icon: Star,
  },
];

export default function CodexPage() {
  const { t } = useTranslation();
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);
  const [readProgress, setReadProgress] = useState<Record<number, boolean>>({});

  /* Load reading progress from localStorage */
  useEffect(() => {
    try {
      const saved = localStorage.getItem('codex-progress');
      if (saved) setReadProgress(JSON.parse(saved));
    } catch {/* ignore */}
  }, []);

  const markRead = (idx: number) => {
    const updated = { ...readProgress, [idx]: true };
    setReadProgress(updated);
    try { localStorage.setItem('codex-progress', JSON.stringify(updated)); } catch {/* */}
  };

  const totalParts = codexDocs.length;
  const readParts = Object.values(readProgress).filter(Boolean).length;
  const progress = totalParts ? Math.round((readParts / totalParts) * 100) : 0;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
          <SacredParticles />
          <ScanLine />
          {/* Sacred fire gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0604] via-[#080305]/50 to-transparent pointer-events-none" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Sacred book icon with glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-28 h-28 mx-auto mb-8 rounded-full bg-gold/5 border border-gold/30 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ boxShadow: '0 0 40px rgba(212,175,55,0.15)' }} />
              <BookOpen className="w-14 h-14 text-gold" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="sacred-gradient">{t('codex.hero.title')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gold/70 mb-3"
            >
              {t('codex.hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#8A8A9A] max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {t('codex.hero.desc')}
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="max-w-xs mx-auto"
            >
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>{t('codex.progress')}</span>
                <span className="text-gold">{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-sacred-surface rounded-full overflow-hidden border border-gold/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #D4AF37, #00D4FF)' }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' as const, delay: 0.8 }}
                />
              </div>
              <p className="text-[10px] text-gray-600 mt-1.5">
                {readParts}/{totalParts} {t('codex.parts.completed')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content — sidebar + chapters */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-[240px_1fr] gap-8">
            {/* Sidebar Navigation (desktop) */}
            <aside className="hidden lg:block">
              <div className="sticky top-8 space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 pl-3">{t('codex.chapters')}</p>
                {codexDocs.map((doc, idx) => {
                  const info = PART_INFO[idx] || PART_INFO[0];
                  const isSelected = selectedDoc === idx;
                  const isRead = readProgress[idx];
                  return (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setSelectedDoc(isSelected ? null : idx);
                        markRead(idx);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-300 flex items-center gap-2 ${
                        isSelected
                          ? 'bg-gold/10 text-gold border border-gold/20'
                          : 'text-gray-400 hover:text-gray-200 hover:bg-sacred-surface'
                      }`}
                    >
                      {/* Read indicator dot */}
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: isRead ? info.color : 'transparent',
                          border: isRead ? 'none' : `1px solid ${info.color}40`,
                        }}
                      />
                      <span className="truncate">
                        {doc.title.includes('MASTER') ? t('codex.master.index') : `${t('codex.part')} ${idx}`}
                      </span>
                    </button>
                  );
                })}

                {/* Sidebar progress */}
                <div className="mt-6 pt-4 border-t border-gold/10">
                  <div className="flex gap-1">
                    {codexDocs.map((_, idx) => (
                      <div
                        key={idx}
                        className="flex-1 h-1 rounded-full"
                        style={{
                          backgroundColor: readProgress[idx]
                            ? PART_INFO[idx]?.color || '#D4AF37'
                            : '#1A1A2E',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main chapters list */}
            <div className="space-y-5">
              {codexDocs.map((doc, idx) => {
                const info = PART_INFO[idx] || PART_INFO[0];
                const Icon = info.icon;
                const isOpen = selectedDoc === idx;

                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.12 }}
                    className="group relative"
                  >
                    {/* Holographic border on hover */}
                    <div
                      className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `linear-gradient(135deg, ${info.color}30, transparent 50%, ${info.color}15)`,
                        filter: 'blur(0.5px)',
                      }}
                    />

                    <div
                      className={`relative bg-sacred-surface border rounded-xl overflow-hidden transition-all duration-500 cursor-pointer ${
                        isOpen ? 'border-gold/30' : 'border-gold/10 group-hover:border-transparent'
                      }`}
                      onClick={() => {
                        setSelectedDoc(isOpen ? null : idx);
                        markRead(idx);
                      }}
                    >
                      {isOpen && <HolographicShimmer />}

                      {/* Header */}
                      <div className="p-6 flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${info.color}10`,
                            border: `1px solid ${info.color}25`,
                          }}
                        >
                          <Icon className="w-6 h-6" style={{ color: info.color }} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors truncate">
                                {doc.title}
                              </h3>
                              <span className="text-xs text-gray-600 font-serif" dir="rtl">
                                {info.hebrew}
                              </span>
                            </div>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-gold flex-shrink-0" />
                            </motion.div>
                          </div>
                          <p className="text-sm text-gray-400 mt-1.5">{info.desc}</p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                            <span>{doc.wordCount.toLocaleString()} {t('research.stat.words')}</span>
                            <span>
                              {doc.language === 'he' ? '🇮🇱 ' + t('codex.lang.hebrew')
                                : doc.language === 'fr' ? '🇫🇷 ' + t('codex.lang.french') : '🇬🇧 ' + t('codex.lang.english')}
                            </span>
                            {doc.chapterCount > 0 && <span>{doc.chapterCount} {t('codex.chapters')}</span>}
                            {readProgress[idx] && (
                              <span className="text-healing flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-healing" />
                                {t('codex.read')}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Content — reading mode typography */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' as const }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-gold/8">
                              {/* Summary in reading-mode typography */}
                              <div className="bg-[#080810] rounded-lg p-5 border border-gold/5">
                                <p
                                  className="font-serif text-base text-gray-300 leading-[1.9] tracking-wide"
                                  dir={doc.language === 'he' ? 'rtl' : 'ltr'}
                                >
                                  {doc.summary}
                                </p>
                              </div>

                              {/* Chapters list */}
                              {doc.chapters.length > 0 && (
                                <div className="mt-5">
                                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gold/60 mb-3">
                                    {t('codex.chapter.index')}
                                  </h4>
                                  <div className="grid gap-1.5">
                                    {doc.chapters.map((ch: string, i: number) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gold/5 transition-colors text-sm text-gray-400 hover:text-gray-200"
                                      >
                                        <span
                                          className="w-6 h-6 rounded-full text-[10px] font-mono flex items-center justify-center flex-shrink-0"
                                          style={{
                                            backgroundColor: `${info.color}10`,
                                            color: info.color,
                                            border: `1px solid ${info.color}20`,
                                          }}
                                        >
                                          {i + 1}
                                        </span>
                                        <span className="truncate">{ch}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Read Full Document link */}
                              <Link
                                href={`/research/${doc.slug}`}
                                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.02]"
                                style={{
                                  backgroundColor: `${info.color}15`,
                                  color: info.color,
                                  border: `1px solid ${info.color}30`,
                                }}
                              >
                                <BookOpen className="w-4 h-4" />
                                {t('codex.readFull') || 'Read Full Document'}
                                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Master Equation — special typography treatment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 relative overflow-hidden"
          >
            <div
              className="absolute -inset-[1px] rounded-2xl"
              style={{
                background: 'conic-gradient(from 45deg, rgba(212,175,55,0.2), rgba(0,212,255,0.1), rgba(0,255,136,0.1), rgba(212,175,55,0.2))',
                filter: 'blur(1px)',
              }}
            />
            <div className="relative bg-gradient-to-br from-[#0A0808] via-sacred-surface to-[#08080D] rounded-2xl p-10 text-center border border-transparent">
              <HolographicShimmer />
              <HoloParticles count={8} />

              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-400/50 mb-4">
                {t('codex.equation.label')}
              </p>

              <h3 className="font-display text-2xl text-gold mb-6">
                {t('codex.equation.title')}
              </h3>

              {/* The equation itself — monumental typography */}
              <div className="py-6 px-4">
                <div className="font-mono text-3xl md:text-4xl lg:text-5xl text-white tracking-wide">
                  R<sub className="text-gold text-lg md:text-xl">nc</sub>{' '}
                  <span className="text-gold/60">=</span>{' '}
                  ΔC <span className="text-cyan-400/60">·</span>{' '}
                  <span className="text-gold/40">[</span>
                  <span className="text-cyan-400">(</span>A <span className="text-gray-500">·</span> P<span className="text-cyan-400">)</span>{' '}
                  <span className="text-gold/60">/</span>{' '}
                  N<sub className="text-healing text-lg md:text-xl">dmn</sub>{' '}
                  <span className="text-gold/60">+</span>{' '}
                  G
                  <span className="text-gold/40">]</span>
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 max-w-3xl mx-auto">
                {[
                  { symbol: 'A', name: 'Acoustic', desc: '10 Psalms', color: '#00D4FF' },
                  { symbol: 'P', name: 'Pulse', desc: 'HRV Coherence', color: '#00D4FF' },
                  { symbol: 'N', name: 'Network', desc: 'DMN Noise', color: '#00FF88' },
                  { symbol: 'G', name: 'Ground', desc: 'Mikve', color: '#D4AF37' },
                  { symbol: 'ΔC', name: 'Intent', desc: 'Kavanah', color: '#D4AF37' },
                ].map((v) => (
                  <div key={v.symbol} className="text-center">
                    <div className="text-lg font-mono font-bold" style={{ color: v.color }}>
                      {v.symbol}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">{v.name}</div>
                    <div className="text-[9px] text-gray-600">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Research Domains — with hover effects */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {RESEARCH_DOMAINS.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative"
                >
                  <div
                    className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(135deg, ${domain.color}25, transparent)`,
                    }}
                  />
                  <div className="relative bg-sacred-surface border border-gold/10 rounded-xl p-6 text-center group-hover:border-transparent transition-all duration-500">
                    <div
                      className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${domain.color}10`, border: `1px solid ${domain.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: domain.color }} />
                    </div>
                    <div
                      className="text-lg font-bold mb-2 group-hover:scale-105 transition-transform"
                      style={{ color: domain.color }}
                    >
                      {domain.title}
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{domain.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
