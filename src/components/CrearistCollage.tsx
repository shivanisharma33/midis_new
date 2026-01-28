"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrearistCollage() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textWrapRef = useRef<HTMLDivElement | null>(null);
  const leftGroupRef = useRef<HTMLDivElement | null>(null);
  const rightGroupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapperRef.current;
    const textWrap = textWrapRef.current;
    const leftGroup = leftGroupRef.current;
    const rightGroup = rightGroupRef.current;
    
    if (!wrap || !textWrap || !leftGroup || !rightGroup) return;

    const isMobile = window.innerWidth < 768;

    /* ===============================
       INITIAL STATE
    =============================== */
    gsap.set(textWrap, {
      opacity: 0,
      scale: 0.9,
      zIndex: 5, // Start in front
    });

    /* ===============================
       MAIN ANIMATION TIMELINE
    =============================== */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: isMobile ? "+=400%" : "+=500%",
        scrub: isMobile ? 1 : 1.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    /* ===== PHASE 1: TEXT APPEARS SMALL ===== */
    tl.to({}, { duration: 0.15 });
    
    tl.to(textWrap, {
      opacity: 1,
      scale: 0.7,
      duration: 0.3,
      ease: "power2.out",
    });

    /* ===== PHASE 2: IMAGES SPREAD & TEXT GOES BEHIND ===== */
    tl.to(".img-1", { x: -100, y: -80, rotate: -3, ease: "power2.out", duration: 0.4 }, "<0.1");
    tl.to(".img-2", { x: 20, y: -120, rotate: 4, scale: 0.95, ease: "power2.out", duration: 0.4 }, "<");
    tl.to(".img-3", { x: -60, y: 80, rotate: -2, ease: "power2.out", duration: 0.4 }, "<");
    tl.to(".img-4", { x: -30, y: 120, rotate: 5, scale: 0.9, ease: "power2.out", duration: 0.4 }, "<");
    tl.to(".img-5", { x: 80, y: -100, rotate: 2, ease: "power2.out", duration: 0.4 }, "<");
    tl.to(".img-6", { x: 140, y: 60, rotate: -3, ease: "power2.out", duration: 0.4 }, "<");

    // Text goes behind images
    tl.to(textWrap, {
      zIndex: 5,
      duration: 0.1,
    }, "<0.5");

    /* ===== PHASE 3: TEXT ZOOMS TO NORMAL SIZE ===== */
    tl.to(textWrap, {
      scale: 1,
      duration: 0.6,
      ease: "power2.inOut",
    });

    /* ===== PHASE 4: TEXT CONTINUES ZOOMING WITH SCROLL ===== */
    tl.to(textWrap, {
      scale: 1.2,
      duration: 1.2,
      ease: "power1.inOut",
    });
    
    // Right images slide UP
    tl.to(rightGroup, {
      y: isMobile ? -250 : -400,
      x: isMobile ? 50 : 100,
      duration: 0.8,
      ease: "power3.inOut",
    }, "<0.3");
    
    /* ===== PHASE 5: LEFT SIDE EXPANDS ===== */
    
    // Left images expand to full left viewport
    tl.to(leftGroup, {
      x: isMobile ? -50 : -150,
      scale: isMobile ? 1.3 : 1.6,
      duration: 0.8,
      ease: "power3.inOut",
    }, "<0.2");
    
    tl.to(".img-1", { 
      x: isMobile ? -80 : -200, 
      y: -50, 
      scale: 1.4,
      rotate: -2,
      ease: "power3.inOut", 
      duration: 0.8 
    }, "<");
    
    tl.to(".img-2", { 
      x: isMobile ? -40 : -120, 
      y: -100, 
      scale: 1.2,
      rotate: 3,
      ease: "power3.inOut", 
      duration: 0.8 
    }, "<");
    
    tl.to(".img-3", { 
      x: isMobile ? -60 : -150, 
      y: 100, 
      scale: 1.3,
      rotate: -4,
      ease: "power3.inOut", 
      duration: 0.8 
    }, "<");
    
    tl.to(".img-4", { 
      x: isMobile ? -50 : -140, 
      y: 180, 
      scale: 1.2,
      ease: "power3.inOut", 
      duration: 0.8 
    }, "<");

    tl.to(".img-5", { 
      y: isMobile ? -300 : -500, 
      x: 50,
      scale: 1.1,
      opacity: 0.7,
      ease: "power3.inOut", 
      duration: 0.8 
    }, "<");
    
    tl.to(".img-6", { 
      y: isMobile ? -350 : -550, 
      x: 80,
      scale: 1.15,
      opacity: 0.6,
      ease: "power3.inOut", 
      duration: 0.8 
    }, "<");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="bg-white">
      <section
        ref={wrapperRef}
        className="relative min-h-[100svh] w-full bg-white overflow-hidden"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />

        {/* LEFT SIDE IMAGE GROUP */}
        <div ref={leftGroupRef} className="absolute inset-0 z-10">
          {/* Image 1: Large portrait left - Blue/purple lighting */}
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/6826e26267d669b873e710d1_image%20(42)-p-800.webp"
            alt="Creative portrait"
            className="img-1 absolute left-[15%] top-[15%] w-[clamp(180px,24vw,260px)] h-[clamp(240px,32vw,350px)] object-cover shadow-2xl"
          />

          {/* Image 2: Gold/yellow hand top-center-left */}
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/680771c04782536da6d784cd_Partner.webp"
            alt="Design element"
            className="img-2 absolute left-[27%] top-[10%] w-[clamp(130px,17vw,190px)] h-[clamp(130px,17vw,190px)] object-cover shadow-2xl z-10"
          />

       

          {/* Image 4: Orange slice small center-bottom */}
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67f3744155131a860ce7f378_image%20(20).webp"
            alt="Design detail"
            className="img-4 absolute left-[30%] bottom-[20%] w-[clamp(100px,13vw,150px)] h-[clamp(100px,13vw,150px)] object-cover rounded-sm shadow-xl z-5"
          />
        </div>

        {/* RIGHT SIDE IMAGE GROUP */}
        <div ref={rightGroupRef} className="absolute inset-0 z-30">
          {/* Image 5: Center portrait - Orange hoodie (MAIN FOCAL) */}
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/680771c062181f09a0bb7928_Partner%20(1)-p-500.webp"
            alt="Creative portrait"
            className="img-5 absolute right-[40%] top-[5%] w-[clamp(220px,29vw,320px)] h-[clamp(290px,38vw,420px)] object-cover shadow-2xl"
          />

          {/* Image 6: Right side - Cute character/robot */}
          <img
            src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/67f3744155131a860ce7f375_image%20(21).webp"
            alt="3D character"
            className="img-6 absolute right-[25%] top-[17%] w-[clamp(170px,22vw,240px)] h-[clamp(150px,20vw,210px)] object-cover shadow-2xl"
          />
        </div>

        {/* FIRST TEXT (GOES BEHIND IMAGES & ZOOMS) */}
        <div
          ref={textWrapRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
        >
          <h1 className="text-black text-[1.6rem] sm:text-[2.4rem] md:text-[3.4rem] lg:text-[4.2rem] font-bold leading-tight">
            YOUR TRUSTED
          </h1>
          <h1 className="text-black text-[1.6rem] sm:text-[2.4rem] md:text-[3.4rem] lg:text-[4.2rem] font-bold leading-tight">
            PARTNER IN
          </h1>
          <h1 className="text-black text-[1.6rem] sm:text-[2.4rem] md:text-[3.4rem] lg:text-[4.2rem] font-bold leading-tight">
            DESIGN EXCELLENCE
          </h1>

        
        </div>
      </section>
    </section>
  );
}