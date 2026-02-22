// DEEP AUDIT: Find EVERY hardcoded English string in EVERY user-facing file
const fs = require('fs');
const path = require('path');

function scanDir(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.next', '.git', '.gemini'].includes(e.name)) continue;
      scanDir(p, results);
    } else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) {
      if (e.name === 'i18n.ts' || e.name === 'LanguageContext.tsx') continue;
      results.push(p);
    }
  }
  return results;
}

const base = 'src';
const files = scanDir(base);

// Comprehensive patterns for hardcoded English
const patterns = [
  // JSX text content: >English Text<  (3+ char words starting with uppercase)
  { regex: />([A-Z][a-zA-Z]{2,}(?:\s+[a-zA-Z&,.'()\-]+){0,15})\s*</g, name: 'JSX text' },
  // JSX attribute strings: title="English" placeholder="English" 
  { regex: /(?:title|placeholder|alt|aria-label|label)="([A-Z][a-zA-Z\s]{3,})"/g, name: 'JSX attr' },
  // Object property strings: title: 'English', description: 'English'
  { regex: /(?:title|label|description|subtitle|text|heading|message|placeholder|name):\s*'([A-Z][a-zA-Z\s,.']{3,})'/g, name: 'Object prop' },
  { regex: /(?:title|label|description|subtitle|text|heading|message|placeholder|name):\s*"([A-Z][a-zA-Z\s,.']{3,})"/g, name: 'Object prop dq' },
];

// Known exceptions (brand names, code, etc.)
const exceptions = [
  'DreamNova', 'DREAMNOVA', 'Dream Nova', 'Nova Key', 'Nova Keys',
  'Tikkun', 'Azamra', 'Hafatsa', 'HaKlali', 'Breslev', 'Nachman', 'Rabbi',
  'NFC', 'NV-', 'Google', 'Stripe', 'PayPal', 'WhatsApp', 'Instagram',
  'React', 'Next', 'Framer', 'Motion', 'Lucide', 'Vercel', 'Supabase',
  'HTMLElement', 'JavaScript', 'TypeScript', 'USD', 'EUR', 'ILS',
  'Copyright', 'NTAG', 'App Router', 'Radix', 'Tailwind',
  'SWR', 'POST', 'GET', 'JSON', 'API', 'URL', 'CSS', 'HTML',
  'Psalm', 'Lorem', 'Ipsum', 'Email', 'Phone', 'Subject', 'Message',
  'Shalom', 'Baruch', 'Hashem'
];

function isException(text) {
  const t = text.trim();
  if (t.length < 4) return true;
  // Skip if it looks like a CSS class, code ref, or short technical term
  if (/^[a-z]/.test(t)) return true;
  if (/^[A-Z][a-z]{0,2}$/.test(t)) return true; // Very short
  if (/className|onClick|onChange|useState|useEffect|motion\.|framer|animate/.test(t)) return true;
  for (const ex of exceptions) {
    if (t === ex || t.startsWith(ex + ' ') || t === ex.toLowerCase()) return true;
  }
  return false;
}

let totalIssues = 0;
const fileIssues = {};

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const hasT = content.includes('useTranslation') || content.includes("from '@/lib/LanguageContext'");
  const issues = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Skip import lines, comments, type definitions
    if (line.trim().startsWith('import ') || line.trim().startsWith('//') || line.trim().startsWith('*')) continue;
    if (line.includes('interface ') || line.includes('type ') || line.includes('console.')) continue;
    
    for (const pat of patterns) {
      pat.regex.lastIndex = 0;
      let m;
      while ((m = pat.regex.exec(line)) !== null) {
        const text = m[1].trim();
        if (!isException(text) && text.length > 3) {
          issues.push({
            line: i + 1,
            type: pat.name,
            text: text.substring(0, 80)
          });
        }
      }
    }
  }
  
  if (issues.length > 0) {
    const relPath = file.replace('src/', '');
    fileIssues[relPath] = { issues, hasT, count: issues.length };
    totalIssues += issues.length;
  }
}

// Report
console.log('═══════════════════════════════════════════════════');
console.log('  DEEP i18n AUDIT — ALL FILES');
console.log('═══════════════════════════════════════════════════\n');

const sorted = Object.entries(fileIssues).sort((a, b) => b[1].count - a[1].count);
for (const [file, data] of sorted) {
  console.log(`\n⚠️  ${file} (${data.count} issues)${data.hasT ? '' : ' [NO useTranslation!]'}`);
  for (const issue of data.issues) {
    console.log(`  L${issue.line} [${issue.type}]: "${issue.text}"`);
  }
}

console.log('\n═══════════════════════════════════════════════════');
console.log(`TOTAL: ${totalIssues} hardcoded strings in ${sorted.length} files`);
console.log('═══════════════════════════════════════════════════');
