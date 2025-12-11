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
      scale: 1.1,
      duration: 1.2,
      ease: "power3.out",
    });

    tl.to(blackBox, {
      scale: 1.45, // SAFER ON PHONES
      duration: 1.2,
      ease: "power3.out",
    });

    tl.fromTo(
      faceGrid.querySelectorAll(".grid-item"),
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.12,
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
    "https://i.pravatar.cc/450?img=12",
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative bg-black overflow-hidden 
        h-[100vh] w-full
        min-h-[650px] sm:min-h-[750px]
      "
    >
      {/* HEADING */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4 sm:px-8">
        <h1
          ref={headingRef}
          className="
            font-anton 
            text-[2.5rem] 
            sm:text-[4rem] 
            md:text-[6rem] 
            lg:text-[8rem] 
            xl:text-[9rem] 
            text-white text-center 
            leading-[0.9] 
            break-words
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

      {/* BLACK BOX */}
      <div
        ref={blackBoxRef}
        className="
          absolute left-1/2 top-1/2  
          w-[90%] sm:w-[80%] lg:w-[70%] 
          h-[70vh] sm:h-[80vh] lg:h-[88vh] 
          -translate-x-1/2 -translate-y-1/2  
          bg-[#0B0C0E] 
          opacity-0 scale-50 
          border border-[#ffffff15]
          shadow-[0_0_40px_rgba(255,255,255,0.04),0_0_80px_rgba(255,255,255,0.03)]
          transition-all duration-700 
          flex items-center justify-center 
          p-4 sm:p-10 md:p-20 
          overflow-hidden
        "
      >
        {/* GRID */}
        <div
          ref={faceGridRef}
          className="
            grid grid-cols-2 
            sm:grid-cols-3 
            lg:grid-cols-4 
            gap-3 sm:gap-5 
            w-full h-full 
            place-items-center px-2 sm:px-4
          "
        >
          {teamPhotos.map((img, i) => (
            <div
              key={i}
              className="
                grid-item relative overflow-hidden 
                w-full max-w-[140px] sm:max-w-[170px] md:max-w-[190px]
                h-[180px] sm:h-[210px] md:h-[230px]
                bg-[#0f0f10]
                border border-white/10
                p-2 sm:p-3
                rounded-md
                shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                transition-all duration-500 ease-out
                hover:scale-[1.04]
                group cursor-pointer
              "
            >
              <img
                src={img}
                className="
                  w-full h-full object-cover object-center
                  rounded-md
                  transition-all duration-700 ease-out
                  group-hover:scale-110
                "
              />

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute inset-0 
                  bg-[rgba(0,0,0,0.45)]
                  opacity-0
                  transition-all duration-500
                  group-hover:opacity-100
                "
              />

              {/* ROLE TAG */}
              <div
                className="
                  absolute top-3 left-0
                  bg-black/80 text-white 
                  text-[8px] sm:text-[10px] 
                  font-semibold 
                  px-2 py-1 
                  rounded-r-md
                  opacity-0 -translate-x-3
                  transition-all duration-500
                  group-hover:opacity-100 group-hover:translate-x-0
                "
              >
                Technical Director
              </div>

              {/* NAME BAR */}
              <div
                className="
                  absolute bottom-0 left-0 w-full
                  bg-gradient-to-t from-black/90 to-transparent
                  py-2 sm:py-3 px-2 sm:px-3
                  opacity-0 translate-y-5
                  transition-all duration-500
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                <p className="text-white font-bold text-xs sm:text-sm">Riley Knox</p>
                <p className="text-white/60 text-[8px] sm:text-[10px] -mt-1">
                  Director of Design
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
