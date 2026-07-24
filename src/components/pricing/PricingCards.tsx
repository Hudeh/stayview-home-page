import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { formatPrice, plans } from "@/lib/content";

export function PricingCards({ showAnnualNote = true }: { showAnnualNote?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-0 lg:overflow-hidden lg:rounded-xl lg:border lg:border-border">
      {plans.map((plan, index) => (
        <Reveal
          key={plan.id}
          as="article"
          delayMs={index * 100}
          variant="fade"
          className={`relative flex flex-col p-8 ${
            plan.highlight
              ? "bg-brand-ink text-white lg:z-10 lg:scale-[1.02] lg:rounded-xl lg:shadow-2xl lg:shadow-brand-ink/30"
              : `rounded-xl border border-border bg-surface lg:rounded-none lg:border-0 ${
                  index < plans.length - 1 ? "lg:border-r lg:border-border" : ""
                }`
          }`}
        >
          {plan.highlight && (
            <span className="mb-4 inline-flex w-fit bg-brand-light px-2.5 py-1 text-[11px] font-bold tracking-wide text-brand-ink uppercase">
              Recommended
            </span>
          )}
          <h3
            className={`font-display text-xl font-bold ${
              plan.highlight ? "text-white" : "text-foreground"
            }`}
          >
            {plan.name}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${plan.highlight ? "text-white/65" : "text-muted"}`}>
            {plan.description}
          </p>
          <div className="mt-8">
            <span className="font-display text-4xl font-bold tracking-tight">
              {formatPrice(plan.monthly)}
            </span>
            <span className={plan.highlight ? "text-white/50" : "text-muted"}> / month</span>
          </div>
          {showAnnualNote && (
            <p className={`mt-1 text-xs ${plan.highlight ? "text-white/45" : "text-muted"}`}>
              or {formatPrice(plan.annual)}/mo billed annually
            </p>
          )}
          <p
            className={`mt-4 text-sm font-semibold ${
              plan.highlight ? "text-brand-light" : "text-brand"
            }`}
          >
            {plan.rooms}
          </p>
          <ul
            className={`mt-8 flex-1 space-y-3 border-t pt-8 ${
              plan.highlight ? "border-white/12" : "border-border"
            }`}
          >
            {plan.modules.map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-sm">
                <span
                  className={`mt-2 h-px w-3 shrink-0 ${
                    plan.highlight ? "bg-brand-light" : "bg-brand"
                  }`}
                />
                <span className={plan.highlight ? "text-white/88" : ""}>{m}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/demo"
            className={`header-cta mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition ${
              plan.highlight
                ? "bg-white text-brand hover:bg-white/90"
                : "border border-border hover:border-brand hover:text-brand"
            }`}
          >
            Get started
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
