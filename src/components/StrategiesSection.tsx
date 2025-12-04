import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const StrategiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.strategies-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.strategies-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="strategies-content">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-foreground">32k+ Users</span>
              <img src="/images/arrow.svg" alt="" className="w-4 h-4 invert" />
            </div>

            <h2 className="text-heading-lg font-playfair text-foreground mb-6">
              Creative Strategies to Get You Growing
            </h2>

            <p className="text-body text-text-light mb-8 max-w-md">
              We deliver innovative strategies that combine creativity and expertise, driving your brand's growth and success with fresh, forward-thinking solutions.
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
                <span>let's get started</span>
                <img src="/images/button-arrow.svg" alt="" className="w-4 h-4 invert" />
              </span>
            </motion.a>
          </div>

          {/* Right - Image */}
          <div className="strategies-image">
            <div className="image-reveal overflow-hidden">
              <img
                src="/images/joker.webp"
                alt="Creative"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
