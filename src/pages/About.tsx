"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Plus, ChevronDown, Award, Star, Zap, Target, Users } from "lucide-react";

/* ================= TYPES & DATA ================= */

const stats = [
  { label: "Design Projects", value: "365+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Awards Won", value: "45+" },
  { label: "Years Experience", value: "15+" },
];

const awards = [
  { title: "BEST UI/UX DESIGN", year: "2024", image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp" },
  { title: "DEVELOPMENT EXCELLENCE", year: "2023", image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp" },
  { title: "BRANDING INNOVATION", year: "2023", image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c7ba173bf929fe05bd6_Img%20(2)-p-500.webp" },
  { title: "ANIMATION OF THE YEAR", year: "2022", image: "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c81162c2494e4bed2f6_Img%20(3)%20(1)-p-500.webp" },
];

const faqs = [
  { q: "WHAT SERVICES DO YOU OFFER?", a: "We provide end-to-end creative solutions including UI/UX Design, Branding, Web Development, and Digital Strategy." },
  { q: "HOW DO YOU APPROACH A NEW PROJECT?", a: "Our process starts with deep research and discovery, followed by strategic planning, creative execution, and rigorous testing." },
  { q: "WHO WILL BE WORKING ON MY PROJECT?", a: "You'll have a dedicated team of senior designers and developers working directly with you throughout the lifecycle." },
  { q: "DO YOU PROVIDE POST-LAUNCH SUPPORT?", a: "Yes, we offer comprehensive maintenance and support packages to ensure your digital products stay ahead of the curve." },
];

/* ================= COMPONENTS ================= */

const AboutHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative min-h-[110vh] bg-[#0C0E12] flex flex-col items-center pt-48 overflow-hidden">
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white tracking-[0.3em] uppercase mb-12 backdrop-blur-sm"
      >
        Since 2009
      </motion.div>

      {/* Main Heading */}
      <div className="relative z-10 text-center max-w-[1200px] px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] md:text-[10vw] font-black text-white leading-[0.8] tracking-tighter uppercase mb-6"
        >
          GET TO <br />
          <span className="flex items-center justify-center gap-4">
            KNOW US
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-[0.6em] h-[0.6em] bg-orange-600 rounded-lg flex items-center justify-center -rotate-12"
            >
              <ArrowUpRight className="text-white w-full h-full p-2" />
            </motion.div>
          </span>
        </motion.h1>
      </div>

      {/* Image Collage Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] flex items-end justify-center gap-4 px-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            style={{ y: i % 2 === 0 ? y1 : y2 }}
            className={`w-full max-w-[300px] aspect-[3/4] rounded-t-[40px] overflow-hidden shadow-2xl ${i > 3 ? 'hidden md:block' : ''}`}
          >
            <img
              src={`https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d69162c2494e4bf9c3e_img%20(17)-p-500.webp`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              alt="Work"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const GrowthSection = () => {
  return (
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-6"
          >
            About Us
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black uppercase text-[#0C0E12] leading-[1] tracking-tighter mb-10 max-w-xl">
            Driving Startup <span className="text-gray-200">Growth</span>—Crafting Your Brand with Precision & Impact
          </h2>
          <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
            We collaborate with ambitious startups and established enterprises to define their digital future through cutting-edge design and technology.
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <div className="relative">
            <span className="text-[12rem] font-black text-[#0C0E12] leading-none tracking-tighter">15</span>
            <span className="absolute top-8 -right-10 text-6xl font-black text-orange-600">+</span>
            <p className="text-right text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mt-2">Years of Excellence</p>
          </div>

          <div className="mt-20 flex flex-wrap justify-end gap-12 opacity-30 grayscale lg:max-w-md">
            {['FORBES', 'TECHCRUNCH', 'WIRED', 'NYT'].map(logo => (
              <span key={logo} className="text-xl font-black tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InteractiveList = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f8f8f8] py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="border-t border-black/10">
          {awards.map((award, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-black/10 py-12 flex items-center justify-between cursor-pointer overflow-visible"
            >
              <div className="flex items-center gap-12 z-10 transition-transform duration-500 group-hover:translate-x-4">
                <span className="text-sm font-bold text-gray-400">{award.year}</span>
                <h3 className="text-4xl md:text-6xl font-black uppercase text-[#0C0E12] tracking-tighter">
                  {award.title}
                </h3>
              </div>

              <div className="flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Floating Image Reveal */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    className="absolute right-[10%] top-[-20%] w-[350px] aspect-[4/5] z-0 pointer-events-none hidden lg:block"
                  >
                    <img
                      src={award.image}
                      className="w-full h-full object-cover rounded-3xl shadow-5xl"
                      alt="Award"
                    />
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

const ReasonsSection = () => {
  const reasons = [
    { title: "INNOVATIVE REPORT", desc: "Digital Strategy & Research", icon: <Target className="w-8 h-8" /> },
    { title: "CREATIVE VISION", desc: "Design & Art Direction", icon: <Star className="w-8 h-8" /> },
    { title: "SMART EXECUTION", desc: "High-End Development", icon: <Zap className="w-8 h-8" /> },
    { title: "FUTURE READY", desc: "Scalable Infrastructure", icon: <Users className="w-8 h-8" /> },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter max-w-2xl">
            Here are some reasons you'll love working with us!
          </h2>
          <div className="w-16 h-16 bg-[#0C0E12] text-white rounded-full flex items-center justify-center rotate-45">
            <Plus size={32} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 px-1 bg-gray-100 border border-gray-100 rounded-[40px] overflow-hidden">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white p-12 hover:bg-black group transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-10 group-hover:bg-white/10 group-hover:text-white transition-colors">
                {r.icon}
              </div>
              <h4 className="text-xl font-black uppercase mb-4 tracking-tighter group-hover:text-white transition-colors">{r.title}</h4>
              <p className="text-gray-500 group-hover:text-gray-400 transition-colors uppercase text-xs font-bold tracking-widest">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DualCTA = () => {
  return (
    <section className="bg-white grid grid-cols-1 lg:grid-cols-2 h-[80vh] min-h-[600px]">
      <motion.div
        whileHover="hover"
        className="relative overflow-hidden group border-r border-white/10"
      >
        <img
          src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp"
          className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
        <div className="absolute inset-0 p-16 flex flex-col justify-between items-start text-white">
          <h3 className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter max-w-md">
            Have a project in mind?
          </h3>
          <button className="px-8 py-4 bg-white text-black rounded-full font-black text-xs tracking-widest uppercase hover:bg-orange-600 hover:text-white transition-all">
            Let's Talk
          </button>
        </div>
      </motion.div>

      <motion.div
        whileHover="hover"
        className="relative overflow-hidden group"
      >
        <img
          src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp"
          className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
        <div className="absolute inset-0 p-16 flex flex-col justify-between items-start text-white">
          <h3 className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter max-w-md">
            looking to hire an agency?
          </h3>
          <button className="px-8 py-4 bg-white text-black rounded-full font-black text-xs tracking-widest uppercase hover:bg-orange-600 hover:text-white transition-all">
            Join Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-black/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <h4 className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-colors ${openIndex === i ? 'text-orange-600' : 'text-[#0C0E12]'}`}>
                  {f.q}
                </h4>
                <div className={`w-10 h-10 border border-black/10 rounded-full flex items-center justify-center transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-lg text-gray-500 leading-relaxed font-medium">
                      {f.a}
                    </p>
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

const AboutMarquee = () => {
  return (
    <div className="bg-[#0C0E12] py-10 overflow-hidden relative flex border-y border-white/5">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-10"
      >
        {[1, 2, 3, 4].map(i => (
          <span key={i} className="text-[12vw] font-black uppercase text-white tracking-tighter opacity-10 leading-none">
            About Us * About Us * About Us *
          </span>
        ))}
      </motion.div>
    </div>
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

      <div className="w-full flex justify-center py-20 bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-80 h-80 rounded-full border-4 border-[#0C0E12]/5 flex items-center justify-center p-8 opacity-20"
        >
          <div className="w-full h-full rounded-full border-8 border-[#0C0E12] border-t-transparent" />
        </motion.div>
      </div>

      <ReasonsSection />
      <AboutMarquee />

      {/* Visual Collage Grid from screenshot */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[1200px]">
          {/* Box 1: Design Stat */}
          <div className="md:col-span-4 bg-gray-50 rounded-[40px] p-12 flex flex-col justify-between">
            <div className="aspect-square w-full rounded-2xl overflow-hidden mb-10">
              <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d69162c2494e4bf9c3e_img%20(17)-p-500.webp" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-6xl font-black tracking-tighter">365+</h3>
              <p className="uppercase text-xs font-bold tracking-widest text-gray-400 mt-2">Projects Delivered</p>
            </div>
          </div>

          {/* Box 2: Glass Box Image */}
          <div className="md:col-span-8 bg-gray-50 rounded-[40px] overflow-hidden group">
            <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>

          {/* Box 3: Portrait Image */}
          <div className="md:col-span-5 bg-gray-50 rounded-[40px] overflow-hidden relative group">
            <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-12 flex flex-col justify-end">
              <h3 className="text-white text-5xl font-black tracking-tighter">98%</h3>
              <p className="text-white/60 uppercase text-xs font-bold tracking-widest mt-2">Success Rate</p>
            </div>
          </div>

          {/* Box 4: Tall Branding Showcase */}
          <div className="md:col-span-7 bg-orange-600 rounded-[40px] overflow-hidden group">
            <img src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c7ba173bf929fe05bd6_Img%20(2)-p-500.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      <InteractiveList />
      <DualCTA />
      <FAQSection />

      <section className="bg-white py-20 px-6 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <h2 className="text-[12vw] font-black uppercase text-[#0C0E12] tracking-tighter mb-16 leading-[0.8] text-center">
            LET'S WORK <br /> TOGETHER
          </h2>
          <div className="w-full max-w-4xl h-px bg-black/10 mb-16" />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
