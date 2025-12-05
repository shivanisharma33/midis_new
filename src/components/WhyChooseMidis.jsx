import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseMidis = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // ⭐ STACKED CARD SCROLL ANIMATION
    gsap.fromTo(
      cards,
      {
        y: 120,
        opacity: 0,
        rotateX: -20,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    // ⭐ PARALLAX SECTION BACKGROUND
    gsap.to(sectionRef.current, {
      backgroundPositionY: "40%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 px-6 md:px-16 bg-fixed bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-20 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Why Choose <span className="text-orange-400">Midis</span> for AI Solutions?
        </h2>
        <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
          Delivering Intelligence, Precision & Digital Excellence.
        </p>
      </div>

      {/* ⭐ STACKED CARDS with OUTER PADDING */}
      <div className="relative z-20 max-w-4xl mx-auto space-y-8 px-6 md:px-12">
        {[
          "15+ years of digital expertise with a forward-looking approach",
          "Proven track record in building scalable, AI-driven applications",
          "Custom solutions tailored to your industry and business goals",
          "Focus on delivering ROI through intelligent, data-driven strategies",
        ].map((text, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-white/10 backdrop-blur-xl border border-white/20 
              rounded-2xl p-8 text-white shadow-[0_0_40px_rgba(0,0,0,0.3)]
              hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]
              transition-all duration-300 hover:scale-[1.02]
              transform-gpu"
          >
            <p className="text-lg md:text-xl font-semibold leading-relaxed">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/20 blur-[120px]"></div>
    </section>
  );
};
