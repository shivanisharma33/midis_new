"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Plus, ChevronDown, Star, Zap, Target, Users, ArrowDown } from "lucide-react";
import { ScrollingVideoZoom } from "@/components/ScrollingVideoZoom";

/* ================= TYPES & DATA ================= */

const awards = [
  { title: "AWARDS", year: "2024", image: "/images/port/12.webp" },
  { title: "BEST UI/UX", year: "2024", image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp" },
  { title: "DEVELOPMENT", year: "2023", image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp" },
  { title: "(IBMP) AWARDS", year: "2023", image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c7ba173bf929fe05bd6_Img%20(2)-p-500.webp" },
  { title: "ANIMATION", year: "2022", image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c81162c2494e4bed2f6_Img%20(3)%20(1)-p-500.webp" },
];

const faqs = [
  { q: "WHAT SERVICES DO YOU OFFER?", a: "We provide end-to-end creative solutions including UI/UX Design, Branding, Web Development, and Digital Strategy." },
  { q: "HOW DO YOU APPROACH A NEW PROJECT?", a: "Our process starts with deep research and discovery, followed by strategic planning, creative execution, and rigorous testing." },
  { q: "WHO WILL BE WORKING ON MY PROJECT?", a: "You'll have a dedicated team of senior designers and developers working directly with you throughout the lifecycle." },
  { q: "DO YOU PROVIDE SUPPORT?", a: "Yes, we offer comprehensive maintenance and support packages to ensure your digital products stay ahead of the curve." },
];

const partners = ["FORBES", "TECHCRUNCH", "WIRED", "NYT", "Awwwards", "Dribbble"];

/* ================= COMPONENTS ================= */

const AboutHero = () => {
  return (
    <section className="relative min-h-screen bg-[#0C0E12] flex flex-col items-center justify-start pt-40 overflow-hidden text-center px-6">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-[14vw] md:text-[11vw] font-black text-white leading-[0.85] tracking-tighter uppercase z-10"
      >
        GET TO <br />
        <span className="inline-flex items-center gap-4">
          KNOW US
          <div className="w-[8vw] h-[8vw] bg-white rounded-2xl flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
            <ArrowUpRight className="text-black w-[5vw] h-[5vw]" />
          </div>
        </span>
      </motion.h1>

      <div className="mt-16 flex flex-col items-center gap-4 z-10">
        <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.4em]">Scroll Down</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      {/* Panoramic Curved Collage from Reference */}
      <div className="relative w-full mt-32 px-4 select-none mb-10 overflow-visible">
        <div className="max-w-[1800px] mx-auto flex items-center justify-center -space-x-4 lg:-space-x-8 lg:scale-110 xl:scale-125 origin-center">

          {/* Left: Gold Bar */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -15 }}
            whileInView={{ x: 0, opacity: 1, rotate: -8 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-1/3 aspect-[4/5] rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl z-0 transform-gpu origin-right border-4 border-[#0C0E12]"
          >
            <img
              src="/images/Futuristic Portrait.webp"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Visual 1"
            />
          </motion.div>

          {/* Center: Mask */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-2/5 aspect-[4/5] rounded-[40px] lg:rounded-[60px] overflow-hidden z-20 shadow-[0_50px_100px_rgba(0,0,0,0.8)] border-4 border-[#0C0E12]"
          >
            <img
              src="/images/Virtual Reality Immersion.png"
              className="w-full h-full object-cover"
              alt="Visual 2"
            />
          </motion.div>

          {/* Right: Green Swirl */}
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 15 }}
            whileInView={{ x: 0, opacity: 1, rotate: 8 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-1/3 aspect-[4/5] rounded-[30px] lg:rounded-[50px] overflow-hidden shadow-2xl z-0 transform-gpu origin-left border-4 border-[#0C0E12]"
          >
            <img
              src="/images/Neon Aesthetic Portrait.png"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Visual 3"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GrowthSection = () => {
  return (
    <section className="bg-white py-48 px-6 lg:px-24">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left Side: Content */}
        <div className="lg:col-span-8 space-y-12">
          <span className="text-black font-black text-[11px] tracking-[0.2em] uppercase">Who We Are</span>

          <h2 className="text-[7.5vw] md:text-[5.5vw] font-black uppercase text-[#0C0E12] leading-[0.9] tracking-tighter">
            DRIVING STARTUP <br />
            GROWTH—CRAFTING <br />
            <span className="text-orange">YOUR BRAND WITH <br />
              PRECISION & IMPACT</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed font-medium">
            We specialize in accelerating startup growth by building strong, memorable brands
            with a strategic blend of creativity and precision, delivering impactful solutions
            that resonate with your target audience and drive success.
          </p>
        </div>

        {/* Vertical Divider (Hidden on Mobile) */}
        <div className="hidden lg:block lg:col-span-1 h-full flex justify-center py-10">
          <div className="w-[1px] h-full bg-black/10" />
        </div>

        {/* Right Side: Stats */}
        <div className="lg:col-span-3 flex flex-col justify-start lg:pt-6">
          <div className="flex items-start gap-4 mb-20">
            <span className="text-[12rem] font-black text-[#0C0E12] leading-[0.8] tracking-tighter">15</span>
            <div className="flex flex-col pt-2">
              <span className="[writing-mode:vertical-rl] text-[10px] font-black uppercase tracking-[0.4em] text-black">
                Years of Work Experience
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Avatar Group */}
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              ].map((url, i) => (
                <div key={i} className="w-14 h-14 rounded-full border-2 border-white overflow-hidden shadow-lg">
                  <img src={url} className="w-full h-full object-cover" alt="Client" />
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0C0E12]/40 leading-tight">
                More Then 25K
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0C0E12]/40 leading-tight">
                Clients Reviews
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const CreativeSection = () => {
  return (
    <section className="bg-white pt-32 pb-0 px-6 lg:px-24">
      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center gap-24">
        <div className="w-full md:w-[500px] aspect-[4/5] rounded-[40px] overflow-hidden shadow-6xl">
          <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d69162c2494e4bf9c3e_img%20(17)-p-500.webp" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 space-y-12">
          <h3 className="text-6xl md:text-8xl font-black uppercase text-[#0C0E12] leading-[0.9] tracking-tighter">
            CREATIVE STRATEGIES THAT GET YOU GROWING
          </h3>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            We craft bespoke strategies tailored to your unique business needs, ensuring maximum impact and sustainable growth.
          </p>
          <button className="px-12 py-6 bg-[#0C0E12] text-white rounded-full font-black uppercase tracking-[0.2em] text-[11px] hover:bg-orange-600 transition-all flex items-center gap-4">
            Start A Project <Plus size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const ReasonsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(1); // Default to second one like in image

  const reasons = [
    {
      title: "24/7 CUSTOMER SUPPORT",
      desc: "Lorem ipsum dolor posuere at scelerisque turpis. Morbi laoreet lorem venenatis suscipit ullamcorperem ipm dolor posuere at scelerisque ac turpis.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d69162c2494e4bf9c3e_img%20(17)-p-500.webp"
    },
    {
      title: "EXPERTISE & SPECIALIZATION",
      desc: "We bring specialized knowledge and deep industry expertise to every project, ensuring that your unique challenges are met with precision and innovative solutions.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp"
    },
    {
      title: "COST-EFFECTIVE SOLUTIONS",
      desc: "Our strategic approach focuses on delivering maximum value and ROI, optimizing your budget through efficient workflows and high-impact design strategies.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c7ba173bf929fe05bd6_Img%20(2)-p-500.webp"
    },
    {
      title: "CONSISTENT BRANDING",
      desc: "We ensure your brand identity remains cohesive across all digital touchpoints, building trust and recognition through pixel-perfect execution and strategic alignment.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp"
    },
    {
      title: "FRESH PERSPECTIVES",
      desc: "Our creative team constantly explores new trends and technologies to bring fresh, groundbreaking ideas that set your brand apart in a crowded marketplace.",
      image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c81162c2494e4bed2f6_Img%20(3)%20(1)-p-500.webp"
    },
  ];

  return (
    <section className="bg-white pt-20 pb-48">
      <div className="px-6 lg:px-24 mb-20">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black block mb-6">Why You Choose Us</span>
        <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter max-w-4xl text-[#111317]">
          HERE ARE SOME REASONS YOU'LL LOVE WORKING WITH US!
        </h2>
      </div>

      <div className="flex w-full h-[600px] border-y border-black/10 bg-[#fbfaf8]">
        {reasons.map((r, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            className={`relative flex transition-all duration-700 ease-[0.16,1,0.3,1] border-r border-black/10 last:border-r-0 cursor-pointer overflow-hidden ${hoveredIndex === i ? "flex-[2.5] bg-[#f5f3f0]" : "flex-1 hover:bg-[#efedea]"
              }`}
          >
            {/* Vertical Title Container */}
            <div className={`flex flex-col justify-end p-8 w-full h-full transition-opacity duration-500 ${hoveredIndex === i ? "opacity-0 invisible" : "opacity-100 visible"}`}>
              <h4 className="text-2xl font-black uppercase tracking-tighter [writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[#111317]">
                {r.title}
              </h4>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col p-12"
                >
                  {/* Vertical Title (Side) */}
                  <div className="absolute left-8 bottom-8">
                    <h4 className="text-2xl font-black uppercase tracking-tighter [writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[#111317]">
                      {r.title}
                    </h4>
                  </div>

                  <div className="ml-24 max-w-md">
                    <div className="relative mb-8 pt-6">
                      {/* Red Dot Decoration */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 rounded-full" />

                      <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={r.image}
                          className="w-full h-full object-cover"
                          alt={r.title}
                        />
                      </div>
                    </div>
                    <p className="text-[#111317]/60 text-sm font-medium leading-relaxed uppercase tracking-tight">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutMarquee = () => {
  return (
    <div className="bg-[#0C0E12] py-20 overflow-hidden relative flex border-y border-white/5">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-20"
      >
        {[1, 2, 3].map(i => (
          <span key={i} className="text-[15vw] font-black uppercase text-white tracking-[0.05em] leading-none">
            ABOUT US * ABOUT US * ABOUT US *
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const StatsCollage = () => {
  return (
    <section className="bg-white py-48 px-6 lg:px-24">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[1200px]">
        {/* Box 1: Left Top Stat */}
        <div className="md:col-span-4 bg-gray-50 rounded-[60px] p-16 flex flex-col justify-between">
          <div className="aspect-square w-full rounded-[40px] overflow-hidden mb-12 shadow-3xl">
            <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d69162c2494e4bf9c3e_img%20(17)-p-500.webp" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="text-[8rem] font-black tracking-tighter leading-none italic">365<span className="not-italic text-orange-600">+</span></h3>
            <p className="uppercase text-[10px] font-black tracking-[0.5em] text-gray-400 mt-4">Design Portfolio</p>
          </div>
        </div>

        {/* Box 2: Right Main Image */}
        <div className="md:col-span-8 bg-gray-50 rounded-[60px] overflow-hidden group shadow-2xl">
          <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-2000" />
        </div>

        {/* Box 3: Left Bottom Image + Stat */}
        <div className="md:col-span-5 bg-gray-50 rounded-[60px] overflow-hidden relative group">
          <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-16 flex flex-col justify-end">
            <h3 className="text-white text-8xl font-black tracking-tighter italic">98%</h3>
            <p className="text-white/40 uppercase text-[10px] font-black tracking-[0.4em] mt-4">Client Happiness</p>
          </div>
        </div>

        {/* Box 4: Tall Branding Showcase */}
        <div className="md:col-span-7 bg-gray-50 rounded-[60px] overflow-hidden group shadow-3xl border border-black/5">
          <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c7ba173bf929fe05bd6_Img%20(2)-p-500.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1500" />
        </div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-48 px-6 lg:px-24">
      <h2 className="text-[12vw] font-black uppercase text-[#0C0E12] tracking-tighter leading-none mb-32">AWARDS</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-black/10">
        <div className="divide-y divide-black/10 w-full">
          {awards.map((award, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex items-center justify-between py-12 transition-all duration-500 cursor-pointer overflow-visible relative"
            >
              <div className="flex items-center gap-12 group-hover:translate-x-6 transition-transform">
                <span className="text-[10px] font-black text-gray-400">({i + 1})</span>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0C0E12]/40 group-hover:text-[#0C0E12] transition-colors">{award.title}</h3>
              </div>
              <Plus className={`transition-all duration-500 ${hoveredIndex === i ? 'rotate-45 text-orange-600 scale-150' : 'text-gray-300'}`} size={32} />
            </div>
          ))}
        </div>

        <div className="relative aspect-square w-full rounded-[60px] overflow-hidden bg-[#f8f8f8] shadow-6xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={hoveredIndex ?? 'default'}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              src={hoveredIndex !== null ? awards[hoveredIndex].image : awards[0].image}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const DualCTA = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-[80vh] min-h-[700px]">
      <motion.div whileHover="hover" className="relative group overflow-hidden">
        <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all" />
        <div className="absolute inset-0 p-20 flex flex-col justify-between items-start text-white">
          <h3 className="text-7xl font-black uppercase tracking-tighter leading-none max-w-md">HAVE A PROJECT IN MIND?</h3>
          <button className="px-12 py-6 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 hover:text-white transition-all">LET'S TALK</button>
        </div>
      </motion.div>
      <motion.div whileHover="hover" className="relative group overflow-hidden">
        <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp" className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all" />
        <div className="absolute inset-0 p-20 flex flex-col justify-between items-start text-white text-left">
          <h3 className="text-7xl font-black uppercase tracking-tighter leading-none max-w-md">LOOKING TO HIRE AN AGENCY?</h3>
          <button className="px-12 py-6 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 hover:text-white transition-all">JOIN US</button>
        </div>
      </motion.div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="bg-white py-48 px-6 lg:px-24">
      <div className="max-w-[1000px] mx-auto">
        <div className="divide-y divide-black/10">
          {faqs.map((f, i) => (
            <div key={i} className="py-10">
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full flex justify-between items-center group">
                <h4 className={`text-2xl font-black uppercase tracking-tighter transition-all ${openIndex === i ? 'text-orange-600' : 'text-[#0C0E12]/80'}`}>{f.q}</h4>
                <div className={`w-12 h-12 border border-black/10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'rotate-180 bg-black text-white' : ''}`}>
                  <ChevronDown size={24} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="pt-8 text-xl text-gray-400 font-medium max-w-3xl leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= PAGE EXPORT ================= */

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen font-sans selection:bg-orange-600 selection:text-white overflow-x-hidden">
      <Navigation />
      <AboutHero />
      <GrowthSection />

      <ScrollingVideoZoom />

      <CreativeSection />
      <ReasonsSection />
      <AboutMarquee />
      <StatsCollage />
      <AwardsSection />

      {/* Partner Ticker */}
      <div className="bg-white py-20 border-y border-black/5 overflow-hidden flex grayscale opacity-30">
        <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="flex gap-24 whitespace-nowrap px-12">
          {[...partners, ...partners].map((p, i) => (
            <span key={i} className="text-4xl font-black uppercase tracking-tighter">{p}</span>
          ))}
        </motion.div>
      </div>

      <DualCTA />
      <FAQSection />

      <section className="bg-white py-48 text-center px-6">
        <h2 className="text-[14vw] font-black uppercase tracking-tighter leading-[0.8] text-[#0C0E12]">
          LET'S WORK <br /> <span className="text-orange-600">TOGETHER</span>
        </h2>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
