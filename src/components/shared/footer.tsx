'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Heart, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { EcosystemFooter } from './ecosystem-footer';

export function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <EcosystemFooter />
    <footer className="bg-sacred-surface border-t border-gold/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block w-fit">
              <span className="font-display text-2xl font-bold tracking-wider">
                <span className="text-gold">DREAM</span>
                <span className="text-cyan">NOVA</span>
              </span>
            </Link>
            <p className="text-light-gray text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-gold uppercase tracking-wider text-sm font-semibold">
              {t('footer.links.title')}
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/source-code"
                className="text-light-gray hover:text-gold transition-colors duration-300 text-sm"
              >
                {t('nav.problem')}
              </Link>
              <Link
                href="/codex"
                className="text-light-gray hover:text-gold transition-colors duration-300 text-sm"
              >
                {t('nav.solution')}
              </Link>
              <Link
                href="/nova-key"
                className="text-light-gray hover:text-gold transition-colors duration-300 text-sm"
              >
                {t('nav.pricing')}
              </Link>
              <Link
                href="/tikkun"
                className="text-light-gray hover:text-gold transition-colors duration-300 text-sm"
              >
                {t('nav.tikkun')}
              </Link>
              <Link
                href="/accessories"
                className="text-light-gray hover:text-gold transition-colors duration-300 text-sm"
              >
                {t('acc.title')}
              </Link>
            </nav>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-gold uppercase tracking-wider text-sm font-semibold">
              {t('footer.newsletter.title')}
            </h3>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gold/50" />
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-sacred-black/50 border border-gold/30 rounded-lg pl-10 pr-4 py-2.5 text-light-gray placeholder-dark-gray focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold/80 text-sacred-black font-display font-semibold uppercase tracking-wider px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 disabled:opacity-50 text-sm"
              >
                {t('footer.newsletter.button')}
                <ArrowRight className="w-4 h-4" />
              </button>
              {submitStatus === 'success' && (
                <p className="text-gold text-xs">{t('footer.newsletter.success')}</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-xs">{t('footer.newsletter.error')}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Border and Copyright */}
      <div className="border-t border-gold/20 px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-gray text-xs text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-2 text-dark-gray text-xs">
              {t('footer.attribution')}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
