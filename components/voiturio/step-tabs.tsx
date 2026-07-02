const STEPS = [
  { label: "Résultats de recherche", done: true },
  { label: "Options & Couverture",   done: true },
  { label: "Conducteur",             done: false },
  { label: "Paiement",               done: false },
];

const CheckIcon = ({ done }: { done: boolean }) =>
  done ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 3a9 9 0 1 0 9 9" opacity="0.9" />
      <path d="M12 3a9 9 0 0 1 9 9" opacity="0.4" />
    </svg>
  );

export default function VoiturioStepTabs() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[26px] mb-[30px]">
      {STEPS.map((step, i) => (
        <div
          key={i}
          className={`flex items-center justify-center gap-[9px] font-semibold rounded-[11px] p-[15px] text-[15px] ${
            step.done
              ? "bg-[#0295ff] text-white"
              : "bg-white text-[#0295ff] shadow-[0_4px_12px_rgba(16,24,40,0.05)]"
          }`}
        >
          <CheckIcon done={step.done} />
          <span className="hidden sm:inline">{step.label}</span>
        </div>
      ))}
    </div>
  );
}
