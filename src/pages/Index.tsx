import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import PortfolioMarquee from '@/components/PortfolioMarquee';

import { ServicesSection } from '@/components/ServicesSection';
import ShowcaseExcellenceSection from "@/components/ShowcaseExcellenceSection";
import { ClientsMarquee } from '@/components/ClientsMarquee';

import { ReasonsSection } from '@/components/ReasonsSection';
import { TeamSection } from '@/components/TeamSection';

import { CTASection } from '@/components/CTASection';

import { Footer } from '@/components/Footer';
import CrearistCollage from "@/components/CrearistCollage";
import FuelingYourGrowthWithFreshIdeas from "@/components/FuelingYourGrowthWithFreshIdeas";
// import { CurlyCursor } from "@/components/CurlyCursor";


const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden relative">

      {/* ✅ GLOBAL CURSOR */}
      {/* <CurlyCursor /> */}
 
      {/* ================= NAV + HERO ================= */}
      <Navigation />
      <HeroSection />

      {/* ================= ABOUT ================= */}
      <AboutSection />


      {/* ================= PORTFOLIO ================= */}
      <PortfolioMarquee />
      <CrearistCollage />

      {/* ================= SHOWCASE ================= */}
      <ShowcaseExcellenceSection />

      {/* ================= SERVICES ================= */}
      <ServicesSection />
      <FuelingYourGrowthWithFreshIdeas />

      {/* ================= CLIENTS ================= */}
      <ClientsMarquee />

      {/* ================= CREATE / REASONS ================= */}
   
      <ReasonsSection />

      {/* ================= TEAM ================= */}
      <TeamSection />

      {/* ================= AWARDS + CTA ================= */}

      <CTASection />

      {/* ================= TESTIMONIALS ================= */}
   

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
};

export default Index;
