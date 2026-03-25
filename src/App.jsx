import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import AgendaTimeline from "./components/AgendaTimeline";
import Speakers from "./components/Speakers";
import Footer from "./components/Footer";

export default function App() {
  const [mouse, setMouse] = useState({ x: -20, y: -20 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="min-h-screen bg-alabaster text-onyx font-inter antialiased">
      {/* Custom cursor */}
      <div
        className="fixed w-2.5 h-2.5 bg-saffron rounded-full pointer-events-none z-[9999] mix-blend-multiply transition-transform duration-75"
        style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%,-50%)" }}
      />
      <div
        className="fixed w-7 h-7 border border-indigo/30 rounded-full pointer-events-none z-[9998] transition-all duration-200"
        style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%,-50%)" }}
      />

      <Header />
      <main>
        <Hero />
        <Vision />
        <AgendaTimeline />
        <Speakers />
        <Footer />
      </main>
    </div>
  );
}
