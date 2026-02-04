import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
  "/images/port/8.png",
  "/images/port/19.png",
  "/images/port/18.png",
  "/images/port/25.png",
  "/images/port/34.png",
];

export default function PortfolioMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const indexRef = useRef(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      const isMobile = () => window.innerWidth < 768;

      /* ================= POSITIONS ================= */
      const getPositions = () => {
        const w = window.innerWidth;

        if (w < 480) {
          return [
            { x: -120, scale: 0.8, z: 1 },
            { x: -60, scale: 0.9, z: 2 },
            { x: 0, scale: 1.05, z: 5 },
            { x: 60, scale: 0.9, z: 2 },
            { x: 120, scale: 0.8, z: 1 },
          ];
        }

        if (w < 768) {
          return [
            { x: -180, scale: 0.85, z: 1 },
            { x: -90, scale: 0.95, z: 2 },
            { x: 0, scale: 1.08, z: 5 },
            { x: 90, scale: 0.95, z: 2 },
            { x: 180, scale: 0.85, z: 1 },
          ];
        }

        return [
          { x: -320, scale: 0.9, z: 1 },
          { x: -160, scale: 0.96, z: 2 },
          { x: 0, scale: 1.1, z: 5 },
          { x: 160, scale: 0.96, z: 2 },
          { x: 320, scale: 0.9, z: 1 },
        ];
      };

      let positions = getPositions();

      /* ================= APPLY ================= */
      const applyPositions = () => {
        cards.forEach((card, i) => {
          const pos =
            positions[
              (i - indexRef.current + positions.length) %
                positions.length
            ];

          gsap.to(card, {
            x: pos.x,
            scale: pos.scale,
            zIndex: pos.z,
            duration: 0.9,
            ease: "power4.out",
          });
        });
      };

      applyPositions();

      /* ================= AUTO SLIDE (DESKTOP ONLY) ================= */
      let interval: number | null = null;

      if (!isMobile()) {
        interval = window.setInterval(() => {
          indexRef.current = (indexRef.current + 1) % cards.length;
          applyPositions();
        }, 2600);
      }

      /* ================= SWIPE (MOBILE ONLY) ================= */
      const onTouchStart = (e: TouchEvent) => {
        if (!isMobile()) return;
        touchStartX.current = e.touches[0].clientX;
      };

      const onTouchMove = (e: TouchEvent) => {
        if (!isMobile()) return;
        touchEndX.current = e.touches[0].clientX;
      };

      const onTouchEnd = () => {
        if (!isMobile()) return;
        if (
          touchStartX.current === null ||
          touchEndX.current === null
        )
          return;

        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) > 50) {
          indexRef.current =
            diff > 0
              ? (indexRef.current + 1) % cards.length
              : (indexRef.current - 1 + cards.length) % cards.length;

          applyPositions();
        }

        touchStartX.current = null;
        touchEndX.current = null;
      };

      sectionRef.current.addEventListener("touchstart", onTouchStart);
      sectionRef.current.addEventListener("touchmove", onTouchMove);
      sectionRef.current.addEventListener("touchend", onTouchEnd);

      /* ================= RESIZE ================= */
      const onResize = () => {
        positions = getPositions();
        applyPositions();
      };

      window.addEventListener("resize", onResize);

      return () => {
        if (interval) clearInterval(interval);
        window.removeEventListener("resize", onResize);
        sectionRef.current?.removeEventListener("touchstart", onTouchStart);
        sectionRef.current?.removeEventListener("touchmove", onTouchMove);
        sectionRef.current?.removeEventListener("touchend", onTouchEnd);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ===== BACKGROUND EFFECTS ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-white/10 animate-spin-slow" />
      </div>

      {/* ===== HEADING ===== */}
      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center mb-4">
          <span className="h-[2px] w-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-orange-400">
          Results that
        </h2>

        <h3 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mt-2 leading-tight">
          Matter{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Expertise
          </span>
        </h3>

        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl mx-auto">
          You can trust
        </p>
      </div>

      {/* ===== CARDS ===== */}
      <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] flex items-center justify-center">
        {items.map((src, i) => (
          <div
            key={i}
            ref={(el) => el && (cardsRef.current[i] = el)}
            className="
              absolute
              w-[clamp(220px,60vw,520px)]
              h-[clamp(140px,35vw,300px)]
              rounded-2xl
              overflow-hidden
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              shadow-[0_50px_140px_rgba(0,0,0,0.8)]
            "
          >
            <img
              src={src}
              alt="portfolio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
