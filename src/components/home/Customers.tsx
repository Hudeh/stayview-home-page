import Image from "next/image";
import { customers } from "@/lib/content";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { Reveal } from "@/components/ui/Reveal";

export function Customers() {
  if (customers.length === 0) return null;

  return (
    <section className="ink-band noise relative overflow-hidden border-b border-white/10 py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(155,127,224,0.18),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="none" stagger className="mx-auto max-w-2xl text-center">
          <p className="stagger-item text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
            Customers
          </p>
          <AnimatedHeadline
            className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl"
            lines={["Properties that", "run on StayView"]}
          />
          <p className="stagger-item mt-5 text-lg leading-relaxed text-white/65">
            Hotels and hospitality brands using StayView to keep rooms, F&amp;B,
            and operations on one platform.
          </p>
        </Reveal>

        <div
          className={`mt-14 grid gap-6 sm:gap-8 ${
            customers.length === 1
              ? "mx-auto max-w-md"
              : customers.length === 2
                ? "mx-auto max-w-3xl sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {customers.map((customer, i) => (
            <Reveal
              key={customer.id}
              delayMs={i * 100}
              variant="scale"
              className="group"
            >
              <figure className="customer-logo-tile flex flex-col items-center">
                <div className="customer-logo-frame relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_28px_56px_-28px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1">
                  <div className="relative aspect-[3/2] w-full">
                    <Image
                      src={customer.logoSrc}
                      alt={customer.logoAlt}
                      width={customer.width}
                      height={customer.height}
                      className="h-full w-full object-contain object-center p-6 sm:p-8"
                      sizes="(max-width: 640px) 90vw, 360px"
                    />
                  </div>
                </div>
                <figcaption className="mt-5 text-center">
                  <p className="font-display text-lg font-semibold tracking-tight text-white">
                    {customer.name}
                  </p>
                  {customer.tagline ? (
                    <p className="mt-1 text-sm tracking-wide text-white/50 uppercase">
                      {customer.tagline}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
