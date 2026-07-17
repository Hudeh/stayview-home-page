import type { Metadata } from "next";
import Link from "next/link";
import { featureCategories, productScreenshots } from "@/lib/content";
import { getFeatureIcon } from "@/components/svg/FeatureIcons";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ProductShot } from "@/components/home/ProductShot";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Front desk, folios, F&B POS, laundry, inventory, HR & payroll, night audit, reports, and multi-property deployment with StayView.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Built for every department
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            StayView unifies front desk, finance, F&B, laundry, housekeeping, HR, and leadership
            in one multi-tenant platform — cloud SaaS or on your own VPS.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-24 px-4 sm:px-6">
          {featureCategories.map((feature, index) => {
            const Icon = getFeatureIcon(feature.id);
            const reversed = index % 2 === 1;
            const shot = productScreenshots.find((s) => s.id === feature.screenshotId);
            return (
              <article
                key={feature.id}
                className={`grid items-center gap-12 lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}
              >
                <div className={reversed ? "lg:[direction:ltr]" : ""}>
                  <Icon className="h-14 w-14" />
                  {"tierBadge" in feature && feature.tierBadge ? (
                    <span className="mt-4 inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                      {feature.tierBadge}
                    </span>
                  ) : null}
                  <h2 className="mt-6 text-3xl font-bold">{feature.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted">
                    {feature.description}
                  </p>
                  <ul className="mt-8 space-y-3">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />
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
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold">Product modes</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Full PMS", desc: "Rooms, F&B, inventory, night audit — complete stack." },
              { title: "F&B standalone", desc: "Outlet POS, menu, orders — without full front desk." },
              { title: "Premium front desk", desc: "StayView, reservations, housekeeping essentials." },
            ].map((mode) => (
              <div key={mode.title} className="rounded-2xl border border-border p-6 text-left">
                <h3 className="font-semibold text-brand">{mode.title}</h3>
                <p className="mt-2 text-sm text-muted">{mode.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/demo"
            className="mt-10 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Discuss your setup
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
