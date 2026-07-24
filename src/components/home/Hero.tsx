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
    <section className="hero-mesh noise relative -mt-[4.25rem] overflow-hidden pt-[4.25rem] text-white">
      <div className="relative mx-auto flex min-h-[100svh] max-w-[88rem] items-center px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.45fr)] lg:gap-10 xl:gap-12">
          <div className="max-w-lg text-left lg:max-w-xl">
            <p className="animate-fade-up text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
              Hotel operating system
            </p>
            <HeroHeadline />
            <p className="animate-fade-up animate-delay-2 mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
              Front desk, Outlet POS, night audit, and analytics — cloud-hosted or
              on-premise when the network can&apos;t be trusted.
            </p>
            <div className="animate-fade-up animate-delay-3 mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link href="/demo" className="btn-primary w-full shadow-lg shadow-brand/30 sm:w-auto">
                Book a free demo
              </Link>
              <Link href="/features" className="btn-ghost w-full sm:w-auto">
                Explore the platform
              </Link>
            </div>
          </div>

          <div className="animate-hero-panel relative w-full min-w-0 lg:-mr-2 xl:-mr-4">
            <HeroSlideshow slides={heroSlides} />
          </div>
        </div>
      </div>
    </section>
  );
}
