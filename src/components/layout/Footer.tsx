import Link from "next/link";
import { LogoLight } from "@/components/svg/Logo";
import { navLinks, site } from "@/lib/content";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/demo", label: "Book a demo" },
    { href: site.setupUrl, label: "Property setup", external: true },
  ],
  Resources: [
    { href: "/blog", label: "Blog" },
    { href: site.loginUrl, label: "Sign in", external: true },
    { href: `mailto:${site.email}`, label: "Contact sales", external: true },
  ],
  Legal: [
    { href: "#", label: "Privacy policy" },
    { href: "#", label: "Terms of service" },
  ],
};

export function Footer() {
  return (
    <footer className="noise relative border-t border-white/10 bg-brand-ink text-white">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <LogoLight className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              {site.description}
            </p>
            <Link href="/demo" className="btn-primary mt-7">
              Book a demo
            </Link>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-white/35 uppercase">
                {title}
              </h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-white/65 transition-colors hover:text-white"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/35">
            © {new Date().getFullYear()} StayView. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/45 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
