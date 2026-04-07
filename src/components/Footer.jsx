import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Register CTA strip */}
      <section id="register" className="py-24 px-6 bg-indigo text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="max-w-2xl mx-auto"
        >
          <p className="font-inter text-[10px] font-semibold tracking-[5px] uppercase text-saffron-400 mb-4">
            By Invitation Only
          </p>
          <h2 className="font-playfair font-bold text-3xl md:text-5xl leading-tight mb-6">
            Request Your<br />Invitation
          </h2>
          <p className="font-inter text-sm text-indigo-200 mb-8 max-w-md mx-auto leading-relaxed">
            Seats are limited to 200 curated attendees. Submit your request and our team will confirm your participation within 48 hours.
          </p>
          <a
            href="mailto:partners@bharatofficesetu.com?subject=BNC 2026 — Invitation Request"
            className="group inline-flex items-center gap-2 bg-saffron hover:bg-saffron-500 text-white font-inter font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Request Your Invitation
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* Venue + Footer */}
      <footer id="venue" className="py-16 px-6 bg-onyx text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Col 1 — Venue */}
            <div>
              <p className="font-inter text-[9px] font-semibold tracking-[4px] uppercase text-saffron mb-4">Venue</p>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-saffron mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-playfair font-bold text-lg">Constitution Club of India</p>
                  <p className="font-inter text-sm text-gray-400 mt-1 leading-relaxed">
                    Speaker Hall, Vithalbhai Patel House<br />
                    Rafi Marg, New Delhi — 110001
                  </p>
                </div>
              </div>
            </div>

            {/* Col 2 — Hosted by */}
            <div>
              <p className="font-inter text-[9px] font-semibold tracking-[4px] uppercase text-saffron mb-4">Hosted By</p>
              <p className="font-playfair font-bold text-lg">Bharat Office Setu</p>
              <p className="font-inter text-sm text-gray-400 mt-1">(BOS Services)</p>
            </div>

            {/* Col 3 — Date */}
            <div>
              <p className="font-inter text-[9px] font-semibold tracking-[4px] uppercase text-saffron mb-4">Date & Time</p>
              <p className="font-playfair font-bold text-lg">23 April 2026</p>
              <p className="font-inter text-sm text-gray-400 mt-1">3:00 PM – 7:00 PM IST</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-playfair font-bold text-xl tracking-wider text-saffron">BOS</span>
            <p className="font-inter text-xs text-gray-500">
              &copy; 2026 Bharat Office Setu. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
