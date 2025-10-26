import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import WhyItMattersSection from '@/components/sections/why-it-matters-section';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/layout/footer';
import FactSection from '@/components/sections/fact-section';
import CompanyOverviewSection from '@/components/sections/company-overview-section';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection nextSection="fact" />
        <FactSection nextSection="about" />
        <AboutSection nextSection="company-overview" />
        <CompanyOverviewSection nextSection="how-it-works" />
        <HowItWorksSection nextSection="why-it-matters" />
        <WhyItMattersSection nextSection="cta" />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
