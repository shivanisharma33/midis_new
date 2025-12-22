import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const letters = "MIDIS".split("");

  useEffect(() => {
    if (!heroRef.current) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      /* ===============================
         INITIAL STATES (CRITICAL FIX)
      =============================== */
      gsap.set(".hero-bg-1 video", { opacity: 1, scale: 1 });
      gsap.set(".hero-bg-2", { opacity: 0, scale: 1.05 });
      gsap.set(".hero-content", {
        opacity: 0,
        y: 80,
        filter: "blur(12px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: isMobile ? "+=110%" : "+=350%",
          pin: true,
          scrub: isMobile ? 0.25 : 1.5,
          anticipatePin: 1,
        },
      });

      /* MIDIS EXIT */
      tl.to(".hero-title span", {
        y: -120,
        opacity: 0,
        scale: 1.4,
        stagger: isMobile ? 0.04 : 0.06,
        duration: isMobile ? 0.9 : 1.6,
        ease: "power3.out",
      });

      /* VIDEO FADE */
      tl.to(
        ".hero-bg-1 video",
        {
          scale: 1.12,
          y: -40,
          opacity: 0,
          duration: isMobile ? 0.8 : 1.4,
          ease: "power2.out",
        },
        "-=0.3"
      );

      tl.to(
        ".hero-bg-2",
        {
          opacity: 1,
          scale: 1,
          duration: isMobile ? 0.9 : 1.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      /* FINAL CONTENT */
      tl.to(
        ".hero-content",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: isMobile ? 0.9 : 1.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* TRANSPARENT OVERLAY (FIXED) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-transparent" />

      {/* BG VIDEO */}
      <div className="hero-bg-1 absolute inset-0 z-0">
        <video
          src="/images/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/video-poster.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* BG IMAGE 2 */}
      <div className="hero-bg-2 absolute inset-0 z-0">
        <img
          src="/images/MIDIS.jpg"
          alt="MIDIS"
          className="w-full h-full object-cover"
        />
      </div>

      {/* MIDIS TEXT */}
      <div className="hero-title absolute inset-0 flex items-center justify-center z-20">
        <h1 className="font-anton text-[6rem] sm:text-[8rem] md:text-[14rem] lg:text-[18rem] text-white flex">
          {letters.map((l, i) => (
            <span key={i} className="inline-block">
              {l}
            </span>
          ))}
        </h1>
      </div>

      {/* FINAL CONTENT */}
      <div className="hero-content absolute inset-0 flex items-center justify-center z-40">
        <div className="text-center max-w-3xl mx-auto text-white px-6">
          <h2 className="text-3xl md:text-6xl font-semibold mb-6">
            Powerful Digital Solutions for Future-Ready Brands
          </h2>

          <p className="text-base md:text-2xl text-gray-300 mb-10">
            Websites, apps, branding & marketing — everything your business needs
            to scale.
          </p>
        </div>
      </div>
    </section>
  );
};
