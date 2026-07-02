"use client";

import { useRouter } from "next/navigation";

export interface CarResult {
  car: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  corner?: boolean;
  inline?: boolean;
  inlineText?: string;
  inlineBg?: string;
  hasCancel?: boolean;
  cancelText?: string;
  cancelColor?: string;
  hasOld?: boolean;
  priceOld?: string;
  price: string;
  priceColor?: string;
}

export default function ResultCard({ result }: { result: CarResult }) {
  const router = useRouter();
  const {
    car, name,
    logoSrc, logoAlt,
    corner, inline, inlineText, inlineBg,
    hasCancel, cancelText, cancelColor,
    hasOld, priceOld,
    price, priceColor = "#16181d",
  } = result;

  return (
    <div className="relative bg-white mb-5 border border-[#ececf0] rounded-xl shadow-[0_6px_18px_rgba(16,24,40,0.04)] overflow-hidden">
      {corner && (
        <span className="absolute top-0 left-0 bg-[#e5342b] text-white font-semibold z-10 text-[11px] px-3 py-[5px] rounded-tl-xl rounded-br-xl">
          Économisez 2%
        </span>
      )}

      {/* Mobile layout: stacked */}
      <div className="flex flex-col md:hidden p-4 gap-4">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={car} alt={name} className="w-[120px] object-contain" />
          <div>
            {inline && (
              <span className="inline-block text-white font-semibold mb-2 text-[10px] px-[9px] py-[3px] rounded-[5px]" style={{ background: inlineBg }}>
                {inlineText}
              </span>
            )}
            <div className="font-bold text-[18px]">{name}</div>
            <div className="text-xs text-[#9aa2ab]">ou similaire</div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt={logoAlt} className="h-[22px] object-contain mt-1.5" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            {hasCancel && (
              <div className="font-bold mb-1 text-[11px]" style={{ color: cancelColor }}>{cancelText}</div>
            )}
            <div className="text-[11px] text-[#9aa2ab]">Total pour 8 jours</div>
            {hasOld && <div className="text-xs text-[#9aa2ab] line-through">{priceOld}</div>}
            <div className="font-bold text-[24px]" style={{ color: priceColor }}>{price}</div>
            <div className="text-[10px] text-[#9aa2ab]">Taxes et frais inclus</div>
          </div>
          <button
            onClick={() => router.push("/voiturio/detail")}
            className="text-white border-0 font-semibold cursor-pointer hover:opacity-90 transition-opacity active:scale-[0.98] bg-[#0295ff] rounded-lg px-4 py-3 text-[14px] whitespace-nowrap"
          >
            Choisir l&apos;offre
          </button>
        </div>
      </div>

      {/* Desktop layout: 4 columns */}
      <div className="hidden md:grid" style={{ gridTemplateColumns: "180px 1fr 210px 220px" }}>
        {/* Col 1 — Car + logo */}
        <div className="flex flex-col justify-center items-center gap-[14px] py-5 px-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={car} alt={name} className="w-full max-w-[150px] object-contain" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt={logoAlt} className="max-h-7 max-w-[120px] object-contain" />
        </div>

        {/* Col 2 — Details */}
        <div className="py-[22px] px-5 border-l border-[#f1f2f4]">
          {inline && (
            <span className="inline-block text-white font-semibold mb-[9px] text-[11px] px-[11px] py-1 rounded-[5px]" style={{ background: inlineBg }}>
              {inlineText}
            </span>
          )}
          <div className="font-bold text-[20px] leading-[1.1]">{name}</div>
          <div className="text-[13.5px] text-[#9aa2ab] mb-3">ou similaire</div>

          <div className="flex items-center gap-4 mb-2 text-[13.5px] text-[#3a3f46]">
            <span className="flex items-center gap-[5px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="1.7"><circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3.5-6 7-6s7 2 7 6"/></svg>4
            </span>
            <span className="flex items-center gap-[5px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="1.7"><rect x="5" y="8" width="14" height="12" rx="2"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>4
            </span>
            <span className="flex items-center gap-[5px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="1.7"><path d="M6 4v16M18 4v16M6 9h12"/></svg>Manuel
            </span>
          </div>
          <div className="flex items-center gap-[6px] mb-4 text-[13.5px] text-[#3a3f46]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="1.6"><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18"/></svg>
            Climatisation
          </div>
          <div className="text-[12.5px] text-[#9aa2ab]">Service d&apos;accueil prise en charge</div>
          <div className="flex items-center gap-[5px] font-medium mb-[18px] text-[13.5px] text-[#0295ff]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="1.7"><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>
            Aéroport de Marrakech (RAK)
          </div>
          <div className="flex items-center gap-[9px]">
            <span className="flex items-center gap-1 font-semibold border border-[#ffd27a] rounded-[5px] px-2 py-[3px] text-[12.5px]">
              <span className="text-[#f5a623]">★</span>7.3
            </span>
            <span className="text-[13px] text-[#9aa2ab]">Moyen ⓘ</span>
            <button className="text-[13px] text-[#3a3f46] underline bg-transparent border-0 cursor-pointer">6466 avis</button>
          </div>
        </div>

        {/* Col 3 — Checks */}
        <div className="flex flex-col justify-between py-[22px] px-3">
          <div>
            <div className="flex items-center gap-2 mb-[10px] text-[13.5px] text-[#3a3f46]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="2.2"><path d="M5 12l4 4 10-11"/></svg>
              Confirmation immédiate !
            </div>
            <div className="flex items-center gap-2 text-[13.5px] text-[#3a3f46]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="2.2"><path d="M5 12l4 4 10-11"/></svg>
              Kilométrage illimité
            </div>
          </div>
          <button className="text-[13px] text-[#3a3f46] underline bg-transparent border-0 cursor-pointer text-left">
            Conditions de location
          </button>
        </div>

        {/* Col 4 — Price + CTA */}
        <div className="flex flex-col justify-center text-center py-[22px] px-5 border-l border-[#f1f2f4]">
          {hasCancel && (
            <div className="font-bold mb-[14px] text-[12.5px] tracking-[0.3px]" style={{ color: cancelColor }}>
              {cancelText}
            </div>
          )}
          <div className="text-[11.5px] text-[#9aa2ab]">Total pour 8 jours</div>
          <div className="font-bold text-[26px]" style={{ color: priceColor }}>{price}</div>
          {hasOld && <div className="text-[13px] text-[#9aa2ab] line-through">{priceOld}</div>}
          <div className="text-[11.5px] text-[#9aa2ab] mt-1 mb-[14px]">Comprend les taxes et les frais</div>
          <button
            onClick={() => router.push("/voiturio/detail")}
            className="text-white border-0 font-semibold cursor-pointer hover:opacity-90 transition-opacity active:scale-[0.98] bg-[#0295ff] rounded-lg p-[11px] text-[14px]"
          >
            Choisir l&apos;offre
          </button>
        </div>
      </div>
    </div>
  );
}
