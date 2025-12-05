import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Ethan Brooks", role: "Visual Storyteller", image: "/images/team-1.webp" },
  { name: "Riley Knox", role: "Technical Director", image: "/images/team-2.webp" },
  { name: "Joseph Carroll", role: "Front-End Developer", image: "/images/team-3.webp" },
  { name: "Rhonda Sparks", role: "Marketing Strategist", image: "/images/team-4.webp" },
  { name: "Sebastian Thorne", role: "Brand Designer", image: "/images/team-5.webp" },
  { name: "Robert Makin", role: "Creative Director", image: "/images/team-6.webp" },
  { name: "Leigh Gordon", role: "Graphic Designer", image: "/images/team-7.webp" },
  { name: "Lillie Weber", role: "Designer", image: "/images/team-8.webp" },
];

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      const scroller = scrollerRef.current;

      if (!section || !heading || !scroller) return;

      // Grab the heading lines
      const lines = Array.from(heading.querySelectorAll(".line")) as HTMLElement[];

      // Make sure scroller wrapper has natural width (we animate xPercent of the scroller)
      // Container width (visible area)
      const containerWidth = section.clientWidth;

      // Full width of scroller content
      const scrollWidth = scroller.scrollWidth;

      // If content fits without scrolling, we still want a small move (or none)
      const maxScrollable = Math.max(0, scrollWidth - containerWidth);

      // compute percent of how much to move the scroller (xPercent value)
      // when scrollWidth >> containerWidth, movePercent approaches 100 * (maxScrollable/scrollWidth)
      const movePercent = scrollWidth > 0 ? (maxScrollable / scrollWidth) * 100 : 0;

      // Reset styles
      gsap.set(heading, { clearProps: "all" });
      gsap.set(lines, { y: 40, opacity: 0 });
      gsap.set(scroller, { xPercent: 0 });

      // Create a master timeline pinned to the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(1200, 800 + maxScrollable)}`, // adaptive pin length
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 1) reveal lines one by one
      tl.to(lines, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      }, 0);

      // 2) hold a bit then push heading up & fade out (so carousel becomes main focus)
      tl.to(heading, {
        y: -160,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
      }, 0.8); // starts slightly after reveal begins

      // 3) horizontal slide of the scroller content (only runs if movePercent > 0)
      if (movePercent > 0) {
        tl.to(scroller, {
          xPercent: -movePercent,
          ease: "none",
        }, 1.2);
      }

      // subtle reveal for individual cards as they come into view (non-scrubbed)
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: section,
          start: "top+=260 top",
          toggleActions: "play none none reverse",
        },
        y: 20,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: "power3.out",
      });

      // cleanup on unmount
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(s => s.kill());
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background text-foreground">
      {/* FIRST SCREEN: big centered heading */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1
            ref={headingRef}
            className="team-heading font-anton leading-[0.95] tracking-tight text-[6.5rem] md:text-[8.5rem] lg:text-[10rem]"
            style={{ margin: 0 }}
          >
            <span className="line block">MEET OUR</span>
            <span className="line block">DEDICATED</span>
            <span className="line block">MEMBERS</span>
          </h1>
        </div>
      </div>

      {/* SECOND PART: title row + horizontal scroller */}
      <div className="bg-background pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">meet our</p>

          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-display font-anton text-6xl md:text-7xl overflow-hidden">
              <span className="inline-block">dedi</span>
              <span className="inline-block">cated</span>
            </h2>
            <span className="text-heading-md font-playfair italic">expertise</span>
            <img src="/images/team-arrow.svg" alt="" className="w-8 h-8 invert" />
            <span className="text-heading-md font-playfair italic">members</span>
          </div>
        </div>

        {/* horizontal scroller wrapper - we set width: max-content so items lay out inline */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex gap-6 px-6 lg:px-12 py-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {teamMembers.map((member, idx) => (
              <a
                href="#"
                key={idx}
                className="team-card block w-72 flex-shrink-0"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-center filter grayscale transition-all duration-500"
                    style={{ display: "block" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent py-3">
                    <div className="flex whitespace-nowrap gap-6 pl-4">
                      {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-sm opacity-90">
                          {member.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs tracking-widest uppercase text-muted-foreground">
                  {member.role}
                </p>
                <h3 className="text-lg font-playfair mt-1">{member.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
