"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  { initials: "MD", color: "#2563eb", name: "Michael Dupont",    location: "Paris, France",      stars: 5, text: "\"I've rented cars all over the world, but the service here is unmatched. The vehicle was spotless, and their staff went above and beyond to ensure I had everything I needed.\"" },
  { initials: "SM", color: "#7c3aed", name: "Sophie Martin",     location: "Lyon, France",       stars: 5, text: "\"Fantastic experience from booking to return. The online process was seamless, and the car was exactly what I needed for my business trip. Will definitely use again!\"" },
  { initials: "DL", color: "#0891b2", name: "David Lefèvre",     location: "Bordeaux, France",   stars: 4, text: "\"Great selection of vehicles and competitive prices. The only reason for 4 stars is the wait at pickup, but overall a very good experience with professional staff.\"" },
  { initials: "AC", color: "#059669", name: "Amina Cherkaoui",   location: "Marrakech, Maroc",   stars: 5, text: "\"Service exceptionnel ! La réservation en ligne était simple, le véhicule était en parfait état et le personnel de l'agence très accueillant. Je recommande vivement.\"" },
  { initials: "TR", color: "#dc2626", name: "Thomas Renault",    location: "Marseille, France",  stars: 5, text: "\"Meilleur prix que j'ai trouvé pour une location à Agadir. La voiture était récente et propre. L'application mobile m'a permis de gérer ma réservation facilement.\"" },
];

const PLATFORMS = [
  { src: "/voiturio/platforms/trustpilot.png", alt: "Trustpilot", score: "4,5" },
  { src: "/voiturio/platforms/google.png",     alt: "Google",     score: "4,6" },
  { src: "/voiturio/platforms/facebook.png",   alt: "Facebook",   score: "4,5" },
  { src: "/voiturio/platforms/reviews.png",    alt: "Reviews.io", score: "4,2" },
];

const VISIBLE = 3;

export default function VoiturioTestimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = TESTIMONIALS.length;
  const maxIndex = total - VISIBLE;

  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, maxIndex]);

  const Card = ({ t }: { t: typeof TESTIMONIALS[0] }) => (
    <div className="bg-white rounded-[14px] p-[26px] shadow-[0_12px_30px_rgba(16,24,40,0.05)] shrink-0" style={{ width: `calc((100% - ${(VISIBLE - 1) * 28}px) / ${VISIBLE})` }}>
      <div className="flex items-center gap-3 mb-3.5">
        <div className="shrink-0 flex items-center justify-center rounded-full text-white font-bold text-[16px] w-11 h-11" style={{ background: t.color }}>
          {t.initials}
        </div>
        <div>
          <div className="font-semibold text-[15px]">{t.name}</div>
          <div className="text-[12.5px] text-[#9aa2ab]">{t.location}</div>
        </div>
      </div>
      <div className="text-[#f5a623] text-[15px] tracking-[2px] mb-3">
        {"★".repeat(t.stars)}<span className="text-[#d6d9de]">{"★".repeat(5 - t.stars)}</span>
      </div>
      <p className="text-[14px] text-[#5c636c] italic leading-[1.6] m-0">{t.text}</p>
    </div>
  );

  return (
    <section className="bg-[#f5f5f7] py-[72px]">
      <div className="w-full max-w-[1180px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="font-bold text-[clamp(22px,4vw,30px)] mb-2 tracking-[-0.5px]">Ils nous font confiance</h2>
            <p className="text-[14.5px] text-[#9aa2ab] m-0">Découvrez les avis de nos clients qui ont choisi notre centrale pour leur voyage.</p>
          </div>
          <div className="hidden md:flex gap-3">
            {[prev, next].map((fn, i) => (
              <button key={i} onClick={fn} className="w-10 h-10 rounded-full bg-white border border-[#e6e9ee] shadow-[0_4px_12px_rgba(16,24,40,0.06)] flex items-center justify-center cursor-pointer hover:bg-[#0295ff] hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d={i === 0 ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop slider */}
        <div className="overflow-hidden hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex gap-7 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 14px)))` }}>
            {TESTIMONIALS.map((t, i) => <Card key={i} t={t} />)}
          </div>
        </div>

        {/* Mobile: 1 at a time */}
        <div className="md:hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ display: i === current ? "block" : "none" }}>
              <div className="bg-white rounded-[14px] p-[22px] shadow-[0_12px_30px_rgba(16,24,40,0.05)]">
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="shrink-0 flex items-center justify-center rounded-full text-white font-bold text-[16px] w-11 h-11" style={{ background: t.color }}>{t.initials}</div>
                  <div>
                    <div className="font-semibold text-[15px]">{t.name}</div>
                    <div className="text-[12.5px] text-[#9aa2ab]">{t.location}</div>
                  </div>
                </div>
                <div className="text-[#f5a623] text-[15px] tracking-[2px] mb-3">{"★".repeat(t.stars)}<span className="text-[#d6d9de]">{"★".repeat(5 - t.stars)}</span></div>
                <p className="text-[14px] text-[#5c636c] italic leading-[1.6] m-0">{t.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-11">
          <button onClick={prev} className="md:hidden w-8 h-8 rounded-full bg-white border border-[#e6e9ee] flex items-center justify-center cursor-pointer mr-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="2.2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          {Array.from({ length: total - (VISIBLE - 1) }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`rounded-full border-0 p-0 cursor-pointer transition-all h-2 ${current === i ? "w-5 bg-[#0295ff]" : "w-2 bg-[#cdd2d9]"}`} aria-label={`Témoignage ${i + 1}`} />
          ))}
          <button onClick={next} className="md:hidden w-8 h-8 rounded-full bg-white border border-[#e6e9ee] flex items-center justify-center cursor-pointer ml-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="2.2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        {/* Overall rating */}
        <div className="flex justify-center border-t border-[#e5e7eb] relative">
          <div className="bg-white flex items-center gap-[9px] flex-wrap justify-center rounded-[11px] px-[22px] py-3 shadow-[0_8px_24px_rgba(16,24,40,0.07)] -mt-6 text-[14px]">
            <span className="font-bold">4.9</span>
            <span className="text-[#9aa2ab]">/5</span>
            <span className="text-[#f5a623] tracking-[1px]">★★★★★</span>
            <span className="text-[#5c636c]">Basé sur 2 456 avis</span>
          </div>
        </div>

        {/* Platform ratings */}
        <div className="grid gap-4 mt-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {PLATFORMS.map((p, i) => (
            <div key={i} className="bg-white flex items-center justify-center gap-[14px] rounded-xl p-[22px] shadow-[0_10px_26px_rgba(16,24,40,0.05)]">
              <span className="font-bold text-[28px] text-[#a9d3f7]">{p.score}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} className="h-7 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
