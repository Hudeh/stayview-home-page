import { whyStayViewPoints } from "@/lib/content";

export function WhyStayView() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-brand/[0.04] to-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Why StayView
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Built for operations, not just distribution
          </h2>
          <p className="mt-4 text-lg text-muted">
          Most hotel software is built for a market with reliable infrastructure everywhere and assumes OTA connectivity is the hard part. StayView is built for the reality most properties actually operate in — including when the network doesn't cooperate.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {whyStayViewPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="text-lg font-semibold text-brand">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
