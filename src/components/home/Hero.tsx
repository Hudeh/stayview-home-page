import Link from "next/link";
import { ProductShot } from "@/components/home/ProductShot";

const heroShot = {
  src: "/screenshots/admin-dashboard.png",
  alt: "StayView administrator dashboard with revenue, occupancy, and department health",
  width: 1024,
  height: 640,
} as const;

export function Hero() {
  return (
    <section className="hero-mesh noise relative -mt-[4.25rem] overflow-hidden pt-[4.25rem] text-white">
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-4 pb-0 pt-16 sm:px-6 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-4xl flex-1 text-center">
          <h1 className="mx-auto max-w-2xl font-display text-[clamp(1.85rem,5vw,3rem)] font-bold leading-snug tracking-tight text-white/95">
            <span className="block overflow-hidden pb-1">
              <span className="animate-fade-up inline-block">
                One platform. Every department
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="gradient-text animate-fade-up animate-delay-1 inline-block">
                in sync.
              </span>
            </span>
          </h1>
          <p className="animate-fade-up animate-delay-2 mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Front desk, Outlet POS, night audit, and analytics — cloud-hosted or
            on-premise when the network can&apos;t be trusted.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/demo" className="btn-primary w-full shadow-lg shadow-brand/30 sm:w-auto">
              Book a free demo
            </Link>
            <Link href="/features" className="btn-ghost w-full sm:w-auto">
              Explore the platform
            </Link>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-2 relative mx-auto mt-12 w-full max-w-6xl sm:mt-14 lg:mt-16">
          <div
            className="pointer-events-none absolute inset-x-[-6%] -bottom-8 top-[30%] bg-[radial-gradient(ellipse_at_center,rgba(155,127,224,0.4),transparent_68%)]"
            aria-hidden
          />
          <div className="hero-shot relative">
            <ProductShot
              src={heroShot.src}
              alt={heroShot.alt}
              width={heroShot.width}
              height={heroShot.height}
              priority
              quality={95}
              variant="light"
              className="mx-auto w-full shadow-[0_40px_80px_-24px_rgba(0,0,0,0.65)]"
              sizes="(max-width: 1024px) 96vw, 1100px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
