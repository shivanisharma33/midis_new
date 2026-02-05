import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* =========================
         TOP CTA TEXT
      ========================= */
      gsap.from(".footer-title", {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".footer-title",
          start: "top 85%",
        },
      });

      /* =========================
         CTA BUTTON
      ========================= */
      gsap.from(".footer-btn", {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-btn",
          start: "top 90%",
        },
      });

      /* =========================
         FOOTER COLUMNS
      ========================= */
      gsap.from(".footer-col", {
        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-grid",
          start: "top 85%",
        },
      });

      /* =========================
         COPYRIGHT
      ========================= */
      gsap.from(".footer-copy", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-copy",
          start: "top 95%",
        },
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-[#0C0E12] text-white pt-28 pb-12 px-6 md:px-16 lg:px-24"
    >
      {/* ================= TOP CTA ================= */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-10">
        <h1 className="footer-title text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-[700px]">
          LET’S BUILD SOMETHING AMAZING TOGETHER
        </h1>

        <button className="footer-btn bg-white text-black px-10 py-5 rounded-full font-semibold text-sm tracking-wider hover:bg-gray-200 transition-all flex items-center gap-2">
          CONTACT US
          <span className="text-lg">↗</span>
        </button>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="footer-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16 pb-10">

        <div className="footer-col">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/work" className="hover:text-white transition">Our Work</a></li>
            <li><a href="/services2" className="hover:text-white transition">Our Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white transition">Help Center</li>
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">Terms & Conditions</li>
            <li className="hover:text-white transition">Contact Support</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Email: info@example.com</li>
            <li>Phone: (888) 123 4560</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer-copy border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
};
