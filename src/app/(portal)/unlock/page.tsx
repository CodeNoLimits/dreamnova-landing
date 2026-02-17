'use client';

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Zap, FileText, Loader2 } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";

function UnlockContent() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const key = searchParams.get("key");
  const [showContent, setShowContent] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    if (key) {
      fetch("/api/nfc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nova_key_id: key }),
      }).catch((err) => console.error("NFC tracking failed:", err));

      const timer = setTimeout(() => setShowContent(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [key]);

  return (
    <div className="min-h-screen bg-sacred-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gold rounded-full"
            style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3, delay: particle.id * 0.05, repeat: Infinity }}
          />
        ))}
      </AnimatePresence>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 sacred-gradient animate-pulse">
          {t('portal.unlock.title')}
        </h1>

        {key && (
          <p className="text-lg text-gray-400 mb-12 font-mono">
            {t('portal.unlock.key')} <span className="text-gold">{key}</span>
          </p>
        )}

        {!key && (
          <p className="text-lg text-gray-400 mb-12">
            {t('portal.unlock.scan')}
          </p>
        )}

        <AnimatePresence>
          {showContent && (
            <motion.div
              className="grid sm:grid-cols-3 gap-6 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/tikkun"
                className="group relative bg-gradient-to-br from-sacred-surface to-sacred-black border border-gold/20 hover:border-gold/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-gradient-to-br from-gold to-transparent transition-opacity duration-300" />
                <div className="relative z-10">
                  <BookOpen className="w-8 h-8 text-gold mb-4 mx-auto" />
                  <h2 className="text-lg font-bold text-white mb-2">{t("portal.unlock.tikkun.title")}</h2>
                  <p className="text-sm text-gray-400">{t("portal.unlock.tikkun.desc")}</p>
                </div>
              </Link>

              <Link
                href="/azamra"
                className="group relative bg-gradient-to-br from-sacred-surface to-sacred-black border border-gold/20 hover:border-gold/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-gradient-to-br from-gold to-transparent transition-opacity duration-300" />
                <div className="relative z-10">
                  <Zap className="w-8 h-8 text-gold mb-4 mx-auto" />
                  <h2 className="text-lg font-bold text-white mb-2">{t("portal.unlock.azamra.title")}</h2>
                  <p className="text-sm text-gray-400">{t("portal.unlock.azamra.desc")}</p>
                </div>
              </Link>

              <Link
                href="/source-code"
                className="group relative bg-gradient-to-br from-sacred-surface to-sacred-black border border-gold/20 hover:border-gold/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-gradient-to-br from-gold to-transparent transition-opacity duration-300" />
                <div className="relative z-10">
                  <FileText className="w-8 h-8 text-gold mb-4 mx-auto" />
                  <h2 className="text-lg font-bold text-white mb-2">{t("portal.unlock.source.title")}</h2>
                  <p className="text-sm text-gray-400">{t("portal.unlock.source.desc")}</p>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function UnlockPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-sacred-black flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-gold animate-spin" />
        </div>
      }
    >
      <UnlockContent />
    </Suspense>
  );
}
