"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VoiturioNavbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#f1f2f4] relative z-20">
      <div className="w-full max-w-[1220px] mx-auto px-4 md:px-8 h-[74px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/voiturio" className="flex items-center gap-[9px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/voiturio/logo.png" alt="Voiturio" className="h-9 object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-[26px] text-[15px] text-[#16181d] font-medium">
          <button className="flex items-center gap-[7px] cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 text-[#16181d]">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
            </svg>
            Français
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 9l7 7 7-7" />
            </svg>
          </button>

          <button className="flex items-center gap-[6px] cursor-pointer hover:opacity-70 transition-opacity bg-transparent border-0 text-[#16181d]">
            <span className="font-semibold">€</span> EUR
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 9l7 7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-4 text-[#3a3f46]">
            <button className="cursor-pointer hover:text-[#0295ff] transition-colors bg-transparent border-0">Faq</button>
            <span className="text-[#d9dde2]">|</span>
            <button className="cursor-pointer hover:text-[#0295ff] transition-colors bg-transparent border-0">Aide</button>
            <span className="text-[#d9dde2]">|</span>
            <button className="cursor-pointer hover:text-[#0295ff] transition-colors bg-transparent border-0">Mon compte</button>
          </div>

          <button
            onClick={() => router.push("/voiturio/results")}
            className="bg-[#0295ff] text-white border-0 rounded-[9px] px-5 py-[11px] font-semibold text-[15px] flex items-center gap-[9px] cursor-pointer hover:opacity-90 transition-opacity "
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <path d="M3 9h18M8 2v4M16 2v4" />
            </svg>
            Réservations
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] cursor-pointer bg-transparent border-0"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-[#16181d] transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#16181d] transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#16181d] transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#f1f2f4] z-50 px-4 pt-5 pb-6 shadow-[0_16px_40px_rgba(16,24,40,0.1)]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8 text-[15px] text-[#3a3f46]">
              <button className="hover:text-[#0295ff] transition-colors bg-transparent border-0 cursor-pointer">Faq</button>
              <button className="hover:text-[#0295ff] transition-colors bg-transparent border-0 cursor-pointer">Aide</button>
              <button className="hover:text-[#0295ff] transition-colors bg-transparent border-0 cursor-pointer">Mon compte</button>
            </div>
            <div className="flex gap-4 text-[14px] text-[#3a3f46]">
              <button className="flex items-center gap-1 bg-transparent border-0 cursor-pointer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
                </svg>
                Français
              </button>
              <button className="flex items-center gap-1 bg-transparent border-0 cursor-pointer">
                <span className="font-semibold">€</span> EUR
              </button>
            </div>
            <button
              onClick={() => { router.push("/voiturio/results"); setMobileOpen(false); }}
              className="w-full bg-[#0295ff] text-white border-0 rounded-[9px] py-3 font-semibold text-[15px] cursor-pointer hover:opacity-90 transition-opacity "
            >
              Réservations
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
