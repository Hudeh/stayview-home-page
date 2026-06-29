import Link from "next/link";
import { featureCategories } from "@/lib/content";
import { getFeatureIcon } from "@/components/svg/FeatureIcons";

export function FeaturePreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything your property team needs
          </h2>
          <p className="mt-4 text-lg text-muted">
            From check-in to night audit, F&B to inventory and HR payroll — StayView connects
            every department with real-time data.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureCategories.map((feature) => {
            const Icon = getFeatureIcon(feature.id);
            return (
              <article
                key={feature.id}
                className="card-hover rounded-2xl border border-border bg-surface p-8"
              >
                <Icon className="h-12 w-12" />
                {"tierBadge" in feature && feature.tierBadge ? (
                  <span className="mt-4 inline-flex rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand">
                    {feature.tierBadge}
                  </span>
                ) : null}
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {feature.bullets.slice(0, 3).map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Explore all features
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
