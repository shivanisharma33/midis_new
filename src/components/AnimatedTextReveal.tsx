"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  /** Delay between each word animation (in seconds) */
  fadeDelay?: number;
  /** Duration of each word's fade animation (in seconds) */
  fadeDuration?: number;
  /** Initial blur amount in pixels */
  blurAmount?: number;
  /** Scroll distance required for full reveal (as viewport height multiplier) */
  revealDistance?: number;
  /** Easing function */
  ease?: string;
}

export const AnimatedTextReveal: React.FC<AnimatedTextRevealProps> = ({
  text,
  className = "",
  as: Component = "h1",
  fadeDelay = 0.05,
  fadeDuration = 0.3,
  blurAmount = 8,
  revealDistance = 1.5,
  ease = "power2.out",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Split text into words
  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    if (!containerRef.current) return;

    const wordElements = containerRef.current.querySelectorAll(".reveal-word");

    // Set initial state - blurred and faded
    gsap.set(wordElements, {
      opacity: 0.15,
      filter: `blur(${blurAmount}px)`,
    });

    // Create scroll-triggered animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: `+=${window.innerHeight * revealDistance}`,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalWords = wordElements.length;

        wordElements.forEach((word, index) => {
          // Calculate when this word should start and end animating
          const wordStart = index / totalWords;
          const wordEnd = (index + 1) / totalWords;

          // Calculate word-specific progress
          let wordProgress = 0;
          if (progress >= wordEnd) {
            wordProgress = 1;
          } else if (progress > wordStart) {
            wordProgress = (progress - wordStart) / (wordEnd - wordStart);
          }

          // Apply eased values
          const opacity = gsap.utils.interpolate(0.15, 1, wordProgress);
          const blur = gsap.utils.interpolate(blurAmount, 0, wordProgress);

          gsap.to(word, {
            opacity,
            filter: `blur(${blur}px)`,
            duration: fadeDuration,
            ease,
            overwrite: "auto",
          });
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [words, blurAmount, fadeDuration, revealDistance, ease]);

  return (
    <div ref={containerRef} className="inline">
      <Component className={className}>
        {words.map((word, index) => (
          <span
            key={index}
            className="reveal-word inline-block"
            style={{ marginRight: "0.3em" }}
          >
            {word}
          </span>
        ))}
      </Component>
    </div>
  );
};

export default AnimatedTextReveal;
