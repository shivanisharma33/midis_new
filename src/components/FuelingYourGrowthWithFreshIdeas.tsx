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
        y: i === 0 ? 0 : 150,
        autoAlpha: i === 0 ? 1 : 0
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
            duration: 1.2,
            ease: "power2.out",
          },
          "+=0.2"
        );

        tl.to(
          imgs[i - 1],
          {
            autoAlpha: 0,
            duration: 1.0,
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
      end: `+=${imgs.length * window.innerHeight}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    });
  }, []);

  return (
    <section ref={containerRef} className="w-full">

      {/* MAIN FLEX (Desktop) → COLUMN (Mobile) */}
      <div className="flex flex-col md:flex-row w-full">

        {/* LEFT IMAGE SLIDER */}
        <div
          ref={imagesRef}
          className="
            relative overflow-hidden
            w-full md:w-1/2
            min-h-[60vh] sm:min-h-[70vh] md:h-screen
          "
        >
          <img src="./images/fresh-idea-3.webp" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80" />
          <img src="./images/fresh-idea-2.webp" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 bg-white">
          <div
            className="
              md:sticky top-0 
              h-auto md:h-screen 
              flex flex-col justify-center
              px-6 sm:px-10 md:px-20 
              py-12 md:py-0
            "
          >
            <h1
              className="
                font-extrabold text-black leading-[1.1] mb-6
                text-[36px] sm:text-[45px] md:text-[55px]
              "
            >
              FUELING YOUR <br />
              GROWTH WITH <br />
              FRESH IDEAS
            </h1>

            <p
              className="
                text-[15px] sm:text-[17px]
                text-gray-600 leading-7 
                max-w-[480px] mb-8
              "
            >
              We combine creativity and strategy to deliver innovative solutions,
              helping your business thrive and achieve sustainable growth with fresh ideas.
            </p>

            <div className="mb-10">
              <p className="text-[16px] sm:text-[18px] font-medium text-black">(888) 123 4560</p>
              <a href="#" className="text-black border-b border-gray-700 pb-[3px] text-[14px] sm:text-[16px]">
                INFO@EXAMPLE.COM
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
