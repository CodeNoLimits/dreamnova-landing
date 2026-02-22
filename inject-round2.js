// Inject Round 2 keys + success keys into i18n.ts
const fs = require('fs');
let i18n = fs.readFileSync('src/lib/i18n.ts', 'utf8');

const keyFiles = ['round2-keys.json', 'success-keys.json'];
const localeOrder = ['fr','en','es','he','zh','ko','pt','de','ja','it'];
let totalKeys = 0;

const transBlockStart = i18n.indexOf('const translations = {');
if (transBlockStart === -1) { console.log('ERROR: translations block not found!'); process.exit(1); }

for (const keyFile of keyFiles) {
  if (!fs.existsSync(keyFile)) { console.log('⏭️ ' + keyFile + ' not found'); continue; }
  const keys = JSON.parse(fs.readFileSync(keyFile, 'utf8'));
  
  for (const locale of localeOrder) {
    const localeKeys = keys[locale];
    if (!localeKeys) continue;
    
    const localeSearch = locale + ': {';
    let blockStart = i18n.indexOf(localeSearch, transBlockStart);
    if (blockStart === -1) continue;
    
    let depth = 0, insertPos = -1;
    for (let i = blockStart; i < i18n.length; i++) {
      if (i18n[i] === '{') depth++;
      if (i18n[i] === '}') { depth--; if (depth === 0) { insertPos = i; break; } }
    }
    if (insertPos === -1) continue;
    
    const blockContent = i18n.substring(blockStart, insertPos);
    let keysStr = '', count = 0;
    
    for (const [k, v] of Object.entries(localeKeys)) {
      const keySearch = "'" + k + "':";
      if (blockContent.includes(keySearch)) continue;
      const safeV = String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      keysStr += "    '" + k + "': '" + safeV + "',\n";
      count++;
    }
    
    if (count > 0) {
      i18n = i18n.slice(0, insertPos) + keysStr + '  ' + i18n.slice(insertPos);
      totalKeys += count;
    }
  }
  console.log('✅ ' + keyFile + ': processed');
}

// Dedup
const lines = i18n.split('\n');
const keyPattern = /^\s+'([^']+)':\s/;
let blockKeys = new Set();
let duplicateLines = new Set();
let inTranslations = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const translations')) inTranslations = true;
  if (!inTranslations) continue;
  if (lines[i].match(/^\s{2}\w{2}:\s*\{/)) { blockKeys = new Set(); continue; }
  if (lines[i].match(/^\s{2}\},?\s*$/)) { blockKeys = new Set(); continue; }
  const m = lines[i].match(keyPattern);
  if (m) {
    if (blockKeys.has(m[1])) duplicateLines.add(i);
    else blockKeys.add(m[1]);
  }
}
if (duplicateLines.size > 0) {
  const newLines = lines.filter((_, i) => !duplicateLines.has(i));
  i18n = newLines.join('\n');
  console.log('🧹 Deduped ' + duplicateLines.size + ' lines');
}

fs.writeFileSync('src/lib/i18n.ts', i18n);
console.log('\n✅ Total new keys injected: ' + totalKeys);
