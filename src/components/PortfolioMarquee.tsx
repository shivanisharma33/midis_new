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
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const resizeAnimation = () => {
      const totalWidth = track.scrollWidth;
      const viewportWidth = wrapper.offsetWidth;
      const scrollDistance = totalWidth - viewportWidth;

      gsap.killTweensOf(track);

      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
        },
      });
    };

    resizeAnimation();
    window.addEventListener("resize", resizeAnimation);

    return () => window.removeEventListener("resize", resizeAnimation);
  }, []);

  return (
    <section className="bg-black text-white py-20 md:py-24">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-2 md:mb-3">
          Our Work
        </p>
        <h2 className="text-3xl md:text-6xl font-semibold">Portfolio</h2>
      </div>

      {/* HORIZONTAL SCROLL WRAPPER */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden w-full 
        h-[300px] xs:h-[340px] sm:h-[380px] md:h-[420px]"
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="absolute top-0 left-0 flex 
          gap-4 xs:gap-6 sm:gap-8 md:gap-10 
          px-4 xs:px-6 sm:px-8 md:px-10"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="
                min-w-[240px] h-[220px]
                xs:min-w-[280px] xs:h-[240px]
                sm:min-w-[320px] sm:h-[260px]
                md:min-w-[380px] md:h-[300px]
                bg-[#111] rounded-3xl shadow-xl overflow-hidden 
                hover:scale-[1.04] transition duration-500
              "
            >
              <img
                src={item.src}
                className="w-full h-full object-cover"
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
