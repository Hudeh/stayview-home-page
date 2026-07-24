"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
};

type HeroSlideshowProps = {
  slides: HeroSlide[];
  intervalMs?: number;
};

export function HeroSlideshow({ slides, intervalMs = 3800 }: HeroSlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || paused || slides.length < 2) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, paused, slides.length]);

  return (
    <div
      className="hero-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slideshow-glow" aria-hidden />

      <div className="shot-frame-light hero-slideshow-frame relative">
        <div
          className="flex items-center gap-1.5 border-b border-border bg-[#f3f0f8] px-3 py-2.5"
          aria-hidden
        >
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-3 h-4 flex-1 rounded bg-white" />
        </div>

        <div className="hero-slideshow-stage relative aspect-[1024/640] overflow-hidden bg-[#f7f5fb]">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`hero-slide ${i === active ? "is-active" : ""}`}
              aria-hidden={i !== active}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                priority={i === 0}
                quality={100}
                sizes="(max-width: 1024px) 96vw, 72vw"
                className="h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p
          key={slides[active]?.label}
          className="hero-slide-label font-display text-sm font-semibold tracking-wide text-white/85"
        >
          {slides[active]?.label}
        </p>
        <div className="flex items-center gap-2" role="tablist" aria-label="Product screenshots">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${slide.label}`}
              className={`hero-slide-dot ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              {i === active ? (
                <span key={`progress-${active}`} className="hero-slide-progress" />
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
