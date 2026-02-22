import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Azamra | Trouver le Point Bon — DreamNova',
  description: 'L\'enseignement de l\'Azamra : trouver le point bon en soi et dans les autres. Méditation guidée par les paroles de Rabbi Nachman.',
  keywords: ['Azamra', 'point bon', 'Rabbi Nachman', 'Likoutey Moharan', 'DreamNova'],
  openGraph: {
    title: 'Azamra | Trouver le Point Bon — DreamNova',
    description: 'L\'enseignement de l\'Azamra : trouver le point bon en soi et dans les autres. Méditation guidée par les paroles de Rabbi Nachman.',
    url: 'https://dreamnova.vercel.app/azamra',
    siteName: 'DreamNova',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azamra | Trouver le Point Bon — DreamNova',
    description: 'L\'enseignement de l\'Azamra : trouver le point bon en soi et dans les autres. Méditation guidée par les paroles de Rabbi Nachman.',
  },
};

export default function AzamraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
