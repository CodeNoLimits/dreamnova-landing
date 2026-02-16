'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/LanguageContext';
import { HolographicShimmer } from './holographic-effects';

/** Shows the ambassador photo for the currently selected language */
export function AmbassadorShowcase() {
  const { locale, config } = useTranslation();

  return (
    <motion.div
      key={locale}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto max-w-sm"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-cyan-sacred/10 to-gold/20 rounded-2xl blur-3xl scale-110 opacity-40" />
      
      <div className="relative overflow-hidden rounded-2xl border border-gold/20 group">
        <HolographicShimmer />
        <Image
          src={`/images/ambassadors/ambassador-${locale}.png`}
          alt={`${config.nativeName} Ambassador wearing Na Nach amulet`}
          width={400}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay with flag and language */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{config.flag}</span>
            <div>
              <p className="text-sm font-display font-bold text-white">{config.nativeName}</p>
              <p className="text-[10px] font-mono text-gold/60 tracking-widest uppercase">
                {config.myFire}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
