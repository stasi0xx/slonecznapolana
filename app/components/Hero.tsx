"use client";

import { useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 99;
const FRAME_PATH = (n: number) =>
  `/assets/hero-frames/frame_${String(n).padStart(4, "0")}.webp`;

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndex = useRef({ value: 0 });

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[index];
    if (!ctx || !img?.complete) return;

    const { width: cw, height: ch } = canvas;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }, []);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      images.push(img);
    }
    imagesRef.current = images;

    const first = images[0];
    if (first.complete) drawFrame(0);
    else first.onload = () => drawFrame(0);
  }, [drawFrame]);

  // Size canvas to viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(frameIndex.current.value);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [drawFrame]);

  useGSAP(
    () => {
      // Scrub frames as user scrolls through the tall wrapper
      gsap.to(frameIndex.current, {
        value: FRAME_COUNT - 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
        onUpdate() {
          drawFrame(Math.round(frameIndex.current.value));
        },
      });

      // Text entrance on page load (no scroll needed)
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-tag", { y: 18, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 80, opacity: 0, duration: 1.1 }, "-=0.2")
        .from(".hero-body", { y: 28, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.6 }, "-=0.5");
    },
    { scope: wrapperRef }
  );

  return (
    // 300vh gives ~2× viewport height of actual scroll travel for the scrub
    <div ref={wrapperRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-forest">
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Legibility overlays */}
        <div className="absolute inset-0 bg-forest/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/55 to-forest/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/65 via-transparent to-forest/30" />

        {/* Text content */}
        <div className="relative z-10 flex items-center h-full px-6 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-24 pb-16">
          <div className="w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            <p className="hero-tag text-amber text-[0.6rem] sm:text-[0.65rem] tracking-[0.25em] sm:tracking-[0.35em] uppercase mb-5 sm:mb-7 md:mb-8 font-medium">
              Dom Wypoczynkowy · Chudzewo
            </p>

            <h1
              className="hero-title text-cream font-bold leading-[0.92] mb-5 sm:mb-7 md:mb-8 tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 6.5vw, 7.5rem)" }}
            >
              Pod Orzechem.<br />Bez kompromisów.
            </h1>

            <p className="hero-body text-sage text-sm sm:text-base md:text-lg max-w-[17rem] sm:max-w-[22rem] mb-8 sm:mb-10 leading-relaxed">
              Przestronny dom dla 8–12 osób. Sauna, kominek, taras 30 m².
              Stworzony dla tych, którzy wiedzą, czego chcą.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#booking"
                className="bg-amber text-forest font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full text-center hover:bg-amber/88 transition-all duration-300 hover:scale-[1.02]"
              >
                Zarezerwuj pobyt
              </a>
              <a
                href="#gallery"
                className="border border-cream/55 text-cream px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full text-center hover:bg-cream/8 hover:border-cream/75 transition-all duration-300"
              >
                Odkryj domek
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sage/40">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase">Przewiń</span>
          <div className="w-px h-10 bg-gradient-to-b from-sage/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
