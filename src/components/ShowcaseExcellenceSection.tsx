"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =======================================================
   TYPES
======================================================= */
interface Stat {
  label: string;
  value: number;
  suffix: "%" | "M" | "$K";
}

/* =======================================================
   COUNTER HOOK
======================================================= */
function useCounters(
  countersRef: React.MutableRefObject<(HTMLElement | null)[]>,
  stats: Stat[]
) {
  useEffect(() => {
    stats.forEach((stat, i) => {
      const el = countersRef.current[i];
      if (!el) return;

      el.textContent =
        stat.suffix === "%"
          ? "0%"
          : stat.suffix === "M"
          ? "0M"
          : "$0K";

      const obj = { val: 0 };

      gsap.to(obj, {
        val: stat.value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          const v = Math.floor(obj.val);
          el.textContent =
            stat.suffix === "%"
              ? `${v}%`
              : stat.suffix === "M"
              ? `${v}M`
              : `$${v}K`;
        },
      });
    });
  }, [countersRef, stats]);
}

/* =======================================================
   MAIN EXPORT
======================================================= */
export default function ShowcaseExcellenceSection() {
  return (
    <section className="relative w-full bg-white">
      <StackSection />
    </section>
  );
}

/* =======================================================
   STACK SECTION (PINNED + SAFE)
======================================================= */
function StackSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !card2Ref.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=120%",
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });

    // Card-2 stacks upward over Card-1
    tl.fromTo(
      card2Ref.current,
      { y: "0%" },
      { y: "-100%", ease: "power3.out" },
      0.4
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen">
      {/* CARD 1 (BASE – ALWAYS VISIBLE) */}
      <div className="relative z-10">
        <NormalCard />
      </div>

      {/* CARD 2 (STARTS BELOW VIEWPORT) */}
      <div
        ref={card2Ref}
        className="
          absolute
          top-full
          left-0
          w-full
          z-30
          pointer-events-none
        "
      >
        <div className="bg-white shadow-2xl">
          <StackedCard />
        </div>
      </div>
    </div>
  );
}

/* =======================================================
   CARD 1
======================================================= */
function NormalCard() {
  const countersRef = useRef<(HTMLElement | null)[]>([]);

  const stats = [
    { label: "SUCCESS THROUGH OUR CLIENTS", value: 98, suffix: "%" },
    { label: "CREATIVE IDEAS DELIVERED", value: 15, suffix: "M" },
    { label: "SOCIAL MEDIA IMPRESSIONS", value: 32, suffix: "%" },
    { label: "HIGH-VALUE PROJECTS DELIVERED", value: 423, suffix: "$K" },
  ];

  useCounters(countersRef, stats);

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-16 px-6">
        <img
          src="/images/milestone.webp"
          alt="Milestone"
          loading="lazy"
          decoding="async"
          className="w-full object-cover"
        />

        <div className="flex flex-col justify-center space-y-14">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-bold text-black">
            SHOWCASE OUR <br /> EXCELLENCE
          </h1>

          <div className="relative grid grid-cols-2 gap-12">
            <div className="absolute top-1/2 w-full h-px bg-gray-300" />
            <div className="absolute left-1/2 h-full w-px bg-gray-300" />

            {stats.map((stat, i) => (
              <div key={i} className="relative z-10">
                <p className="text-xs uppercase text-gray-500">
                  {stat.label}
                </p>
                <h2
                  ref={(el) => (countersRef.current[i] = el)}
                  className="text-4xl font-bold text-black"
                >
                  0
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =======================================================
   CARD 2
======================================================= */
function StackedCard() {
  const countersRef = useRef<(HTMLElement | null)[]>([]);

  const stats = [
    { label: "CLIENT SATISFACTION RATE", value: 92, suffix: "%" },
    { label: "PROJECT EXECUTION POWER", value: 48, suffix: "M" },
    { label: "GLOBAL AUDIENCE REACH", value: 67, suffix: "%" },
    { label: "ANNUAL REVENUE IMPACT", value: 510, suffix: "$K" },
  ];

  useCounters(countersRef, stats);

  return (
    <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-16 px-6 ">
      <img
        src="/images/partner-3.webp"
        alt="Partner"
        loading="lazy"
        decoding="async"
        className="w-full object-cover"
      />

      <div className="flex flex-col justify-center space-y-14">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-bold text-black">
          OUR CREATIVE <br /> IMPACT
        </h1>

        <div className="relative grid grid-cols-2 gap-12">
          <div className="absolute top-1/2 w-full h-px bg-gray-300" />
          <div className="absolute left-1/2 h-full w-px bg-gray-300" />

          {stats.map((stat, i) => (
            <div key={i} className="relative z-10">
              <p className="text-xs uppercase text-gray-500">
                {stat.label}
              </p>
              <h2
                ref={(el) => (countersRef.current[i] = el)}
                className="text-4xl font-bold text-black"
              >
                0
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
