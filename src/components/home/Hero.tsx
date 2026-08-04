import Link from "next/link";
import { HeroHeadline } from "@/components/home/HeroHeadline";
import { HeroSlideshow, type HeroSlide } from "@/components/home/HeroSlideshow";

const heroSlides: HeroSlide[] = [
  {
    src: "/screenshots/hero-stays.png",
    alt: "StayView stay management board with room timeline and guest bookings",
    label: "Stay board",
    width: 1024,
    height: 640,
  },
  {
    src: "/screenshots/night-audit.png",
    alt: "StayView night audit dashboard with balanced reports and revenue",
    label: "Night audit",
    width: 1024,
    height: 592,
  },
  {
    src: "/screenshots/hero-accounts.png",
    alt: "StayView accounts dashboard with charges, outstanding AR, and payment charts",
    label: "Accounts",
    width: 1024,
    height: 640,
  },
  {
    src: "/screenshots/outlet-pos.png",
    alt: "StayView Outlet POS with menu tiles and order sidebar",
    label: "Outlet POS",
    width: 1024,
    height: 640,
  },
];

export function Hero() {
  return (
    <section className="hero-mesh noise relative -mt-[4.25rem] overflow-hidden text-white">
      <div className="hero-shapes" aria-hidden />

      <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[96rem] items-center gap-8 px-4 pb-14 pt-[5.5rem] sm:px-6 sm:pb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-6 lg:px-8 lg:pb-20 xl:gap-10">
        <div className="relative z-10 max-w-xl lg:max-w-none">
          <p className="animate-fade-up text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
            Property management system
          </p>

          <HeroHeadline />

          <p className="animate-fade-up animate-delay-2 mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Frontdesk, reservations, housekeeping, folios, night audit, city ledger, inventory, and reports — every department on the same data.
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

        <div className="animate-hero-panel relative w-full min-w-0 lg:justify-self-end">
          <HeroSlideshow slides={heroSlides} />
        </div>
      </div>
    </section>
  );
}
