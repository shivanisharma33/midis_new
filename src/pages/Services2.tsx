"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

/* ================= UTILS & COMPONENTS ================= */



/* ================= SECTION 1: HERO ================= */
const HeroSection = () => {
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isComplete, setIsComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isComplete && window.scrollY > 10) return; // Allow normal scroll if done and page moved

      const direction = e.deltaY > 0 ? 1 : -1;

      if (!isComplete || (isComplete && window.scrollY <= 0 && direction === -1)) {
        if (isAnimating.current) return;

        // If we are at the top and scrolling down, or if we are not done yet
        if ((progress < 100 && direction === 1) || (progress > 0 && direction === -1)) {
          e.preventDefault();
          isAnimating.current = true;

          setProgress(prev => {
            const next = Math.min(Math.max(prev + direction * 5, 0), 100);
            if (next >= 100) setIsComplete(true);
            if (next < 100) setIsComplete(false);

            setTimeout(() => { isAnimating.current = false; }, 20);
            return next;
          });
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [progress, isComplete]);

  // Derived transforms based on progress state
  const width = `${60 + (progress * 0.4)}%`;
  const height = `${60 + (progress * 0.4)}vh`;
  const borderRadius = `${40 - (progress * 0.4)}px`;
  const contentOpacity = 1; // Keep always visible as requested
  const imgScale = 1 + (progress / 500);

  return (
    <section ref={sectionRef} className="relative h-screen bg-[#0C0E12] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ width: window.innerWidth < 768 ? '100%' : width, height, borderRadius: window.innerWidth < 768 ? '0px' : borderRadius }}
          className="relative z-10 bg-black overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] origin-center transition-all duration-75 ease-out"
        >
          <motion.img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/68079e60d8c8c72fd621dfd8_Video-p-1600.webp"
            alt="Hero"
            style={{ scale: imgScale }}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />

          {/* Content Overlay */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          >
            <h1 className="text-[12vw] font-black leading-none tracking-tighter text-white uppercase select-none drop-shadow-2xl">
              SERVICE
            </h1>
            <p className="max-w-xl mt-6 text-sm md:text-lg text-white/80 font-medium leading-relaxed uppercase tracking-widest">
              We are a passionate creative agency with over 15 years experience
            </p>
            <button className="mt-10 px-10 py-5 bg-white text-black rounded-full font-black text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all transform hover:scale-110 flex items-center gap-3 shadow-2xl">
              Get Started <ArrowUpRight size={16} strokeWidth={3} />
            </button>
          </motion.div>

          {/* Vertical Text */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block">
            <p className="uppercase tracking-[0.5em] text-[10px] font-black text-white/30 rotate-90 origin-right whitespace-nowrap">
              Follow Us On Social Media
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {progress < 100 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent opacity-20" />
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Scroll to Reveal</p>
        </div>
      )}
    </section>
  )
}

/* ================= SECTION 2: EXPERIENCE (PIXEL PERFECT) ================= */
const ExperienceSection = () => {
  return (
    <section className="bg-white px-6 lg:px-20 relative border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* Left Side */}
        <div className="relative border-r-0 lg:border-r border-gray-100 pr-0 lg:pr-24 pb-12 lg:pb-0">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-12">Who Are We?</p>

          <div className="flex items-start">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[30vw] md:text-[24rem] font-black leading-[0.75] tracking-tighter text-[#0C0E12] select-none"
            >
              15
            </motion.span>
            <div className="flex flex-col pt-12 ml-4">
              <p className="uppercase tracking-[0.4em] font-black text-[9px] text-black rotate-90 origin-left whitespace-nowrap">
                Years of Work <br /> Experience
              </p>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-14 h-14 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-lg">
                  <img src={`/images/port/${i + 5}.webp`} className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] uppercase font-black tracking-widest text-black/40">More than 25k</p>
              <p className="text-[10px] uppercase font-black tracking-widest text-[#0C0E12]">Clients Reviews</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="pl-0 lg:pl-24 flex flex-col pt-12 lg:pt-0 border-t lg:border-t-0 border-gray-100">
          <div className="max-w-xl">
            <p className="text-gray-600 text-lg leading-relaxed font-medium mb-4">
              We are a passionate creative agency with over 15 years of experience in branding, design, digital marketing, and storytelling. We help businesses stand out with innovative strategies, stunning visuals, and impactful campaigns that drive engagement and growth.
            </p>
            <a href="#" className="inline-block text-black font-bold border-b border-black text-sm pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
              Let’s create something extraordinary!
            </a>
          </div>

          {/* Image with Animation */}
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.1 }}
            whileInView={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 relative aspect-[16/10] rounded-sm overflow-hidden shadow-2xl"
          >
            <img
              src="/images/fresh-idea-1.webp"
              alt="Experience"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100" />
    </section>
  )
}

