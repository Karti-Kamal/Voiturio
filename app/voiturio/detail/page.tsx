import VoiturioNavbar from "@/components/voiturio/navbar";
import VoiturioStepTabs from "@/components/voiturio/step-tabs";
import ProtectionCard from "@/components/voiturio/protection-card";
import VoiturioBookingSummary from "@/components/voiturio/booking-summary";
import VoiturioFooter from "@/components/voiturio/footer";

export const metadata = {
  title: "Options & Couverture — Voiturio",
  description: "Choisissez votre protection et vos options supplémentaires.",
};

export default function VoiturioDetailPage() {
  return (
    <div style={{ fontFamily: "var(--font-poppins)", color: "#16181d", background: "#f5f5f7", minHeight: "100vh" }}>
      <VoiturioNavbar />

      <div className="w-full max-w-[1180px] mx-auto" style={{ padding: "26px 16px 60px" }}>
        <VoiturioStepTabs />

        <div className="flex flex-col lg:flex-row gap-[30px] items-start">
          {/* Main */}
          <main className="flex-1 min-w-0">
            {/* Car header */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <div className="flex items-center gap-4 mb-[2px] flex-wrap">
                  <h1 className="font-bold" style={{ fontSize: "clamp(24px,4vw,34px)", margin: 0, letterSpacing: "-0.5px" }}>
                    Renault Clio 5
                  </h1>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/voiturio/logos/spingo.png" alt="Spingo Car Rental" style={{ height: "28px", objectFit: "contain" }} />
                </div>
                <div style={{ fontSize: "17px", color: "#9aa2ab", marginBottom: "18px" }}>ou similaire</div>
                <div className="flex flex-wrap items-center gap-[20px]" style={{ fontSize: "15px", color: "#3a3f46" }}>
                  <span className="flex items-center gap-[7px]">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="1.7"><circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3.5-6 7-6s7 2 7 6"/></svg>4
                  </span>
                  <span className="flex items-center gap-[7px]">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="1.7"><rect x="5" y="8" width="14" height="12" rx="2"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>4
                  </span>
                  <span className="flex items-center gap-[7px]">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="1.7"><path d="M6 4v16M18 4v16M6 9h12"/></svg>Manuel
                  </span>
                  <span className="flex items-center gap-[7px]">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3a3f46" strokeWidth="1.6"><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18"/></svg>Climatisation
                  </span>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/voiturio/detail/voit-1.png" alt="Renault Clio 5" style={{ width: "200px", objectFit: "contain", flexShrink: 0 }} />
            </div>

            {/* Free cancellation banner */}
            <div
              className="flex gap-4 items-start"
              style={{ background: "#eafaf0", border: "1px solid #bfe9cf", borderRadius: "12px", padding: "20px 24px", margin: "26px 0 34px" }}
            >
              <span className="w-[30px] h-[30px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#2fae5a" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><path d="M5 12l4 4 10-11"/></svg>
              </span>
              <div>
                <div className="font-bold" style={{ fontSize: "17px", marginBottom: "4px" }}>Annulation gratuite et flexible</div>
                <div style={{ fontSize: "14px", color: "#5c636c", lineHeight: 1.6 }}>
                  Changez d&apos;avis en toute sérénité : remboursement à 100 % pour toute annulation effectuée au moins 48 heures à l&apos;avance.
                </div>
              </div>
            </div>

            {/* Protection cards */}
            <h2 className="font-bold" style={{ fontSize: "clamp(18px,3vw,23px)", margin: "0 0 20px" }}>
              Veuillez sélectionner votre protection
            </h2>
            <div className="grid gap-[22px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              <ProtectionCard tier="basic" />
              <ProtectionCard tier="premium" />
            </div>

            {/* Extra options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5" style={{ margin: "44px 0 30px" }}>
              <div>
                <h2 className="font-bold" style={{ fontSize: "clamp(18px,3vw,23px)", margin: "0 0 12px" }}>
                  Ajouter des options supplémentaires
                </h2>
                <p style={{ fontSize: "15px", color: "#5c636c", margin: "0 0 20px", maxWidth: "380px", lineHeight: 1.55 }}>
                  Sièges enfants, conducteurs additionnels et systèmes de navigation connectés.
                </p>
                <button
                  className="font-semibold cursor-pointer hover:bg-[#eaf5ff] transition-colors"
                  style={{ background: "#fff", border: "1px solid #bfe0fb", color: "#0295ff", borderRadius: "9px", padding: "13px 22px", fontFamily: "var(--font-poppins)", fontSize: "14.5px" }}
                >
                  Afficher les suppléments
                </button>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/voiturio/detail/siege.png" alt="Options supplémentaires" style={{ width: "260px", objectFit: "contain", flexShrink: 0 }} />
            </div>

            {/* Provider rating */}
            <h2 className="font-bold" style={{ fontSize: "clamp(18px,3vw,23px)", margin: "20px 0 22px" }}>
              Évaluation de fournisseurs
            </h2>
            <div className="flex items-center gap-[18px] flex-wrap">
              <span className="flex items-center gap-[5px] font-semibold" style={{ border: "1px solid #ffd27a", borderRadius: "6px", padding: "6px 12px", fontSize: "15px" }}>
                <span style={{ color: "#f5a623" }}>★</span>7,3
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/voiturio/logos/spingo.png" alt="Spingo Car Rental" style={{ height: "24px", objectFit: "contain" }} />
              <span style={{ fontSize: "15px", color: "#3a3f46" }}>Très bien ⓘ</span>
              <button style={{ fontSize: "15px", color: "#9aa2ab", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}>
                6466 avis
              </button>
            </div>
          </main>

          {/* Booking summary sidebar */}
          <div className="w-full lg:w-[350px] lg:flex-shrink-0">
            <VoiturioBookingSummary />
          </div>
        </div>
      </div>

      <VoiturioFooter />
    </div>
  );
}
