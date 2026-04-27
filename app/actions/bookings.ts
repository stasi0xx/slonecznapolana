"use server"

import { prisma } from "@/app/lib/prisma"
import { Prisma } from "@prisma/client"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const BookingSchema = z.object({
  checkIn: z.coerce.date(),
  checkOut: z.coerce.date(),
  nights: z.number().int().min(2).max(14),
  totalPrice: z.number().int().min(1),
  guests: z.number().int().min(1).max(6),
  guestName: z.string().min(2).max(100).trim(),
  guestEmail: z.string().email().trim(),
  guestPhone: z.string().min(9).max(20).trim(),
  idempotencyKey: z.string().uuid(),
})

export type BookingInput = z.infer<typeof BookingSchema>
export type BookingResult =
  | { success: true; bookingId: string }
  | { success: false; error: string }

function purgeExpiredPending(tx: Prisma.TransactionClient) {
  return tx.booking.deleteMany({
    where: { status: "PENDING", expiresAt: { lt: new Date() } },
  })
}

export async function createBooking(input: unknown): Promise<BookingResult> {
  const parsed = BookingSchema.safeParse(input)
  if (!parsed.success) {
    return { success: false, error: "Nieprawidłowe dane formularza." }
  }
  const data = parsed.data

  if (data.checkIn >= data.checkOut) {
    return { success: false, error: "Data wyjazdu musi być późniejsza niż przyjazdu." }
  }

  const MAX_RETRIES = 3
  let attempt = 0

  while (attempt < MAX_RETRIES) {
    try {
      const booking = await prisma.$transaction(
        async (tx) => {
          await purgeExpiredPending(tx)

          const conflict = await tx.booking.findFirst({
            where: {
              status: { in: ["PENDING", "CONFIRMED"] },
              checkIn: { lt: data.checkOut },
              checkOut: { gt: data.checkIn },
            },
          })

          if (conflict) {
            throw new Error("Wybrany termin jest już zajęty. Wybierz inne daty.")
          }

          return tx.booking.create({
            data: {
              ...data,
              status: "PENDING",
              expiresAt: new Date(Date.now() + 15 * 60 * 1000),
            },
          })
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
      )

      revalidatePath("/")
      return { success: true, bookingId: booking.id }
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2034" &&
        ++attempt < MAX_RETRIES
      ) {
        continue
      }
      if (error instanceof Error) {
        return { success: false, error: error.message }
      }
      throw error
    }
  }

  return { success: false, error: "Nie udało się zarezerwować. Spróbuj ponownie." }
}

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
