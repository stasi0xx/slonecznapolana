@AGENTS.md

# Projekt: Chudzewo — landing z bookingiem

Strona dla domku wypoczynkowego **Chudzewo** na Mazurach.
Cel: landing page z systemem rezerwacji online (direct booking, bez OTA).

## Stack

- Next.js 16.2 + React 19 + TypeScript
- Tailwind CSS 4 (konfiguracja wyłącznie przez `@theme` w `globals.css`, brak `tailwind.config.js`)
- GSAP + `@gsap/react` (animacje scroll, wejścia)
- Font: **Outfit** (`next/font/google`, zmienne `--font-outfit`)

## Styl wizualny (gpt-taste)

Awwwards-level, light, beach/coastal aesthetic. Ustalony design system w `globals.css`:

| Token | Wartość | Użycie |
|-------|---------|--------|
| `forest` | `#f5f0e8` | tło strony (piasek) |
| `cream`  | `#0f2040` | tekst główny (granat) |
| `amber`  | `#1e6fa8` | akcenty, CTA (fala) |
| `sage`   | `#5e8fa3` | tekst wtórny (morska mgła) |
| `card`   | `#e8edf5` | tła kart |

Zasady designu:
- H1 max 2-3 linie, `clamp(3.5rem, 6.5vw, 7.5rem)`, kontenery `max-w-2xl`+
- Sekcje oddzielone `py-32 md:py-48`
- Bento gridy z `grid-flow-dense` — zero pustych komórek
- Brak meta-labelek ("SECTION 01", "ABOUT US")
- Przyciski: `bg-amber text-forest` (primary) / `border-cream/20 text-cream` (secondary)

## Architektura plików

```
app/
├── layout.tsx              # Outfit font, metadata PL, lang="pl"
├── globals.css             # @theme tokens, keyframe marquee
├── page.tsx                # Server Component, składa wszystkie sekcje
└── components/
    ├── Nav.tsx             # 'use client' — glass pill nav, efekt na scroll
    ├── Hero.tsx            # 'use client' + GSAP — Artistic Asymmetry hero
    ├── Marquee.tsx         # Server — CSS infinite scroll amenity tags
    ├── Description.tsx     # Server — opis + inline typography image w h2
    ├── AmenitiesGrid.tsx   # Server — bento 3×3 (udogodnienia)
    ├── ScrubbingText.tsx   # 'use client' + GSAP ScrollTrigger — word scrub
    ├── Gallery.tsx         # 'use client' + GSAP ScrollTrigger — card stacking
    ├── Reviews.tsx         # 'use client' — carousel opinii gości
    ├── BookingCta.tsx      # Server — sekcja rezerwacji (UI)
    └── Footer.tsx          # Server — linki, kontakt
```

## Plan realizacji

### Etap 1 — Statyczny landing [ZROBIONE]
Pełna struktura strony z hardkodowanymi danymi, wszystkie komponenty bez logiki bookingu.
Zdjęcia: `https://picsum.photos/seed/{keyword}/...` — do zastąpienia prawdziwymi.

### Etap 2 — Interaktywny booking widget
- Zainstalować `react-day-picker` (datepicker, React 19 kompatybilny)
- Zamienić `<input type="date">` w `BookingCta.tsx` na `react-day-picker`
- Dodać `'use client'` do `BookingCta.tsx`
- Wyliczanie ceny po stronie klienta (sezonowość: taryfy hardkodowane w config)
- Walidacja: min 2 noce, max 14 nocy, data przyjazdu < data wyjazdu

### Etap 3 — Backend (Server Actions + baza danych)
- Zainstalować `prisma`, `@prisma/client`, `zod`
- Schemat Prisma: model `Booking` (dates, guests, name, email, phone, status)
- `app/actions/bookings.ts` — Server Actions: `createBooking`, `checkAvailability`
- `app/api/availability/route.ts` — GET endpoint (kalendarz dostępności)
- `revalidatePath('/')` po każdej rezerwacji
- Walidacja wejścia przez `zod` w każdej Server Action
- **WAŻNE:** zawsze weryfikować autoryzację i dane wejściowe w Server Actions

### Etap 4 — Płatności i email
- Opcja A (PL): Przelewy24 / PayU przez webhook `app/api/webhook/route.ts`
- Opcja B: Stripe Checkout (łatwiejszy do wdrożenia)
- Email potwierdzający: `resend` (najprostsza integracja z Next.js)
- Automatyczna wiadomość do właściciela + gościa po rezerwacji

## Ważne informacje o projekcie

- Domek: do 6 osób, ~120m², prywatna sauna, kominek, taras, 450m od jeziora
- Lokalizacja: Mazury, Warmia-Mazury, Polska
- Minimalny pobyt: 2 noce
- Cena bazowa: od 450 zł/noc (zmienia się sezonowo)
- Bezpłatne odwołanie do 7 dni przed przyjazdem
- Zdjęcia z picsum.photos są placeholderami — właściciel dostarczy prawdziwe

## Uwagi techniczne (Next.js 16)

- `params` i `searchParams` są teraz **Promise** — zawsze `await params`
- `refresh()` z `next/cache` zamiast `router.refresh()`
- Nowa dyrektywa `'use cache'` z `cacheLife` dla cachowania danych
- `PageProps<'/path'>` i `LayoutProps<'/path'>` są globalnymi helperami (bez importu)
- Route Handlers: nie może być `route.ts` i `page.tsx` w tym samym segmencie
