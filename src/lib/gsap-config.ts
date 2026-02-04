/**
 * Global GSAP configuration
 * Import this file instead of importing gsap directly to ensure plugins are registered
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_DURATIONS, ANIMATION_EASINGS } from "@/constants/animations";

// Register plugins once globally
gsap.registerPlugin(ScrollTrigger);

// Set default configuration for all GSAP animations
gsap.defaults({
  duration: ANIMATION_DURATIONS.MEDIUM,
  ease: ANIMATION_EASINGS.DEFAULT,
});

// Export configured gsap and plugins
export { gsap, ScrollTrigger };
export default gsap;
