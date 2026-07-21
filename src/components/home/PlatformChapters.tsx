import Image from "next/image";
import Link from "next/link";
import { productUseCases } from "@/lib/content";
import { ChannelManagerIllustration } from "@/components/svg/ProductIllustrations";
import { Reveal } from "@/components/ui/Reveal";

const productImages = {
  stayview: {
    src: "/screenshots/admin-dashboard.png",
    alt: "StayView administrator dashboard",
    width: 1024,
    height: 592,
  },
  outlet: {
    src: "/screenshots/outlet-pos-bar45.png",
    alt: "StayView Outlet POS with wine menu and an open dine-in order ticket",
    width: 1024,
    height: 640,
  },
  booking: {
    src: "/screenshots/booking-engine.png",
    alt: "StayView booking engine widget for direct hotel reservations",
    width: 861,
    height: 696,
  },
} as const;

export function PlatformChapters() {
  return (
    <section className="border-b border-border">
      <div className="surface-grid border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-brand uppercase">
              The StayView platform
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Four products.
              <br />
              <span className="text-brand">One source of truth.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Rooms, F&amp;B, OTAs, and direct bookings share inventory and guest
              records — so checkout never means reconciling three systems.
            </p>
          </Reveal>
        </div>
      </div>

      <div>
        {productUseCases.map((product, index) => {
          const photo =
            product.id in productImages
              ? productImages[product.id as keyof typeof productImages]
              : null;
          const reversed = index % 2 === 1;
          const ink = index % 2 === 0;
          const chapter = String(index + 1).padStart(2, "0");

          return (
            <div
              key={product.id}
              className={`border-b border-border ${
                ink ? "bg-background" : "bg-surface"
              }`}
            >
              <Reveal as="article" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    reversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-5xl font-bold text-brand/20 sm:text-6xl">
                        {chapter}
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold tracking-[0.18em] text-brand uppercase">
                          {product.name}
                        </p>
                        {product.tierBadge ? (
                          <span className="mt-2 inline-block text-xs font-semibold tracking-wide text-brand-dark uppercase">
                            {product.tierBadge}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-4xl">
                      {product.tagline}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                      {product.description}
                    </p>
                    <ul className="mt-8 space-y-3.5">
                      {product.useCases.slice(0, 5).map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm sm:text-[0.95rem]">
                          <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 flex flex-wrap items-center gap-5">
                      <Link href={product.ctaHref} className="btn-primary">
                        {product.ctaLabel}
                      </Link>
                      {product.secondaryHref && product.secondaryLabel ? (
                        <Link
                          href={product.secondaryHref}
                          className="text-sm font-semibold text-brand hover:text-brand-dark"
                        >
                          {product.secondaryLabel} →
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <div className="relative">
                      <div
                        className="absolute -inset-3 rounded-xl bg-brand/8 sm:-inset-4"
                        aria-hidden
                      />
                      {photo ? (
                        <div className="shot-frame-light relative">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={photo.width}
                            height={photo.height}
                            className="h-auto w-full object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 560px"
                          />
                        </div>
                      ) : (
                        <ChannelManagerIllustration className="relative w-full overflow-hidden rounded-xl border border-border" />
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
