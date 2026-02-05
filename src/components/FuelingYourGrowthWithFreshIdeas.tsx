import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FuelingYourGrowthWithFreshIdeas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imagesWrapper = imagesRef.current;
    if (!container || !imagesWrapper) return;

    const isMobile = window.innerWidth < 768;

    const imgs = gsap.utils.toArray<HTMLImageElement>(
      imagesWrapper.querySelectorAll("img")
    );

    if (imgs.length === 0) return;

    imgs.forEach((img, i) => {
      gsap.set(img, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        y: i === 0 ? 0 : isMobile ? 90 : 150,
        autoAlpha: i === 0 ? 1 : 0,
      });
    });

    const tl = gsap.timeline();

    imgs.forEach((img, i) => {
      if (i !== 0) {
        tl.to(
          img,
          {
            y: 0,
            autoAlpha: 1,
            duration: isMobile ? 0.8 : 1.2,
            ease: "power2.out",
          },
          "+=0.15"
        );

        tl.to(
          imgs[i - 1],
          {
            autoAlpha: 0,
            duration: isMobile ? 0.7 : 1.0,
            ease: "power2.out",
          },
          "<"
        );
      }
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: container,
      start: "top top",

      // 🚀 MUCH SHORTER SCROLL ON MOBILE
      end: isMobile
        ? `+=${imgs.length * window.innerHeight * 0.55}`
        : `+=${imgs.length * window.innerHeight}`,

      scrub: isMobile ? 0.35 : 1,
      pin: true,
      anticipatePin: 1,
    });
  }, []);

  return (
    <section ref={containerRef} className="w-full">

      {/* MAIN FLEX */}
      <div className="flex flex-col md:flex-row w-full">

        {/* LEFT IMAGE SLIDER */}
        <div
          ref={imagesRef}
          className="
            relative overflow-hidden
            w-full md:w-1/2
            min-h-[60vh] sm:min-h-[70vh] md:min-h-[100svh]
          "
        >
          <img src="/images/fresh-idea-3.webp" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80" />
          <img src="/images/fresh-idea-2.webp" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 bg-white">
          <div
            className="
              md:sticky top-0
              min-h-[auto] md:min-h-[100svh]
              flex flex-col justify-center
              px-6 sm:px-10 md:px-20
              py-12 md:py-0
            "
          >
            <h1 className="font-extrabold text-black leading-[1.1] mb-6 text-[36px] sm:text-[45px] md:text-[55px]">
              EMPOWERING <br />
              DIGITAL GROWTH <br />
              FOR STARTUPS
            </h1>

            <p className="text-[15px] sm:text-[17px] text-gray-600 leading-7 max-w-[480px] mb-8">
              We blend performance with creativity to offer powerful digital marketing strategies—SEO,
              branding, and social media solutions that get results for global brands.
            </p>

            <div className="mb-10">
              <p className="text-[16px] sm:text-[18px] font-medium text-black">
                +91 91703 14141
              </p>
              <a
                href="mailto:info@midis.in"
                className="text-black border-b border-gray-700 pb-[3px] text-[14px] sm:text-[16px]"
              >
                INFO@MIDIS.IN
              </a>
            </div>

            <button
              className="
                bg-black text-white
                px-6 sm:px-8 py-3 sm:py-4
                rounded-full text-[15px] sm:text-[16px]
                font-semibold w-fit hover:bg-gray-900
                transition
              "
            >
              LET’S COLLABORATE →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelingYourGrowthWithFreshIdeas;
