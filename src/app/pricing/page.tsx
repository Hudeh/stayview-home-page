import type { Metadata } from "next";
import { PricingCards } from "@/components/pricing/PricingCards";
import { CtaBanner } from "@/components/home/CtaBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "StayView Premium, Premium Plus, and Platinum plans for hotels of every size.",
};

const faqs = [
  {
    q: "Can I run StayView on my own server?",
    a: "Yes. Platinum and enterprise customers can deploy on-premise with Docker Compose on a VPS while using the same StayView apps.",
  },
  {
    q: "Is there a trial?",
    a: "We offer guided demos and trial periods for qualified properties. Book a demo and our team will set up your branch subdomain.",
  },
  {
    q: "What about F&B-only properties?",
    a: "Premium Plus supports F&B standalone product mode — outlets, menu, POS, and inventory without full PMS modules.",
  },
  {
    q: "Is HR and payroll included?",
    a: "Yes — on Platinum. Staff profiles, leave, attendance, shift schedules, security clock-in, monthly payroll preparation, and accounting approval with general ledger posting are part of the Platinum plan.",
  },
  {
    q: "How does billing work?",
    a: "Subscriptions are managed per business branch with monthly or annual billing in NGN. Renew through the StayView backoffice portal.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Pricing</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Choose a plan based on room count and branches. All plans include
            secure multi-tenant hosting and encrypted APIs.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <PricingCards />
          <p className="mt-10 text-center text-sm text-muted">
            Need more than 120 rooms or custom integrations?{" "}
            <Link href="/demo" className="font-semibold text-brand hover:underline">
              Contact sales
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold">Frequently asked questions</h2>
          <dl className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-lg font-semibold">{faq.q}</dt>
                <dd className="mt-2 text-muted leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
