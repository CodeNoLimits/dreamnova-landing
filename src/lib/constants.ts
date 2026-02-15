// ═══════════════════════════════════════════
// DREAM NOVA — SACRED CONSTANTS
// Na Nach Nachma Nachman MeUman
// ═══════════════════════════════════════════

export const SITE = {
  name: 'Dream Nova',
  tagline: 'Ne Calculez Plus. Vivez.',
  taglineEn: 'Stop Calculating. Start Living.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamnova.com',
  email: 'hello@dreamnova.com',
  location: 'Jerusalem, Israel',
} as const;

// Sacred Color Palette
export const COLORS = {
  gold: '#D4AF37',
  goldLight: '#F0D060',
  goldGlow: 'rgba(212, 175, 55, 0.4)',
  neonBlue: '#00D4FF',
  neonBlueDim: '#0099BB',
  neonGlow: 'rgba(0, 212, 255, 0.3)',
  deepBlack: '#050508',
  darkSurface: '#0A0A12',
  darkCard: '#0E0E1A',
  darkBorder: '#1A1A2E',
  textPrimary: '#E8E6E3',
  textSecondary: '#8A8A9A',
  textMuted: '#5A5A6A',
  danger: '#FF3366',
  dangerGlow: 'rgba(255, 51, 102, 0.3)',
  healing: '#00FF88',
  healingGlow: 'rgba(0, 255, 136, 0.3)',
} as const;

// Sacred Numbers
export const SACRED = {
  price: 63, // Gematria of SaG (סג) — Kabbalistic divine name
  priceCents: 6300,
  pricePlatinum: 149,
  pricePlatinumCents: 14900,
  pricePair: 99,
  pricePairCents: 9900,
  gematriaNachman: 148, // נחמן (Nachman) = 148; Full Petek phrase = 491
  mission: 63_000_000, // 63M$ Hafatsa mission
  targetKeys: 1_000_000, // 1M Nova Keys
} as const;

// Hafatsa Points System
export const HAFATSA_POINTS = {
  scan: 1,
  share: 5,
  referralPurchase: 63,
  freeDistribution: 10,
  milestones: [
    { points: 10, title: 'Breslov Initiate', titleHe: 'חניך ברסלב' },
    { points: 50, title: 'Hafatsa Ambassador', titleHe: 'שגריר הפצה' },
    { points: 100, title: 'Light Bearer', titleHe: 'נושא אור' },
    { points: 613, title: 'Tikkun Master', titleHe: 'בעל תיקון' },
  ],
} as const;

// Product variants
export const PRODUCTS = {
  standard: {
    name: 'The Covenant Pack',
    nameHe: 'חבילת הברית',
    slug: 'covenant-pack',
    price: SACRED.price,
    priceCents: SACRED.priceCents,
    description: 'Nova Key + Caméa + Digital Access',
    includes: [
      'Nova Key NFC Card (Stainless Steel, Gold Engraving)',
      'Authentic Breslov Caméa',
      'The Source Code of Reality (PDF)',
      'Tikkun HaKlali Digital',
      'Azamra Meditation Guide',
      'Hafatsa Ambassador Kit',
    ],
  },
  platinum: {
    name: 'Nova Key Platinum',
    nameHe: 'נובה קי פלטינום',
    slug: 'nova-key-platinum',
    price: SACRED.pricePlatinum,
    priceCents: SACRED.pricePlatinumCents,
    description: 'Titanium Edition, 24K Gold, Numbered',
    includes: [
      'Everything in Covenant Pack',
      'Titanium card with 24K gold plating',
      'Numbered collector edition',
      'Premium collector box',
      'Priority shipping',
    ],
  },
  pair: {
    name: 'Nova Key Pair',
    nameHe: 'זוג נובה קי',
    slug: 'nova-key-pair',
    price: SACRED.pricePair,
    priceCents: SACRED.pricePairCents,
    description: 'Two Keys — Masculine & Feminine',
    includes: [
      'Two Nova Key NFC Cards',
      'Two Authentic Breslov Caméas',
      'Full Digital Access for both',
      'Paired Hafatsa tracking',
    ],
  },
} as const;

// Shipping rates
export const SHIPPING = {
  israel: { label: 'Israel', price: 500, days: '7-10' },
  usa: { label: 'United States', price: 800, days: '10-15' },
  europe: { label: 'Europe', price: 1200, days: '15-20' },
  world: { label: 'International', price: 1500, days: '20-30' },
  freeThreshold: 3, // Free shipping on 3+ units
} as const;

// Navigation links
export const NAV_LINKS = [
  { label: "L'Entropie", href: '#entropy', labelEn: 'The Problem' },
  { label: 'Nova-Tam', href: '#solution', labelEn: 'The Solution' },
  { label: 'Le Modèle 63', href: '#pricing', labelEn: 'The $63 Model' },
  { label: 'Tikkun', href: '#manifesto', labelEn: 'Tikkun' },
] as const;

// Academic contacts (from master docs)
export const ACADEMIC_CONTACTS = [
  { name: 'Dr. Hyman M. Schipper', institution: 'McGill University', field: 'Kabbalah-Physics' },
  { name: 'Prof. Zvi Mark', institution: 'Bar-Ilan University', field: 'Breslov Studies' },
  { name: 'Prof. Moshe Idel', institution: 'Hebrew University', field: 'Kabbalah' },
] as const;

// Grant targets (from funding report)
export const GRANTS = [
  { name: 'UpStart Venture Accelerator', amount: 100_000, tier: 1 },
  { name: 'John Templeton Foundation', amount: 300_000, tier: 1 },
  { name: 'Israel Innovation Authority (Tnufa)', amount: 55_000, tier: 1 },
  { name: 'Templeton World Charity', amount: 100_000, tier: 2 },
  { name: 'Lippman Kanfer Foundation', amount: 50_000, tier: 2 },
  { name: 'NIH SBIR Phase I', amount: 306_872, tier: 2 },
  { name: 'JNext Jerusalem Municipal', amount: 20_000, tier: 3 },
] as const;
