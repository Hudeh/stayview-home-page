import Link from "next/link";
import { HeroIllustration } from "@/components/svg/HeroIllustration";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          {/* <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-light">
            By HotelProxi · Cloud & on-premise
          </p> */}
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            One intelligent platform for{" "}
            <span className="gradient-text">hotels, hostels &amp; more</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            {site.tagline}. Front desk, F&amp;B POS, channel manager, booking engine,
            night audit, inventory, and analytics — for lodges, serviced apartments,
            and growing hospitality groups.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Book a free demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View pricing
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {[
              { label: "Products", value: "4" },
              { label: "Deployment", value: "Cloud / VPS" },
              { label: "Support", value: "24×7 chat" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs uppercase tracking-wider text-white/40">{stat.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:pl-8">
          <HeroIllustration className="mx-auto w-full max-w-lg drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
