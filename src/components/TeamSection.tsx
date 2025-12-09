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
  const blackBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current!;
      const heading = headingRef.current!;
      const scroller = scrollRef.current!;
      const blackBox = blackBoxRef.current!;

      if (!section || !heading || !scroller || !blackBox) return;

      const contentWidth = scroller.scrollWidth;
      const viewportW = window.innerWidth;
      const scrollDistance = Math.max(contentWidth - viewportW + 120, 0);

      ScrollTrigger.refresh();

      gsap.set(heading.querySelectorAll(".line"), { y: 60, opacity: 0 });

      // PIN SECTION
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.max(window.innerHeight + scrollDistance + 400, 1400)}`,
        pin: true,
        pinSpacing: true,
      });

      // HEADING REVEAL
      gsap.to(heading.querySelectorAll(".line"), {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top top+=50",
          end: "top+=180 top",
        },
      });

      // SPLIT DEDI / CATED
      const dedi = heading.querySelector(".dedi");
      const cated = heading.querySelector(".cated");

      gsap.set([dedi, cated], { x: 0 });

      gsap.to(dedi, {
        x: -120,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top+=120 top",
          end: "top+=260 top",
          scrub: true,
        },
      });

      gsap.to(cated, {
        x: 120,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top+=120 top",
          end: "top+=260 top",
          scrub: true,
        },
      });

      // HEADING FADE + BLACK BOX FADE IN
      gsap.to(heading, {
        opacity: 0,
        y: -60,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top+=260 top",
          end: "top+=360 top",
          scrub: true,
        },
      });

      gsap.to(blackBox, {
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top+=260 top",
          end: "top+=360 top",
          scrub: true,
        },
      });

      // HORIZONTAL SCROLL
      gsap.to(scroller, {
        x: () => `-${scrollDistance}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top+=380 top",
          end: () => `+=${Math.max(scrollDistance, 700)}`,
          scrub: true,
        },
      });

      // CARD APPEAR
      gsap.from(".team-card", {
        scale: 0.95,
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: section,
          start: "top+=400 top",
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden">

      {/* HEADING AREA */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 lg:px-12 text-center relative">

          {/* MAIN HEADING */}
          <h1
            ref={headingRef}
            className="team-heading font-anton text-[4.5rem] md:text-[6.5rem] lg:text-[8.5rem] text-foreground relative"
            style={{ lineHeight: 0.9 }}
          >
            <span className="line block">MEET OUR</span>

            <span className="line block dedicated-word relative">
              <span className="dedi inline-block">DEDI</span>
              <span className="cated inline-block ml-3">CATED</span>
            </span>

            <span className="line block">MEMBERS</span>
          </h1>

          {/* CENTERED BLACK BOX — EXACTLY ON TEXT */}
         <div
  ref={blackBoxRef}
  id="black-section"
  className="opacity-0 pointer-events-none absolute left-1/2 top-[52%]
             -translate-x-1/2 -translate-y-1/2
             bg-black w-[60%] h-[40vh]
             rounded-xl shadow-xl z-[50] scale-95"
></div>


        </div>
      </div>

      {/* HORIZONTAL SCROLLER */}
      <div className="pb-24 bg-background">
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 pl-6 lg:pl-12 py-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {teamMembers.map((member, index) => (
              <a key={index} className="team-card block w-80 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[420px] object-cover grayscale hover:grayscale-0 duration-500"
                  />
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
                <p className="mt-4 text-xs text-muted-foreground uppercase tracking-widest">{member.role}</p>
                <h3 className="text-lg font-playfair text-foreground mt-1">{member.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
