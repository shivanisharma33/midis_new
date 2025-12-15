import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  { src: "/images/port/8.png", title: "" },
  { src: "/images/port/38.png", title: "" },
  { src: "/images/port/18.png", title: "" },
  { src: "/images/port/25.png", title: "" },
  { src: "/images/port/26.png", title: "" },
  { src: "/images/port/27.png", title: "" },
];

export const PortfolioMarquee = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current!;
      const track = trackRef.current!;

      const setupAnimation = () => {
        ScrollTrigger.getById("portfolio-marquee")?.kill();

        const totalWidth = track.scrollWidth;
        const viewportWidth = wrapper.offsetWidth;

        // 🔥 safer scroll distance for mobile
        const scrollDistance = Math.max(totalWidth - viewportWidth, 0);

        gsap.to(track, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            id: "portfolio-marquee",
            trigger: wrapper,
            start: "center center",
            end: `+=${scrollDistance * 0.6}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      };

      setupAnimation();
      window.addEventListener("resize", setupAnimation);

      return () => {
        window.removeEventListener("resize", setupAnimation);
      };
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black text-white py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-14 relative z-10 px-4">
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mb-2">
          Our Work
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold">
          Portfolio
        </h2>
      </div>

      {/* Wrapper */}
      <div
        ref={wrapperRef}
        className="
          relative w-full overflow-hidden
          min-h-[240px]
          sm:min-h-[280px]
          md:min-h-[340px]
          lg:min-h-[380px]
        "
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="
            flex items-center
            gap-3 sm:gap-5 md:gap-8 lg:gap-10
            px-3 sm:px-6 md:px-10
          "
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                min-w-[200px] h-[160px]
                sm:min-w-[240px] sm:h-[190px]
                md:min-w-[320px] md:h-[240px]
                lg:min-w-[380px] lg:h-[300px]
                bg-[#111] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden
                transition-transform duration-500 hover:scale-[1.04]
              "
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
