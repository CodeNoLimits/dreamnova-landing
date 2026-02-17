"use client";

import { useTranslation } from "@/lib/LanguageContext";

import { Share2, Users, Award, TrendingUp, Copy, Check } from "lucide-react";
import { useState } from "react";
import { HAFATSA_POINTS } from "@/lib/constants";
import { motion } from "framer-motion";

interface HafatsaActivity {
  id: string;
  type: "scan" | "share" | "referral" | "distribution";
  descKey: string;
  points: number;
  date: string;
}

const mockActivity: HafatsaActivity[] = [
  {
    id: "1",
    type: "scan",
    descKey: 'hafatsa.scan.event',
    points: 1,
    date: "2025-02-14",
  },
  {
    id: "2",
    type: "share",
    descKey: 'hafatsa.shared.friend',
    points: 5,
    date: "2025-02-13",
  },
  {
    id: "3",
    type: "referral",
    descKey: 'hafatsa.friend.purchase',
    points: 63,
    date: "2025-02-12",
  },
  {
    id: "4",
    type: "distribution",
    descKey: 'hafatsa.free.dist',
    points: 10,
    date: "2025-02-11",
  },
  {
    id: "5",
    type: "scan",
    descKey: 'hafatsa.scan',
    points: 1,
    date: "2025-02-10",
  },
  {
    id: "6",
    type: "share",
    descKey: 'hafatsa.shared.social',
    points: 5,
    date: "2025-02-09",
  },
];

const userPoints = 90; // User has 90 points (close to Ambassador level at 50)
const currentLevelIndex = HAFATSA_POINTS.milestones.findIndex(
  (m) => m.points <= userPoints
);
const currentLevel = HAFATSA_POINTS.milestones[currentLevelIndex] || HAFATSA_POINTS.milestones[0];
const nextLevel =
  HAFATSA_POINTS.milestones[currentLevelIndex + 1] ||
  HAFATSA_POINTS.milestones[HAFATSA_POINTS.milestones.length - 1];
const progressPercentage =
  ((userPoints - currentLevel.points) /
    (nextLevel.points - currentLevel.points)) *
  100;

const referralCode = "NOVA-DN-" + Math.random().toString(36).substr(2, 9).toUpperCase();
const referralLink = `https://dreamnova.com?ref=${referralCode}`;

