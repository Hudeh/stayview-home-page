import type { Metadata } from "next";
import { PricingCards } from "@/components/pricing/PricingCards";
import { PriceTable } from "@/components/pricing/PriceTable";
import { CtaBanner } from "@/components/home/CtaBanner";
import { fbAddons, fbCores, hotelAddons } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "StayView Hotel Core priced by room count, plus add-on modules, restaurant, and bar. Cloud or on-premises.",
};

const faqs = [
  {
    q: "What does Hotel Core include?",
    a: "Front desk, reservations, rooms and rates, guest folio and billing, housekeeping, night audit, daily reports, and 24/7 support. Laundry, accounting, POS, and the other modules are add-ons.",
  },
  {
    q: "How does yearly cloud billing work?",
    a: "Pay for 10 months and use the software for 12. A shorter term is charged at the full monthly price.",
  },
  {
    q: "Can I run StayView on my own server?",
    a: "Yes. On-premises is a one-time licence, then 20% of that amount each year for maintenance. The same apps run in the cloud or on your server.",
  },
  {
    q: "What about a restaurant or bar without rooms?",
    a: "Restaurant Core is ₦30,000 a month for one terminal. Bar & Lounge Core is ₦35,000. Extra terminals, kitchen display, stock, and accounting are add-ons. Posting a room charge to a hotel folio is included when the property has Hotel Core.",
  },
  {
    q: "Are HR and payroll included?",
    a: "They are add-ons. HR, leave, and attendance is ₦18,000 a month. Payroll is ₦12,000 a month and requires HR and accounting. Channel Manager requires the booking engine and Hotel Core.",
  },
  {
    q: "How is Outlet POS priced?",
    a: "Per outlet. One restaurant or bar outlet is ₦18,000 a month on a hotel licence. Each extra outlet is another ₦18,000. Posting that charge to a hotel folio is free when the property has Hotel Core.",
  },
  {
    q: "Is there a discount for both a restaurant and a bar?",
    a: "Yes. A client who takes both Restaurant Core and Bar & Lounge Core gets 15% off those two plans.",
  },
  {
    q: "What happened to the success manager and onboarding that used to come with Platinum?",
    a: "They are paid services. A dedicated success manager is ₦50,000 a month. Priority onboarding and training is ₦300,000 once.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="hero-mesh noise relative -mt-[4.25rem] overflow-hidden pt-[calc(4.25rem+6rem)] pb-24 text-white sm:pb-32 sm:pt-[calc(4.25rem+8rem)]">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-[0.2em] text-brand-light uppercase">
            Pricing
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
            Hotel Core by room count. Add only what you use.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/65">
            One base price for the property, then add-on modules per property. Prices are in naira.
            Above 120 rooms, talk to us.
          </p>
        </div>
      </section>

      <section className="surface-grid surface-vector-muted py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Hotel Core</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Priced for the property. Yearly cloud billing includes 2 months. On-premises is a one-time
            licence plus 20% maintenance each year.
          </p>
          <div className="mt-10">
            <PricingCards />
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            More than 120 rooms or a custom integration?{" "}
            <Link href="/demo" className="font-semibold text-brand hover:underline">
              Contact sales
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Add-on modules</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Per property, except Outlet POS which is per outlet. Room-charge posting from an outlet
            to a hotel folio is included with Hotel Core.
          </p>
          <div className="mt-8">
            <PriceTable rows={hotelAddons} />
          </div>
        </div>
      </section>

      <section className="border-t border-border surface-vector-muted py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Restaurant and bar</h2>
          <p className="mt-3 max-w-2xl text-muted">
            For a food and beverage business on its own. Taking both Restaurant Core and Bar &amp; Lounge
            Core is 15% off those plans. Room-charge posting to a hotel folio is free with Hotel Core.
          </p>
          <div className="mt-8 space-y-8">
            <PriceTable rows={fbCores} />
            <PriceTable rows={fbAddons} />
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Paid services</h2>
          <p className="mt-3 max-w-2xl text-muted">
            These used to be bundled into Platinum. A dedicated success manager is ₦50,000 a month.
            Priority onboarding and training is ₦300,000 once.
          </p>
        </div>
      </section>

      <section className="border-t border-border surface-vector py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <dt className="font-display text-lg font-semibold">{faq.q}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
