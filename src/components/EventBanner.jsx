import { Calendar } from "lucide-react";

export default function EventBanner() {
  return (
    <div className="w-full bg-saffron/10 border-b border-saffron/20 pt-20 pb-6 px-6 z-40 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Calendar className="text-saffron w-5 h-5" />
            <h3 className="font-playfair font-bold text-lg text-onyx">Bharat Nirman Conclave 2026 — Postponed</h3>
          </div>
          <p className="font-inter text-sm text-onyx/80 leading-relaxed max-w-4xl mx-auto md:mx-0">
            Due to unforeseen circumstances, the Bharat Nirman Conclave originally scheduled has been postponed. We sincerely apologise for the inconvenience this may cause to our speakers, sponsors, and attendees. A new date for the conclave will be announced shortly. Stay connected with us to be the first to know — we look forward to welcoming you at the next edition.
          </p>
        </div>
        <a 
          href="mailto:partners@bharatofficesetu.com?subject=Notify%20Me%20—%20Next%20BNC%20Edition"
          className="whitespace-nowrap inline-flex items-center justify-center bg-indigo hover:bg-saffron text-white font-inter font-semibold text-xs tracking-wider uppercase px-6 py-3 transition-colors duration-300 shadow-sm"
        >
          Notify Me for Next Edition
        </a>
      </div>
    </div>
  );
}
