// Comprehensive i18n audit: find ALL hardcoded English text in ALL pages + components
const fs = require('fs');
const path = require('path');

function findPageFiles(dir, files = []) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) findPageFiles(full, files);
    else if (f === 'page.tsx') files.push(full);
  }
  return files;
}

const componentFiles = [
  'src/components/shared/navbar.tsx',
  'src/components/shared/footer.tsx',
  'src/components/marketing/hero-section.tsx',
  'src/components/marketing/problem-section.tsx',
  'src/components/marketing/features-section.tsx',
  'src/components/marketing/testimonials-section.tsx',
  'src/components/marketing/authentic-camea-section.tsx',
  'src/components/marketing/faq-section.tsx',
  'src/components/marketing/cta-section.tsx',
  'src/components/marketing/hafatsa-section.tsx',
  'src/components/shop/checkout-form.tsx',
].filter(f => fs.existsSync(f));

const pages = findPageFiles('src/app');
const allFiles = [...pages, ...componentFiles];

let totalIssues = 0;
let cleanFiles = 0;

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const relPath = path.relative('.', file);
  const hasT = content.includes('useTranslation');
  const issues = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // Skip non-JSX lines
    if (line.startsWith('import ') || line.startsWith('//') || line.startsWith('*') || line.startsWith('/*')) continue;
    if (line.startsWith('const ') && !line.includes('>')) continue;
    if (line.match(/^(export|function|return|type |interface )/)) continue;
    if (line.includes('className=') && !line.includes('>')) continue;

    // Find hardcoded English text in JSX (>Text<)
    const matches = line.match(/>[A-Z][a-zA-Z\s',.!\-\u2014\u00b7:?&;]{4,}/g);
    if (matches) {
      for (const m of matches) {
        const text = m.substring(1).trim();
        // Skip if it's a t() call, variable, component, or tech term
        if (text.startsWith('{')) continue;
        if (text.startsWith('<')) continue;
        if (text.match(/^[A-Z][a-z]+$/) && text.length < 12) continue;
        if (text.match(/^(NFC|PDF|API|CSS|HTML|SVG|URL|JSON|NTAG|Na Nach)/)) continue;
        issues.push({ line: i + 1, text: text.substring(0, 60) });
      }
    }

    // Find hardcoded strings in object literals (title: 'English Text')
    const dataMatch = line.match(/(?:title|label|description|desc|text|heading|subtitle|name|placeholder):\s*['"]([A-Z][^'"]{4,})['"]/);
    if (dataMatch && !line.includes('Key') && !line.includes('key')) {
      issues.push({ line: i + 1, text: '(data) ' + dataMatch[1].substring(0, 50) });
    }
  }

  if (issues.length > 0) {
    console.log('\n\u26a0\ufe0f  ' + relPath + (hasT ? '' : ' [NO useTranslation!]'));
    for (const issue of issues) {
      console.log('   L' + issue.line + ': ' + issue.text);
    }
    totalIssues += issues.length;
  } else {
    console.log('\u2705 ' + relPath);
    cleanFiles++;
  }
}

console.log('\n=============================');
console.log('Total files scanned: ' + allFiles.length);
console.log('Clean files: ' + cleanFiles + '/' + allFiles.length);
console.log('Total potential issues: ' + totalIssues);
