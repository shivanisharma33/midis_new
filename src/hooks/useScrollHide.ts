import { useState, useEffect, useCallback, useRef } from 'react';
import { SCROLL_THRESHOLDS } from '@/constants/animations';

/**
 * Hook for hiding/showing elements based on scroll direction
 * @param threshold - Scroll position threshold before hiding (default: 100px)
 * @returns boolean indicating if element should be hidden
 */
export const useScrollHide = (threshold: number = SCROLL_THRESHOLDS.NAV_HIDE): boolean => {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollRef = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollRef.current && currentScroll > threshold) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    lastScrollRef.current = currentScroll;
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return isHidden;
};
