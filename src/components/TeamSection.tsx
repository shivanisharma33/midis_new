import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: 'Ethan Brooks', role: 'Visual Storyteller', image: '/images/team-1.webp' },
  { name: 'Riley Knox', role: 'Technical Director', image: '/images/team-2.webp' },
  { name: 'Joseph Carroll', role: 'Front-End Developer', image: '/images/team-3.webp' },
  { name: 'Rhonda Sparks', role: 'Marketing Strategist', image: '/images/team-4.webp' },
  { name: 'Sebastian Thorne', role: 'Brand Designer', image: '/images/team-5.webp' },
  { name: 'Robert Makin', role: 'Creative Director', image: '/images/team-6.webp' },
  { name: 'Leigh Gordon', role: 'Graphic Designer', image: '/images/team-7.webp' },
  { name: 'Lillie Weber', role: 'Designer', image: '/images/team-8.webp' },
];

export const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-heading span', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">meet our</p>
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="team-heading text-display font-anton text-foreground overflow-hidden">
            <span className="inline-block">dedi</span>
            <span className="inline-block">cated</span>
          </h2>
          <span className="text-heading-md font-playfair text-foreground italic">expertise</span>
          <img src="/images/team-arrow.svg" alt="" className="w-8 h-8 invert" />
          <span className="text-heading-md font-playfair text-foreground italic">members</span>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="horizontal-scroll flex gap-6 overflow-x-auto px-6 lg:px-12 pb-8"
      >
        {teamMembers.map((member, index) => (
          <a
            key={index}
            href="#"
            className="group flex-shrink-0 w-72"
          >
            <div className="relative overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              {/* Marquee Name */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent py-4 overflow-hidden">
                <div className="marquee">
                  <div className="marquee-content marquee-content-fast">
                    {[...Array(6)].map((_, i) => (
                      <span key={i} className="text-sm text-foreground mx-4">
                        {member.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">{member.role}</p>
            <h3 className="text-lg font-playfair text-foreground">{member.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};
