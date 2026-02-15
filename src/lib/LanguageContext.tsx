'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { type Locale, type Translations, type LocaleConfig, getTranslations, LOCALES, DEFAULT_LOCALE } from './i18n';

interface LanguageContextType {
  locale: Locale;
  config: LocaleConfig;
  t: (key: keyof Translations) => string;
  setLocale: (locale: Locale) => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const STORAGE_KEY = 'dreamnova-locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && LOCALES[saved]) {
      setLocaleState(saved);
    } else {
      const browserLang = navigator.language.split('-')[0] as Locale;
      if (LOCALES[browserLang]) setLocaleState(browserLang);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = LOCALES[newLocale].dir;
  }, []);

  const translations = getTranslations(locale);
  const config = LOCALES[locale];

  const t = useCallback(
    (key: keyof Translations) => translations[key] || key,
    [translations]
  );

  if (!mounted) {
    return <div className="min-h-screen bg-sacred-black" />;
  }

  return (
    <LanguageContext.Provider value={{ locale, config, t, setLocale, dir: config.dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider');
  return ctx;
}
