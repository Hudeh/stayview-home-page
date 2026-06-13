import { integrations, trustSignals } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Integrations & connectivity</h2>
            <p className="mt-3 text-sm text-muted">
              Payment gateways, OTAs, printers, and API access — connected to the same
              StayView inventory your front desk uses.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {integrations.map((name) => (
                <li
                  key={name}
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold sm:text-2xl">Built for operational trust</h2>
            <p className="mt-3 text-sm text-muted">
              Finance and ownership need more than pretty dashboards — they need
              controls, logs, and deployment options that match your risk profile.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {trustSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-xl border border-border bg-background p-4"
                >
                  <dt className="text-sm font-semibold">{signal.label}</dt>
                  <dd className="mt-1 text-xs text-muted">{signal.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
