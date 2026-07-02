const BENEFITS = [
  "Accédez à des offres exclusives.",
  "Repérez les meilleurs tarifs sur la carte.",
  "Suivez et gérez vos locations où que vous soyez.",
];

export default function VoiturioAppSection() {
  return (
    <section className="bg-white py-[72px]">
      <div className="w-full max-w-[1180px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-[70px]">
        {/* Left */}
        <div className="flex-1 w-full">
          <h2 className="font-bold text-[clamp(24px,3.5vw,33px)] leading-[1.2] mb-7 tracking-[-0.5px]">
            Téléchargez l&apos;appli,<br />économisez plus&nbsp;!
          </h2>
          <div className="flex flex-col gap-5 mb-[30px]">
            {BENEFITS.map((b, i) => (
              <div key={i} className="flex items-start gap-[14px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0295ff" strokeWidth="2.4" className="mt-0.5 shrink-0">
                  <path d="M4 12l5 5L20 6" />
                </svg>
                <span className="text-base text-[#3a3f46]">{b}</span>
              </div>
            ))}
          </div>

          {/* Store buttons */}
          <div className="flex gap-[14px] flex-wrap">
            <button className="bg-[#111] rounded-[9px] px-[18px] py-[10px] flex items-center gap-[10px] cursor-pointer hover:opacity-80 transition-opacity border-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/voiturio/footer/playstore.png" alt="Google Play" className="w-[22px] h-[22px] object-contain" />
              <div className="text-white leading-[1.1]">
                <div className="text-[8px] tracking-[0.5px]">GET IT ON</div>
                <div className="text-[15px] font-semibold">Google Play</div>
              </div>
            </button>
            <button className="bg-[#111] rounded-[9px] px-[18px] py-[10px] flex items-center gap-[10px] cursor-pointer hover:opacity-80 transition-opacity border-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/voiturio/footer/appstore.png" alt="App Store" className="w-5 h-5 object-contain" />
              <div className="text-white leading-[1.1]">
                <div className="text-[8px] tracking-[0.5px]">Download on the</div>
                <div className="text-[15px] font-semibold">App Store</div>
              </div>
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/voiturio/app-woman.jpg"
            alt="Application mobile Voiturio"
            className="w-full max-w-[500px] rounded-2xl object-cover shadow-[0_20px_50px_rgba(16,24,40,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}
