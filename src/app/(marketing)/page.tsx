import { HeroSection } from '@/components/marketing/hero-section';
import { ProblemSection } from '@/components/marketing/problem-section';
import { SolutionSection } from '@/components/marketing/solution-section';
import { PricingSection } from '@/components/marketing/pricing-section';
import { ManifestoSection } from '@/components/marketing/manifesto-section';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';

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
