import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand-dark px-8 py-16 text-center text-white sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
          >
            <svg className="h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              <circle cx="350" cy="50" r="120" fill="white" fillOpacity="0.08" />
              <circle cx="50" cy="180" r="80" fill="white" fillOpacity="0.06" />
            </svg>
          </div>
          <h2 className="relative text-3xl font-bold sm:text-4xl">
            Ready to modernize your property?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/80">
            See StayView live with your workflows — front desk, POS, night audit, and reports.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand hover:bg-white/90"
            >
              Book a demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
