const items = [
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
];

export function Marquee() {
  return (
    <div className="py-7 border-y border-cream/15 overflow-hidden bg-card">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[0.62rem] tracking-[0.28em] text-sage/60 font-medium uppercase inline-flex items-center"
          >
            {item}
            <span className="text-amber/30 mx-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
