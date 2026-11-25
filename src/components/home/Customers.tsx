import Image from "next/image";
import Link from "next/link";
import { caseStudy, foundingOffer, trialOffer } from "@/lib/content";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { Reveal } from "@/components/ui/Reveal";

export function Customers() {
  return (
    <section className="ink-band noise relative overflow-hidden border-b border-white/10 py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(155,127,224,0.18),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="none" stagger className="mx-auto max-w-2xl text-center">
          <p className="stagger-item text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
            Customer story
          </p>
          <AnimatedHeadline
            className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl"
            lines={["Proof from the", "front desk"]}
          />
          <p className="stagger-item mt-5 text-lg leading-relaxed text-white/65">
            One property. One result. We&apos;re building a public customer list —
            founding clients get a lifetime discount for a testimonial and logo here.
          </p>
        </Reveal>

        <Reveal variant="up" className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <article className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04]">
            <div className="grid sm:grid-cols-[11rem_1fr]">
              <div className="flex items-center justify-center border-b border-white/10 bg-black/40 p-6 sm:border-r sm:border-b-0">
                <Image
                  src={caseStudy.logoSrc}
                  alt={caseStudy.logoAlt}
                  width={caseStudy.logoWidth}
                  height={caseStudy.logoHeight}
                  className="h-auto w-full max-w-[9rem] object-contain"
                  sizes="176px"
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="font-display text-lg font-semibold tracking-tight">
                  {caseStudy.property}
                </p>
                <p className="mt-1 text-sm text-white/45">{caseStudy.role}</p>

                <div className="mt-6 rounded-xl border border-brand-light/25 bg-brand/15 px-4 py-3">
                  <p className="font-display text-2xl font-bold tracking-tight text-brand-light sm:text-3xl">
                    {caseStudy.metric}
                  </p>
                  <p className="mt-1 text-sm text-white/70">{caseStudy.metricDetail}</p>
                </div>

                <blockquote className="mt-6 text-base leading-relaxed text-white/80">
                  &ldquo;{caseStudy.quote}&rdquo;
                </blockquote>

                <p className="mt-8 text-sm text-white/50">
                  {foundingOffer.discountLabel} — {foundingOffer.summary}
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Link href={trialOffer.ctaHref} className="btn-light w-full sm:w-auto">
                    {trialOffer.ctaLabel}
                  </Link>
                  <Link href="/demo" className="btn-ghost w-full sm:w-auto">
                    Book a demo
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
