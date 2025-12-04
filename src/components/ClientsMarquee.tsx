import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  '/images/client-1.svg',
  '/images/client-2.svg',
  '/images/client-3.svg',
  '/images/client-4.svg',
];

export const ClientsMarquee = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.clients-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <h2 className="clients-heading text-heading-md font-playfair text-foreground text-center">
          Collaborating for Excellence Together We <span className="text-red-500">❤️</span> Make a Difference
        </h2>
      </div>

      {/* First Row */}
      <div className="marquee mb-8">
        <div className="marquee-content">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="flex-shrink-0 mx-12 opacity-50 hover:opacity-100 transition-opacity">
              <img src={client} alt="Client" className="h-8 w-auto invert" />
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="flex-shrink-0 mx-12 opacity-50 hover:opacity-100 transition-opacity">
              <img src={client} alt="Client" className="h-8 w-auto invert" />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Reverse */}
      <div className="marquee">
        <div className="marquee-content marquee-content-reverse">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="flex-shrink-0 mx-12 opacity-50 hover:opacity-100 transition-opacity">
              <img src={client} alt="Client" className="h-8 w-auto invert" />
            </div>
          ))}
        </div>
        <div className="marquee-content marquee-content-reverse" aria-hidden="true">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="flex-shrink-0 mx-12 opacity-50 hover:opacity-100 transition-opacity">
              <img src={client} alt="Client" className="h-8 w-auto invert" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
