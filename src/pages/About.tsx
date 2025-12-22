"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { TeamSection } from '@/components/TeamSection';
import { Footer } from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= WORKFLOW DATA (FIXED) ================= */
const workflowCards = [
  {
    heading: "SEO & Organic Growth",
    description:
      "Drive long-term traffic and visibility with our SEO and organic growth strategies. From on-page optimization to content planning, we help your brand rank higher and attract the right audience.",
    sub: "Think of our process as a friendly collaboration",
  },
  {
    heading: "Social Media",
    description:
      "Engage your audience and grow your brand with our expert social media management. We create, schedule, and optimize content across platforms to boost visibility, build trust, and drive real engagement.",
    sub: "Design meets purpose",
  },
  {
    heading: "Web Development & Design",
    description:
      "Our team builds scalable solutions using modern technologies and best practices.",
    sub: "Clean, fast & future-ready",
  },
  {
    heading: "Email Marketing",
    description:
      "We launch, optimize, and iterate campaigns to ensure measurable business growth.",
    sub: "Long-term success focus",
  },
];

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
  const workflowRef = useRef<HTMLDivElement | null>(null);
  const workflowTrackRef = useRef<HTMLDivElement | null>(null);

  /* ================= ABOUT GSAP ================= */
  useEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".reveal-line", { y: 120, opacity: 0 });
      gsap.set(".reveal-para", { y: 40, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
          },
        })
        .to(".reveal-line", {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out",
        })
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

  /* ================= WHAT WE DO PIN ================= */
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

  /* ================= WORKFLOW GSAP ================= */
