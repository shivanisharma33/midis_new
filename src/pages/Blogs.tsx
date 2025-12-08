import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type BlogPost = {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  thumbnail?: string;
  tagLine: string;
};

const featuredPost: BlogPost = {
  id: 1,
  title: "How AI-Powered Funnels Are Changing Modern Marketing",
  category: "Artificial Intelligence",
  readTime: "7 min read",
  date: "Nov 28, 2025",
  tagLine:
    "From cold traffic to loyal customers using conversational journeys, not static forms.",
};

const posts: BlogPost[] = [
  {
    id: 2,
    title: "Turning Clicks Into Clients With High-Intent Landing Pages",
    category: "Conversion",
    readTime: "5 min read",
    date: "Nov 20, 2025",
    tagLine: "Small design decisions that dramatically improve your ROAS.",
  },
  {
    id: 3,
    title: "Scaling Meta & Google Ads With Creative Iteration Sprints",
    category: "Paid Ads",
    readTime: "6 min read",
    date: "Nov 11, 2025",
    tagLine: "Why creative fatigue kills your performance and how to stay ahead.",
  },
  {
    id: 4,
    title: "Building Brand Trust With Content That Actually Helps",
    category: "Content",
    readTime: "4 min read",
    date: "Nov 02, 2025",
    tagLine:
      "A simple framework for value-first content in competitive niches.",
  },
  {
    id: 5,
    title: "From Static Website To Always-On Sales System",
    category: "Web Experience",
    readTime: "8 min read",
    date: "Oct 24, 2025",
    tagLine: "Transforming your homepage into a guided buyer journey.",
  },
];

const categories = [
  "All",
  "Artificial Intelligence",
  "Paid Ads",
  "Conversion",
  "Content",
  "Web Experience",
];

