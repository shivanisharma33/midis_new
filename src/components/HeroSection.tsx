"use client";

import React, { useEffect, useRef, useState } from "react";

const HeroSection: React.FC = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [revealProgress, setRevealProgress] = useState(0); // 0 to 100
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isHeroInView = rect.top <= 0 && rect.bottom > window.innerHeight * 0.5;

      // If animation is complete and scrolling up back into hero, allow reverse
      if (animationComplete) {
        // Check if user is scrolling up and hero is coming back into view
        const isScrollingUp = e.deltaY < 0;
        const isAtTopOfPage = window.scrollY < 100;

        if (isScrollingUp && isAtTopOfPage && revealProgress === 100) {
          e.preventDefault();
          // Start reversing the animation
          setAnimationComplete(false);
        }
        return;
      }

      if (!isHeroInView) return;

      // Prevent page scroll during hero animation
      e.preventDefault();

      if (isAnimatingRef.current) return;

      const direction = e.deltaY > 0 ? "down" : "up";

      if (direction === "down") {
        // Scrolling down - reveal second image (right to left)
        isAnimatingRef.current = true;

        setRevealProgress(prev => {
          const newProgress = Math.min(prev + 8, 100);

          if (newProgress >= 100) {
            // Animation complete - allow normal scrolling
            setTimeout(() => {
              setAnimationComplete(true);
              isAnimatingRef.current = false;
            }, 500);
          } else {
            setTimeout(() => {
              isAnimatingRef.current = false;
            }, 50);
          }

          return newProgress;
        });
      } else if (direction === "up" && revealProgress > 0) {
        // Scrolling up - hide second image (reverse: left to right)
        isAnimatingRef.current = true;

        setRevealProgress(prev => {
          const newProgress = Math.max(prev - 8, 0);
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 50);
          return newProgress;
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [animationComplete, revealProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-neutral-900"
    >
      {/* FIRST IMAGE (Base) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner.webp')",
          }}
        />
        {/* Gradient overlay for first image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* SECOND IMAGE (Reveals from Right to Left, Hides from Left to Right with black filter) */}
      <div
        className="absolute inset-0 transition-all duration-[800ms] ease-out"
        style={{
          clipPath: `inset(0 0 0 ${100 - revealProgress}%)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/banner-about.webp')",
          }}
        />
        {/* Black filter overlay on second image */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-500"
          style={{
            opacity: revealProgress < 100 ? 0.5 : 0.3,
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 h-full flex flex-col">
        {/* CENTER HERO TEXT */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="text-center w-full mx-auto">
            <h1
              className={`
                pt-24 md:pt-40 lg:pt-44
                leading-none
                transition-all duration-[1000ms] ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                uppercase
              `}
              style={{
                fontFamily: "Anton, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(100px, 29vw, 500px)",
                letterSpacing: "-5px",
                lineHeight: 1,
                textAlign: "center",
                WebkitTextFillColor: revealProgress >= 50 ? "#ffffff" : "transparent",
                backgroundImage: revealProgress >= 50
                  ? "none"
                  : "linear-gradient(90deg, #fff, #ffffff45 72%, #fff0)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "#ffffff",
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

      {/* SCROLL INDICATOR - shows when animation not complete */}
      {!animationComplete && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-20">
          {/* <span className="text-xs uppercase tracking-widest">
            {revealProgress > 0 ? "Scroll up to reverse" : "Scroll to reveal"}
          </span> */}
          {/* <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div> */}
          {/* Progress bar */}
          <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden mt-2">
            <div
              className="h-full bg-white/80 transition-all duration-200"
              style={{ width: `${revealProgress}%` }}
            />
          </div>
        </div>
      )}

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
