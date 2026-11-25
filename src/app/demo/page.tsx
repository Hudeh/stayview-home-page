import type { Metadata } from "next";
import { DemoForm } from "@/components/demo/DemoForm";
import { site, trialOffer, whatsappUrl, yearEndOffer } from "@/lib/content";

export const metadata: Metadata = {
  title: "Demo & free trial",
  description:
    "Start a 14-day StayView trial or book a live demo. Free setup and migration if you sign before year-end.",
};

export default function DemoPage() {
  return (
    <section className="relative -mt-[4.25rem] min-h-screen overflow-hidden pt-[4.25rem]">
      <div className="grid lg:min-h-[calc(100vh-4.25rem)] lg:grid-cols-2">
        <div className="hero-mesh noise relative flex flex-col justify-center px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-24">
          <div className="relative max-w-lg">
            <p className="font-display text-[clamp(2.5rem,6vw,3.75rem)] font-extrabold leading-none tracking-[-0.04em]">
              Stay<span className="text-brand-light">View</span>
            </p>
            <h1 className="mt-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {trialOffer.headline} or a live demo
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
              {trialOffer.summary} Prefer a walkthrough first? We&apos;ll show front desk,
              Outlet POS, Mart, and night audit on real screens — not slides.
            </p>
            <ul className="mt-10 space-y-0 divide-y divide-white/10 border-y border-white/10">
              {[
                "14-day trial branch — no card to start",
                "30–45 minute live demo if you want a guide",
                `Year-end: free setup & migration before ${yearEndOffer.deadlineLabel}`,
                "WhatsApp us anytime — Nigerian hoteliers prefer chat",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 text-sm text-white/85">
                  <span className="h-px w-5 shrink-0 bg-brand-light" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-white/50">
              Prefer WhatsApp?{" "}
              <a
                href={whatsappUrl("Hi StayView — I want to start a 14-day trial.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-light hover:underline"
              >
                {site.phone}
              </a>
              {" · "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-brand-light hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="surface-vector relative flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto w-full max-w-md">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Start trial or book demo
            </h2>
            <p className="mt-2 text-sm text-muted">
              Tell us about your property — we&apos;ll follow up within one business day
              (often sooner on WhatsApp).
            </p>
            <div className="mt-8">
              <DemoForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
