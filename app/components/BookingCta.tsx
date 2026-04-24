'use client'

import { useState } from "react"
import { DayPicker } from "react-day-picker"
import type { DateRange } from "react-day-picker"
import { pl } from "date-fns/locale"
import "react-day-picker/style.css"
import { calculateStay } from "@/app/lib/pricing"
import { PRICING } from "@/app/config/pricing"

function nightsLabel(n: number) {
  if (n === 1) return "1 noc"
  if (n < 5) return `${n} noce`
  return `${n} nocy`
}

export function BookingCta() {
  const [range, setRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState(2)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const summary =
    range?.from && range?.to ? calculateStay(range.from, range.to) : null

  const canBook = summary?.valid === true

  return (
    <section id="booking" className="py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <div className="relative bg-card rounded-3xl p-10 md:p-16 lg:p-20 border border-cream/15 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* ── left: info ─────────────────────────────────────── */}
          <div className="lg:sticky lg:top-10">
            <p className="text-amber text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-medium">
              Rezerwacja
            </p>
            <h2
              className="text-cream font-bold leading-tight mb-5 tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)" }}
            >
              Zaplanuj swój pobyt.
            </h2>
            <p className="text-sage text-lg mb-10 leading-relaxed">
              Rezerwacja bezpośrednia — bez pośredników i ukrytych opłat.
              Wybierz termin i sprawdź dostępność.
            </p>

            <div className="mb-10">
              <p
                className="text-cream font-bold leading-none"
                style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
              >
                od <span className="text-amber">450 zł</span>
              </p>
              <p className="text-sage text-sm mt-2">za noc · cena zmienia się sezonowo</p>
            </div>

            {/* price summary */}
            {summary?.valid && (
              <div className="p-6 bg-forest rounded-2xl border border-cream/10">
                <div className="flex justify-between items-baseline gap-4 mb-3">
                  <span className="text-sage text-sm">{nightsLabel(summary.nights)}</span>
                  <span className="text-cream font-bold text-2xl">
                    {summary.total.toLocaleString("pl-PL")} zł
                  </span>
                </div>
                <p className="text-sage/60 text-xs">
                  Bezpłatne odwołanie do 7 dni przed przyjazdem
                </p>
              </div>
            )}

            {summary && !summary.valid && (
              <div className="p-5 bg-forest rounded-2xl border border-amber/20">
                <p className="text-amber/80 text-sm">{summary.error}</p>
              </div>
            )}
          </div>

          {/* ── right: form ────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <div className="booking-calendar bg-forest rounded-2xl p-4 border border-cream/20">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                locale={pl}
                disabled={{ before: today }}
                fixedWeeks
                showOutsideDays
              />
            </div>

            <div className="bg-forest rounded-2xl p-4 border border-cream/20">
              <p className="text-sage text-[0.6rem] tracking-[0.22em] uppercase mb-2 font-medium">
                Liczba osób
              </p>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="bg-transparent text-cream w-full text-sm focus:outline-none cursor-pointer appearance-none"
              >
                {Array.from({ length: PRICING.maxGuests }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-card text-cream">
                    {n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}
                  </option>
                ))}
              </select>
            </div>

            <button
              disabled={!canBook}
              className="bg-amber text-forest font-semibold py-4 rounded-2xl text-base transition-all duration-300 hover:bg-amber/88 hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 mt-1"
            >
              {canBook ? "Zarezerwuj teraz" : "Wybierz termin pobytu"}
            </button>

            <p className="text-sage/55 text-xs text-center leading-relaxed">
              Bezpieczna płatność · Potwierdzenie w ciągu 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
