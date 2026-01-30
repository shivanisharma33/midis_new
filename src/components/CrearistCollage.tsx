"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrearistCollage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleGroupRef = useRef<HTMLDivElement | null>(null);
  const milestonesRef = useRef<HTMLDivElement | null>(null);

  // Image Refs
  const imgGuyRef = useRef<HTMLDivElement | null>(null);
  const imgGoldRef = useRef<HTMLDivElement | null>(null);
  const imgOrangeRef = useRef<HTMLDivElement | null>(null);
  const imgRobotRef = useRef<HTMLDivElement | null>(null);
  const imgMotionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    /* ===============================
       INITIAL SETUP
    =============================== */

    // Text starts fully hidden and set to small scale
    gsap.set(titleGroupRef.current, {
      opacity: 0,
      scale: 0.6,
      y: 0,
      zIndex: 0
    });

    // Milestones (Stage 4 content) hidden
    gsap.set(milestonesRef.current, { opacity: 0, x: 200 });

    /* ===============================
       TIMELINE ANIMATION
    =============================== */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=700%", // Longer scroll for smoother multi-phase animation
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    /* --- PHASE 1: SHIFT IMAGES & SHOW SMALL TEXT (BEHIND) --- */
    // This happens immediately upon scrolling
    tl.to(titleGroupRef.current, {
      opacity: 1,
      scale: 0.8, // Shows up small as requested
      duration: 3,
      ease: "power2.inOut"
    }, 0);

    // Images shift dramatically to create the central gap for the text
    tl.to(imgGuyRef.current, { x: "-20%", y: "-5%", duration: 3, ease: "power2.inOut" }, 0);
    tl.to(imgGoldRef.current, { x: "-10%", y: "-10%", duration: 3, ease: "power2.inOut" }, 0);
    tl.to(imgMotionRef.current, { x: "20%", y: "-5%", duration: 3, ease: "power2.inOut" }, 0);
    tl.to(imgRobotRef.current, { x: "25%", duration: 3, ease: "power2.inOut" }, 0);

    /* --- PHASE 2: TEXT GROWS & BACKGROUND BLURS --- */
    tl.to(titleGroupRef.current, {
      scale: 1.4,
      opacity: 0.15, // Starts to fade as it gets very large
      duration: 4,
      ease: "sine.inOut"
    }, ">");

    /* --- PHASE 3: ASSETS EXPLODE AWAY --- */
    tl.to(imgGoldRef.current, { x: "-300%", y: "-250%", opacity: 0, duration: 3 }, "<+1");
    tl.to(imgOrangeRef.current, { x: "-200%", y: "250%", opacity: 0, duration: 3 }, "<");
    tl.to(imgMotionRef.current, { x: "300%", y: "-150%", opacity: 0, scale: 2, duration: 3 }, "<");
    tl.to(imgRobotRef.current, { x: "350%", y: "100%", opacity: 0, duration: 3 }, "<");
    tl.to(titleGroupRef.current, { opacity: 0, duration: 1.5 }, "<+1.5");

    /* --- PHASE 4: FINAL REVEAL (MILESTONES) --- */
    // Main Guy settles into his definitive left position
    tl.to(imgGuyRef.current, {
      x: isMobile ? "0%" : "-155%",
      y: isMobile ? "-20%" : "0%",
      scale: isMobile ? 0.9 : 1.35,
      width: isMobile ? "34%" : "34%", // Keep width consistent but shift
      duration: 3.5,
      ease: "power3.inOut"
    }, ">-1.5");

    // Reveal Milestone content
    tl.to(milestonesRef.current, {
      opacity: 1,
      x: 0,
      duration: 3.5,
      ease: "power3.out"
    }, "<");

    tl.from(".milestone-stagger", {
      y: 60,
      opacity: 0,
      stagger: 0.3,
      duration: 2.5,
      ease: "power2.out"
    }, "<0.5");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden">

      {/* 1. LAYER: TEXT (BEHIND IMAGES) */}
      <div
        ref={titleGroupRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 select-none pointer-events-none text-center"
      >
        <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] text-black/30 mb-6 uppercase">
          15+ YEARS OF WORK EXPERIENCE
        </span>
        <h2 className="text-[clamp(3rem,10vw,8rem)] font-bold text-black leading-[0.85] uppercase tracking-tighter mb-10">
          YOUR TRUSTED<br />
          PARTNER IN DESIGN<br />
          EXCELLENCE
        </h2>

        {/* Scroll Indicator */}
        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-white/50 backdrop-blur-sm mt-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 13l5 5 5-5M12 6v12" />
          </svg>
        </div>
      </div>

      {/* 2. LAYER: COLLAGE ASSETS (IN FRONT) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">

        {/* Guy Portrait */}
        <div
          ref={imgGuyRef}
          className="absolute left-[18%] top-[25%] w-[21vw] aspect-[3/4.4] overflow-hidden shadow-2xl z-20"
        >
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/680771c062181f09a0bb7928_Partner%20(1)-p-500.webp"
            alt="Main Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gold Shape */}
        <div
          ref={imgGoldRef}
          className="absolute left-[30%] top-[15%] w-[13vw] aspect-square z-30 pointer-events-none"
        >
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/680771c04782536da6d784cd_Partner.webp"
            alt="Gold Asset"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Orange Fruit */}
        <div
          ref={imgOrangeRef}
          className="absolute left-[37%] top-[54%] w-[11vw] aspect-square z-25 pointer-events-none"
        >
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67f3744155131a860ce7f378_image%20(20).webp"
            alt="Orange"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Large Blur Center Portrait */}
        <div
          ref={imgMotionRef}
          className="absolute left-[47%] top-[10%] w-[25vw] aspect-[3/4.2] overflow-hidden shadow-xl z-10"
        >
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/6826e26267d669b873e710d1_image%20(42)-p-800.webp"
            alt="Motion Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Robot */}
        <div
          ref={imgRobotRef}
          className="absolute left-[68%] top-[32%] w-[19vw] aspect-[4/3] z-20"
        >
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67f3744155131a860ce7f375_image%20(21).webp"
            alt="Asset"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* 3. LAYER: FINAL MILESTONES (In Front) */}
      <div
        ref={milestonesRef}
        className="absolute inset-0 flex flex-col items-end justify-center px-12 md:px-32 z-40 pointer-events-none"
      >
        <div className="max-w-xl text-black">
          <h2 className="milestone-stagger text-[clamp(2.5rem,7vw,6.5rem)] font-bold uppercase leading-[0.8] mb-16 tracking-tighter">
            MILESTONES<br />THAT SHOWCASE<br />OUR EXCELLENCE
          </h2>

          <div className="grid grid-cols-2 gap-x-12 pt-12 border-t border-black/10">
            <div className="flex flex-col">
              <span className="milestone-stagger text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 font-semibold border-b border-black/5 pb-2">SUCCESS THROUGH CLIENTS</span>
              <span className="milestone-stagger text-7xl md:text-9xl font-black">98%</span>
            </div>
            <div className="flex flex-col">
              <span className="milestone-stagger text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 font-semibold border-b border-black/5 pb-2">IDEAS DELIVERED</span>
              <span className="milestone-stagger text-7xl md:text-9xl font-black">15M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </section>
  );
}
