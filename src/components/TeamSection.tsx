import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Shivani Dixit", role: "Visual Storyteller", image: "https://www.midis.in/image/shiviiii.png" },
  { name: "Alin Mishra", role: "Technical Director", image: "https://www.midis.in/image/Alin.jpg" },
  { name: "Ojaswinni Saini", role: "Front-End Developer", image: "https://www.midis.in/image/member2.jpg" },
  { name: "Navkirat", role: "Marketing Strategist", image: "https://www.midis.in/image/member6.jpg" },
  { name: "swayam Gandhi", role: "Brand Designer", image: "https://www.midis.in/image/member1.jpg" },
  { name: "Rahul", role: "Creative Director", image: "https://www.midis.in/image/member4.jpg" },
  { name: "Chanda", role: "Graphic Designer", image: "https://www.midis.in/image/member3.jpg" },

];

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current!;
      const heading = headingRef.current!;
      const scroller = scrollRef.current!;

      // ensure elements exist
      if (!section || !heading || !scroller) return;

      // compute horizontal distance we need to scroll (content width - viewport)
      const contentWidth = scroller.scrollWidth;
      const viewportW = window.innerWidth;
      const scrollDistance = Math.max(contentWidth - viewportW + 120 /*padding buffer*/, 0);

      // reset any existing ScrollTriggers (safety)
      ScrollTrigger.refresh();

      // INITIAL: heading lines offscreen for reveal
      gsap.set(heading.querySelectorAll(".line"), { y: 60, opacity: 0 });

      // Pin the whole section for the duration needed to animate horizontal scroll
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.max(window.innerHeight + scrollDistance + 300, 1200)}`, // dynamic end
        pin: true,
        pinSpacing: true,
      });

      // 1) Heading line-by-line reveal (when section enters)
      gsap.to(heading.querySelectorAll(".line"), {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: section,
          start: "top top+=50",
          end: "top+=220 top",
          toggleActions: "play none none reverse",
          scrub: false,
        },
      });

      // 2) Heading moves up + fades out while scroll continues (so carousel becomes visible)
      gsap.to(heading, {
        y: -140,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top+=200 top",
          end: "top+=420 top",
          scrub: true,
        },
      });

      // 3) Horizontal scroll animation: move scroller left by scrollDistance px
      // animate x (negative) so items slide left
      gsap.to(scroller, {
        x: () => `-${scrollDistance}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top+=260 top",
          end: () => `+=${Math.max(scrollDistance, 800)}`, // animate for the width of content
          scrub: true,
        },
      });

      // 4) Card reveal when they enter (non-scrubbed staggered pop)
      gsap.from(".team-card", {
        scale: 0.98,
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: section,
          start: "top+=260 top",
          end: "top+=420 top",
          toggleActions: "play none none reverse",
        },
      });

      // Refresh to ensure ScrollTrigger sizes are correct
      ScrollTrigger.refresh();
    }, sectionRef);

    // cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden">
      {/* FIRST FULL-SCREEN VIEW (centered heading) */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1
            ref={headingRef}
            className="team-heading font-anton text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem] leading-[0.9] tracking-tight text-foreground"
            style={{ lineHeight: 0.9 }}
          >
            <span className="line block">MEET OUR</span>
            <span className="line block">DEDICATED</span>
            <span className="line block">MEMBERS</span>
          </h1>
        </div>
      </div>

      {/* HORIZONTAL SCROLL AREA */}
      <div className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">meet our</p>

            <h2 className="text-display font-anton text-6xl md:text-7xl text-foreground overflow-hidden">
              <span className="inline-block">dedi</span>
              <span className="inline-block">cated</span>
            </h2>

            <span className="text-heading-md font-playfair italic text-foreground">expertise</span>
            <img src="/images/team-arrow.svg" alt="" className="w-8 h-8 invert" />
            <span className="text-heading-md font-playfair italic text-foreground">members</span>
          </div>
        </div>

        {/* The scroller wrapper - width is content-based (max-content) */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 pl-6 lg:pl-12 py-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href="#"
                className="team-card block w-80 flex-shrink-0"
                aria-label={member.name}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[420px] object-cover object-center transition-transform duration-500 grayscale hover:grayscale-0"
                    // note: set a tall height so images are not cut; adjust as needed
                  />

                  {/* Name marquee overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/85 to-transparent py-3">
                    <div className="flex whitespace-nowrap gap-6 pl-4">
                      {[...Array(6)].map((_, i) => (
                        <span key={i} className="text-sm text-foreground opacity-90">
                          {member.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-muted-foreground tracking-widest uppercase">
                  {member.role}
                </p>
                <h3 className="text-lg font-playfair text-foreground mt-1">{member.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
