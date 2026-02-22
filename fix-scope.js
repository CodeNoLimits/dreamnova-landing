// Fix missing { t } in sub-components + add missing imports
const fs = require('fs');

// 1. Hafatsa: ActivityCard needs { t }
let h = fs.readFileSync('src/app/(dashboard)/hafatsa/page.tsx', 'utf8');
if (!h.includes('function ActivityCard({ activity }: { activity: HafatsaActivity }) {\n  const { t }')) {
  h = h.replace(
    'function ActivityCard({ activity }: { activity: HafatsaActivity }) {',
    'function ActivityCard({ activity }: { activity: HafatsaActivity }) {\n  const { t } = useTranslation();'
  );
}
fs.writeFileSync('src/app/(dashboard)/hafatsa/page.tsx', h);
console.log('1. hafatsa ActivityCard: added { t }');

// 2. Pricing section: needs { t } + import
let p = fs.readFileSync('src/components/marketing/pricing-section.tsx', 'utf8');
if (!p.includes('const { t }') && p.includes('{t(')) {
  p = p.replace(/(export default function \w+[^{]*\{)/, '$1\n  const { t } = useTranslation();');
}
if (!p.includes('useTranslation') && p.includes('{t(')) {
  const firstImport = p.indexOf('import ');
  p = p.slice(0, firstImport) + "import { useTranslation } from '@/lib/LanguageContext';\n" + p.slice(firstImport);
}
fs.writeFileSync('src/components/marketing/pricing-section.tsx', p);
console.log('2. pricing-section: added { t } + import');

// 3. Checkout: needs { t } + import
let c = fs.readFileSync('src/app/(shop)/checkout/page.tsx', 'utf8');
if (!c.includes('const { t }') && c.includes('{t(')) {
  if (!c.includes('useTranslation')) {
    c = c.replace('"use client";', '"use client";\n\nimport { useTranslation } from "@/lib/LanguageContext";');
  }
  c = c.replace(/(export default function \w+[^{]*\{)/, '$1\n  const { t } = useTranslation();');
}
fs.writeFileSync('src/app/(shop)/checkout/page.tsx', c);
console.log('3. checkout: added { t } + import');

// 4. Dashboard layout: needs { t } + import
let l = fs.readFileSync('src/app/(dashboard)/layout.tsx', 'utf8');
if (!l.includes('const { t }') && l.includes('{t(')) {
  if (!l.includes('useTranslation')) {
    l = l.replace("'use client';", "'use client';\n\nimport { useTranslation } from '@/lib/LanguageContext';");
  }
  l = l.replace(/(export default function \w+[^{]*\{)/, '$1\n  const { t } = useTranslation();');
}
fs.writeFileSync('src/app/(dashboard)/layout.tsx', l);
console.log('4. layout: added { t } + import');

// 5. Language selector: needs { t } check  
let ls = fs.readFileSync('src/components/shared/language-selector.tsx', 'utf8');
if (!ls.includes('const { t }') && ls.includes('{t(')) {
  ls = ls.replace(/(export default function \w+[^{]*\{)/, '$1\n  const { t } = useTranslation();');
  // Check import
  if (!ls.includes("from '@/lib/LanguageContext'") && !ls.includes("from \"@/lib/LanguageContext\"")) {
    ls = ls.replace("'use client';", "'use client';\n\nimport { useTranslation } from '@/lib/LanguageContext';");
  }
}
fs.writeFileSync('src/components/shared/language-selector.tsx', ls);
console.log('5. language-selector: checked');

console.log('\n✅ All sub-component t() scope fixes applied');
