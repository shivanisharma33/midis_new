import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrearistCollage() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<HTMLHeadingElement[]>([]);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapperRef.current;
    const lines = linesRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    if (!wrap || !left || !right) return;

    /* ===============================
       RESPONSIVE MOVE DISTANCE
       =============================== */
    const getMoveX = () => {
      const w = window.innerWidth;
      if (w < 480) return 120;     // small phones
      if (w < 768) return 170;     // phones
      if (w < 1024) return 200;    // tablets
      return 245;                 // desktop (UNCHANGED)
    };

    let moveX = getMoveX();

    /* ===============================
       TEXT REVEAL
       =============================== */
    gsap.fromTo(
      lines,
      {
        opacity: 0,
        y: 180,
        clipPath: "inset(0 0 100% 0)",
      },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 1.2,
        stagger: 0.35,
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "+=120%",
          scrub: 1.3,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    /* ===============================
       LEFT COLLAGE
       =============================== */
    gsap.to(left, {
      x: () => -moveX,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: "+=120%",
        scrub: 1.2,
      },
    });

    /* ===============================
       RIGHT COLLAGE
       =============================== */
    gsap.to(right, {
      x: () => moveX,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: "+=120%",
        scrub: 1.2,
      },
    });

    /* ===============================
       HANDLE RESIZE
       =============================== */
    const onResize = () => {
      moveX = getMoveX();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="h-[220vh]">
      <section
        ref={wrapperRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-white"
      >
        {/* GRID */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.25] z-0" />

        {/* LEFT COLLAGE */}
        <div ref={leftRef} className="absolute inset-0 z-10">
          <img
            src="/images/milestone.webp"
            className="
              absolute
              left-[5%] md:left-[10%]
              top-[30%] md:top-[25%]
              w-[150px] sm:w-[200px] md:w-[240px]
              rounded-xl shadow-xl
            "
          />
          <img
            src="/images/partner-1.webp"
            className="
              absolute
              left-[20%] md:left-[28%]
              top-[12%] md:top-[10%]
              w-[130px] sm:w-[160px] md:w-[200px]
              rounded-xl shadow-xl
            "
          />
          <img
            src="/images/partner-2.webp"
            className="
              absolute
              left-[15%] md:left-[22%]
              top-[48%] md:top-[45%]
              w-[180px] sm:w-[220px] md:w-[280px]
              rounded-xl shadow-xl
            "
          />
        </div>

        {/* RIGHT COLLAGE */}
        <div ref={rightRef} className="absolute inset-0 z-10">
          <img
            src="/images/partner-3.webp"
            className="
              absolute
              right-[18%] md:right-[28%]
              top-[12%] md:top-[8%]
              w-[200px] sm:w-[260px] md:w-[350px]
              rounded-xl shadow-xl
            "
          />
          <img
            src="/images/partner-4.webp"
            className="
              absolute
              right-[5%] md:right-[10%]
              top-[42%] md:top-[38%]
              w-[240px] sm:w-[320px] md:w-[420px]
              rounded-xl shadow-xl
            "
          />
        </div>

        {/* TEXT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-20 text-center px-4">
          {["YOUR TRUSTED", "PARTNER IN", "DESIGN EXCELLENCE"].map((line, i) => (
            <h1
              key={i}
              ref={(el) => {
                if (el) linesRef.current[i] = el;
              }}
              className="
                text-[1.8rem]
                sm:text-[2.3rem]
                md:text-[3.2rem]
                lg:text-[4rem]
                font-bold text-black
                overflow-hidden
                leading-[1.1]
              "
            >
              {line}
            </h1>
          ))}

          <button className="mt-6 w-11 h-11 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center">
            ↓
          </button>
        </div>
      </section>
    </div>
  );
}
