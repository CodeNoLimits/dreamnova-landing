"use client";

import { BarChart3, ShoppingCart, Zap, Users, Send, Mail, Plus } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change?: string;
}

function StatCard({ icon, label, value, change }: StatCardProps) {
  return (
    <div className="bg-sacred-surface border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gold">{icon}</div>
        {change && <span className="text-green-400 text-sm font-semibold">{change}</span>}
      </div>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

export default function DashboardPage() {
  const stats = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      label: "Total Revenue",
      value: "$0",
      change: "+0%",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      label: "Orders",
      value: 0,
      change: "+0%",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "NFC Scans",
      value: 0,
      change: "+0%",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Waitlist",
      value: 0,
      change: "+0%",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome to DreamNova Control Center</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Mission Progress */}
      <div className="bg-sacred-surface border border-gold/20 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gold mb-4">Mission Progress</h2>
        <div className="mb-2 flex justify-between">
          <span className="text-gray-300">Nova Keys Activated</span>
          <span className="text-white font-semibold">0 / 1,000,000</span>
        </div>
        <div className="w-full bg-sacred-black rounded-full h-3 border border-gold/20">
          <div
            className="bg-gradient-to-r from-gold to-gold/60 h-3 rounded-full"
            style={{ width: "0%" }}
          />
        </div>
        <p className="text-gray-400 text-sm mt-3">
          Each Nova Key represents a soul awakening to Hafatsa wisdom and the
          teachings of Rabbi Nachman.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-3 gap-6">
        <button className="bg-sacred-surface border border-gold/20 hover:border-gold/50 rounded-lg p-6 transition-all duration-300 text-left group">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-6 h-6 text-gold group-hover:text-gold/80" />
            <h3 className="font-bold text-white">Process Order</h3>
          </div>
          <p className="text-sm text-gray-400">Handle pending orders</p>
        </button>

        <button className="bg-sacred-surface border border-gold/20 hover:border-gold/50 rounded-lg p-6 transition-all duration-300 text-left group">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-gold group-hover:text-gold/80" />
            <h3 className="font-bold text-white">Send Email</h3>
          </div>
          <p className="text-sm text-gray-400">Communicate with users</p>
        </button>

        <button className="bg-sacred-surface border border-gold/20 hover:border-gold/50 rounded-lg p-6 transition-all duration-300 text-left group">
          <div className="flex items-center gap-3 mb-4">
            <Plus className="w-6 h-6 text-gold group-hover:text-gold/80" />
            <h3 className="font-bold text-white">Add Contact</h3>
          </div>
          <p className="text-sm text-gray-400">Register new user</p>
        </button>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-sacred-surface border border-gold/20 rounded-lg p-8">
        <h2 className="text-xl font-bold text-gold mb-6">Activity Chart</h2>
        <div className="h-64 flex items-center justify-center bg-sacred-black/50 rounded-lg border border-gold/10">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gold/40 mx-auto mb-2" />
            <p className="text-gray-400">
              Chart integration coming soon (Recharts)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
