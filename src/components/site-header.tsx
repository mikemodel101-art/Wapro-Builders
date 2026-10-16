"use client";

import { Clock, Menu, Phone, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TileMark from "@/components/tile-mark";
import { nav, site } from "@/content/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll + Esc to close while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    if (open) document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar — collapses away on scroll */}
      <div
        className={`overflow-hidden bg-ink-950 text-paper/75 transition-all duration-500 ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[11px] tracking-wide md:px-8">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-clay-300" aria-hidden="true" />
            <span className="hidden sm:inline">{site.licensedInsured} in Washington State</span>
            <span className="sm:hidden">{site.licensedInsured}</span>
          </p>
          <p className="hidden items-center gap-2 md:flex">
            <Clock className="h-3.5 w-3.5 text-clay-300" aria-hidden="true" />
            Mon–Fri 8–6 · Sat 9–4
          </p>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 font-medium text-paper transition-colors hover:text-clay-300"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-line bg-paper/90 shadow-[0_1px_24px_rgb(22_18_13/0.06)] backdrop-blur-xl"
            : "border-transparent bg-paper/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-[72px] md:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
            <span className="text-clay-600 transition-transform duration-500 group-hover:rotate-90">
              <TileMark className="h-8 w-8 md:h-9 md:w-9" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[17px] font-semibold tracking-tight text-ink-900 md:text-lg">
                WA Pro Builders
              </span>
              <span className="mt-1 block font-mono text-[9.5px] tracking-[0.22em] text-ink-500 uppercase">
                Tile · Redmond, WA
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`link-sweep text-[13.5px] font-medium tracking-wide transition-colors ${
                  isActive(item.href) ? "is-active text-ink-900" : "text-ink-600 hover:text-ink-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-ink-900/15 px-4 py-2 text-[13px] font-semibold text-ink-900 transition-all hover:border-ink-900/40 hover:bg-ink-900 hover:text-paper md:flex"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-clay-600 px-5 py-2.5 text-[13px] font-semibold text-paper shadow-[0_8px_20px_-8px_rgb(180_80_42/0.7)] transition-all hover:bg-clay-700 hover:shadow-[0_12px_28px_-8px_rgb(180_80_42/0.8)] sm:flex"
            >
              Free Estimate
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:bg-ink-900 hover:text-paper lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink-950 text-paper transition-all duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="dotgrid pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="relative flex h-16 items-center justify-between px-5">
          <span className="flex items-center gap-3">
            <span className="text-clay-400">
              <TileMark className="h-8 w-8" />
            </span>
            <span className="font-display text-lg font-semibold">WA Pro Builders</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 transition-colors hover:bg-paper hover:text-ink-900"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="relative flex flex-1 flex-col justify-center gap-1 px-6">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-baseline gap-4 border-b border-paper/10 py-4 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${120 + i * 60}ms` }}
            >
              <span className="font-mono text-[11px] text-clay-400">0{i + 1}</span>
              <span
                className={`font-display text-[clamp(1.7rem,7vw,2.6rem)] leading-none font-medium transition-colors ${
                  isActive(item.href) ? "text-clay-300" : "group-hover:text-clay-300"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="relative space-y-3 px-6 pb-10">
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-clay-600 py-4 text-base font-semibold text-paper transition-colors hover:bg-clay-500"
          >
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            Call {site.phone}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-full border border-paper/25 py-4 text-base font-semibold transition-colors hover:bg-paper hover:text-ink-950"
          >
            Request a Free Estimate
          </Link>
          <p className="pt-2 text-center text-xs text-paper/50">
            Serving Redmond, Bellevue, Kirkland & the Eastside
          </p>
        </div>
      </div>
    </header>
  );
}