/* ================= SECTION 3: PARALLAX (STAPLES) ================= */
const ParallaxSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1, 1.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={targetRef} className="w-full h-[80vh] md:h-[110vh] overflow-hidden relative bg-black">
      <motion.div style={{ scale, y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <img src="/images/back.webp" alt="Containers" className="w-full h-full object-cover opacity-90 shadow-2xl" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
    </section>
  )
}

/* ================= SECTION 4: EXPLORE SERVICES ================= */
const servicesData = [
  { name: "UI/UX DESIGN", image: "/images/service-ui.webp" },
  { name: "BRANDING", image: "https://cdn.prod.website-files.com/68b0cb20515ada515e9ba711/68b4cf76dfbbe9fd12902eaa_Frame%201437253174.png" },
  { name: "PRODUCT DESIGN", image: "https://cdn.prod.website-files.com/68b0cb20515ada515e9ba711/68b75ff47431aaf16ad28a4d_Frame%201437253177.png" },
  { name: "DEVELOPMENT", image: "https://cdn.prod.website-files.com/691024ccc3cf40dbe1a814d3/6911ce75f727815d6221f9bf_1753014996382-p-1080.webp" },
]

const ExploreServices = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default to BRANDING
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "center center"] });

  // Header animation: Explore (Left) & Services (Right) meeting
  const xExplore = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const xServices = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 md:py-40 px-6 lg:px-20 relative overflow-x-hidden text-black"
    >
      <div className="max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col mb-16 md:mb-32 relative w-full items-center">
          <motion.div style={{ x: xExplore }} className="w-full">
            <h2 className="text-[15vw] md:text-[13vw] font-black uppercase tracking-tighter leading-[0.8] text-black text-left">
              Explore
            </h2>
          </motion.div>

          <motion.div
            style={{ x: xServices }}
            className="w-full flex justify-end md:pr-[10%]"
          >
            <h2 className="text-[15vw] md:text-[13vw] font-black uppercase tracking-tighter leading-[0.8] text-black text-right">
              Services
            </h2>
          </motion.div>

          {/* Down Arrow */}
          <div className="mt-16 w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center cursor-pointer shadow-sm border border-gray-100 hover:bg-black transition-all group">
            <ArrowRight
              size={20}
              className="rotate-90 transition-transform group-hover:translate-y-1 text-black group-hover:text-white"
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mt-16 md:mt-32">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] bg-gray-50 shadow-5xl group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={servicesData[activeIndex].image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Visual Decoration */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-red-600/60 blur-[15px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-full h-32 bg-red-600/10 blur-[100px] -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Services List */}
          <div className="space-y-8">
            {servicesData.map((service, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                className="group border-b-2 border-gray-100 pb-12 flex items-center justify-between cursor-pointer hover:pl-8 transition-all duration-500"
              >
                <h3 className={`text-3xl md:text-5xl lg:text-7xl font-black uppercase transition-colors ${activeIndex === i ? "text-black" : "text-black/30 group-hover:text-black"}`}>
                  {service.name}
                </h3>

                {activeIndex === i && (
                  <div className="w-16 h-10 bg-black rounded-full flex items-center justify-center text-white shadow-2xl overflow-hidden">
                    <motion.div
                      animate={{ x: [-20, 20] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ⚡️
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const MarqueeSection = () => {
  return (
    <section className="bg-white py-20 overflow-hidden border-y border-gray-100 relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 pr-12"
        >
          {[...Array(10)].map((_, i) => (
            <h2 key={i} className="text-[15vw] md:text-[12rem] font-black uppercase tracking-tighter text-[#0C0E12] flex items-center gap-6 md:gap-12 pl-6 md:pl-12">
              Working <span className="text-orange-600 pb-2 md:pb-8">*</span> Process
            </h2>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 pr-12"
        >
          {[...Array(10)].map((_, i) => (
            <h2 key={i} className="text-[15vw] md:text-[12rem] font-black uppercase tracking-tighter text-[#0C0E12] flex items-center gap-6 md:gap-12 pl-6 md:pl-12">
              Working <span className="text-orange-600 pb-2 md:pb-8">*</span> Process
            </h2>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ================= SECTION 5: PROCESS ================= */
const ProcessSection = () => {
  return (
    <section className="bg-[#0C0E12] h-auto lg:h-[95vh] py-20 lg:py-0 px-6 text-white overflow-hidden relative flex items-center">


      <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 relative z-10 h-auto lg:h-[75vh]">

        {/* Left Side: Independent Scrolling */}
        <div className="h-auto lg:h-full overflow-y-visible lg:overflow-y-auto pr-0 lg:pr-10 space-y-12 lg:space-y-24 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { num: ".01", title: "Discovery & Research", desc: "Lorem ipsum dolor sit amet consectetur. Arcu mauris urna lobortis turpis dolor sem ultricies amet eleifend maecenas ultrices lectus." },
            { num: ".02", title: "Strategy & Planning", desc: "Lorem ipsum dolor sit amet consectetur. Arcu mauris urna lobortis turpis dolor sem ultricies amet eleifend maecenas ultrices lectus." },
            { num: ".03", title: "Design & Creation", desc: "Lorem ipsum dolor sit amet consectetur. Arcu mauris urna lobortis turpis dolor sem ultricies amet eleifend maecenas ultrices lectus." },
            { num: ".04", title: "Development", desc: "Lorem ipsum dolor sit amet consectetur. Arcu mauris urna lobortis turpis dolor sem ultricies amet eleifend maecenas ultrices lectus." },
            { num: ".05", title: "Review & Delivery", desc: "Lorem ipsum dolor sit amet consectetur. Arcu mauris urna lobortis turpis dolor sem ultricies amet eleifend maecenas ultrices lectus." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="group flex gap-8 md:gap-14"
            >
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-gray-500 mb-4">{item.num}</span>
                <div className="w-[1px] h-full bg-white/10 group-hover:bg-white/30 transition-colors" />
              </div>

              <div className="pb-16 text-left">
                <h3 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Add extra space at the bottom to allow scrolling past the last item */}
          <div className="h-40" />
        </div>

        {/* Right Side: Static/Pinned Visual */}
        <div className="relative h-[400px] lg:h-full flex items-center justify-center lg:pl-20 order-first lg:order-last mb-10 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="w-full max-w-[550px] aspect-square rounded-[40px] overflow-hidden shadow-5xl group border border-white/5 bg-[#14161B]"
          >
            <img
              src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d69162c2494e4bf9c3e_img%20(17)-p-500.webp"
              alt="Process Visual"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />

          </motion.div>
        </div>

      </div>
    </section>
  )
}


/* ================= SECTION 6: CTA COLLAGE ================= */
const CTACollage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Mouse position values for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();

    // Calculate center-relative cursor position (-0.5 to 0.5)
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax transforms for different images (different intensities)
  const img1MoveX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const img1MoveY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

  const img2MoveX = useTransform(smoothX, [-0.5, 0.5], [40, -40]);
  const img2MoveY = useTransform(smoothY, [-0.5, 0.5], [40, -40]);

  const img3MoveX = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const img3MoveY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  const img4MoveX = useTransform(smoothX, [-0.5, 0.5], [60, -60]);
  const img4MoveY = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="bg-white py-24 md:py-64 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] md:min-h-[100vh]"
    >
      <div className="max-w-[1200px] mx-auto text-center relative z-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative inline-block mb-10"
        >
          <div className="bg-black text-white text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            33K+ USERS
          </div>
          {/* Small tail/pointer */}
          <div className="absolute -bottom-1 left-1 w-2 h-2 bg-black rotate-45" />
        </motion.div>

        <h2 className="text-[12vw] md:text-[10vw] font-black uppercase leading-[0.8] text-[#0C0E12] tracking-tighter mb-10 md:mb-16">
          <span className="block">Let’s Create</span>
          <span className="text-orange-600 block">Something</span>
          <span className="block italic">Better <span className="not-italic text-[#0C0E12]">Together!</span></span>
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-[#14161B] text-white rounded-full font-bold uppercase tracking-widest text-[11px] inline-flex items-center gap-3 shadow-2xl transition-all mx-auto"
        >
          View All Projects <ArrowUpRight size={18} strokeWidth={3} />
        </motion.button>
      </div>

      {/* Floating Images with Mouse Influence */}

      {/* Top Left Image */}
      <motion.div
        style={{ x: img1MoveX, y: img1MoveY }}
        className="absolute top-[10%] left-[12%] w-[220px] aspect-[4/5] z-10 hidden lg:block"
      >
        <img
          src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63d10d18f7f9092d93761_Img%20(5)-p-500.webp"
          className="w-full h-full object-cover rounded-2xl shadow-6xl grayscale hover:grayscale-0 transition-all duration-700"
          alt="Work 1"
        />
      </motion.div>

      {/* Top Right Image */}
      <motion.div
        style={{ x: img2MoveX, y: img2MoveY }}
        className="absolute top-[8%] right-[15%] w-[180px] aspect-square z-10 hidden lg:block"
      >
        <img
          src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63807f382581015681b0f_Emoji-p-500.webp"
          className="w-full h-full object-cover rounded-full shadow-6xl grayscale hover:grayscale-0 transition-all duration-700"
          alt="Work 2"
        />
      </motion.div>

      {/* Bottom Left Image */}
      <motion.div
        style={{ x: img3MoveX, y: img3MoveY }}
        className="absolute bottom-[10%] left-[15%] w-[260px] aspect-square z-10 hidden lg:block"
      >
        <img
          src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c7ba173bf929fe05bd6_Img%20(2)-p-500.webp"
          className="w-full h-full object-cover rounded-2xl shadow-6xl grayscale hover:grayscale-0 transition-all duration-700"
          alt="Work 3"
        />
      </motion.div>

      {/* Bottom Right Image */}
      <motion.div
        style={{ x: img4MoveX, y: img4MoveY }}
        className="absolute bottom-[5%] right-[12%] w-[240px] aspect-[3/4] z-10 hidden lg:block"
      >
        <img
          src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67e63c81162c2494e4bed2f6_Img%20(3)%20(1)-p-500.webp"
          className="w-full h-full object-cover rounded-2xl shadow-6xl grayscale hover:grayscale-0 transition-all duration-700"
          alt="Work 4"
        />
      </motion.div>
    </section>
  )
}

/* ================= FOOTER ================= */
const CustomFooter = () => {
  return (
    <footer className="bg-[#0C0E12] pt-20 md:pt-40 pb-12 px-6 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 mb-20 md:mb-40">
          <div>
            <h2 className="text-[12vw] md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
              Let's Work <br /> Together
            </h2>
            <button className="px-12 py-6 border-2 border-white/20 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all flex items-center gap-4 group">
              Get In Touch <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-3">Email</p>
                <p className="text-xl font-bold">hello@midis.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-3">Phone</p>
                <p className="text-xl font-bold">+1 (888) 123 4567</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-black text-white/40 mb-6">Socials</p>
              <ul className="space-y-4">
                {["Facebook", "Instagram", "Linkedin", "Dribbble"].map(s => (
                  <li key={s} className="text-2xl md:text-3xl font-black uppercase tracking-tighter hover:text-orange-600 cursor-pointer transition-colors">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold tracking-widest text-white/30 uppercase">© 2026 Midis Creative Agency. All Rights Reserved.</p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map(l => (
              <span key={l} className="text-[11px] font-bold tracking-widest text-white/30 uppercase cursor-pointer hover:text-white transition-colors">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ================= PAGE EXPORT ================= */
export default function Services2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0C0E12] w-full min-h-screen text-black font-sans selection:bg-orange-600 selection:text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ParallaxSection />
      <ExploreServices />
      <MarqueeSection />
      <ProcessSection />
      <CTACollage />
      <CustomFooter />
    </main>
  )
}
