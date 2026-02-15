'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SacredButton } from './sacred-button';
import { LanguageSelector } from './language-selector';
import { useTranslation } from '@/lib/LanguageContext';

// Sacred Na Nach Navigation - Each letter is a portal
// Order: Right-to-Left (Hebrew reading direction) - Nachman → Nachma → Nach → Na
const navLinks = [
  {
    letter: 'נחמן',
    latin: 'Nachman',
    label: 'Nachman — Completion',
    href: '/covenant-pack',
    meaning: 'The Covenant'
  },
  {
    letter: 'נחמ',
    latin: 'Nachma',
    label: 'Nachma — Wisdom',
    href: '/source-code',
    meaning: 'The Source Code'
  },
  {
    letter: 'נח',
    latin: 'Nach',
    label: 'Nach — Journey',
    href: '/nova-key',
    meaning: 'The Sacred Key'
  },
  {
    letter: 'נ',
    latin: 'Na',
    label: 'Na — Awakening',
    href: '/about',
    meaning: 'The Mission'
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-sacred-black/80 backdrop-blur-xl border-b border-gold/20'
            : 'bg-sacred-black/80 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 group">
              <span className="font-display text-2xl font-bold tracking-wider">
                <span className="text-gold">DREAM</span>
                <span className="text-cyan">NOVA</span>
              </span>
            </Link>

            {/* Desktop Navigation - Sacred Na Nach (RTL Order) */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative"
                >
                  {/* Hebrew Letter + Latin - Engraved Gold */}
                  <div className="flex flex-col items-center gap-0.5">
                    {/* Hebrew Letter */}
                    <span
                      className="font-sacred text-3xl font-bold text-gold transition-all duration-300 group-hover:scale-110 group-hover:text-cyan"
                      style={{
                        textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(212,175,55,0.3)',
                        fontFamily: 'Cormorant Garamond, serif'
                      }}
                    >
                      {link.letter}
                    </span>
                    {/* Latin Transliteration - Always Visible */}
                    <span className="font-body text-[10px] text-gold/60 uppercase tracking-wider">
                      {link.latin}
                    </span>
                    {/* Meaning - Appears on Hover */}
                    <span className="font-body text-xs text-transparent group-hover:text-light-gray transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap mt-1">
                      {link.meaning}
                    </span>
                  </div>
                  {/* Underline Effect */}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA + Language */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSelector />
              <SacredButton
                href="/checkout"
                variant="filled"
                size="sm"
                className="font-display"
              >
                {t('nav.cta')}
              </SacredButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gold" />
              ) : (
                <Menu className="w-6 h-6 text-gold" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed right-0 top-0 h-screen w-80 bg-sacred-black border-l border-gold/20 z-40 md:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gold/20">
              <Link href="/" className="flex items-center gap-1" onClick={closeMenu}>
                <span className="font-display text-xl font-bold tracking-wider">
                  <span className="text-gold">DREAM</span>
                  <span className="text-cyan">NOVA</span>
                </span>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gold" />
              </button>
            </div>

            {/* Mobile Navigation Links - Sacred Na Nach (RTL Order) */}
            <div className="flex flex-col gap-6 p-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center gap-4 group py-2"
                  >
                    {/* Hebrew Letter + Latin - Mobile */}
                    <div className="flex flex-col items-center">
                      <span
                        className="font-sacred text-4xl font-bold text-gold group-hover:text-cyan transition-colors duration-300"
                        style={{
                          textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 20px rgba(212,175,55,0.3)',
                          fontFamily: 'Cormorant Garamond, serif'
                        }}
                      >
                        {link.letter}
                      </span>
                      <span className="font-body text-[9px] text-gold/60 uppercase tracking-wider -mt-1">
                        {link.latin}
                      </span>
                    </div>
                    {/* Label and Meaning */}
                    <div className="flex flex-col">
                      <span className="font-display text-sm text-light-gray group-hover:text-gold transition-colors">
                        {link.label}
                      </span>
                      <span className="font-body text-xs text-gray-500">
                        {link.meaning}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA + Language */}
            <div className="p-6 space-y-4">
              <LanguageSelector />
              <Link href="/checkout" onClick={closeMenu}>
                <SacredButton
                  variant="filled"
                  size="md"
                  className="w-full font-display"
                >
                  {t('nav.cta')}
                </SacredButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
