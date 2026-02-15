import type { Metadata, Viewport } from 'next';
import { Cinzel, Rajdhani, Space_Mono, Cormorant_Garamond } from 'next/font/google';
import { Toaster } from 'sonner';
import '../styles/sacred-theme.css';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '700', '900'],
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'DREAM NOVA — Ne Calculez Plus. Vivez.',
    template: '%s | DREAM NOVA',
  },
  description:
    "Le premier OS de Conscience qui transforme l'anxiété numérique en Vitalité Pure. Propulsé par l'algorithme fractal du Petek. $63 — The Covenant Pack.",
  keywords: [
    'Nova Key', 'NFC spiritual card', 'Breslov technology', 'Tikkun HaKlali',
    'Azamra', 'Na Nach', 'sacred tech', 'Gödel Kabbalah', 'Source Code of Reality',
  ],
  authors: [{ name: 'Dream Nova', url: 'https://dreamnova.com' }],
  creator: 'Dream Nova',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamnova.com'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://dreamnova.com',
    siteName: 'DREAM NOVA',
    title: 'DREAM NOVA — Ne Calculez Plus. Vivez.',
    description: "Le premier OS de Conscience. Nova Key NFC + Caméa + Azamra OS — $63.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Dream Nova' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DREAM NOVA — Ne Calculez Plus. Vivez.',
    description: "Le premier OS de Conscience. Nova Key NFC — $63.",
  },
};

export const viewport: Viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`dark ${cinzel.variable} ${rajdhani.variable} ${spaceMono.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-sacred-black text-[#E8E6E3] antialiased overflow-x-hidden">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { background: '#0E0E1A', border: '1px solid #1A1A2E', color: '#E8E6E3' },
          }}
        />
      </body>
    </html>
  );
}
