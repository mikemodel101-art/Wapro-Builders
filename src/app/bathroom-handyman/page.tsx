import { ArrowRight, Clock3, Phone, Wallet } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/cta-banner";
import FaqAccordion from "@/components/faq-accordion";
import Herringbone from "@/components/herringbone";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import { bathroomFaqs } from "@/content/faqs";
import { bathroomServices, handymanServices } from "@/content/services";
import { site } from "@/content/site";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Bathroom Improvements & Handyman Services in Redmond, WA",
  description:
    "Bathroom improvements & handyman services in Redmond, WA: tub-to-shower conversions, vanities, bathroom tile & heated floors, regrouting, repairs & punch lists. Licensed & insured. Serving Bellevue, Kirkland, Sammamish & the Eastside.",
  alternates: { canonical: "/bathroom-handyman" },
  openGraph: {
    title: "Bathroom Improvements & Handyman Services in Redmond, WA | WA Pro Builders LLC",
    description:
      "Walk-in showers, vanities, fresh tile — plus a handyman service that actually takes your punch list seriously.",
    url: `${site.url}/bathroom-handyman`,
    images: [{ url: "/images/bath-2.jpg", width: 1600, height: 1200, alt: "Updated Kirkland bathroom with walk-in shower and new vanity" }],
  },
};

export default function BathroomHandymanPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bathroom Improvements & Handyman", path: "/bathroom-handyman" },
        ])}
      />
      <JsonLd
        data={serviceJsonLd({
          name: "Bathroom Improvements & Handyman Services",
          description:
            "Bathroom improvements — tub-to-shower conversions, vanities, bathroom tile, heated floors, regrouting — plus handyman repair and punch-list services in Redmond, WA and across the Eastside.",
          path: "/bathroom-handyman",
          image: "/images/bath-2.jpg",
        })}
      />
      <JsonLd data={faqJsonLd(bathroomFaqs)} />

      <PageHero
        eyebrow={`Services · ${site.city}, ${site.state}`}
        title='Bathroom improvements &amp; <em class="italic text-clay-600">handyman</em> services'
        sub="Walk-in showers, fresh vanities, warm floors — and a handyman crew that finally takes your two-page punch list seriously. One licensed Redmond contractor, one phone call."
        image="/images/bath-2.jpg"
        alt="Freshly improved Kirkland bathroom with walk-in shower, wood vanity, and new tile"
        crumbs={[{ name: "Bathroom & Handyman", path: "/bathroom-handyman" }]}
      />

      {/* ============================================ Bathroom services */}
      <section className="bg-cream" aria-labelledby="bath-services">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Bathroom improvements"
            title="The hardest-working room in your home."
            intro="Bathrooms fail slowly — a cracked grout line, a weeping valve, a fan that barely spins. We fix the slow failures and build bathrooms that shrug off our damp Northwest climate."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bathroomServices.map((s, i) => (
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

      {/* ========================================== Refresh vs. remodel */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24" aria-labelledby="paths-heading">
        <SectionHeading
          eyebrow="Two honest paths"
          title="Refresh it, or rebuild it?"
          intro="We do both — and we'll recommend the cheaper one when it's the right call. Here's how to think about it."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-line bg-cream p-8 md:p-10">
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-clay-600 uppercase">
                <Wallet className="h-4 w-4" aria-hidden="true" />
                The smart refresh · typically 2–4 days
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium text-ink-900 md:text-3xl">
                When the layout works, keep it.
              </h3>
              <ul className="mt-6 space-y-3 text-[15px] text-ink-700">
                {[
                  "Regrout & re-caulk every joint — instant visual reset",
                  "New vanity, faucet, mirror & light fixtures",
                  "Toilet swap and hardware updates",
                  "Moisture-resistant paint in a fresh color",
                  "A fraction of a remodel's cost and disruption",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-clay-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="h-full rounded-[2rem] border border-ink-950 bg-ink-950 p-8 text-paper md:p-10">
              <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-clay-300 uppercase">
                <Clock3 className="h-4 w-4" aria-hidden="true" />
                The full improvement · typically 1–3 weeks
              </p>
              <h3 className="mt-4 font-display text-2xl font-medium md:text-3xl">
                When it&rsquo;s time for real change.
              </h3>
              <ul className="mt-6 space-y-3 text-[15px] text-paper/75">
                {[
                  "Tub-to-shower & curbless conversions",
                  "New shower or floor tile over proper waterproofing",
                  "Radiant heated floors, niches & benches",
                  "Layout, ventilation & accessibility upgrades",
                  "Permits, plumbing & electrical coordinated for you",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-clay-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================= Handyman band */}
      <section id="handyman" className="relative scroll-mt-28 overflow-hidden bg-ink-950 text-paper" aria-labelledby="handyman-heading">
        <Herringbone className="text-clay-400 opacity-[0.08]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                tone="dark"
                eyebrow="Handyman services"
                title='Small job? Finally, <em class="italic text-clay-300">someone who shows up.</em>'
              />
              <Reveal delay={120}>
                <p className="mt-6 text-base leading-relaxed text-paper/65 md:text-lg">
                  The dirty secret of home services: nobody wants your punch list. We built our
                  handyman visits around it. Bundle the odd jobs, book a half or full day, and
                  one licensed pro knocks out the list — with the same standard we bring to a
                  full shower build.
                </p>
                <p className="mt-4 rounded-2xl border border-paper/12 bg-paper/5 p-5 text-sm leading-relaxed text-paper/70">
                  <strong className="text-paper">How it works:</strong> half-day minimum, then
                  simple hourly or per-item pricing quoted before we start. Most homeowners
                  bundle 5–10 small jobs into a single visit.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-clay-600 px-7 py-4 text-sm font-semibold text-paper transition-colors hover:bg-clay-500"
                >
                  Book a Handyman Visit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-px overflow-hidden rounded-3xl border border-paper/15 bg-paper/15 sm:grid-cols-2">
                {handymanServices.map((s, i) => (
                  <Reveal key={s.title} delay={(i % 2) * 90} className="h-full">
                    <div className="flex h-full flex-col gap-3 bg-ink-900 p-6">
                      <s.icon className="h-5 w-5 text-clay-400" aria-hidden="true" />
                      <h3 className="text-[15px] font-semibold text-paper">{s.title}</h3>
                      <p className="text-[13px] leading-relaxed text-paper/55">{s.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== Photo strip */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24" aria-label="Recent bathroom and handyman projects">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {[
            { src: "/images/bath-3.jpg", alt: "Curbless walk-in shower conversion in Redmond Ridge" },
            { src: "/images/bath-4.jpg", alt: "Matte black fixtures installed on a freshly regrouted shower wall in Bothell" },
            { src: "/images/floor-2.jpg", alt: "Charcoal hexagon mudroom floor tile in Redmond" },
          ].map((img, i) => (
            <Reveal key={img.src} delay={i * 100}>
              <Link href="/gallery" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-clay-700 hover:text-clay-600"
            >
              See more in the project gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </Reveal>
      </section>

      {/* ============================================================ FAQ */}
      <section className="bg-cream" aria-labelledby="bath-faq">
        <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-24">
          <SectionHeading
            align="center"
            eyebrow="Questions"
            title="Bathroom & handyman questions, answered."
          />
          <Reveal delay={120} className="mt-10">
            <FaqAccordion faqs={bathroomFaqs} />
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 text-center text-sm text-ink-500">
              Something more specific?{" "}
              <a href={site.phoneHref} className="font-semibold text-clay-700 hover:text-clay-600">
                <Phone className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                Call {site.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner title="Let's make the bathroom your favorite room." />
    </>
  );
}
