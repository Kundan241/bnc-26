import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-playfair font-bold text-xl text-indigo tracking-wider">BOS</span>
          <span className="hidden sm:block w-px h-5 bg-gray-300"></span>
          <span className="hidden sm:block font-inter text-xs font-medium text-gray-400 tracking-widest uppercase">
            Bharat Office Setu
          </span>
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {["Vision","Agenda","Speakers","Venue"].map(s => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className="font-inter text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-indigo transition-colors"
            >
              {s}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#register"
          className="inline-flex items-center gap-2 bg-indigo hover:bg-indigo-700 text-white font-inter text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-200 hover:shadow-lg hover:-translate-y-px"
        >
          Request Invite
        </a>
      </div>
    </motion.header>
  );
}