const Blogs: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes slideLight {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite linear;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent);
          background-size: 1000px 100%;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-slide-light {
          animation: slideLight 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .glass-morphism {
          background: rgba(23, 23, 23, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(to bottom right, rgba(23, 23, 23, 0.95), rgba(0, 0, 0, 0.98));
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(249,115,22,0.5), rgba(236,72,153,0.3), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gradient-border:hover::before {
          opacity: 1;
        }

        .filter-pill {
          position: relative;
          overflow: hidden;
        }

        .filter-pill::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f97316, #ec4899);
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }

        .filter-pill.active::after {
          width: 80%;
        }
      `}</style>

      <Navigation />

      <main className="min-h-screen bg-black text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pb-32 pt-32 lg:px-8">
          
          {/* Hero Section */}
          <section className={`mb-24 grid gap-12 lg:grid-cols-[1.5fr,1fr] lg:items-end ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute -left-20 -top-20 h-64 w-64 bg-orange-500/20 rounded-full blur-3xl animate-glow" />
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500 font-medium">
                Insights • Strategy • Experiments
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl relative">
                Stories from the
                <span className="block mt-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent relative">
                  Midis Growth Lab
                  <span className="absolute -bottom-3 left-0 h-[2px] w-32 bg-gradient-to-r from-orange-500 to-transparent" />
                </span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-400">
                Deep dives, experiments, and frameworks from our work with
                high-growth brands. No fluff — just what actually moves the
                numbers.
              </p>
            </div>

            {/* Side CTA Block */}
            <div className={`relative overflow-hidden rounded-3xl border border-neutral-800/50 glass-morphism p-8 group hover:border-orange-500/30 transition-all duration-500 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 h-32 w-32 bg-orange-500/30 rounded-full blur-3xl animate-glow" />
              <div className="relative z-10">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-orange-400/80 font-medium">
                  For bold teams
                </p>
                <h2 className="mt-4 text-xl font-bold sm:text-2xl leading-tight">
                  Want a strategy breakdown for your brand?
                </h2>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                  Share your current funnel and we'll send back a short teardown
                  with 2–3 experiments you can ship this month.
                </p>
                <button className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                  Book a growth call
                </button>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section className={`mb-16 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <div className="flex flex-wrap items-center gap-3 pb-8 border-b border-neutral-800/50">
              {categories.map((cat, idx) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-pill rounded-full border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                      isActive
                        ? "active border-orange-500 bg-gradient-to-r from-orange-500 to-red-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.4)] scale-105"
                        : "border-neutral-700/50 text-neutral-400 hover:border-orange-500/50 hover:text-white hover:scale-105"
                    }`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Featured Post */}
          <section className={`mb-20 grid gap-8 lg:grid-cols-[1.5fr,1fr] lg:items-stretch ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
            <article className="gradient-border group relative overflow-hidden rounded-3xl border border-neutral-800/50 p-8 sm:p-10 hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="absolute -top-40 -right-20 h-80 w-80 bg-gradient-to-br from-orange-500/30 to-pink-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-glow" />
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-orange-400 font-bold">
                      Featured
                    </p>
                  </div>
                  <h2 className="mt-6 text-3xl font-bold sm:text-4xl leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-5 text-base text-neutral-300 leading-relaxed">
                    {featuredPost.tagLine}
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-[0.7rem] text-neutral-400">
                    <span className="rounded-full border border-neutral-700/50 bg-neutral-900/50 px-4 py-1.5 uppercase tracking-[0.2em] backdrop-blur-sm">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-neutral-600" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-neutral-600" />
                      {featuredPost.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400 group-hover:gap-5 transition-all duration-300">
                    Read article
                    <span className="inline-block transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Visual Info Block */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800/50 bg-gradient-to-br from-neutral-900/80 via-black to-neutral-950 hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(249,115,22,0.15),_transparent_50%),radial-gradient(circle_at_70%_80%,_rgba(236,72,153,0.1),_transparent_60%)]" />
              <div className="absolute top-0 right-0 h-40 w-40 animate-slide-light">
                <div className="h-full w-full bg-gradient-to-br from-orange-500/20 to-transparent blur-2xl" />
              </div>
              
              <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-9">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-neutral-300/80 font-medium">
                    Behind the builds
                  </p>
                  <div className="mt-5 space-y-4 text-sm text-neutral-200/90 leading-relaxed">
                    <p>
                      Every article is based on live experiments with real ad
                      spend and real clients — not theory.
                    </p>
                    <p className="text-neutral-300/80">
                      We share what worked, what failed, and the exact levers we
                      pulled inside the funnel.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-orange-400 backdrop-blur-sm">
                    AI
                  </span>
                  <p className="text-[0.8rem] leading-relaxed text-neutral-300/90 flex-1">
                    Built for founders, CMOs and performance teams who want
                    strategic clarity — not 40-page PDFs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Cards Grid */}
          <section className="mb-24">
            <div className={`mb-10 flex items-center justify-between gap-4 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-neutral-400">
                Latest from the lab
              </h3>
              <button className="text-[0.7rem] uppercase tracking-[0.25em] text-neutral-500 hover:text-orange-400 transition-colors duration-300 font-medium">
                View all archives →
              </button>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, idx) => (
                <article
                  key={post.id}
                  className={`gradient-border group flex flex-col overflow-hidden rounded-3xl border border-neutral-800/50 bg-neutral-950/60 p-6 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
                >
                  {/* Image Placeholder */}
                  <div className="relative mb-6 h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/20 via-neutral-800 to-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(249,115,22,0.4),_transparent_60%),radial-gradient(circle_at_70%_70%,_rgba(59,130,246,0.25),_transparent_65%)] opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em]">
                      <span className="rounded-full border border-neutral-700/50 bg-neutral-900/50 px-3 py-1 text-neutral-400 backdrop-blur-sm">
                        {post.category}
                      </span>
                      <span className="text-neutral-600">
                        {post.readTime}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-neutral-700" />
                      <span className="text-neutral-600">{post.date}</span>
                    </div>

                    <h4 className="text-lg font-bold leading-snug group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                      {post.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                      {post.tagLine}
                    </p>

                    <div className="mt-auto pt-6 flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-orange-400 group-hover:gap-4 transition-all duration-300">
                      Read article
                      <span className="inline-block transition-transform group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className={`relative overflow-hidden rounded-3xl border border-neutral-800/50 p-8 sm:p-12 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/5 to-pink-500/10" />
            <div className="absolute top-0 left-1/4 h-full w-1/2 animate-slide-light">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-3xl" />
            </div>
            <div className="absolute -top-20 -right-20 h-64 w-64 bg-orange-500/20 rounded-full blur-3xl animate-glow" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 bg-pink-500/10 rounded-full blur-3xl animate-glow" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-orange-400/80 font-medium">
                  Stay ahead
                </p>
                <h3 className="mt-4 text-3xl font-bold sm:text-4xl leading-tight">
                  Get our best learnings before they become case studies.
                </h3>
                <p className="mt-5 text-base text-neutral-400 leading-relaxed">
                  A short, tactical email when we find something that works
                  unusually well in AI, funnels or paid acquisition.
                </p>
              </div>

              <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brand.com"
                  className="h-12 flex-1 rounded-full border border-neutral-700/50 bg-black/50 px-6 text-sm text-white outline-none backdrop-blur-sm placeholder:text-neutral-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
                <button 
                  onClick={handleSubscribe}
                  className="h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blogs;