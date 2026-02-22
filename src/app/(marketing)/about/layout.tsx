import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos | Mission DreamNova — Hafatsa Rabbi Nachman',
  description: 'DreamNova est née d\'une mission : propager l\'enseignement de Rabbi Nachman de Bratslav via la technologie. 63 millions de personnes. Na Nach Nachman MeUman.',
  keywords: ['DreamNova', 'Rabbi Nachman', 'Bratslav', 'mission hafatsa', 'NFC spirituel'],
  openGraph: {
    title: 'À Propos | Mission DreamNova — Hafatsa Rabbi Nachman',
    description: 'DreamNova est née d\'une mission : propager l\'enseignement de Rabbi Nachman de Bratslav via la technologie. 63 millions de personnes. Na Nach Nachman MeUman.',
    url: 'https://dreamnova.vercel.app/about',
    siteName: 'DreamNova',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À Propos | Mission DreamNova — Hafatsa Rabbi Nachman',
    description: 'DreamNova est née d\'une mission : propager l\'enseignement de Rabbi Nachman de Bratslav via la technologie. 63 millions de personnes. Na Nach Nachman MeUman.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
