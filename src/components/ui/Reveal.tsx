"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur" | "fade" | "none";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "article" | "li" | "figure";
  variant?: RevealVariant;
  /** Stagger direct children when this block enters view */
  stagger?: boolean;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
  variant = "up",
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant === "up" ? "" : `reveal-${variant}`;

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${stagger ? "reveal-stagger" : ""} ${className}`.trim()}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
