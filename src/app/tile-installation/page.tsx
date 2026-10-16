import { ArrowRight, CheckCircle2, Phone, Wrench } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/images";
import CtaBanner from "@/components/cta-banner";
import FaqAccordion from "@/components/faq-accordion";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { tileFaqs } from "@/content/faqs";
import { tileMaterials, tileServices } from "@/content/services";
import { site } from "@/content/site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Tile Installation & Kitchen Backsplashes in Redmond, WA",
  description:
    "Professional tile installation in Redmond, WA: kitchen backsplashes, custom shower tile, floor tile, natural stone, heated floors, and tile repairs. Licensed, bonded & insured. Serving Bellevue, Kirkland & the Eastside. Free estimates — (206) 804-1196.",
  alternates: { canonical: "/tile-installation" },
  openGraph: {
    title: "Tile Installation & Kitchen Backsplashes in Redmond, WA | WA Pro Builders LLC",
    description:
      "Floor, wall & shower tile plus kitchen backsplashes — installed level, watertight, and built to last by a licensed Redmond contractor.",
    url: `${site.url}/tile-installation`,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Kitchen backsplash and tile work by WA Pro Builders LLC of Redmond, WA" }],
  },
};

const backsplashChecklist = [
  "Layout dry-fit before anything is set — you approve the pattern",
  "Outlet extenders & under-cabinet edge details handled in house",
  "Grout color matched to your tile, then sealed against stains",
  "Specialty setting for glass, handmade, and irregular artisan tile",
];

export default function TileInstallationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tile Installation & Kitchen Backsplashes", path: "/tile-installation" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Tile Installation & Kitchen Backsplashes",
          description:
            "Floor, wall, and shower tile installation plus kitchen backsplashes in Redmond, WA and across the Eastside — porcelain, ceramic, natural stone, glass mosaic, large format, and artisan tile with full waterproofing.",
          path: "/tile-installation",
          image: "/images/og.jpg",
        })}
      />
      <JsonLd data={faqJsonLd(tileFaqs)} />

      <PageHero
        eyebrow={`Services · ${site.city}, ${site.state}`}
        title='Tile installation &amp; kitchen <em class="italic text-clay-600">backsplashes</em>'
        sub="From mud-set shower pans to picture-perfect backsplash lines — floor, wall, and wet-area tile installed by a licensed Redmond contractor, with waterproofing you never have to think about."
        image={assets.kitchen2}
        alt="Kirkland kitchen featuring a patterned ceramic tile backsplash installed by WA Pro Builders"
        crumbs={[{ name: "Tile & Backsplashes", path: "/tile-installation" }]}
      />

      {/* ================================================= What we install */}
      <section className="bg-cream" aria-labelledby="tile-services">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="What we install"
            title="Every surface, set true."
            intro="Great tile work is 70% preparation — substrate, layout, and waterproofing — and 30% the part everyone sees. We don't shortcut either half."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tileServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
                <div className="group h-full rounded-3xl border border-line bg-paper p-7 transition-shadow hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-50 text-clay-600 transition-colors group-hover:bg-clay-600 group-hover:text-paper">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= Materials */}
      <section className="blueprint" aria-labelledby="materials">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Materials"
                title="Honest guidance on what to buy."
                intro="We'll tell you where splurging matters and where it doesn't — then install whatever you choose like it was our own pick."
              />
              <Reveal delay={150}>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-clay-700 transition-colors hover:text-clay-600"
                >
                  Ask us about a material
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
                {tileMaterials.map((m, i) => (
                  <Reveal key={m.name} delay={(i % 2) * 90} className="h-full">
                    <div className="flex h-full flex-col gap-3 bg-paper p-7">
                      <span className="font-mono text-[11px] tracking-[0.25em] text-clay-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-medium text-ink-900">{m.name}</h3>
                      <p className="text-sm leading-relaxed text-ink-600">{m.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ Backsplash feature */}
      <section id="backsplashes" className="scroll-mt-28 bg-ink-950 text-paper" aria-labelledby="backsplash-heading">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-[2rem] border border-paper/15 bg-ink-900 p-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                    <Image
                      src={assets.kitchen4}
                      alt="Deep blue handmade-look tile backsplash with white cabinetry in a Woodinville kitchen"
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading
                tone="dark"
                eyebrow="Our signature job"
                title='The backsplash: smallest room in the house, <em class="italic text-clay-300">biggest impact per dollar.</em>'
              />
              <Reveal delay={120}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 md:text-lg">
                  A kitchen backsplash is a one-to-three-day project that changes how the whole
                  kitchen feels every single day. It&rsquo;s also where rushed installers get
                  exposed — crooked lines around outlets, lippage at the corners, grout haze left
                  behind. Around Redmond and Bellevue, backsplashes are the job we&rsquo;re called
                  to fix most often. We&rsquo;d rather do yours right the first time.
                </p>
              </Reveal>
              <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
                {backsplashChecklist.map((item, i) => (
                  <Reveal key={item} delay={200 + i * 80}>
                    <li className="flex items-start gap-3 rounded-2xl border border-paper/12 bg-paper/5 p-4 text-sm leading-relaxed text-paper/80">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay-400" aria-hidden="true" />
                      {item}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== Repair band */}
      <section id="repair" className="scroll-mt-28 bg-clay-50" aria-labelledby="repair-heading">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 py-14 md:px-8">
          <Reveal className="flex max-w-2xl items-start gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-clay-600 text-paper">
              <Wrench className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-medium text-ink-900 md:text-3xl">
                Not every job needs a sledgehammer.
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                Cracked tile, crumbling grout, mildewed caulk — a focused repair visit can add
                years to tile you already own. We&rsquo;ll tell you honestly if a repair beats a
                replacement.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-7 py-4 text-sm font-semibold text-paper transition-colors hover:bg-clay-600"
            >
              Ask About a Tile Repair
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================================================== Mini gallery */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24" aria-label="Recent tile projects">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {[
            { src: assets.kitchen5, alt: "Sammamish range wall finished in textured artisan tile", tall: true },
            { src: assets.floor1, alt: "Stone-look porcelain entryway floor in Carnation", tall: false },
            { src: assets.bath1, alt: "Marble-look porcelain walk-in shower in West Bellevue", tall: false },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 100}>
              <Link href="/gallery" className="group block">
                <div className={`relative overflow-hidden rounded-3xl border border-line ${img.tall ? "aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[4/3]"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <p className="mt-8 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold text-clay-700 transition-colors hover:text-clay-600"
            >
              See more in the project gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </Reveal>
      </section>

      {/* ============================================================ FAQ */}
      <section className="bg-cream" aria-labelledby="tile-faq">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeading
            align="center"
            eyebrow="Questions"
            title="Tile questions, straight answers."
          />
          <Reveal delay={120} className="mt-10">
            <FaqAccordion faqs={tileFaqs} />
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 text-center text-sm text-ink-500">
              Still curious?{" "}
              <a href={site.phoneHref} className="font-semibold text-clay-700 hover:text-clay-600">
                <Phone className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                Call {site.phone}
              </a>{" "}
              — no question is too small.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Ready for tile you're proud to show off?" />
    </>
  );
}
