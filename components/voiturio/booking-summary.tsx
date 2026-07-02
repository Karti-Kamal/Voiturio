"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VoiturioBookingSummary() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function handleReserve() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      setTimeout(() => router.push("/voiturio"), 1200);
    }, 1400);
  }

  return (
    <aside className="w-full lg:w-[350px] lg:shrink-0 bg-white border border-[#ececf0] rounded-2xl p-[26px] shadow-[0_10px_30px_rgba(16,24,40,0.06)]">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-[13px] text-[#7b828b] mb-1.5">11 juin - 19 juin</div>
          <div className="font-bold text-xl">Renault Clio 5</div>
          <div className="text-[13.5px] text-[#9aa2ab]">ou similaire</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/voiturio/detail/voit-1.png" alt="Renault Clio 5" className="w-[110px] object-contain" />
      </div>

      <button className="flex items-center gap-[5px] font-medium justify-end w-full text-[#0295ff] text-[13.5px] mt-1.5 mb-5 bg-transparent border-0 cursor-pointer">
        Afficher détails
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="2.4">
          <path d="M5 9l7 7 7-7" />
        </svg>
      </button>

      <div className="border-t border-[#eef0f3] pt-[18px]">
        <div className="font-bold text-[16px] mb-3.5">Prix de location</div>
        <div className="flex justify-between text-[14px] text-[#3a3f46]">
          <span>Loyer pour 8 jours</span><span>272,00 €</span>
        </div>
      </div>

      <div className="border-t border-[#eef0f3] mt-[18px] pt-[18px]">
        <div className="font-bold text-[16px] mb-3.5">Protection sélectionnée</div>
        <div className="flex justify-between text-[14px] text-[#3a3f46]">
          <span>Protection de base</span><span>Inclus</span>
        </div>
      </div>

      <div className="border-t border-[#eef0f3] mt-[18px] pt-[18px]">
        <div className="font-bold text-[16px] mb-3.5">Options sélectionnées</div>
        <div className="flex justify-between text-[14px] text-[#3a3f46]">
          <span>-</span><span>0</span>
        </div>
      </div>

      <div className="text-center font-semibold bg-[#eaf5ff] rounded-[10px] p-[15px] mt-5 mb-4 text-[15px]">
        Total pour 8 jours:{" "}
        <span className="text-[#0295ff]">272,00 €</span>
      </div>

      <button
        onClick={handleReserve}
        disabled={loading || done}
        className={`w-full flex items-center justify-center gap-2 text-white border-0 font-semibold cursor-pointer transition-all active:scale-[0.98] disabled:cursor-not-allowed rounded-[10px] p-[15px] text-[16px]  ${
          done ? "bg-[#2fae5a]" : "bg-[#0295ff]"
        } ${loading ? "opacity-80" : "opacity-100"}`}
      >
        {done ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
              <path d="M5 12l4 4 10-11" />
            </svg>
            Réservation confirmée !
          </>
        ) : loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Traitement en cours…
          </>
        ) : (
          "Réserver"
        )}
      </button>
    </aside>
  );
}
