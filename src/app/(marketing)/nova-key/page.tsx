'use client';

import { useTranslation } from '@/lib/LanguageContext';

import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SacredButton } from '@/components/shared/sacred-button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Shield } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

export default function NovaKeyPage() {
  const { t } = useTranslation();

  const features = [
    { icon: '⚛️', titleKey: 'nova.feat.nfc.title', descKey: 'nova.feat.nfc.desc' },
    { icon: '✨', titleKey: 'nova.feat.geometry.title', descKey: 'nova.feat.geometry.desc' },
    { icon: '🛡️', titleKey: 'nova.feat.steel.title', descKey: 'nova.feat.steel.desc' },
  ];

  const steps = [
    { step: '01', titleKey: 'nova.step.scan.title', descKey: 'nova.step.scan.desc', color: 'cyan' },
    { step: '02', titleKey: 'nova.step.unlock.title', descKey: 'nova.step.unlock.desc', color: 'yellow' },
    { step: '03', titleKey: 'nova.step.transform.title', descKey: 'nova.step.transform.desc', color: 'cyan' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a0f] to-[#050508]">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.p
                  variants={itemVariants}
                  className="text-cyan-400 font-semibold text-lg uppercase tracking-widest"
                >
                  {t('nova.hero.label')}
                </motion.p>
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] via-cyan-300 to-[#D4AF37] bg-clip-text text-transparent leading-tight"
                >
                  {t('nova.hero.title1')}
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  {t('nova.hero.desc')}
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link href="/checkout">
                  <SacredButton>
                    <span className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      {t('nova.cta.title')}
                    </span>
                  </SacredButton>
                </Link>
                <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold">
                  {t('nova.cta.learn')}
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
                <span>{t('nova.guarantee')}</span>
              </motion.div>
            </motion.div>

            {/* Nova Key Card Image */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-[#D4AF37]/20 rounded-3xl blur-3xl" />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [-2, 2, -2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut' as const,
                }}
                className="relative z-10"
              >
                <Image
                  src="/images/nova-key.jpg"
                  alt="Nova Key — NFC Sacred Card"
                  width={600}
                  height={375}
                  className="rounded-2xl shadow-2xl shadow-[#D4AF37]/30"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="relative py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('nova.features.title')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('nova.features.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="p-8 bg-gradient-to-br from-[#D4AF37]/10 to-cyan-500/10 border border-[#D4AF37]/30 rounded-2xl hover:border-[#D4AF37]/60 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{t(feature.titleKey)}</h3>
                  <p className="text-gray-400 leading-relaxed">{t(feature.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="relative py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t('nova.how.title')}
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {t('nova.how.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent hidden md:block" />

              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 5 }}
                    className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-400/10 border-2 border-${item.color}-400/50 flex items-center justify-center group cursor-pointer`}
                  >
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      {item.step}
                    </span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t(item.titleKey)}</h3>
                  <p className="text-gray-400 leading-relaxed">{t(item.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="relative py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 variants={itemVariants} className="text-5xl font-bold text-white mb-6">
              {t('nova.final.title')}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8">
              {t('nova.final.desc')}
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/checkout">
                <SacredButton className="px-12 py-4 text-lg">
                  <span className="flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    {t('nova.final.cta')}
                  </span>
                </SacredButton>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
