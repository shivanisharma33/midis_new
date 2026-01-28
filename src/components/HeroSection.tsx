"use client";

import React, { useEffect, useRef, useState } from "react";

const SCROLL_THRESHOLD = 8;

const HeroSection: React.FC = () => {
  const [imageSwapped, setImageSwapped] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const scrollCountRef = useRef(0);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const direction = e.deltaY > 0 ? "down" : "up";

      if (isAnimatingRef.current) return;

      // SCROLL DOWN
      if (direction === "down" && !imageSwapped) {
        e.preventDefault();
        isAnimatingRef.current = true;

        scrollCountRef.current += 1;
        const progress = Math.min(scrollCountRef.current / SCROLL_THRESHOLD, 1);
        setScrollProgress(progress);

        if (scrollCountRef.current >= SCROLL_THRESHOLD) {
          setImageSwapped(true);
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 1800);
        } else {
          isAnimatingRef.current = false;
        }
      }

      // SCROLL UP
      if (direction === "up" && imageSwapped) {
        e.preventDefault();
        isAnimatingRef.current = true;

        scrollCountRef.current -= 1;
        const progress = Math.max(scrollCountRef.current / SCROLL_THRESHOLD, 0);
        setScrollProgress(progress);

        if (scrollCountRef.current <= 0) {
          setImageSwapped(false);
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 1800);
        } else {
          isAnimatingRef.current = false;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [imageSwapped]);

  const zoomScale = 1 + scrollProgress * 0.2;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-neutral-900">
      {/* BACKGROUND IMAGES */}
      <div className="absolute inset-0">
        {/* IMAGE 1 */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1800ms] ease-in-out
            ${imageSwapped ? "opacity-0 scale-110" : "opacity-100"}`}
          style={{
            backgroundImage: "url('/images/banner.webp')",
            transform: `scale(${imageSwapped ? 1.2 : zoomScale})`,
          }}
        />

        {/* IMAGE 2 */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[1800ms] ease-in-out
            ${imageSwapped ? "opacity-100" : "opacity-0 scale-90"}`}
          style={{
            backgroundImage: "url('/images/banner-about.webp')",
            transform: `scale(${imageSwapped ? zoomScale : 0.9})`,
          }}
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 h-full flex flex-col">


        {/* CENTER HERO TEXT */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="text-center max-w-6xl mx-auto">
            <h1
              className={`
             pt-22 md:pt-38 lg:pt-44
                leading-none
                transition-all duration-[1500ms] ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                text-white uppercase
              `}
              style={{
                fontFamily: "Anton, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(100px, 29vw, 500px)",
                letterSpacing: "-5px",
                lineHeight: 1,
                WebkitTextFillColor: "transparent",
                backgroundImage: "linear-gradient(90deg, #fff, #ffffff45 72%, #fff0)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              MIDIS
            </h1>
            <p
              className={`
                mt-6 md:mt-8 text-base md:text-xl lg:text-2xl text-white/90 font-light tracking-wide
                transition-all duration-1000 delay-500
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              Innovative Solutions for Modern Challenges
            </p>
          </div>
        </div>


      </div>

      {/* DECORATIVE ELEMENTS */}
      <div
        className={`absolute top-1/2 left-8 w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent
          transition-all duration-1000 delay-1000
          ${mounted ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute top-1/2 right-8 w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent
          transition-all duration-1000 delay-1000
          ${mounted ? "opacity-100" : "opacity-0"}`}
      />
    </section>
  );
};

export default HeroSection;
