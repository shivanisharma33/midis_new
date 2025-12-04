import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { icon: '/images/facebook.svg', label: 'facebook', href: 'https://facebook.com' },
  { icon: '/images/instagram.svg', label: 'Instagram', href: 'https://instagram.com' },
  { icon: '/images/linkedin.svg', label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: '/images/dribbble.svg', label: 'dribbble', href: 'https://dribbble.com' },
];

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-section bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        {/* CTA */}
        <div className="footer-content text-center mb-16">
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
            let's work together
          </p>
          <motion.a
            href="#"
            className="btn-animated inline-flex items-center gap-4 px-8 py-4 border border-foreground text-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <span className="btn-animated-content">
              <span>start your new project</span>
              <img src="/images/button-arrow.svg" alt="" className="w-4 h-4 invert" />
            </span>
          </motion.a>
        </div>

        {/* Contact Info */}
        <div className="footer-content grid md:grid-cols-3 gap-12 mb-16">
          {/* Email */}
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
              say hello!
            </p>
            <a href="mailto:info@example.com" className="text-lg text-foreground link-underline">
              info@example.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
              contact us
            </p>
            <a href="tel:8881234560" className="text-lg text-foreground link-underline">
              (888) 123 4560
            </a>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">
              Location
            </p>
            <p className="text-lg text-foreground">
              410 Sandtown, California 94001, USA
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-content flex flex-wrap justify-center gap-6 mb-16">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
            >
              <img src={link.icon} alt={link.label} className="w-5 h-5 invert" />
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="footer-content flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <a href="/" className="text-lg font-playfair text-foreground">Crearist</a>
          
          <p className="text-sm text-muted-foreground">
            Designed by <a href="#" className="text-foreground link-underline">Radiant Templates,</a> Powered by <a href="https://webflow.com" className="text-foreground link-underline">Webflow</a>
          </p>

          <a href="/license" className="text-sm text-foreground link-underline">License</a>
        </div>
      </div>
    </footer>
  );
};
