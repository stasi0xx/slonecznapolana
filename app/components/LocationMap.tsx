"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { property } from "@/app/config/property";

gsap.registerPlugin(ScrollTrigger);

const { lat, lng } = property.map;
const bbox = `${lng - 0.05},${lat - 0.03},${lng + 0.05},${lat + 0.03}`;
const osmSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
const gmapsHref = `https://maps.google.com/?q=${lat},${lng}`;

export function LocationMap() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".lm-map", {
        opacity: 0,
        scale: 0.98,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });
      gsap.from(".lm-card", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.35,
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 px-8 md:px-16 lg:px-24"
    >
      <div className="mb-14 md:mb-20">
        <p className="text-amber text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-medium">
          Lokalizacja
        </p>
        <h2
          className="text-cream font-bold tracking-tight leading-none"
          style={{ fontSize: "clamp(2.4rem, 4vw, 4.5rem)" }}
        >
          Gdzie jesteśmy.
        </h2>
        <p className="mt-4 text-sage text-base max-w-sm leading-relaxed">
          Niechorze, wybrzeże Bałtyku — plaża pieszo w 5 minut.
        </p>
      </div>

      <div
        className="lm-map relative rounded-3xl overflow-hidden"
        style={{ height: "clamp(380px, 52vh, 580px)" }}
      >
        <iframe
          src={osmSrc}
          title="Lokalizacja Słoneczna Polana — Niechorze"
          className="w-full h-full border-0"
          loading="lazy"
        />

        {/* Overlay info card */}
        <div className="lm-card absolute bottom-5 left-5 md:bottom-8 md:left-8 bg-forest/95 backdrop-blur-md rounded-2xl px-5 py-4 md:px-6 md:py-5 shadow-xl max-w-[260px] md:max-w-xs">
          <p className="text-amber text-[0.6rem] tracking-[0.25em] uppercase font-semibold mb-1.5">
            Słoneczna Polana
          </p>
          <p className="text-cream font-semibold text-sm md:text-base leading-snug">
            Niechorze,<br />Zachodniopomorskie
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sage text-xs">
            <span>350 m do morza</span>
            <span className="text-sage/30 hidden md:inline">·</span>
            <span className="hidden md:inline">gmina Rewal</span>
          </div>
          <a
            href={gmapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-amber text-forest text-xs md:text-sm font-semibold px-4 py-2.5 rounded-xl transition-opacity hover:opacity-80 active:opacity-70"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                fill="currentColor"
              />
            </svg>
            Nawiguj do obiektu
          </a>
        </div>
      </div>
    </section>
  );
}
