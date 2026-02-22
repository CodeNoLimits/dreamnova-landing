'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileText,
  List,
  X,
  Clock,
  Sparkles,
  Download,
} from 'lucide-react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { useTranslation } from '@/lib/LanguageContext';

interface DocMeta {
  title: string;
  slug: string;
  category: string;
  categoryLabel: string;
  categoryIcon: string;
  categoryColor: string;
  language: string;
  wordCount: number;
  sections: Array<{ title: string; anchor: string; level: number }>;
}

interface NavDoc {
  title: string;
  slug: string;
}

interface Props {
  doc: DocMeta;
  content: string;
  prevDoc: NavDoc | null;
  nextDoc: NavDoc | null;
}

const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  he: 'עברית',
};

const LANGUAGE_FLAGS: Record<string, string> = {
  en: '\u{1F1EC}\u{1F1E7}',
  fr: '\u{1F1EB}\u{1F1F7}',
  he: '\u{1F1EE}\u{1F1F1}',
};

// Strip HTML tags (e.g. <a id="..."></a>) and escaped backslashes from section titles
// These come from Google Docs export artifacts in documents.json
function sanitizeTitle(raw: string): string {
  return raw
    .replace(/<[^>]*>/g, '')     // Strip all HTML tags
    .replace(/\\+\./g, '.')      // Fix escaped dots
    .replace(/\\+\(/g, '(')      // Fix escaped parens
    .replace(/\\+\)/g, ')')
    .replace(/\\+/g, '')         // Remove remaining backslashes
    .replace(/\s+/g, ' ')        // Normalize whitespace
    .trim();
}

