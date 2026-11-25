import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `Terms governing use of ${site.name} websites, demos, trials, and paid subscriptions.`,
};

const sections = [
  {
    title: "Agreement",
    body: [
      `These terms cover use of ${site.url}, demo and trial access, and paid StayView subscriptions (PMS, Outlet, Mart, and add-ons). By using the site or signing up, you agree to these terms.`,
      `Questions: ${site.email} · ${site.phone}`,
    ],
  },
  {
    title: "Who may use StayView",
    body: [
      "You must be able to form a binding contract and use the services for a legitimate hospitality or related business. You are responsible for staff accounts and for keeping login credentials confidential.",
    ],
  },
  {
    title: "Trials and demos",
    body: [
      "Free trials and demos are provided so you can evaluate StayView. Trial data may be reset or deleted when the trial ends. Trial access is not a production commitment unless we agree otherwise in writing.",
      "Promotional offers (including year-end setup, migration, or founding discounts) apply only while the stated deadline and eligibility rules are met, and may require a signed order or invoice.",
    ],
  },
  {
    title: "Subscriptions and billing",
    body: [
      "Paid plans are billed as quoted (monthly or yearly cloud, or on-premise licence plus annual maintenance). Prices are in Nigerian naira unless we state another currency.",
      "Yearly cloud billing may include promotional months free as published. Non-payment may suspend access after notice. Fees already paid for a period are generally non-refundable except where required by law or we agree in writing.",
    ],
  },
  {
    title: "Your data and content",
    body: [
      "You retain ownership of guest, folio, inventory, and staff data you enter. You grant us a limited licence to host and process that data only to provide the service.",
      "You must not upload unlawful content or use StayView to violate payment, tax, or hospitality regulations. You are responsible for backups of on-premise deployments under your control.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "Do not attempt to breach security, scrape the service beyond normal use, resell access without permission, or interfere with other customers. We may suspend accounts that create risk to the platform or other properties.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "StayView software, branding, and documentation remain our property (or our licensors’). Subscription grants a limited, non-exclusive right to use the product for your properties during the paid term.",
    ],
  },
  {
    title: "Disclaimer and liability",
    body: [
      "Software is provided “as is” within commercially reasonable efforts for uptime and support. We do not warrant uninterrupted operation, especially where your network, power, or third-party OTAs fail.",
      "To the fullest extent allowed by law, our total liability for claims relating to the services is limited to fees you paid us for the three months before the claim. We are not liable for lost profits, lost revenue, or indirect damages.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws of the Federal Republic of Nigeria. Disputes should first be raised with us in good faith; unresolved disputes may be brought in courts of competent jurisdiction in Nigeria.",
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update these terms. Material changes for paying customers will be communicated by email or in-product notice where practical. Continued use after the effective date constitutes acceptance.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="surface-vector py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-brand uppercase">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Terms of service
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated: 25 November 2026</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-muted">
                {section.body.map((para) => (
                  <p key={para.slice(0, 48)}>{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-14 text-sm text-muted">
          Also see our{" "}
          <Link href="/privacy" className="font-semibold text-brand hover:underline">
            Privacy policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
