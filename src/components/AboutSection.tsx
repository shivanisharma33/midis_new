import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".reveal-line");

      gsap.set(lines, {
        y: 70,
        opacity: 0,
        filter: "blur(8px)",
        color: "#9ca3af",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=160%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      lines.forEach((line) => {
        tl.to(line, {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          color: "#0f172a",
          duration: 1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center bg-white overflow-hidden"
    >
      {/* ✨ SOFT PREMIUM BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-400/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center py-32">
        
        {/* TAGLINE */}
        <p className="reveal-line uppercase text-xs sm:text-sm tracking-[0.25em] text-gray-500 mb-6">
          Welcome to MIDIS
        </p>

        {/* SMALL DIVIDER */}
        <div className="flex justify-center mb-10">
          <span className="h-[2px] w-14 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full reveal-line" />
        </div>

        {/* HEADING */}
        <h2
          className="
            font-extrabold tracking-tight leading-[1.15]
            text-[2rem]
            sm:text-[2.8rem]
            md:text-[3.6rem]
            lg:text-[4.6rem]
            xl:text-[5.4rem]
          "
        >
          <span className="reveal-line block">
            We Deliver
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              {" "}Innovative Solutions
            </span>
          </span>

          <span className="reveal-line block">
            To Help Your Startup Thrive
          </span>

          <span className="reveal-line block">
            By Strategically Building
          </span>

          <span className="reveal-line block text-gray-600 font-medium">
            Its Presence In The Market.
          </span>
        </h2>
      </div>
    </section>
  );
};
