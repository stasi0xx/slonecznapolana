"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const photos: { seed: string; label: string; wide?: boolean; localSrc?: string }[] = [
  { seed: "domek-front-2-local", label: "Domek Pod Orzechem", wide: true, localSrc: "/images/domek-front-2.jpg" },
  { seed: "forest-bedroom-rustic", label: "Sypialnia główna" },
  { seed: "lake-view-wooden-terrace", label: "Taras z widokiem" },
  { seed: "finnish-sauna-wood-interior", label: "Sauna fińska" },
];

export function Gallery() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = container.current?.querySelectorAll(".gallery-card");
      if (!cards?.length) return;

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 110, opacity: 0, scale: 0.93 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 52%",
              scrub: 0.9,
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <section id="gallery" ref={container} className="py-32 md:py-48">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-8 md:px-16 lg:px-24">
        {photos.map((photo, i) => (
          <div
            key={photo.seed}
            className={`gallery-card group overflow-hidden rounded-2xl relative bg-card will-change-transform ${
              i === 0 ? "md:col-span-2 aspect-[16/7]" : "aspect-[4/3]"
            }`}
          >
            <img
              src={photo.localSrc ?? `https://picsum.photos/seed/${photo.seed}/1200/800`}
              alt={photo.label}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 text-white font-medium text-sm tracking-wide">
              {photo.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
