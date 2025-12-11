import React, { useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from '@/components/Footer';
gsap.registerPlugin(ScrollTrigger);

export default function Services2() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const zoomImgRef = useRef<HTMLImageElement | null>(null);
  const trustedRef = useRef<HTMLDivElement | null>(null);

  /* ============================================================
      MAIN TEXT REVEAL ANIMATION
  ============================================================ */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".reveal-line");

      gsap.set(lines, { opacity: 0, y: 70, filter: "blur(15px)" });

      lines.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      ScrollTrigger.refresh();
    }, headingRef);

    return () => ctx.revert();
  }, []);

  /* ============================================================
      TRUSTED SECTION — TEXT REVEAL ANIMATION
  ============================================================ */
useEffect(() => {
  if (!trustedRef.current) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trustedRef.current,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  // LEFT HEADING SLIDE-IN FROM LEFT
  tl.fromTo(
    ".trusted-line",
    {
      opacity: 0,
      x: -150,      // 🔥 come from LEFT
      filter: "blur(10px)",
    },
    {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1.3,
      ease: "power3.out",
      stagger: 0.25,
    }
  );

  // RIGHT AVATAR AREA
  tl.to(
    ".trusted-right",
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "power3.out",
    },
    "-=0.6"
  );

  return () => ScrollTrigger.getAll().forEach((st) => st.kill());
}, []);


  /* ============================================================
      FULL SCREEN IMAGE ZOOM ON SCROLL
  ============================================================ */
  useEffect(() => {
    if (!zoomImgRef.current) return;

    const img = zoomImgRef.current;

    gsap.fromTo(
      img,
      {
        scale: 0.4,
        opacity: 0.6,
        transformOrigin: "center center",
      },
      {
        scale: 3.2,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top center",
          end: "+=300%",
          scrub: 1.5,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Navigation />

      <main className="w-full min-h-screen bg-[#0C0E12] text-white flex flex-col items-center relative overflow-hidden">

        {/* ===================== HEADING WRAPPER ===================== */}
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-24 pt-40 pb-24">
          <div ref={headingRef} className="space-y-6 leading-[0.88] font-extrabold">

            <h1 className="reveal-line text-[3.5rem] md:text-[6.5rem] lg:text-[10rem] tracking-tight">
              EXPERIENCE
            </h1>

            <h1 className="reveal-line flex items-center gap-8 text-[3.5rem] md:text-[6.5rem] lg:text-[10rem] tracking-tight">
              CREATIVE
              <svg width="110" height="110" viewBox="0 0 70 70" fill="none" className="mt-4">
                <path
                  d="M5 35L65 5L45 65L35 40L5 35Z"
                  stroke="white"
                  strokeWidth="5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </h1>

            <h1 className="reveal-line text-[3.5rem] md:text-[6.5rem] lg:text-[10rem] tracking-tight">
              EXCELLENCE
            </h1>
          </div>
        </div>

        {/* ===================== FULL SCREEN IMAGE ZOOM ===================== */}
        <section className="w-full h-screen flex justify-center items-center overflow-hidden">
          <img
            ref={zoomImgRef}
            src="/images/reason-4.webp"
            alt="Zoom Visual"
            className="w-[260px] md:w-[520px] lg:w-[1500px] object-cover rounded-xl"
          />
        </section>

        {/* ===================== CONTACT AREA ===================== */}
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-24 pb-24 mt-10">
          <div className="mt-24 flex flex-col md:flex-row items-start md:items-center gap-12">
            <div className="text-xs tracking-widest uppercase text-gray-400">
              GET HELP <br /> TODAY!
            </div>
            <div className="h-px w-24 bg-gray-600"></div>
            <div className="space-y-2">
              <p className="font-semibold tracking-wide">INFO@EXAMPLE.COM</p>
              <p className="text-gray-400">(888) 123 4560</p>
            </div>
          </div>
        </div>

        {/* ===================== OUR SERVICES MARQUEE ===================== */}
        <section className="relative w-full overflow-hidden bg-white py-48 select-none">
          <div className="flex whitespace-nowrap animate-marquee">
            {["OUR SERVICES", "OUR SERVICES", "OUR SERVICES"].map((text, i) => (
              <span
                key={i}
                className="text-[8rem] md:text-[12rem] lg:text-[17rem] font-extrabold tracking-tight text-[#999] mr-20"
              >
                {text}
              </span>
            ))}
          </div>
        </section>

        {/* ===================== ABOUT SECTION ===================== */}
        <section className="w-full bg-white text-black py-20 px-6 md:px-16 lg:px-28">
          <p className="text-sm font-semibold tracking-wide text-gray-700">OUR STORY AND VISION</p>

          <hr className="my-4 border-gray-300" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-10">
            <div>
              <img
                src="https://cdn.prod.website-files.com/67a1ba0a889270647730e779/680797d32cd6bcfdfdefeae2_Service%20One%20Image-p-500.webp"
                className="w-full h-[620px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                WE GROW STARTUPS <br /> AND SHAPE BRANDS <br /> WITH PRECISION
              </h1>

              <p className="text-gray-600 mt-6 text-lg max-w-[550px]">
                We are a passionate creative agency with over 15 years of experience in branding, digital marketing, and storytelling.
              </p>

              <div className="mt-10 space-y-6">
                <p className="text-lg font-semibold border-b pb-3 border-gray-300">15 YEARS OF WORK EXPERIENCE</p>
                <p className="text-lg font-semibold border-b pb-3 border-gray-300">PROFESSIONAL DESIGNER AND DEVELOPER</p>
                <p className="text-lg font-semibold border-b pb-3 border-gray-300">TIMELY PROJECT DELIVERY SERVICE</p>
              </div>

              <button className="mt-12 bg-black text-white px-10 py-4 rounded-full flex items-center gap-2 hover:bg-gray-900 transition">
                CONTACT WITH AN EXPERT <span className="text-lg">↗</span>
              </button>
            </div>
          </div>
        </section>

        {/* ===================== TRUSTED SECTION (NEW) ===================== */}
        <section
          ref={trustedRef}
          className="w-full bg-[#F4F4F4] py-28 px-6 md:px-16 lg:px-28 text-black"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT HEADING */}
      <div>
  <h1 className="trusted-line text-[3rem] md:text-[5rem] lg:text-[6rem] font-extrabold leading-[1.05] text-[#111]">
    TRUSTED BY CLIENTS FOR
  </h1>

  <h1 className="trusted-line text-[3rem] md:text-[5rem] lg:text-[6rem] font-extrabold leading-[1.05] text-[#9A9AA0]">
    OUR OUTSTANDING SERVICE
  </h1>
</div>


            {/* RIGHT SIDE CLIENT COUNT */}
            <div className="trusted-right opacity-0 translate-y-10">
              <div className="flex items-center space-x-3 mb-2">
                <img src="https://i.pravatar.cc/100?img=32" className="w-12 h-12 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/100?img=12" className="w-12 h-12 rounded-full border-2 border-white -ml-3" />
                <img src="https://i.pravatar.cc/100?img=48" className="w-12 h-12 rounded-full border-2 border-white -ml-3" />
              </div>

              <p className="text-gray-700 font-semibold text-lg">
                MORE THAN 25K <br /> HAPPY CLIENTS
              </p>
            </div>

          </div>
        </section>

        {/* ===================== SERVICES SECTION ===================== */}
        <ServicesSection />
<Footer />
      </main>

      {/* ===================== MARQUEE KEYFRAMES ===================== */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </>
  );
}
