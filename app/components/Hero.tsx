"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-tag",   { y: 18, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 90, opacity: 0, duration: 1.2 }, "-=0.2")
        .from(".hero-body",  { y: 30, opacity: 0, duration: 0.8 }, "-=0.7")
        .from(".hero-ctas",  { y: 22, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(
          ".hero-image",
          { scale: 1.06, opacity: 0, duration: 1.8, ease: "power2.out" },
          "<-1.4"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen flex items-center overflow-hidden bg-forest"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(201,147,58,0.06),transparent)]" />

      <div className="hero-image absolute right-[-6%] top-[8%] w-[52%] h-[82%] rounded-3xl overflow-hidden rotate-[2deg] hidden lg:block will-change-transform">
        <img
          src="/images/domek-front.jpg"
          alt="Domek Chudzewo"
          className="w-full h-full object-cover brightness-90 contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-forest/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 pt-36 pb-24">
        <div className="max-w-2xl">
          <p className="hero-tag text-amber text-[0.65rem] tracking-[0.35em] uppercase mb-8 font-medium">
            Dom Wypoczynkowy · Chudzewo
          </p>

          <h1
            className="hero-title text-cream font-bold leading-[0.92] mb-8 tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 6.5vw, 7.5rem)" }}
          >
            Pod Orzechem.<br />Bez kompromisów.
          </h1>

          <p className="hero-body text-sage text-lg max-w-[22rem] mb-10 leading-relaxed">
            Przestronny dom dla 8–12 osób. Sauna, kominek, taras 30 m².
            Stworzony dla tych, którzy wiedzą, czego chcą.
          </p>

          <div className="hero-ctas flex flex-wrap gap-4">
            <a
              href="#booking"
              className="bg-amber text-forest font-semibold px-8 py-4 rounded-full hover:bg-amber/88 transition-all duration-300 hover:scale-[1.02]"
            >
              Zarezerwuj pobyt
            </a>
            <a
              href="#gallery"
              className="border border-cream/35 text-cream px-8 py-4 rounded-full hover:bg-cream/8 hover:border-cream/55 transition-all duration-300"
            >
              Odkryj domek
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sage/40">
        <span className="text-[0.6rem] tracking-[0.25em] uppercase">Przewiń</span>
        <div className="w-px h-10 bg-gradient-to-b from-sage/30 to-transparent" />
      </div>
    </section>
  );
}
