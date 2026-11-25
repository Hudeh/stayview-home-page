import Link from "next/link";
import { foundingOffer, trialOffer, yearEndOffer } from "@/lib/content";

function isOfferActive() {
  const end = new Date(`${yearEndOffer.deadlineIso}T23:59:59`);
  return Date.now() <= end.getTime();
}

export function OfferBanner() {
  if (!isOfferActive()) return null;

  return (
    <section className="border-b border-amber-500/20 bg-[#1a1208] text-amber-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.18em] text-amber-300/90 uppercase">
            Ends {yearEndOffer.deadlineLabel}
          </p>
          <p className="mt-1 text-sm leading-snug sm:text-base">
            <span className="font-semibold text-white">{yearEndOffer.headline}.</span>{" "}
            <span className="text-white/70">{yearEndOffer.summary}</span>
          </p>
          <p className="mt-1 text-xs text-white/45 sm:text-sm">
            {foundingOffer.headline}: {foundingOffer.summary}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
          <Link
            href={trialOffer.ctaHref}
            className="rounded-lg bg-amber-400 px-4 py-2.5 text-center text-sm font-semibold text-[#1a1208] transition hover:bg-amber-300"
          >
            {trialOffer.ctaLabel}
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg border border-white/20 px-4 py-2.5 text-center text-sm font-semibold text-white/85 transition hover:border-white/40 hover:text-white"
          >
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
