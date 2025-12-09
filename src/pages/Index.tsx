import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PortfolioMarquee } from '@/components/PortfolioMarquee';
// import { MilestonesSection } from '@/components/MilestonesSection';
// import { StrategiesSection } from '@/components/StrategiesSection';
import { ServicesSection } from '@/components/ServicesSection';
// import StartupSolutionsSection from "@/components/StartupSolutionsSection";
import ShowcaseExcellenceSection from "@/components/ShowcaseExcellenceSection";

import { ClientsMarquee } from '@/components/ClientsMarquee';
import { CreateSection } from '@/components/CreateSection';
import { ReasonsSection } from '@/components/ReasonsSection';
import { TeamSection } from '@/components/TeamSection';
import { AwardsSection } from '@/components/AwardsSection';
import { CTASection } from '@/components/CTASection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import CrearistCollage from "@/components/CrearistCollage";
import FuelingYourGrowthWithFreshIdeas from "@/components/FuelingYourGrowthWithFreshIdeas";
// ⭐ NEW SECTIONS
// import ConsultationSection from '@/components/ConsultationSection';
// import { CaseStudySection } from '@/components/CaseStudySection'; 


const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioMarquee />
 <CrearistCollage />  
 <ShowcaseExcellenceSection />
      {/* ⭐ INSERT CASE STUDY BELOW MILESTONES */}
      {/* <MilestonesSection /> */}
      {/* <CaseStudySection /> */}
{/* <StartupSolutionsSection /> */}

      {/* <StrategiesSection /> */}
      <ServicesSection />
      <FuelingYourGrowthWithFreshIdeas />
     
      <ClientsMarquee />
      <CreateSection />
      <ReasonsSection />
      <TeamSection />

      {/* ⭐ CONSULTATION FORM */}
      {/* <ConsultationSection /> */}

      <AwardsSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
