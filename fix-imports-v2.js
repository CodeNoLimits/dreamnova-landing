#!/usr/bin/env node
/**
 * Add missing useTranslation import to specific files
 */

const fs = require('fs');

const files = [
  'src/app/(dashboard)/nfc/page.tsx',
  'src/app/(dashboard)/orders/page.tsx',
  'src/app/(dashboard)/overview/page.tsx',
  'src/app/(marketing)/about/page.tsx',
  'src/app/(marketing)/covenant-pack/page.tsx',
  'src/app/(marketing)/nova-key/page.tsx',
  'src/app/(marketing)/privacy/page.tsx',
  'src/app/(marketing)/refund/page.tsx',
  'src/app/(marketing)/source-code/page.tsx',
  'src/app/(marketing)/terms/page.tsx',
  'src/app/(portal)/tikkun/page.tsx',
  'src/app/(shop)/success/page.tsx',
];

let fixed = 0;
let alreadyHad = 0;
let errors = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');

    // Check if import already exists
    if (content.includes("from '@/lib/hooks/use-translation'")) {
      console.log(`⏭️  Already has import: ${file}`);
      alreadyHad++;
      continue;
    }

    // Check if file uses useTranslation
    if (!content.includes('useTranslation()')) {
      console.log(`⚠️  Doesn't use useTranslation: ${file}`);
      continue;
    }

    // Add the import after "use client" or at the beginning
    let newContent;
    if (content.startsWith('"use client";')) {
      newContent = content.replace(
        '"use client";',
        '"use client";\n\nimport { useTranslation } from \'@/lib/hooks/use-translation\';'
      );
    } else if (content.includes('"use client";')) {
      newContent = content.replace(
        '"use client";',
        '"use client";\n\nimport { useTranslation } from \'@/lib/hooks/use-translation\';'
      );
    } else {
      // Find first import and add before it
      const firstImportMatch = content.match(/^import .+ from .+;$/m);
      if (firstImportMatch) {
        newContent = content.replace(
          firstImportMatch[0],
          `import { useTranslation } from '@/lib/hooks/use-translation';\n${firstImportMatch[0]}`
        );
      } else {
        newContent = `import { useTranslation } from '@/lib/hooks/use-translation';\n\n${content}`;
      }
    }

    fs.writeFileSync(file, newContent, 'utf8');
    fixed++;
    console.log(`✅ Fixed: ${file}`);
  } catch (error) {
    console.error(`❌ Error processing ${file}: ${error.message}`);
    errors++;
  }
}

console.log('');
console.log(`📊 Summary:`);
console.log(`   ✅ Fixed: ${fixed} files`);
console.log(`   ⏭️  Already had import: ${alreadyHad} files`);
console.log(`   ❌ Errors: ${errors} files`);
console.log(`   📝 Total processed: ${files.length} files`);
