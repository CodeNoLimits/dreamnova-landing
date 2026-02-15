'use client';

import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SacredButton } from '@/components/shared/sacred-button';
import { motion } from 'framer-motion';
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
                  The Sacred Key to Transformation
                </motion.p>
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] via-cyan-300 to-[#D4AF37] bg-clip-text text-transparent leading-tight"
                >
                  Nova Key
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  Unlock the power of quantum consciousness. The Nova Key is more than
                  a device—it's a portal to your highest potential. Tap into sacred
                  geometry and advanced NFC technology to transform your reality.
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link href="/checkout">
                  <SacredButton>
                    <span className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Get Nova Key
                    </span>
                  </SacredButton>
                </Link>
                <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-[#D4AF37]" />
                <span>30-day satisfaction guarantee • Lifetime activation</span>
              </motion.div>
            </motion.div>

            {/* Right Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 lg:h-full min-h-96 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-[#D4AF37]/20 rounded-3xl blur-2xl" />
              <div className="relative z-10 flex items-center justify-center w-64 h-80 bg-gradient-to-br from-[#D4AF37]/10 to-cyan-500/10 border-2 border-[#D4AF37]/30 rounded-3xl">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#D4AF37] to-cyan-400 rounded-full opacity-20 blur-xl" />
                  <p className="text-gray-500 text-sm">Nova Key Product Image</p>
                </div>
              </div>
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
                Engineered for <span className="text-[#D4AF37]">Transformation</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Every detail of the Nova Key is designed to amplify your connection to
                quantum consciousness and unlock your potential.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '⚛️',
                  title: 'NFC Technology',
                  description:
                    'Advanced near-field communication for seamless activation and quantum resonance tuning.',
                },
                {
                  icon: '✨',
                  title: 'Sacred Geometry',
                  description:
                    'Embedded with ancient geometric patterns that align with universal frequencies.',
                },
                {
                  icon: '🛡️',
                  title: 'Stainless Steel',
                  description:
                    'Durable aerospace-grade materials built to last a lifetime of transformations.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureVariants}
                  className="p-8 bg-gradient-to-br from-[#D4AF37]/10 to-cyan-500/10 border border-[#D4AF37]/30 rounded-2xl hover:border-[#D4AF37]/60 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
                How It <span className="text-cyan-400">Works</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Three simple steps to unlock your quantum consciousness potential
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connection Lines */}
              <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent hidden md:block" />

              {[
                {
                  step: '01',
                  title: 'Scan',
                  description:
                    'Use your smartphone or Nova device to scan the Nova Key. The NFC chip activates instantly.',
                  color: 'cyan',
                },
                {
                  step: '02',
                  title: 'Unlock',
                  description:
                    'Access your personalized quantum frequency library. Unlock exclusive transformational content.',
                  color: 'yellow',
                },
                {
                  step: '03',
                  title: 'Transform',
                  description:
                    'Experience the power of sacred geometry and quantum consciousness. Start your transformation journey.',
                  color: 'cyan',
                },
              ].map((item, index) => (
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
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
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
              Ready to Transform?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8">
              Join thousands of quantum pioneers unlocking their highest potential with the Nova Key.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/checkout">
                <SacredButton className="px-12 py-4 text-lg">
                  <span className="flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    Unlock Your Potential
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
