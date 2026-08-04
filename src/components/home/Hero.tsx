import Link from "next/link";
import { HeroHeadline } from "@/components/home/HeroHeadline";
import { HeroSlideshow, type HeroSlide } from "@/components/home/HeroSlideshow";

const heroSlides: HeroSlide[] = [
  {
    src: "/screenshots/hero-frontdesk.png",
    alt: "StayView front desk dashboard with bookings, room status, and occupancy",
    label: "Front desk",
    width: 1024,
    height: 640,
  },
  {
    src: "/screenshots/hero-stays.png",
    alt: "StayView stay management board with room timeline and guest bookings",
    label: "Stay board",
    width: 1024,
    height: 640,
  },
  {
    src: "/screenshots/hero-accounts.png",
    alt: "StayView accounts dashboard with charges, outstanding AR, and payment charts",
    label: "Accounts",
    width: 1024,
    height: 640,
  },
  {
    src: "/screenshots/hero-fnb.png",
    alt: "StayView food and beverage dashboard with orders, tables, and revenue",
    label: "Food & beverage",
    width: 1024,
    height: 640,
  },
];

export function Hero() {
  return (
    <section className="hero-mesh noise relative -mt-[4.25rem] overflow-hidden text-white">
      <div className="hero-shapes" aria-hidden />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[100rem] lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
        <div className="relative z-10 flex flex-col justify-center px-5 pb-10 pt-[5.5rem] sm:px-8 sm:pb-14 lg:px-12 lg:pb-16 xl:px-16">
          <p className="animate-fade-up font-display text-[clamp(2.4rem,5vw,3.75rem)] font-extrabold leading-none tracking-tight text-white">
            StayView
          </p>
          <p className="animate-fade-up animate-delay-1 mt-3 text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
            Property management system
          </p>

          <HeroHeadline />

          <p className="animate-fade-up animate-delay-2 mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Front desk, folios, night audit, city ledger, and reports — every department on the same data.
          </p>

          <div className="animate-fade-up animate-delay-3 mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/demo" className="btn-light w-full shadow-lg shadow-black/20 sm:w-auto">
              Book a free demo
            </Link>
            <Link href="/features" className="btn-ghost w-full sm:w-auto">
              Explore the platform
            </Link>
          </div>
        </div>

        <div className="animate-hero-panel relative min-h-[52vh] w-full lg:min-h-[100svh]">
          <HeroSlideshow slides={heroSlides} />
        </div>
      </div>
    </section>
  );
}
