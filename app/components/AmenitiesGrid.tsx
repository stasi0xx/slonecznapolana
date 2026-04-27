const cards = [
  {
    id: "nature",
    label: "Przyroda i spokój",
    desc: "Dom otoczony zielenią, z dala od zgiełku miast",
    image: "/images/rzepak-domek.jpg",
    col: "md:col-span-2",
    row: "md:row-span-2",
    mobileH: "h-[320px]",
    large: true,
  },
  {
    id: "wifi",
    label: "Szybki WiFi",
    desc: "Światłowód 100 Mb/s",
    col: "md:col-span-1",
    row: "md:row-span-1",
    mobileH: "h-[160px]",
  },
  {
    id: "sauna",
    label: "Prywatna sauna",
    desc: "Fińska, opałana drewnem",
    image: "https://picsum.photos/seed/wood-sauna-dark/600/600",
    col: "md:col-span-1",
    row: "md:row-span-1",
    mobileH: "h-[220px]",
  },
  {
    id: "parking",
    label: "Parking",
    desc: "2 miejsca w garażu + kilka na posesji",
    col: "md:col-span-1",
    row: "md:row-span-1",
    mobileH: "h-[160px]",
  },
  {
    id: "kitchen",
    label: "Pełna kuchnia",
    desc: "Zabudowana, z piekarnikiem, zmywarką i ekspresem",
    image: "https://picsum.photos/seed/minimal-kitchen-dark/1200/600",
    col: "md:col-span-2",
    row: "md:row-span-1",
    mobileH: "h-[220px]",
    wide: true,
  },
];

import { RevealOnScroll } from "@/app/components/RevealOnScroll";

export function AmenitiesGrid() {
  return (
    <section id="amenities" className="py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <p className="text-amber text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-medium">
        Co znajdziesz
      </p>
      <h2
        className="text-cream font-bold tracking-tight mb-14"
        style={{ fontSize: "clamp(2.4rem, 4vw, 4.5rem)" }}
      >
        Wszystko, czego potrzebujesz.
      </h2>

      <RevealOnScroll className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[240px] gap-3 md:grid-flow-dense">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`reveal-item ${card.col} ${card.row} ${card.mobileH} md:h-auto relative rounded-2xl overflow-hidden bg-card border border-cream/15 group`}
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.label}
                className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
              />
            )}

            {!card.image && (
              <div className="absolute inset-0 bg-gradient-to-br from-card to-sage/10" />
            )}

            {card.image && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p
                className={`font-semibold mb-1 ${card.image ? "text-white" : "text-cream"} ${
                  card.large ? "text-xl" : "text-base"
                }`}
              >
                {card.label}
              </p>
              <p className={`text-sm leading-snug ${card.image ? "text-white/65" : "text-sage"}`}>{card.desc}</p>
            </div>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
