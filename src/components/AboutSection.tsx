import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="about-image relative">
            <img
              src="/images/banner-about.webp"
              alt="About MIDIS"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          {/* Content */}
          <div className="about-content">

            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">
              About MIDIS
            </p>

            <p className="text-body-lg text-text-light leading-relaxed mb-8">
              MIDIS is a performance-driven digital marketing agency that helps brands unlock growth through data-driven strategies, creative execution, and full-funnel marketing solutions.
            </p>

            <p className="text-sm text-muted-foreground mb-8">
              Trusted by clients across industries for ROI-focused marketing and measurable results.
            </p>

            <h3 className="text-heading-md font-playfair text-foreground mb-8">
              Empowering Brands With Performance, Precision & Innovation
            </h3>

            {/* Arrow Circle */}
            <a href="#Brand" className="inline-block">
              <img
                src="/images/arrow-circle.svg"
                alt="Explore"
                className="w-12 h-12 invert transition-transform hover:rotate-45 duration-300"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
