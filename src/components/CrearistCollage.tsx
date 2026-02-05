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
  const cardStackRef = useRef<HTMLDivElement | null>(null);
  const imgStack2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      /* ===============================
         INITIAL SETUP
      =============================== */
      gsap.set(titleGroupRef.current, {
        opacity: 1,
        scale: 0.1,
        y: 0,
        zIndex: 0
      });

      gsap.set(milestonesRef.current, { opacity: 0, x: 100 });
      gsap.set(cardStackRef.current, { y: "100%", opacity: 0 });
      gsap.set(imgStack2Ref.current, { opacity: 0 });

      /* ===============================
         TIMELINE ANIMATION
      =============================== */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=1000%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* --- PHASE 1: IMAGES SHIFT --- */
      tl.to(titleGroupRef.current, {
        scale: 0.2,
        duration: 3,
        ease: "power2.inOut"
      }, 0);

      tl.to(imgGuyRef.current, { x: "-35%", y: "-10%", duration: 3, ease: "power2.inOut" }, 0);
      tl.to(imgGoldRef.current, { x: "-30%", y: "-25%", duration: 3, ease: "power2.inOut" }, 0);
      tl.to(imgMotionRef.current, { x: "35%", y: "-10%", duration: 3, ease: "power2.inOut" }, 0);
      tl.to(imgRobotRef.current, { x: "45%", duration: 3, ease: "power2.inOut" }, 0);

      /* --- PHASE 2: TEXT ZOOMS IN --- */
      tl.to(titleGroupRef.current, {
        scale: 0.8,
        duration: 4,
        ease: "power2.inOut"
      }, ">");

      tl.to(imgGuyRef.current, { x: "-100%", y: "-15%", duration: 4, ease: "power2.inOut" }, "<");
      tl.to(imgGoldRef.current, { x: "-110%", y: "-110%", duration: 4, ease: "power2.inOut" }, "<");
      tl.to(imgMotionRef.current, { x: "100%", y: "-20%", duration: 4, ease: "power2.inOut" }, "<");
      tl.to(imgRobotRef.current, { x: "120%", y: "30%", duration: 4, ease: "power2.inOut" }, "<");
      tl.to(imgOrangeRef.current, { x: "0%", y: "110%", duration: 4, ease: "power2.inOut" }, "<");

      /* --- PHASE 3: TEXT SLIDE UP & IMAGE TO LEFT --- */
      tl.to(titleGroupRef.current, {
        y: -150,
        opacity: 0,
        duration: 2,
        ease: "power3.inOut"
      }, ">");

      tl.to(imgMotionRef.current, {
        left: 0,
        top: 0,
        width: isMobile ? "100%" : "50vw",
        height: isMobile ? "50%" : "100vh",
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        zIndex: 50,
        duration: 4,
        ease: "power3.inOut"
      }, "<");

      tl.to([imgGuyRef.current, imgGoldRef.current, imgOrangeRef.current, imgRobotRef.current], {
        opacity: 0,
        scale: 0.5,
        y: 50,
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.in"
      }, "<");

      /* --- PHASE 4: FINAL REVEAL (MILESTONES) --- */
      tl.to(milestonesRef.current, {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: "power3.out"
      }, "<+0.5");

      tl.from(".milestone-reveal", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power2.out"
      }, "<+0.2");

      /* --- PHASE 6: STACK CARD (Directly after Milestones) --- */
      tl.to(milestonesRef.current, {
        scale: 0.96,
        y: -40,
        opacity: 0.3,
        duration: 4,
        ease: "power2.inOut"
      }, ">+1");

      tl.to(imgMotionRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power3.inOut"
      }, "<");

      tl.to(imgStack2Ref.current, {
        opacity: 1,
        duration: 3,
        ease: "power3.out"
      }, "<+1");

      tl.to(cardStackRef.current, {
        y: 0,
        opacity: 1,
        duration: 5,
        ease: "power2.out"
      }, "<+0.5");
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-white overflow-hidden">

      {/* 1. LAYER: TEXT (BEHIND IMAGES - z-0) */}
      <div
        ref={titleGroupRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 select-none pointer-events-none text-center"
      >
        <span className="text-[8px] md:text-[10px] font-bold tracking-[0.25em] text-black/30 mb-6 uppercase">
          TOP RATED GLOBAL DIGITAL AGENCY
        </span>
        <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold text-black leading-[1.1] uppercase tracking-tight mb-10">
          BUILDING BRANDS,<br />
          DRIVING GROWTH,<br />
          GROWING BEYOND LIMITS
        </h2>

        {/* Scroll Indicator */}
        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center bg-white/50 backdrop-blur-sm mt-4">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 13l5 5 5-5M12 6v12" />
          </svg>
        </div>
      </div>

      {/* 2. LAYER: COLLAGE ASSETS (IN FRONT - z-10+) */}
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
          className="absolute left-[47%] top-[10%] w-[25vw] h-[35vw] overflow-hidden z-10"
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
        className="absolute inset-0 flex z-40 pointer-events-none"
      >
        <div className="hidden md:block w-1/2 h-full" />
        <div className="w-full md:w-1/2 h-full bg-white flex flex-col items-center justify-center pointer-events-auto shadow-[-20px_0_50px_rgba(0,0,0,0.05)]">
          <div className="w-full max-w-2xl px-8 md:px-12 lg:px-16">
            <h2 className="milestone-reveal text-[clamp(2rem,4.5vw,4rem)] font-bold text-black leading-[1.1] mb-12 tracking-tight uppercase">
              RESULTS THAT<br />
              POWER REAL<br />
              BUSINESS GROWTH
            </h2>

            <div className="grid grid-cols-2 relative border-t border-black/5">
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/5"></div>
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/5"></div>

              <div className="pt-8 pb-10 px-4 md:px-6">
                <span className="milestone-reveal block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-bold leading-tight">
                  CLIENT ROI<br />INCREASE
                </span>
                <div className="flex items-center gap-3 relative">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-red-500 milestone-reveal"></span>
                  <span className="milestone-reveal block text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-[#141414] leading-[1.2]">3.4X</span>
                </div>
              </div>

              <div className="pt-8 pb-10 px-6 md:px-8">
                <span className="milestone-reveal block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-bold leading-tight">
                  ORGANIC TRAFFIC<br />GROWTH
                </span>
                <span className="milestone-reveal block text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-[#141414] leading-[1.2]">120%</span>
              </div>

              <div className="pt-10 pb-4 px-4 md:px-6">
                <span className="milestone-reveal block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-bold leading-tight">
                  SUPPORT COST<br />SAVINGS
                </span>
                <span className="milestone-reveal block text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-[#141414] leading-[1.2]">40%</span>
              </div>

              <div className="pt-10 pb-4 px-6 md:px-8">
                <span className="milestone-reveal block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-bold leading-tight">
                  CSAT SCORE<br />IMPROVEMENT
                </span>
                <span className="milestone-reveal block text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-[#141414] leading-[1.2]">+25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={cardStackRef}
        className="absolute inset-0 flex z-50 pointer-events-none"
      >
        <div ref={imgStack2Ref} className="hidden md:block w-1/2 h-full overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/680771c045ce1011349f054e_Milestone-p-1080.webp"
            alt="Stack 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-full bg-white flex flex-col items-center justify-center pointer-events-auto shadow-[-20px_0_50px_rgba(0,0,0,0.05)]">
          <div className="w-full max-w-2xl px-8 md:px-12 lg:px-16">
            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-bold text-black leading-[1.1] mb-12 tracking-tight uppercase">
              WHY TOP BRANDS<br />
              TRUST OUR<br />
              EXPERTISE
            </h2>

            <div className="grid grid-cols-2 relative border-t border-black/5">
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/5"></div>
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/5"></div>

              <div className="pt-8 pb-10 px-4 md:px-6">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-bold leading-tight">
                  GLOBAL BRANDING<br />SOLUTIONS
                </span>
                <div className="flex items-center gap-3 relative">
                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span className="block text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-[#141414] leading-[1.2]">360°</span>
                </div>
              </div>

              <div className="pt-8 pb-10 px-6 md:px-8">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-bold leading-tight">
                  DEDICATED TEAM<br />EXPERTS
                </span>
                <span className="block text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-[#141414] leading-[1.2]">15+</span>
              </div>

              <div className="pt-10 pb-4 px-4 md:px-6">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-bold leading-tight">
                  TRANSPARENT<br />COMMUNICATION
                </span>
                <span className="block text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-[#141414] leading-[1.2]">100%</span>
              </div>

              <div className="pt-10 pb-4 px-6 md:px-8">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400 mb-4 font-bold leading-tight">
                  LONG-TERM<br />PARTNERSHIPS
                </span>
                <span className="block text-[clamp(2rem,4.5vw,4.5rem)] font-bold text-[#141414] leading-[1.2]">YES</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </section>
  );
}