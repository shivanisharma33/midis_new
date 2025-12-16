import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrearistCollage() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textWrapRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapperRef.current;
    const textWrap = textWrapRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    if (!wrap || !textWrap || !left || !right) return;

    const isMobile = window.innerWidth < 768;

    const getMoveX = () => {
      const w = window.innerWidth;
      if (w < 480) return 90;
      if (w < 768) return 130;
      if (w < 1024) return 200;
      return 245;
    };

    let moveX = getMoveX();

    /* ===============================
       MAIN TEXT TIMELINE
    =============================== */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: isMobile ? "+=90%" : "+=160%",
        scrub: isMobile ? 0.3 : 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.set(textWrap, { opacity: 0, scale: 0.2 });
    tl.to(textWrap, { opacity: 1, duration: 0.25 });
    tl.to(textWrap, { scale: 1, duration: 0.6 });

    /* ===============================
       LEFT COLLAGE MOVE
    =============================== */
    gsap.to(left, {
      x: () => -moveX,
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
         end: isMobile ? "+=110%" : "+=350%",
        scrub: isMobile ? 0.4 : 1.5,
      },
    });

    /* ===============================
       RIGHT COLLAGE MOVE
    =============================== */
    gsap.to(right, {
      x: () => moveX,
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: isMobile ? "+=90%" : "+=160%",
        scrub: isMobile ? 0.4 : 1.5,
      },
    });

    const onResize = () => {
      moveX = getMoveX();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-[140vh] md:min-h-[240vh]">
      <section
        ref={wrapperRef}
        className="sticky top-0 min-h-[100svh] w-full overflow-hidden bg-white"
      >
        {/* FORCE WHITE BACKGROUND (NO BLACK GAP) */}
        <div className="absolute inset-0 bg-white -z-10" />

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/midis-bg.jpg')" }}
        />

        {/* LEFT COLLAGE */}
        <div ref={leftRef} className="absolute inset-0 z-10">
          <img
            src="/images/milestone.webp"
            className="absolute left-[8%] sm:left-[12%] md:left-[30%]
                       top-[38%] sm:top-[34%] md:top-[25%]
                       w-[clamp(110px,35vw,240px)]
                       rounded-xl shadow-xl"
          />
          <img
            src="/images/partner-1.webp"
            className="absolute left-[12%] sm:left-[18%] md:left-[28%]
                       top-[14%] sm:top-[12%] md:top-[10%]
                       w-[clamp(100px,30vw,200px)]
                       rounded-xl shadow-xl"
          />
          <img
            src="/images/partner-2.webp"
            className="absolute left-[10%] sm:left-[16%] md:left-[22%]
                       top-[55%] sm:top-[50%] md:top-[45%]
                       w-[clamp(130px,42vw,280px)]
                       rounded-xl shadow-xl"
          />
        </div>

        {/* RIGHT COLLAGE */}
        <div ref={rightRef} className="absolute inset-0 z-10">
          <img
            src="/images/partner-3.webp"
            className="absolute right-[10%] sm:right-[14%] md:right-[18%]
                       top-[14%] sm:top-[12%] md:top-[8%]
                       w-[clamp(140px,45vw,350px)]
                       rounded-xl shadow-xl"
          />
          <img
            src="/images/partner-4.webp"
            className="absolute right-[6%] sm:right-[10%] md:right-[10%]
                       top-[30%] sm:top-[34%] md:top-[38%]
                       w-[clamp(160px,55vw,420px)]
                       rounded-xl shadow-xl"
          />
        </div>

        {/* CENTER TEXT */}
        <div
          ref={textWrapRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2
                     text-center px-4 font-playfair antialiased"
        >
          <h1 className="text-black text-[1.6rem] sm:text-[2.3rem] md:text-[3.2rem] lg:text-[4rem] font-bold leading-[1.1]">
            YOUR TRUSTED
          </h1>
          <h1 className="text-black text-[1.6rem] sm:text-[2.3rem] md:text-[3.2rem] lg:text-[4rem] font-bold leading-[1.1]">
            PARTNER IN
          </h1>
          <h1 className="text-black text-[1.6rem] sm:text-[2.3rem] md:text-[3.2rem] lg:text-[4rem] font-bold leading-[1.1]">
            DESIGN EXCELLENCE
          </h1>

          <button className="mt-6 w-11 h-11 md:w-12 md:h-12 rounded-full border border-black text-black flex items-center justify-center">
            ↓
          </button>
        </div>
      </section>
    </div>
  );
}
