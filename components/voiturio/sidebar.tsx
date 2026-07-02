"use client";

import { useState } from "react";

const CAR_TYPES = [
  { label: "Petite voiture", sub: "Jusqu'à 4 personnes" },
  { label: "Économie",       sub: "Jusqu'à 5 personnes" },
  { label: "Compact",        sub: "Jusqu'à 5 personnes" },
  { label: "SUV",            sub: "Jusqu'à 5 personnes" },
  { label: "Standard",       sub: "Jusqu'à 5 personnes" },
];

const AGENCIES    = ["LinRan Car", "Spingo Rent car", "Avis", "Budget", "Movert"];
const NAVETTE     = ["Voiture à l'aéroport", "Navette vers la voiture"];
const ANNULATION  = ["Annulation disponible", "Entièrement remboursable", "Annulation gratuite"];
const PAIEMENT    = ["Payez maintenant", "Payez plus tard"];
const KILOMETRAGE = ["Illimité", "Limité"];
const CARBURANT   = ["Essence", "Diesel", "Hybride", "Électrique"];
const TRANSMISSION = ["Manuel", "Automatique"];
const RATINGS     = ["+5", "+6", "+7", "+8", "+9"];

function FilterCheckbox({ label, sub }: { label: string; sub?: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-start gap-[11px] mb-[11px] cursor-pointer" onClick={() => setChecked(!checked)}>
      <span
        className={`w-[18px] h-[18px] rounded-[4px] shrink-0 flex items-center justify-center transition-colors ${
          sub ? "mt-[1px]" : "mt-[2px]"
        } ${checked ? "bg-[#0295ff] border-0" : "bg-white border-[1.6px] border-[#cdd2d9]"}`}
      >
        {checked && (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
            <path d="M5 12l4 4 10-11" />
          </svg>
        )}
      </span>
      <div>
        <div className="text-[14px] text-[#3a3f46] leading-[1.2]">{label}</div>
        {sub && <div className="text-[11.5px] text-[#9aa2ab]">{sub}</div>}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="font-bold text-[17px] mt-[26px] mb-[14px]">{children}</div>;
}

export default function VoiturioSidebar() {
  return (
    <aside className="w-[250px] shrink-0">
      {/* Map preview */}
      <div className="rounded-[12px] overflow-hidden relative mb-[26px] shadow-[0_6px_18px_rgba(16,24,40,0.06)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/voiturio/uploads/map.png" alt="Carte" className="w-full h-[150px] object-cover block" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-[#0295ff] text-white text-[12.5px] font-semibold px-4 py-2 rounded-full border-0 flex items-center gap-[6px] cursor-pointer hover:opacity-90 transition-opacity">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.4" />
            </svg>
            Voir sur la carte
          </button>
        </div>
      </div>

      {/* Car type */}
      <div className="font-bold text-[17px] mb-[14px]">Type de voiture</div>
      {CAR_TYPES.map((t) => (
        <FilterCheckbox key={t.label} label={t.label} sub={t.sub} />
      ))}
      <button className="flex items-center gap-[5px] mt-[2px] text-[#0295ff] text-[13.5px] font-medium bg-transparent border-0 cursor-pointer p-0">
        Afficher 4 autres
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="2.4">
          <path d="M5 9l7 7 7-7" />
        </svg>
      </button>

      {/* Agency */}
      <SectionTitle>Agence de location de voiture</SectionTitle>
      {AGENCIES.map((ag) => <FilterCheckbox key={ag} label={ag} />)}
      <button className="flex items-center gap-[5px] text-[#0295ff] text-[13.5px] font-medium bg-transparent border-0 cursor-pointer p-0">
        Afficher 6 autres
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="2.4">
          <path d="M5 9l7 7 7-7" />
        </svg>
      </button>

      {/* Rating */}
      <SectionTitle>Évaluation de fournisseurs</SectionTitle>
      <div className="flex gap-[9px] flex-wrap">
        {RATINGS.map((r) => (
          <button
            key={r}
            className="border border-[#e0e3e8] rounded-full py-[7px] px-[13px] text-[13px] text-[#3a3f46] bg-transparent cursor-pointer hover:border-[#0295ff] hover:text-[#0295ff] transition-colors"
          >
            {r}
          </button>
        ))}
      </div>

      <SectionTitle>Navette</SectionTitle>
      {NAVETTE.map((n) => <FilterCheckbox key={n} label={n} />)}

      <SectionTitle>Politique d&apos;annulation</SectionTitle>
      {ANNULATION.map((n) => <FilterCheckbox key={n} label={n} />)}

      <SectionTitle>Paiement</SectionTitle>
      {PAIEMENT.map((n) => <FilterCheckbox key={n} label={n} />)}

      <SectionTitle>Kilométrage</SectionTitle>
      {KILOMETRAGE.map((n) => <FilterCheckbox key={n} label={n} />)}

      <SectionTitle>Type de carburant</SectionTitle>
      {CARBURANT.map((n) => <FilterCheckbox key={n} label={n} />)}

      <SectionTitle>Transmission</SectionTitle>
      {TRANSMISSION.map((n) => <FilterCheckbox key={n} label={n} />)}
    </aside>
  );
}
