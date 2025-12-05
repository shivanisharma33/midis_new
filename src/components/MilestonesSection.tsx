import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Count-up helper
const animateValue = (el: any, start: number, end: number, duration: number) => {
  let startTimestamp: number | null = null;

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;

    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    el.innerText = Math.floor(progress * (end - start) + start);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

// Milestones
const milestones = [
  { value: "98%", label: "Creative Ideas Delivered" },
  { value: "15m", label: "Social Media Impressions" },
  { value: "32%", label: "High-Value Projects Delivered" },
  { value: "$423k", label: "" },
];

export const MilestonesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1️⃣ PIN RIGHT SIDE CONTENT
      ScrollTrigger.create({
        trigger: ".milestone-right",
        start: "top top",
        end: "bottom+=200% top",
        pin: true,
        pinSpacing: true,
      });

      // 2️⃣ ADVANCED PARALLAX (Zoom + Upward Motion)
      gsap.utils.toArray(".milestone-img-wrapper img").forEach((img: any) => {
        gsap.fromTo(
          img,
          {
            scale: 1.25, // slightly zoomed in
            y: 120,      // move down
          },
          {
            scale: 1.05, // zoom out
            y: -120,     // move up
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });

      // 3️⃣ FADE + SLIDE REVEAL
      gsap.from(".milestone-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 4️⃣ COUNT UP NUMBERS
      const numberItems = gsap.utils.toArray(".milestone-number");

      numberItems.forEach((item: any) => {
        const finalValue = item.getAttribute("data-value");

        ScrollTrigger.create({
          trigger: item,
          start: "top 85%",
          once: true,
          onEnter: () => {
            let cleaned = finalValue.replace(/[^0-9]/g, "");
            animateValue(item, 0, parseInt(cleaned), 1200);
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[200px] bg-background relative">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* LEFT — PARALLAX IMAGES */}
        <div className="space-y-20">

          <div className="milestone-img-wrapper overflow-hidden aspect-video rounded-xl">
            <img
              src="/images/milestone.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="milestone-img-wrapper overflow-hidden w-3/4 rounded-xl">
            <img
              src="/images/milestone-2.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* RIGHT — PINNED CONTENT */}
        <div className="milestone-right sticky top-32 h-fit">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Milestones That Showcase Our Excellence
          </p>

          <h2 className="text-heading-lg font-playfair text-foreground mb-12">
            Success Through Our Clients
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-10 border-t border-border pt-10">
            {milestones.map((m, i) => (
              <div key={i} className="milestone-item">
                <span
                  className="milestone-number text-display font-anton text-foreground block mb-2"
                  data-value={m.value}
                >
                  0
                </span>

                {m.label && (
                  <p className="text-sm text-muted-foreground">{m.label}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
