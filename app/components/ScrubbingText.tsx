"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const sentence =
  "Tutaj czas nabiera innego znaczenia. Każdy poranek przynosi spokój, którego szukasz od lat. Każdy wieczór przy kominku to chwila tylko dla siebie. Nie ma pilnych maili. Nie ma korków. Jest tylko cisza, zieleń i ty.";

export function ScrubbingText() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const words = container.current?.querySelectorAll(".scrub-word");
      if (!words?.length) return;

      gsap.fromTo(
        words,
        { opacity: 0.07 },
        {
          opacity: 1,
          stagger: 0.04,
          scrollTrigger: {
            trigger: container.current,
            start: "top 72%",
            end: "bottom 28%",
            scrub: 1.8,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <p
        className="text-cream font-bold leading-snug max-w-5xl tracking-tight"
        style={{ fontSize: "clamp(1.9rem, 3.5vw, 3.8rem)" }}
      >
        {sentence.split(" ").map((word, i) => (
          <span
            key={i}
            className="scrub-word inline-block mr-[0.28em]"
            style={{ opacity: 0.07 }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}
