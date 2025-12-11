import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0C0E12] text-white pt-28 pb-12 px-6 md:px-16 lg:px-24">
      
      {/* ================= TOP CTA ================= */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 gap-10">
        
        {/* LEFT BIG TEXT */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-[700px]">
          LET’S BUILD SOMETHING AMAZING TOGETHER
        </h1>

        {/* CTA BUTTON */}
        <button className="bg-white text-black px-10 py-5 rounded-full font-semibold text-sm tracking-wider hover:bg-gray-200 transition-all flex items-center gap-2">
          CONTACT US
          <span className="text-lg">↗</span>
        </button>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16 pb-10">

        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Our Services</li>
            <li className="hover:text-white transition">Case Studies</li>
            <li className="hover:text-white transition">Blogs</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white transition">Help Center</li>
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">Terms & Conditions</li>
            <li className="hover:text-white transition">Contact Support</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Email: info@example.com</li>
            <li>Phone: (888) 123 4560</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>

        {/* Column 4 — Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-6 text-gray-400">
            <a className="hover:text-white transition" href="#">Instagram</a>
            <a className="hover:text-white transition" href="#">LinkedIn</a>
            <a className="hover:text-white transition" href="#">Twitter</a>
          </div>
        </div>

      </div>

      {/* ================= BOTTOM COPYRIGHT ================= */}
      <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </div>

    </footer>
  );
};
