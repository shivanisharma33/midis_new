import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-text span', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.cta-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-8 text-center">
          join us today!
        </p>

        {/* Main CTA Text */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 mb-12">
          <span className="cta-text text-display font-anton text-foreground overflow-hidden">
            <span className="inline-block">Partner with</span>
          </span>

          <div className="cta-image relative w-32 lg:w-48 h-20 lg:h-28 overflow-hidden rounded-full">
            <img
              src="/images/cta-video.webp"
              alt="Video"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 mb-12">
          <span className="cta-text text-display font-playfair text-foreground italic overflow-hidden">
            <span className="inline-block">experienced</span>
          </span>
          <span className="cta-text text-display font-anton text-foreground overflow-hidden">
            <span className="inline-block">designer</span>
          </span>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.a
            href="#"
            className="btn-animated inline-flex items-center gap-4 px-8 py-4 border border-foreground text-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="btn-animated-content">
              <span>let's get started</span>
              <img src="/images/button-arrow.svg" alt="" className="w-4 h-4 invert" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
