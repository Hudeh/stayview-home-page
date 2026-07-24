import type { Metadata } from "next";
import Link from "next/link";
import { featureCategories, productScreenshots } from "@/lib/content";
import { getFeatureIcon } from "@/components/svg/FeatureIcons";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ProductShot } from "@/components/home/ProductShot";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Front desk, folios, F&B POS, laundry, inventory, HR & payroll, night audit, reports, and multi-property deployment with StayView.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="hero-mesh noise relative -mt-[4.25rem] overflow-hidden pt-[calc(4.25rem+6rem)] pb-24 text-white sm:pb-32 sm:pt-[calc(4.25rem+8rem)]">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
            Features
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Built for every department
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/65">
            StayView unifies front desk, finance, F&amp;B, laundry, housekeeping, HR,
            and leadership — cloud SaaS or on your own VPS.
          </p>
        </div>
      </section>

      <section className="surface-vector-muted py-8 sm:py-12">
        <div className="mx-auto max-w-6xl space-y-4 px-4 sm:px-6">
          {featureCategories.map((feature, index) => {
            const Icon = getFeatureIcon(feature.id);
            const reversed = index % 2 === 1;
            const shot = productScreenshots.find((s) => s.id === feature.screenshotId);
            return (
              <Reveal key={feature.id} as="article">
                <div
                  className={`surface-vector grid items-center gap-12 rounded-xl border border-border px-6 py-12 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-16 ${
                    reversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    <div className="flex items-center gap-4">
                      <Icon className="h-12 w-12" />
                      <span className="font-display text-3xl font-bold text-brand/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {"tierBadge" in feature && feature.tierBadge ? (
                      <span className="mt-4 inline-block text-xs font-semibold tracking-wide text-brand uppercase">
                        {feature.tierBadge}
                      </span>
                    ) : null}
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {feature.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                      {feature.description}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {feature.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm">
                          <span className="mt-2 h-px w-4 shrink-0 bg-brand" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={reversed ? "lg:[direction:ltr]" : ""}>
                    {shot ? (
                      <ProductShot
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        sizes="(max-width: 1024px) 100vw, 480px"
                      />
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border surface-vector-muted py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Product modes</h2>
          <div className="mt-10 grid gap-0 divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { title: "Full PMS", desc: "Rooms, F&B, inventory, night audit — complete stack." },
              { title: "F&B standalone", desc: "Outlet POS, menu, orders — without full front desk." },
              { title: "Premium front desk", desc: "StayView, reservations, housekeeping essentials." },
            ].map((mode) => (
              <div key={mode.title} className="px-0 py-6 sm:px-8 sm:py-8 first:sm:pl-0 last:sm:pr-0">
                <h3 className="font-display font-semibold text-brand">{mode.title}</h3>
                <p className="mt-2 text-sm text-muted">{mode.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/demo" className="btn-primary mt-10">
            Discuss your setup
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
