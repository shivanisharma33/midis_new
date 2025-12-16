import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const letters = "MIDIS".split("");

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {

      /* ===============================
         INITIAL STATES
      =============================== */
      gsap.set(".hero-bg-2", { opacity: 0, scale: 1.1 });
      gsap.set(".hero-content", {
        opacity: 0,
        y: 120,
        filter: "blur(14px)",
      });

      /* ===============================
         MAIN SCROLL TIMELINE
      =============================== */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=350%",
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
        },
      });

      /* ===============================
         SCENE 1 — MIDIS EXIT (SMOOTH)
      =============================== */
      tl.to(".hero-title span", {
        y: -140,
        opacity: 0,
        scale: 1.6,
        stagger: 0.06,
        duration: 1.6,
        ease: "power4.out",
      });

      /* ===============================
         SCENE 2 — BACKGROUND SWITCH
      =============================== */
      tl.to(
        ".hero-bg-1 img",
        {
          scale: 1.15,
          y: -60,
          opacity: 0,
          duration: 1.4,
          ease: "power2.out",
        },
        "-=0.6"
      );

      tl.to(
        ".hero-bg-2",
        {
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "power2.out",
        },
        "-=0.8"
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
          duration: 1.8,
          ease: "power4.out",
        },
        "-=0.6"
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
        <h1 className="font-anton text-[8rem] md:text-[14rem] lg:text-[18rem] text-white flex">
          {letters.map((letter, i) => (
            <span key={i} className="inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* ================= FINAL CONTENT ================= */}
      <div className="hero-content absolute inset-0 flex items-center justify-center z-40">
        <div className="text-center max-w-3xl mx-auto text-white px-8">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Powerful Digital Solutions for Future-Ready Brands
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 mb-10">
            Websites, apps, branding & marketing — everything your business needs
            to scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl text-lg hover:scale-105 transition">
              Get Consultation
            </button>

            <button className="px-8 py-4 bg-black text-white border border-white/30 rounded-xl text-lg hover:bg-white hover:text-black transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
