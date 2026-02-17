'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/lib/LanguageContext';
import { LOCALE_LIST, type Locale } from '@/lib/i18n';
import { playChime } from '@/lib/sound-manager';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { t, locale, setLocale, config } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    playChime();
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gold/20 hover:border-gold/50 bg-sacred-surface/50 backdrop-blur-sm transition-all duration-300"
        aria-label={t("aria.select.language")}
      >
        <Globe className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors" />
        <span className="text-sm font-mono">{config.flag}</span>
        <span className="text-xs text-gold/60 hidden sm:inline">{config.nativeName}</span>
        {/* Holographic shimmer on hover */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gold/5 via-cyan-sacred/10 to-gold/5 transition-opacity duration-500 pointer-events-none" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-56 bg-[#0E0E1A]/95 backdrop-blur-xl border border-gold/20 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Holographic top border */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            
            <div className="p-2 max-h-80 overflow-y-auto scrollbar-thin">
              {LOCALE_LIST.map((loc) => (
                <button
                  key={loc.code}
                  onClick={() => handleSelect(loc.code)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                    locale === loc.code
                      ? 'bg-gold/10 text-gold border border-gold/20'
                      : 'hover:bg-gold/5 text-[#C0C0C0] hover:text-white'
                  }`}
                >
                  <span className="text-lg">{loc.flag}</span>
                  <span className="flex-1 text-left font-medium">{loc.nativeName}</span>
                  <span className="text-[10px] font-mono text-gold/40 uppercase">{loc.code}</span>
                  {locale === loc.code && (
                    <motion.div
                      layoutId="active-locale"
                      className="w-1.5 h-1.5 rounded-full bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Holographic bottom border */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-sacred/40 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
