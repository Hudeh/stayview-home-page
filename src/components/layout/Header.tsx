"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo, LogoLight } from "@/components/svg/Logo";
import { navLinks } from "@/lib/content";

export function Header({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHero =
    dark ||
    pathname === "/" ||
    pathname === "/demo" ||
    pathname === "/features" ||
    pathname === "/pricing";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        onHero
          ? scrolled
            ? "header-scrolled text-white"
            : "border-transparent bg-transparent text-white"
          : scrolled
            ? "border-border bg-surface/95 text-foreground shadow-sm backdrop-blur-md"
            : "border-border bg-surface/90 text-foreground backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          {onHero ? (
            <LogoLight className="h-8 w-auto sm:h-9" />
          ) : (
            <Logo className="h-8 w-auto text-foreground sm:h-9" />
          )}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks
            .filter((link) => link.href !== "/demo")
            .map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? onHero
                        ? "text-white"
                        : "text-brand"
                      : onHero
                        ? "text-white/70 hover:text-white"
                        : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <span
                      className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 ${
                        onHero ? "bg-brand-light" : "bg-brand"
                      }`}
                    />
                  ) : null}
                </Link>
              );
            })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/demo"
            className="header-cta rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Book a demo
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
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
          className={`border-t px-4 py-5 md:hidden ${
            onHero ? "border-white/10 bg-brand-ink" : "border-border bg-surface"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-3 text-sm font-medium ${
                  pathname === link.href
                    ? onHero
                      ? "bg-white/10 text-brand-light"
                      : "bg-brand/10 text-brand"
                    : onHero
                      ? "text-white/85"
                      : "text-foreground"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/demo"
              className="header-cta mt-2 rounded-lg bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
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
