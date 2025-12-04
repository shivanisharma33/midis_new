import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { value: '98%', label: 'Creative Ideas Delivered' },
  { value: '15m', label: 'Social Media Impressions' },
  { value: '32%', label: 'High-Value Projects Delivered' },
  { value: '$423k', label: '' },
];

export const MilestonesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 1️⃣ PINNING THE RIGHT SIDE TEXT LIKE CREARIST
      ScrollTrigger.create({
        trigger: ".milestone-right",
        start: "top top",
        end: "bottom+=200% top",
        pin: true,
        pinSpacing: false,
      });

      // 2️⃣ PARALLAX SCROLL FOR LEFT IMAGES
      gsap.utils.toArray(".milestone-img-wrapper").forEach((img: any) => {
        gsap.fromTo(
          img,
          { y: 150 },
          {
            y: -150,
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
            ease: "none",
          }
        );
      });

      // 3️⃣ FADE + SLIDE IN STATS ON SCROLL
      gsap.from(".milestone-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-[200px] bg-background relative">

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT SCROLLING IMAGES (PARALLAX) */}
        <div className="space-y-20">

          <div className="milestone-img-wrapper overflow-hidden aspect-video rounded-xl">
            <img
              src="/images/milestone.webp"
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </div>

          <div className="milestone-img-wrapper overflow-hidden w-3/4 rounded-xl">
            <img
              src="/images/milestone-2.webp"
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </div>

        </div>

        {/* RIGHT PINNED TEXT (FIXED DURING SCROLL) */}
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
                <span className="text-display font-anton text-foreground block mb-2">
                  {m.value}
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
