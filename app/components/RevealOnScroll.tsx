"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  itemSelector?: string;
  stagger?: number;
}

export function RevealOnScroll({
  children,
  className,
  itemSelector = ".reveal-item",
  stagger = 0.09,
}: RevealOnScrollProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = container.current?.querySelectorAll(itemSelector);
      if (!items?.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 28, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
