import { differenceInCalendarDays, eachDayOfInterval } from "date-fns"
import { PRICING } from "@/app/config/pricing"

function getNightlyRate(date: Date): number {
  const month = date.getMonth() + 1
  const day = date.getDay() // 5=pt, 6=so
  const season = PRICING.seasons.find((s) => (s.months as readonly number[]).includes(month))
  const base = season?.rate ?? 450
  const surcharge = day === 5 || day === 6 ? PRICING.weekendSurcharge : 0
  return base + surcharge
}

export type PriceSummary =
  | { valid: true; nights: number; total: number }
  | { valid: false; nights: number; error: string }

export function calculateStay(checkIn: Date, checkOut: Date): PriceSummary {
  const nights = differenceInCalendarDays(checkOut, checkIn)

  if (nights < PRICING.minNights)
    return { valid: false, nights, error: `Minimalny pobyt to ${PRICING.minNights} noce` }
  if (nights > PRICING.maxNights)
    return { valid: false, nights, error: `Maksymalny pobyt to ${PRICING.maxNights} nocy` }

  const days = eachDayOfInterval({ start: checkIn, end: checkOut })
  days.pop() // dzień wyjazdu to nie noc
  const total = days.reduce((sum, d) => sum + getNightlyRate(d), 0)

  return { valid: true, nights, total }
}
