import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type Service = {
  title: string;
  desc: string;
  icon: string;
  category: "core" | "ai";
};

const services: Service[] = [
  // Core Digital & Creative
  {
    title: "Web Development",
    desc: "Stunning, responsive websites tailored to convert visitors into customers.",
    icon: "🌐",
    category: "core",
  },
  {
    title: "Web Designing",
    desc: "Creative, user-friendly designs that enhance your brand's online presence.",
    icon: "🎨",
    category: "core",
  },
  {
    title: "Graphic Design",
    desc: "Logos, social media posts, and branding visuals that reflect your identity.",
    icon: "✨",
    category: "core",
  },
  {
    title: "Content Writing",
    desc: "SEO-rich blogs, captions, and ad copies that align with your brand voice.",
    icon: "✍️",
    category: "core",
  },
  {
    title: "Video Editing",
    desc: "Reels, ads, and long-form videos designed to captivate and engage.",
    icon: "🎬",
    category: "core",
  },
  {
    title: "YouTube Management",
    desc: "We grow and manage your YouTube presence from zero to hero.",
    icon: "📺",
    category: "core",
  },
  {
    title: "Search Engine Optimization",
    desc: "Rank higher on Google and attract organic traffic effortlessly.",
    icon: "🔍",
    category: "core",
  },
  {
    title: "Email Marketing",
    desc: "Automated email campaigns designed to convert and retain customers.",
    icon: "📧",
    category: "core",
  },
  {
    title: "E-Commerce Strategy",
    desc: "Shopify, WooCommerce, Wix — we optimize and scale online stores.",
    icon: "🛒",
    category: "core",
  },
  // AI SERVICES
  {
    title: "ChatGPT Integration",
    desc: "Smart assistants that engage users, generate leads, and elevate experience.",
    icon: "🤖",
    category: "ai",
  },
  {
    title: "OpenAI API Integration",
    desc: "Custom AI-powered workflows, automation, and predictive insights.",
    icon: "⚡",
    category: "ai",
  },
  {
    title: "Generative AI Consultancy",
    desc: "AI-driven creativity, automation & smart intelligence for your brand.",
    icon: "🧠",
    category: "ai",
  },
  {
    title: "AI Chatbot Development",
    desc: "24/7 AI chatbots that provide instant support & scale customer operations.",
    icon: "💬",
    category: "ai",
  },
];

type CategoryKey = "all" | "core" | "ai";

const categoryTabs: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All services" },
  { key: "core", label: "Digital & Creative" },
  { key: "ai", label: "AI & Automation" },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [isVisible, setIsVisible] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

      {/* HERO with staggered animations */}
      <section className="pt-28 pb-20 lg:pb-24 bg-gradient-to-b from-black/90 via-[#050505] to-[#050505]">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl grid lg:grid-cols-[1.5fr,1fr] gap-10 items-center">
          {/* LEFT */}
          <div className={`space-y-5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/40 px-4 py-1 text-[11px] uppercase tracking-[0.16em] text-orange-200 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="text-lg animate-bounce-slow">✨</span>
              <span>Midis · Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Services designed
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 animate-gradient">
                to turn clicks into clients.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/75 max-w-xl animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              We combine web, content, performance marketing, and AI automation
              into one connected growth engine—designed to launch, scale, and
              future-proof your brand.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 text-[11px] sm:text-xs text-white/75 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 hover:border-orange-400/60 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                Web &amp; Brand
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 hover:border-orange-400/60 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                Performance Marketing
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 hover:border-orange-400/60 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                AI &amp; Automation
              </span>
            </div>
          </div>

          {/* RIGHT – metrics card with slide in animation */}
          <aside className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-2xl bg-gradient-to-br from-[#1b1b1b] via-[#111] to-[#050505] border border-white/15 shadow-2xl shadow-orange-500/15 p-6 md:p-7 hover:border-orange-400/30 hover:shadow-orange-500/25 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-6">
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

      {/* SERVICES SECTION */}
      <section ref={servicesRef} className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Heading with slide up animation */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 animate-fade-in-up">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Everything you need under one roof.
              </h2>
              <p className="text-sm sm:text-base text-white/75 mt-2 max-w-xl">
                Mix and match services or build an end-to-end growth stack. We
                design, develop, write, run ads, and integrate AI—so you don't
                have to juggle multiple agencies.
              </p>
            </div>
          </div>

          {/* Category tabs with staggered animation */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categoryTabs.map((tab, idx) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm border transition-all duration-300 animate-fade-in-up ${
                    isActive
                      ? "bg-orange-500 text-black border-orange-400 shadow-lg shadow-orange-500/30 scale-105"
                      : "bg-white/5 text-white/75 border-white/20 hover:border-orange-400/60 hover:text-white hover:scale-105"
                  }`}
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* SERVICES GRID with enhanced animations */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((s, index) => (
                <article
                  key={`${s.title}-${activeCategory}`}
                  className="service-card group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-[#202020] via-[#151515] to-[#060606] border border-white/15 hover:border-orange-400/80 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 cursor-pointer"
                  style={{
                    animation: `fadeInScale 0.6s ease-out ${index * 0.08}s both`
                  }}
                >
                  {/* Animated background glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 animate-pulse-slow" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                        {s.icon}
                      </div>

                      <span
                        className={`text-[10px] px-2 py-1 rounded-full border transition-all duration-300 group-hover:scale-105 ${
                          s.category === "ai"
                            ? "border-orange-400/80 bg-orange-500/15 text-orange-200"
                            : "border-white/25 bg-white/10 text-white/70"
                        }`}
                      >
                        {s.category === "ai" ? "AI Service" : "Core Service"}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold group-hover:text-orange-300 transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/75 mt-3 group-hover:text-white/90 transition-colors duration-300">{s.desc}</p>

                    <button className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-orange-300 group-hover:text-orange-200 group-hover:gap-3 transition-all duration-300">
                      Learn more
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
                  </div>

                  {/* Animated corner glow */}
                  <div className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-orange-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI STRIP with slide animation */}
      <section className="py-12 bg-gradient-to-r from-[#12040f] via-[#080814] to-[#04050a] border-y border-white/10 animate-fade-in">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-6">
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

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientMove {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(20px) translateX(15px);
          }
          66% {
            transform: translateY(-15px) translateX(-20px);
          }
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out backwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .blob-1, .blob-2, .blob-3 {
          animation: float 15s ease-in-out infinite;
        }

        .blob-2 {
          animation-delay: 2s;
        }

        .blob-3 {
          animation-delay: 4s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #fb923c, #f472b6);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .counter-animation {
          display: inline-block;
          animation: pulseSlow 2s ease-in-out infinite;
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}