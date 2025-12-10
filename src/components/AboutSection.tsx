import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const lines = gsap.utils.toArray(".reveal-line");

      lines.forEach((line: any, index: number) => {
        gsap.fromTo(
          line,
          { 
            y: 80,
            opacity: 0.1,
            filter: "blur(8px)",
            color: "#c7c7c7",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            color: "#0f0f17",   // ⭐ Dark text (same as Crearist)
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 40%",
              scrub: true,     // ⭐ smooth Apple-like reveal
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-[200px] bg-white overflow-hidden"
    >

      <div className="container mx-auto px-6 text-center">

        <p className="uppercase text-sm tracking-widest text-gray-500 mb-6">
          Welcome to midis
        </p>

        {/* ⭐ EXACT CREARIST STYLE LINES ⭐ */}
        <h2 className="text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold leading-[1.1] tracking-tight">

          <span className="reveal-line block">
            WE DELIVER INNOVATIVE
          </span>

          <span className="reveal-line block">
            SOLUTIONS TO HELP YOUR STARTUP
          </span>

          <span className="reveal-line block">
            THRIVE BY STRATEGICALLY BUILDING
          </span>

          <span className="reveal-line block">
            ITS PRESENCE IN THE MARKET.
          </span>

        </h2>

      </div>

    </section>
  );
};
