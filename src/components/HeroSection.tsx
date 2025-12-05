import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ------------------------------
      // HERO LETTER APPEAR ON LOAD
      // ------------------------------
      gsap.from(".hero-letter", {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.06,
        ease: "power4.out",
        delay: 0.3,
      });

      gsap.from(".scroll-indicator", {
        opacity: 0,
        y: -10,
        duration: 1,
        delay: 1.2,
        ease: "power2.out",
      });

      // ---------------------------------------
      // ⭐ NETFLIX EXPAND + FADE OUT EFFECT ⭐
      // ---------------------------------------
      gsap.to(".hero-title", {
        scale: 2.2,          // expand like Netflix
        opacity: 0,         // fade out
        y: -150,            // move slightly upward
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top+=250 top",
          scrub: true,
        },
      });

      // ---------------------------------------
      // ⭐ PARAGRAPH APPEARS CENTERED ⭐
      // ---------------------------------------
      gsap.fromTo(
        ".hero-info",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top+=120 top",
            end: "top+=300 top",
            scrub: true,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const letters = "MIDIS".split("");

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-background"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/70" />
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute left-1/2 -translate-x-1/2 bottom-10 z-20 flex flex-col items-center gap-3">
        <span className="text-xs tracking-widest uppercase text-foreground">scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-foreground"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      {/* ⭐ MIDIS CENTERED ⭐ */}
      <div className="hero-title absolute inset-0 flex items-center justify-center z-20 text-center">
        <h1 className="font-anton text-[8rem] md:text-[14rem] lg:text-[18rem] text-foreground leading-none tracking-tight flex justify-center overflow-hidden">
          {letters.map((letter, index) => (
            <span key={index} className="hero-letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* ⭐ PARAGRAPH (Appears AFTER Netflix effect) ⭐ */}
      <div className="hero-info absolute inset-0 flex items-center justify-center text-center px-6 md:px-20 z-30 opacity-0">
        <p className="text-xl md:text-3xl text-foreground max-w-3xl mx-auto leading-relaxed font-light">
          We transform brands through strategy, creativity, and digital innovation—
          crafting experiences that elevate your vision.
        </p>
      </div>
    </section>
  );
};
