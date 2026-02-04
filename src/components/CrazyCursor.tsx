import { useEffect, useRef, useState } from 'react';

/**
 * Crazy Cursor Component
 * A custom white cursor with smooth animations and interactive effects
 */
export const CrazyCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update dot position immediately
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(isInteractive);
    };

    // Mouse enter/leave handlers
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    // Smooth animation for outline (following cursor)
    const animateOutline = () => {
      // Lerp (linear interpolation) for smooth following
      const speed = 0.15;
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateOutline);
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Start outline animation
    animateOutline();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Cursor Dot - Small white dot */}
      <div
        ref={cursorDotRef}
        className={`cursor-dot fixed pointer-events-none z-[9999] transition-transform duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${isPointer ? 'scale-0' : 'scale-100'}`}
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />

      {/* Cursor Outline - Large white circle that follows */}
      <div
        ref={cursorOutlineRef}
        className={`cursor-outline fixed pointer-events-none z-[9998] transition-all duration-300 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${isPointer ? 'scale-150' : 'scale-100'}`}
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />

      {/* Cursor Trail Effect */}
      <style>{`
        /* Hide default cursor on desktop */
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }

        /* Cursor animations */
        .cursor-dot {
          will-change: transform, left, top;
        }

        .cursor-outline {
          will-change: transform, left, top;
        }

        /* Add glow effect on interactive elements */
        .cursor-outline {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        /* Smooth transitions */
        .cursor-dot,
        .cursor-outline {
          transition: opacity 0.3s ease, transform 0.2s ease;
        }
      `}</style>
    </>
  );
};
