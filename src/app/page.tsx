import {
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AreaMap from "@/components/area-map";
import CtaBanner from "@/components/cta-banner";
import Herringbone from "@/components/herringbone";
import Marquee from "@/components/marquee";
import Reveal from "@/components/reveal";
import ReviewRail from "@/components/review-rail";
import SectionHeading from "@/components/section-heading";
import Stats from "@/components/stats";
import TileMark from "@/components/tile-mark";
import { featuredProjects } from "@/content/projects";
import { processSteps, serviceSummaries, trustPoints } from "@/content/services";
import { serviceAreas, site } from "@/content/site";

const trustIcons = { shield: ShieldCheck, user: UserRound, sparkles: Sparkles, award: Award } as const;

const marqueeItems = [
  "Full Bathroom Remodels",
  "Custom Tile Showers",
  "LVP & Tile Flooring",
  "Vanities & Fixtures",
  "Kitchen Backsplashes",
  "Drywall & Subfloor Repair",
  "Interior Painting",
  "Cabinets, Trim & Assembly",
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================ HERO */}
      <section className="blueprint relative overflow-hidden pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="dotgrid absolute inset-x-0 top-0 h-64 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-2 font-mono text-[11px] tracking-[0.2em] text-ink-600 uppercase">
                  <MapPin className="h-3.5 w-3.5 text-clay-600" aria-hidden="true" />
                  Redmond, WA · Serving ~{site.radiusMiles} miles
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-[clamp(3rem,7.2vw,5.8rem)] leading-[0.98] font-medium tracking-[-0.025em] text-ink-950">
                  Bathrooms &amp; tile,{" "}
                  <em className="text-clay-600 italic">beautifully</em> built.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 max-w-lg text-lg leading-relaxed text-ink-600">
                  WA Pro Builders LLC is a licensed, bonded &amp; insured bathroom remodeling
                  and home improvement specialist based in Redmond — trusted across Bellevue,
                  Kirkland, and the Eastside for custom tile showers, full bathroom
                  renovations, flooring, and the small jobs other crews won&rsquo;t take.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 rounded-full bg-clay-600 px-7 py-4 text-sm font-semibold text-paper shadow-[0_14px_30px_-12px_rgb(180_80_42/0.8)] transition-all hover:bg-clay-700"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {site.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-7 py-4 text-sm font-semibold text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-950 hover:text-paper"
                >
                  Request a Free Estimate
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Reveal>
              <Reveal delay={400} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-600">
                <span className="flex items-center gap-2">
                  <span className="flex gap-0.5" aria-label="Rated 4.9 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-clay-500 text-clay-500" aria-hidden="true" />
                    ))}
                  </span>
                  <span className="font-medium text-ink-900">{site.rating.label}</span> on Google
                </span>
                <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-clay-600" aria-hidden="true" />
                  {site.licensedInsured}
                </span>
              </Reveal>
            </div>

            <div className="relative lg:col-span-6">
              <Reveal delay={250}>
                <div className="relative">
                  <span className="absolute -top-8 -right-4 text-clay-300 md:-right-8" aria-hidden="true">
                    <span className="block rotate-12">
                      <TileMark className="h-20 w-20 md:h-28 md:w-28" />
                    </span>
                  </span>
                  <div className="rounded-[2.2rem] border border-line bg-cream p-2.5 shadow-lift">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                      <Image
                        src="/images/hero.jpg"
                        alt="Kitchen in Redmond, WA with a newly installed tile backsplash, wood range hood, and stone counters by WA Pro Builders"
                        fill
                        priority
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  {/* Floating review card */}
                  <figure className="absolute -bottom-8 left-4 max-w-[280px] rounded-2xl border border-line bg-paper p-5 shadow-lift md:-left-8">
                    <div className="flex gap-0.5" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-clay-500 text-clay-500" />
                      ))}
                    </div>
                    <blockquote className="mt-2.5 text-[13px] leading-relaxed text-ink-700">
                      &ldquo;Yevgen remodeled our bathroom and did a great job — professional,
                      easy to work with, and kept everything clean during the project.&rdquo;
                    </blockquote>
                    <figcaption className="mt-2.5 font-mono text-[10px] tracking-[0.18em] text-ink-400 uppercase">
                      Ihor K. · Bathroom remodel · Google
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= MARQUEE */}
      <Marquee
        items={marqueeItems}
        className="border-y border-ink-800 bg-ink-950 py-5 text-paper/75"
        itemClassName="font-mono text-xs tracking-[0.3em] uppercase"
      />

      {/* ======================================================== ABOUT */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="about-heading">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <Reveal>
              <div className="relative pb-12 pr-10">
                <div className="rounded-[2rem] border border-line bg-cream p-2 shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                    <Image
                      src="/images/craft-1.jpg"
                      alt="Professional tiling tools — trowels, spacers, and tile — prepared for a Redmond installation"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute right-0 -bottom-2 w-1/2 rotate-2 rounded-[1.6rem] border border-line bg-paper p-2 shadow-lift">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                    <Image
                      src="/images/craft-2.jpg"
                      alt="Installer setting large-format floor tile in a Washington home"
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="01 — The company"
              title='A Redmond crew that treats your <em class="italic text-clay-600">home</em> like its own.'
            />
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 md:text-lg">
                WA Pro Builders is owned and led by Evgenii Chepachenko — and Evgenii is
                on-site for every job. It started with a simple frustration: too many
                contractors make homeowners chase them. So we built the opposite kind of
                company — one that answers the phone, shows up when promised, and sweeps
                the floor before leaving. Today we handle{" "}
                <Link
                  href="/bathroom-handyman"
                  className="font-medium text-clay-700 underline decoration-clay-300 underline-offset-4 transition-colors hover:decoration-clay-600"
                >
                  bathroom remodels across Redmond
                </Link>{" "}
                and Bellevue, custom tile showers,{" "}
                <Link
                  href="/tile-installation"
                  className="font-medium text-clay-700 underline decoration-clay-300 underline-offset-4 transition-colors hover:decoration-clay-600"
                >
                  tile installation
                </Link>
                , LVP and tile flooring, and handyman repairs across Kirkland, Sammamish,
                Woodinville, and the greater Eastside.
              </p>
            </Reveal>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {trustPoints.map((t, i) => {
                const Icon = trustIcons[t.icon];
                return (
                  <Reveal key={t.title} delay={i * 90}>
                    <div className="flex h-full gap-4 rounded-2xl border border-line bg-white/50 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-50 text-clay-600">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink-900">{t.title}</h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-ink-500">{t.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <Reveal delay={100} className="mt-16 md:mt-20">
          <Stats
            items={[
              { value: site.yearsExperience, suffix: "+", label: "Years serving the Eastside" },
              { value: site.projectsCompleted, suffix: "+", label: "Projects completed" },
              { value: site.rating.value, decimals: 1, label: `Google rating · ${site.rating.count} reviews` },
              { value: site.radiusMiles, suffix: " mi", label: "Service radius from Redmond" },
            ]}
          />
        </Reveal>
      </section>

      {/* ======================================================== SERVICES */}
      <section className="bg-cream" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="02 — What we do"
              title="Two specialties, one careful standard."
              intro="We're not a do-everything franchise. We do tile exceptionally well, we make bathrooms feel new again, and we handle the punch lists in between."
            />
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {serviceSummaries.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <Link
                  href={s.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-paper shadow-card transition-shadow hover:shadow-lift"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-ink-800 uppercase backdrop-blur">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7 md:p-9">
                    <h3 className="font-display text-2xl leading-tight font-medium text-ink-900 md:text-[1.75rem]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-600">{s.text}</p>
                    <ul className="mt-5 space-y-2.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-clay-700 transition-colors group-hover:text-clay-600">
                      Explore this service
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== FEATURED WORK */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28" aria-labelledby="work-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="03 — Recent projects"
            title="Real work, right here on the Eastside."
            intro="Every photo is from a job we completed within about 20 miles of downtown Redmond — most within the last year."
          />
          <Reveal delay={150}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:border-ink-900 hover:bg-ink-950 hover:text-paper"
            >
              View the Full Gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <Link href="/gallery" className="group block">
                <div className={`relative overflow-hidden rounded-3xl border border-line ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink-950/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] text-clay-600 uppercase">
                      {p.category} · {p.location}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl leading-snug font-medium text-ink-900 transition-colors group-hover:text-clay-700">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition-all duration-300 group-hover:text-clay-600" aria-hidden="true" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======================================================== PROCESS */}
      <section className="relative overflow-hidden bg-ink-950 text-paper" aria-labelledby="process-heading">
        <Herringbone className="text-clay-400 opacity-[0.08]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <SectionHeading
            tone="dark"
            eyebrow="04 — How it works"
            title="No mystery, no disappearances."
            intro="Most contractor horror stories start with silence. Ours starts with a schedule. Here's exactly what working with us looks like."
          />
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110}>
                <li className="relative border-t border-paper/15 pt-7">
                  <span className="font-display text-5xl leading-none font-medium text-clay-400/80">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-paper">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-paper/60">{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======================================================== REVIEWS */}
      <section className="overflow-hidden py-20 md:py-28" aria-labelledby="reviews-heading">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="05 — Verified Google reviews"
              title='Five stars, <em class="italic text-clay-600">thirteen times over.</em>'
              intro="Real reviews from real projects around the Eastside — communication and tile work are what homeowners mention most."
            />
            <Reveal delay={150} className="flex items-center gap-4 rounded-3xl border border-line bg-white/60 px-7 py-5 shadow-card">
              <span className="font-display text-6xl leading-none font-medium text-ink-900">
                {site.rating.label}
              </span>
              <span>
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-clay-500 text-clay-500" />
                  ))}
                </span>
                <span className="mt-1.5 block text-xs leading-snug text-ink-500">
                  Based on {site.rating.count} verified
                  <br />
                  Google reviews
                </span>
              </span>
            </Reveal>
          </div>
        </div>

        {/* Sliding review rails — two rows, opposite directions, pause on hover */}
        <Reveal delay={200} className="mt-14">
          <ReviewRail />
        </Reveal>

        <p className="mx-auto mt-10 max-w-7xl px-5 text-center text-xs text-ink-400 md:px-8">
          Every review shown exactly as published on our Google Business Profile.
        </p>
      </section>

      {/* ==================================================== SERVICE AREA */}
      <section className="bg-cream" aria-labelledby="area-heading">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="06 — Service area"
                title='Based in Redmond. On the road <em class="italic text-clay-600">across the Eastside.</em>'
              />
              <Reveal delay={120}>
                <p className="mt-6 text-base leading-relaxed text-ink-600 md:text-lg">
                  We serve homeowners within roughly {site.radiusMiles} miles of downtown
                  Redmond — including{" "}
                  {serviceAreas
                    .filter((a) => !a.home)
                    .map((a) => a.name)
                    .join(", ")}
                  . Being local means quick on-site visits, realistic schedules, and a
                  reputation we protect on every street we work on.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  Near the edge of the map?{" "}
                  <a
                    href={site.phoneHref}
                    className="font-medium text-clay-700 underline decoration-clay-300 underline-offset-4 transition-colors hover:decoration-clay-600"
                  >
                    Call {site.phone}
                  </a>{" "}
                  and we&rsquo;ll tell you honestly whether we&rsquo;re the right fit — or point
                  you to someone closer.
                </p>
              </Reveal>
              <Reveal delay={220} className="mt-8 flex flex-wrap gap-2">
                {serviceAreas.map((a) => (
                  <span
                    key={a.name}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${
                      a.home
                        ? "border-clay-600/50 bg-clay-50 text-clay-700"
                        : "border-line bg-white/60 text-ink-600"
                    }`}
                  >
                    {a.name}
                    {a.home ? " — home base" : ""}
                  </span>
                ))}
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <div className="rounded-[2rem] border border-line bg-paper p-4 shadow-card md:p-6">
                  <AreaMap />
                  <p className="mt-2 text-center font-mono text-[10px] tracking-[0.2em] text-ink-400 uppercase">
                    Illustrative map · {site.radiusMiles}-mile radius from downtown Redmond
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
