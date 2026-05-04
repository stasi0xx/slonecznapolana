import { NextResponse } from "next/server"
import { getBookedRanges } from "@/app/lib/availability"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const ranges = await getBookedRanges()
    return NextResponse.json(ranges, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30" },
    })
  } catch (err) {
    console.error("[availability]", err)
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 })
  }
}
