'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, FileText, BookOpen, ChevronRight, Sparkles, Globe } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SacredParticles } from '@/components/shared/sacred-particles';
import { HolographicShimmer, ScanLine, HoloParticles } from '@/components/shared/holographic-effects';
import { useTranslation } from '@/lib/LanguageContext';
import documentsData from '@/data/documents.json';

const { documents, stats, categories } = documentsData;
const uniqueDocs = documents.filter((d) => d.isBestVersion);

const LANGUAGE_FLAGS: Record<string, string> = {
  en: '\u{1F1EC}\u{1F1E7}',
  fr: '\u{1F1EB}\u{1F1F7}',
  he: '\u{1F1EE}\u{1F1F1}',
};

const CATEGORY_ALL = 'all';

/* Skeleton shimmer for loading state */
function DocumentSkeleton() {
  return (
    <div className="bg-sacred-surface border border-gold/5 rounded-xl p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 w-24 bg-gold/10 rounded-full" />
        <div className="h-5 w-5 bg-gold/10 rounded-full" />
      </div>
      <div className="h-5 w-3/4 bg-gold/10 rounded mb-2" />
      <div className="h-4 w-full bg-gold/5 rounded mb-1" />
      <div className="h-4 w-2/3 bg-gold/5 rounded mb-4" />
      <div className="flex gap-4">
        <div className="h-3 w-16 bg-gold/5 rounded" />
        <div className="h-3 w-12 bg-gold/5 rounded" />
      </div>
    </div>
  );
}

