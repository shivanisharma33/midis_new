import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const grid = gridRef.current;

    if (!section || !heading || !grid) return;

    const lines = heading.querySelectorAll(".line");
    const dedi = heading.querySelector(".dedi");
    const cated = heading.querySelector(".cated");
    const cards = grid.querySelectorAll(".team-card");

    const ctx = gsap.context(() => {
      gsap.set(lines, { y: 90, opacity: 0 });
      gsap.set([dedi, cated], { x: 0 });
      gsap.set(cards, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2400",
          scrub: 1.2,
          pin: true,
        },
      });

      tl.to(lines, {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        duration: 1,
        ease: "power4.out",
      });

      tl.to(
        [dedi, cated],
        {
          x: (i) => (i === 0 ? -140 : 140),
          duration: 1.2,
          ease: "power4.inOut",
        },
        "-=0.4"
      );

      tl.to(heading, {
        opacity: 0,
        y: -80,
        duration: 0.9,
        ease: "power3.inOut",
      });

      tl.to(
        cards,
        {
          opacity: 1,
          stagger: { each: 0.08, from: "center" },
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    {
      img: "https://www.midis.in/image/Alin.jpg",
      name: "ROBERT MAKIN",
      role: "CREATIVE DIRECTOR",
    },
    {
      img: "https://www.midis.in/image/shiviiii.png",
      name: "SHIVANI",
      role: "UI DESIGNER",
    },
    {
      img: "https://www.midis.in/image/member2.jpg",
      name: "ALEX SMITH",
      role: "DEVELOPER",
    },
    {
      img: "https://www.midis.in/image/member1.jpg",
      name: "JAMES LEE",
      role: "MARKETER",
    },
    {
      img: "https://www.midis.in/image/member4.jpg",
      name: "EMMA",
      role: "STRATEGIST",
    },
    {
      img: "https://www.midis.in/image/member6.jpg",
      name: "NOAH",
      role: "SEO EXPERT",
    },
    {
      img: "https://www.midis.in/image/member3.jpg",
      name: "LUCAS",
      role: "DESIGNER",
    },
    {
      img: "https://i.pravatar.cc/450?img=12",
      name: "OLIVER",
      role: "CONSULTANT",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B0C0E] overflow-hidden h-screen min-h-[700px]"
    >
      {/* ================= HEADING ================= */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-6 pointer-events-none">
        <h1
          ref={headingRef}
          className="
            font-anton text-white text-center leading-[0.9]
            text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem]
          "
        >
          <span className="line block">MEET OUR</span>
          <span className="line block">
            <span className="dedi inline-block">DEDI</span>
            <span className="cated inline-block ml-3">CATED</span>
          </span>
          <span className="line block">MEMBERS</span>
        </h1>
      </div>

      {/* ================= GRID ================= */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[1440px] w-full px-6">
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[32px]"
          >
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="team-card relative w-full aspect-[3/4] overflow-hidden bg-black"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="team-img w-full h-full object-cover"
                />

                {/* ===== DIAGONAL CORNER TAG ===== */}
                <div className="corner-ribbon">
                  {member.role}
                </div>

                {/* ===== BOTTOM MARQUEE ===== */}
                <div className="marquee-wrap">
                  <div className="marquee">
                    <span>{member.name} — {member.role}</span>
                    <span>{member.name} — {member.role}</span>
                    <span>{member.name} — {member.role}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
