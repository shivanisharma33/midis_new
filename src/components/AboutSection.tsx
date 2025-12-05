import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ⭐ LEFT REVEAL ANIMATION (GSAP TEXT STYLE)
      gsap.set(".about-heading span", { 
        opacity: 0,
        x: -80,              // ← move from LEFT
        filter: "blur(12px)" // extra drama
      });

      gsap.to(".about-heading span", {
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        x: 0,                // → slide into place
        filter: "blur(0px)",
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.18,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[150px] bg-background">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

        {/* ⭐ Heading with Left Reveal Animation ⭐ */}
        <h2 className="about-heading text-5xl md:text-7xl lg:text-8xl font-playfair 
                       text-foreground leading-tight font-semibold mb-12">
          <span className="block">We Help Brands Grow With</span>
          <span className="block">Creative Strategy & Digital Innovation</span>
        </h2>

      </div>
    </section>
  );
};
