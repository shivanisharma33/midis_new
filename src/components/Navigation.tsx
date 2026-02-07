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
        transition-all duration-300 ease-in-out
        ${hideNav ? "-translate-y-full" : "translate-y-0"}
        lg:bg-transparent lg:backdrop-blur-none lg:border-none
        bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]`}
      >
        <div className="relative max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* ================= LOGO (LEFT) ================= */}
          <Link to="/" className="flex items-center z-10">
            <img
              src="/images/midis final logo-01.png"
              alt="Midis Logo"
              className="h-10 lg:h-14 w-auto object-contain drop-shadow-md"
            />
          </Link>

          {/* ================= CENTER WHITE PILL (DESKTOP) ================= */}
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

          {/* ================= RIGHT SIDE (DESKTOP) ================= */}
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
            className="lg:hidden p-2 text-white/90 hover:text-white transition-colors z-20 bg-white/10 rounded-full backdrop-blur-md border border-white/10 shadow-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU (GLASS OVERLAY) ================= */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-[#0C0E12]/80 backdrop-blur-2xl border-l border-white/10 p-8 pt-32
          shadow-[-20px_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Menu Items with staggered reveal */}
          <div className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl font-black uppercase tracking-tighter text-white/90 hover:text-white transition-all transform hover:translate-x-2
                  ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between w-full group">
                  <span>{item.label}</span>
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" />
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Footer Info */}
          <div
            className={`absolute bottom-10 left-8 right-8 transition-all duration-700 delay-500 
            ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="w-full h-px bg-white/10 mb-6" />
            <div className="flex justify-between items-center text-white/50 text-[10px] uppercase tracking-widest font-bold">
              <span>Follow Us</span>
              <div className="flex gap-4">
                {SOCIAL_PLATFORMS.map(p => (
                  <span key={p} className="hover:text-white cursor-pointer transition-colors">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
