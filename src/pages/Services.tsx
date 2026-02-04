import { useEffect, useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { services, CategoryKey } from "@/data/services";
import { CategoryTabs } from "@/components/services/CategoryTabs";
import { ServiceGrid } from "@/components/services/ServiceGrid";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <main className="relative bg-[#050505] text-white min-h-screen overflow-hidden">
      {/* Background gradients with floating animation */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob-1 absolute -top-40 -left-40 w-80 h-80 rounded-full bg-orange-500/25 blur-3xl" />
        <div className="blob-2 absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-purple-500/25 blur-3xl" />
        <div className="blob-3 absolute bottom-[-6rem] left-20 w-72 h-72 rounded-full bg-pink-500/25 blur-3xl" />
      </div>

      <Navigation />

      {/* HERO with staggered animations - MOBILE FIRST */}
      <section className="section-spacing bg-gradient-to-b from-black/90 via-[#050505] to-[#050505]">
        <div className="container-responsive max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* LEFT - Mobile first content */}
          <div className={`space-y-3 sm:space-y-4 md:space-y-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/40 px-3 py-1 sm:px-4 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-orange-200 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="text-base sm:text-lg animate-bounce-slow">✨</span>
              <span>Midis · Services</span>
            </div>

            <h1 className="text-heading-lg font-semibold leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Services designed
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 animate-gradient">
                to turn clicks into clients.
              </span>
            </h1>

            <p className="text-body text-white/75 max-w-xl animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              We combine web, content, performance marketing, and AI automation
              into one connected growth engine—designed to launch, scale, and
              future-proof your brand.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 text-caption text-white/75 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <span className="px-2.5 py-1 sm:px-3 rounded-full bg-white/10 border border-white/20 hover:border-orange-400/60 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                Web &amp; Brand
              </span>
              <span className="px-2.5 py-1 sm:px-3 rounded-full bg-white/10 border border-white/20 hover:border-orange-400/60 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                Performance Marketing
              </span>
              <span className="px-2.5 py-1 sm:px-3 rounded-full bg-white/10 border border-white/20 hover:border-orange-400/60 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                AI &amp; Automation
              </span>
            </div>
          </div>

          {/* RIGHT – metrics card - Mobile first */}
          <aside className={`mt-8 md:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="card-responsive bg-gradient-to-br from-[#1b1b1b] via-[#111] to-[#050505] border border-white/15 shadow-2xl shadow-orange-500/15 hover:border-orange-400/30 hover:shadow-orange-500/25 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                    Why brands choose Midis
                  </p>
                  <p className="text-sm text-white/80 mt-1">
                    A team that blends design, dev &amp; AI.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500/15 flex items-center justify-center text-xl animate-pulse-slow">
                  🚀
                </div>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-center justify-between hover:bg-white/5 p-2 -m-2 rounded-lg transition-all duration-300">
                  <div>
                    <p className="uppercase tracking-[0.16em] text-white/45">
                      Projects delivered
                    </p>
                    <p className="text-2xl font-semibold counter-animation">60+</p>
                  </div>
                  <p className="text-white/65 max-w-[9rem] text-right">
                    Full-funnel websites, brand builds &amp; campaigns.
                  </p>
                </div>

                <div className="flex items-center justify-between border-y border-white/12 py-4 hover:bg-white/5 px-2 -mx-2 rounded-lg transition-all duration-300">
                  <div>
                    <p className="uppercase tracking-[0.16em] text-white/45">
                      Average ROI
                    </p>
                    <p className="text-2xl font-semibold counter-animation">3.4x</p>
                  </div>
                  <p className="text-white/65 max-w-[9rem] text-right">
                    Across performance &amp; automation-led campaigns.
                  </p>
                </div>

                <div className="flex items-center justify-between hover:bg-white/5 p-2 -m-2 rounded-lg transition-all duration-300">
                  <div>
                    <p className="uppercase tracking-[0.16em] text-white/45">
                      From idea to launch
                    </p>
                    <p className="text-2xl font-semibold">&lt; 6 weeks</p>
                  </div>
                  <p className="text-white/65 max-w-[9rem] text-right">
                    Agile builds backed by strategy &amp; reporting.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SERVICES SECTION - Mobile first */}
      <section ref={servicesRef} className="section-spacing">
        <div className="container-responsive max-w-6xl">
          {/* Heading - Mobile first */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
            <div>
              <h2 className="text-heading-md font-semibold">
                Everything you need under one roof.
              </h2>
              <p className="text-body text-white/75 mt-2 max-w-xl">
                Mix and match services or build an end-to-end growth stack. We
                design, develop, write, run ads, and integrate AI—so you don't
                have to juggle multiple agencies.
              </p>
            </div>
          </div>

          {/* Category tabs with staggered animation */}
          <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

          {/* SERVICES GRID with enhanced animations */}
          <ServiceGrid services={filteredServices} />
        </div>
      </section>

      {/* AI STRIP - Mobile first */}
      <section className="section-spacing-sm bg-gradient-to-r from-[#12040f] via-[#080814] to-[#04050a] border-y border-white/10 animate-fade-in">
        <div className="container-responsive max-w-6xl flex-stack-to-row items-center justify-between">
          <div className="max-w-xl animate-slide-in-left">
            <p className="text-xs uppercase tracking-[0.18em] text-orange-200/80 mb-2">
              AI at Midis
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
              Ready to add real AI to your marketing stack?
            </h3>
            <p className="text-sm sm:text-base text-white/80">
              We don't just plug in tools. We help you design AI use-cases,
              connect them to your workflows, and measure impact—whether that's
              chatbots, content engines, or full OpenAI API integrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs animate-slide-in-right">
            <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-white/80 hover:border-orange-400/60 hover:bg-black/60 transition-all duration-300 cursor-pointer hover:scale-105">
              ChatGPT Assistants
            </span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-white/80 hover:border-orange-400/60 hover:bg-black/60 transition-all duration-300 cursor-pointer hover:scale-105">
              AI Lead Capture
            </span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-white/80 hover:border-orange-400/60 hover:bg-black/60 transition-all duration-300 cursor-pointer hover:scale-105">
              Automated Reporting
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}