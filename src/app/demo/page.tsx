import type { Metadata } from "next";
import { DemoForm } from "@/components/demo/DemoForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "Schedule a live StayView demo with the HotelProxi team.",
};

export default function DemoPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Book a demo
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                See StayView with your use case — front desk, outlet POS, night audit,
                or multi-property setup. We&apos;ll walk through real workflows, not slides.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "30–45 minute live session",
                  "Q&A with product specialists",
                  "Trial branch setup for qualified hotels",
                  "Implementation timeline estimate",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <svg className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-sm text-muted">
                Prefer email?{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
                  {site.email}
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
