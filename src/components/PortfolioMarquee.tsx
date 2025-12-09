import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  { src: "/images/port/22.png", title: "Brand Strategy" },
  { src: "/images/port/23.png", title: "UI/UX Design" },
  { src: "/images/port/24.png", title: "E-Commerce" },
  { src: "/images/port/25.png", title: "Marketing Creative" },
  { src: "/images/port/26.png", title: "Product Launch" },
  { src: "/images/port/27.png", title: "Brand Identity" },
];

export const PortfolioMarquee = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!wrapper || !track) return;

    const totalWidth = track.scrollWidth;
    const viewportWidth = wrapper.offsetWidth;
    const scrollDistance = totalWidth - viewportWidth;

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
  }, []);

  return (
    <section className="bg-black text-white py-24">

      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          Our Work
        </p>
        <h2 className="text-4xl md:text-6xl font-semibold">Portfolio</h2>
      </div>

      {/* HORIZONTAL SCROLL WRAPPER */}
      <div ref={wrapperRef} className="relative overflow-hidden w-full h-[420px]">

        {/* Track (moves horizontally) */}
        <div ref={trackRef} className="absolute top-0 left-0 flex gap-10 px-10">

          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[380px] h-[420px] bg-[#111] rounded-3xl shadow-xl overflow-hidden 
              hover:scale-[1.04] transition duration-500"
            >
              <img
                src={item.src}
                className="w-full h-[300px] object-cover"
                alt={item.title}
              />
              <div className="p-6 text-xl font-semibold">{item.title}</div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
