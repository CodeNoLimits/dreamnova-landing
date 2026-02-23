import { HeroSection } from "@/components/marketing/hero-section";
import { ProblemSection } from "@/components/marketing/problem-section";
import { SolutionSection } from "@/components/marketing/solution-section";
import { ProofSection } from "@/components/marketing/proof-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { HafatsaSection } from "@/components/marketing/hafatsa-section";
import { EstherSection } from "@/components/marketing/esther-section";
import { FundingSection } from "@/components/marketing/funding-section";
import { WaitlistSection } from "@/components/marketing/waitlist-section";
import { ManifestoSection } from "@/components/marketing/manifesto-section";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProofSection />
        <PricingSection />
        <HafatsaSection />
        <EstherSection />
        <FundingSection />
        <WaitlistSection />
        <ManifestoSection />
      </main>
      <Footer />
    </>
  );
}
