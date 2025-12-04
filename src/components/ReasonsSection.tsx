import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { number: '01.', title: 'Expertise & Specialization', image: '/images/reason-1.webp' },
  { number: '02.', title: '24/7 customer support', image: '/images/reason-2.webp' },
  { number: '03.', title: 'Cost-Effective Solutions', image: '/images/reason-3.webp' },
  { number: '04.', title: 'Expertise & Specialization', image: '/images/reason-4.webp' },
];

export const ReasonsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reasons-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.reason-item', {
        scrollTrigger: {
          trigger: '.reasons-list',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Images */}
          <div className="relative">
            <img
              src="/images/astronaut.webp"
              alt="Astronaut"
              className="w-full max-w-md"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="reasons-heading text-heading-lg font-playfair text-foreground mb-12">
              Here are a few reasons why you'll love us
            </h2>

            <div className="reasons-list space-y-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="reason-item group flex items-center justify-between py-4 border-b border-border cursor-pointer"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-muted-foreground">{reason.number}</span>
                    <h3 className="text-heading-sm font-playfair text-foreground group-hover:text-muted-foreground transition-colors">
                      {reason.title}
                    </h3>
                  </div>
                  <div className="w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
