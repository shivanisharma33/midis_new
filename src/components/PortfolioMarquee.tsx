import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  { src: '/images/partner-1.webp', alt: 'Partner 1' },
  { src: '/images/partner-2.webp', alt: 'Staberry' },
  { src: '/images/partner-3.webp', alt: 'Partner 3' },
  { src: '/images/partner-4.webp', alt: 'Televisio' },
];

export const PortfolioMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Heading animation
      gsap.from('.portfolio-heading', {
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Items animation
      gsap.from('.marquee-item', {
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={marqueeRef} className="py-section-sm bg-background overflow-hidden">

      {/* Heading Section */}
      <div className="container mx-auto px-6 lg:px-12 mb-14">
        <div className="portfolio-heading">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Our Work
          </p>
          <h2 className="text-4xl md:text-6xl font-anton text-foreground leading-tight">
            Portfolio
          </h2>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="marquee">
        <div className="marquee-content marquee-content-slow">
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <div key={index} className="marquee-item flex-shrink-0 w-80 h-96 mx-4">
              <a href="#" className="block w-full h-full image-reveal">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Duplicate for Infinite Loop */}
        <div className="marquee-content marquee-content-slow" aria-hidden="true">
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <div key={index} className="marquee-item flex-shrink-0 w-80 h-96 mx-4">
              <a href="#" className="block w-full h-full image-reveal">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
