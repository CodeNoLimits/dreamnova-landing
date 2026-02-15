"use client";

import { CreditCard, Activity, Plus, Trash2, Eye } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface NovaKey {
  id: string;
  name: string;
  serial: string;
  status: "active" | "inactive";
  lastScan?: string;
  scanCount: number;
  activatedDate: string;
}

const mockNovaKeys: NovaKey[] = [
  {
    id: "1",
    name: "Main Nova Key",
    serial: "NV-2025-001-12345",
    status: "active",
    lastScan: "2025-02-14T14:30:00",
    scanCount: 47,
    activatedDate: "2025-01-15",
  },
  {
    id: "2",
    name: "Community Event Key",
    serial: "NV-2025-002-67890",
    status: "active",
    lastScan: "2025-02-13T18:45:00",
    scanCount: 123,
    activatedDate: "2024-12-01",
  },
  {
    id: "3",
    name: "Platinum Edition",
    serial: "NV-PLAT-2025-11111",
    status: "active",
    lastScan: "2025-02-12T10:15:00",
    scanCount: 8,
    activatedDate: "2025-02-01",
  },
  {
    id: "4",
    name: "Backup Key",
    serial: "NV-2025-003-99999",
    status: "inactive",
    scanCount: 0,
    activatedDate: "2025-02-10",
  },
];

function KeyCard({ novaKey }: { novaKey: NovaKey }) {
  const daysActive = Math.floor(
    (new Date().getTime() - new Date(novaKey.activatedDate).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const }}
      className={`bg-sacred-surface border rounded-lg p-6 transition-all duration-300 ${
        novaKey.status === "active"
          ? "border-gold/30 hover:border-gold/50"
          : "border-gray-700/30 hover:border-gray-700/50"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-lg ${
              novaKey.status === "active"
                ? "bg-gold/20"
                : "bg-gray-700/20"
            }`}
          >
            <CreditCard
              className={`w-6 h-6 ${
                novaKey.status === "active"
                  ? "text-gold"
                  : "text-gray-500"
              }`}
            />
          </div>
          <div>
            <h3 className="font-bold text-white">{novaKey.name}</h3>
            <p className="text-gray-400 text-sm font-mono">
              {novaKey.serial}
            </p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            novaKey.status === "active"
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-gray-700/20 text-gray-400 border border-gray-700/30"
          }`}
        >
          {novaKey.status === "active" ? "Active" : "Inactive"}
        </span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6 py-6 border-y border-gold/10">
        <div>
          <p className="text-gray-400 text-sm mb-1">Total Scans</p>
          <p className="text-2xl font-bold text-white">{novaKey.scanCount}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">Days Active</p>
          <p className="text-2xl font-bold text-white">{daysActive}</p>
        </div>
        {novaKey.lastScan && (
          <>
            <div className="col-span-2">
              <p className="text-gray-400 text-sm mb-1">Last Scan</p>
              <p className="text-white">
                {new Date(novaKey.lastScan).toLocaleDateString()}{" "}
                <span className="text-gray-400">
                  {new Date(novaKey.lastScan).toLocaleTimeString()}
                </span>
              </p>
            </div>
          </>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gold/20 hover:bg-gold/30 text-gold rounded-lg transition-all duration-200 font-semibold text-sm">
          <Eye className="w-4 h-4" />
          View Details
        </button>
        <button className="p-2 hover:bg-red-500/10 text-red-400 rounded-lg transition-all duration-200">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

export default function NFCPage() {
  const [showActivateForm, setShowActivateForm] = useState(false);
  const activeKeys = mockNovaKeys.filter((k) => k.status === "active");
  const totalScans = mockNovaKeys.reduce((sum, k) => sum + k.scanCount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">NFC Management</h1>
        <p className="text-gray-400">Manage your registered Nova Keys</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" as const }}
          className="bg-sacred-surface border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-gold">
              <CreditCard className="w-6 h-6" />
            </div>
            <span className="text-green-400 text-sm font-semibold">
              +{mockNovaKeys.length}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Total Keys</p>
          <p className="text-3xl font-bold text-white">
            {mockNovaKeys.length}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
          className="bg-sacred-surface border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-gold">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-green-400 text-sm font-semibold">
              +{activeKeys.length}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Active Keys</p>
          <p className="text-3xl font-bold text-white">{activeKeys.length}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="bg-sacred-surface border border-gold/20 rounded-lg p-6 hover:border-gold/40 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="text-gold">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-green-400 text-sm font-semibold">
              +{totalScans}
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Total Scans</p>
          <p className="text-3xl font-bold text-white">{totalScans}</p>
        </motion.div>
      </div>

      {/* Activate New Key Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="bg-gradient-to-r from-sacred-surface to-sacred-card border border-gold/20 rounded-lg p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gold mb-1">
              Activate New Nova Key
            </h2>
            <p className="text-gray-400">
              Register a new NFC key to start tracking scans
            </p>
          </div>
          <button
            onClick={() => setShowActivateForm(!showActivateForm)}
            className="flex items-center gap-2 px-6 py-3 bg-gold/20 hover:bg-gold/30 text-gold rounded-lg transition-all duration-200 font-semibold"
          >
            <Plus className="w-5 h-5" />
            Activate Key
          </button>
        </div>

        {showActivateForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="bg-sacred-black/50 rounded-lg p-6 border border-gold/10"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Key Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., My Nova Key"
                  className="w-full bg-sacred-surface border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Serial Number
                </label>
                <input
                  type="text"
                  placeholder="NV-XXXX-XXXX-XXXXX"
                  className="w-full bg-sacred-surface border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Scan UID
                </label>
                <input
                  type="text"
                  placeholder="Tap your key to scan UID"
                  className="w-full bg-sacred-surface border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gold/20 hover:bg-gold/30 text-gold rounded-lg transition-all duration-200 font-semibold"
                >
                  Activate
                </button>
                <button
                  type="button"
                  onClick={() => setShowActivateForm(false)}
                  className="flex-1 px-6 py-3 bg-sacred-surface border border-gold/20 hover:border-gold/40 text-gray-400 hover:text-white rounded-lg transition-all duration-200 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </motion.div>

      {/* Nova Keys Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gold mb-6">
          Registered Nova Keys
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {mockNovaKeys.map((key) => (
            <KeyCard key={key.id} novaKey={key} />
          ))}
        </div>
      </div>

      {/* Empty State Message */}
      {mockNovaKeys.length === 0 && (
        <div className="bg-sacred-surface border border-gold/20 rounded-lg p-12 text-center">
          <CreditCard className="w-16 h-16 text-gold/40 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">
            No Nova Keys Registered
          </h3>
          <p className="text-gray-400 mb-6">
            Start by registering your first NFC key to begin tracking scans and
            spreading Hafatsa.
          </p>
          <button className="px-6 py-3 bg-gold/20 hover:bg-gold/30 text-gold rounded-lg transition-all duration-200 font-semibold">
            Register Your First Key
          </button>
        </div>
      )}
    </div>
  );
}
