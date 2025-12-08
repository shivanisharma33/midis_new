import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ⭐ PARALLAX BACKGROUND
      gsap.to(".about-bg", {
        y: 120,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ⭐ TEXT LEFT-REVEAL
      gsap.set(".about-heading span", {
        opacity: 0,
        x: -80,
        filter: "blur(12px)",
      });

      gsap.to(".about-heading span", {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.3,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-[180px] overflow-hidden bg-background"
    >
      {/* ⭐ PARALLAX BACKGROUND IMAGE ⭐ */}
      {/* <div
        className="about-bg absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div> */}

      {/* ⭐ DARK OVERLAY FOR THEME CONSISTENCY ⭐ */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/90"></div>

      {/* ⭐ CONTENT WRAPPER ⭐ */}
      <div className="relative container mx-auto px-6 lg:px-12 max-w-6xl">

        <h2 className="about-heading text-5xl md:text-7xl lg:text-8xl font-playfair 
                       text-foreground leading-tight font-semibold mb-12">
          <span className="block">We Help Brands Grow With</span>
          <span className="block">Creative Strategy & Digital Innovation</span>
        </h2>

        {/* ⭐ Subtext Paragraph ⭐ */}
        <p className="fade-content text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
          At Midis, we blend creativity, technology, and marketing expertise to create 
          meaningful digital experiences that help brands accelerate growth and stay 
          ahead in the evolving digital landscape.
        </p>

      </div>
    </section>
  );
};
