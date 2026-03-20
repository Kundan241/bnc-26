import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-white via-alabaster to-white"
    >
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage:"linear-gradient(#1E3A8A 1px,transparent 1px),linear-gradient(90deg,#1E3A8A 1px,transparent 1px)", backgroundSize:"60px 60px" }} />

      {/* Ornamental top line */}
      <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-10">
        <div className="w-16 h-px bg-saffron opacity-60" />
        <p className="font-inter text-xs font-semibold tracking-[5px] uppercase text-saffron">
          ✦ 10 April 2026 &middot; Constitution Club of India, New Delhi
        </p>
        <div className="w-16 h-px bg-saffron opacity-60" />
      </motion.div>

      {/* Main title */}
      <motion.h1 {...fadeUp(0.25)}
        className="font-playfair font-black text-onyx leading-none mb-3"
        style={{ fontSize:"clamp(46px,9vw,96px)", letterSpacing:"-0.01em" }}
      >
        BHARAT NIRMAN
      </motion.h1>

      <motion.div {...fadeUp(0.35)} className="flex items-center gap-4 mb-6">
        <div className="flex-1 max-w-[120px] h-px bg-indigo/25" />
        <span className="font-playfair italic text-xl text-indigo/70 tracking-[6px] uppercase">Conclave</span>
        <span className="font-inter text-xs font-bold tracking-[4px] text-indigo/50 bg-indigo/8 px-3 py-1 border border-indigo/15">2026</span>
        <div className="flex-1 max-w-[120px] h-px bg-indigo/25" />
      </motion.div>

      {/* Subtitle */}
      <motion.p {...fadeUp(0.45)}
        className="font-inter text-base md:text-lg font-normal text-gray-500 max-w-xl mb-2 leading-relaxed"
      >
        Nation Building Through Digital Business Infrastructure
      </motion.p>
      <motion.p {...fadeUp(0.5)}
        className="font-inter text-sm text-gray-400 max-w-lg mb-12 leading-relaxed"
      >
        and Domestic Capability Centers.
      </motion.p>

      {/* CTA */}
      <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="mailto:partners@bharatofficesetu.com"
          className="group inline-flex items-center gap-2 bg-indigo hover:bg-saffron text-white font-inter font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          Reserve Your Seat
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#vision"
          className="font-inter text-sm font-medium text-gray-400 hover:text-indigo flex items-center gap-2 transition-colors"
        >
          Learn more
          <span className="w-6 h-px bg-current" />
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div {...fadeUp(0.9)} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-inter text-[9px] tracking-[4px] uppercase text-gray-300">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-300 to-transparent animate-pulse" />
      </motion.div>

      {/* Stats ribbon */}
      <motion.div {...fadeUp(0.7)} className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex divide-x divide-gray-100">
          {[
            { num:"200+", label:"Entrepreneurs" },
            { num:"50+",  label:"Industry Leaders" },
            { num:"4",    label:"Hours of Insights" },
            { num:"1",    label:"National Mission" },
          ].map(({ num, label }) => (
            <div key={label} className="flex-1 text-center px-4 first:pl-0 last:pr-0">
              <div className="font-playfair font-bold text-2xl text-indigo">{num}</div>
              <div className="font-inter text-[10px] tracking-widest uppercase text-gray-400 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
