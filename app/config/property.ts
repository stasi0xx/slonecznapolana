// ============================================================
// KONFIGURACJA OBIEKTU — edytuj ten plik dla każdego nowego zlecenia
// ============================================================

export const property = {

  // ----------------------------------------------------------
  // META & SEO
  // ----------------------------------------------------------
  meta: {
    title: "Słoneczna Polana | Domki nad morzem — Niechorze, Bałtyk",
    description:
      "Domki wypoczynkowe 350 m od morza w Niechorzu. Do 6 osób, taras, grill, WiFi, plac zabaw. Rezerwacje bezpośrednie: +48 608 443 428.",
    language: "pl",
  },

  // ----------------------------------------------------------
  // PODSTAWOWE INFO
  // ----------------------------------------------------------
  name: "Słoneczna Polana",
  location: "Niechorze, Zachodniopomorskie",
  tagline: "Sól w powietrzu, cisza w sercu.",
  description:
    "Domki wypoczynkowe Słoneczna Polana w Niechorzu — 350 metrów od plaży Bałtyku, w cichej, zielonej okolicy powiatu Rewal.",
  narrative:
    "Otwierasz drzwi i czujesz morskie powietrze — plaża jest stąd pieszo. Taras z drewnianymi meblami, zapach grilla, wieczorne ognisko. Dzieci biją się o trampolinę, ty nie spieszysz się nigdzie. Niechorze ma w sobie coś, przez co goście wracają rok po roku.",

  // ----------------------------------------------------------
  // DANE OBIEKTU
  // ----------------------------------------------------------
  capacity: {
    min: 2,
    max: 6,
  },
  area: {
    interior: "do uzupełnienia",
    terrace: "do uzupełnienia",
  },
  distanceTo: "350 m",

  // ----------------------------------------------------------
  // KONTAKT
  // ----------------------------------------------------------
  contact: {
    phones: ["+48 608 443 428"],
    email: "do uzupełnienia",
    facebook: "https://www.facebook.com/SlonecznaPolanaNiechorze/",
    instagram: "https://www.instagram.com",
  },

  // ----------------------------------------------------------
  // CENNIK
  // ----------------------------------------------------------
  pricing: {
    currency: "zł",
    seasons: [
      { months: [1, 2, 3, 11, 12], rate: 0 },  // do uzupełnienia
      { months: [4, 10],           rate: 0 },  // do uzupełnienia
      { months: [5, 9],            rate: 0 },  // do uzupełnienia
      { months: [6],               rate: 0 },  // do uzupełnienia
      { months: [7, 8],            rate: 0 },  // do uzupełnienia
    ],
    weekendSurcharge: 0,
    minNights: 2,
    maxNights: 14,
    maxGuests: 6,
    displayFrom: "do uzupełnienia",
    displaySuffix: "za noc · cena zmienia się sezonowo",
  },

  cancellationPolicy: "Kaucja (równowartość jednej nocy) bezzwrotna. Szczegółowe warunki anulacji dostępne telefonicznie.",

  // ----------------------------------------------------------
  // MAPA — koordynaty GPS obiektu
  // ----------------------------------------------------------
  map: {
    lat: 54.0575,
    lng: 15.0772,
  },

  // ----------------------------------------------------------
  // STATYSTYKI (sekcja Description)
  // ----------------------------------------------------------
  stats: [
    { value: "2–6",    label: "Osób" },
    { value: "350 m",  label: "Do morza" },
    { value: "WiFi + Grill", label: "Gratis" },
    { value: "Niechorze", label: "Lokalizacja" },
  ],

  // ----------------------------------------------------------
  // UDOGODNIENIA (AmenitiesGrid — bento 3×3)
  // ----------------------------------------------------------
  amenities: [
    {
      id: "morze",
      label: "Plaża o krok",
      desc: "Piaszczysta plaża Bałtyku zaledwie pięć minut pieszo",
      image: "/images/scraped/property-02.jpg",
      large: true,
    },
    {
      id: "wifi",
      label: "Szybki WiFi",
      desc: "Bezpłatny WiFi na terenie całego obiektu",
      image: null,
    },
    {
      id: "grill",
      label: "Grill i taras",
      desc: "Zadaszony taras z meblami ogrodowymi i własnym grillem",
      image: "/images/scraped/property-07.jpg",
    },
    {
      id: "parking",
      label: "Strzeżony parking",
      desc: "Jedno miejsce parkingowe bezpłatnie przy każdym domku",
      image: null,
    },
    {
      id: "playground",
      label: "Plac zabaw",
      desc: "Trampoliny, huśtawki, zjeżdżalnie i piaskownice na miejscu",
      image: "/images/scraped/property-05.jpg",
      wide: true,
    },
  ],

  // ----------------------------------------------------------
  // MARQUEE — tagi przewijające się w pasku
  // ----------------------------------------------------------
  marquee: [
    "SZYBKI WIFI",
    "GRILL PRZY DOMKU",
    "PLAC ZABAW",
    "350 M DO MORZA",
    "DO 6 OSÓB",
    "OGNISKO",
    "ZADASZONY TARAS",
    "STRZEŻONY PARKING",
    "NIECHORZE, BAŁTYK",
    "DOMKI RODZINNE",
    "ŚCIEŻKI ROWEROWE",
    "CISZA I SPOKÓJ",
  ],

  // ----------------------------------------------------------
  // KARTY ZDJĘCIOWE (sekcja Description)
  // ----------------------------------------------------------
  descriptionCards: [
    { image: "/images/scraped/property-02.jpg",  caption: "Domek z zewnątrz",       note: "Zaciszna okolica, zieleń wokół" },
    { image: "/images/scraped/property-07.jpg",  caption: "Teren obiektu",           note: "350 m do plaży Bałtyku" },
    { image: "/images/scraped/property-13.jpg",  caption: "Wnętrze domku",           note: "Przytulne i dobrze wyposażone" },
    { image: "/images/scraped/property-04.jpg",  caption: "Okolica",                 note: "Ścieżki rowerowe i las" },
    { image: "/images/scraped/property-05.jpg",  caption: "Plac zabaw",              note: "Trampoliny i zjeżdżalnie" },
    { image: "/images/scraped/property-09.jpg",  caption: "Grill i taras",           note: "Zadaszony taras przy domku" },
    { image: "/images/scraped/property-16.jpg",  caption: "Strefa wypoczynkowa",     note: "TV, salon, relaks po plaży" },
    { image: "/images/scraped/property-08.jpg",  caption: "Wnętrze",                 note: "Pełne wyposażenie kuchni" },
    { image: "/images/scraped/property-06.jpg",  caption: "Wejście do domku",        note: "Własne miejsce parkingowe" },
    { image: "/images/scraped/property-01.jpg",  caption: "Słoneczna Polana",        note: "Goście wracają co roku" },
  ],

  // ----------------------------------------------------------
  // GALERIA
  // ----------------------------------------------------------
  gallery: [
    { src: "/images/scraped/property-02.jpg",  alt: "Domki Słoneczna Polana — widok z zewnątrz" },
    { src: "/images/scraped/property-07.jpg",  alt: "Teren obiektu w Niechorzu" },
    { src: "/images/scraped/property-13.jpg",  alt: "Wnętrze domku" },
    { src: "/images/scraped/property-04.jpg",  alt: "Otoczenie obiektu — przyroda" },
    { src: "/images/scraped/property-05.jpg",  alt: "Plac zabaw dla dzieci" },
    { src: "/images/scraped/property-09.jpg",  alt: "Taras z meblami ogrodowymi i grillem" },
    { src: "/images/scraped/property-16.jpg",  alt: "Strefa wypoczynkowa w domku" },
  ],

  // ----------------------------------------------------------
  // OPINIE GOŚCI
  // ----------------------------------------------------------
  reviews: [
    {
      name: "Anna Kowalska",
      date: "Sierpień 2025",
      text: "Niesamowite miejsce. Cisza, natura i piękny domek — dokładnie tego potrzebowaliśmy po intensywnym roku. Sauna była hitem wieczorów. Na pewno wrócimy.",
      image: "https://picsum.photos/seed/portrait-anna/200/200",
    },
    {
      name: "Marek Wiśniewski",
      date: "Lipiec 2025",
      text: "Idealne miejsce dla rodziny. Dzieci zachwycone lasem, my zachwyceni kuchnią i kominkiem. Dom bardzo dobrze wyposażony, czysty i przytulny.",
      image: "https://picsum.photos/seed/portrait-marek/200/200",
    },
    {
      name: "Katarzyna Lewandowska",
      date: "Czerwiec 2025",
      text: "Drugie lato tutaj i znowu zachwyt. Widok z tarasu jest bezcenny. Właściciele bardzo pomocni. Szczerze polecam każdemu, kto szuka spokoju.",
      image: "https://picsum.photos/seed/portrait-kasia/200/200",
    },
  ],

  // ----------------------------------------------------------
  // ATRAKCJE W OKOLICY
  // ----------------------------------------------------------
  attractions: [
    {
      km: "1",
      name: "Zabytkowy Kościół w Mokowie",
      tag: "Kościół & Zwiedzanie",
      desc: "Prywatna plaża zaledwie 450 m od domku. Krystalicznie czysta woda, wypożyczalnia kajaków i spokojne wędkowanie — wszystko w zasięgu spaceru.",
      image: "/images/atrakcje/mokowo.jpg",
      side: "right" as const,
      suffix: "km od domku",
    },
    {
      km: "5",
      name: "Dwór z XIXw. w Dyblin",
      tag: "Szlaki & przyroda",
      desc: "Tysiące hektarów pierwotnego mazurskiego lasu. Szlaki rowerowe i piesze prowadzą między jeziorami, wśród wiekowych sosen i cichych torfowisk.",
      image: "/images/atrakcje/dyblin.jpg",
      side: "left" as const,
      suffix: "km od domku",
    },
    {
      km: "20",
      name: "Jezioro Piaseczno",
      tag: "Plaża & Jezioro",
      desc: "Gotycki zamek Kapituły Warmińskiej z XIV w., klimatyczne stare miasto nad rzeką Łyną i najlepsze restauracje regionu. Idealna wycieczka na cały dzień.",
      image: "https://picsum.photos/seed/olsztyn-castle-town/640/420",
      side: "right" as const,
      suffix: "km od domku",
    },
  ],

  // ----------------------------------------------------------
  // KOPIE UI (CTA, nagłówki sekcji)
  // ----------------------------------------------------------
  copy: {
    heroCta:          "Zarezerwuj pobyt",
    heroCtaSecondary: "Odkryj domki",
    bookingLabel:     "Rezerwacja",
    bookingHeading:   "Zaplanuj swój pobyt.",
    bookingSubhead:   "Rezerwacja bezpośrednia — bez pośredników i ukrytych opłat. Wybierz termin i sprawdź dostępność.",
    bookingSubmit:    "Zarezerwuj teraz",
    footerTagline:    "Domki wypoczynkowe dla rodzin. 350 m od Bałtyku. Rezerwacje: +48 608 443 428.",
    copyright:        "© 2026 Słoneczna Polana. Wszelkie prawa zastrzeżone.",
  },

} as const

export type Property = typeof property
