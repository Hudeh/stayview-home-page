import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses, and protects personal and property data.`,
};

const sections = [
  {
    title: "Who we are",
    body: [
      `StayView (“we”, “us”) provides property management software for hotels and hospitality businesses. This policy explains what we collect when you use ${site.url}, request a demo or trial, or run StayView products.`,
      `Contact: ${site.email} · ${site.phone}`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "Website and sales: name, property name, email, phone, WhatsApp number, room count, and messages you send via forms or chat.",
      "Product use: account credentials, staff profiles you create, guest and folio records, operational logs, and support tickets needed to run your property.",
      "Technical: IP address, browser type, device, and basic analytics cookies required to keep the site secure and measure traffic.",
    ],
  },
  {
    title: "How we use data",
    body: [
      "To respond to demo, trial, and support requests.",
      "To provide, secure, and improve StayView PMS, Outlet, Mart, and related apps.",
      "To send service notices (billing, downtime, security). Marketing emails only with your consent; you can unsubscribe anytime.",
      "We do not sell personal data.",
    ],
  },
  {
    title: "Hosting and processors",
    body: [
      "Cloud deployments may run on infrastructure providers we contract (for example VPS or cloud hosts). On-premise deployments keep guest and folio data on hardware you control.",
      "We may use email, analytics, and messaging tools to operate sales and support. Those processors only receive what they need for that job.",
    ],
  },
  {
    title: "Retention and security",
    body: [
      "Sales enquiries are kept as long as needed to follow up and for legitimate business records.",
      "Customer property data is retained for the life of the subscription and a reasonable wind-down period after cancellation, unless law requires longer.",
      "We use access controls, encryption in transit where applicable, and role-based permissions inside the product. No method of transmission is 100% secure; report issues to us promptly.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You may request access, correction, or deletion of personal data we hold about you as a sales contact, subject to legal and contractual limits.",
      "Property operators control guest and staff records inside their StayView tenant. For those requests, contact your property administrator or email us.",
    ],
  },
  {
    title: "Updates",
    body: [
      "We may update this policy. The “Last updated” date below will change. Continued use of the site or services after an update means you accept the revised policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="surface-vector py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.2em] text-brand uppercase">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy policy
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
          <Link href="/terms" className="font-semibold text-brand hover:underline">
            Terms of service
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
