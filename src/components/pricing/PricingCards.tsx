import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { formatPrice, hotelCoreBands, hotelCoreIncludes } from "@/lib/content";

export function PricingCards() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {hotelCoreBands.map((band, index) => (
          <Reveal
            key={band.id}
            as="article"
            delayMs={index * 80}
            variant="fade"
            className="flex flex-col rounded-xl border border-border bg-surface p-6"
          >
            <h3 className="font-display text-lg font-bold text-foreground">{band.rooms}</h3>
            <div className="mt-6">
              <span className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {formatPrice(band.monthly)}
              </span>
              <span className="text-muted"> / month</span>
            </div>
            <p className="mt-2 text-sm text-muted">
              {formatPrice(band.annual)} / year
              <span className="block text-xs">2 months included</span>
            </p>
            <p className="mt-4 border-t border-border pt-4 text-sm text-muted">
              On-prem {formatPrice(band.onPrem)}
              <span className="block text-xs">
                then {formatPrice(band.maintenance)} / year maintenance
              </span>
            </p>
            <Link
              href="/demo"
              className="header-cta mt-6 block rounded-lg border border-border py-3 text-center text-sm font-semibold transition hover:border-brand hover:text-brand"
            >
              Get started
            </Link>
          </Reveal>
        ))}
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {hotelCoreIncludes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <span className="mt-2 h-px w-3 shrink-0 bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
