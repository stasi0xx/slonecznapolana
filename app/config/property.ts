// ============================================================
// KONFIGURACJA OBIEKTU — edytuj ten plik dla każdego nowego zlecenia
// ============================================================

export const property = {

  // ----------------------------------------------------------
  // META & SEO
  // ----------------------------------------------------------
  meta: {
    title: "Pod Orzechem — Dom Wypoczynkowy Chudzewo",
    description:
      "Dom Wypoczynkowy Pod Orzechem w Chudzewie. 200 m², 8–12 osób, prywatna sauna, taras 30 m². Idealne na eventy, urodziny i wypoczynek. Rezerwacje online.",
    language: "pl",
  },

  // ----------------------------------------------------------
  // PODSTAWOWE INFO
  // ----------------------------------------------------------
  name: "Pod Orzechem",
  location: "Chudzewo, Mazury",
  tagline: "Miejsce, gdzie czas zwalnia.",
  description:
    "Dom Wypoczynkowy Pod Orzechem w Chudzewie — z dala od zgiełku, wśród ciszy i zieleni Mazur.",
  narrative:
    "Tutaj czas nabiera innego znaczenia. Każdy poranek przynosi spokój, którego szukasz od lat. Każdy wieczór przy kominku to chwila tylko dla siebie. Nie ma pilnych maili. Nie ma korków. Jest tylko cisza, zieleń i ty.",

  // ----------------------------------------------------------
  // DANE OBIEKTU
  // ----------------------------------------------------------
  capacity: {
    min: 8,
    max: 12,
  },
  area: {
    interior: "200 m²",
    terrace: "30 m²",
  },
  distanceToLake: "450 m",

  // ----------------------------------------------------------
  // KONTAKT
  // ----------------------------------------------------------
  contact: {
    phones: ["+48 500 116 667", "+48 530 921 138"],
    email: "chudzewo@gmail.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },

  // ----------------------------------------------------------
  // CENNIK
  // ----------------------------------------------------------
  pricing: {
    currency: "zł",
    seasons: [
      { months: [1, 2, 3, 11, 12], rate: 450 },  // off-season
      { months: [4, 10],           rate: 550 },  // wiosna/jesień
      { months: [5, 9],            rate: 620 },  // maj/wrzesień
      { months: [6],               rate: 700 },  // wczesne lato
      { months: [7, 8],            rate: 850 },  // peak
    ],
    weekendSurcharge: 80,  // piątek + sobota
    minNights: 2,
    maxNights: 14,
    maxGuests: 12,
    displayFrom: "450 zł",
    displaySuffix: "za noc · cena zmienia się sezonowo",
  },

  cancellationPolicy: "Bezpłatne odwołanie do 7 dni przed przyjazdem",

  // ----------------------------------------------------------
  // STATYSTYKI (sekcja Description)
  // ----------------------------------------------------------
  stats: [
    { value: "8–12", label: "Osób" },
    { value: "200 m²", label: "Powierzchnia" },
    { value: "30 m²", label: "Taras" },
    { value: "450 m", label: "Do jeziora" },
  ],

  // ----------------------------------------------------------
  // UDOGODNIENIA (AmenitiesGrid — bento 3×3)
  // ----------------------------------------------------------
  amenities: [
    {
      id: "nature",
      label: "Przyroda i spokój",
      desc: "Dom otoczony zielenią, z dala od zgiełku miast",
      image: "/images/przyroda.jpg",
      large: true,
    },
    {
      id: "wifi",
      label: "Szybki WiFi",
      desc: "Światłowód 100 Mb/s",
      image: null,
    },
    {
      id: "sauna",
      label: "Prywatna sauna",
      desc: "Fińska, opałana drewnem",
      image: "https://picsum.photos/seed/wood-sauna-dark/600/600",
    },
    {
      id: "parking",
      label: "Parking",
      desc: "2 miejsca w garażu + kilka na posesji",
      image: null,
    },
    {
      id: "kitchen",
      label: "Pełna kuchnia",
      desc: "Zabudowana, z piekarnikiem, zmywarką i ekspresem",
      image: "https://picsum.photos/seed/minimal-kitchen-dark/1200/600",
      wide: true,
    },
  ],

  // ----------------------------------------------------------
  // MARQUEE — tagi przewijające się w pasku
  // ----------------------------------------------------------
  marquee: [
    "SAUNA FIŃSKA",
    "PEŁNA KUCHNIA",
    "8-12 OSÓB",
    "SZYBKI WIFI",
    "GARAŻ + PARKING",
    "KOMINEK",
    "TARAS 30 M²",
    "EVENTY",
    "URODZINY",
    "BABY SHOWER",
    "PREZENTACJE FIRMOWE",
    "200 M² POWIERZCHNI",
  ],

  // ----------------------------------------------------------
  // KARTY ZDJĘCIOWE (sekcja Description)
  // ----------------------------------------------------------
  descriptionCards: [
    { image: "/images/domek-front.jpg",     caption: "Dom otoczony zielenią",    note: "4 rowery do dyspozycji" },
    { image: "/images/grill.jpg",           caption: "Grill elektryczny",        note: "Na tarasie, do dyspozycji gości" },
    { image: "/images/fota2.jpg",           caption: "Wnętrze z charakterem",    note: "Ekologiczne produkty (za dodatkową opłatą)" },
    { image: "/images/inside/foto1.jpg",    caption: "Kominek na wieczory",      note: "Drewno i węgiel zapewnione" },
    { image: "/images/inside/foto3.jpg",    caption: "Przestronna kuchnia",      note: "Grill elektryczny do dyspozycji" },
    { image: "/images/fota.jpg",            caption: "Jezioro 450 m stąd",       note: "Wędki dostępne dla gości" },
    { image: "/images/sypialnia.jpg",       caption: "Sypialnia",                note: "Ciche poranki, miękka pościel" },
    { image: "/images/taras.jpg",           caption: "30 m² tarasu",             note: "Palenisko na tarasie" },
    { image: "/images/salon.jpg",           caption: "Salon",                    note: "Boisko do siatkówki na terenie" },
    { image: "/images/domek-front-2.jpg",   caption: "Dom w każdej porze roku",  note: "Zima, wiosna, lato, jesień" },
  ],

  // ----------------------------------------------------------
  // GALERIA
  // ----------------------------------------------------------
  gallery: [
    { src: "/images/domek-front-2.jpg",  alt: "Domek Pod Orzechem" },
    { src: "/images/inside/foto1.jpg",   alt: "Wnętrze — salon" },
    { src: "/images/rzepak-domek.jpg",   alt: "Domek wśród natury" },
    { src: "/images/inside/foto2.jpg",   alt: "Sypialnia główna" },
    { src: "/images/inside/foto3.jpg",   alt: "Kuchnia i jadalnia" },
    { src: "/images/rzepak-zoom.jpg",    alt: "Okolica — Mazury" },
    { src: "/images/domek-front.jpg",    alt: "Taras i ogród" },
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
    heroCta:         "Zarezerwuj pobyt",
    heroCtaSecondary: "Odkryj domek",
    bookingLabel:    "Rezerwacja",
    bookingHeading:  "Zaplanuj swój pobyt.",
    bookingSubhead:  "Rezerwacja bezpośrednia — bez pośredników i ukrytych opłat. Wybierz termin i sprawdź dostępność.",
    bookingSubmit:   "Zarezerwuj teraz",
    footerTagline:   "Dom wypoczynkowy dla grup 8–12 osób. Rezerwacje 7 dni w tygodniu.",
    copyright:       "© 2026 Chudzewo. Wszelkie prawa zastrzeżone.",
  },

} as const

export type Property = typeof property
