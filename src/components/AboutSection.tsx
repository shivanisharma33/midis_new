import { useRef } from "react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center bg-white overflow-hidden"
    >
      {/* ✨ BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-400/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center py-32">
        
        {/* TAGLINE */}
        <p
          className="
            uppercase
            font-semibold
            tracking-[0.3em]
            text-[0.9rem]
            sm:text-[1rem]
            md:text-[1.1rem]
            text-gray-500
            mb-6
          "
        >
          Welcome to MIDIS
        </p>

        {/* DIVIDER */}
        <div className="flex justify-center mb-10">
          <span className="h-[2px] w-14 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
        </div>

        {/* MAIN HEADING */}
        <h2
          className="
            font-extrabold
            tracking-tight
            leading-[1.15]
            text-[2rem]
            sm:text-[2.8rem]
            md:text-[3.6rem]
            lg:text-[4.6rem]
            xl:text-[5.4rem]
            text-slate-900
          "
        >
          <span className="block">
            We Deliver
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              {" "}Innovative Solutions
            </span>
          </span>

          <span className="block">
            To Help Your Startup Thrive
          </span>

          <span className="block">
            By Strategically Building
          </span>

          <span className="block text-gray-600 font-medium">
            Its Presence In The Market.
          </span>
        </h2>
      </div>
    </section>
  );
};
