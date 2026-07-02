"use client";

import VoiturioSearchForm from "@/components/voiturio/search-form";

const AGENCIES = [
  { src: "/voiturio/logos/linrancar.png",    alt: "Lin Ran Car" },
  { src: "/voiturio/logos/spingo.png",       alt: "Spingo Car Rental" },
  { src: "/voiturio/logos/yacout-tours.png", alt: "Yacout Tours" },
  { src: "/voiturio/logos/cd-car.png",       alt: "CD Car Rental" },
  { src: "/voiturio/logos/fadcar.png",       alt: "Fad Car" },
  { src: "/voiturio/logos/500cars.svg",      alt: "500 Cars Rent" },
];

export default function VoiturioHero() {
  return (
    <section className="relative overflow-hidden bg-[#12283f]">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/voiturio/hero.jpg')] bg-cover bg-center" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(13,32,54,0.82)_0%,rgba(13,32,54,0.52)_42%,rgba(13,32,54,0.12)_68%,rgba(13,32,54,0)_85%)]" />

      <div className="relative w-full max-w-[1220px] mx-auto pt-12 px-4 pb-14">
        <h1 className="text-white font-bold text-[clamp(28px,5vw,44px)] leading-[1.14] mb-[30px] tracking-[-0.5px] max-w-[620px]">
          Économisez gros sur votre prochaine location avec Voiturio&nbsp;!
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 lg:gap-10">
          <div className="w-full lg:w-auto">
            <VoiturioSearchForm />
          </div>

          <div className="w-full lg:pt-10">
            <h2 className="text-white font-bold text-[clamp(20px,3vw,30px)] mb-[18px]">
              Plus de 500 Agences...
            </h2>
            <div className="grid grid-cols-3 gap-3 max-w-[480px]">
              {AGENCIES.map((ag) => (
                <div
                  key={ag.alt}
                  className="bg-white rounded-[9px] h-16 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform px-3 shadow-[0_8px_20px_rgba(10,25,45,0.18)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ag.src} alt={ag.alt} className="max-h-[38px] max-w-[110px] object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
