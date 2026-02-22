'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Lock,
  Unlock,
  FileText,
  BarChart3,
  CheckCircle2,
  Circle,
  Clock,
  Zap,
  TrendingUp,
  Target,
  BookOpen,
  Megaphone,
  Users,
  Globe,
  ArrowRight,
  LogOut,
  Search,
  Filter,
  ChevronDown,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import documentsData from '@/data/documents.json';

// Marketing tasks derived from document corpus
interface MarketingTask {
  id: string;
  title: string;
  description: string;
  category: 'content' | 'outreach' | 'seo' | 'social' | 'partnerships' | 'product';
  priority: 'urgent' | 'high' | 'medium' | 'low';
  source: string; // document slug that inspired this task
  estimatedTime: string;
  status: 'todo' | 'in_progress' | 'done';
}

const ADMIN_PASSWORD = 'David32@';
const SESSION_KEY = 'dreamnova-admin-auth';

// Generate marketing tasks from document analysis
function generateMarketingTasks(): MarketingTask[] {
  const docs = documentsData.documents.filter(d => d.isBestVersion);
  const tasks: MarketingTask[] = [];

  // Content Marketing from documents
  const strategyDocs = docs.filter(d => d.category === 'strategy_funding');
  if (strategyDocs.length > 0) {
    tasks.push({
      id: 'mkt-1',
      title: 'Create Investor One-Pager from Strategy Documents',
      description: `Extract key metrics and value proposition from ${strategyDocs.length} strategy documents. Create a single-page PDF for investor outreach.`,
      category: 'content',
      priority: 'urgent',
      source: strategyDocs[0]?.slug || '',
      estimatedTime: '2h',
      status: 'todo',
    });
    tasks.push({
      id: 'mkt-2',
      title: 'Build Funding Roadmap Presentation',
      description: 'Transform the funding report and roadmap documents into a polished slide deck for grant applications.',
      category: 'outreach',
      priority: 'urgent',
      source: strategyDocs[0]?.slug || '',
      estimatedTime: '3h',
      status: 'todo',
    });
  }

  // Academic Outreach from research papers
  const researchDocs = docs.filter(d => d.category === 'deep_research');
  if (researchDocs.length > 0) {
    tasks.push({
      id: 'mkt-3',
      title: 'Submit French Source Code Paper to Academic Journals',
      description: `The French "Code Source" paper on quantum physics and Kabbalah is the most rigorous document. Submit to JCS (Journal of Consciousness Studies), Zygon, or Theology and Science.`,
      category: 'partnerships',
      priority: 'high',
      source: 'code-source-physique-quantique-kabbale-neurosciences',
      estimatedTime: '4h',
      status: 'todo',
    });
    tasks.push({
      id: 'mkt-4',
      title: 'Create Research Summary Blog Posts',
      description: `Transform ${researchDocs.length} deep research chapters into digestible blog posts for LinkedIn and Medium.`,
      category: 'content',
      priority: 'high',
      source: researchDocs[0]?.slug || '',
      estimatedTime: '5h',
      status: 'todo',
    });
  }

  // Product Marketing from Nova Key docs
  const productDocs = docs.filter(d => d.category === 'product');
  if (productDocs.length > 0) {
    tasks.push({
      id: 'mkt-5',
      title: 'Launch Nova Key Pre-Order Campaign',
      description: 'Use the NOVA-KEY-MASTERPRINT-CEO document to create compelling pre-order landing page copy and email sequences.',
      category: 'product',
      priority: 'urgent',
      source: productDocs[0]?.slug || '',
      estimatedTime: '3h',
      status: 'todo',
    });
  }

  // SEO from all content
  tasks.push({
    id: 'mkt-6',
    title: 'SEO Optimization — Research Library Pages',
    description: `Optimize meta tags, Open Graph data, and structured data for all ${docs.length} research document pages. Target keywords: "consciousness technology", "sacred technology", "Na Nach innovation".`,
    category: 'seo',
    priority: 'high',
    source: '',
    estimatedTime: '4h',
    status: 'todo',
  });

  // Social Media from Na Nach Protocol
  const naNachDocs = docs.filter(d => d.category === 'na_nach_protocol');
  if (naNachDocs.length > 0) {
    tasks.push({
      id: 'mkt-7',
      title: 'Create Na Nach Social Media Content Calendar',
      description: `Extract quotable passages from ${naNachDocs.length} Na Nach protocol documents. Create 30-day Instagram/TikTok content calendar with sacred quotes and visuals.`,
      category: 'social',
      priority: 'medium',
      source: naNachDocs[0]?.slug || '',
      estimatedTime: '3h',
      status: 'todo',
    });
  }

  // Codex Marketing
  const codexDocs = docs.filter(d => d.category === 'codex');
  if (codexDocs.length > 0) {
    tasks.push({
      id: 'mkt-8',
      title: 'Launch CODEX Dream Nova as Digital Download',
      description: `Package the ${codexDocs.length}-part CODEX as a premium digital download. Create sales page with chapter previews and testimonials.`,
      category: 'product',
      priority: 'medium',
      source: codexDocs[0]?.slug || '',
      estimatedTime: '4h',
      status: 'todo',
    });
  }

  // Quantum Kabbalah — Academic partnerships
  const quantumDocs = docs.filter(d => d.category === 'quantum_kabbalah');
  if (quantumDocs.length > 0) {
    tasks.push({
      id: 'mkt-9',
      title: 'Contact McGill/Hebrew University for Research Collaboration',
      description: 'Reach out to Dr. Schipper (McGill, JCS 2025) and Prof. Arzy (Hebrew University) referencing their published work. Propose collaboration on consciousness-technology research.',
      category: 'partnerships',
      priority: 'high',
      source: quantumDocs[0]?.slug || '',
      estimatedTime: '2h',
      status: 'todo',
    });
  }

  // Community Building
  tasks.push({
    id: 'mkt-10',
    title: 'Set Up Ambassador Program',
    description: 'Create referral system for early Nova Key buyers. Each referral = Hafatsa points. Use existing referral_code infrastructure in Supabase.',
    category: 'outreach',
    priority: 'medium',
    source: '',
    estimatedTime: '3h',
    status: 'todo',
  });

  // Google Ads & Outreach
  tasks.push({
    id: 'mkt-11',
    title: 'Set Up Google Ads for Nova Key — $63 Sacred Number',
    description: 'Create Google Ads campaign targeting "NFC spiritual technology", "sacred jewelry", "consciousness tools". Use $63 price point (SaG gematria) as hook.',
    category: 'outreach',
    priority: 'high',
    source: '',
    estimatedTime: '2h',
    status: 'todo',
  });

  // i18n expansion
  tasks.push({
    id: 'mkt-12',
    title: 'Translate Key Marketing Pages to Hebrew & French',
    description: 'Ensure /nova-key, /source-code, /research are fully translated. Hebrew audience is primary market. French for academic credibility.',
    category: 'content',
    priority: 'high',
    source: '',
    estimatedTime: '3h',
    status: 'todo',
  });

  return tasks;
}

