"use client"

import { useState, useEffect, useCallback } from "react"
import { DayPicker } from "react-day-picker"
import type { DateRange } from "react-day-picker"
import { pl } from "date-fns/locale"
import { isBefore, isAfter, parseISO, addDays } from "date-fns"
import "react-day-picker/style.css"
import { calculateStay } from "@/app/lib/pricing"
import { property } from "@/app/config/property"
import { createBooking } from "@/app/actions/bookings"
import type { BookedRange } from "@/app/actions/bookings"

function nightsLabel(n: number) {
  if (n === 1) return "1 noc"
  if (n < 5) return `${n} noce`
  return `${n} nocy`
}

function buildDisabledMatcher(ranges: BookedRange[]) {
  return (date: Date) =>
    ranges.some(({ checkIn, checkOut }) => {
      const from = parseISO(checkIn)
      const to = parseISO(checkOut)
      return !isBefore(date, from) && isBefore(date, to)
    })
}

type FormState = "idle" | "submitting" | "success" | "error"

export function BookingCta() {
  const [range, setRange] = useState<DateRange | undefined>()
  const [guests, setGuests] = useState(2)
  const [guestName, setGuestName] = useState("")
  const [guestEmail, setGuestEmail] = useState("")
  const [guestPhone, setGuestPhone] = useState("")
  const [bookedRanges, setBookedRanges] = useState<BookedRange[]>([])
  const [formState, setFormState] = useState<FormState>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [bookingId, setBookingId] = useState("")
  const [idempotencyKey] = useState(() => crypto.randomUUID())

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const summary =
    range?.from && range?.to ? calculateStay(range.from, range.to) : null
  const canBook =
    summary?.valid === true &&
    guestName.trim().length >= 2 &&
    guestEmail.includes("@") &&
    guestPhone.trim().length >= 9

  const fetchAvailability = useCallback(async () => {
    try {
      const res = await fetch("/api/availability")
      const data: BookedRange[] = await res.json()
      setBookedRanges(Array.isArray(data) ? data : [])
    } catch {
      // availability will be enforced server-side regardless
    }
  }, [])

  useEffect(() => {
    fetchAvailability()
  }, [fetchAvailability])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canBook || !range?.from || !range?.to || !summary?.valid) return

    setFormState("submitting")
    setErrorMsg("")

    const result = await createBooking({
      checkIn: range.from.toISOString(),
      checkOut: range.to.toISOString(),
      nights: summary.nights,
      totalPrice: summary.total,
      guests,
      guestName: guestName.trim(),
      guestEmail: guestEmail.trim(),
      guestPhone: guestPhone.trim(),
      idempotencyKey,
    })

    if (result.success) {
      setBookingId(result.bookingId)
      setFormState("success")
      fetchAvailability()
    } else {
      setErrorMsg(result.error)
      setFormState("error")
    }
  }

  if (formState === "success") {
    return (
      <section id="booking" className="py-32 md:py-48 px-8 md:px-16 lg:px-24">
        <div className="relative bg-card rounded-3xl p-10 md:p-16 border border-cream/15 max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-amber/15 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-cream font-bold text-3xl mb-3 tracking-tight">Rezerwacja przyjęta</h2>
          <p className="text-sage mb-6 leading-relaxed">
            Potwierdzenie zostanie wysłane na <span className="text-cream">{guestEmail}</span> w ciągu 24h.
          </p>
          <p className="text-sage/50 text-xs font-mono">#{bookingId}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <div className="relative bg-card rounded-3xl p-10 md:p-16 lg:p-20 border border-cream/15 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-sage/5 rounded-full blur-3xl pointer-events-none" />

        <form onSubmit={handleSubmit}>
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* ── left: info + summary ──────────────────────────── */}
            <div className="lg:sticky lg:top-10">
              <p className="text-amber text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-medium">
                {property.copy.bookingLabel}
              </p>
              <h2
                className="text-cream font-bold leading-tight mb-5 tracking-tight"
                style={{ fontSize: "clamp(2.4rem, 4vw, 4rem)" }}
              >
                {property.copy.bookingHeading}
              </h2>
              <p className="text-sage text-lg mb-10 leading-relaxed">
                {property.copy.bookingSubhead}
              </p>

              <div className="mb-10">
                <p
                  className="text-cream font-bold leading-none"
                  style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}
                >
                  od <span className="text-amber">{property.pricing.displayFrom}</span>
                </p>
                <p className="text-sage text-sm mt-2">{property.pricing.displaySuffix}</p>
              </div>

              {summary?.valid && (
                <div className="p-6 bg-forest rounded-2xl border border-cream/10">
                  <div className="flex justify-between items-baseline gap-4 mb-3">
                    <span className="text-sage text-sm">{nightsLabel(summary.nights)}</span>
                    <span className="text-cream font-bold text-2xl">
                      {summary.total.toLocaleString("pl-PL")} zł
                    </span>
                  </div>
                  <p className="text-sage/60 text-xs">
                    {property.cancellationPolicy}
                  </p>
                </div>
              )}

              {summary && !summary.valid && (
                <div className="p-5 bg-forest rounded-2xl border border-amber/20">
                  <p className="text-amber/80 text-sm">{summary.error}</p>
                </div>
              )}

              {formState === "error" && (
                <div className="mt-4 p-5 bg-forest rounded-2xl border border-amber/30">
                  <p className="text-amber/90 text-sm">{errorMsg}</p>
                </div>
              )}
            </div>

            {/* ── right: calendar + form ─────────────────────────── */}
            <div className="flex flex-col gap-4 min-w-0">
              <div className="booking-calendar bg-forest rounded-2xl p-4 border border-cream/20 overflow-hidden min-w-0">
                <DayPicker
                  mode="range"
                  selected={range}
                  onSelect={setRange}
                  locale={pl}
                  disabled={[{ before: today }, buildDisabledMatcher(bookedRanges)]}
                  fixedWeeks
                  showOutsideDays
                />
              </div>

              {range?.from && range?.to ? (
                <>
                  <div className="bg-forest rounded-2xl p-4 border border-cream/20">
                    <p className="text-sage text-[0.6rem] tracking-[0.22em] uppercase mb-2 font-medium">
                      Liczba osób
                    </p>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="bg-transparent text-cream w-full text-sm focus:outline-none cursor-pointer appearance-none"
                    >
                      {Array.from({ length: property.pricing.maxGuests }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n} className="bg-card text-cream">
                          {n} {n === 1 ? "osoba" : n < 5 ? "osoby" : "osób"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-forest rounded-2xl p-4 border border-cream/20">
                    <label className="block">
                      <p className="text-sage text-[0.6rem] tracking-[0.22em] uppercase mb-2 font-medium">
                        Imię i nazwisko
                      </p>
                      <input
                        type="text"
                        required
                        minLength={2}
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Jan Kowalski"
                        className="bg-transparent text-cream w-full text-sm placeholder:text-sage/40 focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="bg-forest rounded-2xl p-4 border border-cream/20">
                    <label className="block">
                      <p className="text-sage text-[0.6rem] tracking-[0.22em] uppercase mb-2 font-medium">
                        Adres e-mail
                      </p>
                      <input
                        type="email"
                        required
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="jan@example.com"
                        className="bg-transparent text-cream w-full text-sm placeholder:text-sage/40 focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="bg-forest rounded-2xl p-4 border border-cream/20">
                    <label className="block">
                      <p className="text-sage text-[0.6rem] tracking-[0.22em] uppercase mb-2 font-medium">
                        Telefon
                      </p>
                      <input
                        type="tel"
                        required
                        minLength={9}
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="+48 123 456 789"
                        className="bg-transparent text-cream w-full text-sm placeholder:text-sage/40 focus:outline-none"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!canBook || formState === "submitting"}
                    className="bg-amber text-forest font-semibold py-4 rounded-2xl text-base transition-all duration-300 hover:bg-amber/88 hover:scale-[1.01] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 mt-1"
                  >
                    {formState === "submitting"
                      ? "Wysyłanie..."
                      : canBook
                      ? property.copy.bookingSubmit
                      : "Wypełnij formularz"}
                  </button>

                  <p className="text-sage/55 text-xs text-center leading-relaxed">
                    Bezpieczna płatność · Potwierdzenie w ciągu 24h
                  </p>
                </>
              ) : (
                <p className="text-sage/50 text-xs text-center py-2">
                  Wybierz termin przyjazdu i wyjazdu
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
