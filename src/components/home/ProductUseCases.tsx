import Image from "next/image";
import Link from "next/link";
import { productUseCases } from "@/lib/content";
import { ChannelManagerIllustration } from "@/components/svg/ProductIllustrations";

const productImages = {
  stayview: {
    src: "/screenshots/admin-dashboard.png",
    alt: "StayView administrator dashboard",
    width: 1024,
    height: 592,
  },
  outlet: {
    src: "/screenshots/outlet-pos.png",
    alt: "StayView Outlet restaurant POS",
    width: 1024,
    height: 614,
  },
  booking: {
    src: "/screenshots/booking-engine.png",
    alt: "StayView booking engine widget for direct hotel reservations",
    width: 861,
    height: 696,
  },
} as const;

const illustrations = {
  channel: ChannelManagerIllustration,
} as const;

export function ProductUseCases() {
  return (
    <section className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Full hospitality suite
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Four products, one platform
          </h2>
          <p className="mt-4 text-lg text-muted">
            Run rooms on StayView, F&amp;B on Outlet, OTAs on Channel Manager, and
            direct bookings on your website — all sharing the same inventory and guest
            records.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {productUseCases.map((product) => {
            const photo =
              product.id in productImages
                ? productImages[product.id as keyof typeof productImages]
                : null;
            const Illustration =
              product.id in illustrations
                ? illustrations[product.id as keyof typeof illustrations]
                : null;
            const isExternal = (href: string) => href.startsWith("http");

            return (
              <article
                key={product.id}
                className="card-hover flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
              >
                {photo ? (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.width}
                      height={photo.height}
                      className="h-full w-full object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                  </div>
                ) : Illustration ? (
                  <Illustration className="w-full" />
                ) : null}
                <div className="flex flex-1 flex-col p-5 xl:p-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold leading-tight xl:text-xl">
                      {product.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                        {product.tagline}
                      </span>
                      {product.tierBadge && (
                        <span className="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-0.5 text-[11px] font-medium text-brand-dark">
                          {product.tierBadge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-4 text-xs leading-relaxed text-muted xl:text-sm">
                    {product.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {product.useCases.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-foreground/85 xl:text-[13px]"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {product.modes && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.modes.slice(0, 2).map((mode) => (
                        <span
                          key={mode}
                          className="rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted xl:text-[11px]"
                        >
                          {mode}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex flex-col gap-2 pt-5">
                    <Link
                      href={product.ctaHref}
                      className="inline-flex items-center justify-center rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-dark xl:text-sm"
                    >
                      {product.ctaLabel}
                    </Link>
                    {product.secondaryHref &&
                      product.secondaryLabel &&
                      (isExternal(product.secondaryHref) ? (
                        <a
                          href={product.secondaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-center text-xs font-semibold text-brand hover:text-brand-dark"
                        >
                          {product.secondaryLabel} →
                        </a>
                      ) : (
                        <Link
                          href={product.secondaryHref}
                          className="text-center text-xs font-semibold text-brand hover:text-brand-dark"
                        >
                          {product.secondaryLabel} →
                        </Link>
                      ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-muted">
          <strong className="font-semibold text-foreground">Together:</strong> a channel
          booking lands in StayView, the guest checks in at the front desk, orders dinner
          on Outlet, and every charge — room, tax, and F&amp;B — sits on one folio before
          night audit closes the day. Direct website bookings follow the same path.
        </p>
      </div>
    </section>
  );
}