useEffect(() => {
  if (!workflowRef.current || !workflowTrackRef.current) return;

  const mm = gsap.matchMedia();

  /* =====================================================
     💻 DESKTOP (≥1024px) — YOUR ORIGINAL ANIMATION
     ===================================================== */
  mm.add("(min-width: 1024px)", () => {
    const cards = gsap.utils.toArray<HTMLElement>(".workflow-card");
    const heading = workflowRef.current!.querySelector("h1");

    const CARD_WIDTH = 520;
    const GAP = 60;

    const scrollDistance =
      (CARD_WIDTH + GAP) * (cards.length - 1);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workflowRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    /* HOLD FIRST FRAME */
    tl.to({}, { duration: 0.2 });

    /* MOVE LEFT HEADING */
    tl.to(heading, {
      x: -820,
      ease: "power2.out",
      duration: 0.6,
    });

    /* MOVE CARDS */
    tl.to(
      workflowTrackRef.current,
      {
        x: -scrollDistance,
        ease: "none",
        duration: 1,
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  });

  /* =====================================================
     📱 MOBILE (<1024px) — LEFT ↔ RIGHT CARD ANIMATION
     ===================================================== */
  mm.add("(max-width: 1023px)", () => {
    const cards = gsap.utils.toArray<HTMLElement>(".workflow-card");

    cards.forEach((card, index) => {
      const fromX = index % 2 === 0 ? -120 : 120;

      gsap.fromTo(
        card,
        { opacity: 0, x: fromX },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  });

  return () => mm.revert();
}, []);



  return (
    <>
      <Navigation />

      {/* ================= HERO ================= */}
 <section
  className="
    relative w-full min-h-screen bg-white overflow-hidden
    flex items-center justify-center
    px-4 sm:px-6 lg:px-0
  "
  style={{
    backgroundImage: bgImage ? `url(${bgImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* ===== MOBILE TEXT (VISIBLE ALWAYS) ===== */}
  <div className="absolute top-10 w-full text-center z-[20] lg:hidden">
    <h1 className="text-black font-extrabold tracking-tight text-[48px] leading-none">
      GRO
    </h1>
    <h1 className="text-black font-extrabold tracking-tight text-[42px] leading-none mt-2">
      WITH
    </h1>
  </div>

  {/* ===== DESKTOP TEXT ===== */}
  <h1
    className="
      hidden lg:block absolute left-[60px]
      text-black font-extrabold tracking-tight leading-none z-[10]
      text-[140px]
    "
  >
    GRO
  </h1>

  <h1
    className="
      hidden lg:block absolute right-[60px]
      text-black font-extrabold tracking-tight leading-none z-[10]
      text-[110px]
    "
  >
    WITH
  </h1>

  {/* ===== IMAGES ===== */}
  <div
    className="
      relative flex items-center justify-center
      z-[5] lg:z-[2]
      scale-[0.7] sm:scale-[0.85] md:scale-[0.95] lg:scale-100
    "
  >
    {/* LEFT IMAGE */}
    <div
      onMouseEnter={() =>
        setBgImage(
          "https://cdn.prod.website-files.com/68de4d484f15cd7c9cd565f8/68e70d3c687c5b5913be04c3_About%20Hero%20Image%201.jpg"
        )
      }
      onMouseLeave={() => setBgImage(null)}
      className="
        w-[180px] h-[260px]
        sm:w-[240px] sm:h-[340px]
        lg:w-[300px] lg:h-[420px]
        rounded-2xl bg-cover bg-center
        rotate-[-8deg]
        translate-x-[40px] sm:translate-x-[80px] lg:translate-x-[120px]
      "
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/68de4d484f15cd7c9cd565f8/68e70d3c687c5b5913be04c3_About%20Hero%20Image%201.jpg')",
      }}
    />

    {/* CENTER IMAGE */}
    <div
      onMouseEnter={() => setBgImage("/images/milestone.webp")}
      onMouseLeave={() => setBgImage(null)}
      className="
        w-[200px] h-[320px]
        sm:w-[240px] sm:h-[380px]
        lg:w-[260px] lg:h-[460px]
        rounded-2xl bg-cover bg-center shadow-xl z-[6]
      "
      style={{ backgroundImage: "url('/images/milestone.webp')" }}
    />

    {/* RIGHT IMAGE */}
    <div
      onMouseEnter={() => setBgImage("/images/team-8.webp")}
      onMouseLeave={() => setBgImage(null)}
      className="
        w-[180px] h-[260px]
        sm:w-[240px] sm:h-[340px]
        lg:w-[300px] lg:h-[420px]
        rounded-2xl bg-cover bg-center
        rotate-[8deg]
        translate-x-[-40px] sm:translate-x-[-80px] lg:translate-x-[-120px]
      "
      style={{ backgroundImage: "url('/images/team-8.webp')" }}
    />
  </div>
</section>


      {/* ================= ABOUT ================= */}
    <section
  ref={aboutRef}
  className="
    w-full min-h-screen bg-white
    px-4 sm:px-6 md:px-12 lg:px-[80px]
    py-16 sm:py-20 md:py-24
    flex items-center justify-center
  "
>
  <div className="max-w-[980px] text-center">
    <h1
      className="
        text-black font-extrabold tracking-tight leading-[1]
        text-[36px] sm:text-[48px] md:text-[72px] lg:text-[96px] xl:text-[112px]
      "
    >
      <span className="block reveal-line">MIDIS CREATIVE STRATEGY</span>
      <span className="block reveal-line">REAL BUSINESS</span>
      <span className="block reveal-line">RESULTS.</span>
    </h1>

    <p
      className="
        mt-6 sm:mt-8 md:mt-10
        max-w-[720px] mx-auto
        text-[14px] sm:text-[16px] md:text-[18px]
        leading-[1.7] text-gray-700
        reveal-para
      "
    >
      At PixelReach, we don’t just create campaigns — we craft strategies
      that solve problems, spark engagement, and drive growth.
    </p>
  </div>
</section>


      {/* ================= WHAT WE DO ================= */}
   <section
  ref={whatWeDoRef}
  className="
    w-full min-h-screen bg-white overflow-hidden
    flex flex-col lg:flex-row
  "
>
  {/* ================= LEFT CONTENT ================= */}
  <div
    className="
      w-full lg:w-1/2
      flex flex-col justify-between
      px-4 sm:px-6 md:px-12 lg:px-[90px]
      py-10 sm:py-14 lg:py-[80px]
      relative
    "
  >
    {/* LIST */}
    <div className="space-y-4 sm:space-y-[18px]">
      {whatWeDoItems.map((item, index) => (
        <div
          key={index}
          className={`flex items-center gap-3 transition-all duration-500 ${
            activeIndex === index ? "opacity-100" : "opacity-40"
          }`}
        >
          {/* ACTIVE DOT */}
          <span
            className={`w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "bg-black scale-100"
                : "bg-gray-300 scale-75"
            }`}
          />

          <p
            className={`transition-all duration-500
              text-[14px] sm:text-[16px] lg:text-[17px]
              ${
                activeIndex === index
                  ? "text-black font-semibold translate-x-[6px]"
                  : "text-gray-400 font-medium"
              }
            `}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>

    {/* HEADING */}
    <h1
      className="
        mt-10 lg:mt-0
        text-black font-extrabold tracking-tight leading-[1.05]
        text-[36px] sm:text-[44px] md:text-[54px] lg:text-[68px]
        max-w-full lg:max-w-[420px]
      "
    >
      DATA-BACKED <br /> DECISIONS
    </h1>
  </div>

  {/* ================= RIGHT IMAGE ================= */}
  <div
    className="
      w-full lg:w-1/2
      relative overflow-hidden
      h-[280px] sm:h-[360px] md:h-[440px] lg:h-auto
    "
  >
    {whatWeDoItems.map((item, index) => (
      <img
        key={index}
        src={item.image}
        alt={item.label}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out
          ${
            activeIndex === index
              ? "opacity-100 scale-100"
              : "opacity-0 scale-[1.05]"
          }
        `}
      />
    ))}

    {/* DARK GRADIENT OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
  </div>
</section>


      {/* ================= WORKFLOW ================= */}
<section
  ref={workflowRef}
  className="
    w-full min-h-screen bg-[#0b0b0b] overflow-hidden relative
    flex flex-col lg:flex-row
    items-start lg:items-center
  "
>
  {/* ================= LEFT HEADING ================= */}
  <div
    className="
      w-full lg:w-auto
      static lg:absolute
      lg:left-[80px] lg:top-1/2 lg:-translate-y-1/2
      px-4 sm:px-6 md:px-12 lg:px-0
      pt-16 lg:pt-0
      z-10
      max-w-full lg:max-w-[420px]
    "
  >
    <h1
      className="
        text-white font-extrabold tracking-tight leading-[0.95]
        text-[36px] sm:text-[48px] md:text-[64px] lg:text-[110px]
      "
    >
      What <br className="hidden lg:block" /> We Do
    </h1>
  </div>

  {/* ================= CARD TRACK ================= */}
  <div
    ref={workflowTrackRef}
    className="
      w-full
      flex flex-col lg:flex-row
      gap-6 sm:gap-8 lg:gap-[60px]
      px-4 sm:px-6 md:px-12
      lg:pl-[520px] lg:pr-[120px]
      pb-16 lg:pb-0
    "
  >
    {workflowCards.map((item, index) => (
      <div
        key={index}
        className="
          workflow-card
          w-full lg:flex-shrink-0
        "
        style={{ width: "100%", maxWidth: "520px" }} // responsive + desktop safe
      >
        <div
          className="
            relative
            h-auto lg:h-[440px]
            rounded-[28px] lg:rounded-[36px]
            px-6 sm:px-8 lg:px-[48px]
            py-8 sm:py-10 lg:py-[52px]
            bg-white/95 backdrop-blur-xl
            shadow-[0_30px_90px_rgba(0,0,0,0.35)]
            lg:shadow-[0_40px_120px_rgba(0,0,0,0.35)]
            border border-black/5
            transition-all duration-500 ease-out
            hover:-translate-y-[6px]
            hover:shadow-[0_60px_160px_rgba(0,0,0,0.45)]
          "
        >
          {/* INDEX BADGE */}
          <span
            className="
              absolute top-6 right-6 lg:top-[32px] lg:right-[36px]
              text-[28px] sm:text-[36px] lg:text-[48px]
              font-extrabold text-black/5
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="relative z-10">
            <h2
              className="
                font-bold text-black tracking-tight
                text-[20px] sm:text-[24px] lg:text-[30px]
                leading-tight
              "
            >
              {item.heading}
            </h2>

            <p
              className="
                mt-4 lg:mt-[18px]
                text-[14px] sm:text-[15px] lg:text-[16px]
                leading-[1.7] lg:leading-[1.75]
                text-gray-700
              "
            >
              {item.description}
            </p>
          </div>

          <div
            className="
              pt-6 lg:pt-[28px]
              border-t border-gray-200
              mt-6 lg:mt-[32px]
            "
          >
            <p className="text-[13px] lg:text-[14px] text-gray-500">
              {item.sub}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      <Footer />
    </>
  );
};

export default Page;
