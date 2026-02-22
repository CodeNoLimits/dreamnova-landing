import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Source Code | Principes Sacrés — DreamNova',
  description: 'Les principes fondateurs de DreamNova : la technologie au service de la lumière. Basé sur les enseignements de Reb Nachman.',
  keywords: ['DreamNova source code', 'principes sacrés', 'Reb Nachman technologie'],
  openGraph: {
    title: 'Source Code | Principes Sacrés — DreamNova',
    description: 'Les principes fondateurs de DreamNova : la technologie au service de la lumière. Basé sur les enseignements de Reb Nachman.',
    url: 'https://dreamnova.vercel.app/source-code',
    siteName: 'DreamNova',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Source Code | Principes Sacrés — DreamNova',
    description: 'Les principes fondateurs de DreamNova : la technologie au service de la lumière. Basé sur les enseignements de Reb Nachman.',
  },
};

export default function SourceCodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
