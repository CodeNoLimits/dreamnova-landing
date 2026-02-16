#!/usr/bin/env node
/**
 * Add missing useTranslation import to all files that use it
 */

const fs = require('fs');
const { execSync } = require('child_process');

// Find all files that use useTranslation() but don't have the import
const files = execSync(`grep -l "useTranslation()" src/app/**/*.tsx 2>/dev/null || true`, { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(Boolean);

let fixed = 0;
let alreadyHad = 0;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');

  // Check if import already exists
  if (content.includes("from '@/lib/hooks/use-translation'")) {
    alreadyHad++;
    continue;
  }

  // Check if file uses useTranslation
  if (!content.includes('useTranslation()')) {
    continue;
  }

  // Add the import after "use client" or at the beginning
  let newContent;
  if (content.includes('"use client";')) {
    newContent = content.replace(
      '"use client";',
      '"use client";\n\nimport { useTranslation } from \'@/lib/hooks/use-translation\';'
    );
  } else {
    newContent = 'import { useTranslation } from \'@/lib/hooks/use-translation\';\n\n' + content;
  }

  fs.writeFileSync(file, newContent, 'utf8');
  fixed++;
  console.log(`✅ Fixed: ${file}`);
}

console.log('');
console.log(`📊 Summary:`);
console.log(`   ✅ Fixed: ${fixed} files`);
console.log(`   ⏭️  Already had import: ${alreadyHad} files`);
console.log(`   📝 Total processed: ${files.length} files`);
