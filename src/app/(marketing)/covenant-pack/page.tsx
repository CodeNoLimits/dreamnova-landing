'use client';

import { useTranslation } from '@/lib/LanguageContext';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { Package, Crown, Users, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    key: 'standard',
    nameKey: 'covenant.standard.name',
    price: 63,
    icon: Package,
    popular: true,
    color: 'border-gold',
    glowColor: 'shadow-gold/20',
    descKey: 'covenant.standard.desc',
    includes: [
      'Nova Key NFC Card (Stainless Steel)',
      'Sacred gold laser engraving',
      'Authentic Breslov Caméa (handmade)',
      'The Source Code of Reality (PDF)',
      'Tikkun HaKlali Digital Access',
      'Azamra Meditation Guide',
      'Hafatsa Ambassador Kit',
    ],
    specs: [
      { labelKey: 'spec.material', value: 'Stainless Steel 0.8mm' },
      { labelKey: 'spec.nfc.chip', value: 'NTAG 215 (504 bytes)' },
      { labelKey: 'spec.finish', value: 'Black Anodized' },
      { labelKey: 'spec.engraving', value: 'Gold Laser' },
    ],
  },
  {
    key: 'platinum',
    nameKey: 'covenant.platinum.name',
    price: 149,
    icon: Crown,
    popular: false,
    color: 'border-cyan-400',
    glowColor: 'shadow-cyan-400/20',
    descKey: 'covenant.platinum.desc',
    includes: [
      'Everything in Covenant Pack',
      'Titanium card with 24K gold plating',
      'Numbered collector edition (#001–#999)',
      'Premium collector box (black mate)',
      'Priority international shipping',
      'Exclusive digital content access',
      'VIP Hafatsa Ambassador status',
    ],
    specs: [
      { labelKey: 'spec.material', value: 'Titanium' },
      { labelKey: 'spec.nfc.chip', value: 'NTAG 215 (504 bytes)' },
      { labelKey: 'spec.plating', value: '24K Gold' },
      { labelKey: 'spec.edition', value: 'Numbered (#001-#999)' },
    ],
  },
  {
    key: 'pair',
    nameKey: 'covenant.pair.name',
    price: 99,
    icon: Users,
    popular: false,
    color: 'border-[#00FF88]',
    glowColor: 'shadow-[#00FF88]/20',
    descKey: 'covenant.pair.desc',
    includes: [
      'Two Nova Key NFC Cards',
      'Masculine & Feminine designs',
      'Two Authentic Breslov Caméas',
      'Full Digital Access for both',
      'Paired Hafatsa tracking',
      'Two Ambassador Kits',
      'Shared referral dashboard',
    ],
    specs: [
      { labelKey: 'spec.material', value: 'Stainless Steel 0.8mm' },
      { labelKey: 'spec.nfc.chips', value: '2× NTAG 215' },
      { labelKey: 'spec.designs', value: 'Masculine + Feminine' },
      { labelKey: 'spec.finish', value: 'Black + Gold Anodized' },
    ],
  },
];

