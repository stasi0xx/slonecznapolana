"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATIONS = [
  {
    km: "1",
    name: "Zabytkowy Kościół w Mokowie",
    tag: "Kościół & Zwiedzanie",
    desc: "Prywatna plaża zaledwie 450 m od domku. Krystalicznie czysta woda, wypożyczalnia kajaków i spokojne wędkowanie — wszystko w zasięgu spaceru.",
    img: "/images/atrakcje/mokowo.jpg",
    side: "right" as const,
  },
  {
    km: "5",
    name: "Dwór z XIXw. w Dyblin",
    tag: "Szlaki & przyroda",
    desc: "Tysiące hektarów pierwotnego mazurskiego lasu. Szlaki rowerowe i piesze prowadzą między jeziorami, wśród wiekowych sosen i cichych torfowisk.",
    img: "/images/atrakcje/dyblin.jpg",
    side: "left" as const,
  },
  {
    km: "20",
    name: "Jezioro Piaseczno",
    tag: "Plaża & Jezioro",
    desc: "Gotycki zamek Kapituły Warmińskiej z XIV w., klimatyczne stare miasto nad rzeką Łyną i najlepsze restauracje regionu. Idealna wycieczka na cały dzień.",
    img: "https://picsum.photos/seed/olsztyn-castle-town/640/420",
    side: "right" as const,
  },
] satisfies {
  km: string;
  name: string;
  tag: string;
  desc: string;
  img: string;
  side: "left" | "right";
}[];

export function AttractionMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Path draws from top to bottom as you scroll through the section
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 45%",
          end: "bottom 60%",
          scrub: 1.2,
        },
      });

      // Pins pop in with a bounce when they enter view
      gsap.utils.toArray<HTMLElement>(".atm-pin").forEach((pin) => {
        gsap.from(pin, {
          scale: 0,
          opacity: 0,
          duration: 0.55,
          ease: "back.out(2.8)",
          scrollTrigger: {
            trigger: pin,
            start: "top 84%",
            toggleActions: "play none none none",
          },
        });
      });

      // Cards slide in from their side with a blur dissolve
      gsap.utils.toArray<HTMLElement>(".atm-card").forEach((card) => {
        const x = card.dataset.side === "right" ? 64 : -64;
        gsap.from(card, {
          opacity: 0,
          x,
          filter: "blur(8px)",
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Header */}
      <div className="mb-20 md:mb-28">
        <p className="text-amber text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-medium">
          Okolica
        </p>
        <h2
          className="text-cream font-bold tracking-tight leading-none"
          style={{ fontSize: "clamp(2.4rem, 4vw, 4.5rem)" }}
        >
          Mapa&nbsp;atrakcji.
        </h2>
        <p className="mt-4 text-sage text-base max-w-sm leading-relaxed">
          Trzy miejsca warte odkrycia — każde inne, każde blisko.
        </p>
      </div>

      {/* Map */}
      <div className="relative max-w-4xl mx-auto">
        {/* Dashed amber path — hidden on mobile */}
        <div
          ref={lineRef}
          aria-hidden
          className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-px pointer-events-none"
          style={{
            width: 2,
            backgroundImage:
              "repeating-linear-gradient(to bottom, #c9933a 0px, #c9933a 9px, transparent 9px, transparent 22px)",
          }}
        />

        {/* Start marker — small amber dot at top of path */}
        <div
          aria-hidden
          className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 z-10 w-3 h-3 rounded-full bg-amber/60"
        />

        {/* End marker — X at bottom */}
        <div
          aria-hidden
          className="hidden md:flex absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-7 h-7 items-center justify-center"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="2" y1="2" x2="16" y2="16" stroke="#c9933a" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="16" y1="2" x2="2" y2="16" stroke="#c9933a" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Stations */}
        <div className="flex flex-col gap-20 md:gap-28 relative z-10">
          {STATIONS.map((station, i) => (
            <div
              key={station.name}
              className={`flex items-center ${station.side === "left" ? "flex-row" : "flex-row-reverse"
                }`}
            >
              {/* Card */}
              <div className="flex-1">
                <div
                  className="atm-card bg-card rounded-2xl overflow-hidden"
                  data-side={station.side}
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)" }}
                >
                  {/* Distance — prominent at top */}
                  <div className="px-6 pt-6 pb-1 flex items-baseline gap-2">
                    <span
                      className="text-amber font-bold leading-none"
                      style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                    >
                      {station.km}
                    </span>
                    <span className="text-sage text-sm font-medium tracking-wide">
                      km od domku
                    </span>
                  </div>

                  {/* Photo */}
                  <div
                    className="mx-6 mt-4 rounded-xl overflow-hidden"
                    style={{ height: 220 }}
                  >
                    <img
                      src={station.img}
                      alt={station.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>

                  {/* Text */}
                  <div className="px-6 pt-4 pb-7">
                    <p className="text-sage text-[0.6rem] tracking-[0.22em] uppercase font-semibold mb-1.5">
                      {station.tag}
                    </p>
                    <h3
                      className="text-cream font-bold leading-tight"
                      style={{ fontSize: "clamp(1.15rem, 2vw, 1.45rem)" }}
                    >
                      {station.name}
                    </h3>
                    <p className="mt-2 text-cream/55 text-sm leading-relaxed">
                      {station.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Center pin — hidden on mobile */}
              <div
                aria-hidden
                className="hidden md:flex flex-shrink-0 w-24 justify-center"
              >
                <div className="atm-pin w-11 h-11 rounded-full bg-amber flex items-center justify-center shadow-md">
                  <span className="text-forest font-bold text-sm">{i + 1}</span>
                </div>
              </div>

              {/* Spacer on the opposite side — hidden on mobile */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