export function DocumentReader({ doc, content, prevDoc, nextDoc }: Props) {
  const { t } = useTranslation();
  const [showToc, setShowToc] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [passedSections, setPassedSections] = useState<Set<string>>(new Set());
  const contentRef = useRef<HTMLDivElement>(null);
  const isRtl = doc.language === 'he';

  // Track active section on scroll via IntersectionObserver
  useEffect(() => {
    if (!doc.sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    const headings = contentRef.current?.querySelectorAll('h1, h2, h3');
    headings?.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, [doc.sections]);

  // Scroll progress bar + passed sections tracking
  const handleScroll = useCallback(() => {
    const el = contentRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const total = el.scrollHeight - window.innerHeight;
    const scrolled = -rect.top;
    const pct = Math.min(100, Math.max(0, (scrolled / total) * 100));
    setScrollProgress(pct);

    // Track which sections we've scrolled past
    const headings = el.querySelectorAll('h1[id], h2[id], h3[id]');
    const newPassed = new Set<string>();
    headings.forEach((h) => {
      const hRect = h.getBoundingClientRect();
      if (hRect.top < window.innerHeight * 0.5) {
        newPassed.add(h.id);
      }
    });
    setPassedSections(newPassed);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Reading time estimate
  const readingTime = Math.max(1, Math.round(doc.wordCount / 200));

  // PDF download — uses browser print-to-PDF
  const handleDownloadPDF = useCallback(() => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const articleEl = contentRef.current;
    if (!articleEl) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="${doc.language}" dir="${isRtl ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="utf-8" />
        <title>${doc.title} — DreamNova Research</title>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Frank+Ruhl+Libre:wght@400;500;700&display=swap" rel="stylesheet">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: ${isRtl ? "'Frank Ruhl Libre', serif" : "'Cormorant Garamond', 'Georgia', serif"};
            line-height: 1.9;
            padding: 60px 50px;
            max-width: 800px;
            margin: 0 auto;
            color: #1a1a1a;
            font-size: 14px;
          }
          h1 { font-size: 28px; margin: 30px 0 15px; font-weight: 700; border-bottom: 2px solid #D4AF37; padding-bottom: 8px; }
          h2 { font-size: 22px; margin: 25px 0 12px; font-weight: 600; color: #8B7432; }
          h3 { font-size: 18px; margin: 20px 0 10px; font-weight: 600; }
          p { margin: 8px 0; }
          blockquote { border-left: 3px solid #D4AF37; padding: 8px 20px; margin: 15px 0; font-style: italic; background: #FFFBF0; }
          table { border-collapse: collapse; width: 100%; margin: 15px 0; }
          th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; }
          th { background: #f5f5f5; font-weight: 600; }
          code { background: #f0f0f0; padding: 2px 5px; border-radius: 3px; font-size: 0.9em; }
          ul, ol { padding-left: 25px; }
          li { margin: 4px 0; }
          .header { text-align: center; margin-bottom: 40px; border-bottom: 3px double #D4AF37; padding-bottom: 20px; }
          .header h1 { border: none; font-size: 32px; color: #1a1a1a; }
          .header .meta { color: #777; font-size: 13px; margin-top: 8px; }
          .footer { margin-top: 40px; padding-top: 15px; border-top: 1px solid #ccc; text-align: center; font-size: 12px; color: #999; }
          @media print { body { padding: 0; } .no-print { display: none; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${doc.title}</h1>
          <div class="meta">${doc.categoryIcon} ${doc.categoryLabel} · ${doc.wordCount.toLocaleString()} words · ~${readingTime} min read</div>
          <div class="meta">DreamNova Research — ${new Date().getFullYear()}</div>
        </div>
        ${articleEl.querySelector('.prose')?.innerHTML || articleEl.innerHTML}
        <div class="footer">
          <p>DreamNova Research · dreamnova.com/research · Na Nach Nachma Nachman MeUman</p>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  }, [doc, isRtl, readingTime]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-sacred-black">
        {/* ── Scroll Progress Bar ── */}
        <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
          <motion.div
            className="h-full"
            style={{
              width: `${scrollProgress}%`,
              background: `linear-gradient(90deg, ${doc.categoryColor}, ${doc.categoryColor}CC, ${doc.categoryColor})`,
              boxShadow: `0 0 12px ${doc.categoryColor}40, 0 0 4px ${doc.categoryColor}20`,
            }}
            transition={{ duration: 0.05 }}
          />
        </div>

        {/* ── Top Sticky Bar ── */}
        <div className="sticky top-0 z-40 bg-sacred-black/80 backdrop-blur-xl border-b border-gold/8">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/research"
                className="group flex items-center gap-1.5 text-sm text-gray-400 hover:text-gold transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                {t('research.reader.back') || '← Library'}
              </Link>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-xs font-mono px-2.5 py-1 rounded-full backdrop-blur-sm"
                style={{
                  backgroundColor: `${doc.categoryColor}12`,
                  color: doc.categoryColor,
                  border: `1px solid ${doc.categoryColor}25`,
                  boxShadow: `0 0 8px ${doc.categoryColor}08`,
                }}
              >
                {doc.categoryIcon} {doc.categoryLabel}
              </motion.span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:flex items-center gap-1 text-xs text-gray-500">
                <FileText className="w-3 h-3" />
                {doc.wordCount.toLocaleString()}
              </span>
              <span className="hidden sm:flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                ~{readingTime} min
              </span>
              <span className="hidden md:inline text-xs text-gray-500">
                {LANGUAGE_FLAGS[doc.language]} {LANGUAGE_NAMES[doc.language] || doc.language}
              </span>
              {/* PDF Download */}
              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gold transition-colors px-2.5 py-1.5 rounded-lg hover:bg-gold/5 border border-transparent hover:border-gold/15"
                title={t('research.reader.download') || 'Download PDF'}
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PDF</span>
              </button>
              {doc.sections.length > 0 && (
                <button
                  onClick={() => setShowToc(!showToc)}
                  className="lg:hidden flex items-center gap-1 text-xs text-gray-400 hover:text-gold transition-colors px-2 py-1 rounded-md hover:bg-gold/5"
                >
                  {showToc ? <X className="w-4 h-4" /> : <List className="w-4 h-4" />}
                  TOC
                </button>
              )}
              {/* Scroll percentage */}
              <span className="hidden sm:inline text-xs font-mono tabular-nums" style={{ color: doc.categoryColor }}>
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>
        </div>

        {/* ── Document Layout ── */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10">
            {/* ── TOC Sidebar — sticky, scrollable ── */}
            {doc.sections.length > 0 && (
              <aside
                className={`${showToc ? 'block' : 'hidden'} lg:block`}
              >
                <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: `${doc.categoryColor}30 transparent`,
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-gold/40" />
                    {t('research.reader.toc') || 'Table of Contents'}
                  </p>

                  {/* Progress indicator */}
                  <div className="mb-4 h-1 bg-sacred-surface rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${scrollProgress}%`,
                        background: `linear-gradient(90deg, ${doc.categoryColor}, ${doc.categoryColor}80)`,
                      }}
                    />
                  </div>

                  <nav className="space-y-0.5 relative">
                    {doc.sections
                      .filter((s) => s.level <= 2 && sanitizeTitle(s.title).replace(/[*_`~]/g, '').length > 4)
                      .map((section, i) => {
                        const isActive = activeSection === section.anchor;
                        const isPassed = passedSections.has(section.anchor);
                        return (
                          <a
                            key={i}
                            href={`#${section.anchor}`}
                            onClick={() => setShowToc(false)}
                            className={`group relative flex items-center gap-2 text-[13px] py-2 transition-all duration-300 rounded-r-md ${
                              section.level === 2 ? 'pl-5' : 'pl-2'
                            } ${
                              isActive
                                ? 'text-gold border-l-2 border-gold bg-gold/5'
                                : isPassed
                                  ? 'text-gray-400 border-l-2 border-gold/20 hover:text-gray-200 hover:bg-gold/3'
                                  : 'text-gray-500 border-l-2 border-transparent hover:text-gray-300 hover:border-gold/10'
                            }`}
                            style={
                              isActive
                                ? { boxShadow: `inset 3px 0 12px ${doc.categoryColor}15, 0 0 8px ${doc.categoryColor}05` }
                                : undefined
                            }
                          >
                            {/* Read indicator dot */}
                            <span
                              className={`flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                                isActive
                                  ? 'bg-gold shadow-[0_0_6px_rgba(212,175,55,0.5)]'
                                  : isPassed
                                    ? 'bg-gold/30'
                                    : 'bg-gray-700 group-hover:bg-gray-500'
                              }`}
                            />
                            <span className="line-clamp-2 leading-snug">{sanitizeTitle(section.title)}</span>
                          </a>
                        );
                      })}
                  </nav>
                </div>
              </aside>
            )}

            {/* ── Main Content ── */}
            <article
              ref={contentRef}
              dir={isRtl ? 'rtl' : 'ltr'}
              className={`min-w-0 ${!doc.sections.length ? 'lg:col-span-2 max-w-3xl mx-auto' : ''}`}
            >
              {/* Document title hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                {/* Category hero chip */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${doc.categoryColor}10`,
                      color: doc.categoryColor,
                      border: `1px solid ${doc.categoryColor}20`,
                    }}
                  >
                    {doc.categoryIcon} {doc.categoryLabel}
                  </span>
                  <span className="text-xs text-gray-600">•</span>
                  <span className="text-xs text-gray-500">
                    {LANGUAGE_FLAGS[doc.language]} {LANGUAGE_NAMES[doc.language]}
                  </span>
                </motion.div>

                <h1
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                  style={
                    isRtl
                      ? { fontFamily: "'Frank Ruhl Libre', 'David Libre', serif", textAlign: 'right' }
                      : undefined
                  }
                >
                  {doc.title}
                </h1>

                {/* Meta line */}
                <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    {doc.wordCount.toLocaleString()} {t('research.stat.words') || 'words'}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    ~{readingTime} min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    {doc.sections.length} sections
                  </span>
                  {/* Download PDF button inline */}
                  <button
                    onClick={handleDownloadPDF}
                    className="flex items-center gap-1.5 text-gold/70 hover:text-gold transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {t('research.reader.download') || 'Download PDF'}
                  </button>
                </div>

                {/* Decorative divider */}
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              </motion.div>

              {/* ── Markdown Content with Sacred Typography ── */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`
                  prose prose-invert prose-gold max-w-none
                  prose-headings:font-display prose-headings:text-white prose-headings:scroll-mt-24
                  prose-h1:text-3xl prose-h1:mt-16 prose-h1:mb-6
                  prose-h1:border-b prose-h1:border-gold/10 prose-h1:pb-4
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-gold/90
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white/90
                  prose-p:leading-[2] prose-p:tracking-wide prose-p:text-[1.05rem] prose-p:text-gray-300
                  prose-strong:text-gold prose-strong:font-semibold
                  prose-em:text-cyan-300/80
                  prose-li:leading-[1.9] prose-li:text-[1.02rem] prose-li:text-gray-300
                  prose-blockquote:border-l-gold/40 prose-blockquote:bg-gold/[0.03]
                  prose-blockquote:rounded-r-lg prose-blockquote:py-3 prose-blockquote:px-5
                  prose-blockquote:italic prose-blockquote:shadow-[inset_4px_0_12px_rgba(212,175,55,0.06)]
                  prose-code:text-cyan-300 prose-code:bg-cyan-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                  prose-a:text-gold prose-a:underline-offset-4 prose-a:decoration-gold/30 hover:prose-a:decoration-gold
                  prose-hr:border-gold/10
                  prose-table:border prose-table:border-gold/10
                  prose-th:border prose-th:border-gold/10 prose-th:bg-gold/5 prose-th:px-3 prose-th:py-2
                  prose-td:border prose-td:border-gold/10 prose-td:px-3 prose-td:py-2
                  prose-img:rounded-xl prose-img:shadow-lg
                  ${isRtl ? 'text-right' : ''}
                `}
                style={
                  isRtl
                    ? { direction: 'rtl', textAlign: 'right', fontFamily: "'Frank Ruhl Libre', 'David Libre', serif" }
                    : { fontFamily: "'Cormorant Garamond', 'Georgia', serif" }
                }
              >
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({ children, ...props }) => {
                      const text = String(children);
                      const id = text
                        .toLowerCase()
                        .replace(/[^a-z0-9\u0590-\u05FF\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .slice(0, 80);
                      return <h1 id={id} {...props}>{children}</h1>;
                    },
                    h2: ({ children, ...props }) => {
                      const text = String(children);
                      const id = text
                        .toLowerCase()
                        .replace(/[^a-z0-9\u0590-\u05FF\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .slice(0, 80);
                      return <h2 id={id} {...props}>{children}</h2>;
                    },
                    h3: ({ children, ...props }) => {
                      const text = String(children);
                      const id = text
                        .toLowerCase()
                        .replace(/[^a-z0-9\u0590-\u05FF\s-]/g, '')
                        .replace(/\s+/g, '-')
                        .slice(0, 80);
                      return <h3 id={id} {...props}>{children}</h3>;
                    },
                    blockquote: ({ children, ...props }) => (
                      <blockquote
                        className="relative my-6 border-l-4 border-gold/40 bg-gold/[0.03] rounded-r-lg py-3 px-5 italic"
                        style={{ boxShadow: 'inset 4px 0 12px rgba(212,175,55,0.06)' }}
                        {...props}
                      >
                        <span className="absolute -left-2 top-3 text-gold/20 text-2xl font-serif">&ldquo;</span>
                        {children}
                      </blockquote>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </motion.div>

              {/* ── Prev / Next Navigation ── */}
              <div className="mt-20 pt-8 border-t border-gold/10">
                <AnimatePresence>
                  <div className="grid grid-cols-2 gap-4">
                    {prevDoc ? (
                      <Link
                        href={`/research/${prevDoc.slug}`}
                        className="group flex items-center gap-3 p-5 rounded-xl bg-sacred-surface border border-gold/8
                          hover:border-gold/25 hover:bg-sacred-card
                          transition-all duration-500 hover:shadow-[0_4px_20px_rgba(212,175,55,0.06)]
                          hover:-translate-y-0.5"
                      >
                        <ChevronLeft className="w-5 h-5 text-gold/40 group-hover:text-gold group-hover:-translate-x-1 transition-all duration-300 flex-shrink-0" />
                        <div className="min-w-0">
                          <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">
                            ← Previous
                          </span>
                          <p className="text-sm text-gray-300 truncate group-hover:text-white transition-colors duration-300">
                            {prevDoc.title}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div />
                    )}
                    {nextDoc ? (
                      <Link
                        href={`/research/${nextDoc.slug}`}
                        className="group flex items-center justify-end gap-3 p-5 rounded-xl bg-sacred-surface border border-gold/8
                          hover:border-gold/25 hover:bg-sacred-card text-right
                          transition-all duration-500 hover:shadow-[0_4px_20px_rgba(212,175,55,0.06)]
                          hover:-translate-y-0.5"
                      >
                        <div className="min-w-0">
                          <span className="text-[10px] text-gray-500 uppercase tracking-wider block mb-1">
                            Next →
                          </span>
                          <p className="text-sm text-gray-300 truncate group-hover:text-white transition-colors duration-300">
                            {nextDoc.title}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                      </Link>
                    ) : (
                      <div />
                    )}
                  </div>
                </AnimatePresence>
              </div>

              {/* Back to library */}
              <div className="mt-10 text-center pb-8">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors duration-300 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                  {t('research.reader.back') || 'Back to Research Library'}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
