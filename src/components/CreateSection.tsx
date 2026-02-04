"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const CreateSection = () => {
  const container = useRef<HTMLElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animation for the left image - subtle scale/move as you scroll the section
    gsap.to(".left-image", {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Right side elements fade in/up
    const rightElements = gsap.utils.toArray<HTMLElement>(".right-item");
    rightElements.forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative flex flex-col md:flex-row w-full bg-white text-black min-h-[200vh]"
    >
      {/* LEFT COLUMN - STICKY */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 flex items-center justify-center overflow-hidden bg-neutral-100">
        <div
          ref={leftImageRef}
          className="left-image relative w-[80%] h-[80%] shadow-2xl overflow-hidden rounded-lg"
        >
          <img
            src="/images/banner.webp"
            alt="Design Excellence"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          {/* Authentic glitch/neon effect overlay similar to reference */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-pink-500/20 mix-blend-overlay" />
        </div>
      </div>

      {/* RIGHT COLUMN - SCROLLABLE */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-20 gap-24 md:gap-40 bg-white">

        {/* Item 1: Abstract Image */}
        <div className="right-item w-full flex justify-end">
          <div className="w-full max-w-md aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/hover-image.webp"
              alt="Abstract Art"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Item 2: Main Text */}
        <div className="right-item flex flex-col items-center text-center my-10">
          <p className="text-xs font-bold tracking-widest text-gray-400 mb-4 uppercase">
            15+ Years of Work Experience
          </p>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight uppercase mb-8">
            Your Trusted <br />
            Partner in <br />
            Design <br />
            Excellence
          </h2>
          <button className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Item 3: Object/Product */}
        <div className="right-item w-full flex justify-start">
          <div className="w-full max-w-sm aspect-[4/3] bg-orange-50 rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Using a placeholder div to mimic the orange slice/abstract object */}
            <div className="w-full h-full flex items-center justify-center bg-orange-100">
              <img
                src="/images/banner-about.webp"
                alt="Creative Object"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </div>

        {/* Item 4: Character/Mascot */}
        <div className="right-item w-full flex justify-end">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/hover-image.webp"
              alt="Character Design"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
