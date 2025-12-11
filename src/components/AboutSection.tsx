import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".reveal-line");

      lines.forEach((line: any) => {
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
            color: "#0f0f17",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              end: "top 50%",
              scrub: true,
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
      className="
        relative 
        py-[120px] 
        sm:py-[150px] 
        md:py-[180px] 
        lg:py-[200px] 
        bg-white 
        overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-500 mb-4 sm:mb-6">
          Welcome to midis
        </p>

        <h2
          className="
            font-bold tracking-tight leading-[1.15]
            text-[2rem]       
            sm:text-[2.5rem] 
            md:text-[3.5rem] 
            lg:text-[5rem]   
            xl:text-[6rem]
          "
        >
          <span className="reveal-line block">WE DELIVER INNOVATIVE</span>
          <span className="reveal-line block">SOLUTIONS TO HELP YOUR STARTUP</span>
          <span className="reveal-line block">THRIVE BY STRATEGICALLY BUILDING</span>
          <span className="reveal-line block">ITS PRESENCE IN THE MARKET.</span>
        </h2>

      </div>
    </section>
  );
};
