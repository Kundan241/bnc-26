import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Clock } from "lucide-react";

const agenda = [
  { time: "3:00 PM",  title: "Registration & Networking Tea" },
  { time: "3:20 PM",  title: "Opening & Welcome Address" },
  { time: "3:30 PM",  title: "Inaugural Address by Chief Guest" },
  { time: "4:05 PM",  title: "Keynote — Building Scalable Digital Enterprises" },
  { time: "4:35 PM",  title: "Panel Discussion — Domestic Capability Centres & Shared Workspaces" },
  { time: "5:15 PM",  title: "Networking Break (High Tea)" },
  { time: "5:30 PM",  title: "Masterclass — Compliance to Commerce" },
  { time: "6:00 PM",  title: "Fireside Chat — The Road to Viksit Bharat 2047" },
  { time: "6:30 PM",  title: "Closing Dialogue — Ecosystem Collaboration" },
  { time: "7:00 PM",  title: "Invitation-Only Cocktail Networking Session" },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 }}
      className="relative flex items-start gap-6 group"
    >
      {/* Dot */}
      <div className="relative z-10 mt-1.5 flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-indigo border-[3px] border-white shadow-md group-hover:scale-125 group-hover:bg-saffron transition-all duration-300" />
      </div>

      {/* Card */}
      <div className="flex-1 pb-10">
        <div className="flex items-center gap-3 mb-1">
          <Clock size={12} className="text-saffron flex-shrink-0" />
          <span className="font-inter text-xs font-bold tracking-[3px] uppercase text-saffron">{item.time}</span>
        </div>
        <h3 className="font-playfair font-medium text-lg text-onyx leading-snug group-hover:text-indigo transition-colors">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function AgendaTimeline() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.7"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="agenda" className="py-28 px-6 bg-alabaster" ref={sectionRef}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-inter text-[10px] font-semibold tracking-[5px] uppercase text-saffron mb-4">Programme</p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-onyx">
            Event Agenda
          </h2>
          <div className="mt-5 mx-auto w-16 h-0.5 bg-saffron" />
        </motion.div>

        {/* Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Static track */}
          <div className="absolute left-[5px] top-2 bottom-0 w-px bg-gray-200" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-[5px] top-2 w-px bg-indigo origin-top"
            style={{ height: lineHeight }}
          />

          <div className="relative">
            {agenda.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
