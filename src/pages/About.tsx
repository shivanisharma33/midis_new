"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navigation } from '@/components/Navigation';
import { Footer } from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= WHAT WE DO DATA ================= */
const whatWeDoItems = [
  {
    label: "Goal-Focused",
    number: "01",
    image:
      "https://cdn.prod.website-files.com/68de4d484f15cd7c9cd565f8/68e70d3c687c5b5913be04c3_About%20Hero%20Image%201.jpg",
  },
  {
    label: "Data-Driven",
    number: "02",
    image: "images/Futuristic Portrait.png",
  },
  {
    label: "Creative Team",
    number: "03",
    image: "images/Futuristic VR Portrait.png",
  },
  {
    label: "Customized",
    number: "04",
    image: "images/Futuristic Glitch Portrait.png",
  },
];

const Page: React.FC = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const whatWeDoRef = useRef<HTMLDivElement | null>(null);

  /* ================= ABOUT SECTION GSAP (UNCHANGED) ================= */
  useEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".nav-item", { y: 30, opacity: 0 });
      gsap.set(".reveal-line", { y: 120, opacity: 0 });
      gsap.set(".reveal-para", { y: 40, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      });

      tl.to(".nav-item", {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      })
        .to(
          ".reveal-line",
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          ".reveal-para",
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  /* ================= WHAT WE DO PIN SCROLL (ADDED ONLY) ================= */
  useEffect(() => {
    if (!whatWeDoRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: whatWeDoRef.current,
      start: "top top",
      end: "+=400%",
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const index = Math.min(
          whatWeDoItems.length - 1,
          Math.floor(self.progress * whatWeDoItems.length)
        );
        setActiveIndex(index);
      },
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
          <Navigation />

      {/* ================= HERO SECTION (UNCHANGED) ================= */}
      <section
        className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="absolute left-[60px] text-black font-extrabold tracking-tight text-[140px] leading-none z-[1]">
          GRO
        </h1>

        <h1 className="absolute right-[60px] text-black font-extrabold tracking-tight text-[110px] leading-none z-[1]">
          WITH
        </h1>

        <div className="relative flex items-center justify-center z-[2]">
          <div
            onMouseEnter={() =>
              setBgImage(
                "https://cdn.prod.website-files.com/68de4d484f15cd7c9cd565f8/68e70d3c687c5b5913be04c3_About%20Hero%20Image%201.jpg"
              )
            }
            onMouseLeave={() => setBgImage(null)}
            className="w-[300px] h-[420px] rounded-2xl bg-cover bg-center rotate-[-8deg] translate-x-[120px]"
            style={{
              backgroundImage:
                "url('https://cdn.prod.website-files.com/68de4d484f15cd7c9cd565f8/68e70d3c687c5b5913be04c3_About%20Hero%20Image%201.jpg')",
            }}
          />

          <div
            onMouseEnter={() => setBgImage("/images/milestone.webp")}
            onMouseLeave={() => setBgImage(null)}
            className="w-[260px] h-[460px] rounded-2xl bg-cover bg-center shadow-xl z-[3]"
            style={{ backgroundImage: "url('/images/milestone.webp')" }}
          />

          <div
            onMouseEnter={() => setBgImage("/images/team-8.webp")}
            onMouseLeave={() => setBgImage(null)}
            className="w-[300px] h-[420px] rounded-2xl bg-cover bg-center rotate-[8deg] translate-x-[-120px]"
            style={{ backgroundImage: "url('/images/team-8.webp')" }}
          />
        </div>
      </section>

  
 
      {/* ================= ABOUT SECTION ================= */}
   <section
  ref={aboutRef}
  className="w-full min-h-screen bg-white px-[80px] py-[60px] flex items-center justify-center"
>
  <div className="max-w-[980px] text-center">
    <h1 className="font-['Anton'] text-black text-[112px] leading-[1] tracking-tight overflow-hidden">
      <span className="block reveal-line">CREATIVE STRATEGY</span>
      <span className="block reveal-line">REAL BUSINESS</span>
      <span className="block reveal-line">RESULTS.</span>
    </h1>

    <p className="mt-[36px] max-w-[720px] mx-auto reveal-para">
      At PixelReach, we don’t just create campaigns — we craft strategies
      that solve problems, spark engagement, and drive measurable growth.
    </p>
  </div>
</section>


      {/* ================= WHAT WE DO SECTION (LOGIC ADDED ONLY) ================= */}
      <section
  ref={whatWeDoRef}
  className="w-full h-screen flex bg-white"
>
  {/* LEFT SIDE */}
  <div className="w-1/2 flex flex-col justify-between px-[90px] py-[80px]">
    <div className="space-y-[10px]">
      {whatWeDoItems.map((item, index) => (
        <p
          key={index}
          className={`text-[16px] ${
            activeIndex === index
              ? "text-black font-semibold"
              : "text-gray-400 font-medium"
          }`}
        >
          {item.label}
        </p>
      ))}
    </div>

    <h1 className="text-[64px] leading-[1.05] font-extrabold tracking-tight text-black">
      DATA-BACKED <br /> DECISIONS
    </h1>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
    <img
      src={whatWeDoItems[activeIndex].image}
      alt="Product"
      className="w-full h-full object-cover"
    />
  </div>
</section>


      <Footer />
    </>
  );
};

export default Page;
