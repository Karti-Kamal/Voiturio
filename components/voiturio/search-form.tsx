"use client";

import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import { PinIcon, CalendarIcon, ClockIcon, ChevronDownIcon, CheckIcon } from "@/components/voiturio/icons";

/* ── Static mockup data ─────────────────────────────────────────── */

const LOCATIONS = [
  "Marrakech Ville",
  "Casablanca Centre",
  "Rabat Centre",
  "Agadir Ville",
  "Fès Médina",
  "Tanger Ville",
  "Meknès Centre",
  "Oujda Ville",
  "Aéroport Marrakech (RAK)",
  "Aéroport Casablanca (CMN)",
  "Aéroport Agadir (AGA)",
];

/* ── Helpers ─────────────────────────────────────────────────────── */

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function toISO(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function formatDateFR(iso: string) {
  if (!iso) return "";
  const [yyyy, mm, dd] = iso.split("-");
  return `${dd}/${mm}/${yyyy}`;
}

function diffInDays(start: string, end: string) {
  const s = new Date(start);
  const e = new Date(end);
  if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) return 0;
  return Math.max(0, Math.round((e.getTime() - s.getTime()) / 86400000));
}

/* ── FieldShell ── voiturio-styled tile ─────────────────────────── */

type FieldShellProps = {
  label: string;
  icon: ReactNode;
  value: ReactNode;
  trailing?: ReactNode;
  onClick?: () => void;
  active?: boolean;
  asButton?: boolean;
  children?: ReactNode;
};

