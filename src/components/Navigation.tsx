import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Services', to: '/services' },
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
      {/* NOTE: bg-black/70 removed -> now transparent bar with blur + border */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-12 py-3 sm:py-4 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50" onClick={closeMobileMenu}>
            <img
              src="/images/midis final logo-01.png"
              alt="Midis Logo"
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 bg-secondary/80 backdrop-blur-sm rounded-full px-6 py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative ${
                  isActive(item.to)
                    ? 'text-foreground'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive(item.to) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400 rounded-full" />
                )}
              </Link>
            ))}

            <Link
              to="/book-meeting"
              className="ml-4 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
              Book a Meeting
            </Link>
          </div>

          {/* Tablet CTA */}
          <Link
            to="/book-meeting"
            className="hidden md:block lg:hidden px-3 sm:px-4 py-2 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-orange-400 transition-all duration-300"
          >
            Book Meeting
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden relative z-50 p-2 text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-80 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-l border-white/10 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-16 sm:pt-20 px-6">
            {/* Links */}
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium tracking-wide transition-all duration-300 rounded-lg ${
                    isActive(item.to)
                      ? 'text-white bg-orange-500/20 border-l-4 border-orange-400'
                      : 'text-white/80 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                  }`}
                  style={{
                    animation: `slideInRight 0.3s ease-out ${index * 0.05}s both`,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-6 sm:mt-8"
              style={{ animation: 'slideInRight 0.3s ease-out 0.3s both' }}
            >
              <Link
                to="/book-meeting"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center text-sm sm:text-base font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-orange-500/25"
              >
                Book a Meeting
              </Link>
            </div>

            {/* Social icons */}
            <div
              className="mt-auto pb-6 sm:pb-8"
              style={{ animation: 'slideInRight 0.3s ease-out 0.35s both' }}
            >
              <div className="border-t border-white/10 pt-6">
                <p className="text-xs text-white/50 mb-3 uppercase tracking-widest">
                  Connect with us
                </p>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="text-white/60 hover:text-orange-400 transition-colors p-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="#"
                    className="text-white/60 hover:text-orange-400 transition-colors p-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="text-white/60 hover:text-orange-400 transition-colors p-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};