'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Check, X as XIcon, BookOpen, BarChart3, Languages, Copy } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import documentsData from '@/data/documents.json';

const { documents, stats, categories } = documentsData;

const LANGUAGE_NAMES: Record<string, string> = {
  en: '🇬🇧 English',
  fr: '🇫🇷 French',
  he: '🇮🇱 Hebrew',
};

export default function LibraryPage() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showDuplicates, setShowDuplicates] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return documents.filter((doc) => {
      if (!showDuplicates && !doc.isBestVersion) return false;
      if (filterCategory !== 'all' && doc.category !== filterCategory) return false;
      if (filterLanguage !== 'all' && doc.language !== filterLanguage) return false;
      if (
        search &&
        !doc.title.toLowerCase().includes(search.toLowerCase()) &&
        !doc.filename.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [search, filterCategory, showDuplicates, filterLanguage]);

  const totalWords = filtered.reduce((sum, d) => sum + d.wordCount, 0);

  return (
    <div className="space-y-6">
      {/* Header with animated title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-gold" />
            {t('library.title')}
          </h1>
          <p className="text-gray-400 mt-1 text-sm">
            {stats.total} {t('library.total.files')} · {stats.unique} {t('library.unique')} · {stats.duplicates} {t('library.duplicates')} · {stats.uniqueWords.toLocaleString()} {t('research.stat.words')}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-sacred-surface rounded-lg border border-gold/10">
            <BarChart3 className="w-3.5 h-3.5 text-gold" />
            {filtered.length} {t('library.shown')}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-sacred-surface rounded-lg border border-gold/10">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            {totalWords.toLocaleString()} {t('research.stat.words')}
          </span>
        </div>
      </div>

      {/* Category Stats Cards — with colored left border */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Object.entries(stats.byCategory).map(([key, count]) => {
          const cat = (categories as Record<string, { label: string; icon: string; color: string }>)[key];
          const isActive = filterCategory === key;
          return (
            <motion.div
              key={key}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilterCategory(filterCategory === key ? 'all' : key)}
              className={`relative overflow-hidden bg-sacred-surface border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                isActive ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'border-gold/8 hover:border-gold/25'
              }`}
            >
              {/* Left color accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                style={{ backgroundColor: isActive ? cat?.color : `${cat?.color}40` }}
              />
              <div className="text-2xl mb-1">{cat?.icon || '📄'}</div>
              <div className="text-xl font-bold text-white">{count as number}</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">{cat?.label || key}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/30" />
          <input
            type="text"
            placeholder={t('library.search.placeholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-sacred-surface border border-gold/15 rounded-xl text-white text-sm placeholder-gray-600 
              focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/10 transition-all"
          />
        </div>
        <div className="relative">
          <Languages className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold/30 pointer-events-none" />
          <select
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
            className="pl-9 pr-8 py-2.5 bg-sacred-surface border border-gold/15 rounded-xl text-white text-sm 
              focus:border-gold/40 focus:outline-none appearance-none cursor-pointer"
          >
            <option value="all">{t('library.all.languages')}</option>
            {Object.entries(stats.byLanguage).map(([lang, count]) => (
              <option key={lang} value={lang}>
                {LANGUAGE_NAMES[lang] || lang} ({count})
              </option>
            ))}
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer select-none px-3 py-2 rounded-lg hover:bg-sacred-surface transition-colors">
          <input
            type="checkbox"
            checked={showDuplicates}
            onChange={(e) => setShowDuplicates(e.target.checked)}
            className="accent-gold w-3.5 h-3.5"
          />
          {t('library.show.duplicates')} ({stats.duplicates})
        </label>
      </div>

      {/* Documents Table — enhanced */}
      <div className="bg-sacred-surface border border-gold/8 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold/8">
                <th className="text-left px-5 py-3.5 text-[10px] text-gray-500 font-medium uppercase tracking-[0.15em]">
                  {t('library.th.document')}
                </th>
                <th className="text-left px-4 py-3.5 text-[10px] text-gray-500 font-medium uppercase tracking-[0.15em]">
                  {t('library.th.category')}
                </th>
                <th className="text-left px-4 py-3.5 text-[10px] text-gray-500 font-medium uppercase tracking-[0.15em]">
                  {t('library.th.lang')}
                </th>
                <th className="text-right px-4 py-3.5 text-[10px] text-gray-500 font-medium uppercase tracking-[0.15em]">
                  {t('research.stat.words')}
                </th>
                <th className="text-center px-4 py-3.5 text-[10px] text-gray-500 font-medium uppercase tracking-[0.15em]">
                  {t('library.th.status')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/[0.04]">
              {filtered.map((doc) => (
                <motion.tr
                  key={doc.id}
                  onMouseEnter={() => setHoveredRow(doc.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`transition-colors duration-200 ${
                    doc.isDuplicate ? 'opacity-50' : ''
                  } ${hoveredRow === doc.id ? 'bg-gold/[0.04]' : ''}`}
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      {/* Color dot matching category */}
                      <div
                        className="w-1.5 h-8 rounded-full flex-shrink-0"
                        style={{ backgroundColor: doc.categoryColor }}
                      />
                      <div>
                        <div className="font-medium text-white text-sm group-hover:text-gold transition-colors">
                          {doc.title}
                        </div>
                        <div className="text-[11px] text-gray-600 mt-0.5 truncate max-w-[280px] font-mono">
                          {doc.filename}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className="text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap font-medium"
                      style={{
                        backgroundColor: `${doc.categoryColor}10`,
                        color: doc.categoryColor,
                        border: `1px solid ${doc.categoryColor}20`,
                      }}
                    >
                      {doc.categoryIcon} {doc.categoryLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-300">
                    {LANGUAGE_NAMES[doc.language]?.split(' ')[0] || doc.language.toUpperCase()}
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-300 text-right font-mono tabular-nums">
                    {doc.wordCount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    {doc.isBestVersion ? (
                      <span className="inline-flex items-center gap-1 text-healing text-xs px-2 py-0.5 rounded-full bg-healing/10 border border-healing/15">
                        <Check className="w-3 h-3" /> {t('library.best')}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-yellow-500 text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/15">
                        <Copy className="w-3 h-3" /> {t('library.dup')}
                      </span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="px-5 py-3 border-t border-gold/5 flex items-center justify-between text-xs text-gray-600">
          <span>{filtered.length} {t('library.documents.shown')}</span>
          <span>{totalWords.toLocaleString()} {t('library.total.words')}</span>
        </div>
      </div>
    </div>
  );
}
