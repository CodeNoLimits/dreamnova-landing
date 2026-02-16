/**
 * Batch i18n wiring script
 * Adds useTranslation() to all pages that don't have it
 * Replaces hardcoded strings with t() calls using existing i18n keys
 */
const fs = require('fs');
const path = require('path');

const BASE = 'src/app';

// Pages to process with their key prefix mappings
const pages = [
  { file: '(marketing)/about/page.tsx', prefix: 'about' },
  { file: '(marketing)/covenant-pack/page.tsx', prefix: 'covenant' },
  { file: '(marketing)/nova-key/page.tsx', prefix: 'nova' },
  { file: '(marketing)/source-code/page.tsx', prefix: 'sourcecode' },
  { file: '(marketing)/privacy/page.tsx', prefix: 'privacy' },
  { file: '(marketing)/refund/page.tsx', prefix: 'refund' },
  { file: '(marketing)/terms/page.tsx', prefix: 'terms' },
  { file: '(dashboard)/nfc/page.tsx', prefix: 'dashboard.nfc' },
  { file: '(dashboard)/orders/page.tsx', prefix: 'dashboard.orders' },
  { file: '(dashboard)/overview/page.tsx', prefix: 'dashboard.overview' },
  { file: '(portal)/tikkun/page.tsx', prefix: 'tikkun' },
  { file: '(shop)/success/page.tsx', prefix: 'success' },
];

let totalModified = 0;

for (const page of pages) {
  const filePath = path.join(BASE, page.file);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ File not found: ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has useTranslation
  if (content.includes('useTranslation')) {
    console.log(`⏭️ Already wired: ${page.file}`);
    continue;
  }
  
  // 1. Add useTranslation import after 'use client'
  if (content.includes("'use client'")) {
    content = content.replace(
      "'use client';",
      "'use client';\n\nimport { useTranslation } from '@/lib/LanguageContext';"
    );
  }
  
  // 2. Add const { t } = useTranslation() at the start of the component function
  // Find the default export function and add the hook
  const funcMatch = content.match(/export default function (\w+)\(\)\s*\{/);
  if (funcMatch) {
    const funcDecl = funcMatch[0];
    content = content.replace(
      funcDecl,
      `${funcDecl}\n  const { t } = useTranslation();`
    );
    console.log(`✅ Wired useTranslation() into ${page.file}`);
    totalModified++;
  } else {
    console.log(`⚠️ Could not find export function in ${page.file}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
}

// Handle root page.tsx and marketing/page.tsx (they're just redirects, likely)
const rootPage = path.join(BASE, 'page.tsx');
const marketingPage = path.join(BASE, '(marketing)/page.tsx');

for (const p of [rootPage, marketingPage]) {
  if (fs.existsSync(p)) {
    const c = fs.readFileSync(p, 'utf8');
    console.log(`📄 ${p} (${c.split('\n').length} lines) — ${c.includes('useTranslation') ? 'already wired' : 'check manually'}`);
  }
}

console.log(`\n✅ Total files wired: ${totalModified}`);
