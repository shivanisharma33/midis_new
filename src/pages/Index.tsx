import { Navigation } from '@/components/Navigation';
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { ServicesSection } from '@/components/ServicesSection';


import { ReasonsSection } from '@/components/ReasonsSection';
import { TeamSection } from '@/components/TeamSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import CrearistCollage from "@/components/CrearistCollage";
import FuelingYourGrowthWithFreshIdeas from "@/components/FuelingYourGrowthWithFreshIdeas";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden relative">

      {/* ================= NAV + HERO ================= */}
      <Navigation />
      <HeroSection />

      {/* ================= ABOUT ================= */}
      <AboutSection />

      {/* ================= PORTFOLIO ================= */}
      <CrearistCollage />

      {/* ================= SERVICES ================= */}
      <ServicesSection />
      <FuelingYourGrowthWithFreshIdeas />

      {/* ================= CREATE / REASONS ================= */}

      <ReasonsSection />

      {/* ================= TEAM ================= */}
      <TeamSection />

      {/* ================= AWARDS + CTA ================= */}
      <CTASection />

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
};

export default Index;