function ActivityCard({ activity }: { activity: HafatsaActivity }) {
  const { t } = useTranslation();
  const typeColors = {
    scan: "bg-blue-500/20 text-blue-400",
    share: "bg-cyan-500/20 text-cyan-400",
    referral: "bg-green-500/20 text-green-400",
    distribution: "bg-gold/20 text-gold",
  };

  const typeLabels = {
    scan: "Scan",
    share: "Share",
    referral: "Referral",
    distribution: "Distribution",
  };

  return (
    <div className="flex items-center justify-between py-4 border-t border-gold/10 first:border-t-0">
      <div className="flex items-center gap-4 flex-1">
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[activity.type]}`}>
          {typeLabels[activity.type]}
        </div>
        <div className="flex-1">
          <p className="text-white font-medium">{t(activity.descKey)}</p>
          <p className="text-gray-400 text-sm">
            {new Date(activity.date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-gold font-bold">+{activity.points}</p>
        <p className="text-gray-400 text-xs">points</p>
      </div>
    </div>
  );
}

export default function HafatsaPage() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const totalPoints = mockActivity.reduce((sum, a) => sum + a.points, 0) + userPoints;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Hafatsa</h1>
        <p className="text-gray-400">
          Spreading wisdom and tracking your sacred mission impact
        </p>
      </div>

      {/* Points Balance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="bg-gradient-to-br from-sacred-surface to-sacred-card border border-gold/30 rounded-lg p-8"
      >
        <div className="mb-8">
          <p className="text-gray-400 text-sm mb-2">{t("hafatsa.points")}</p>
          <p className="text-5xl font-bold text-gold mb-2">{userPoints}</p>
          <p className="text-gray-400">
            Total earned: {totalPoints} points from Hafatsa activities
          </p>
        </div>

        <div className="bg-sacred-black/50 rounded-lg p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">
                {currentLevel.title}
              </h3>
              <span className="text-gray-400 text-sm">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Progress to {nextLevel.title} ({nextLevel.points} points)
            </p>
            <div className="w-full bg-sacred-surface rounded-full h-3 border border-gold/20 overflow-hidden">
              <motion.div
                className="bg-gradient-to-r from-gold to-gold/60 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" as const }}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400 mb-1">{t("hafatsa.level")}</p>
              <p className="text-gold font-bold">{currentLevel.title}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">{t("hafatsa.needed")}</p>
              <p className="text-white font-bold">
                {nextLevel.points - userPoints}
              </p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">{t("hafatsa.next")}</p>
              <p className="text-gold font-bold">{nextLevel.title}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hafatsa Levels */}
      <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gold mb-6">{t("hafatsa.levels")}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {HAFATSA_POINTS.milestones.map((milestone, idx) => {
            const isUnlocked = userPoints >= milestone.points;
            const isCurrent = currentLevelIndex === idx;

            return (
              <motion.div
                key={milestone.points}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" as const }}
                className={`p-6 rounded-lg border transition-all duration-300 ${
                  isUnlocked
                    ? "bg-gold/10 border-gold/40"
                    : "bg-sacred-black/30 border-gold/10"
                } ${isCurrent ? "ring-2 ring-gold/50" : ""}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className={`font-bold text-lg ${isUnlocked ? "text-gold" : "text-gray-400"}`}>
                      {milestone.title}
                    </p>
                    <p className="text-gray-500 text-sm">{milestone.titleHe}</p>
                  </div>
                  {isUnlocked && (
                    <Award className="w-5 h-5 text-gold" />
                  )}
                </div>
                <p className={`text-sm ${isUnlocked ? "text-gold font-semibold" : "text-gray-400"}`}>
                  {milestone.points} points required
                </p>
                {isCurrent && (
                  <p className="text-xs text-gold mt-2">{t("hafatsa.level")}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Referral Section */}
      <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Share2 className="w-6 h-6 text-gold" />
          <h2 className="text-2xl font-bold text-gold">{t("hafatsa.share")}</h2>
        </div>

        <div className="bg-sacred-black/50 rounded-lg p-6 mb-6">
          <p className="text-gray-400 text-sm mb-4">
            Invite friends to join the mission. Earn 63 points for each
            referral purchase!
          </p>
          <div className="flex items-center gap-3 bg-sacred-surface border border-gold/20 rounded-lg p-4">
            <code className="flex-1 text-sm text-gold break-all">
              {referralLink}
            </code>
            <button
              onClick={handleCopyLink}
              className="flex-shrink-0 p-2 hover:bg-gold/20 rounded-lg transition-colors duration-200"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5 text-gold" />
              )}
            </button>
          </div>
        </div>

        {/* Social Share Stats */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="border border-gold/20 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-gold" />
              <p className="text-gray-400 text-sm">{t("hafatsa.referrals")}</p>
            </div>
            <p className="text-3xl font-bold text-white">4</p>
          </div>
          <div className="border border-gold/20 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-gold" />
              <p className="text-gray-400 text-sm">{t("hafatsa.conversions")}</p>
            </div>
            <p className="text-3xl font-bold text-white">2</p>
          </div>
          <div className="border border-gold/20 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-5 h-5 text-gold" />
              <p className="text-gray-400 text-sm">{t("hafatsa.earned")}</p>
            </div>
            <p className="text-3xl font-bold text-gold">126</p>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gold mb-6">{t("hafatsa.recent")}</h2>
        <div className="space-y-2">
          {mockActivity.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.05,
                ease: "easeOut" as const,
              }}
            >
              <ActivityCard activity={activity} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
