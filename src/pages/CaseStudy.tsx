import React from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const clientLogos = [
  {
    src: "https://alinkriti.com/cdn/shop/files/Asset_2.svg?v=1752841106&width=150",
    alt: "Alinkriti",
  },
  {
    src: "https://loyalistexploration.com/image/logo.png",
    alt: "Loyalist Exploration",
  },
  {
    src: "https://www.miningdiscovery.com/image/mining-discovery-logo-1.png",
    alt: "Mining Discovery",
  },
  {
    src: "https://harvins-elevate-web.vercel.app/assets/logo-bXKSJZO2.jpeg",
    alt: "Harvins Elevate",
  },
];

const CaseStudy: React.FC = () => {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 pt-28 pb-24 lg:px-6">
          {/* HERO / INTRO */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 via-black to-black px-6 py-10 sm:px-10 sm:py-14">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.45),_transparent_70%)] blur-2xl" />
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.35),_transparent_70%)] blur-2xl" />
              </div>

              <div className="relative space-y-5 max-w-3xl">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Explore our work
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                  Stories of transformation through{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    design, branding, SEO & AI-driven solutions.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-neutral-300 max-w-2xl">
                  At Midis, we do more than deliver services — we craft
                  experiences, solve real business problems, and amplify brands.
                  These case studies are journeys from challenge to breakthrough.
                </p>
              </div>
            </div>
          </section>

          {/* FEATURED PROJECTS GRID */}
          <section className="mb-16">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
                Featured projects
              </h2>
              <button className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-white">
                View all projects
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Branding Revamp for Client A",
                  subtitle:
                    "Redefined visual identity and boosted brand engagement.",
                },
                {
                  title: "AI Chatbot for Client B",
                  subtitle:
                    "Automated 70% of support queries with conversational AI.",
                },
                {
                  title: "SEO & Content for Client C",
                  subtitle: "Doubled organic traffic in 6 months.",
                },
                {
                  title: "Generative AI for Client D",
                  subtitle:
                    "New insights engine built on custom generative models.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/70 p-5 transition hover:-translate-y-1 hover:border-orange-500/70 hover:bg-neutral-900/80"
                >
                  {/* Image / visual placeholder */}
                  <div className="relative mb-4 h-32 overflow-hidden rounded-2xl bg-gradient-to-tr from-orange-500/30 via-neutral-800 to-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,_rgba(249,115,22,0.45),_transparent_60%),radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.4),_transparent_60%)] transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <h3 className="text-sm font-semibold leading-snug group-hover:text-orange-400">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400">
                      {item.subtitle}
                    </p>
                    <button className="mt-4 inline-flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-neutral-300 group-hover:text-orange-400">
                      See more
                      <span className="ml-1.5 translate-y-[1px] transition group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* IN-DEPTH CASE STUDY BLOCK */}
          <section className="mb-20">
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Selected case study
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Client B – AI Chatbot Implementation
              </h2>
              <p className="text-sm text-neutral-400 max-w-2xl">
                From support overload to streamlined, AI-driven customer
                conversations.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-[1.1fr,1.1fr] md:items-start">
              {/* Left: image / stats */}
              <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-6 sm:p-8">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-24 right-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.45),_transparent_70%)] blur-2xl opacity-80" />
                  <div className="absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.4),_transparent_70%)] blur-2xl opacity-80" />
                </div>
                <div className="relative space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                      Client & context
                    </p>
                    <p className="mt-3 text-sm text-neutral-200">
                      Client B, a fast-scaling{" "}
                      <span className="text-orange-300">
                        e-commerce brand
                      </span>
                      , was drowning in repetitive tickets, long wait times and
                      mounting support costs.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2">
                      Key challenges
                    </p>
                    <ul className="space-y-1.5 text-sm text-neutral-300">
                      <li>• Heavy load of refund, status & policy queries.</li>
                      <li>• Inconsistent response quality across agents.</li>
                      <li>• Poor scalability during peak campaigns.</li>
                    </ul>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        label: "Queries automated",
                        value: "~70%",
                      },
                      {
                        label: "Response time",
                        value: "< 30s",
                      },
                      {
                        label: "Support cost savings",
                        value: "~40%",
                      },
                      {
                        label: "CSAT improvement",
                        value: "+25%",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-neutral-700 bg-black/60 px-4 py-3"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-lg font-semibold">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-neutral-700 bg-black/70 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 mb-2">
                      Client quote
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-200">
                      “Before Midis built our bot, we were drowning in tickets.
                      Now our team focuses on high-value issues instead of
                      copy-pasting replies.”
                    </p>
                    <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
                      Support lead, Client B
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: our approach */}
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Our approach
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">
                    From discovery to deployed AI assistant
                  </h3>
                  <div className="mt-4 grid gap-4">
                    {[
                      {
                        title: "Discovery & audit",
                        desc: "Mapped key user journeys, FAQ clusters and support pain points using real ticket data.",
                      },
                      {
                        title: "Conversation design",
                        desc: "Crafted flows, tone, fallback paths and escalation rules to feel on-brand and human.",
                      },
                      {
                        title: "Integration & training",
                        desc: "Connected the bot with orders, CRM and knowledge base; trained on historical logs.",
                      },
                      {
                        title: "Testing & iteration",
                        desc: "Launched in phases, monitored analytics and iterated on intents and responses.",
                      },
                    ].map((step, index) => (
                      <div
                        key={step.title}
                        className="flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4"
                      >
                        <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-[0.7rem] font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{step.title}</p>
                          <p className="mt-1 text-xs text-neutral-400">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-neutral-800 rounded-3xl bg-neutral-950/70 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                    Solution delivered
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                    <li>• AI chatbot connected to CRM and order systems.</li>
                    <li>• Smart handoff to human agents when needed.</li>
                    <li>• Analytics dashboard for conversation insights.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* OUR APPROACH SECTION */}
          <section className="mb-20">
            <div className="mb-6 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Our approach
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
                From insight to impact.
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                We believe in data-driven strategy and human-centric design.
                Every project follows a clear path from research to measurable
                outcomes.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {[
                {
                  title: "Research & audit",
                  desc: "Dive into your metrics, audience and pain points.",
                },
                {
                  title: "Ideation & strategy",
                  desc: "Frame solutions rooted in your business goals.",
                },
                {
                  title: "Design & develop",
                  desc: "Build scalable, flexible and elegant systems.",
                },
                {
                  title: "Optimize & scale",
                  desc: "Monitor, learn and refine continuously.",
                },
              ].map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-3xl border border-neutral-800 bg-neutral-950/70 p-5"
                >
                  <span className="absolute -top-3 left-4 rounded-full bg-orange-500 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                    0{index + 1}
                  </span>
                  <p className="mt-2 text-sm font-semibold">{step.title}</p>
                  <p className="mt-2 text-xs text-neutral-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MORE SUCCESS STORIES */}
          <section className="mb-20">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                More success stories
              </p>
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
                Different industries, same focus on outcomes.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Client C – SEO & Content Growth",
                  challenge: "Low search visibility and poor content depth.",
                  outcome:
                    "Organic traffic +120% in 6 months, three critical pages ranking #1.",
                },
                {
                  title: "Client A – Brand Identity Overhaul",
                  challenge: "Outdated visual language and unclear messaging.",
                  outcome:
                    "New brand system, refreshed digital presence and stronger recall.",
                },
                {
                  title: "Client D – Generative AI Insights Tool",
                  challenge:
                    "Needed to extract insights from large, fragmented datasets.",
                  outcome:
                    "Custom AI model produced real-time insights and automated reporting.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-neutral-800 bg-neutral-950/70 p-5"
                >
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-3 text-[0.75rem] uppercase tracking-[0.18em] text-neutral-500">
                    Challenge
                  </p>
                  <p className="mt-1 text-xs text-neutral-300">
                    {item.challenge}
                  </p>
                  <p className="mt-3 text-[0.75rem] uppercase tracking-[0.18em] text-neutral-500">
                    Outcome
                  </p>
                  <p className="mt-1 text-xs text-neutral-300">
                    {item.outcome}
                  </p>
                  <button className="mt-4 inline-flex items-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-neutral-300 hover:text-orange-400">
                    View full story
                    <span className="ml-1.5 translate-y-[1px] transition group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </article>
              ))}
            </div>
          </section>

          {/* INDUSTRIES & LOGO CAROUSEL */}
          <section className="mb-20">
            <div className="mb-6 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Industries
              </p>
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold">
                Solutions that scale across sectors.
              </h2>
              <p className="mt-3 text-sm text-neutral-400">
                We’ve partnered with teams in e-commerce, fintech, healthcare,
                education and more. The constant is our focus on measurable,
                sustainable growth.
              </p>
            </div>

            {/* Industries pill grid */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {["eCommerce", "Fintech", "Healthcare", "Education", "SaaS", "D2C"].map(
                (industry) => (
                  <div
                    key={industry}
                    className="flex h-16 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950/70 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300"
                  >
                    {industry}
                  </div>
                )
              )}
            </div>

            {/* Client logo auto-scrolling carousel */}
            <div className="mt-10">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    Clients
                  </p>
                  <h3 className="mt-2 text-sm sm:text-base font-semibold text-neutral-100">
                    Brands that trusted Midis with their growth.
                  </h3>
                </div>
              </div>

              <div className="relative mt-4 overflow-hidden">
                {/* Edge gradients */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent" />

                {/* Infinite scrolling row */}
                <div className="flex w-max gap-8 logo-scroll pb-4">
                  {clientLogos.concat(clientLogos).map((logo, index) => (
                    <div
                      key={logo.alt + index}
                      className="flex min-w-[150px] items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950/80 px-6 py-3 transition hover:border-orange-500/70 hover:bg-neutral-900"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-10 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* WHY IT MATTERS + CTA */}
          <section>
            <div className="mb-8 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                Why these case studies matter
              </p>
              <p className="mt-3 text-sm text-neutral-300">
                Each story is more than a highlight reel. It shows how we:
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                <li>• Turn strategic vision into measurable outcomes.</li>
                <li>• Build AI-driven, data-driven systems that actually ship.</li>
                <li>• Design for real users, not just fancy technology.</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-r from-orange-500/25 via-pink-500/10 to-blue-500/20 px-6 py-8 sm:px-9 sm:py-10">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute left-0 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-[radial-gradient(circle,_rgba(255,255,255,0.4),_transparent_60%)] blur-2xl" />
                <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-1/3 translate-y-1/3 bg-[radial-gradient(circle,_rgba(249,115,22,0.6),_transparent_60%)] blur-2xl" />
              </div>
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-100/80">
                    Ready to start your own story?
                  </p>
                  <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-white">
                    Let’s create a case study we’ll both be proud of.
                  </h3>
                  <p className="mt-3 text-sm text-neutral-100/80">
                    Tell us where you are now and where you want to go. We’ll
                    help you design the path — from first experiment to scaled
                    impact.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:items-end">
                  <button className="rounded-full bg-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white hover:outline hover:outline-1 hover:outline-white/40 transition">
                    Start a project
                  </button>
                  <button className="text-[0.75rem] uppercase tracking-[0.2em] text-neutral-100/80 underline-offset-4 hover:underline">
                    View all case studies
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* Local keyframes for logo auto-scroll */}
      <style>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logo-scroll {
          animation: logoScroll 25s linear infinite;
        }
      `}</style>
    </>
  );
};

export default CaseStudy;