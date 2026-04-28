"use client";

import { useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 99;
const FRAME_PATH = (n: number) =>
  `/assets/hero-frames/frame_${String(n).padStart(4, "0")}.webp`;

const SHADOW = "0 2px 12px rgba(0,0,0,0.45), 0 4px 32px rgba(0,0,0,0.25)";

export function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndex = useRef({ value: 0 });
  const textRevealedRef = useRef(false);

  const revealText = useCallback(() => {
    if (textRevealedRef.current) return;
    textRevealedRef.current = true;
    gsap.fromTo(
      ".hero-reveal",
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power3.out", delay: 0.2 }
    );
  }, []);

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

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      images.push(img);
    }
    imagesRef.current = images;

    const first = images[0];
    if (first.complete) {
      drawFrame(0);
      revealText();
    } else {
      first.onload = () => {
        drawFrame(0);
        revealText();
      };
    }
  }, [drawFrame, revealText]);

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
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-forest">
        <canvas ref={canvasRef} className="absolute inset-0" />

        <div className="relative z-10 h-full">
          <div
            className="hero-reveal absolute inset-0 flex flex-col items-center justify-center gap-10"
            style={{ opacity: 0 }}
          >
            <h1
              className="text-white font-bold tracking-tight text-center leading-[0.95]"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 8.5rem)",
                textShadow: SHADOW,
              }}
            >
              Willa pod Orzechem
            </h1>

            <div className="flex flex-col items-center gap-3">
              <a
                href="#booking"
                className="bg-amber text-forest font-semibold px-10 py-4 text-base rounded-full hover:bg-amber/88 transition-all duration-300 hover:scale-[1.03]"
                style={{ textShadow: "none" }}
              >
                Zarezerwuj pobyt
              </a>
              <a
                href="#gallery"
                className="border-2 border-cream/90 text-white px-10 py-4 text-base rounded-full bg-black/30 backdrop-blur-sm hover:bg-cream/15 hover:border-cream transition-all duration-300"
                style={{ textShadow: "none" }}
              >
                Odkryj domek
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
