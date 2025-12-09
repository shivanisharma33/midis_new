import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrearistCollage() {
  const wrapperRef = useRef(null);
  const linesRef = useRef([]);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const wrap = wrapperRef.current;
    const lines = linesRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    // ⭐ TEXT REVEAL (line by line)
    gsap.fromTo(
      lines,
      {
        opacity: 0,
        y: 180,
        clipPath: "inset(0 0 100% 0)"
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
          end: "+=120%", // internal scroll area
          scrub: 1.3,
          pin: true,      // ⭐ STICKY (page not scroll)
          anticipatePin: 1,
        }
      }
    );

    // ⭐ LEFT COLLAGE MOVE OUTWARD
    gsap.to(left, {
      x: -245,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: "+=120%",
        scrub: 1.2,
      }
    });

    // ⭐ RIGHT COLLAGE MOVE OUTWARD
    gsap.to(right, {
      x:245,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: "+=120%",
        scrub: 1.2,
      }
    });
  }, []);

  return (
    <div style={{ height: "219vh" }}>
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
            className="absolute left-[10%] top-[25%] w-[240px] rounded-xl shadow-xl"
          />
          <img
            src="/images/partner-1.webp"
            className="absolute left-[28%] top-[10%] w-[200px] rounded-xl shadow-xl"
          />
          <img
            src="/images/partner-2.webp"
            className="absolute left-[22%] top-[45%] w-[280px] rounded-xl shadow-xl"
          />
        </div>

        {/* RIGHT COLLAGE */}
        <div ref={rightRef} className="absolute inset-0 z-10">
          <img
            src="/images/partner-3.webp"
            className="absolute right-[28%] top-[8%] w-[350px] rounded-xl shadow-xl"
          />
          <img
            src="/images/partner-4.webp"
            className="absolute right-[10%] top-[38%] w-[420px] rounded-xl shadow-xl"
          />
        </div>

        {/* TEXT REVEAL LINES */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-20 text-center">
          {["YOUR TRUSTED", "PARTNER IN", "DESIGN EXCELLENCE"].map((line, i) => (
            <h1
              key={i}
              ref={(el) => (linesRef.current[i] = el)}
              className="text-[2.7rem] md:text-[4rem] font-bold text-black overflow-hidden leading-[1.1]"
            >
              {line}
            </h1>
          ))}

          <button className="mt-6 w-12 h-12 rounded-full border border-black flex items-center justify-center">
            ↓
          </button>
        </div>
      </section>
    </div>
  );
}
