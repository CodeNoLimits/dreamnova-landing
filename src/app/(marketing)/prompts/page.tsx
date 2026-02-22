import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'AI Prompts Sacrés | DreamNova',
  description: 'Bibliothèque de prompts IA pour entrepreneurs spirituels. Automatisez votre business avec des prompts inspirés de la sagesse de Reb Nachman.',
  openGraph: {
    title: 'AI Prompts Sacrés | DreamNova',
    description: '100+ prompts IA pour créer, vendre et scaler votre mission.',
  },
};

const PROMPT_CATEGORIES = [
  {
    icon: '✍️',
    title: 'Copywriting & Ventes',
    count: 24,
    color: '#D4AF37',
    prompts: [
      'Écris une page de vente pour [PRODUIT] ciblant [AUDIENCE] avec une accroche sur la transformation...',
      'Génère 10 objets d\'email pour relancer les paniers abandonnés de [BOUTIQUE]...',
      'Crée un script de vente en 5 étapes pour [SERVICE] avec objections et réponses...',
    ],
  },
  {
    icon: '🎯',
    title: 'Stratégie Business',
    count: 18,
    color: '#00D4FF',
    prompts: [
      'Analyse le marché [SECTEUR] et identifie les 3 opportunités non exploitées en 2026...',
      'Crée un plan de lancement en 30 jours pour [PRODUIT] avec budget limité de [MONTANT]...',
      'Génère 5 idées de micro-SaaS rentables dans [NICHE] avec estimation de revenus...',
    ],
  },
  {
    icon: '🤖',
    title: 'Automatisation IA',
    count: 21,
    color: '#8B5CF6',
    prompts: [
      'Écris un workflow n8n complet pour automatiser [PROCESSUS] avec ces étapes...',
      'Crée un agent IA qui gère les emails de [TYPE] et répond en moins de 5 minutes...',
      'Génère le code Python pour scraper [SITE] et stocker dans Supabase...',
    ],
  },
  {
    icon: '📱',
    title: 'Réseaux Sociaux',
    count: 31,
    color: '#E67E22',
    prompts: [
      'Crée 30 idées de contenu TikTok pour [NICHE] avec hooks, scripts et CTA...',
      'Génère un carousel LinkedIn en 8 slides sur [SUJET] avec données et statistiques...',
      'Écris 7 Reels Instagram pour lancer [PRODUIT] en utilisant le storytelling...',
    ],
  },
  {
    icon: '🧠',
    title: 'Productivité ADHD',
    count: 15,
    color: '#10B981',
    prompts: [
      'Décompose ce projet en micro-tâches de max 25 minutes avec critères de succès clairs...',
      'Crée un système de priorités hebdomadaires basé sur l\'impact/effort pour [OBJECTIFS]...',
      'Génère un rituel matinal de 15 minutes pour maximiser la dopamine et le focus...',
    ],
  },
  {
    icon: '🕊️',
    title: 'Spiritualité & Mission',
    count: 12,
    color: '#D4AF37',
    prompts: [
      'Intègre les enseignements de Reb Nachman sur [SUJET] dans un contenu pour entrepreneurs...',
      'Écris une méditation guidée de 10 minutes inspirée du Likoutey Moharan...',
      'Crée un manifeste de mission entrepreneuriale aligné avec les valeurs de [TRADITION]...',
    ],
  },
];

export default function PromptsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#050508', minHeight: '100vh', color: '#fff' }}>
        {/* Hero */}
        <section style={{
          padding: '120px 24px 80px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 70%)',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
          <h1 style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #D4AF37, #fff, #00D4FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '24px',
            lineHeight: 1.2,
          }}>
            Prompts IA Sacrés
          </h1>
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '20px',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
          }}>
            121 prompts testés pour automatiser votre business, créer du contenu et scaler votre mission.
            Inspirés par la sagesse de Reb Nachman — pour l&apos;entrepreneur spirituel moderne.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/checkout" style={{
              display: 'inline-block',
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
              color: '#000',
              fontFamily: 'Cinzel, serif',
              fontWeight: 700,
              fontSize: '16px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '1px',
            }}>
              OBTENIR L&apos;ACCÈS COMPLET — $63
            </Link>
            <a href="#prompts" style={{
              display: 'inline-block',
              padding: '16px 40px',
              border: '1px solid rgba(212,175,55,0.4)',
              color: '#D4AF37',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}>
              Voir les exemples ↓
            </a>
          </div>
        </section>

        {/* Stats bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          padding: '32px 24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          flexWrap: 'wrap',
        }}>
          {[
            { n: '121', label: 'Prompts testés' },
            { n: '6', label: 'Catégories' },
            { n: '∞', label: 'Cas d\'usage' },
            { n: '$63', label: 'Accès à vie' },
          ].map(({ n, label }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cinzel, serif', fontSize: '32px', color: '#D4AF37', fontWeight: 700 }}>{n}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Prompt categories */}
        <section id="prompts" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {PROMPT_CATEGORIES.map((cat) => (
              <div key={cat.title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${cat.color}22`,
                borderRadius: '16px',
                padding: '28px',
                transition: 'border-color 0.3s',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '28px' }}>{cat.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Cinzel, serif', fontWeight: 600, color: '#fff', fontSize: '16px' }}>{cat.title}</div>
                    <div style={{ fontFamily: 'Rajdhani, sans-serif', color: cat.color, fontSize: '13px' }}>{cat.count} prompts</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cat.prompts.map((p, i) => (
                    <div key={i} style={{
                      background: 'rgba(0,0,0,0.3)',
                      borderRadius: '8px',
                      padding: '12px',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.5,
                      borderLeft: `2px solid ${cat.color}44`,
                    }}>
                      {p}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: 'Rajdhani, sans-serif' }}>
                  + {cat.count - 3} autres prompts dans l&apos;accès complet
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section style={{
          padding: '80px 24px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}>
          <h2 style={{
            fontFamily: 'Cinzel, serif',
            fontSize: 'clamp(24px, 4vw, 40px)',
            marginBottom: '16px',
            color: '#fff',
          }}>
            Prêt à automatiser votre mission ?
          </h2>
          <p style={{
            fontFamily: 'Rajdhani, sans-serif',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '40px',
            fontSize: '18px',
          }}>
            Accès immédiat à 121 prompts + futures mises à jour. Une fois, à vie.
          </p>
          <Link href="/checkout" style={{
            display: 'inline-block',
            padding: '20px 60px',
            background: 'linear-gradient(135deg, #D4AF37, #B8960C)',
            color: '#000',
            fontFamily: 'Cinzel, serif',
            fontWeight: 700,
            fontSize: '18px',
            borderRadius: '8px',
            textDecoration: 'none',
            letterSpacing: '2px',
          }}>
            ACCÈS NOVA — $63
          </Link>
          <p style={{
            marginTop: '16px',
            fontFamily: 'Rajdhani, sans-serif',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '14px',
          }}>
            נ נח נחמ נחמן מאומן — Ein Ye&apos;ush Ba&apos;olam Klal
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