const CATEGORY_CONFIG = {
  content: { label: 'Content', color: '#00D4FF', icon: FileText },
  outreach: { label: 'Outreach', color: '#FF6B35', icon: Megaphone },
  seo: { label: 'SEO', color: '#00FF88', icon: Globe },
  social: { label: 'Social Media', color: '#FF69B4', icon: Users },
  partnerships: { label: 'Partnerships', color: '#8A2BE2', icon: Target },
  product: { label: 'Product', color: '#D4AF37', icon: Zap },
};

const PRIORITY_CONFIG = {
  urgent: { label: 'URGENT', color: '#FF4444', bg: '#FF444415' },
  high: { label: 'HIGH', color: '#FFD700', bg: '#FFD70015' },
  medium: { label: 'MEDIUM', color: '#00D4FF', bg: '#00D4FF15' },
  low: { label: 'LOW', color: '#888888', bg: '#88888815' },
};

export default function AdminPage() {
  const { t } = useTranslation();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState<MarketingTask[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Check session on mount
  useEffect(() => {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (session === 'authenticated') {
      setAuthenticated(true);
      setTasks(loadTasks());
    }
  }, []);

  function loadTasks(): MarketingTask[] {
    const saved = localStorage.getItem('dreamnova-admin-tasks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fall through to generate
      }
    }
    const generated = generateMarketingTasks();
    localStorage.setItem('dreamnova-admin-tasks', JSON.stringify(generated));
    return generated;
  }

  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'authenticated');
      setAuthenticated(true);
      setTasks(loadTasks());
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  }, [password]);

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthenticated(false);
    setPassword('');
  }, []);

  const toggleTaskStatus = useCallback((taskId: string) => {
    setTasks(prev => {
      const updated = prev.map(task => {
        if (task.id !== taskId) return task;
        const nextStatus: MarketingTask['status'] = task.status === 'todo' ? 'in_progress' : task.status === 'in_progress' ? 'done' : 'todo';
        return { ...task, status: nextStatus };
      });
      localStorage.setItem('dreamnova-admin-tasks', JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    if (filterCategory !== 'all' && task.category !== filterCategory) return false;
    if (filterPriority !== 'all' && task.priority !== filterPriority) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return task.title.toLowerCase().includes(q) || task.description.toLowerCase().includes(q);
    }
    return true;
  });

  // Stats
  const stats = {
    total: tasks.length,
    done: tasks.filter(t => t.status === 'done').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    urgent: tasks.filter(t => t.priority === 'urgent' && t.status !== 'done').length,
  };

  const docs = documentsData.documents.filter(d => d.isBestVersion);

  // Login Gate
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-sacred-black flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Lock className="w-8 h-8 text-gold" />
            </div>
            <h1 className="font-display text-2xl font-bold text-white">
              <span className="text-gold">DREAM</span><span className="text-cyan">NOVA</span> Admin
            </h1>
            <p className="text-sm text-gray-500 mt-2">Mission Control</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                className="w-full px-4 py-3 bg-sacred-surface border border-gold/20 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all"
              />
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center"
              >
                {error}
              </motion.p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-gold/20 border border-gold text-gold font-display font-bold rounded-xl hover:bg-gold/30 transition-all duration-300"
            >
              <Unlock className="w-4 h-4 inline mr-2" />
              Enter Mission Control
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-gray-600 hover:text-gold transition-colors">
              Back to DreamNova
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-sacred-black text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-sacred-black/80 backdrop-blur-xl border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-display text-lg font-bold">
              <span className="text-gold">DREAM</span><span className="text-cyan">NOVA</span>
            </Link>
            <span className="text-xs text-gold/60 font-mono px-2 py-0.5 rounded-full bg-gold/5 border border-gold/15">
              ADMIN
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-xs text-gray-400 hover:text-gold transition-colors flex items-center gap-1"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs text-gray-500 hover:text-red-400 transition-colors flex items-center gap-1"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Tasks', value: stats.total, icon: FileText, color: '#D4AF37' },
            { label: 'Completed', value: stats.done, icon: CheckCircle2, color: '#00FF88' },
            { label: 'In Progress', value: stats.inProgress, icon: Clock, color: '#00D4FF' },
            { label: 'Urgent', value: stats.urgent, icon: Zap, color: '#FF4444' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-sacred-surface border border-gold/10 hover:border-gold/20 transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                <span className="text-xs text-gray-500">{stat.label}</span>
              </div>
              <p className="text-2xl font-display font-bold" style={{ color: stat.color }}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Document Corpus Summary */}
        <div className="mb-8 p-5 rounded-xl bg-sacred-surface border border-gold/10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-gold" />
            <h2 className="font-display text-lg font-bold text-gold">Document Corpus</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Documents</span>
              <p className="text-white font-bold">{docs.length} unique</p>
            </div>
            <div>
              <span className="text-gray-500">Total Words</span>
              <p className="text-white font-bold">{documentsData.stats.uniqueWords.toLocaleString()}</p>
            </div>
            <div>
              <span className="text-gray-500">Categories</span>
              <p className="text-white font-bold">{Object.keys(documentsData.categories).length}</p>
            </div>
            <div>
              <span className="text-gray-500">Languages</span>
              <p className="text-white font-bold">
                {Object.entries(documentsData.stats.byLanguage).map(([lang, count]) => (
                  <span key={lang} className="mr-2">{lang === 'he' ? '🇮🇱' : lang === 'fr' ? '🇫🇷' : '🇬🇧'} {count}</span>
                ))}
              </p>
            </div>
          </div>
        </div>

        {/* Marketing Tasks Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <h2 className="font-display text-xl font-bold text-white">Marketing Tasks</h2>
              <span className="text-xs text-gray-500 font-mono">
                (derived from {docs.length} documents)
              </span>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-gold transition-colors px-3 py-1.5 rounded-lg border border-gold/10 hover:border-gold/25"
            >
              <Filter className="w-3.5 h-3.5" />
              Filters
              <ChevronDown className={`w-3 h-3 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Search + Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="space-y-3 p-4 rounded-xl bg-sacred-surface border border-gold/10">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Search tasks..."
                      className="w-full pl-10 pr-4 py-2.5 bg-sacred-black/50 border border-gold/10 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/30"
                    />
                  </div>
                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilterCategory('all')}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                        filterCategory === 'all'
                          ? 'bg-gold/20 text-gold border border-gold/40'
                          : 'bg-sacred-black/50 text-gray-500 border border-gold/10 hover:text-gray-300'
                      }`}
                    >
                      All
                    </button>
                    {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => (
                      <button
                        key={key}
                        onClick={() => setFilterCategory(key)}
                        className={`text-xs px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                          filterCategory === key
                            ? 'border'
                            : 'bg-sacred-black/50 border border-gold/10 hover:text-gray-300'
                        }`}
                        style={
                          filterCategory === key
                            ? { backgroundColor: `${cfg.color}15`, color: cfg.color, borderColor: `${cfg.color}40` }
                            : { color: '#888' }
                        }
                      >
                        <cfg.icon className="w-3 h-3" />
                        {cfg.label}
                      </button>
                    ))}
                  </div>
                  {/* Priority Filter */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setFilterPriority('all')}
                      className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                        filterPriority === 'all'
                          ? 'bg-gold/20 text-gold border border-gold/40'
                          : 'bg-sacred-black/50 text-gray-500 border border-gold/10 hover:text-gray-300'
                      }`}
                    >
                      All Priorities
                    </button>
                    {Object.entries(PRIORITY_CONFIG).map(([key, cfg]) => (
                      <button
                        key={key}
                        onClick={() => setFilterPriority(key)}
                        className={`text-xs px-3 py-1.5 rounded-full transition-all`}
                        style={
                          filterPriority === key
                            ? { backgroundColor: cfg.bg, color: cfg.color, border: `1px solid ${cfg.color}40` }
                            : { backgroundColor: 'transparent', color: '#888', border: '1px solid rgba(212,175,55,0.1)' }
                        }
                      >
                        {cfg.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Task List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredTasks.map((task) => {
              const catConfig = CATEGORY_CONFIG[task.category];
              const prioConfig = PRIORITY_CONFIG[task.priority];
              const StatusIcon = task.status === 'done' ? CheckCircle2 : task.status === 'in_progress' ? Clock : Circle;

              return (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`group p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    task.status === 'done'
                      ? 'bg-sacred-surface/50 border-green-900/30 opacity-70'
                      : 'bg-sacred-surface border-gold/10 hover:border-gold/25'
                  }`}
                  style={task.status !== 'done' ? {
                    borderLeftWidth: '3px',
                    borderLeftColor: catConfig.color,
                  } : undefined}
                >
                  <div className="flex items-start gap-3">
                    {/* Status Toggle */}
                    <button
                      onClick={() => toggleTaskStatus(task.id)}
                      className="mt-0.5 flex-shrink-0 transition-colors"
                      style={{ color: task.status === 'done' ? '#00FF88' : task.status === 'in_progress' ? '#00D4FF' : '#555' }}
                    >
                      <StatusIcon className="w-5 h-5" />
                    </button>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className={`text-sm font-semibold leading-tight ${
                          task.status === 'done' ? 'line-through text-gray-500' : 'text-white'
                        }`}>
                          {task.title}
                        </h3>
                        <span
                          className="flex-shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: prioConfig.bg, color: prioConfig.color }}
                        >
                          {prioConfig.label}
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed mb-2 line-clamp-2">
                        {task.description}
                      </p>

                      <div className="flex items-center gap-3 text-[11px]">
                        {/* Category badge */}
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${catConfig.color}10`,
                            color: catConfig.color,
                            border: `1px solid ${catConfig.color}20`,
                          }}
                        >
                          <catConfig.icon className="w-3 h-3" />
                          {catConfig.label}
                        </span>

                        {/* Time estimate */}
                        <span className="text-gray-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {task.estimatedTime}
                        </span>

                        {/* Source document link */}
                        {task.source && (
                          <Link
                            href={`/research/${task.source}`}
                            className="text-gray-600 hover:text-gold transition-colors flex items-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Source
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredTasks.length === 0 && (
            <div className="text-center py-12 text-gray-600">
              <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No tasks match your filters</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/research"
            className="group p-5 rounded-xl bg-sacred-surface border border-gold/10 hover:border-gold/25 transition-all"
          >
            <BookOpen className="w-6 h-6 text-gold mb-2" />
            <h3 className="font-display text-sm font-bold text-white group-hover:text-gold transition-colors">
              Research Library
            </h3>
            <p className="text-xs text-gray-500 mt-1">Browse all {docs.length} documents</p>
            <ArrowRight className="w-4 h-4 text-gold/40 mt-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/dashboard"
            className="group p-5 rounded-xl bg-sacred-surface border border-gold/10 hover:border-gold/25 transition-all"
          >
            <BarChart3 className="w-6 h-6 text-cyan mb-2" />
            <h3 className="font-display text-sm font-bold text-white group-hover:text-cyan transition-colors">
              Analytics Dashboard
            </h3>
            <p className="text-xs text-gray-500 mt-1">Orders, NFC scans, Hafatsa</p>
            <ArrowRight className="w-4 h-4 text-cyan/40 mt-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/codex"
            className="group p-5 rounded-xl bg-sacred-surface border border-gold/10 hover:border-gold/25 transition-all"
          >
            <TrendingUp className="w-6 h-6 text-green-400 mb-2" />
            <h3 className="font-display text-sm font-bold text-white group-hover:text-green-400 transition-colors">
              CODEX Reader
            </h3>
            <p className="text-xs text-gray-500 mt-1">Read the full CODEX Dream Nova</p>
            <ArrowRight className="w-4 h-4 text-green-400/40 mt-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gold/10 text-center text-xs text-gray-600">
          <p>DreamNova Mission Control v1.0 — Na Nach Nachma Nachman MeUman</p>
          <p className="mt-1">Ein Ye'ush Ba'olam Klal</p>
        </div>
      </div>
    </div>
  );
}
