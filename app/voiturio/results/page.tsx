"use client";

import { useState } from "react";
import VoiturioNavbar from "@/components/voiturio/navbar";
import VoiturioSearchBar from "@/components/voiturio/search-bar";
import VoiturioSidebar from "@/components/voiturio/sidebar";
import ResultCard, { CarResult } from "@/components/voiturio/result-card";
import VoiturioFooter from "@/components/voiturio/footer";

const LOGO = {
  spingo:    { logoSrc: "/voiturio/logos/spingo.png",       logoAlt: "Spingo Car Rental" },
  linran:    { logoSrc: "/voiturio/logos/linrancar.png",    logoAlt: "Lin Ran Car" },
  yacout:    { logoSrc: "/voiturio/logos/yacout-tours.png", logoAlt: "Yacout Tours" },
  fadcar:    { logoSrc: "/voiturio/logos/fadcar.png",       logoAlt: "Fad Car" },
  carrental: { logoSrc: "/voiturio/logos/cd-car.png",       logoAlt: "CD Car Rental" },
};

const ALL_RESULTS: CarResult[] = [
  { ...LOGO.spingo,    car: "/voiturio/cars/clio5.png",   name: "Renault Clio 5",  hasCancel: true,  cancelText: "ANNULATION GRATUITE",    cancelColor: "#2fae5a",  price: "268,90 €" },
  { ...LOGO.linran,    car: "/voiturio/cars/pg208.png",   name: "Peugeot 208",     inline: true, inlineText: "Conducteur supplémentaire gratuit", inlineBg: "#3aae5a", hasCancel: true, cancelText: "ANNULATION DISPONIBLE", cancelColor: "#0295ff", price: "238,10 €" },
  { ...LOGO.yacout,    car: "/voiturio/cars/duster.png",  name: "Dacia Duster",    price: "218,90 €" },
  { ...LOGO.fadcar,    car: "/voiturio/cars/sandero.png", name: "Dacia Sandero",   inline: true, inlineText: "Enregistrement en ligne", inlineBg: "#f2951f", price: "208,90 €" },
  { ...LOGO.spingo,    car: "/voiturio/cars/logan.png",   name: "Dacia Logan",     corner: true, hasOld: true, priceOld: "205,00 €", priceColor: "#e5342b", price: "198,99 €" },
  { ...LOGO.yacout,    car: "/voiturio/cars/i10.png",     name: "Hyundai i10",     corner: true, hasOld: true, priceOld: "205,00 €", priceColor: "#e5342b", price: "198,99 €" },
  { ...LOGO.linran,    car: "/voiturio/cars/picanto.png", name: "Kia Picanto",     hasCancel: true, cancelText: "ANNULATION GRATUITE", cancelColor: "#2fae5a", price: "169,96 €" },
  { ...LOGO.carrental, car: "/voiturio/cars/clio5.png",   name: "Renault Clio 5",  inline: true, inlineText: "Conducteur supplémentaire gratuit", inlineBg: "#3aae5a", hasCancel: true, cancelText: "ANNULATION DISPONIBLE", cancelColor: "#0295ff", price: "268,90 €" },
  { ...LOGO.spingo,    car: "/voiturio/cars/picanto.png", name: "Kia Picanto",     corner: true, hasOld: true, priceOld: "188,16 €", priceColor: "#e5342b", price: "169,96 €" },
];

const SORT_TABS = ["Recommandé", "Prix total le plus bas", "Type de voiture", "Économies totales"];

export default function VoiturioResultsPage() {
  const [activeSort, setActiveSort] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const sorted = activeSort === 1
    ? [...ALL_RESULTS].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    : ALL_RESULTS;

  return (
    <div style={{ fontFamily: "var(--font-poppins)", color: "#16181d", background: "#f5f5f7", minHeight: "100vh" }}>
      <VoiturioNavbar />
      <VoiturioSearchBar />

      <div className="w-full max-w-[1220px] mx-auto flex gap-[30px] items-start" style={{ padding: "28px 16px 60px" }}>
        {/* Sidebar — hidden on mobile */}
        <div className="hidden lg:block">
          <VoiturioSidebar />
        </div>

        <main className="flex-1 min-w-0">
          {/* Sort tabs — scrollable on mobile */}
          <div className="overflow-x-auto mb-[22px]" style={{ borderBottom: "1px solid #e2e5ea" }}>
            <div className="flex gap-6 min-w-max">
              {SORT_TABS.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveSort(i)}
                  className="cursor-pointer transition-colors bg-transparent border-0 whitespace-nowrap"
                  style={{
                    color: activeSort === i ? "#0295ff" : "#7b828b",
                    fontWeight: activeSort === i ? 600 : 400,
                    borderBottom: activeSort === i ? "2px solid #0295ff" : "2px solid transparent",
                    paddingBottom: "12px",
                    fontFamily: "var(--font-poppins)",
                    fontSize: "14.5px",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {sorted.slice(0, visibleCount).map((result, i) => (
            <ResultCard key={i} result={result} />
          ))}

          {/* Load more */}
          {visibleCount < ALL_RESULTS.length && (
            <button
              onClick={() => setVisibleCount((n) => n + 3)}
              className="w-full font-semibold cursor-pointer hover:bg-[#eaf5ff] transition-colors"
              style={{
                background: "#fff",
                border: "1px solid #cfe6fb",
                color: "#0295ff",
                borderRadius: "10px",
                padding: "16px",
                fontFamily: "var(--font-poppins)",
                fontSize: "15px",
              }}
            >
              Charger plus ({ALL_RESULTS.length - visibleCount} résultats)
            </button>
          )}
        </main>
      </div>

      <VoiturioFooter />
    </div>
  );
}
