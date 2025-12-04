import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'branding',
    description: 'Lorem ipsum dolor sit amet consectetur. Aliquet donec rutrum pellentesque a pellentesque non. Nullam dignissim urna eu ultrices risus. Sit at odio facilisi sit eget auctor.',
    tags: ['Packaging', 'Enclosure', 'Labeling'],
    image: '/images/service-branding.webp',
  },
  {
    number: '02',
    title: 'ui design',
    description: 'Lorem ipsum dolor sit amet consectetur. Aliquet donec rutrum pellentesque a pellentesque non. Nullam dignissim urna eu ultrices risus. Sit at odio facilisi sit eget auctor.',
    tags: ['Labeling', 'Packaging', 'Containerization'],
    image: '/images/service-ui.webp',
  },
  {
    number: '03',
    title: 'development',
    description: 'Lorem ipsum dolor sit amet consectetur. Aliquet donec rutrum pellentesque a pellentesque non. Nullam dignissim urna eu ultrices risus. Sit at odio facilisi sit eget auctor.',
    tags: ['Boxing', 'Packaging', 'Enclosure'],
    image: '/images/service-dev.webp',
  },
  {
    number: '04',
    title: 'strategy',
    description: 'Lorem ipsum dolor sit amet consectetur. Aliquet donec rutrum pellentesque a pellentesque non. Nullam dignissim urna eu ultrices risus. Sit at odio facilisi sit eget auctor.',
    tags: ['Wrapping', 'Packaging', 'Containerization'],
    image: '/images/service-strategy.webp',
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Service Items */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="service-item border-t border-border"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <a href="#" className="block py-8 lg:py-12 group">
                <div className="flex items-start justify-between gap-8">
                  {/* Left Side */}
                  <div className="flex items-start gap-8 lg:gap-16">
                    <span className="text-sm text-muted-foreground">{service.number}</span>
                    <div>
                      <h3 className="text-heading-md lg:text-heading-lg font-playfair text-foreground mb-4 flex items-center gap-4">
                        {service.title}
                        <img src="/images/white-arrow.svg" alt="" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="text-body text-muted-foreground mb-4 max-w-lg">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                <span key={tag} className="text-xs text-muted-foreground border border-border px-3 py-1">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="hidden lg:block w-64 h-40 flex-shrink-0"
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
