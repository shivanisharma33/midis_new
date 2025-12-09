import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =======================================================
   COUNTER HOOK
======================================================= */
function useCounters(
  countersRef: React.MutableRefObject<(HTMLElement | null)[]>,
  stats: any[]
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
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
          duration: 1.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            const v = Math.floor(obj.val);
            if (stat.suffix === "%") el.textContent = `${v}%`;
            else if (stat.suffix === "M") el.textContent = `${v}M`;
            else el.textContent = `$${v}K`;
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}

/* =======================================================
   MAIN EXPORT — STACKING CONTAINER
======================================================= */
export default function ShowcaseExcellenceSection() {
  return (
    <div className="relative w-full">
      <StackContainer />
    </div>
  );
}

/* =======================================================
   STACK CONTAINER — Handles Overlay + Animation
======================================================= */
function StackContainer() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !card1Ref.current || !card2Ref.current) return;

    // CLEAN STACKED OVERLAY ANIMATION
    gsap.fromTo(
      card2Ref.current,
      { y: 350, zIndex: 30 }, // Card 2 starts lower but FULLY OPAQUE
      {
        y: -20,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full min-h-[150vh]">

      {/* CARD 1 */}
      <div ref={card1Ref} className="relative z-0">
        <NormalCard />
      </div>

      {/* CARD 2 — FULLY VISIBLE, OPAQUE, CLEAN OVERLAY */}
      <div
        ref={card2Ref}
        className="absolute top-[200px] left-0 w-full z-30 pointer-events-none"
      >
        <div className="bg-white w-full rounded-2xl shadow-xl">
          <StackedCardSection />
        </div>
      </div>
    </div>
  );
}

/* =======================================================
   CARD 1 — Normal Section
======================================================= */
function NormalCard() {
  const countersRef = useRef<(HTMLElement | null)[]>([]);

  const stats1 = [
    { label: "SUCCESS THROUGH OUR CLIENTS", value: 98, suffix: "%" },
    { label: "CREATIVE IDEAS DELIVERED", value: 15, suffix: "M" },
    { label: "SOCIAL MEDIA IMPRESSIONS", value: 32, suffix: "%" },
    { label: "HIGH-VALUE PROJECTS DELIVERED", value: 423, suffix: "$K" },
  ];

  useCounters(countersRef, stats1);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-[1500px] grid grid-cols-1 md:grid-cols-2 gap-14 px-8 mx-auto">

        <img src="/images/milestone.webp" className="w-full h-full rounded-xl" />

        <div className="flex flex-col justify-center space-y-16">
          <h1 className="text-[3rem] md:text-[4rem] font-bold leading-tight">
            SHOWCASE OUR <br /> EXCELLENCE
          </h1>

          {/* GRID */}
          <div className="relative grid grid-cols-2 gap-12">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300"></div>

            {stats1.map((stat, index) => (
              <div key={index}>
                <p className="text-xs uppercase text-gray-500">{stat.label}</p>
                <h2
                  ref={(el) => (countersRef.current[index] = el)}
                  className="text-[3rem] md:text-[4rem] font-bold text-black"
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
   CARD 2 — Stacked Fully Opaque Overlay Section
======================================================= */
function StackedCardSection() {
  const countersRef = useRef<(HTMLElement | null)[]>([]);

  const stats2 = [
    { label: "CLIENT SATISFACTION RATE", value: 92, suffix: "%" },
    { label: "PROJECT EXECUTION POWER", value: 48, suffix: "M" },
    { label: "GLOBAL AUDIENCE REACH", value: 67, suffix: "%" },
    { label: "ANNUAL REVENUE IMPACT", value: 510, suffix: "$K" },
  ];

  useCounters(countersRef, stats2);

  return (
    <section className="w-full">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 px-8 p-10 bg-white rounded-2xl shadow-xl">

        <img src="/images/partner-3.webp" className="w-full h-full rounded-xl" />

        <div className="flex flex-col justify-center space-y-16">
          <h1 className="text-[3rem] md:text-[4rem] font-bold leading-tight">
            OUR CREATIVE <br /> IMPACT
          </h1>

          {/* GRID */}
          <div className="relative grid grid-cols-2 gap-12">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300"></div>

            {stats2.map((stat, i) => (
              <div key={i}>
                <p className="text-xs uppercase text-gray-500">{stat.label}</p>
                <h2
                  ref={(el) => (countersRef.current[i] = el)}
                  className="text-[3rem] md:text-[4rem] font-bold text-black"
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
