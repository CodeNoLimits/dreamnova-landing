import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tikun HaKlali | 10 Psaumes Sacrés — DreamNova',
  description: 'Les 10 Psaumes du Tikun HaKlali de Rabbi Nachman avec fréquences binaurales et intentions sacrées. Accès via Nova Key NFC.',
  keywords: ['Tikun HaKlali', 'Psaumes Nachman', '10 psaumes', 'DreamNova', 'méditation'],
  openGraph: {
    title: 'Tikun HaKlali | 10 Psaumes Sacrés — DreamNova',
    description: 'Les 10 Psaumes du Tikun HaKlali de Rabbi Nachman avec fréquences binaurales et intentions sacrées. Accès via Nova Key NFC.',
    url: 'https://dreamnova.vercel.app/tikkun',
    siteName: 'DreamNova',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tikun HaKlali | 10 Psaumes Sacrés — DreamNova',
    description: 'Les 10 Psaumes du Tikun HaKlali de Rabbi Nachman avec fréquences binaurales et intentions sacrées. Accès via Nova Key NFC.',
  },
};

export default function TikkunLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
