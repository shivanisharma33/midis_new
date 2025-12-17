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
   MAIN EXPORT
======================================================= */
export default function ShowcaseExcellenceSection() {
  return (
    <div className="relative w-full">
      <StackContainer />
    </div>
  );
}

/* =======================================================
   STACK CONTAINER
======================================================= */
function StackContainer() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current || !card1Ref.current || !card2Ref.current) return;

    gsap.fromTo(
      card2Ref.current,
      { y: 350, zIndex: 30 },
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
    <div
      ref={wrapperRef}
      className="relative w-full  sm:min-h-[150vh] md:min-h-[160vh]"
    >
      {/* CARD 1 */}
      <div ref={card1Ref} className="relative z-0">
        <NormalCard />
      </div>

      {/* CARD 2 */}
      <div
        ref={card2Ref}
        className="
          absolute 
          top-[120px] xs:top-[150px] sm:top-[200px]
          left-0 w-full 
          z-30 pointer-events-none
        "
      >
        <div className="bg-white w-full rounded-2xl shadow-xl">
          <StackedCardSection />
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

  const stats1 = [
    { label: "SUCCESS THROUGH OUR CLIENTS", value: 98, suffix: "%" },
    { label: "CREATIVE IDEAS DELIVERED", value: 15, suffix: "M" },
    { label: "SOCIAL MEDIA IMPRESSIONS", value: 32, suffix: "%" },
    { label: "HIGH-VALUE PROJECTS DELIVERED", value: 423, suffix: "$K" },
  ];

  useCounters(countersRef, stats1);

  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24">
      <div
        className="
          max-w-[1500px] 
          grid grid-cols-1 md:grid-cols-2 
          gap-10 sm:gap-12 lg:gap-16 
          px-4 sm:px-6 md:px-8 
          mx-auto
        "
      >
        <img
          src="/images/milestone.webp"
          className="
            w-full 
            h-auto 
            rounded-xl 
            object-cover
          "
        />

        <div className="flex flex-col justify-center space-y-10 sm:space-y-12 md:space-y-16">
          <h1
            className="
              text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] 
              font-bold leading-tight text-black
              relative z-10
            "
          >
            SHOWCASE OUR <br /> EXCELLENCE
          </h1>

          {/* GRID */}
          <div className="relative grid grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 z-0"></div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300 z-0"></div>

            {stats1.map((stat, index) => (
              <div key={index} className="relative z-10">
                <p className="text-[10px] xs:text-xs uppercase text-gray-500">
                  {stat.label}
                </p>

                <h2
                  ref={(el) => (countersRef.current[index] = el)}
                  className="
                    text-[2.5rem] xs:text-[3rem] md:text-[4rem] 
                    font-bold text-black
                  "
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
      <div
        className="
          max-w-[1500px] 
          mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          gap-10 sm:gap-12 md:gap-14 
          px-4 sm:px-6 md:px-8 
          py-8 sm:py-10 
          bg-white rounded-2xl shadow-xl
        "
      >
        <img
          src="/images/partner-3.webp"
          className="w-full h-auto rounded-xl object-cover"
        />

        <div className="flex flex-col justify-center space-y-10 sm:space-y-12 md:space-y-16">
          <h1
            className="
              text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[4rem] 
              font-bold leading-tight text-black
              relative z-10
            "
          >
            OUR CREATIVE <br /> IMPACT
          </h1>

          <div className="relative grid grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 z-0"></div>
            <div className="absolute left-1/2 top-0 h-full w-px bg-gray-300 z-0"></div>

            {stats2.map((stat, i) => (
              <div key={i} className="relative z-10">
                <p className="text-[10px] xs:text-xs uppercase text-gray-500">
                  {stat.label}
                </p>

                <h2
                  ref={(el) => (countersRef.current[i] = el)}
                  className="
                    text-[2.5rem] xs:text-[3rem] md:text-[4rem] 
                    font-bold text-black
                  "
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
