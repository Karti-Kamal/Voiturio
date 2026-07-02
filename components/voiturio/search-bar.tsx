"use client";

export default function VoiturioSearchBar() {
  return (
    <div className="bg-[#0295ff] pt-4 pb-5">
      <div className="w-full max-w-[1220px] mx-auto px-4 md:px-8">
        {/* Return different location row */}
        <div className="flex items-center gap-[9px] mb-3">
          <span className="w-[18px] h-[18px] rounded-[4px] bg-white flex items-center justify-center shrink-0">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="3">
              <path d="M5 12l5 5 9-10" />
            </svg>
          </span>
          <span className="text-white font-semibold text-[13.5px]">
            Return car to a different location.
          </span>
        </div>

        {/* Search inputs row — horizontally scrollable on mobile */}
        <div className="flex gap-3 items-stretch overflow-x-auto pb-1 [scrollbar-width:none]">
          {/* Departure location */}
          <div className="bg-white rounded-[9px] flex items-center gap-[10px] px-[14px] py-[9px]" style={{ flex: 1.4 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="1.7">
              <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.4" />
            </svg>
            <div>
              <div className="text-[10.5px] text-[#9aa2ab]">Lieu de départ</div>
              <div className="text-[15px] font-medium">Marrakech ville</div>
            </div>
          </div>

          {/* Return location */}
          <div className="bg-white rounded-[9px] flex items-center gap-[10px] px-[14px] py-[9px]" style={{ flex: 1.4 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="1.7">
              <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.4" />
            </svg>
            <div>
              <div className="text-[10.5px] text-[#9aa2ab]">Lieu de retour</div>
              <div className="text-[15px] font-medium">Agadir ville</div>
            </div>
          </div>

          {/* Departure date */}
          <div className="bg-white rounded-[9px] flex items-center gap-[9px] flex-1 px-[14px] py-[9px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="1.7">
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <path d="M3 9h18M8 2v4M16 2v4" />
            </svg>
            <div>
              <div className="text-[10.5px] text-[#9aa2ab]">Date de départ</div>
              <div className="text-[14px] font-medium">11/06/2026</div>
            </div>
          </div>

          {/* Departure time */}
          <div className="bg-white rounded-[9px] flex items-center gap-[9px] px-[14px] py-[9px]" style={{ flex: 0.75 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="1.7">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <div>
              <div className="text-[10.5px] text-[#9aa2ab]">Heure</div>
              <div className="text-[14px] font-medium">10:00</div>
            </div>
          </div>

          {/* Return date */}
          <div className="bg-white rounded-[9px] flex items-center gap-[9px] flex-1 px-[14px] py-[9px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="1.7">
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <path d="M3 9h18M8 2v4M16 2v4" />
            </svg>
            <div>
              <div className="text-[10.5px] text-[#9aa2ab]">Date de retour</div>
              <div className="text-[14px] font-medium">19/06/2026</div>
            </div>
          </div>

          {/* Return time */}
          <div className="bg-white rounded-[9px] flex items-center gap-[9px] px-[14px] py-[9px]" style={{ flex: 0.75 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="1.7">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <div>
              <div className="text-[10.5px] text-[#9aa2ab]">Heure</div>
              <div className="text-[14px] font-medium">10:00</div>
            </div>
          </div>

          {/* Search button */}
          <button className="bg-[#0072d6] border-0 rounded-[9px] w-[60px] flex items-center justify-center cursor-pointer hover:bg-[#005db8] transition-colors shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