export default function CovenantPackPage() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a0f] to-[#050508]">
        {/* Hero */}
        <section className="relative flex items-center justify-center px-4 pt-32 pb-16 overflow-hidden">
          {/* Fire Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[600px] h-[600px] opacity-10">
              <Image
                src="/images/cyberpunk-fire-bg.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs tracking-[0.3em] text-gold mb-6 uppercase"
            >
              Sacred Technology Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6"
            >
              Choose Your <span className="sacred-gradient">Key</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[#8A8A9A] max-w-2xl mx-auto"
            >
              Three variants, one mission. Each Nova Key unlocks the same sacred digital portal — the difference is in the craft, the materials, and the experience.
            </motion.p>
          </div>
        </section>

        {/* Sacred Artifacts Showcase */}
        <section className="pb-16 px-4">
          <ScrollReveal>
            <div className="relative mx-auto max-w-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-cyan-400/10 to-gold/20 rounded-2xl blur-3xl scale-110 opacity-50" />
              <Image
                src="/images/cyberpunk-camea-hero.png"
                alt="Sacred Artifacts Collection — Breslov Caméas incluses"
                width={700}
                height={700}
                className="relative rounded-2xl shadow-2xl shadow-gold/20 mx-auto"
                priority
              />
              <p className="text-center text-sm text-[#8A8A9A] mt-4">
                Every kit includes authentic Breslov Caméas — handcrafted sacred amulets with the fire of Na Nach.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Product Cards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.key} delay={i * 0.1}>
                <div className={`relative h-full rounded-xl border ${product.color}/20 bg-gradient-to-b from-[#0E0E1A] to-[#0A0A12] p-8 hover:${product.color}/50 transition-all duration-300 flex flex-col`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-mono text-xs tracking-wider px-4 py-1 rounded-full font-bold uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <product.icon className={`w-6 h-6 ${product.key === 'standard' ? 'text-gold' : product.key === 'platinum' ? 'text-cyan-400' : 'text-[#00FF88]'}`} />
                    <h3 className="font-display text-xl font-bold">{t(product.nameKey)}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold sacred-gradient">${product.price}</span>
                    <span className="text-[#5A5A6A] ml-2 text-sm">{t('covenant.onetime')}</span>
                  </div>
                  <p className="text-[#8A8A9A] text-sm mb-6 leading-relaxed">{t(product.descKey)}</p>

                  {/* What's Included */}
                  <div className="mb-6 flex-1">
                    <p className="font-mono text-xs tracking-wider text-[#5A5A6A] uppercase mb-3">{t('covenant.includes')}</p>
                    <ul className="space-y-2">
                      {product.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-[#C0C0C0]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specs */}
                  <div className="mb-6 pt-4 border-t border-[#1A1A2E]">
                    <p className="font-mono text-xs tracking-wider text-[#5A5A6A] uppercase mb-3">{t("covenant.specifications")}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {product.specs.map((spec, j) => (
                        <div key={j}>
                          <div className="font-mono text-[0.6rem] text-[#5A5A6A] uppercase">{t(spec.labelKey)}</div>
                          <div className="text-sm text-[#C0C0C0]">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="/checkout"
                    className={`w-full text-center py-3 px-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      product.popular
                        ? 'bg-gradient-to-r from-gold to-gold/80 text-black hover:from-gold/90 hover:to-gold/70'
                        : 'border border-gold/30 text-gold hover:bg-gold/10'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                    Get {t(product.nameKey)} — ${product.price}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-center mb-12">
                Compare <span className="sacred-gradient">{t("covenant.editions")}</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#1A1A2E]">
                      <th className="text-left py-4 pr-4 text-[#5A5A6A] font-mono text-xs uppercase tracking-wider">{t("covenant.feature")}</th>
                      <th className="py-4 px-4 text-gold font-display text-base">{t("covenant.standard")}</th>
                      <th className="py-4 px-4 text-cyan-400 font-display text-base">{t("covenant.platinum")}</th>
                      <th className="py-4 px-4 text-[#00FF88] font-display text-base">{t("covenant.pair")}</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#C0C0C0]">
                    {[
                      { feature: 'Nova Key NFC Card', standard: '1×', platinum: '1×', pair: '2×' },
                      { feature: 'Material', standard: 'Steel', platinum: 'Titanium', pair: 'Steel' },
                      { feature: 'Gold Finish', standard: 'Laser', platinum: '24K Plated', pair: 'Laser' },
                      { feature: 'Breslov Caméa', standard: '✓', platinum: '✓', pair: '2×' },
                      { feature: 'Digital Access', standard: '✓', platinum: '✓', pair: '2× Accounts' },
                      { feature: 'Collector Edition', standard: '—', platinum: 'Numbered', pair: '—' },
                      { feature: 'Premium Box', standard: '—', platinum: '✓', pair: '—' },
                      { feature: 'Priority Shipping', standard: '—', platinum: '✓', pair: '—' },
                      { feature: 'VIP Status', standard: '—', platinum: '✓', pair: '—' },
                      { feature: 'Price', standard: '$63', platinum: '$149', pair: '$99' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#1A1A2E]/50 hover:bg-gold/[0.02]">
                        <td className="py-3 pr-4 font-medium">{row.feature}</td>
                        <td className="py-3 px-4 text-center">{row.standard}</td>
                        <td className="py-3 px-4 text-center">{row.platinum}</td>
                        <td className="py-3 px-4 text-center">{row.pair}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Value Breakdown */}
        <section className="py-16 px-4 bg-[#0A0A12]">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold mb-6">
                <span className="sacred-gradient">$100+</span> of Value for <span className="text-gold">$63</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { item: 'Metal NFC Card', value: '$40-80' },
                  { item: 'Handmade Caméa', value: '$15-30' },
                  { item: 'Academic Paper', value: '$20' },
                  { item: 'Digital Portal', value: '$15' },
                ].map((v, i) => (
                  <div key={i} className="p-4 rounded-lg border border-gold/10 bg-gold/[0.02]">
                    <div className="font-mono text-xs text-gold mb-1">{v.value}</div>
                    <div className="text-sm text-[#8A8A9A]">{v.item}</div>
                  </div>
                ))}
              </div>
              <p className="text-[#8A8A9A] mb-8">
                The Covenant Pack is designed to be a premium, sacred object at an accessible price.
                The $63 price point is not arbitrary — it&apos;s the gematria of SaG (סג), a Kabbalistic divine name.
              </p>
              <a href="/checkout" className="btn-sacred-filled inline-flex">
                <ArrowRight className="w-4 h-4" />
                Get Your Nova Key — $63
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
