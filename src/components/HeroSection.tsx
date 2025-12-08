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
      // LETTER APPEAR
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

      // ------------------------------
      // PIN HERO SECTION
      // ------------------------------
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=180%",
        pin: true,
        scrub: true,
      });

      // ------------------------------
      // MIDIS → FADE OUT & SCALE OUT
      // ------------------------------
      gsap.to(".hero-title", {
        scale: 1.8,
        opacity: 0,
        y: -50,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "top+=45%",
          scrub: true,
        },
      });

      // ------------------------------
      // PARAGRAPH FADE IN EXACT POSITION OF MIDIS
      // ------------------------------
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top+=25% top",
            end: "top+=70% top",
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
      {/* BACKGROUND IMAGE */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
  <img
    src="/images/hero.png"
    alt="Banner"
    className="w-full h-full object-cover object-[50%_30%]"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/70" />
</div>



      {/* SCROLL INDICATOR */}
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

      {/* MIDIS LETTERS */}
      <div className="hero-title absolute inset-0 flex items-center justify-center z-20 text-center">
        <h1 className="font-anton text-[8rem] md:text-[14rem] lg:text-[18rem] text-foreground leading-none tracking-tight flex justify-center overflow-hidden">
          {letters.map((letter, index) => (
            <span key={index} className="hero-letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* SECOND SLIDE CONTENT – APPEARS EXACTLY WHERE MIDIS WAS */}
      <div className="hero-content absolute inset-0 flex items-center justify-center text-center px-6 md:px-20 z-30 opacity-0 pointer-events-none">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Midis.in – Your Trusted Partner for Custom Digital Solutions & Branding Growth
          </h2>

          <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed mb-10">
            From bold brand identities to powerful web apps & marketing strategies —
            we help startups, SMEs & enterprises build, grow, and stand out online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl text-lg font-medium hover:bg-orange-600 transition">
              Get Your Free Consultation
            </button>

            <button className="px-8 py-4 border border-foreground/30 text-foreground rounded-xl text-lg font-medium hover:bg-foreground/10 transition">
              See Our Work
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
