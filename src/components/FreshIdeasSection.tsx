import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const FreshIdeasSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fresh-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.from('.fresh-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="fresh-image space-y-4">
                <img
                  src="/images/fresh-idea-1.webp"
                  alt="Fresh Ideas"
                  className="w-full object-cover"
                />
                <img
                  src="/images/fresh-idea-2.webp"
                  alt="Fresh Ideas"
                  className="w-full object-cover"
                />
              </div>
              <div className="fresh-image pt-12">
                <img
                  src="/images/fresh-idea-3.webp"
                  alt="Fresh Ideas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="fresh-content">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-foreground tracking-widest uppercase">Be creative</span>
              <img src="/images/arrow.svg" alt="" className="w-4 h-4 invert" />
            </div>

            <h2 className="text-heading-lg font-playfair text-foreground mb-6">
              Fueling Your Growth with Fresh Ideas
            </h2>

            <p className="text-body text-text-light mb-8 max-w-md">
              We combine creativity and strategy to deliver innovative solutions, helping your business thrive and achieve sustainable growth with fresh ideas.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-8">
              <a href="tel:8881234560" className="text-sm text-foreground link-underline block w-fit">
                (888) 123 4560
              </a>
              <a href="mailto:info@example.com" className="text-sm text-foreground link-underline block w-fit">
                info@example.com
              </a>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#"
              className="btn-animated inline-flex items-center gap-4 px-8 py-4 border border-foreground text-foreground"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="btn-animated-content">
                <span>Let's Collaborate</span>
                <img src="/images/button-arrow.svg" alt="" className="w-4 h-4 invert" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
