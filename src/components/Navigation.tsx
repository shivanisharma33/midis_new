import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Services', to: '/services', dropdown: true },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Case Study', to: '/case-study' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const serviceDropdownItems = [
  { label: 'Services', to: '/services' },
  { label: 'Services 2', to: '/services2' },
];

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

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
              <div key={item.label} className="relative">

                {/* DESKTOP SERVICES DROPDOWN BUTTON */}
                {item.dropdown ? (
                  <button
                    onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                    onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                    className={`px-3 py-2 text-sm font-medium flex items-center gap-1 transition-all duration-300 ${
                      isActive(item.to)
                        ? 'text-foreground'
                        : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive(item.to)
                        ? 'text-foreground'
                        : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* DESKTOP DROPDOWN MENU WITH SMOOTH ANIMATION */}
                {item.dropdown && (
                  <div
                    onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                    onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                    className={`
                      absolute left-0 mt-3 w-48 py-3 rounded-xl bg-[#111] border border-white/10 shadow-xl z-50
                      transition-all duration-500 ease-out origin-top
                      ${isDesktopDropdownOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-[0.95] translate-y-2 pointer-events-none"}
                    `}
                  >
                    {serviceDropdownItems.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white rounded-lg"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
              <div key={item.label}>

                {/* MOBILE SERVICES ACCORDION */}
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full px-4 py-3 text-left text-white/80 hover:text-white rounded-lg flex justify-between items-center"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-500 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* MOBILE DROPDOWN WITH SMOOTH ACCORDION */}
                    <div
                      className={`
                        ml-4 mt-2 space-y-1 transition-all duration-500 ease-out overflow-hidden
                        ${isServicesOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
                      `}
                    >
                      {serviceDropdownItems.map((s) => (
                        <Link
                          key={s.label}
                          to={s.to}
                          onClick={closeMobileMenu}
                          className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
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
