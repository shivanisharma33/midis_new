import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PortfolioMarquee } from '@/components/PortfolioMarquee';
import { MilestonesSection } from '@/components/MilestonesSection';
import { StrategiesSection } from '@/components/StrategiesSection';
import { ServicesSection } from '@/components/ServicesSection';

import { FreshIdeasSection } from '@/components/FreshIdeasSection';
import { ClientsMarquee } from '@/components/ClientsMarquee';
import { CreateSection } from '@/components/CreateSection';
import { ReasonsSection } from '@/components/ReasonsSection';
import { TeamSection } from '@/components/TeamSection';
import { AwardsSection } from '@/components/AwardsSection';
import { CTASection } from '@/components/CTASection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

// ⭐ NEW SECTION IMPORT
import ConsultationSection from '@/components/ConsultationSection';
import { WhyChooseMidis } from "@/components/WhyChooseMidis";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioMarquee />
      <WhyChooseMidis />
      <MilestonesSection />
      <StrategiesSection />
      <ServicesSection />

   

      <FreshIdeasSection />
      <ClientsMarquee />
      <CreateSection />
      <ReasonsSection />
      <TeamSection />
         {/* ⭐ INSERTED CONSULTATION FORM SECTION */}
      <ConsultationSection />
      <AwardsSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
