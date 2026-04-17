import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ChiefGuest() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="chief-guest" className="py-28 px-6 bg-alabaster" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-inter text-[10px] font-semibold tracking-[5px] uppercase text-saffron mb-4">
            Honoured Presence
          </p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-onyx">
            Chief Guest
          </h2>
          <p className="font-inter text-sm text-gray-400 mt-3 tracking-wide">
            8th May 2026 &middot; Constitution Club of India, New Delhi
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-saffron" />
        </motion.div>

        {/* Chief Guest Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="group bg-white hover:bg-white border border-gray-100 hover:border-indigo/20 hover:shadow-xl p-10 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center max-w-md mx-auto"
        >
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-indigo/15 shadow-md mb-6 group-hover:border-saffron/40 transition-colors duration-300">
            <img
              src="/chief-guest.jpg"
              alt="Shri Satish Chandra Dubey"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="w-full h-full bg-indigo/10 flex items-center justify-center font-playfair font-bold text-3xl text-indigo/40">SD</div>';
              }}
            />
          </div>

          {/* Name */}
          <h3 className="font-playfair font-bold text-2xl text-onyx mb-2 group-hover:text-indigo transition-colors">
            Shri Satish Chandra Dubey
          </h3>

          {/* Tag */}
          <p className="font-inter text-[9px] font-bold tracking-[3px] uppercase text-saffron mb-3 leading-relaxed">
            Chief Guest &mdash; Bharat Nirman Conclave 2026
          </p>

          {/* Role */}
          <p className="font-playfair text-base text-indigo/80 font-medium mb-4 leading-snug">
            Union Minister of State for Coal and Mines, Govt. of India
          </p>

          {/* Description */}
          <p className="font-inter text-xs text-gray-500 leading-relaxed mb-6">
            Member of Parliament (Rajya Sabha) From Bihar
          </p>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,.5)]" />
            <span className="font-inter text-[10px] font-semibold tracking-[3px] uppercase text-emerald-600">
              Confirmed
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
