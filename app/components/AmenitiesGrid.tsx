import { property } from "@/app/config/property";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

function layoutClasses(amenity: (typeof property.amenities)[number]) {
  if ("large" in amenity && amenity.large)
    return { col: "md:col-span-2", row: "md:row-span-2", mobileH: "h-[320px]" };
  if ("wide" in amenity && amenity.wide)
    return { col: "md:col-span-2", row: "md:row-span-1", mobileH: "h-[220px]" };
  if (amenity.image)
    return { col: "md:col-span-1", row: "md:row-span-1", mobileH: "h-[220px]" };
  return { col: "md:col-span-1", row: "md:row-span-1", mobileH: "h-[160px]" };
}

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
        {property.amenities.map((amenity) => {
          const { col, row, mobileH } = layoutClasses(amenity);
          const isLarge = "large" in amenity && amenity.large;
          return (
            <div
              key={amenity.id}
              className={`reveal-item ${col} ${row} ${mobileH} md:h-auto relative rounded-2xl overflow-hidden bg-card border border-cream/15 group`}
            >
              {amenity.image && (
                <img
                  src={amenity.image}
                  alt={amenity.label}
                  className="absolute inset-0 w-full h-full object-cover brightness-75 contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                />
              )}

              {!amenity.image && (
                <div className="absolute inset-0 bg-gradient-to-br from-card to-sage/10" />
              )}

              {amenity.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p
                  className={`font-semibold mb-1 ${amenity.image ? "text-white" : "text-cream"} ${isLarge ? "text-xl" : "text-base"}`}
                >
                  {amenity.label}
                </p>
                <p className={`text-sm leading-snug ${amenity.image ? "text-white/65" : "text-sage"}`}>{amenity.desc}</p>
              </div>
            </div>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
