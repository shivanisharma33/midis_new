import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export const CreateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".create-heading span", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = Math.max(80, Math.min(x, rect.width - 80));
    y = Math.max(100, Math.min(y, rect.height - 100));

    setMousePosition({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      className="
        py-16 sm:py-20 md:py-section
        bg-background relative overflow-hidden
      "
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Hover Image */}
      <motion.div
        className="
          pointer-events-none absolute md:fixed
          z-50 w-40 h-52 xs:w-48 xs:h-64 sm:w-56 sm:h-72 md:w-64 md:h-80
        "
        style={{
          left: mousePosition.x - 80,
          top: mousePosition.y - 120,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.85,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <img
          src="/images/hover-image.webp"
          alt="Hover"
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2
          className="
            create-heading
            inline-flex flex-wrap justify-center
            gap-x-14 gap-y-10
            text-3xl xs:text-4xl sm:text-5xl md:text-display lg:text-hero
            font-anton
            text-foreground
            text-center
            leading-[1.1] sm:leading-[1.15] md:leading-[1.2]
            overflow-hidden
          "
        >
          <span className="inline-block">Let's</span>
          <span className="inline-block">Create</span>
          <span className="inline-block">Something</span>
          <span className="inline-block">Extraordinary!</span>
        </h2>
      </div>
    </section>
  );
};
