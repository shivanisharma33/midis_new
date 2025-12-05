import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Services', to: '/services' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Case Study', to: '/case-study' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4 bg-black/70 backdrop-blur-md">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/midis final logo-01.png"
            alt="Midis Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Center Navigation (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 bg-secondary/80 backdrop-blur-sm rounded-full px-6 py-2">

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
                isActive(item.to)
                  ? 'text-foreground'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Book a Meeting — CTA Button */}
          <Link
            to="/book-meeting"
            className="ml-4 px-4 py-2 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition"
          >
            Book a Meeting
          </Link>
        </div>

        {/* Right side placeholder (for future mobile menu / icons) */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
};