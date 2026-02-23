'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RefreshCw, DollarSign, Users, Zap, ArrowLeft, Lock, Unlock } from 'lucide-react';

interface Payment {
  id: string;
  email: string;
  amount: number;
  tier: string;
  date: string;
  country: string;
}

interface PaymentsData {
  payments: Payment[];
  total: number;
  count: number;
  byTier: Record<string, number>;
}

const ADMIN_PASSWORD = 'David32@';
const SESSION_KEY = 'dreamnova-admin-auth';

const TIER_COLORS: Record<string, string> = {
  'Covenant $63':  '#D4AF37',
  'Pair $99':      '#00D4FF',
  'Platinum $149': '#A855F7',
};

export default function PaymentsDashboard() {
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState('');
  const [pwErr, setPwErr] = useState('');
  const [data, setData] = useState<PaymentsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<string>('');

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'authenticated') {
      setAuth(true);
      fetchPayments();
    }
  }, []);

  async function fetchPayments() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/payments');
      const json = await res.json();
      setData(json);
      setLastRefresh(new Date().toLocaleTimeString('fr-FR'));
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'authenticated');
      setAuth(true);
      fetchPayments();
    } else {
      setPwErr('Incorrect');
      setPw('');
    }
  }

  if (!auth) {
    return (
      <div className="min-h-screen bg-sacred-black flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Lock className="w-8 h-8 text-gold" />
            </div>
            <h1 className="font-display text-2xl font-bold text-white">Nova Key — <span className="text-gold">Payments</span></h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="Admin password" autoFocus
              className="w-full px-4 py-3 bg-sacred-surface border border-gold/20 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 transition-all" />
            {pwErr && <p className="text-red-400 text-sm text-center">{pwErr}</p>}
            <button type="submit" className="w-full py-3 bg-gold/20 border border-gold text-gold font-display font-bold rounded-xl hover:bg-gold/30 transition-all">
              <Unlock className="w-4 h-4 inline mr-2" />Entrer
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sacred-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-sacred-black/80 backdrop-blur-xl border-b border-gold/15">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-gray-500 hover:text-gold transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="font-display font-bold"><span className="text-gold">Nova Key</span> Payments</span>
            <span className="text-xs text-gold/50 font-mono px-2 py-0.5 rounded-full bg-gold/5 border border-gold/10">LIVE</span>
          </div>
          <button onClick={fetchPayments} disabled={loading}
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gold transition-colors px-3 py-1.5 rounded-lg border border-gold/10 hover:border-gold/25">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            {lastRefresh ? `Mis à jour ${lastRefresh}` : 'Actualiser'}
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Stats */}
        {data && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-sacred-surface border border-gold/10">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-gold" />
                <span className="text-xs text-gray-500">Revenue Total</span>
              </div>
              <p className="text-2xl font-display font-bold text-gold">${data.total.toLocaleString()}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
              className="p-4 rounded-xl bg-sacred-surface border border-gold/10">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-cyan" />
                <span className="text-xs text-gray-500">Buyers</span>
              </div>
              <p className="text-2xl font-display font-bold text-cyan">{data.count}</p>
            </motion.div>

            {Object.entries(data.byTier).map(([tier, count], i) => (
              <motion.div key={tier} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}
                className="p-4 rounded-xl bg-sacred-surface border border-gold/10">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4" style={{ color: TIER_COLORS[tier] ?? '#888' }} />
                  <span className="text-xs text-gray-500">{tier}</span>
                </div>
                <p className="text-2xl font-display font-bold" style={{ color: TIER_COLORS[tier] ?? '#888' }}>{count}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Progress vers mission */}
        {data && (
          <div className="mb-8 p-5 rounded-xl bg-sacred-surface border border-gold/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500 font-mono">MISSION HAFATSA — 1,000,000 Nova Keys</span>
              <span className="text-xs text-gold font-mono">{data.count} / 1,000,000</span>
            </div>
            <div className="w-full h-2 bg-sacred-black rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${Math.max((data.count / 1000000) * 100, 0.1)}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-gold to-yellow-300" />
            </div>
            <p className="text-xs text-gray-600 mt-2 text-right">
              ${data.total.toFixed(0)} / $63,000,000 — {((data.total / 63000000) * 100).toFixed(4)}%
            </p>
          </div>
        )}

        {/* Payments table */}
        <div className="rounded-xl bg-sacred-surface border border-gold/10 overflow-hidden">
          <div className="px-5 py-3 border-b border-gold/10 flex items-center justify-between">
            <span className="text-sm font-semibold text-white">Derniers paiements</span>
            <span className="text-xs text-gray-500">{data?.count ?? 0} total</span>
          </div>

          {loading && !data && (
            <div className="p-12 text-center text-gray-600">
              <RefreshCw className="w-6 h-6 mx-auto mb-3 animate-spin text-gold/40" />
              <p className="text-sm">Connexion Stripe...</p>
            </div>
          )}

          {data?.payments.length === 0 && (
            <div className="p-12 text-center text-gray-600">
              <DollarSign className="w-8 h-8 mx-auto mb-3 opacity-30" />
              <p className="text-sm">Aucun paiement encore.</p>
              <p className="text-xs mt-1 text-gold/50">Berrebi va cliquer. 148.</p>
            </div>
          )}

          {data && data.payments.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-600 border-b border-gold/5">
                    <th className="px-5 py-3 text-left">Email</th>
                    <th className="px-5 py-3 text-left">Tier</th>
                    <th className="px-5 py-3 text-right">Montant</th>
                    <th className="px-5 py-3 text-left">Pays</th>
                    <th className="px-5 py-3 text-right">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.payments.map((p, i) => (
                    <motion.tr key={p.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                      className="border-b border-gold/5 hover:bg-gold/3 transition-colors">
                      <td className="px-5 py-3 text-gray-300 font-mono text-xs">{p.email}</td>
                      <td className="px-5 py-3">
                        <span className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${TIER_COLORS[p.tier] ?? '#888'}15`, color: TIER_COLORS[p.tier] ?? '#888' }}>
                          {p.tier}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right font-bold text-gold">${p.amount}</td>
                      <td className="px-5 py-3 text-gray-500">{p.country}</td>
                      <td className="px-5 py-3 text-right text-gray-600 text-xs">
                        {new Date(p.date).toLocaleDateString('fr-FR')}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-700 mt-8">
          Na Nach Nachma Nachman MeUman — Ein Ye'ush Ba'olam Klal 🔥
        </p>
      </div>
    </div>
  );
}
