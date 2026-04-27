"use client";

import { ZoomParallax } from "@/app/components/ui/zoom-parallax";

const photos = [
  { src: "/images/domek-front-2.jpg", alt: "Domek Pod Orzechem" },
  { src: "/images/inside/foto1.jpg", alt: "Wnętrze — salon" },
  { src: "/images/rzepak-domek.jpg", alt: "Domek wśród natury" },
  { src: "/images/inside/foto2.jpg", alt: "Sypialnia główna" },
  { src: "/images/inside/foto3.jpg", alt: "Kuchnia i jadalnia" },
  { src: "/images/rzepak-zoom.jpg", alt: "Okolica — Mazury" },
  { src: "/images/domek-front.jpg", alt: "Taras i ogród" },
];

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

      <ZoomParallax images={photos} />
    </section>
  );
}
