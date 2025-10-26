import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import WhyItMattersSection from '@/components/sections/why-it-matters-section';
import CtaSection from '@/components/sections/cta-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <WhyItMattersSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
