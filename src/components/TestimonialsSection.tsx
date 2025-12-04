import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'David korren',
    role: 'designer',
    text: '"Their team brought creativity and professionalism to every stage of our project, from initial concept to final launch. They truly understood our vision and transformed it into a stunning, user-friendly.',
  },
  {
    name: 'Samuel Clark',
    role: 'Product manager',
    text: '"Their team brought creativity and professionalism to every stage of our project, from initial concept to final launch. They truly understood our vision and transformed it into a stunning, user-friendly.',
  },
  {
    name: 'David korren',
    role: 'designer',
    text: '"Their team brought creativity and professionalism to every stage of our project, from initial concept to final launch. They truly understood our vision and transformed it into a stunning, user-friendly.',
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section bg-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/testimonial-bg.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Heading */}
          <div className="testimonial-heading">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-heading-xl font-playfair text-foreground mb-4">
              From Our
            </h2>
            <h2 className="text-heading-xl font-anton text-foreground mb-8">
              Customers
            </h2>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-foreground">4.8</span>
              <img src="/images/star.svg" alt="Star" className="w-5 h-5" />
              <span className="text-sm text-muted-foreground">(25+ reviews)</span>
            </div>

            <p className="text-body text-text-light mt-6 max-w-md">
              Enhancing top-tier companies with innovative UI design solutions!
            </p>
          </div>

          {/* Right - Testimonials Slider */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-8 lg:p-12"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-lg font-playfair text-foreground">{testimonials[activeIndex].name}</span>
                  <span className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</span>
                </div>

                <img src="/images/quote.svg" alt="Quote" className="w-8 h-8 mb-4" />

                <p className="text-body-lg text-text-light leading-relaxed mb-6">
                  {testimonials[activeIndex].text}
                </p>

                <img src="/images/star.svg" alt="Star" className="w-5 h-5" />
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-foreground' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
