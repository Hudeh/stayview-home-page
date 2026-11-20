import Image from "next/image";
import { customers, type Customer } from "@/lib/content";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { Reveal } from "@/components/ui/Reveal";

function CustomerLogoCard({ name, logoSrc, logoAlt, tagline, width, height }: Customer) {
  return (
    <figure className="customer-marquee-item flex w-[9.5rem] shrink-0 flex-col items-center sm:w-[11rem]">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={width}
          height={height}
          className="h-full w-full object-contain object-center p-3 sm:p-3.5"
          sizes="176px"
        />
      </div>
      <figcaption className="mt-2.5 text-center">
        <p className="font-display text-sm font-semibold tracking-tight text-white/90">
          {name}
        </p>
        {tagline ? (
          <p className="mt-0.5 text-[10px] tracking-wide text-white/45 uppercase">
            {tagline}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}

export function Customers() {
  if (customers.length === 0) return null;

  // Enough copies so the strip scrolls smoothly even with one logo
  const loopCount = Math.max(8, customers.length * 3);
  const loop = Array.from({ length: loopCount }, (_, i) => customers[i % customers.length]);

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
      </div>

      <Reveal variant="fade" className="mt-12 sm:mt-14">
        <div className="customer-marquee" aria-label="Customer logos">
          <div className="customer-marquee-fade customer-marquee-fade-left" aria-hidden />
          <div className="customer-marquee-fade customer-marquee-fade-right" aria-hidden />
          <div className="customer-marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="customer-marquee-group"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {loop.map((customer, i) => (
                  <CustomerLogoCard key={`${copy}-${customer.id}-${i}`} {...customer} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
