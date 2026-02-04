import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
}

/**
 * Crazy Cursor Enhanced
 * Advanced custom cursor with particles, trails, and interactive effects
 */
export const CrazyCursorEnhanced = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    const canvas = canvasRef.current;

    if (!cursorDot || !cursorOutline || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let lastX = 0;
    let lastY = 0;

    // Create particles
    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;

      particlesRef.current.push({
        x,
        y,
        size: Math.random() * 3 + 1,
        life: 1,
        maxLife: Math.random() * 30 + 30,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
      });
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      lastX = mouseX;
      lastY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update dot position immediately
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      // Create particles on movement
      const distance = Math.sqrt(
        Math.pow(mouseX - lastX, 2) + Math.pow(mouseY - lastY, 2)
      );

      if (distance > 5 && particlesRef.current.length < 50) {
        createParticle(mouseX, mouseY);
      }

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

    // Click handlers
    const handleMouseDown = () => {
      setIsClicking(true);
      // Create burst of particles on click
      for (let i = 0; i < 8; i++) {
        createParticle(mouseX, mouseY);
      }
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Mouse enter/leave handlers
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth outline following
      const speed = 0.12;
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;
        particle.vx *= 0.98; // Friction
        particle.vy *= 0.98;

        // Calculate opacity
        const opacity = 1 - particle.life / particle.maxLife;

        if (opacity > 0) {
          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
          ctx.fill();

          // Draw particle glow
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 3
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.fillRect(
            particle.x - particle.size * 3,
            particle.y - particle.size * 3,
            particle.size * 6,
            particle.size * 6
          );

          return true; // Keep particle
        }

        return false; // Remove particle
      });

      requestAnimationFrame(animate);
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    animate();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        className={`cursor-dot fixed pointer-events-none z-[9999] transition-all duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${isPointer ? 'scale-0' : 'scale-100'} ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.4)',
        }}
      />

      {/* Cursor Outline with gradient border */}
      <div
        ref={cursorOutlineRef}
        className={`cursor-outline fixed pointer-events-none z-[9998] transition-all ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${isPointer ? 'scale-[2] rotate-180' : 'scale-100 rotate-0'} ${
          isClicking ? 'scale-75' : ''
        }`}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'conic-gradient(from 0deg, transparent, white, transparent)',
          padding: '2px',
          transitionDuration: isPointer ? '600ms' : '300ms',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'transparent',
            backdropFilter: 'blur(2px)',
          }}
        />
      </div>

      {/* Hide default cursor and add styles */}
      <style>{`
        /* Hide default cursor on desktop */
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }

        /* Mobile: show default cursor */
        @media (max-width: 767px) {
          .cursor-dot,
          .cursor-outline,
          canvas {
            display: none !important;
          }
        }

        /* Cursor animations */
        .cursor-dot {
          will-change: transform, left, top;
        }

        .cursor-outline {
          will-change: transform, left, top, rotate;
          animation: rotate 8s linear infinite;
        }

        @keyframes rotate {
          from {
            filter: hue-rotate(0deg);
          }
          to {
            filter: hue-rotate(360deg);
          }
        }

        /* Smooth transitions */
        .cursor-dot {
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                      opacity 0.3s ease;
        }

        .cursor-outline {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                      rotate 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                      opacity 0.3s ease;
        }
      `}</style>
    </>
  );
};
