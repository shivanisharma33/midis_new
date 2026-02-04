import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "@/data/navigation";
import { SOCIAL_PLATFORMS } from "@/constants/contact";
import { useScrollHide } from "@/hooks/useScrollHide";

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hideNav = useScrollHide();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50
        bg-transparent
        transition-transform duration-300 ease-in-out
        ${hideNav ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="relative max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* ================= LOGO (LEFT) ================= */}
          <Link to="/" className="flex items-center z-10">
            <img
              src="/images/midis final logo-01.png"
              alt="Midis Logo"
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* ================= CENTER WHITE PILL ================= */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center bg-white rounded-full px-6 py-2 gap-6 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm font-medium transition-colors ${isActive(item.to)
                  ? "text-black"
                  : "text-black/60 hover:text-black"
                  }`}
              >
                {item.label}
              </Link>
            ))}

            <button className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="hidden lg:flex items-center gap-3 z-10">
            {SOCIAL_PLATFORMS.map((item) => (
              <button
                key={item}
                className="px-4 py-2 rounded-full border border-white/30 text-xs text-white hover:bg-white hover:text-black transition"
              >
                {item}
              </button>
            ))}


          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white z-10"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="absolute inset-0 bg-black/80"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-80 bg-black p-6 pt-24
          transition-transform duration-300
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-white/80 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
