#!/usr/bin/env node
/**
 * DreamNova Phase 2: Full Content Extraction
 * Extracts full text from all .docx → .md files organized by category
 * Updates documents.json with contentPath and sections
 */

import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

const PROJECT_DIR = process.cwd();
const DOCS_DIR = path.join(PROJECT_DIR, 'src/app/(dashboard)/drive-download-20260217T174554Z-3-001');
const CONTENT_DIR = path.join(PROJECT_DIR, 'src/data/content');
const DOCS_JSON = path.join(PROJECT_DIR, 'src/data/documents.json');

// Category folder mapping
const CATEGORY_FOLDERS = {
  codex: 'codex',
  deep_research: 'deep-research',
  quantum_kabbalah: 'quantum-kabbalah',
  na_nach_protocol: 'na-nach',
  strategy_funding: 'strategy',
  dreamnova_os: 'dreamnova-os',
  product: 'product',
  uncategorized: 'other'
};

function extractSections(markdown) {
  const sections = [];
  const lines = markdown.split('\n');
  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const title = match[2].trim();
      const anchor = title
        .toLowerCase()
        .replace(/[^a-z0-9\u0590-\u05FF\s-]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 80);
      sections.push({ level, title, anchor });
    }
  }
  return sections;
}

function cleanMarkdown(md) {
  return md
    // Remove excessive blank lines
    .replace(/\n{4,}/g, '\n\n\n')
    // Clean up weird mammoth artifacts
    .replace(/\u00a0/g, ' ')
    // Trim
    .trim();
}

async function convertToMarkdown(filepath) {
  try {
    const result = await mammoth.convertToMarkdown({ path: filepath });
    if (result.messages.length > 0) {
      const warnings = result.messages.filter(m => m.type === 'warning');
      if (warnings.length > 0) {
        console.log(`   Warnings: ${warnings.length}`);
      }
    }
    return cleanMarkdown(result.value);
  } catch (err) {
    console.error(`   ERROR: ${err.message}`);
    // Fallback to raw text
    try {
      const rawResult = await mammoth.extractRawText({ path: filepath });
      return cleanMarkdown(rawResult.value);
    } catch (err2) {
      console.error(`   FATAL: Cannot extract text: ${err2.message}`);
      return '';
    }
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('Phase 2: Full Content Extraction');
  console.log('='.repeat(60));

  // Load existing documents.json
  const docsData = JSON.parse(fs.readFileSync(DOCS_JSON, 'utf-8'));
  const documents = docsData.documents;

  // Create content directory structure
  for (const folder of Object.values(CATEGORY_FOLDERS)) {
    const dir = path.join(CONTENT_DIR, folder);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  console.log(`\nProcessing ${documents.length} documents...\n`);

  let processed = 0;
  let errors = 0;
  let skipped = 0;

  for (const doc of documents) {
    const filepath = path.join(DOCS_DIR, doc.filename);

    if (!fs.existsSync(filepath)) {
      console.log(`SKIP: ${doc.filename} (file not found)`);
      skipped++;
      continue;
    }

    const categoryFolder = CATEGORY_FOLDERS[doc.category] || 'other';
    const mdFilename = doc.slug + '.md';
    const contentPath = `${categoryFolder}/${mdFilename}`;
    const outputPath = path.join(CONTENT_DIR, contentPath);

    console.log(`[${processed + 1}/${documents.length}] ${doc.title}`);
    console.log(`   Category: ${doc.category} | Lang: ${doc.language} | ${doc.wordCount} words`);

    const markdown = await convertToMarkdown(filepath);

    if (!markdown) {
      console.log('   FAILED - no content extracted');
      errors++;
      continue;
    }

    // Extract sections for TOC
    const sections = extractSections(markdown);

    // Write markdown file
    fs.writeFileSync(outputPath, markdown, 'utf-8');

    // Update document entry
    doc.contentPath = contentPath;
    doc.hasFullContent = true;
    doc.sections = sections.map(s => ({
      title: s.title,
      anchor: s.anchor,
      level: s.level
    }));

    processed++;
    console.log(`   -> ${contentPath} (${sections.length} sections, ${markdown.length} chars)`);
  }

  // Fix uncategorized -> quantum_kabbalah for Theoreme docs
  for (const doc of documents) {
    if (doc.category === 'uncategorized' && doc.title.includes('Réparation Neuro-Cognitive')) {
      doc.category = 'quantum_kabbalah';
      doc.categoryLabel = 'Quantum Physics & Kabbalah';
      doc.categoryIcon = '\u269b\ufe0f';
      doc.categoryColor = '#00FF88';
      // Move file
      if (doc.contentPath) {
        const oldPath = path.join(CONTENT_DIR, doc.contentPath);
        const newContentPath = `quantum-kabbalah/${doc.slug}.md`;
        const newPath = path.join(CONTENT_DIR, newContentPath);
        if (fs.existsSync(oldPath)) {
          fs.renameSync(oldPath, newPath);
          doc.contentPath = newContentPath;
        }
      }
    }
  }

  // Update stats
  docsData.stats.byCategory = {};
  docsData.stats.byLanguage = {};
  const uniqueDocs = documents.filter(d => d.isBestVersion);
  for (const doc of uniqueDocs) {
    docsData.stats.byCategory[doc.category] = (docsData.stats.byCategory[doc.category] || 0) + 1;
    docsData.stats.byLanguage[doc.language] = (docsData.stats.byLanguage[doc.language] || 0) + 1;
  }
  delete docsData.stats.byCategory.uncategorized;

  // Write updated documents.json
  fs.writeFileSync(DOCS_JSON, JSON.stringify(docsData, null, 2), 'utf-8');

  console.log('\n' + '='.repeat(60));
  console.log('EXTRACTION COMPLETE');
  console.log(`   Processed: ${processed}`);
  console.log(`   Errors: ${errors}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Content dir: ${CONTENT_DIR}`);
  console.log('='.repeat(60));
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
