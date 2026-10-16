import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Herringbone from "@/components/herringbone";
import Reveal from "@/components/reveal";
import { site } from "@/content/site";

/**
 * Closing conversion band — reused at the bottom of every page.
 */
export default function CtaBanner({
  title = "Tell us about your project.",
  sub = "Free on-site estimates across the Eastside. Most homeowners hear back within one business day — call, and you'll talk to the people who actually do the work.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section aria-label="Get an estimate" className="relative overflow-hidden bg-ink-950 text-paper">
      <Herringbone className="text-clay-400 opacity-[0.10]" />
      <div className="dotgrid absolute inset-0 opacity-[0.12]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-[11px] tracking-[0.28em] text-clay-300 uppercase">
              Free estimates · No pressure
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.03] font-medium tracking-tight text-balance">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/65">{sub}</p>
          </Reveal>

          <Reveal delay={150} className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href={site.phoneHref}
              className="group font-display text-[clamp(1.9rem,4vw,3rem)] leading-none font-medium tracking-tight text-clay-300 transition-colors hover:text-clay-400"
            >
              {site.phone}
              <span className="mt-1 block h-px w-full origin-left scale-x-100 bg-clay-300/40 transition-transform duration-500 group-hover:scale-x-100" />
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-clay-600 px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-clay-500"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink-950"
              >
                Request an Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
