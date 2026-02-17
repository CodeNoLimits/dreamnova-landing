'use client';

import { useTranslation } from '@/lib/LanguageContext';
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TikkumPage() {
  const { t } = useTranslation();

  const PSALMS = [
    { number: 16, nameKey: "portal.tikkun.psalm.16" },
    { number: 32, nameKey: "portal.tikkun.psalm.32" },
    { number: 41, nameKey: "portal.tikkun.psalm.41" },
    { number: 42, nameKey: "portal.tikkun.psalm.42" },
    { number: 59, nameKey: "portal.tikkun.psalm.59" },
    { number: 77, nameKey: "portal.tikkun.psalm.77" },
    { number: 90, nameKey: "portal.tikkun.psalm.90" },
    { number: 105, nameKey: "portal.tikkun.psalm.105" },
    { number: 137, nameKey: "portal.tikkun.psalm.137" },
    { number: 150, nameKey: "portal.tikkun.psalm.150" },
  ];
  return (
    <div className="min-h-screen bg-sacred-black text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/portal/unlock"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            {t('portal.tikkun.nav.back')}
          </Link>

          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-gold via-gold to-gold/60 bg-clip-text text-transparent">
            {t('portal.tikkun.title.hebrew')}
          </h1>
          <h2 className="text-3xl text-gray-300 mb-6">
            {t('portal.tikkun.title')}
          </h2>

          <p className="text-gray-400 mb-8">
            {t('portal.tikkun.description')}
          </p>
        </div>

        {/* Psalms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {PSALMS.map((psalm, idx) => (
            <div
              key={psalm.number}
              className="relative group bg-gradient-to-br from-sacred-surface to-sacred-black border border-gold/20 hover:border-gold/50 rounded-lg p-6 text-center transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-gradient-to-br from-gold to-transparent transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-4xl font-bold text-gold mb-2">
                  {psalm.number}
                </div>
                <div className="text-sm text-gray-400">{t(psalm.nameKey)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-gold mb-4">
            {t('portal.tikkun.practice.title')}
          </h3>
          <p className="text-gray-300 mb-4">
            {t('portal.tikkun.practice.desc')}
          </p>
          <p className="text-gray-400 text-sm">
            {t('portal.tikkun.practice.note')}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/portal/unlock"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            {t('portal.tikkun.nav.back')}
          </Link>

          <Link
            href="/portal/azamra"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            {t('portal.tikkun.nav.next')}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
