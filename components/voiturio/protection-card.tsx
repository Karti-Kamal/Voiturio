"use client";

import { useRouter } from "next/navigation";

export type ProtectionTier = "basic" | "premium";

const BASIC_ITEMS = [
  "Franchise de 2000€",
  "Kilométrage illimité",
  "Service à l'aéroport et assistance 24/7",
  "Dépôt obligatoire",
  "Couverture partielle contre le vol et l'incendie",
  "Couverture partielle contre les dommages",
];

const PREMIUM_ITEMS = [
  "Aucune franchise 500€",
  "Kilométrage illimité",
  "Service à l'aéroport et assistance 24/7",
  "Aucun dépôt requis",
  "Assurance sans franchise",
  "Couverture complète contre les dommages",
  "Couverture complète contre le vol et l'incendie",
];

export default function ProtectionCard({ tier }: { tier: ProtectionTier }) {
  const router = useRouter();
  const isPremium = tier === "premium";

  return (
    <div className={`bg-white rounded-2xl p-[26px] ${isPremium ? "border-2 border-[#2fae5a]" : "border border-[#ececf0]"}`}>
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className={`font-bold text-[22px] leading-[1.15] ${isPremium ? "text-[#2fae5a]" : "text-[#16181d]"}`}>
            Protection<br />{isPremium ? "Premium" : "Basique"}
          </div>
          <div className="text-[13px] text-[#8b929a] mt-2 max-w-[180px] leading-[1.5]">
            Assurance {isPremium ? "premium" : "de base"} pour la location de voiture.
          </div>
        </div>
        <div className="relative shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/voiturio/detail/voit-1.png" alt="Voiture" className="w-[120px] object-contain" />
          <span className={`absolute bottom-[6px] left-[2px] w-[26px] h-[26px] flex items-center justify-center ${isPremium ? "rounded-full bg-[#2fae5a]" : "rounded-[6px] bg-[#ef8a2a]"}`}>
            {isPremium ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M5 12l4 4 10-11"/></svg>
            ) : (
              <span className="text-white font-extrabold text-[15px]">!</span>
            )}
          </span>
        </div>
      </div>

      {/* CTA bar */}
      <div className={`flex items-center overflow-hidden rounded-[10px] mt-4 mb-[22px] ${isPremium ? "bg-[#2fae5a]" : "bg-[#f3f4f6]"}`}>
        <div className={`flex-1 font-bold text-[15px] px-[18px] ${isPremium ? "text-white" : "text-[#16181d]"}`}>
          {isPremium ? "8 €/jour" : "Inclus"}
        </div>
        <button
          onClick={() => router.push(isPremium ? "/voiturio/detail?protection=premium" : "/voiturio/detail?protection=basic")}
          className={`font-semibold cursor-pointer hover:opacity-90 transition-opacity active:scale-[0.98] border-0 py-[14px] px-5 rounded-[10px] text-[13.5px] ${
            isPremium ? "bg-white text-[#2fae5a] m-[5px]" : "bg-[#ef8a2a] text-white"
          }`}
        >
          {isPremium ? "Réserver avec protection" : "Non, je prends le risque"}
        </button>
      </div>

      {/* Benefits */}
      <div className="flex flex-col gap-[13px] mb-[22px]">
        {(isPremium ? PREMIUM_ITEMS : BASIC_ITEMS).map((item) => (
          <div key={item} className={`flex items-center gap-[11px] text-[14px] text-[#3a3f46]`}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={isPremium ? "#2fae5a" : "#ef8a2a"} strokeWidth="2.4">
              <path d="M5 12l4 4 10-11" />
            </svg>
            {item}
          </div>
        ))}
      </div>

      <div className="text-[13px] text-[#8b929a] leading-[1.6] italic">
        {isPremium
          ? "Cette assurance premium couvre les dommages, le vol et l'incendie sans franchise, pour une location sans stress."
          : "Cette assurance de base couvre les dommages partiels et le vol du véhicule, offrant une protection financière en cas d'incidents."}
      </div>
    </div>
  );
}
