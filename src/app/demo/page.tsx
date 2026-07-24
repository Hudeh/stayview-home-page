import type { Metadata } from "next";
import { DemoForm } from "@/components/demo/DemoForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "Schedule a live StayView demo with the HotelProxi team.",
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
              See the platform with your workflows
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
              Front desk, Outlet POS, night audit, or multi-property setup — we walk
              through real product screens, not slides.
            </p>
            <ul className="mt-10 space-y-0 divide-y divide-white/10 border-y border-white/10">
              {[
                "30–45 minute live session",
                "Q&A with product specialists",
                "Trial branch setup for qualified hotels",
                "Implementation timeline estimate",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 text-sm text-white/85">
                  <span className="h-px w-5 shrink-0 bg-brand-light" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-white/50">
              Prefer email?{" "}
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
              Request your demo
            </h2>
            <p className="mt-2 text-sm text-muted">
              Tell us about your property — we&apos;ll follow up within one business day.
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
