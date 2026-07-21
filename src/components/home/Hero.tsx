import Link from "next/link";
import { ProductShot } from "@/components/home/ProductShot";
import { productScreenshots } from "@/lib/content";

const heroShot = productScreenshots.find((s) => s.id === "admin-dashboard")!;

export function Hero() {
  return (
    <section className="hero-mesh noise relative -mt-[4.25rem] overflow-hidden pt-[4.25rem] text-white">
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-4 pb-0 pt-16 sm:px-6 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-4xl flex-1 text-center">
          <h1 className="animate-fade-up mx-auto max-w-2xl font-display text-[clamp(1.85rem,5vw,3rem)] font-bold leading-snug tracking-tight text-white/95">
            One platform. Every department{" "}
            <span className="gradient-text">in sync.</span>
          </h1>
          <p className="animate-fade-up animate-delay-1 mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
            Front desk, Outlet POS, night audit, and analytics — cloud-hosted or
            on-premise when the network can&apos;t be trusted.
          </p>
          <div className="animate-fade-up animate-delay-2 mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/demo" className="btn-primary w-full shadow-lg shadow-brand/30 sm:w-auto">
              Book a free demo
            </Link>
            <Link href="/features" className="btn-ghost w-full sm:w-auto">
              Explore the platform
            </Link>
          </div>
        </div>

        <div className="animate-scale-in animate-delay-2 relative mx-auto mt-14 w-full max-w-5xl lg:mt-16">
          <div
            className="pointer-events-none absolute inset-x-[-8%] bottom-0 top-[20%] bg-[radial-gradient(ellipse_at_center,rgba(155,127,224,0.35),transparent_65%)]"
            aria-hidden
          />
          <div className="hero-product relative">
            <ProductShot
              src={heroShot.src}
              alt={heroShot.alt}
              width={heroShot.width}
              height={heroShot.height}
              priority
              variant="dark"
              className="mx-auto w-full"
              sizes="(max-width: 1024px) 94vw, 960px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
