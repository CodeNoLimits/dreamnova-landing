"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Play, Pause, Save } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";

export default function AzamraPage() {
  const { t } = useTranslation();

  const DURATION_OPTIONS = [
    { labelKey: "portal.azamra.timer.5min", seconds: 300 },
    { labelKey: "portal.azamra.timer.10min", seconds: 600 },
    { labelKey: "portal.azamra.timer.15min", seconds: 900 },
  ];
  const [selectedDuration, setSelectedDuration] = useState(300);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isRunning, setIsRunning] = useState(false);
  const [goodPoint, setGoodPoint] = useState("");
  const [saved, setSaved] = useState(false);

  // Load saved good point from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("azamra-good-point");
    if (saved) {
      setGoodPoint(saved);
    }
  }, []);

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleDurationChange = (seconds: number) => {
    if (!isRunning) {
      setSelectedDuration(seconds);
      setTimeLeft(seconds);
      setSaved(false);
    }
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const handleSave = () => {
    localStorage.setItem("azamra-good-point", goodPoint);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-sacred-black text-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/portal/unlock"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            {t('portal.azamra.nav.back')}
          </Link>

          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-gold via-gold to-gold/60 bg-clip-text text-transparent">
            {t('portal.azamra.title.hebrew')}
          </h1>
          <h2 className="text-3xl text-gray-300 mb-6">
            {t('portal.azamra.title')}
          </h2>

          <p className="text-gray-400 mb-2 italic">
            {t('portal.azamra.subtitle.hebrew')}
          </p>
          <p className="text-gray-400">
            {t('portal.azamra.subtitle')}
          </p>
        </div>

        {/* Sacred Quote Box */}
        <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/30 rounded-lg p-6 mb-12">
          <p className="text-green-300 text-center text-lg">
            {t('portal.azamra.quote')}
          </p>
          <p className="text-green-400/70 text-center text-sm mt-3">
            {t('portal.azamra.quote.author')}
          </p>
        </div>

        {/* Timer Section */}
        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gold mb-6 text-center">
            {t('portal.azamra.timer.title')}
          </h3>

          {/* Duration Selector */}
          <div className="flex gap-3 justify-center mb-8">
            {DURATION_OPTIONS.map((option) => (
              <button
                key={option.seconds}
                onClick={() => handleDurationChange(option.seconds)}
                disabled={isRunning}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDuration === option.seconds
                    ? "bg-gold text-black"
                    : "bg-sacred-black border border-gold/30 text-gold hover:border-gold disabled:opacity-50"
                }`}
              >
                {t(option.labelKey)}
              </button>
            ))}
          </div>

          {/* Timer Display */}
          <div className="text-6xl font-bold text-center text-gold mb-8 font-mono">
            {formatTime(timeLeft)}
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={toggleTimer}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mb-4"
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5" />
                {t('portal.azamra.timer.pause')}
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                {t('portal.azamra.timer.start')}
              </>
            )}
          </button>

          {timeLeft === 0 && !isRunning && selectedDuration > 0 && (
            <div className="text-center text-green-400 font-semibold">
              {t('portal.azamra.timer.complete')}
            </div>
          )}
        </div>

        {/* Journal Section */}
        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gold mb-4">
            {t('portal.azamra.journal.title')}
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            {t('portal.azamra.journal.desc')}
          </p>

          <textarea
            value={goodPoint}
            onChange={(e) => {
              setGoodPoint(e.target.value);
              setSaved(false);
            }}
            placeholder={t('portal.azamra.journal.placeholder')}
            className="w-full h-32 bg-sacred-black border border-gold/20 rounded-lg p-4 text-white placeholder-gray-600 focus:border-gold/50 focus:outline-none resize-none mb-4"
          />

          <button
            onClick={handleSave}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              saved
                ? "bg-green-500/20 border border-green-500 text-green-300"
                : "bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-black"
            }`}
          >
            <Save className="w-4 h-4" />
            {saved ? t('portal.azamra.journal.saved') : t('portal.azamra.journal.save')}
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <Link
            href="/portal/tikkun"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            {t('portal.azamra.nav.tikkun')}
          </Link>

          <Link
            href="/portal/unlock"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            {t('portal.azamra.nav.home')}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
