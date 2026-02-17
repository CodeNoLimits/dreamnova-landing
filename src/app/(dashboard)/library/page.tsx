'use client';

import { useState, useMemo } from 'react';
import { Search, FileText, Check, X as XIcon } from 'lucide-react';
import documentsData from '@/data/documents.json';

const { documents, stats, categories } = documentsData;

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  fr: 'French',
  he: 'Hebrew',
};

export default function LibraryPage() {
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showDuplicates, setShowDuplicates] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState('all');

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Document Library</h1>
        <p className="text-gray-400 mt-1">
          {stats.total} total files &middot; {stats.unique} unique &middot; {stats.duplicates}{' '}
          duplicates &middot; {stats.uniqueWords.toLocaleString()} words
        </p>
      </div>

      {/* Category Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(stats.byCategory).map(([key, count]) => {
          const cat = (categories as Record<string, { label: string; icon: string; color: string }>)[
            key
          ];
          return (
            <div
              key={key}
              onClick={() => setFilterCategory(filterCategory === key ? 'all' : key)}
              className={`bg-sacred-surface border rounded-lg p-4 cursor-pointer transition-all ${
                filterCategory === key
                  ? 'border-gold'
                  : 'border-gold/10 hover:border-gold/30'
              }`}
            >
              <div className="text-2xl mb-1">{cat?.icon || '\u{1F4C4}'}</div>
              <div className="text-xl font-bold text-white">{count as number}</div>
              <div className="text-xs text-gray-400">{cat?.label || key}</div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search by title or filename..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-sacred-surface border border-gold/20 rounded-lg text-white text-sm placeholder-gray-500 focus:border-gold/60 focus:outline-none"
          />
        </div>
        <select
          value={filterLanguage}
          onChange={(e) => setFilterLanguage(e.target.value)}
          className="px-3 py-2 bg-sacred-surface border border-gold/20 rounded-lg text-white text-sm focus:border-gold/60 focus:outline-none"
        >
          <option value="all">All Languages</option>
          {Object.entries(stats.byLanguage).map(([lang, count]) => (
            <option key={lang} value={lang}>
              {LANGUAGE_NAMES[lang] || lang} ({count})
            </option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          <input
            type="checkbox"
            checked={showDuplicates}
            onChange={(e) => setShowDuplicates(e.target.checked)}
            className="accent-gold"
          />
          Show duplicates
        </label>
        <span className="text-sm text-gray-500">{filtered.length} documents</span>
      </div>

      {/* Documents Table */}
      <div className="bg-sacred-surface border border-gold/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold/10">
                <th className="text-left px-4 py-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Document
                </th>
                <th className="text-left px-4 py-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Category
                </th>
                <th className="text-left px-4 py-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Lang
                </th>
                <th className="text-right px-4 py-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Words
                </th>
                <th className="text-center px-4 py-3 text-xs text-gray-400 font-medium uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/5">
              {filtered.map((doc) => (
                <tr
                  key={doc.id}
                  className={`hover:bg-gold/5 transition-colors ${
                    doc.isDuplicate ? 'opacity-60' : ''
                  }`}
                >
                  <td className="px-4 py-3">
                    <div className="font-medium text-white text-sm">{doc.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5 truncate max-w-[300px]">
                      {doc.filename}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="text-xs px-2 py-1 rounded-full whitespace-nowrap"
                      style={{
                        backgroundColor: `${doc.categoryColor}15`,
                        color: doc.categoryColor,
                      }}
                    >
                      {doc.categoryIcon} {doc.categoryLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300">
                    {doc.language.toUpperCase()}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-300 text-right font-mono">
                    {doc.wordCount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {doc.isBestVersion ? (
                      <span className="text-green-400 text-xs flex items-center justify-center gap-1">
                        <Check className="w-3 h-3" /> Best
                      </span>
                    ) : (
                      <span className="text-yellow-500 text-xs flex items-center justify-center gap-1">
                        <XIcon className="w-3 h-3" /> Dup
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
