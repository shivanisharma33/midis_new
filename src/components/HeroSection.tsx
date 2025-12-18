import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const letters = "MIDIS".split("");

  useEffect(() => {
    if (!heroRef.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      /* ===============================
         INITIAL STATES
      =============================== */
      gsap.set(".hero-bg-2", { opacity: 0, scale: 1.05 });
      gsap.set(".hero-content", {
        opacity: 0,
        y: 80,
        filter: "blur(12px)",
      });

      /* ===============================
         MAIN SCROLL TIMELINE
      =============================== */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",

          // 🚀 ULTRA FAST MOBILE
          end: isMobile ? "+=110%" : "+=350%",

          pin: true,

          // 🚀 VERY FAST SCRUB ON MOBILE
          scrub: isMobile ? 0.25 : 1.5,

          anticipatePin: 1,
        },
      });

      /* ===============================
         SCENE 1 — MIDIS EXIT
      =============================== */
      tl.to(".hero-title span", {
        y: -120,
        opacity: 0,
        scale: 1.4,
        stagger: isMobile ? 0.04 : 0.06,
        duration: isMobile ? 0.9 : 1.6,
        ease: "power3.out",
      });

      /* ===============================
         SCENE 2 — BACKGROUND SWITCH
      =============================== */
      tl.to(
        ".hero-bg-1 img",
        {
          scale: 1.12,
          y: -40,
          opacity: 0,
          duration: isMobile ? 0.8 : 1.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to(
        ".hero-bg-2",
        {
          opacity: 1,
          scale: 1,
          duration: isMobile ? 0.9 : 1.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      /* ===============================
         SCENE 3 — FINAL CONTENT
      =============================== */
      tl.to(
        ".hero-content",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: isMobile ? 0.9 : 1.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

      /* ===============================
         LIQUID OVERLAY LOOP
      =============================== */
      gsap.to(".liquid-overlay", {
        backgroundPosition: "180% 180%",
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* ================= LIQUID OVERLAY ================= */}
      <div className="liquid-overlay absolute inset-0 z-10 pointer-events-none" />

      {/* ================= BG IMAGE 1 ================= */}
      <div className="hero-bg-1 absolute inset-0 z-0">
        <img
          src="/images/midis-hero.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ================= BG IMAGE 2 ================= */}
      <div className="hero-bg-2 absolute inset-0 z-0">
        <img
          src="/images/MIDIS.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ================= MIDIS TITLE ================= */}
      <div className="hero-title absolute inset-0 flex items-center justify-center z-20">
        <h1 className="font-anton text-[6rem] sm:text-[8rem] md:text-[14rem] lg:text-[18rem] text-white flex">
          {letters.map((letter, i) => (
            <span key={i} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* ================= FINAL CONTENT ================= */}
      <div className="hero-content absolute inset-0 flex items-center justify-center z-40">
        <div className="text-center max-w-3xl mx-auto text-white px-6">
          <h2 className="text-3xl md:text-6xl font-semibold mb-6 leading-tight">
            Powerful Digital Solutions for Future-Ready Brands
          </h2>

          <p className="text-base md:text-2xl text-gray-300 mb-10">
            Websites, apps, branding & marketing — everything your business needs
            to scale.
          </p>

        <div className="flex items-center justify-center gap-6 relative">
  {/* Left Button */}
  <button
    className="btn-border-animate group relative overflow-hidden px-8 py-4 rounded-full text-lg font-medium
    bg-gradient-to-b from-[#3a3a3a] to-[#1f1f1f]
    text-gray-200 shadow-inner shadow-black/40"
  >
    {/* Text animation stays SAME */}
    <div className="relative overflow-hidden h-[1.5em]">
      <p className="transition-transform duration-[500ms]
        ease-[cubic-bezier(0.19,1,0.22,1)]
        group-hover:-translate-y-full">
        Get in touch
      </p>
      <p className="absolute top-full left-0
        transition-all duration-[500ms]
        ease-[cubic-bezier(0.19,1,0.22,1)]
        group-hover:top-0">
        Get in touch
      </p>
    </div>
  </button>

  {/* Line */}
  <span className="hidden sm:block w-20 h-px bg-white/30"></span>

  {/* Right Button */}
  <button
    className="btn-border-animate group relative overflow-hidden px-8 py-4 rounded-full text-lg font-medium
    bg-gradient-to-b from-[#3a3a3a] to-[#1f1f1f]
    text-gray-200 shadow-inner shadow-black/40"
  >
    <div className="relative overflow-hidden h-[1.5em]">
      <p className="transition-transform duration-[500ms]
        ease-[cubic-bezier(0.19,1,0.22,1)]
        group-hover:-translate-y-full">
        See My Work
      </p>
      <p className="absolute top-full left-0
        transition-all duration-[500ms]
        ease-[cubic-bezier(0.19,1,0.22,1)]
        group-hover:top-0">
        See My Work
      </p>
    </div>
  </button>
</div>


        </div>
      </div>
    </section>
  );
};
