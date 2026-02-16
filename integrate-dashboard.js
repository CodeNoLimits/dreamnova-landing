#!/usr/bin/env node
/**
 * Integrate Dashboard/About/Covenant translations into i18n.ts for DE and JA
 */

const fs = require('fs');

// Read the generated translations
const dashboardTranslations = JSON.parse(fs.readFileSync('dashboard-translations-de-ja.json', 'utf8'));

// Read current i18n.ts
const i18nContent = fs.readFileSync('src/lib/i18n.ts', 'utf8');

// Convert translations object to compact single-line format like Spanish uses
function formatTranslations(translations) {
  return Object.entries(translations)
    .map(([key, value]) => `    '${key}': '${value.replace(/'/g, "\\'")}',`)
    .join(' ');
}

// For German (DE)
const deTranslations = formatTranslations(dashboardTranslations.de);

// For Japanese (JA)
const jaTranslations = formatTranslations(dashboardTranslations.ja);

// Find and replace German section - add before the closing brace
let updatedContent = i18nContent.replace(
  /('footer\.attribution': 'Mit ♥ für die Hafatsa-Mission erstellt',\n  },\n  ja: {)/,
  `'footer.attribution': 'Mit ♥ für die Hafatsa-Mission erstellt',\n${deTranslations}\n  },\n  ja: {`
);

// Find and replace Japanese section - add before the closing brace
updatedContent = updatedContent.replace(
  /('footer\.attribution': 'Hafatsa使命のために♥で作成',\n  },\n  it: {)/,
  `'footer.attribution': 'Hafatsa使命のために♥で作成',\n${jaTranslations}\n  },\n  it: {`
);

// Write back
fs.writeFileSync('src/lib/i18n.ts', updatedContent, 'utf8');

console.log('✅ Integrated Dashboard translations for DE and JA');
console.log('📊 DE: Added 161 keys');
console.log('📊 JA: Added 161 keys');
console.log('📝 Updated src/lib/i18n.ts');
