import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ANIMATION_DURATIONS, ANIMATION_EASINGS, SCROLL_TRIGGERS } from '@/constants/animations';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  yOffset?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  opacity?: number;
}

/**
 * Hook for scroll-triggered reveal animations
 * @param containerRef - Reference to the container element
 * @param selector - CSS selector for elements to animate
 * @param options - Animation configuration options
 */
export const useScrollReveal = (
  containerRef: RefObject<HTMLElement>,
  selector: string,
  options: ScrollRevealOptions = {}
) => {
  const {
    yOffset = 70,
    duration = ANIMATION_DURATIONS.MEDIUM,
    stagger = 0.1,
    start = SCROLL_TRIGGERS.START,
    opacity = 0,
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(selector, {
        opacity,
        y: yOffset,
        duration,
        ease: ANIMATION_EASINGS.DEFAULT,
        scrollTrigger: {
          trigger: selector,
          start,
        },
        stagger,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, selector, yOffset, duration, stagger, start, opacity]);
};
