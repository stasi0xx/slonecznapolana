import { prisma } from "@/app/lib/prisma"

export type BookedRange = { checkIn: string; checkOut: string }

export async function getBookedRanges(): Promise<BookedRange[]> {
  await prisma.booking.deleteMany({
    where: { status: "PENDING", expiresAt: { lt: new Date() } },
  })

  const bookings = await prisma.booking.findMany({
    where: { status: { in: ["PENDING", "CONFIRMED"] } },
    select: { checkIn: true, checkOut: true },
  })

  return bookings.map((b) => ({
    checkIn: b.checkIn.toISOString().slice(0, 10),
    checkOut: b.checkOut.toISOString().slice(0, 10),
  }))
}
