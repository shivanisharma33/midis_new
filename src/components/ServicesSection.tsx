import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Web Designing',
    description: 'Creative, user-friendly designs that enhance your brand’s online presence.',
    tags: ['Packaging', 'Enclosure', 'Labeling'],
    image: '/images/service-branding.webp',
  },
  {
    number: '02',
    title: 'Web Development',
    description: 'Robust, scalable, and high-performing websites built to elevate your brand and user experience.',
    tags: ['Labeling', 'Packaging', 'Containerization'],
    image: '/images/service-ui.webp',
  },
  {
    number: '03',
    title: 'Search Engine Optimization',
    description: 'Boost your website visibility, traffic, and ranking on Google with our expert SEO solutions.',
    tags: ['Boxing', 'Packaging', 'Enclosure'],
    image: '/images/service-dev.webp',
  },
  {
    number: '04',
    title: 'Graphic Designing',
    description: 'Captivating visuals that elevate your brand and grab attention instantly.',
    tags: ['Wrapping', 'Packaging', 'Containerization'],
    image: '/images/service-strategy.webp',
  },
  {
    number: '05',
    title: 'Google Ads & Meta Ads',
    description: 'Maximize your reach and ROI with high-performing ads across Google and Meta platforms.',
    tags: ['Ads', 'Marketing', 'Paid Campaigns'],
    image: '/images/service-strategy.webp',
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ===============================
         HEADING ANIMATION
      =============================== */
      gsap.from('.services-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      });

      /* ===============================
         INITIAL ITEM REVEAL
      =============================== */
      gsap.from('.service-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      /* ===============================
         ONE-BY-ONE SCROLL ACTIVATION
      =============================== */
      const items = gsap.utils.toArray<HTMLElement>('.service-item');

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top center',
          end: 'bottom center',
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
      className="py-16 sm:py-20 md:py-section bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">

        {/* ===============================
            SECTION HEADING
        =============================== */}
        <div className="services-heading mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-muted-foreground mb-3">
            Our Services
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl xl:text-[5.5rem] font-anton text-foreground leading-[1.15] sm:leading-[1.1]">
            What We Offer
          </h2>
        </div>

        {/* ===============================
            SERVICES LIST
        =============================== */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="service-item border-t border-border"
            >
              <div className="block py-6 sm:py-8 lg:py-12">

                <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8 md:gap-12">

                  {/* LEFT CONTENT */}
                  <div className="flex items-start gap-4 sm:gap-8 md:gap-16 w-full">
                    <span className="text-xs sm:text-sm text-muted-foreground">
                      {service.number}
                    </span>

                    <div className="w-full">
                      <h3
                        className="
                          text-[2.2rem]
                          xs:text-[2.8rem]
                          sm:text-[3.5rem]
                          md:text-[5rem]
                          lg:text-[6rem]
                          font-extrabold
                          leading-none
                          tracking-tight
                          bg-gradient-to-r from-[#bfbfbf] to-[#6d6d6d]
                          text-transparent bg-clip-text
                          mb-3 sm:mb-4
                        "
                      >
                        {service.title}
                      </h3>

                      {/* EXPANDED CONTENT */}
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="text-[14px] sm:text-base text-muted-foreground mb-3 sm:mb-4 max-w-lg">
                              {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] sm:text-xs text-muted-foreground border border-border px-2 sm:px-3 py-1"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* MOBILE IMAGE */}
                            <div className="sm:hidden">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover rounded-lg"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* DESKTOP IMAGE */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="hidden md:block w-56 lg:w-72 h-40 lg:h-48 flex-shrink-0"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
