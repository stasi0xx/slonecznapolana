import { property } from "@/app/config/property";

const items = [...property.marquee, ...property.marquee];

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
