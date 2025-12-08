import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const casePoints = [
  {
    title: "Boosted Brand Visibility",
    desc: "Achieved 300% faster brand recall through data-driven creative strategy.",
  },
  {
    title: "Optimized Digital Funnels",
    desc: "Reduced user drop-off and improved conversions with funnel optimization.",
  },
  {
    title: "High-Impact Social Campaigns",
    desc: "Generated 15M+ impressions through viral execution framework.",
  },
  {
    title: "Revenue-Focused Execution",
    desc: "Delivered measurable ROI with performance-first strategy.",
  },
];

export const CaseStudySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ⭐ HEADING REVEAL ANIMATION (Crearist style)
      gsap.from(".case-heading-line", {
        opacity: 0,
        y: 80,
        rotateX: -45,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.18,
      });

      // ⭐ Reveal each point in center on scroll
      gsap.utils.toArray<HTMLElement>(".case-point").forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          y: 70,
          scale: 0.95,
          filter: "blur(6px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 45%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background text-foreground py-24 lg:py-32 overflow-hidden"
    >
      {/* ⭐ Ambient glowing background circles */}
      <div className="pointer-events-none absolute -top-20 left-0 w-[420px] h-[420px] bg-orange-500/25 blur-[130px] rounded-full opacity-50" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-500/25 blur-[150px] rounded-full opacity-50" />

      {/* ⭐ BIG HEADING WITH REVEAL */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 mb-24 lg:mb-32">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
          Case Studies
        </p>

        <h2 className="font-playfair font-semibold leading-[1.02]">
          <span className="case-heading-line block text-[44px] md:text-[72px] lg:text-[90px]">
            Stories of
          </span>

          <span className="case-heading-line block text-[44px] md:text-[72px] lg:text-[90px] text-orange-500">
            Measurable Growth.
          </span>
        </h2>
      </div>

      {/* ⭐ SLIDE-LIKE SCROLL POINTS */}
      <div className="relative z-10">
        {casePoints.map((p, i) => (
          <div
            key={i}
            className="case-point min-h-[80vh] flex items-center justify-center px-6"
          >
            <div className="max-w-3xl text-center">
              {/* Small label */}
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-px w-10 bg-border mr-3" />
                <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Case {i + 1}
                </span>
                <span className="h-px w-10 bg-border ml-3" />
              </div>

              {/* Title */}
              <h3 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold mb-4">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