export default function ResearchPage() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredDocs = useMemo(() => {
    return uniqueDocs.filter((doc) => {
      const matchesCategory = selectedCategory === CATEGORY_ALL || doc.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryKeys = Object.keys(categories);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero with fire overlay */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
          <SacredParticles />
          {/* Fire gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0408] via-[#0D0306]/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-sacred-black to-transparent pointer-events-none" />
          <ScanLine />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/5 border border-gold/20 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                {t('research.badge')}
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              {t('research.hero.title1')}
              <br />
              <span className="sacred-gradient">{t('research.hero.title2')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#8A8A9A] max-w-2xl mx-auto mb-10"
            >
              {stats.unique} {t('research.stat.documents')} · {stats.uniqueWords.toLocaleString()} {t('research.stat.words')} · {categoryKeys.length} {t('research.stat.domains')}
            </motion.p>

            {/* Stats — holographic style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10"
            >
              {[
                { value: stats.unique, label: t('research.stat.documents'), color: '#D4AF37' },
                { value: `${Math.round(stats.uniqueWords / 1000)}K`, label: t('research.stat.words'), color: '#00D4FF' },
                { value: categoryKeys.length, label: t('research.stat.domains'), color: '#00FF88' },
                { value: Object.keys(stats.byLanguage).length, label: t('research.stat.languages'), color: '#D4AF37' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="text-center relative"
                >
                  <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 30px ${s.color}20` }} />
                  <div className="text-3xl md:text-4xl font-bold" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          {/* Search bar with glow */}
          <div className="mb-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="relative max-w-lg mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold/40" />
              <input
                type="text"
                placeholder={t('research.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-sacred-surface border border-gold/15 rounded-xl text-white placeholder-gray-600 
                  focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 
                  transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.03)]
                  focus:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
              />
              {searchQuery && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500"
                >
                  {filteredDocs.length} {t('research.results')}
                </motion.span>
              )}
            </motion.div>

            {/* Category Filters — pill badges with category colors */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-2.5"
            >
              <button
                onClick={() => setSelectedCategory(CATEGORY_ALL)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === CATEGORY_ALL
                    ? 'bg-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                    : 'bg-sacred-surface border border-gold/15 text-gray-400 hover:border-gold/40 hover:text-gray-200'
                }`}
              >
                ✦ {t('research.filter.all')} ({stats.unique})
              </button>
              {categoryKeys.map((key) => {
                const cat = (categories as Record<string, { label: string; icon: string; color: string }>)[key];
                const count = (stats.byCategory as Record<string, number>)[key] || 0;
                const isActive = selectedCategory === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-black'
                        : 'bg-sacred-surface text-gray-400 hover:text-gray-200'
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: cat.color, boxShadow: `0 0 20px ${cat.color}30` }
                        : { border: `1px solid ${cat.color}25` }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.borderColor = `${cat.color}60`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.borderColor = `${cat.color}25`;
                      }
                    }}
                  >
                    {cat.icon} {cat.label} ({count})
                  </button>
                );
              })}
            </motion.div>
          </div>

          {/* Document Grid — with holographic card effects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredDocs.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.04, type: 'spring', stiffness: 300, damping: 25 }}
                  onMouseEnter={() => setHoveredCard(doc.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                >
                <Link href={`/research/${doc.slug}`} className="block h-full">
                  {/* Holographic border glow on hover */}
                  <div
                    className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `conic-gradient(from ${idx * 60}deg, ${doc.categoryColor}40, #00D4FF30, ${doc.categoryColor}40)`,
                      filter: 'blur(1px)',
                    }}
                  />

                  <div className="relative bg-sacred-surface border border-gold/8 rounded-xl p-6 
                    group-hover:border-transparent group-hover:bg-[#0C0C18]
                    transition-all duration-500 h-full flex flex-col overflow-hidden"
                  >
                    {/* Holographic shimmer on hover */}
                    {hoveredCard === doc.id && <HolographicShimmer />}
                    {hoveredCard === doc.id && <HoloParticles count={4} />}

                    {/* Category Badge + Language Flag */}
                    <div className="flex items-center justify-between mb-4">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="text-xs font-mono px-3 py-1.5 rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor: `${doc.categoryColor}12`,
                          color: doc.categoryColor,
                          border: `1px solid ${doc.categoryColor}25`,
                          boxShadow: hoveredCard === doc.id ? `0 0 12px ${doc.categoryColor}15` : 'none',
                        }}
                      >
                        {doc.categoryIcon} {doc.categoryLabel}
                      </motion.span>
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="text-lg cursor-default select-none"
                        title={doc.language === 'he' ? 'Hebrew' : doc.language === 'fr' ? 'French' : 'English'}
                      >
                        {LANGUAGE_FLAGS[doc.language] || '\u{1F310}'}
                      </motion.span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 
                      group-hover:text-gold transition-colors duration-300"
                    >
                      {doc.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-gray-400/80 mb-4 line-clamp-3 leading-relaxed flex-1">
                      {doc.summary}
                    </p>

                    {/* Meta Row */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gold/5">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 group-hover:text-gray-300 transition-colors">
                          <FileText className="w-3 h-3" />
                          {doc.wordCount.toLocaleString()} {t('research.stat.words')}
                        </span>
                        {doc.chapterCount > 0 && (
                          <span className="flex items-center gap-1.5 group-hover:text-gray-300 transition-colors">
                            <BookOpen className="w-3 h-3" />
                            {doc.chapterCount} ch.
                          </span>
                        )}
                      </div>
                      <motion.div
                        initial={{ x: -5, opacity: 0 }}
                        animate={hoveredCard === doc.id ? { x: 0, opacity: 1 } : { x: -5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-4 h-4 text-gold" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredDocs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="w-20 h-20 rounded-full bg-gold/5 border border-gold/10 mx-auto mb-6 flex items-center justify-center">
                <Globe className="w-8 h-8 text-gold/30" />
              </div>
              <p className="text-gray-500 text-lg mb-2">{t('research.empty.title')}</p>
              <p className="text-gray-600 text-sm">{t('research.empty.desc')}</p>
            </motion.div>
          )}

          {/* Loading skeletons (shown at bottom for reference) */}
          {filteredDocs.length === 0 && searchQuery === '' && selectedCategory === CATEGORY_ALL && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <DocumentSkeleton key={i} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
