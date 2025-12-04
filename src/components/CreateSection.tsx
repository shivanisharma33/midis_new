import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const CreateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.create-heading span', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-section bg-background relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Hover Image */}
      <motion.div
        className="pointer-events-none fixed z-50 w-64 h-80 overflow-hidden"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 160,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/images/hover-image.webp"
          alt="Hover"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="create-heading text-display lg:text-hero font-anton text-foreground text-center overflow-hidden">
          <span className="inline-block">Let's</span>{' '}
          <span className="inline-block">Create</span>{' '}
          <span className="inline-block">Something</span>{' '}
          <span className="inline-block">Extraordinary!</span>
        </h2>
      </div>
    </section>
  );
};
