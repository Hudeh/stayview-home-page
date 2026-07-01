import Link from "next/link";
import { formatPrice, plans } from "@/lib/content";

export function PricingCards({ showAnnualNote = true }: { showAnnualNote?: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.id}
          className={`card-hover relative flex flex-col rounded-2xl border p-8 ${
            plan.highlight
              ? "border-brand bg-surface shadow-xl shadow-brand/10 ring-2 ring-brand"
              : "border-border bg-surface"
          }`}
        >
          {plan.highlight && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
              Most popular
            </span>
          )}
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="mt-2 text-sm text-muted">{plan.description}</p>
          <div className="mt-6">
            <span className="text-4xl font-bold">{formatPrice(plan.monthly)}</span>
            <span className="text-muted"> / month</span>
          </div>
          {showAnnualNote && (
            <p className="mt-1 text-xs text-muted">
              or {formatPrice(plan.annual)}/mo billed annually
            </p>
          )}
          <p className="mt-4 text-sm font-medium text-brand">
            {plan.rooms}
          </p>
          <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-8">
            {plan.modules.map((m) => (
              <li key={m} className="flex items-start gap-2 text-sm">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M6.5 11.5L3 8l1-1 2.5 2.5L12 4l1 1-6.5 6.5z" />
                </svg>
                {m}
              </li>
            ))}
          </ul>
          <Link
            href="/demo"
            className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
              plan.highlight
                ? "bg-brand text-white hover:bg-brand-dark"
                : "border border-border hover:border-brand hover:text-brand"
            }`}
          >
            Get started
          </Link>
        </article>
      ))}
    </div>
  );
}
