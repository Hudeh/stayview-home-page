import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="hero-mesh noise relative overflow-hidden px-4 py-24 text-center text-white sm:px-6 sm:py-32">
      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Ready to run your property on StayView?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
          See front desk, Outlet POS, and night audit with your workflows — not a
          slide deck.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/demo" className="btn-light w-full sm:w-auto">
            Book a demo
          </Link>
          <Link href="/pricing" className="btn-ghost w-full sm:w-auto">
            Compare plans
          </Link>
        </div>
      </div>
    </section>
  );
}
