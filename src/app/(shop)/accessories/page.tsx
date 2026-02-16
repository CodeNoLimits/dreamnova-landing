'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Cpu, ShoppingCart, Star, Sparkles, Zap, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { formatAccessoryPrice } from '@/lib/i18n';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

const accessories = [
  { key: 'bracelet', image: '/images/acc-bracelet.png', tier: 'standard' as const, icon: Sparkles },
  { key: 'pendant', image: '/images/acc-pendant.png', tier: 'standard' as const, icon: Star },
  { key: 'ring', image: '/images/acc-bracelet.png', tier: 'premium' as const, icon: Zap },
  { key: 'charm', image: '/images/acc-pendant.png', tier: 'standard' as const, icon: Sparkles },
  { key: 'necklace', image: '/images/acc-bracelet.png', tier: 'premium' as const, icon: Star },
  { key: 'cufflinks', image: '/images/acc-pendant.png', tier: 'premium' as const, icon: Zap },
  { key: 'pin', image: '/images/acc-bracelet.png', tier: 'standard' as const, icon: Star },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

function NfcToggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  const { t } = useTranslation();
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
        enabled
          ? 'bg-cyan/20 text-cyan border border-cyan/50 shadow-[0_0_12px_rgba(0,217,255,0.3)]'
          : 'bg-gray-900/50 text-gray-500 border border-gray-800 hover:border-gray-600'
      }`}
    >
      <Cpu className="w-3 h-3" />
      <span>NFC</span>
      <span className={`w-2 h-2 rounded-full ${enabled ? 'bg-cyan animate-pulse' : 'bg-gray-700'}`} />
    </button>
  );
}

export default function AccessoriesPage() {
  const { t, config } = useTranslation();
  const [nfcState, setNfcState] = useState<Record<string, boolean>>({});
  const locale = config.code;

  const toggleNfc = (key: string) => {
    setNfcState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-20 relative overflow-hidden">
        {/* Cyberpunk Grid Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,217,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,217,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[200px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back + Header */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-mono">DREAMNOVA</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-wider">
              <span className="text-gold">{t('acc.title')}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono tracking-wide">
              {t('acc.subtitle')}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-cyan/60 text-xs font-mono">
              <Cpu className="w-3 h-3" />
              <span>{t('acc.nfc.desc')}</span>
            </div>
          </motion.div>

          {/* SUPER PACK Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16 group cursor-pointer"
          >
            <div className="absolute -inset-[1px] bg-gradient-to-r from-gold via-cyan to-gold rounded-2xl opacity-70 group-hover:opacity-100 blur-sm transition-opacity" />
            <div className="relative bg-black rounded-2xl p-6 md:p-8 border border-gold/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-cyan/5" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3 relative">
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/images/acc-superpack.png"
                      alt="SUPER PACK"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1 mb-4">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span className="text-gold text-xs font-mono tracking-widest">{t('acc.superpack')}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                    {t('acc.superpack.desc')}
                  </h2>
                  <p className="text-gray-400 mb-6 text-sm">
                    {t('acc.superpack.includes')}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl md:text-5xl font-bold na-nach-gradient">
                        {formatAccessoryPrice(locale, 'superpack')}
                      </span>
                    </div>
                    <button className="bg-gradient-to-r from-gold to-gold/80 text-black font-display font-bold uppercase tracking-wider px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 text-sm">
                      <ShoppingCart className="w-4 h-4 inline mr-2" />
                      {t('acc.cta')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {accessories.map((acc) => {
              const Icon = acc.icon;
              const hasNfc = nfcState[acc.key] || false;
              const basePrice = acc.tier === 'premium'
                ? formatAccessoryPrice(locale, 'premium')
                : formatAccessoryPrice(locale, 'standard');

              return (
                <motion.div
                  key={acc.key}
                  variants={cardVariants}
                  className="group relative"
                >
                  {/* Holographic border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan/40 via-gold/20 to-cyan/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                  <div className="relative bg-sacred-surface rounded-2xl border border-gray-800 group-hover:border-cyan/30 overflow-hidden transition-all duration-500">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={acc.image}
                        alt={t(`acc.${acc.key}` as any)}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                      {/* Tier badge */}
                      <div className={`absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-mono tracking-widest uppercase ${
                        acc.tier === 'premium'
                          ? 'bg-gold/20 text-gold border border-gold/30'
                          : 'bg-cyan/20 text-cyan border border-cyan/30'
                      }`}>
                        {t(`acc.tier.${acc.tier}` as any)}
                      </div>

                      {/* Holographic scanline effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,217,255,0.03) 2px, rgba(0,217,255,0.03) 4px)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display text-lg font-bold text-white tracking-wide">
                          {t(`acc.${acc.key}` as any)}
                        </h3>
                        <Icon className="w-5 h-5 text-gold/60 flex-shrink-0 mt-1" />
                      </div>

                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {t(`acc.${acc.key}.desc` as any)}
                      </p>

                      {/* NFC Toggle */}
                      <div className="flex items-center justify-between mb-4">
                        <NfcToggle enabled={hasNfc} onToggle={() => toggleNfc(acc.key)} />
                        {hasNfc && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xs text-cyan/60 font-mono"
                          >
                            +$20
                          </motion.span>
                        )}
                      </div>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl font-bold text-white">
                          {basePrice}
                        </span>
                        <button className="bg-white/5 border border-white/10 hover:border-gold/50 hover:bg-gold/10 text-white font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                          {t('acc.cta')}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom NFC Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-cyan/5 border border-cyan/20 rounded-full px-6 py-3">
              <Cpu className="w-4 h-4 text-cyan" />
              <span className="text-sm text-gray-400">
                <span className="text-cyan font-semibold">{t('acc.nfc.label')}</span> — {t('acc.nfc.desc')}
              </span>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
