import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Lightbulb, Rocket } from "lucide-react";

const cards = [
  {
    Icon: Building2,
    title: "MSMEs & Founders",
    body: "Equipping micro, small, and medium enterprises with the frameworks, tools, and networks needed to grow sustainably in the digital economy.",
    accent: "Compliance-Ready",
  },
  {
    Icon: Lightbulb,
    title: "Startups & Innovators",
    body: "Connecting India's fastest-growing startups with policymakers and enterprise leaders to unlock new domestic market opportunities.",
    accent: "Capability Centres",
  },
  {
    Icon: Rocket,
    title: "National Builders",
    body: "Channelling entrepreneurial ambition into infrastructure-grade thinking — building the digital backbone of a self-reliant Bharat.",
    accent: "Viksit Bharat",
  },
];

export default function Vision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vision" className="py-28 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-inter text-[10px] font-semibold tracking-[5px] uppercase text-saffron mb-4">Our Vision</p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-onyx leading-tight">
            Empowering India&apos;s<br />
            <em className="not-italic text-indigo">Entrepreneurs.</em>
          </h2>
          <div className="mt-5 w-16 h-0.5 bg-saffron" />
          <p className="mt-6 font-inter text-base text-gray-500 leading-relaxed max-w-xl">
            BNC 2026 is where compliance meets capability, and ambition meets infrastructure.
            A single room. A unified mission. The future of Digital India.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ Icon, title, body, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity:0, y:32 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:0.6, delay: 0.15 * i }}
              className="group bg-alabaster hover:bg-white border border-gray-100 hover:border-indigo/20 hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-sm bg-indigo/8 flex items-center justify-center mb-6 group-hover:bg-indigo/12 transition-colors">
                <Icon size={18} className="text-indigo" />
              </div>
              <p className="font-inter text-[9px] font-bold tracking-[4px] uppercase text-saffron mb-2">{accent}</p>
              <h3 className="font-playfair font-bold text-xl text-onyx mb-3">{title}</h3>
              <p className="font-inter text-sm text-gray-500 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
