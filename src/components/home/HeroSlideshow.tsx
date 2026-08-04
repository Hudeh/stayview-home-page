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

export function HeroSlideshow({ slides, intervalMs = 4200 }: HeroSlideshowProps) {
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
      className="hero-slideshow hero-slideshow--bleed"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slideshow-stage relative min-h-[48vh] flex-1 overflow-hidden lg:min-h-0">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide ${i === active ? "is-active" : ""}`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              quality={100}
              sizes="(max-width: 1023px) 100vw, 62vw"
              className="object-cover object-left-top"
            />
          </div>
        ))}
        <div className="hero-slideshow-fade" aria-hidden />
      </div>

      <div className="hero-slideshow-bar flex items-center justify-between gap-4 px-5 py-4 sm:px-7">
        <p
          key={slides[active]?.label}
          className="hero-slide-label font-display text-sm font-semibold tracking-wide text-white/90 sm:text-base"
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
