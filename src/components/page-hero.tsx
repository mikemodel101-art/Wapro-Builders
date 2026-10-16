import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import { site } from "@/content/site";

/**
 * Inner-page hero with breadcrumb + framed photo.
 */
export default function PageHero({
  eyebrow,
  title,
  sub,
  image,
  alt,
  crumbs,
  priority = true,
}: {
  eyebrow: string;
  /** Supports a little inline HTML for italic accents */
  title: string;
  sub: string;
  image: string;
  alt: string;
  crumbs: { name: string; path: string }[];
  priority?: boolean;
}) {
  return (
    <section className="blueprint relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        {/* Breadcrumb (visual — JSON-LD version emitted separately) */}
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-ink-500">
            <Link href="/" className="transition-colors hover:text-ink-900">
              Home
            </Link>
            {crumbs.map((c, i) => (
              <span key={c.path} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 text-ink-300" aria-hidden="true" />
                {i === crumbs.length - 1 ? (
                  <span aria-current="page" className="font-medium text-ink-800">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="transition-colors hover:text-ink-900">
                    {c.name}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </Reveal>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <p className="font-mono text-[11px] font-medium tracking-[0.28em] text-clay-600 uppercase">
                {eyebrow}
              </p>
              <h1
                className="mt-4 font-display text-[clamp(2.5rem,5.6vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.02em] text-balance text-ink-900"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">{sub}</p>
            </Reveal>
            <Reveal delay={180} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-clay-600"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {site.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-950 hover:text-paper"
              >
                Get a Free Estimate
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="rounded-[2rem] border border-line bg-cream p-2 shadow-card">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
