import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const speakers = [
  {
    name: "Lionel Charles",
    tag: "Keynote \u2014 Digital Business & Compliance Ecosystem",
    role: "Founder, CEO & Managing Director \u2014 IndiaFilings",
    desc: "India\u2019s largest business services platform \u00b7 Empowering 1M+ entrepreneurs with compliance, registration & digital infrastructure",
    photo: "/speakers/lionel-charles.png",
    initials: "LC",
    status: "Confirmed",
  },
  {
    name: "Sanjay Kathuria",
    tag: "Keynote \u2014 Financial Strategy & Wealth Architecture",
    role: "CFA | MBA Finance | Engineering Graduate",
    desc: "Financially Independent & Retired at 39 \u00b7 16 Years of Corporate Leadership \u00b7 Wealth strategist for founders and MSMEs",
    photo: "/speakers/sanjay-kathuria.png",
    initials: "SK",
    status: "Confirmed",
  },
  {
    name: "Advocate Naresh Kalra",
    tag: "Speaker \u2014 Legal, Compliance & Financial Advisory",
    role: "Corporate Legal Counsel & Financial Advisor, Chandigarh",
    desc: "MCA | LLB \u00b7 Consultant to Enforcement Directorate, PMLA & Official Liquidator \u00b7 International Advisor to Federal Courts across Nigeria, Ghana & Kenya",
    photo: "/speakers/naresh-kalra.png",
    initials: "NK",
    status: "Confirmed",
  },
];

export default function Speakers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="speakers" className="py-28 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-inter text-[10px] font-semibold tracking-[5px] uppercase text-saffron mb-4">
            Distinguished Speakers
          </p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-onyx">
            Distinguished Speakers
          </h2>
          <p className="font-inter text-sm text-gray-400 mt-3 tracking-wide">
            8th May 2026 &middot; Constitution Club of India, New Delhi
          </p>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-saffron" />
        </motion.div>

        {/* Speaker Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group bg-alabaster hover:bg-white border border-gray-100 hover:border-indigo/20 hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              {/* Avatar with photo */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo/15 shadow-md mb-6 group-hover:border-saffron/40 transition-colors duration-300">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="font-playfair font-bold text-xl text-onyx mb-2 group-hover:text-indigo transition-colors">
                {speaker.name}
              </h3>

              {/* Tag */}
              <p className="font-inter text-[9px] font-bold tracking-[3px] uppercase text-saffron mb-3 leading-relaxed">
                {speaker.tag}
              </p>

              {/* Role */}
              <p className="font-playfair text-sm text-indigo/80 font-medium mb-4 leading-snug">
                {speaker.role}
              </p>

              {/* Description */}
              <p className="font-inter text-xs text-gray-500 leading-relaxed mb-6 flex-1">
                {speaker.desc}
              </p>

              {/* Status */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,.5)]" />
                <span className="font-inter text-[10px] font-semibold tracking-[3px] uppercase text-emerald-600">
                  {speaker.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
