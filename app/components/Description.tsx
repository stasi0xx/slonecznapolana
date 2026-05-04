"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { property } from "@/app/config/property";

gsap.registerPlugin(ScrollTrigger);

const ROTATIONS = ["-1.8deg", "2.2deg", "-1.1deg", "2.8deg", "-2.4deg", "1.5deg", "-1.9deg", "2.1deg", "-1.3deg", "2.5deg"];

export function Description() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="overflow-hidden">
      <div className="flex flex-col justify-center min-h-svh py-10 md:py-24">
        {/* Header */}
        <div className="px-6 md:px-16 lg:px-24 mb-5 md:mb-16 flex-none">
          <div className="max-w-5xl">
            <h2
              className="text-cream font-bold leading-[1.05] tracking-tight mb-3 md:mb-6"
              style={{ fontSize: "clamp(1.9rem, 4.5vw, 5rem)" }}
            >
              Miejsce, gdzie{" "}
              <span
                className="inline-block w-20 h-9 md:w-28 md:h-11 rounded-full align-middle mx-2 md:mx-3 bg-cover bg-center relative -top-1 opacity-90"
                style={{ backgroundImage: "url(/images/scraped/property-08.jpg)" }}
                aria-hidden="true"
              />
              {" "}czas zwalnia.
            </h2>
            <p className="text-sage text-base md:text-lg leading-relaxed max-w-xl">
              {property.description}
            </p>
          </div>
        </div>

        {/* Polaroid strip — szersze niż viewport, GSAP przesuwa */}
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-6 px-6 md:px-16 lg:px-24 pb-4 will-change-transform"
          style={{ width: "max-content" }}
        >
          {property.descriptionCards.map((card, i) => (
            <div
              key={i}
              className="flex-none transition-transform duration-300 hover:scale-105"
              style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]})` }}
            >
              <div
                className="bg-white shadow-[0_4px_24px_rgba(0,0,0,0.13),0_1px_4px_rgba(0,0,0,0.08)] flex flex-col"
                style={{ width: "clamp(250px, 38vw, 300px)" }}
              >
                <div
                  className="overflow-hidden bg-card"
                  style={{ height: "clamp(170px, 28vh, 320px)" }}
                >
                  <img
                    src={card.image}
                    alt={card.caption}
                    draggable={false}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-3 md:px-4 pt-3 md:pt-4 pb-4 md:pb-5">
                  <p className="text-[#1b1e18] font-semibold text-xs md:text-sm leading-snug">
                    {card.caption}
                  </p>
                  <p className="text-[#6b7c63] text-[10px] md:text-xs mt-1 leading-snug">
                    {card.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="px-6 md:px-16 lg:px-24 mt-6 md:mt-16 flex-none">
          <div className="flex flex-wrap gap-6 md:gap-10 text-sm border-t border-cream/15 pt-6 md:pt-12">
            {property.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-amber font-bold"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2.8rem)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sage mt-1 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
