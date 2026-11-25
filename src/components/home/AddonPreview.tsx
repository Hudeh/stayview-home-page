import Link from "next/link";
import { featuredAddons, formatPrice } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function AddonPreview() {
  const fromPrice = Math.min(...featuredAddons.map((a) => a.monthly));

  return (
    <Reveal variant="up" className="mt-12">
      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Popular add-ons
            </h3>
            <p className="mt-1 text-sm text-muted">
              From {formatPrice(fromPrice)} / month. Pick only what your property needs.
            </p>
          </div>
          <Link href="/pricing" className="text-sm font-semibold text-brand hover:underline">
            Full price list →
          </Link>
        </div>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredAddons.map((addon) => (
            <li
              key={addon.name}
              className="flex items-baseline justify-between gap-3 border-b border-border pb-3 last:border-0 sm:last:border-b sm:[&:nth-last-child(-n+3)]:border-0"
            >
              <span className="text-sm">
                {addon.name}
                {"note" in addon && addon.note ? (
                  <span className="mt-0.5 block text-xs text-muted">{addon.note}</span>
                ) : null}
              </span>
              <span className="shrink-0 font-display text-sm font-semibold tabular-nums">
                {formatPrice(addon.monthly)}
                <span className="font-sans text-xs font-normal text-muted">/mo</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
