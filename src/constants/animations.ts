/**
 * Animation constants for consistent timing and easing across the app
 */

export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  MEDIUM: 0.8,
  SLOW: 1.2,
  REVEAL: 1.0,
  COUNTER: 1.6,
  FADE_IN: 1.3,
} as const;

export const ANIMATION_EASINGS = {
  DEFAULT: "power3.out",
  SMOOTH: "power2.out",
  ELASTIC: "elastic.out",
  NONE: "none",
} as const;

export const SCROLL_TRIGGERS = {
  START: "top 85%",
  CENTER: "top 50%",
  TOP: "top top",
  BOTTOM: "bottom bottom",
} as const;

export const HERO_REVEAL = {
  INCREMENT: 8,
  COMPLETE_DELAY: 500,
  ANIMATION_DELAY: 50,
} as const;

export const SCROLL_THRESHOLDS = {
  NAV_HIDE: 100,
  REVEAL_OFFSET: 70,
} as const;

export const STAGGER_DELAYS = {
  FAST: 0.1,
  MEDIUM: 0.2,
  SLOW: 0.3,
} as const;
