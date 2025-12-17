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
      "Creative, user-friendly designs that enhance your brand’s online presence Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Packaging", "Enclosure", "Labeling"],
    image: "/images/service-branding.webp",
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description:
      "Robust, scalable, and high-performing websites built to elevate your brand and user experience Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Labeling", "Packaging", "Containerization"],
    image: "/images/service-ui.webp",
  },
  {
    number: "03",
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "Boost your website visibility, traffic, and ranking on Google with our expert SEO solutions Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Boxing", "Packaging", "Enclosure"],
    image: "/images/service-dev.webp",
  },
  {
    number: "04",
    title: "GRAPHIC DESIGNING",
    description:
      "Captivating visuals that elevate your brand and grab attention instantly Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Wrapping", "Packaging", "Containerization"],
    image: "/images/service-strategy.webp",
  },
  {
    number: "05",
    title: "GOOGLE ADS & META ADS",
    description:
      "Maximize your reach and ROI with high-performing ads across Google and Meta platforms Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Ads", "Marketing", "Paid Campaigns"],
    image: "/images/service-strategy.webp",
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".service-item");

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background font-playfair antialiased"
    >
      <div className="container mx-auto px-6 lg:px-12">

        {services.map((service, index) => (
          <div
            key={service.number}
            className="service-item border-t border-border"
          >
            <div className="py-16">
              <div className="flex flex-col md:flex-row gap-12">

                {/* LEFT CONTENT */}
                <div className="flex gap-6 w-full relative z-10">
                  <span className="text-sm text-muted-foreground pt-3">
                    {service.number}
                  </span>

                  <div className="relative w-full">

                    {/* TITLE */}
                    <h3
                      className="
                        font-bold tracking-tight
                        leading-[1.05]
                        mb-4
                        text-transparent bg-clip-text
                        bg-gradient-to-r from-[#bfbfbf] to-[#6d6d6d]
                        text-[clamp(2.4rem,6vw,6rem)]
                      "
                    >
                      {service.title}
                    </h3>

                    {/* ✅ MOBILE IMAGE */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.4 }}
                          className="md:hidden mb-6"
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* DESCRIPTION + TAGS */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 30, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                         <p className="text-base text-muted-foreground max-w-lg mb-4 ">
  {service.description}
</p>


                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs border border-border px-3 py-1"
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

                {/* ✅ DESKTOP IMAGE */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="hidden md:block relative z-20 w-72 h-48 flex-shrink-0"
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
        ))}
      </div>
    </section>
  );
};
