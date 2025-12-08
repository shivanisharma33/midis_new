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

// ⭐ NEW SECTIONS
import ConsultationSection from '@/components/ConsultationSection';
// import { CaseStudySection } from '@/components/CaseStudySection'; 


const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioMarquee />

      {/* ⭐ INSERT CASE STUDY BELOW MILESTONES */}
      <MilestonesSection />
      {/* <CaseStudySection /> */}

      <StrategiesSection />
      <ServicesSection />

      <FreshIdeasSection />
      <ClientsMarquee />
      <CreateSection />
      <ReasonsSection />
      <TeamSection />

      {/* ⭐ CONSULTATION FORM */}
      <ConsultationSection />

      <AwardsSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