function FieldShell({ label, icon, value, trailing, onClick, active, asButton, children }: FieldShellProps) {
  const Tag = asButton ? "button" : "div";
  return (
    <Tag
      type={asButton ? "button" : undefined}
      onClick={onClick}
      className={`group relative flex w-full items-center gap-3 rounded-[11px] bg-white px-[14px] py-[9px] text-start transition-all border border-[#e6e9ee] ${
        active
          ? "ring-2 ring-[#0295ff]"
          : "hover:ring-1 hover:ring-[#c3c9d1] focus-within:ring-2 focus-within:ring-[#0295ff]/40"
      }`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] text-[#0295ff] bg-[rgba(2,149,255,0.08)]">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col leading-tight">
        <span className="text-[10.5px] font-medium uppercase tracking-[0.07em] text-[#9aa2ab]">
          {label}
        </span>
        <span className="truncate text-[15px] font-medium text-[#16181d]">
          {value}
        </span>
      </span>
      {trailing}
      {children}
    </Tag>
  );
}

/* ── LocationSelect ─────────────────────────────────────────────── */

function LocationSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onDocPointer(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <FieldShell
        asButton
        active={open}
        onClick={() => setOpen((o) => !o)}
        label={label}
        icon={<PinIcon className="h-4 w-4" />}
        value={value}
        trailing={
          <ChevronDownIcon
            className={`h-4 w-4 shrink-0 transition-transform text-[#9aa2ab] ${open ? "rotate-180" : ""}`}
          />
        }
      />
      {open && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden bg-white p-1.5 rounded-xl border border-[#e6e9ee] shadow-[0_20px_50px_-15px_rgba(12,35,64,0.25)]"
        >
          {LOCATIONS.map((opt) => {
            const selected = opt === value;
            return (
              <li key={opt}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => { onChange(opt); setOpen(false); }}
                  className={`flex w-full items-center justify-between gap-3 rounded-[9px] px-3 py-2.5 text-start text-[14px] font-medium transition-colors ${
                    selected
                      ? "bg-[rgba(2,149,255,0.08)] text-[#0295ff]"
                      : "bg-transparent text-[#3a3f46] hover:bg-[#f6f7f9]"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                      selected ? "bg-[rgba(2,149,255,0.12)] text-[#0295ff]" : "bg-[#f6f7f9] text-[#9aa2ab]"
                    }`}>
                      <PinIcon className="h-3.5 w-3.5" />
                    </span>
                    {opt}
                  </span>
                  {selected && <CheckIcon className="h-4 w-4 text-[#0295ff]" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ── DateField ──────────────────────────────────────────────────── */

function DateField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  function openPicker() {
    const input = inputRef.current;
    if (!input) return;
    if (typeof input.showPicker === "function") {
      try { input.showPicker(); return; } catch { /* fall through */ }
    }
    input.focus();
  }

  return (
    <FieldShell asButton onClick={openPicker} label={label}
      icon={<CalendarIcon className="h-4 w-4" />}
      value={formatDateFR(value) || "—"}
    >
      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0"
      />
    </FieldShell>
  );
}

/* ── TimeField ──────────────────────────────────────────────────── */

function TimeField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  function openPicker() {
    const input = inputRef.current;
    if (!input) return;
    if (typeof input.showPicker === "function") {
      try { input.showPicker(); return; } catch { /* fall through */ }
    }
    input.focus();
  }

  return (
    <FieldShell asButton onClick={openPicker} label={label}
      icon={<ClockIcon className="h-4 w-4" />}
      value={value || "—"}
    >
      <input
        ref={inputRef}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0"
      />
    </FieldShell>
  );
}

/* ── Main SearchForm ─────────────────────────────────────────────── */

export default function VoiturioSearchForm() {
  const router = useRouter();
  const today = useMemo(() => new Date(), []);
  const [pickupLocation, setPickupLocation] = useState(LOCATIONS[0]);
  const [returnLocation, setReturnLocation] = useState(LOCATIONS[1]);
  const [pickupDate, setPickupDate] = useState(toISO(addDays(today, 1)));
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnDate, setReturnDate] = useState(toISO(addDays(today, 8)));
  const [returnTime, setReturnTime] = useState("10:00");
  const [differentReturn, setDifferentReturn] = useState(true);
  const [loading, setLoading] = useState(false);

  const days = diffInDays(pickupDate, returnDate);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const params = new URLSearchParams({
      from: pickupLocation,
      to: differentReturn ? returnLocation : pickupLocation,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
    });
    router.push(`/voiturio/results?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-[#f6f7f9] rounded-2xl p-[22px] shadow-[0_24px_60px_rgba(10,25,45,0.28)]"
    >
      {/* Location pickers */}
      <div className="flex flex-col sm:flex-row gap-[14px]">
        <div className="flex-1">
          <LocationSelect label="Lieu de départ" value={pickupLocation} onChange={setPickupLocation} />
        </div>
        <div className="flex-1">
          <LocationSelect label="Lieu de retour" value={returnLocation} onChange={setReturnLocation} />
        </div>
      </div>

      {/* Different return checkbox */}
      <div className="flex items-center gap-[10px] my-4">
        <button
          type="button"
          onClick={() => setDifferentReturn(!differentReturn)}
          className={`w-5 h-5 rounded-[5px] flex items-center justify-center shrink-0 transition-colors ${
            differentReturn ? "bg-[#0295ff] border-0" : "bg-white border-[1.6px] border-[#c3c9d1]"
          }`}
        >
          {differentReturn && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
              <path d="M5 12l5 5 9-10" />
            </svg>
          )}
        </button>
        <span className="text-[14px] text-[#3a3f46] font-medium">
          Return car to a different location.
        </span>
      </div>

      {/* Date / time fields */}
      <div className="grid grid-cols-2 md:grid-cols-[1.35fr_1fr_1.35fr_1fr] gap-[11px]">
        <DateField label="Date de départ" value={pickupDate} onChange={setPickupDate} />
        <TimeField label="Heure" value={pickupTime} onChange={setPickupTime} />
        <DateField label="Date de retour" value={returnDate} onChange={setReturnDate} />
        <TimeField label="Heure" value={returnTime} onChange={setReturnTime} />
      </div>

      {/* Duration pill */}
      {days > 0 && (
        <div className="mt-4 flex items-center">
          <div className="flex-1 border-t border-dashed border-[#0295ff]/35" />
          <span className="px-3 font-semibold text-[13px] text-[#0295ff]">
            {days} jour{days > 1 ? "s" : ""} de location
          </span>
          <div className="flex-1 border-t border-dashed border-[#0295ff]/35" />
        </div>
      )}

      {/* Age notice */}
      <div className="flex items-center gap-[10px] mt-4">
        <span className="w-5 h-5 rounded-[5px] bg-white border-[1.6px] border-[#c3c9d1] shrink-0" />
        <span className="text-[14px] text-[#3a3f46] font-medium">
          Âge du conducteur{" "}
          <span className="underline">24-69.</span>
        </span>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-5 w-full flex items-center justify-center gap-2 font-semibold text-white border-0 cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-70 bg-[#0295ff] rounded-[11px] p-[15px] text-[16px] "
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
              <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Recherche en cours…
          </>
        ) : (
          "Trouvez votre véhicule"
        )}
      </button>
    </form>
  );
}
