export default function VoiturioFooter() {
  return (
    <footer className="bg-[#0a0b0d] text-white pt-[60px]">
      <div
        className="w-full max-w-[1180px] mx-auto px-4 md:px-8 grid gap-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        {/* Brand column */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/voiturio/logo-light.png" alt="Voiturio" className="h-9 object-contain mb-[18px]" />
          <p className="text-[13.5px] text-[#8a9099] leading-[1.7] max-w-[280px] mb-[22px]">
            Fournisseur de locations de voitures et de services premium depuis 2025.
            Votre voyage mérite ce qu&apos;il y a de mieux.
          </p>
          <div className="flex gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/voiturio/social/facebook.svg"  alt="Facebook"  className="w-5 h-5 brightness-0 invert cursor-pointer" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/voiturio/social/instagram.svg" alt="Instagram" className="w-5 h-5 brightness-0 invert cursor-pointer" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/voiturio/social/youtube.svg"   alt="YouTube"   className="w-5 h-5 brightness-0 invert cursor-pointer" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/voiturio/social/linkedin.svg"  alt="LinkedIn"  className="w-5 h-5 brightness-0 invert cursor-pointer" />
          </div>
        </div>

        {/* Entreprise */}
        <div>
          <div className="text-[16px] font-semibold mb-5">Entreprise</div>
          <div className="flex flex-col gap-[13px] text-[13.5px] text-[#9098a1]">
            {["À propos de nous", "Carrières", "Blog", "Avis", "Liste des fournisseurs", "Contact"].map((label) => (
              <button key={label} className="text-left cursor-pointer hover:text-white transition-colors bg-transparent border-0 text-[#9098a1]">
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Assistance */}
        <div>
          <div className="text-[16px] font-semibold mb-5">Assistance</div>
          <div className="flex flex-col gap-[13px] text-[13.5px] text-[#9098a1]">
            {["Mes réservations", "Centre d'information", "Notre garantie"].map((label) => (
              <button key={label} className="text-left cursor-pointer hover:text-white transition-colors bg-transparent border-0 text-[#9098a1]">
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Apps + Payment */}
        <div>
          <div className="flex flex-col gap-3 mb-6">
            <button className="bg-[#1a1b1e] border border-[#26282c] rounded-[9px] px-4 py-2 flex items-center gap-[10px] cursor-pointer hover:border-[#444] transition-colors w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/voiturio/footer/playstore.png" alt="Google Play" className="w-[22px] h-[22px] object-contain" />
              <div className="text-white leading-[1.1]">
                <div className="text-[7.5px]">GET IT ON</div>
                <div className="text-[14px] font-semibold">Google Play</div>
              </div>
            </button>
            <button className="bg-[#1a1b1e] border border-[#26282c] rounded-[9px] px-4 py-2 flex items-center gap-[10px] cursor-pointer hover:border-[#444] transition-colors w-fit">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/voiturio/footer/appstore.png" alt="App Store" className="w-5 h-5 object-contain" />
              <div className="text-white leading-[1.1]">
                <div className="text-[7.5px]">Download on the</div>
                <div className="text-[14px] font-semibold">App Store</div>
              </div>
            </button>
          </div>
          <div className="text-[14px] font-semibold mb-1">Moyens de paiement acceptés</div>
          <div className="text-[12px] text-[#9098a1] mb-[14px]">Nous acceptons les principales cartes</div>
          <div className="flex gap-[9px] flex-wrap">
            {[
              { src: "/voiturio/footer/mastercard.png", alt: "Mastercard" },
              { src: "/voiturio/footer/visa.png",       alt: "Visa" },
              { src: "/voiturio/footer/american.png",   alt: "American Express" },
              { src: "/voiturio/footer/discover.png",   alt: "Discover" },
            ].map((card) => (
              <div key={card.alt} className="bg-white rounded-[6px] flex items-center justify-center w-11 h-[30px] p-[3px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.src} alt={card.alt} className="max-w-9 max-h-[22px] object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#1c1e22] mt-[50px] py-5">
        <div className="w-full max-w-[1180px] mx-auto px-4 md:px-8 flex flex-wrap justify-center gap-[14px] text-[12.5px] text-[#7b828b]">
          <span>©2026 VOITURIO</span>
          <span className="text-[#3a3d42]">|</span>
          <button className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 text-[#7b828b]">Charte de confidentialité</button>
          <span className="text-[#3a3d42]">|</span>
          <button className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 text-[#7b828b]">Cookies</button>
          <span className="text-[#3a3d42]">|</span>
          <button className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 text-[#7b828b]">Conditions Générales</button>
        </div>
      </div>
    </footer>
  );
}
