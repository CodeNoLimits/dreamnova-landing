'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Scroll, Star, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SacredParticles } from '@/components/shared/sacred-particles';
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
  { desc: 'The original Genesis prompt and sacred source texts', icon: Scroll },
  { desc: 'The Diagnosis \u2014 Dopaminergic depletion and the Prosthetic Era', icon: Star },
  { desc: 'The Master Equation \u2014 R_nc and the 10-Channel Matrix', icon: Sparkles },
  { desc: 'Likutey Moharan Integration and the Neuro-Rebbe AI', icon: BookOpen },
];

export default function CodexPage() {
  const [selectedDoc, setSelectedDoc] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
          <SacredParticles />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gold/10 border-2 border-gold/40 flex items-center justify-center"
            >
              <BookOpen className="w-12 h-12 text-gold" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="sacred-gradient">CODEX Dream Nova</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gold/80 mb-4"
            >
              The Sacred Operating Manual
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#8A8A9A] max-w-2xl mx-auto"
            >
              A comprehensive framework mapping 10 Psalms of the Tikkun HaKlali onto neuroscience,
              quantum physics, and consciousness studies. The intellectual foundation of the DreamNova mission.
            </motion.p>
          </div>
        </section>

        {/* Codex Parts */}
        <section className="max-w-4xl mx-auto px-4 pb-20">
          <div className="space-y-6">
            {codexDocs.map((doc, idx) => {
              const info = PART_INFO[idx] || PART_INFO[0];
              const Icon = info.icon;
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  onClick={() => setSelectedDoc(selectedDoc === idx ? null : idx)}
                  className="group bg-sacred-surface border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors truncate">
                          {doc.title}
                        </h3>
                        <ChevronRight
                          className={`w-5 h-5 text-gold transition-transform flex-shrink-0 ${
                            selectedDoc === idx ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{info.desc}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                        <span>{doc.wordCount.toLocaleString()} words</span>
                        <span>
                          {doc.language === 'he'
                            ? '\u{1F1EE}\u{1F1F1} Hebrew'
                            : doc.language === 'fr'
                              ? '\u{1F1EB}\u{1F1F7} French'
                              : '\u{1F1EC}\u{1F1E7} English'}
                        </span>
                        {doc.chapterCount > 0 && <span>{doc.chapterCount} chapters</span>}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {selectedDoc === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 pt-6 border-t border-gold/10"
                    >
                      <p className="text-gray-300 leading-relaxed">{doc.summary}</p>
                      {doc.chapters.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gold mb-2">Chapters:</h4>
                          <ul className="space-y-1">
                            {doc.chapters.map((ch: string, i: number) => (
                              <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-gold/10 text-gold text-xs flex items-center justify-center flex-shrink-0">
                                  {i + 1}
                                </span>
                                {ch}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Master Equation Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-gradient-to-br from-gold/5 to-cyan-400/5 border border-gold/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-gold mb-4">The Master Equation</h3>
            <div className="font-mono text-2xl md:text-3xl text-white mb-4">
              R<sub>nc</sub> = &Delta;C &middot; [(A &middot; P) / N<sub>dmn</sub> + G]
            </div>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Where A = Acoustic function (10 Psalms), P = Pulse (HRV Coherence), N<sub>dmn</sub> =
              Default Mode Network noise, G = Grounding (Mikve), &Delta;C = Consciousness/Intention
              (Kavanah)
            </p>
          </motion.div>

          {/* Research Domains */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Neuroscience',
                desc: 'Vagal stimulation, DMN modulation, HRV coherence, stochastic resonance',
                color: '#00D4FF',
              },
              {
                title: 'Quantum Physics',
                desc: 'Observer effect, decoherence, information theory, Constructor Theory',
                color: '#00FF88',
              },
              {
                title: 'Kabbalah',
                desc: 'Tzimtzum, Sefirot architecture, Azamra algorithm, Tikkun HaKlali protocol',
                color: '#D4AF37',
              },
            ].map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                className="bg-sacred-surface border border-gold/10 rounded-xl p-6 text-center"
              >
                <div
                  className="text-lg font-bold mb-2"
                  style={{ color: domain.color }}
                >
                  {domain.title}
                </div>
                <p className="text-sm text-gray-400">{domain.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
