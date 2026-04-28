"use client";

import { ZoomParallax } from "@/app/components/ui/zoom-parallax";
import { property } from "@/app/config/property";

export function Gallery() {
  return (
    <section id="gallery" className="pt-32 md:pt-48">
      <div className="px-8 md:px-16 lg:px-24 mb-14">
        <p className="text-amber text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-medium">
          Wnętrza i otoczenie
        </p>
        <h2
          className="text-cream font-bold tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 4vw, 4.5rem)" }}
        >
          Każdy kąt przemyślany.
        </h2>
      </div>

      <ZoomParallax images={property.gallery} />
    </section>
  );
}
