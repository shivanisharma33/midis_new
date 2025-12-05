import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  { src: "/images/port/22.png", alt: "Partner 1" },
  { src: "/images/port/23.png", alt: "Staberry" },
  { src: "/images/port/24.png", alt: "Partner 3" },
  { src: "/images/port/25.png", alt: "Televisio" },
  { src: "/images/port/26.png", alt: "Televisio" },
  { src: "/images/port/27.png", alt: "Televisio" },
  { src: "/images/port/28.png", alt: "Televisio" },
  { src: "/images/port/29.png", alt: "Televisio" },
  { src: "/images/port/30.png", alt: "Televisio" },
];

export const PortfolioMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".portfolio-heading", {
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Card animation
      gsap.from(".marquee-item", {
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={marqueeRef} className="py-section-sm bg-background overflow-hidden">

      {/* Heading */}
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

      {/* Marquee */}
      <div className="marquee relative overflow-hidden">
        
        {/* Loop 1 */}
        <div className="marquee-content">
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <div key={index} className="marquee-item w-[380px] h-[220px] mx-5 rounded-xl overflow-hidden shadow-md bg-black/10">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Loop 2 */}
        <div className="marquee-content" aria-hidden="true">
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <div key={index} className="marquee-item w-[380px] h-[220px] mx-5 rounded-xl overflow-hidden shadow-md bg-black/10">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center transition-all duration-500 grayscale hover:grayscale-0 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
