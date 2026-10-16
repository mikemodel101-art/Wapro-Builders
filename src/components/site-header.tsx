"use client";

import { ArrowUpRight, Clock, Menu, Phone, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TileMark from "@/components/tile-mark";
import { nav, site } from "@/content/site";

/**
 * Site header — a slim utility bar on top, and a main bar that starts as a
 * clean full-width row and morphs into a floating, blurred island ("pill")
 * once the user scrolls. Fully CSS-animated via the `scrolled` state.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
    <header className="animate-fade-down fixed inset-x-0 top-0 z-50">
      {/* ── Utility strip — collapses away on scroll ─────────────── */}
      <div
        className={`overflow-hidden bg-ink-950 text-paper/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-[10.5px] font-medium tracking-[0.14em] uppercase md:px-8">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-clay-400" aria-hidden="true" />
            <span className="hidden sm:inline">{site.licensedInsured} in Washington</span>
            <span className="sm:hidden">{site.licensedInsured}</span>
          </p>
          <p className="hidden items-center gap-2 md:flex">
            <Clock className="h-3.5 w-3.5 shrink-0 text-clay-400" aria-hidden="true" />
            Mon–Fri 7 AM – 9 PM · Weekends closed
          </p>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-paper transition-colors hover:text-clay-300"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </div>

      {/* ── Main bar — full-width row, morphs to a floating pill ── */}
      <div
        className={`px-3 transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-5 ${
          scrolled ? "pt-2.5" : "pt-0"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            scrolled
              ? "h-14 max-w-6xl rounded-full border border-ink-900/10 bg-paper/85 pr-2 pl-3.5 shadow-[0_18px_50px_-18px_rgb(22_18_13/0.42)] ring-1 ring-paper/60 backdrop-blur-xl"
              : "h-16 max-w-7xl border-b border-transparent px-2 md:h-[74px] md:px-3"
          }`}
        >
          {/* Logo lockup */}
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="group flex min-w-0 items-center gap-3"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-950 text-clay-300 shadow-[inset_0_0_0_1px_rgb(250_247_241/0.10)] transition-transform duration-500 group-hover:-rotate-6">
              <TileMark className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
            </span>
            <span className="min-w-0 leading-none">
              <span className="block truncate font-display text-[16.5px] font-semibold tracking-tight text-ink-950 md:text-[17.5px]">
                WA Pro Builders
              </span>
              <span className="mt-1 block font-mono text-[9px] tracking-[0.24em] text-ink-500 uppercase">
                Bath · Tile · Redmond, WA
              </span>
            </span>
          </Link>

          {/* Desktop nav — segmented control */}
          <nav
            aria-label="Primary"
            className={`hidden items-center gap-0.5 rounded-full border p-1 transition-colors duration-500 lg:flex ${
              scrolled ? "border-transparent bg-ink-950/[0.03]" : "border-ink-900/10 bg-white/60"
            }`}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-ink-950 text-paper shadow-sm"
                    : "text-ink-600 hover:bg-ink-950/[0.06] hover:text-ink-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden h-11 items-center gap-2 rounded-full border border-ink-900/15 px-4 font-mono text-[12.5px] font-medium tracking-wide text-ink-900 transition-all duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-paper xl:flex"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="group hidden h-11 items-center gap-1.5 rounded-full bg-clay-600 pr-3.5 pl-5 text-[13px] font-semibold text-paper shadow-[0_10px_24px_-10px_rgb(180_80_42/0.8)] transition-all duration-300 hover:bg-clay-700 sm:flex"
            >
              Free Estimate
              <span className="grid h-5 w-5 place-items-center rounded-full bg-paper/20">
                <ArrowUpRight
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition-colors duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-paper lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile overlay menu ────────────────────────────────── */}
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
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-paper/10 text-clay-300">
              <TileMark className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold">WA Pro Builders</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-paper/20 transition-colors hover:bg-paper hover:text-ink-900"
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
