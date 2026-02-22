import type { Metadata } from 'next';
import { HeroSection } from '@/components/marketing/hero-section';
import { ProblemSection } from '@/components/marketing/problem-section';
import { SolutionSection } from '@/components/marketing/solution-section';
import { PricingSection } from '@/components/marketing/pricing-section';
import { ManifestoSection } from '@/components/marketing/manifesto-section';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

export const metadata: Metadata = {
  title: 'DreamNova | Nova Key Sacred NFC — Na Nach Nachman',
  description: 'The Nova Key is a sacred NFC object encoded with the frequency of Tikun HaKlali. $63 — the gematria of SaG. Unlock divine connection anywhere.',
  keywords: ['Nova Key', 'NFC sacré', 'Tikun HaKlali', 'Na Nach Nachman', 'DreamNova', 'spiritualité technologie'],
  openGraph: {
    title: 'DreamNova | Nova Key Sacred NFC — Na Nach Nachman',
    description: 'The Nova Key is a sacred NFC object encoded with the frequency of Tikun HaKlali. $63 — the gematria of SaG. Unlock divine connection anywhere.',
    url: 'https://dreamnova.vercel.app',
    siteName: 'DreamNova',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DreamNova | Nova Key Sacred NFC — Na Nach Nachman',
    description: 'The Nova Key is a sacred NFC object encoded with the frequency of Tikun HaKlali. $63 — the gematria of SaG. Unlock divine connection anywhere.',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PricingSection />
        <ManifestoSection />
      </main>
      <Footer />
    </>
  );
}
