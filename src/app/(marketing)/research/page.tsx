'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, BookOpen, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SacredParticles } from '@/components/shared/sacred-particles';
import documentsData from '@/data/documents.json';

const { documents, stats, categories } = documentsData;
const uniqueDocs = documents.filter((d) => d.isBestVersion);

const LANGUAGE_FLAGS: Record<string, string> = {
  en: '\u{1F1EC}\u{1F1E7}',
  fr: '\u{1F1EB}\u{1F1F7}',
  he: '\u{1F1EE}\u{1F1F1}',
};

const CATEGORY_ALL = 'all';

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL);
  const [searchQuery, setSearchQuery] = useState('');

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
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
          <SacredParticles />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs tracking-[0.3em] text-cyan-400 mb-6 uppercase"
            >
              Research Library
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              The DreamNova
              <br />
              <span className="sacred-gradient">Research Library</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-[#8A8A9A] max-w-2xl mx-auto mb-10"
            >
              {stats.unique} unique documents spanning {stats.uniqueWords.toLocaleString()} words
              across {categoryKeys.length} research domains
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                { value: stats.unique, label: 'Documents' },
                { value: `${Math.round(stats.uniqueWords / 1000)}K`, label: 'Words' },
                { value: categoryKeys.length, label: 'Domains' },
                { value: Object.keys(stats.byLanguage).length, label: 'Languages' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-gold">{s.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          {/* Search */}
          <div className="mb-10 space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-sacred-surface border border-gold/20 rounded-lg text-white placeholder-gray-500 focus:border-gold/60 focus:outline-none transition-colors"
              />
            </div>
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory(CATEGORY_ALL)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === CATEGORY_ALL
                    ? 'bg-gold text-black'
                    : 'bg-sacred-surface border border-gold/20 text-gray-300 hover:border-gold/50'
                }`}
              >
                All ({stats.unique})
              </button>
              {categoryKeys.map((key) => {
                const cat = (categories as Record<string, { label: string; icon: string; color: string }>)[key];
                const count = (stats.byCategory as Record<string, number>)[key] || 0;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === key
                        ? 'text-black'
                        : 'bg-sacred-surface border border-gold/20 text-gray-300 hover:border-gold/50'
                    }`}
                    style={selectedCategory === key ? { backgroundColor: cat.color } : {}}
                  >
                    {cat.icon} {cat.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Document Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredDocs.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-sacred-surface border border-gold/10 rounded-xl p-6 hover:border-gold/40 transition-all duration-300"
                >
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${doc.categoryColor}15`,
                        color: doc.categoryColor,
                        border: `1px solid ${doc.categoryColor}30`,
                      }}
                    >
                      {doc.categoryIcon} {doc.categoryLabel}
                    </span>
                    <span className="text-lg">{LANGUAGE_FLAGS[doc.language] || '\u{1F310}'}</span>
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                    {doc.title}
                  </h3>
                  {/* Summary */}
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">{doc.summary}</p>
                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        {doc.wordCount.toLocaleString()} words
                      </span>
                      {doc.chapterCount > 0 && (
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {doc.chapterCount} ch.
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredDocs.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No documents found matching your criteria</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
