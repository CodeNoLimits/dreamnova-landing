import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Nova Key | Sacred NFC — Tikun HaKlali | DreamNova',
  description: 'The Nova Key: NFC-encoded sacred object. Tap to unlock the 10 Psalms of Tikun HaKlali, binaural frequencies, and divine intention. $63.',
  keywords: ['Nova Key', 'NFC sacré', 'Tikun HaKlali', 'Reb Nachman', 'objet sacré', 'DreamNova'],
  openGraph: {
    title: 'Nova Key | Sacred NFC — Tikun HaKlali | DreamNova',
    description: 'The Nova Key: NFC-encoded sacred object. Tap to unlock the 10 Psalms of Tikun HaKlali, binaural frequencies, and divine intention. $63.',
    url: 'https://dreamnova.vercel.app/nova-key',
    siteName: 'DreamNova',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Key | Sacred NFC — Tikun HaKlali | DreamNova',
    description: 'The Nova Key: NFC-encoded sacred object. Tap to unlock the 10 Psalms of Tikun HaKlali, binaural frequencies, and divine intention. $63.',
  },
};

const novaKeyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': 'https://dreamnova.vercel.app/nova-key/#product',
  name: 'Nova Key — Sacred NFC',
  description: 'NFC-encoded sacred object. Tap to unlock the 10 Psalms of Tikun HaKlali, binaural frequencies, and divine intention.',
  brand: { '@type': 'Brand', name: 'DreamNova' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '63',
    availability: 'https://schema.org/InStock',
    url: 'https://dreamnova.vercel.app/nova-key',
    seller: { '@type': 'Organization', name: 'DreamNova' },
  },
  category: 'Spiritual Technology',
  url: 'https://dreamnova.vercel.app/nova-key',
};

export default function NovaKeyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(novaKeyJsonLd) }}
      />
      {children}
    </>
  );
}
