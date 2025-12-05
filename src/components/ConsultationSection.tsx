import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConsultationSection = () => {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const elements = elementsRef.current;

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 px-6 md:px-14 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SECTION */}
        <div>
          <h2
            ref={(el) => (elementsRef.current[0] = el)}
            className="text-white text-4xl md:text-5xl font-bold leading-tight"
          >
            Book a Consultation
          </h2>

          <p
            ref={(el) => (elementsRef.current[1] = el)}
            className="text-gray-200 mt-4 text-lg leading-relaxed"
          >
            Let’s discuss your goals and create a strategy designed specifically
            to help your business grow.
          </p>
        </div>

        {/* FORM SECTION */}
        <form
          ref={(el) => (elementsRef.current[2] = el)}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-xl"
        >
          {/* Name Field */}
          <div className="relative mb-7">
            <input
              type="text"
              required
              className="w-full bg-transparent border border-white/40 rounded-lg text-white px-4 py-3 outline-none peer"
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-white peer-valid:top-2 peer-valid:text-xs">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative mb-7">
            <input
              type="email"
              required
              className="w-full bg-transparent border border-white/40 rounded-lg text-white px-4 py-3 outline-none peer"
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-white peer-valid:top-2 peer-valid:text-xs">
              Email Address
            </label>
          </div>

          {/* Subject */}
          <div className="relative mb-7">
            <input
              type="text"
              required
              className="w-full bg-transparent border border-white/40 rounded-lg text-white px-4 py-3 outline-none peer"
            />
            <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-white peer-valid:top-2 peer-valid:text-xs">
              Subject
            </label>
          </div>

          {/* Message */}
          <div className="relative mb-7">
            <textarea
              required rows="4"
              className="w-full bg-transparent border border-white/40 rounded-lg text-white px-4 py-3 outline-none peer resize-none"
            ></textarea>

            <label className="absolute left-4 top-4 text-gray-300 text-sm pointer-events-none transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-white peer-valid:top-2 peer-valid:text-xs">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConsultationSection;
