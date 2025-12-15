import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const items = [
  "/images/port/8.png",
  "/images/port/38.png",
  "/images/port/18.png",
  "/images/port/25.png",
  "/images/port/26.png",
];

export default function PortfolioMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const indexRef = useRef(0);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards.length) return;

      // 🎯 Tuned for horizontal cards
      const positions = [
        { x: -320, scale: 0.9, opacity: 1, zIndex: 1 },
        { x: -160, scale: 0.95, opacity: 1, zIndex: 2 },
        { x: 0, scale: 1, opacity: 1, zIndex: 5 }, // CENTER
        { x: 160, scale: 0.95, opacity: 1, zIndex: 2 },
        { x: 320, scale: 0.9, opacity: 1, zIndex: 1 },
      ];

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
            opacity: pos.opacity,
            zIndex: pos.zIndex,
            duration: 1.4,
            ease: "power3.inOut",
          });
        });
      };

      applyPositions();

      const interval = setInterval(() => {
        indexRef.current = (indexRef.current + 1) % cards.length;
        applyPositions();
      }, 3000);

      return () => clearInterval(interval);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle Circular Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[900px] rounded-full border border-white/10" />
        <div className="absolute w-[1100px] h-[1100px] rounded-full border border-white/5" />
      </div>

      {/* Heading */}
    <div className="relative z-10 text-center mb-28">

  {/* Small accent line */}
  <div className="flex justify-center mb-5">
    <span className="h-[2px] w-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
  </div>

  {/* Top line */}
  <h2 className="text-4xl md:text-5xl font-serif italic text-orange-400 tracking-wide">
    Result that
  </h2>

  {/* Main heading */}
  <h3 className="text-5xl md:text-7xl font-extrabold text-white mt-2 leading-tight">
    Matter{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
      expertise
    </span>
  </h3>

  {/* Sub text */}
  <p className="text-lg md:text-2xl text-gray-300 mt-4 max-w-2xl mx-auto">
    you can trust
  </p>

</div>


      {/* Cards */}
      <div className="relative w-full h-[420px] flex items-center justify-center">
        {items.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="
              absolute
              w-[360px] sm:w-[420px] md:w-[520px]
              h-[220px] sm:h-[260px] md:h-[300px]
              rounded-xl overflow-hidden
              bg-[#111]
              shadow-[0_30px_80px_rgba(0,0,0,0.55)]
            "
          >
            <img
              src={src}
              alt="portfolio"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
