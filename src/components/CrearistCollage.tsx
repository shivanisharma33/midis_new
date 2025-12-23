import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CrearistCollage() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const textWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapperRef.current;
    const textWrap = textWrapRef.current;
    if (!wrap || !textWrap) return;

    const isMobile = window.innerWidth < 768;

    /* ===============================
       INITIAL STATE
       (Text hidden, images visible)
    =============================== */
    gsap.set(textWrap, {
      opacity: 0,
      scale: 0.9,
    });

    /* ===============================
       MASTER PINNED TIMELINE
    =============================== */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top top",
        end: isMobile ? "+=240%" : "+=340%",
        scrub: isMobile ? 0.5 : 1.3,
        pin: true,
        anticipatePin: 1,
      },
    });

    /* ===============================
       PHASE 1 — PAUSE (IMAGES ONLY)
    =============================== */
    tl.to({}, { duration: 0.2 });

    /* ===============================
       PHASE 2 — TEXT APPEARS
    =============================== */
    tl.to(textWrap, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });

    /* ===============================
       PHASE 3 — IMAGE SPREAD
    =============================== */
    tl.to(".img-1", { x: -240, y: -260, rotate: -6, ease: "power3.out" }, "<");
    tl.to(".img-2", { x: -60, y: -340, rotate: 4, scale: 0.95, ease: "power3.out" }, "<");
    tl.to(".img-3", { x: -220, y: 180, rotate: -3, ease: "power3.out" }, "<");
    tl.to(".img-4", { x: 220, y: -300, rotate: 6, ease: "power3.out" }, "<");
    tl.to(".img-5", { x: 300, y: 60, rotate: -4, ease: "power3.out" }, "<");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-[180vh] md:min-h-[280vh] bg-white">
      <section
        ref={wrapperRef}
        className="relative min-h-[100svh] w-full overflow-hidden bg-white"
      >
        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/midis-bg.jpg')" }}
        />

        {/* COLLAGE IMAGES — SAME AS IMAGE */}
        <div className="absolute inset-0 z-10">

          {/* LEFT LARGE PORTRAIT */}
          <img
            src="/images/milestone.webp"
            className="collage-img img-1 absolute
                       left-[8%] top-[32%]
                       w-[clamp(240px,36vw,420px)]
                       rounded-xl shadow-xl"
          />

          {/* GOLD SHAPE (LEFT-CENTER OVERLAP) */}
          <img
            src="/images/partner-1.webp"
            className="collage-img img-2 absolute
                       left-[28%] top-[26%]
                       w-[clamp(130px,20vw,220px)]
                       rounded-xl shadow-xl"
          />

          {/* CENTER FRUIT IMAGE */}
          <img
            src="/images/partner-2.webp"
            className="collage-img img-3 absolute
                       left-[40%] top-[40%]
                       w-[clamp(150px,24vw,260px)]
                       rounded-xl shadow-xl z-20"
          />

          {/* RIGHT BACK IMAGE */}
          <img
            src="/images/partner-3.webp"
            className="collage-img img-4 absolute
                       right-[22%] top-[18%]
                       w-[clamp(240px,34vw,420px)]
                       rounded-xl shadow-xl opacity-90"
          />

          {/* RIGHT FRONT CHARACTER */}
          <img
            src="/images/partner-4.webp"
            className="collage-img img-5 absolute
                       right-[10%] top-[30%]
                       w-[clamp(190px,30vw,340px)]
                       rounded-xl shadow-xl z-30"
          />
        </div>

        {/* CENTER TEXT */}
        <div
          ref={textWrapRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center
                     text-center px-4 font-playfair pointer-events-none"
        >
          <h1 className="text-black text-[1.6rem] sm:text-[2.4rem] md:text-[3.4rem] lg:text-[4.2rem] font-bold leading-tight">
            YOUR TRUSTED
          </h1>
          <h1 className="text-black text-[1.6rem] sm:text-[2.4rem] md:text-[3.4rem] lg:text-[4.2rem] font-bold leading-tight">
            PARTNER IN
          </h1>
          <h1 className="text-black text-[1.6rem] sm:text-[2.4rem] md:text-[3.4rem] lg:text-[4.2rem] font-bold leading-tight">
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
