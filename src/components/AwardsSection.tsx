import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { date: 'January 23, 2025', title: 'Awards', image: '/images/award-1.webp' },
  { date: 'October 15, 2024', title: 'Best UI/UX', subtitle: 'Design', hasArrow: true, hoverImage: '/images/award-hover.webp' },
  { date: 'August 08, 2024', title: 'Development', image: '/images/award-2.webp' },
  { date: 'March 28, 2023', title: '(IBMP)Awards', image: '/images/award-3.webp' },
];

export const AwardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.awards-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.award-item', {
        scrollTrigger: {
          trigger: '.awards-list',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="awards-heading mb-12">
          <h2 className="text-heading-lg font-playfair text-foreground mb-4">
            Celebrating Excellence Through Awards
          </h2>
          <p className="text-body text-text-light max-w-2xl">
            We honor outstanding achievements and innovation, showcasing excellence through prestigious awards that inspire and celebrate creativity, dedication, and success across industries.
          </p>
        </div>

        {/* Awards List */}
        <div className="awards-list">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="award-item border-t border-border py-6 lg:py-8 flex items-center justify-between cursor-pointer group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-8 lg:gap-16">
                <span className="text-sm text-muted-foreground w-32">{award.date}</span>
                <div>
                  <h3 className="text-heading-md font-playfair text-foreground flex items-center gap-2">
                    {award.title}
                    {award.hasArrow && (
                      <img src="/images/award-arrow.svg" alt="" className="w-4 h-4 invert" />
                    )}
                  </h3>
                  {award.subtitle && (
                    <p className="text-heading-sm font-playfair text-muted-foreground italic">{award.subtitle}</p>
                  )}
                </div>
              </div>

              {/* Image */}
              {award.image && (
                <motion.div
                  className="hidden lg:block w-24 h-24 overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* Hover Image for special item */}
              {award.hoverImage && (
                <motion.div
                  className="hidden lg:block w-40 h-32 overflow-hidden absolute right-0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={award.hoverImage}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
