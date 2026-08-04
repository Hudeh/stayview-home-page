import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { productUseCases } from "@/lib/content";
import { ChannelManagerIllustration } from "@/components/svg/ProductIllustrations";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { Reveal } from "@/components/ui/Reveal";

const productImages = {
  stayview: {
    src: "/screenshots/admin-dashboard.png",
    alt: "StayView administrator dashboard",
    width: 1024,
    height: 640,
  },
  outlet: {
    src: "/screenshots/outlet-pos-menu.png",
    alt: "StayView Outlet POS showing Food categories, cart, and place order for Main Restaurant",
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
  const total = productUseCases.length;

  return (
    <section className="border-b border-border">
      <div className="surface-grid surface-vector-muted border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal variant="none" stagger className="max-w-2xl">
            <p className="stagger-item text-sm font-semibold tracking-[0.2em] text-brand uppercase">
              The StayView platform
            </p>
            <AnimatedHeadline
              className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl"
              lines={[
                "Four products.",
                <span key="brand" className="text-brand">
                  One source of truth.
                </span>,
              ]}
            />
            <p className="stagger-item mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Rooms, F&amp;B, OTAs, and direct bookings share inventory and guest
              records — so checkout never means reconciling three systems.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="product-stack">
        {productUseCases.map((product, index) => {
          const photo =
            product.id in productImages
              ? productImages[product.id as keyof typeof productImages]
              : null;
          const chapter = String(index + 1).padStart(2, "0");
          const ink = index % 2 === 0;
          const isLast = index === total - 1;

          return (
            <div
              key={product.id}
              className="product-stack-panel"
              style={
                {
                  zIndex: index + 1,
                  ["--stack-offset"]: `${index * 0.55}rem`,
                } as CSSProperties
              }
            >
              <article
                className={`product-stack-card ${
                  ink ? "surface-vector-muted" : "surface-vector"
                } ${isLast ? "product-stack-card-last" : ""}`}
              >
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
                  <div>
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
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm sm:text-[0.95rem]"
                        >
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
                          quality={90}
                          className="h-auto w-full object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 560px"
                        />
                      </div>
                    ) : (
                      <ChannelManagerIllustration className="relative w-full overflow-hidden rounded-xl border border-border" />
                    )}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
