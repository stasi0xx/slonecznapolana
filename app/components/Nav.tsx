"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 flex items-center gap-6 md:gap-8 px-5 py-3 rounded-full ${
        scrolled
          ? "bg-forest/90 backdrop-blur-xl border border-cream/20 shadow-xl shadow-black/10"
          : "bg-transparent border border-transparent"
      }`}
    >
      <Link
        href="/"
        className="text-cream font-semibold tracking-tight text-base whitespace-nowrap"
      >
        Chudzewo
      </Link>

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

      <a
        href="#booking"
        className="bg-amber text-forest text-sm font-semibold px-5 py-2 rounded-full hover:bg-amber/85 transition-colors duration-200 whitespace-nowrap"
      >
        Rezerwuj
      </a>
    </nav>
  );
}
