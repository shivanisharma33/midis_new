import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const blackBoxRef = useRef<HTMLDivElement | null>(null);
  const faceGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current!;
    const heading = headingRef.current!;
    const blackBox = blackBoxRef.current!;
    const faceGrid = faceGridRef.current!;

    if (!section || !heading || !blackBox || !faceGrid) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2400",
        scrub: true,
        pin: true,
      },
    });

    gsap.set(heading.querySelectorAll(".line"), { y: 80, opacity: 0 });

    tl.to(heading.querySelectorAll(".line"), {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    tl.to(
      heading.querySelector(".dedi"),
      { x: -120, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    tl.to(heading.querySelector(".cated"), {
      x: 120,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(heading, { opacity: 0, y: -70, duration: 1 });

    tl.to(blackBox, {
      opacity: 1,
      scale: 1.4,
      duration: 1.3,
      ease: "power3.out",
    });

    tl.to(blackBox, {
      scale: 1.85,
      duration: 1.3,
      ease: "power3.out",
    });

    tl.fromTo(
      faceGrid.querySelectorAll(".grid-item"),
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=1"
    );

    return () => {
      gsap.killTweensOf("*");
      ScrollTrigger.killAll();
    };
  }, []);

  const teamPhotos = [
    "https://www.midis.in/image/Alin.jpg",
    "https://www.midis.in/image/shiviiii.png",
    "https://www.midis.in/image/member2.jpg",
    "https://www.midis.in/image/member1.jpg",
    "https://www.midis.in/image/member4.jpg",
    "https://www.midis.in/image/member6.jpg",
    "https://www.midis.in/image/member3.jpg",
    "https://i.pravatar.cc/450?img=12"
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-background overflow-hidden h-[100vh] w-full"
    >
      {/* HEADING */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1
          ref={headingRef}
          className="font-anton text-[5rem] md:text-[7rem] lg:text-[9rem]
            text-foreground text-center leading-[0.9]"
        >
          <span className="line block">MEET OUR</span>
          <span className="line block">
            <span className="dedi inline-block">DEDI</span>
            <span className="cated inline-block ml-3">CATED</span>
          </span>
          <span className="line block">MEMBERS</span>
        </h1>
      </div>

      {/* BLACK BOX + GRID */}
      <div
        ref={blackBoxRef}
        className="absolute left-1/2 top-1/2 
          w-[60%] h-[85vh]
          -translate-x-1/2 -translate-y-1/2 
          bg-black rounded-xl shadow-xl opacity-0 scale-90
          flex items-center justify-center p-8 overflow-hidden"
      >
        <div
          ref={faceGridRef}
          className="grid grid-cols-4 gap-6 w-full h-full place-items-center"
        >
          {teamPhotos.map((img, i) => (
            <div
              key={i}
              className="
                grid-item relative overflow-hidden
                rounded-2xl
                w-[190px] aspect-square
                bg-[#0f0f10]
                shadow-[0_8px_30px_rgba(0,0,0,0.35)]
                border border-white/5
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)]
                transition-all duration-500
                group
              "
            >
              <img
                src={img}
                className="
                  w-full h-full object-cover object-center
                  transition-all duration-700 ease-out
                  group-hover:scale-110 group-hover:rotate-1
                "
              />

              {/* Glass reflection */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br from-white/10 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-all duration-700
                  pointer-events-none
                "
              />

              {/* Bottom fade */}
              <div
                className="
                  absolute bottom-0 left-0 right-0 h-1/3
                  bg-gradient-to-t from-black/50 to-transparent
                  pointer-events-none
                "
              />

              {/* Glow outline */}
              <div
                className="
                  absolute inset-0 rounded-2xl 
                  border border-white/10
                  shadow-[0_0_25px_rgba(255,255,255,0.08)]
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  pointer-events-none
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
