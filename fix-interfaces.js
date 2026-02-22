// Fix TypeScript interfaces: rename properties in interfaces to match the new keys
const fs = require('fs');

// Hafatsa: description -> descKey in interface
let haf = fs.readFileSync('src/app/(dashboard)/hafatsa/page.tsx', 'utf8');
haf = haf.replace(/description: string;/g, 'descKey: string;');
fs.writeFileSync('src/app/(dashboard)/hafatsa/page.tsx', haf);
console.log('1. hafatsa interface fixed');

// NFC: name -> nameKey in interface
let nfc = fs.readFileSync('src/app/(dashboard)/nfc/page.tsx', 'utf8');
nfc = nfc.replace(/name: string;/g, 'nameKey: string;');
fs.writeFileSync('src/app/(dashboard)/nfc/page.tsx', nfc);
console.log('2. nfc interface fixed');

// Overview: check if labelKey needs interface fix
let ov = fs.readFileSync('src/app/(dashboard)/overview/page.tsx', 'utf8');
if (ov.includes('label: string') && ov.includes('labelKey:')) {
  ov = ov.replace(/label: string;/g, 'labelKey: string;');
  fs.writeFileSync('src/app/(dashboard)/overview/page.tsx', ov);
  console.log('3. overview interface fixed');
}

// Dashboard layout: check if label needs fix
let layout = fs.readFileSync('src/app/(dashboard)/layout.tsx', 'utf8');
if (layout.includes('label: string') && layout.includes('labelKey:')) {
  layout = layout.replace(/label: string;/g, 'labelKey: string;');
  fs.writeFileSync('src/app/(dashboard)/layout.tsx', layout);
  console.log('4. layout interface fixed');
} else if (layout.includes("label:") && layout.includes("labelKey:")) {
  // No explicit interface, just check for inline objects
  console.log('4. layout: no explicit interface found, skipping');
}

// Pricing section: check if label needs fix
let pricing = fs.readFileSync('src/components/marketing/pricing-section.tsx', 'utf8');
if (pricing.includes('label: string') && pricing.includes('labelKey:')) {
  pricing = pricing.replace(/label: string;/g, 'labelKey: string;');
  fs.writeFileSync('src/components/marketing/pricing-section.tsx', pricing);
  console.log('5. pricing interface fixed');
}

console.log('\n✅ All interfaces fixed');
