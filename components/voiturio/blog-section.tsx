"use client";

import { useEffect, useRef, useState } from "react";

const POSTS = [
  { img: "/voiturio/blog/blog-01.jpg", category: "Conseils pratiques", title: "Louer une voiture au Maroc : 5 pièges à éviter absolument pour ne pas gâcher vos vacances",          excerpt: "La réservation d'un véhicule est souvent synonyme de liberté, mais elle peut vite tourner au casse-tête si l'on ne fait pas attention aux détails. Entre les frais cachés de dernière minute…" },
  { img: "/voiturio/blog/blog-02.jpg", category: "Road trip",          title: "Road trip en famille : comment organiser un voyage sans stress avec des enfants ?",               excerpt: "Partir sur les routes avec des enfants est une merveilleuse aventure, à condition d'être bien préparé ! Entre le fameux « Quand est-ce qu'on arrive ? » répété en boucle et la logistique des…" },
  { img: "/voiturio/blog/blog-03.jpg", category: "Mobilité verte",     title: "Voiture électrique de location : est-ce vraiment une bonne idée pour les vacances ?",            excerpt: "Avec l'extension des Zones à Faibles Émissions et l'autonomie grandissante des nouveaux modèles, la location d'un véhicule électrique séduit de plus en plus de conducteurs…" },
  { img: "/voiturio/blog/blog-01.jpg", category: "Destinations",       title: "Les meilleures routes panoramiques du Maroc à découvrir en voiture de location",                  excerpt: "Des gorges du Dadès aux plateaux de l'Atlas, le Maroc offre des paysages à couper le souffle. Voici notre sélection des routes incontournables pour un road trip inoubliable…" },
  { img: "/voiturio/blog/blog-02.jpg", category: "Bon à savoir",       title: "Assurance location de voiture : que couvre réellement votre carte bancaire ?",                    excerpt: "Beaucoup de voyageurs pensent que leur carte bancaire suffit à couvrir les dommages en cas d'accident. La réalité est bien plus nuancée. On fait le point sur les garanties réelles…" },
];

const VISIBLE = 3;

export default function VoiturioBlogSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = POSTS.length;
  const maxIndex = total - VISIBLE;

  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, maxIndex]);

  return (
    <section className="bg-[#f5f5f7] py-[72px]">
      <div className="w-full max-w-[1180px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="font-bold text-[clamp(22px,4vw,30px)] mb-2 tracking-[-0.5px]">Les actus de la route</h2>
            <p className="text-[14.5px] text-[#9aa2ab] m-0">Tout ce qu&apos;il faut savoir sur la location de voiture, la mobilité électrique et vos voyages.</p>
          </div>
        
        </div>

        {/* Desktop slider */}
        <div className="overflow-hidden hidden md:block" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex gap-7 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 14px)))` }}>
            {POSTS.map((post, i) => (
              <div key={i} className="bg-white overflow-hidden rounded-[14px] shadow-[0_12px_30px_rgba(16,24,40,0.05)] hover:shadow-lg transition-shadow cursor-pointer shrink-0" style={{ width: `calc((100% - ${(VISIBLE - 1) * 28}px) / ${VISIBLE})` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.img} alt={post.title} className="w-full h-[190px] object-cover block" />
                <div className="p-[22px]">
                  <span className="inline-block font-semibold text-[11px] text-[#0295ff] bg-[rgba(2,149,255,0.08)] rounded-[5px] px-[9px] py-[3px] mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-[16px] leading-[1.35] mb-3">{post.title}</h3>
                  <p className="text-[13px] text-[#8b929a] leading-[1.65] mb-4">{post.excerpt}</p>
                  <button className="font-semibold text-[13.5px] text-[#0295ff] bg-transparent border-0 cursor-pointer p-0 flex items-center gap-1">
                    Voir plus
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="2.2"><path d="M9 18l6-6-6-6" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: 1 at a time */}
        <div className="md:hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {POSTS.map((post, i) => (
            <div key={i} style={{ display: i === current ? "block" : "none" }}>
              <div className="bg-white overflow-hidden rounded-[14px] shadow-[0_12px_30px_rgba(16,24,40,0.05)] cursor-pointer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.img} alt={post.title} className="w-full h-[200px] object-cover block" />
                <div className="p-5">
                  <span className="inline-block font-semibold text-[11px] text-[#0295ff] bg-[rgba(2,149,255,0.08)] rounded-[5px] px-[9px] py-[3px] mb-3">{post.category}</span>
                  <h3 className="font-semibold text-[16px] leading-[1.35] mb-3">{post.title}</h3>
                  <p className="text-[13px] text-[#8b929a] leading-[1.65] mb-4">{post.excerpt}</p>
                  <button className="font-semibold text-[13.5px] text-[#0295ff] bg-transparent border-0 cursor-pointer p-0">Voir plus</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-[38px]">
          <button onClick={prev} className="md:hidden w-8 h-8 rounded-full bg-white border border-[#e6e9ee] flex items-center justify-center cursor-pointer mr-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="2.2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          {Array.from({ length: total - (VISIBLE - 1) }).map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`rounded-full border-0 p-0 cursor-pointer transition-all h-2 ${current === i ? "w-5 bg-[#0295ff]" : "w-2 bg-[#cdd2d9]"}`} aria-label={`Article ${i + 1}`} />
          ))}
          <button onClick={next} className="md:hidden w-8 h-8 rounded-full bg-white border border-[#e6e9ee] flex items-center justify-center cursor-pointer ml-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="2.2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
