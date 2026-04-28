"use client";

import { useEffect, useRef, useState } from "react";
import { property } from "@/app/config/property";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const atTop = y < 60;
      setScrolled(!atTop);
      setVisible(!atTop && y < lastY.current);
      if (menuOpen && y > lastY.current) setMenuOpen(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onOutsideClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <div ref={wrapperRef} className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}`}>
      <nav
        className={`transition-all duration-500 flex items-center gap-6 md:gap-8 px-5 py-3 rounded-full ${
          scrolled || menuOpen
            ? "bg-forest/90 backdrop-blur-xl border border-cream/20 shadow-xl shadow-black/10"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-cream font-semibold tracking-tight text-base whitespace-nowrap"
        >
          {property.location.split(",")[0].trim()}
        </a>

        <div className="hidden md:flex items-center gap-5 text-sm text-sage">
          <a href="#amenities" className="hover:text-cream transition-colors duration-200">
            Udogodnienia
          </a>
          <a href="#gallery" className="hover:text-cream transition-colors duration-200">
            Galeria
          </a>
          <a href="#reviews" className="hover:text-cream transition-colors duration-200">
            Opinie
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#booking"
            className="bg-amber text-forest text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber/85 transition-colors duration-200 whitespace-nowrap"
          >
            Rezerwuj
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
          >
            <span
              className={`block w-5 h-[1.5px] bg-cream origin-center transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-cream transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-cream origin-center transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden w-full mt-2 rounded-2xl bg-forest/95 backdrop-blur-xl border border-cream/20 shadow-xl shadow-black/30 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 max-h-48 translate-y-0"
            : "opacity-0 max-h-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-4 py-2">
          {[
            { href: "#amenities", label: "Udogodnienia" },
            { href: "#gallery", label: "Galeria" },
            { href: "#reviews", label: "Opinie" },
          ].map(({ href, label }, i, arr) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className={`text-sage hover:text-cream transition-colors duration-200 py-3 text-sm ${
                i < arr.length - 1 ? "border-b border-cream/10" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
