#!/usr/bin/env node
/**
 * DreamNova Document Parser
 * Parses all 49 .docx files, extracts metadata, classifies, deduplicates.
 * Output: src/data/documents.json
 */

import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

const DOCS_DIR = '/Users/codenolimits-dreamai-nanach/Desktop/IMPORTANT! -Dossier-Permanent-Cloud/RESUME GOOGLE DRIVE DOCS IMPORTANTS/drive-download-20260217T174554Z-3-001';
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/documents.json');

// Category classification rules
const CATEGORIES = {
  codex: {
    label: 'CODEX Dream Nova',
    icon: '📖',
    color: '#D4AF37',
    patterns: [/^CODEX/i]
  },
  deep_research: {
    label: 'Deep Research',
    icon: '🔬',
    color: '#00D4FF',
    patterns: [/^Deep Research/i, /^Document final unifi/i]
  },
  quantum_kabbalah: {
    label: 'Quantum Physics & Kabbalah',
    icon: '⚛️',
    color: '#00FF88',
    patterns: [/Physique Quantique/i, /Quantum Void/i, /Observer Transfer/i, /Faith as Higher/i, /Théorème Réparation/i]
  },
  na_nach_protocol: {
    label: 'Na Nach Protocol',
    icon: '🔥',
    color: '#FF6B35',
    patterns: [/Source Code of Reality/i, /Na Nach/i, /Petek Protocol/i, /Multiverse Communication/i, /SOURCECODE OF REALITY/i]
  },
  strategy_funding: {
    label: 'Strategy & Funding',
    icon: '💰',
    color: '#FFD700',
    patterns: [/Strategy Document/i, /Funding/i, /Recherche Financement/i, /Roadmap/i]
  },
  dreamnova_os: {
    label: 'DreamNova OS',
    icon: '🖥️',
    color: '#8A2BE2',
    patterns: [/DREAM.?NOVA.?OS/i, /MASTER_TASKLIST/i, /PROJECT_CONTEXT/i]
  },
  product: {
    label: 'Product & Features',
    icon: '🚀',
    color: '#FF69B4',
    patterns: [/Novaki/i, /Azamra OS/i, /dreamnova-landing/i]
  }
};

function classifyDocument(filename) {
  for (const [key, cat] of Object.entries(CATEGORIES)) {
    for (const pattern of cat.patterns) {
      if (pattern.test(filename)) return key;
    }
  }
  return 'uncategorized';
}

function detectLanguage(text) {
  const hebrewChars = (text.match(/[\u0590-\u05FF]/g) || []).length;
  const frenchWords = ['le', 'la', 'les', 'de', 'du', 'des', 'un', 'une', 'est', 'dans', 'pour', 'qui', 'que'];
  const frenchCount = frenchWords.reduce((c, w) => c + (text.toLowerCase().split(` ${w} `).length - 1), 0);

  if (hebrewChars > 50) return 'he';
  if (frenchCount > 20) return 'fr';
  return 'en';
}

function isDuplicate(filename) {
  return /\(1\)|\(2\)|\(3\)/.test(filename);
}

