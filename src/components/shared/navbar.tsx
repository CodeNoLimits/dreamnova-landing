'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SacredButton } from './sacred-button';

const navLinks = [
  { label: "L'Entropie", href: '#entropy' },
  { label: 'Nova-Tam', href: '#solution' },
  { label: 'Le Modèle 63', href: '#pricing' },
  { label: 'Tikkun', href: '#manifesto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-light-gray hover:text-gold transition-colors duration-300 font-display text-sm uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <SacredButton
                href="/checkout"
                variant="filled"
                size="sm"
                className="font-display"
              >
                OBTENIR MA CLÉ
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

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-light-gray hover:text-gold transition-colors duration-300 font-display text-sm uppercase tracking-wider py-2"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="p-6">
              <Link href="/checkout" onClick={closeMenu}>
                <SacredButton
                  variant="filled"
                  size="md"
                  className="w-full font-display"
                >
                  OBTENIR MA CLÉ
                </SacredButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
