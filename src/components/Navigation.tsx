import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Services', to: '/services2' },   // SIMPLE LINK
  { label: 'Blogs', to: '/blogs' },
  { label: 'Case Study', to: '/case-study' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-3 sm:py-4 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">

          {/* LOGO */}
          <Link to="/" className="flex items-center relative z-50" onClick={closeMobileMenu}>
            <img
              src="/images/midis final logo-01.png"
              alt="Midis Logo"
              className="h-8 sm:h-10 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-6 bg-secondary/80 backdrop-blur-sm rounded-full px-6 py-2">

            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.to)
                    ? "text-foreground"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              to="/book-meeting"
              className="ml-4 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:scale-105 transition-all duration-300"
            >
              Book a Meeting
            </Link>
          </div>

          {/* TABLET CTA */}
          <Link
            to="/book-meeting"
            className="hidden md:block lg:hidden px-3 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-orange-400 transition-all duration-300"
          >
            Book Meeting
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative z-50 p-2 text-white hover:text-orange-400 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        {/* MOBILE SLIDE-IN MENU */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-l border-white/10 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-16 sm:pt-20 px-6 space-y-1">

            {/* MOBILE NAV ITEMS */}
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
              >
                {item.label}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <Link
              to="/book-meeting"
              onClick={closeMobileMenu}
              className="mt-6 block w-full px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center font-semibold shadow-lg shadow-orange-500/25"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
