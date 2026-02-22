import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | DreamNova',
  description: 'Contactez l\'équipe DreamNova pour questions sur la Nova Key, partenariats ou collaborations spirituelles. Jerusalem, Israel.',
  keywords: ['contact DreamNova', 'Nova Key', 'partenariat'],
  openGraph: {
    title: 'Contact | DreamNova',
    description: 'Contactez l\'équipe DreamNova pour questions sur la Nova Key, partenariats ou collaborations spirituelles. Jerusalem, Israel.',
    url: 'https://dreamnova.vercel.app/contact',
    siteName: 'DreamNova',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | DreamNova',
    description: 'Contactez l\'équipe DreamNova pour questions sur la Nova Key, partenariats ou collaborations spirituelles. Jerusalem, Israel.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
