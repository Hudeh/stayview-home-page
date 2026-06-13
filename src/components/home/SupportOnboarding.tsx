import Link from "next/link";
import { supportServices } from "@/lib/content";

export function SupportOnboarding() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Implementation & support
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            We set you up — not just sell you software
          </h2>
          <p className="mt-4 text-lg text-muted">
            From first login to night audit on go-live day, our team stays with you
            through configuration, training, and ongoing support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportServices.map((service) => (
            <article
              key={service.title}
              className="card-hover rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/demo"
            className="text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Talk to us about your property setup →
          </Link>
        </p>
      </div>
    </section>
  );
}
