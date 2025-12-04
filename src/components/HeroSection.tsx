import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-letter', {
        y: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: 'power4.out',
        delay: 0.5,
      });

      gsap.from('.hero-info', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.2,
        ease: 'power3.out',
      });

      gsap.from('.scroll-indicator', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 1.5,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const letters = 'MIDIS'.split('');

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/banner.webp"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/60" />
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator absolute right-6 lg:right-12 bottom-32 z-10 flex flex-col items-center gap-4">
        <span className="writing-vertical text-xs tracking-widest uppercase text-foreground">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-12">
        <h1 className="font-anton text-[10rem] md:text-[16rem] lg:text-[20rem] text-foreground leading-none tracking-tight flex justify-center overflow-hidden">
          {letters.map((letter, index) => (
            <span key={index} className="hero-letter inline-block">
              {letter}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};
