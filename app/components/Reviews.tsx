"use client";

import { useState } from "react";
import { property } from "@/app/config/property";

const reviews = property.reviews;

export function Reviews() {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-32 md:py-48 px-8 md:px-16 lg:px-24">
      <div className="mb-16">
        <p className="text-amber text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-medium">
          Opinie gości
        </p>
        <h2
          className="text-cream font-bold tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 4vw, 4.5rem)" }}
        >
          Mówią sami.
        </h2>
      </div>

      <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-20 items-start">
        <div className="flex md:flex-col gap-4">
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-full shrink-0 transition-all duration-500 ${
                i === active
                  ? "w-16 h-16 ring-2 ring-amber ring-offset-2 ring-offset-forest"
                  : "w-11 h-11 opacity-35 hover:opacity-60"
              }`}
              aria-label={r.name}
            >
              <img
                src={r.image}
                alt={r.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div>
          <div className="flex gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-amber fill-current"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>

          <blockquote
            key={active}
            className="text-cream font-medium leading-relaxed mb-6"
            style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)" }}
          >
            &ldquo;{reviews[active].text}&rdquo;
          </blockquote>

          <footer className="text-sage text-sm">
            <strong className="text-cream font-semibold">
              {reviews[active].name}
            </strong>{" "}
            &middot; {reviews[active].date}
          </footer>

          <div className="flex gap-3 mt-10">
            <button
              onClick={() =>
                setActive((prev) => (prev - 1 + reviews.length) % reviews.length)
              }
              className="w-11 h-11 rounded-full border border-cream/25 flex items-center justify-center text-sage hover:border-amber/60 hover:text-amber transition-all duration-200 text-lg"
              aria-label="Poprzednia opinia"
            >
              ←
            </button>
            <button
              onClick={() =>
                setActive((prev) => (prev + 1) % reviews.length)
              }
              className="w-11 h-11 rounded-full border border-cream/25 flex items-center justify-center text-sage hover:border-amber/60 hover:text-amber transition-all duration-200 text-lg"
              aria-label="Następna opinia"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
