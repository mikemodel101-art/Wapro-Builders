import { ArrowLeft, Phone } from "lucide-react";
import Link from "next/link";
import TileMark from "@/components/tile-mark";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="blueprint flex min-h-[80vh] items-center pt-32 pb-20">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <span className="inline-block rotate-12 text-clay-500">
          <TileMark className="h-16 w-16" />
        </span>
        <p className="mt-8 font-mono text-[11px] tracking-[0.3em] text-clay-600 uppercase">
          404 — Off the grid
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] leading-[1.02] font-medium tracking-tight text-ink-900">
          This tile doesn&rsquo;t exist in the layout.
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-ink-600">
          The page you&rsquo;re looking for moved or never existed. Let&rsquo;s get you back to
          solid ground — the good stuff is all linked below.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-4 text-sm font-semibold text-paper transition-colors hover:bg-clay-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-7 py-4 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950 hover:text-paper"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
