import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollPinOptions {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  anticipatePin?: number;
}

/**
 * Hook for creating pinned scroll animations
 * @param containerRef - Reference to the container element to pin
 * @param animationCallback - Function that receives the timeline and sets up animations
 * @param options - ScrollTrigger configuration options
 */
export const useScrollPin = (
  containerRef: RefObject<HTMLElement>,
  animationCallback: (tl: gsap.core.Timeline) => void,
  options: ScrollPinOptions = {}
) => {
  const {
    start = "top top",
    end = "+=100%",
    scrub = true,
    pin = true,
    anticipatePin = 1,
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end,
          scrub,
          pin,
          anticipatePin,
        },
      });

      animationCallback(tl);
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, animationCallback, start, end, scrub, pin, anticipatePin]);
};
