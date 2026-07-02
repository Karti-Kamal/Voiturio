"use client";

import { useState } from "react";

export default function VoiturioNewsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSent(true);
  }

  return (
    <section className="bg-white py-16">
      <div className="w-full max-w-[1180px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-bold text-[clamp(20px,3vw,28px)] mb-2 tracking-[-0.5px]">
            Ne ratez aucun bon plan
          </h2>
          <p className="text-[14.5px] text-[#9aa2ab] m-0">
            Recevez nos offres exclusives et roulez au meilleur prix toute l&apos;année.
          </p>
        </div>

        {sent ? (
          <div className="flex items-center gap-3 font-semibold text-[#2fae5a] text-[15px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2fae5a" strokeWidth="2.4">
              <path d="M5 12l4 4 10-11" />
            </svg>
            Merci ! Vous êtes inscrit(e).
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch w-full md:w-auto">
            <div className="flex items-center gap-[10px] flex-1 bg-white border border-[#e6e9ee] rounded-[10px] px-[18px] py-[13px] min-w-[260px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9aa2ab" strokeWidth="1.7">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className={`flex-1 outline-none bg-transparent text-[14.5px] border-none min-w-0 ${email ? "text-[#16181d]" : "text-[#9aa2ab]"}`}
              />
            </div>
            <button
              type="submit"
              className="text-white border-0 font-semibold cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap bg-[#0295ff] rounded-[10px] px-7 py-[14px] text-[15px] shadow-[0_10px_24px_rgba(2,149,255,0.3)]"
            >
              S&apos;inscrire
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
