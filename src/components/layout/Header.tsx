"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo, LogoLight } from "@/components/svg/Logo";
import { navLinks, site } from "@/lib/content";

export function Header({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHero = dark || pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        onHero
          ? "border-white/10 bg-[#120a24]/80 text-white"
          : "border-border bg-surface/90 text-foreground"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          {onHero ? (
            <LogoLight className="h-9 w-auto" />
          ) : (
            <Logo className="h-9 w-auto text-foreground" />
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? onHero
                    ? "text-brand-light"
                    : "text-brand"
                  : onHero
                    ? "text-white/80 hover:text-white"
                    : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/demo"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className={`border-t px-4 py-4 md:hidden ${
            onHero ? "border-white/10 bg-[#120a24]" : "border-border bg-surface"
          }`}
        >
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="rounded-full bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Book a demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
