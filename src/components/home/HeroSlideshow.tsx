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

export function HeroSlideshow({ slides, intervalMs = 4500 }: HeroSlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = slides[active] ?? slides[0];
  const peek = slides[(active + 1) % slides.length];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || paused || slides.length < 2) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs, paused, slides.length]);

  if (!current) return null;

  return (
    <div
      className="hero-stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-stage-glow" aria-hidden />

      <div className="hero-stage-tabs" role="tablist" aria-label="Product screenshots">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`hero-stage-tab ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {slide.label}
          </button>
        ))}
      </div>

      <div className="hero-stage-stack">
        {peek && peek.src !== current.src ? (
          <div className="hero-stage-peek" aria-hidden>
            <div className="hero-window">
              <div className="hero-window-chrome">
                <span />
                <span />
                <span />
              </div>
              <Image
                src={peek.src}
                alt=""
                width={peek.width}
                height={peek.height}
                quality={90}
                sizes="(max-width: 1023px) 70vw, 40vw"
                className="hero-window-img"
              />
            </div>
          </div>
        ) : null}

        <div className="hero-stage-main">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`hero-stage-shot ${i === active ? "is-active" : ""}`}
              aria-hidden={i !== active}
            >
              <div className="hero-window hero-window--primary">
                <div className="hero-window-chrome">
                  <span />
                  <span />
                  <span />
                  <p className="hero-window-title">app.stayview.com.ng</p>
                </div>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  priority={i === 0}
                  quality={100}
                  sizes="(max-width: 1023px) 94vw, 58vw"
                  className="hero-window-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
