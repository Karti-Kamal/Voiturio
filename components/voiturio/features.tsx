"use client";

import { useRouter } from "next/navigation";

const FEATURES = [
  { img: "/voiturio/icon-01.png", label: "PAS DE FRAIS\nCACHÉS" },
  { img: "/voiturio/icon-02.png", label: "SERVICES CLIENT\n24H/24 7J/7" },
  { img: "/voiturio/icon-03.png", label: "ANNULATION\nGRATUITE" },
  { img: "/voiturio/icon-04.png", label: "DES INFORMATIONS\nFIABLES" },
];

export default function VoiturioFeatures() {
  const router = useRouter();
  return (
    <section className="bg-white py-16">
      <div className="w-full max-w-[1180px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10 lg:gap-15">

        {/* Left text */}
        <div className="flex-1 lg:max-w-[520px]">
          <h2 className="font-bold text-[clamp(24px,3.5vw,31px)] tracking-[-0.5px] mb-4">
            Redéfinir la location de voiture
          </h2>
          <p className="font-medium text-[clamp(15px,2vw,18px)] text-[#3a3f46] leading-[1.5] mb-[22px]">
            Découvrez une nouvelle façon de prendre la route, l&apos;esprit léger.
          </p>
          <p className="text-[14.5px] text-[#7b828b] leading-[1.7] mb-[30px]">
            Parce que louer un véhicule ne devrait pas être une source de stress, notre centrale bouscule
            les codes. Nous sélectionnons rigoureusement nos agences partenaires pour vous offrir du choix,
            des véhicules récents (y compris électriques) et des options adaptées à votre vie. Vous
            choisissez, vous validez, vous roulez.
          </p>
          <button
            onClick={() => router.push("/voiturio/results")}
            className="bg-[#0295ff] text-white text-[15px] font-semibold rounded-[10px] px-[26px] py-[14px] border-0 cursor-pointer hover:opacity-90 transition-opacity "
          >
            Réserver un véhicule
          </button>
        </div>

        {/* Right grid */}
        <div
          className="grid grid-cols-2 gap-4 lg:gap-5 shrink-0"
          style={{ gridTemplateColumns: "repeat(2, minmax(160px, 215px))" }}
        >
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="bg-white text-center border border-[#eef0f3] rounded-[14px] px-4 py-6 shadow-[0_12px_30px_rgba(16,24,40,0.05)] cursor-pointer hover:scale-105 transition-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.img}
                alt={f.label.replace("\n", " ")}
                className="h-[52px] object-contain mb-3.5 mx-auto"
              />
              <div className="font-semibold text-[12.5px] tracking-[0.5px] whitespace-pre-line leading-[1.5]">
                {f.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
