import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ReasonItem = {
  number: string;
  title: string;
  image: string;
};

const items: ReasonItem[] = [
  {
    number: "01.",
    title: "EXPERTISE &\nSPECIALIZATION",
    image: "/images/testimonial-bg.webp",
  },
  {
    number: "02.",
    title: "24/7 CUSTOMER\nSUPPORT",
    image:
      "https://cdn.prod.website-files.com/67a1ba0a889270647730e779/6807591402397500a733b507_banner%20img-p-1600.webp",
  },
  {
    number: "03.",
    title: "COST-EFFECTIVE\nSOLUTIONS",
    image:
      "/images/service-branding.webp",
  },
  {
    number: "04.",
    title: "EXPERTISE &\nSPECIALIZATION",
    image:
      "/images/service-dev.webp",
  },
];

export const ReasonsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const switchRef = useRef<HTMLDivElement | null>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndex = useRef(0);

  useEffect(() => {
    if (!sectionRef.current || !switchRef.current) return;

    const ctx = gsap.context(() => {
      /* ================= TITLE REVEAL ================= */
      gsap.fromTo(
        ".reason-line",
        { y: 80, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.18,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      /* ================= SWITCH SCROLL (PINNED) ================= */
      const backgrounds = bgRefs.current.filter(Boolean) as HTMLDivElement[];
      const cards = itemRefs.current.filter(Boolean) as HTMLDivElement[];

      gsap.set(backgrounds, { opacity: 0 });
      gsap.set(backgrounds[0], { opacity: 1 });
      cards[0]?.classList.add("active");

      ScrollTrigger.create({
        trigger: switchRef.current,
        start: "top top",
        end: `+=${items.length * 120}%`,
        scrub: true,
        pin: true, // 🔥 THIS IS WHY PAGE STOPS & CONTENT SWITCHES
        anticipatePin: 1,

        onUpdate: (self) => {
          const index = Math.min(
            items.length - 1,
            Math.floor(self.progress * items.length)
          );

          if (index === activeIndex.current) return;
          activeIndex.current = index;

          // IMAGE SWITCH
          backgrounds.forEach((bg, i) =>
            gsap.to(bg, {
              opacity: i === index ? 1 : 0,
              duration: 0.5,
              ease: "power2.out",
            })
          );

          // ROW SWITCH
          cards.forEach((card) => card.classList.remove("active"));
          cards[index]?.classList.add("active");
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      {/* ================= HEADING ================= */}
      <div className="min-h-[80vh] flex items-center">
        <div className="max-w-7xl w-full px-6 md:px-16 lg:px-24">
          <h2 className="uppercase font-extrabold leading-[1.05] text-black text-[3.2rem] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6.2rem]">
            <span className="reason-line block">HERE ARE A FEW</span>
            <span className="reason-line block">REASONS WHY</span>
            <span className="reason-line block text-gray-300">
              YOU&apos;LL LOVE US
            </span>
          </h2>
        </div>
      </div>

      {/* ================= SWITCH SECTION ================= */}
      <div ref={switchRef} className="relative">
        {/* TOP GRID */}
        <div className="grid grid-cols-4 border-t border-b border-gray-200 bg-white">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="reason-item p-10 border-r border-gray-200 transition-colors duration-300"
            >
              <p className="text-sm font-semibold mb-6">{item.number}</p>
              <h3 className="text-xl font-bold whitespace-pre-line leading-tight text-black">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* IMAGE SWITCH */}
        <div className="relative h-[70vh] overflow-hidden">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (bgRefs.current[i] = el)}
              className="absolute inset-0"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ACTIVE CARD STYLE */}
      <style>{`
         .reason-item {
          position: relative;
        }

        .reason-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 4px;
          background: #000;
          transition: width 0.4s ease;
        }

        .reason-item.active::before {
          width: 100%;
        }

        .reason-item.active {
          background-color: #f9f9f9;
        }
      `}</style>
    </section>
  );
};
