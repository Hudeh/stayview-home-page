import { Reveal } from "@/components/ui/Reveal";
import { whyStayViewPoints } from "@/lib/content";

export function WhyStayView() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.2em] text-brand uppercase">
              Why StayView
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Cloud for speed.
              <br />
              On-prem for control.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Built for properties that can&apos;t pause when connectivity dips —
              and still want a modern, multi-property stack.
            </p>
          </Reveal>

          <div className="space-y-0 divide-y divide-border border-y border-border">
            {whyStayViewPoints.map((point, i) => (
              <Reveal key={point.title} delayMs={i * 60} as="article">
                <div className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-display text-2xl font-bold text-brand/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
