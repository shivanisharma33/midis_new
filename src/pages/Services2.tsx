import React, { useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services2() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const zoomImgRef = useRef<HTMLImageElement | null>(null);

  /* ============================================================
     TEXT REVEAL ANIMATION
  ============================================================ */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".reveal-line");

      if (!lines || lines.length === 0) return;

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

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  /* ============================================================
     FULL SCREEN IMAGE ZOOM ON SCROLL (PIN)
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
          anticipatePin: 1,
        },
      }
    );
  }, []);

  return (
    <>
      <Navigation />

      {/* ===================== MAIN SECTION ===================== */}
      <main className="w-full min-h-screen bg-[#0C0E12] text-white flex flex-col items-center relative overflow-hidden">

        {/* ===================== HEADING WRAPPER ===================== */}
        <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-24 pt-40 pb-24">
          <div ref={headingRef} className="space-y-6 leading-[0.88] font-extrabold">

            <h1 className="reveal-line text-[3.5rem] md:text-[6.5rem] lg:text-[10rem] tracking-tight">
              EXPERIENCE
            </h1>

            <h1 className="reveal-line flex items-center gap-8 text-[3.5rem] md:text-[6.5rem] lg:text-[10rem] tracking-tight">
              CREATIVE

              <svg
                width="110"
                height="110"
                viewBox="0 0 70 70"
                fill="none"
                className="mt-4 reveal-line"
              >
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
        <section className="w-full h-screen bg-[#0C0E12] flex justify-center items-center overflow-hidden">
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
              <p className="font-semibold text-white tracking-wide text-sm md:text-base">
                INFO@EXAMPLE.COM
              </p>
              <p className="text-gray-400 text-sm md:text-base">
                (888) 123 4560
              </p>
            </div>

          </div>
          
        </div>
  {/* ============================================================
             OUR SERVICES MARQUEE (ADDED)
        ============================================================ */}
        <section className="relative w-full overflow-hidden bg-white py-16 select-none">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-[8rem] md:text-[12rem] lg:text-[17rem] font-extrabold tracking-tight text-[#999] mr-20">
              OUR SERVICES
            </span>
            <span className="text-[8rem] md:text-[12rem] lg:text-[17rem] font-extrabold tracking-tight text-[#999] mr-20">
              OUR SERVICES
            </span>
            <span className="text-[8rem] md:text-[12rem] lg:text-[17rem] font-extrabold tracking-tight text-[#999] mr-20">
              OUR SERVICES
            </span>
          </div>
        </section>
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
