import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // TOTAL SCENE TIMELINE (Apple style)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=300%",           // ⭐ 3 scenes
          pin: true,               // ⭐ page freeze
          scrub: 1,                // ⭐ scroll-synced
        }
      });

      // ------------------------------
      // SCENE 1 → MIDIS appear
      // ------------------------------

      tl.from(".hero-letter", {
        opacity: 0,
        y: 150,
        stagger: 0.07,
        duration: 1.2,
        ease: "power4.out"
      });

      tl.to(".hero-title", {
        scale: 1.5,
        opacity: 0,
        y: -80,
        duration: 1.2,
        ease: "power3.out"
      });

      // ------------------------------
      // SCENE 2 → IMAGE TRANSITION
      // ------------------------------

      tl.to(".hero-bg-1", {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });

      tl.fromTo(".hero-bg-2",
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: "power2.out"
        }
      );

      // ------------------------------
      // SCENE 3 → CONTENT FADE IN
      // ------------------------------

      tl.from(".hero-content", {
        opacity: 0,
        y: 80,
        duration: 1.4,
        ease: "power3.out"
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const letters = "MIDIS".split("");

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black"
    >

      {/* BG IMAGE 1 */}
      <div className="hero-bg-1 absolute inset-0">
        <img src="/images/h3.jpg" className="w-full h-full object-cover" />
      </div>

      {/* BG IMAGE 2 */}
      <div className="hero-bg-2 absolute inset-0 opacity-0">
        <img src="/images/h2.jpg" className="w-full h-full object-cover" />
      </div>

      {/* MIDIS LETTERS */}
      <div className="hero-title absolute inset-0 flex items-center justify-center z-20">
        <h1 className="font-anton text-[8rem] md:text-[14rem] lg:text-[18rem] text-white flex">
          {letters.map((letter, i) => (
            <span key={i} className="hero-letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="hero-content absolute inset-0 flex items-center justify-center opacity-0 z-30">
        <div className="text-center max-w-3xl mx-auto text-white px-10">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Powerful Digital Solutions for Future-Ready Brands
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Websites, apps, branding & marketing — everything your business needs to scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl text-lg">
              Get Consultation
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-xl text-lg">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
