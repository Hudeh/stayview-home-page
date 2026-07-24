"use client";

import { useEffect, useState } from "react";

const departments = [
  "Front desk",
  "Housekeeping",
  "Accounts",
  "Food & beverage",
  "Maintenance",
  "Laundry",
  "Inventory",
  "Security",
  "HR",
  "Night audit",
  "Banquet",
  "Admin",
] as const;

type HeroHeadlineProps = {
  intervalMs?: number;
};

export function HeroHeadline({ intervalMs = 2200 }: HeroHeadlineProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % departments.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, reduceMotion]);

  return (
    <h1 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-white/95">
      <span className="block overflow-hidden pb-1">
        <span className="animate-fade-up inline-block">One platform.</span>
      </span>
      {reduceMotion ? (
        <span className="mt-1 block">
          <span className="gradient-text">Every department</span>
        </span>
      ) : (
        <span className="mt-1 block">
          <span className="sr-only">
            Every department in sync: {departments.join(", ")}.
          </span>
          <span aria-hidden className="hero-dept-rotator">
            {departments.map((dept, i) => (
              <span
                key={dept}
                className={`hero-dept-item ${i === index ? "is-active" : ""}`}
              >
                <span className="gradient-text">{dept}</span>
              </span>
            ))}
          </span>
        </span>
      )}
      <span className="mt-1 block overflow-hidden">
        <span className="animate-fade-up animate-delay-2 inline-block text-white/95">
          in sync.
        </span>
      </span>
    </h1>
  );
}
