import { NextResponse } from "next/server"
import { getBookedRanges } from "@/app/actions/bookings"

export async function GET() {
  try {
    const ranges = await getBookedRanges()
    return NextResponse.json(ranges, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30" },
    })
  } catch {
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 })
  }
}
