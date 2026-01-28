import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "WEB DESIGNING",
    description:
      "Transform your vision into stunning digital experiences. Our expert designers craft responsive, user-centric interfaces that captivate your audience and elevate your brand's online presence with cutting-edge aesthetics.",
    tags: ["UI Design", "UX Strategy", "Responsive Design", "Prototyping"],
    image: "/images/service-branding.webp",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description:
      "Build powerful digital solutions with our full-stack development expertise. From concept to deployment, we create robust, scalable, and high-performing websites that drive growth and deliver exceptional user experiences.",
    tags: ["Frontend", "Backend", "Full Stack", "API Integration"],
    image: "/images/service-ui.webp",
  },
  {
    number: "03",
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "Dominate search rankings and drive organic traffic with our strategic SEO solutions. We optimize every aspect of your digital presence to increase visibility, engage your target audience, and maximize conversions.",
    tags: ["On-Page SEO", "Technical SEO", "Content Strategy", "Link Building"],
    image: "/images/service-dev.webp",
  },
  {
    number: "04",
    title: "GRAPHIC DESIGNING",
    description:
      "Create compelling visual narratives that resonate with your audience. Our creative designers blend artistry with strategy to produce captivating graphics, branding assets, and visual content that sets you apart.",
    tags: ["Branding", "Logo Design", "Marketing Materials", "Visual Identity"],
    image: "/images/service-strategy.webp",
  },
  {
    number: "05",
    title: "GOOGLE ADS & META ADS",
    description:
      "Maximize your advertising ROI with data-driven paid campaigns. Our specialists craft and optimize high-converting ads across Google and Meta platforms.",
    tags: ["Google Ads", "Facebook Ads", "Campaign Management", "Analytics"],
    image: "/images/service-strategy.webp",
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // ✅ Responsive detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ ScrollTrigger (desktop only)
  useEffect(() => {
    if (!sectionRef.current || isMobile) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".service-item");

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 60%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="bg-background antialiased"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.number}
              className="service-item border-t border-border"
            >
              <div className="py-12 sm:py-16">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">

                  {/* LEFT CONTENT */}
                  <div className="flex gap-4 sm:gap-6 w-full">
                    <span className="text-xs sm:text-sm text-muted-foreground pt-2">
                      {service.number}
                    </span>

                    <div className="w-full">

                      {/* TITLE */}
                      <h3
                        className="
                          font-bold tracking-tight leading-[1.05] mb-4
                          text-transparent bg-clip-text
                          bg-gradient-to-r from-[#bfbfbf] to-[#6d6d6d]
                          text-[clamp(1.8rem,8vw,5rem)]
                        "
                      >
                        {service.title}
                      </h3>

                      {/* MOBILE IMAGE */}
                      <div className="md:hidden mb-5">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-40 sm:h-48 object-cover rounded-lg"
                        />
                      </div>

                      {/* DESCRIPTION + TAGS */}
                      <AnimatePresence>
                        {(isActive || isMobile) && (
                          <motion.div
                            initial={{ y: 16, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 16, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          >
                            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mb-4">
                              {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] sm:text-xs border border-border px-3 py-1 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* DESKTOP IMAGE */}
                  <AnimatePresence>
                    {!isMobile && isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 10 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="hidden md:block w-64 lg:w-72 h-40 lg:h-48 flex-shrink-0"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