function getCanonicalName(filename) {
  return filename.replace(/\(\d+\)/, '').replace(/\s+/g, ' ').trim();
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\.docx$|\.pdf$/i, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function extractSummary(text, maxLen = 500) {
  const lines = text.split('\n').filter(l => l.trim().length > 30);
  let summary = '';
  for (const line of lines) {
    if (summary.length + line.length > maxLen) break;
    summary += line.trim() + ' ';
  }
  return summary.trim() || text.slice(0, maxLen).trim();
}

function extractChapters(text) {
  const chapterPattern = /(?:^|\n)(?:Chapter|Chapitre|Part|Partie)\s+[\dIVXLCDM]+[.:]\s*(.+)/gi;
  const chapters = [];
  let match;
  while ((match = chapterPattern.exec(text)) !== null) {
    chapters.push(match[1].trim().slice(0, 100));
  }
  return chapters;
}

async function parseDocx(filepath) {
  try {
    const result = await mammoth.extractRawText({ path: filepath });
    return result.value;
  } catch (err) {
    console.error(`  ⚠️ Error parsing ${path.basename(filepath)}: ${err.message}`);
    return '';
  }
}

async function main() {
  console.log('═'.repeat(60));
  console.log('📚 DreamNova Document Parser v1.0');
  console.log(`📁 Source: ${DOCS_DIR}`);
  console.log('═'.repeat(60));

  const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.docx'));
  console.log(`\n🔍 Found ${files.length} .docx files\n`);

  const documents = [];
  const duplicateMap = {};

  for (const filename of files) {
    const filepath = path.join(DOCS_DIR, filename);
    const stat = fs.statSync(filepath);
    const isDup = isDuplicate(filename);

    console.log(`📄 Parsing: ${filename}${isDup ? ' (DUPLICATE)' : ''}`);

    const text = await parseDocx(filepath);
    if (!text) continue;

    const wordCount = text.split(/\s+/).length;
    const category = classifyDocument(filename);
    const language = detectLanguage(text);
    const summary = extractSummary(text);
    const chapters = extractChapters(text);
    const slug = slugify(filename);
    const canonical = getCanonicalName(filename);

    // Track duplicates
    if (!duplicateMap[canonical]) {
      duplicateMap[canonical] = { count: 0, bestWordCount: 0, bestSlug: '' };
    }
    duplicateMap[canonical].count++;

    const isBestVersion = wordCount > duplicateMap[canonical].bestWordCount;
    if (isBestVersion) {
      duplicateMap[canonical].bestWordCount = wordCount;
      duplicateMap[canonical].bestSlug = slug;
    }

    const doc = {
      id: slug,
      filename,
      title: filename.replace(/\.docx$|\.md\.docx$|\.pdf$/i, '').replace(/\(\d+\)/, '').replace(/_/g, ' ').trim(),
      slug,
      category,
      categoryLabel: CATEGORIES[category]?.label || 'Uncategorized',
      categoryIcon: CATEGORIES[category]?.icon || '📄',
      categoryColor: CATEGORIES[category]?.color || '#888',
      language,
      wordCount,
      charCount: text.length,
      summary,
      chapters,
      chapterCount: chapters.length,
      isDuplicate: isDup,
      canonicalName: canonical,
      fileSize: stat.size,
      lastModified: stat.mtime.toISOString(),
      createdAt: stat.birthtime.toISOString(),
    };

    documents.push(doc);

    const catEmoji = CATEGORIES[category]?.icon || '❓';
    console.log(`   ${catEmoji} ${category} | ${language.toUpperCase()} | ${wordCount.toLocaleString()} words | ${chapters.length} chapters${isDup ? ' | ⚠️ DUP' : ''}`);
  }

  // Mark best versions
  for (const doc of documents) {
    const canonical = duplicateMap[doc.canonicalName];
    doc.isBestVersion = doc.slug === canonical.bestSlug;
    doc.duplicateCount = canonical.count;
  }

  // Sort by category then by word count (longest first)
  documents.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return b.wordCount - a.wordCount;
  });

  // Stats
  const uniqueDocs = documents.filter(d => d.isBestVersion);
  const stats = {
    total: documents.length,
    unique: uniqueDocs.length,
    duplicates: documents.length - uniqueDocs.length,
    totalWords: documents.reduce((s, d) => s + d.wordCount, 0),
    uniqueWords: uniqueDocs.reduce((s, d) => s + d.wordCount, 0),
    byCategory: {},
    byLanguage: {},
  };

  for (const doc of uniqueDocs) {
    stats.byCategory[doc.category] = (stats.byCategory[doc.category] || 0) + 1;
    stats.byLanguage[doc.language] = (stats.byLanguage[doc.language] || 0) + 1;
  }

  // Output
  const output = {
    generatedAt: new Date().toISOString(),
    stats,
    categories: CATEGORIES,
    documents
  };

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

  console.log('\n' + '═'.repeat(60));
  console.log('📊 PARSING COMPLETE');
  console.log(`   Total files:    ${stats.total}`);
  console.log(`   Unique docs:    ${stats.unique}`);
  console.log(`   Duplicates:     ${stats.duplicates}`);
  console.log(`   Total words:    ${stats.totalWords.toLocaleString()}`);
  console.log(`   Unique words:   ${stats.uniqueWords.toLocaleString()}`);
  console.log('\n📁 By Category:');
  for (const [cat, count] of Object.entries(stats.byCategory)) {
    console.log(`   ${CATEGORIES[cat]?.icon || '?'} ${CATEGORIES[cat]?.label || cat}: ${count}`);
  }
  console.log('\n🌐 By Language:');
  for (const [lang, count] of Object.entries(stats.byLanguage)) {
    const langName = { en: '🇬🇧 English', fr: '🇫🇷 French', he: '🇮🇱 Hebrew' }[lang] || lang;
    console.log(`   ${langName}: ${count}`);
  }
  console.log(`\n💾 Output: ${OUTPUT_FILE}`);
  console.log('═'.repeat(60));
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
