import Link from "next/link";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { Reveal } from "@/components/ui/Reveal";
import { trialOffer, whatsappUrl, yearEndOffer } from "@/lib/content";

export function CtaBanner() {
  return (
    <section className="hero-mesh noise relative overflow-hidden px-4 py-24 text-center text-white sm:px-6 sm:py-32">
      <div className="relative mx-auto max-w-3xl">
        <Reveal variant="none" stagger>
          <p className="stagger-item text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
            {trialOffer.headline} · sign before {yearEndOffer.deadlineLabel}
          </p>
          <AnimatedHeadline
            className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl"
            lines={["Try StayView free.", "Close the year with zero leakage."]}
          />
          <p className="stagger-item mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg">
            Start a 14-day trial, message us on WhatsApp, or book a short demo. Year-end:
            free setup, free migration, and 2 months free on yearly billing.
          </p>
          <div className="stagger-item mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href={trialOffer.ctaHref} className="btn-light w-full sm:w-auto">
              {trialOffer.ctaLabel}
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
