import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Services' },
  { label: 'Blogs' },
  { label: 'Case Study' },
  { label: 'About' },
  { label: 'Contact' },
];

const socialLinks = ['FACEBOOK', 'INSTAGRAM', 'linkedin'];

export const Navigation = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6">
      <div className="flex items-center justify-between">

        {/* Updated LOGO IMAGE */}
        <a href="/" className="flex items-center">
          <img 
            src="http://127.0.0.1:5500/midis/image/midis%20final%20logo-01.png" 
            alt="Crearist Logo" 
            className="h-20 w-auto object-contain" 
          />
        </a>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-6 bg-secondary/80 backdrop-blur-sm rounded-full px-6 py-2">

          {navItems.map((item) => (
            <button
              key={item.label}
              className="px-3 py-2 text-sm font-medium tracking-wide text-foreground/90 hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}

          {/* Book a Meeting — CTA Button */}
          <button className="ml-4 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition">
            Book a Meeting
          </button>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Social Links */}
          {/* <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link}
                href={`https://${link.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden"
                onMouseEnter={() => setHoveredSocial(link)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <span className="text-xs tracking-wider font-medium text-foreground/90 hover:text-foreground transition-colors">
                  {link}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-foreground"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredSocial === link ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: hoveredSocial === link ? 0 : 1 }}
                />
              </a>
            ))}
          </div> */}

        </div>
      </div>
    </nav>
  );
};
