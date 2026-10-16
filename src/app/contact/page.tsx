import {
  CalendarCheck,
  ClipboardCheck,
  Clock,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Star,
} from "lucide-react";
import type { Metadata } from "next";
import EstimateForm from "@/components/estimate-form";
import JsonLd from "@/components/json-ld";
import Reveal from "@/components/reveal";
import { serviceAreas, site } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact & Free Estimates — Redmond, WA",
  description:
    "Request a free estimate from WA Pro Builders — tile installation & home improvement in Redmond, WA. Call (425) 555-0148 or send project details and photos. Serving Bellevue, Kirkland, Sammamish & the Eastside within ~20 miles.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Request a Free Estimate | WA Pro Builders LLC — Redmond, WA",
    description:
      "Call (425) 555-0148 or send your project details and photos — free on-site estimates across the Eastside.",
    url: `${site.url}/contact`,
  },
};

const nextSteps = [
  {
    icon: MessageSquareText,
    title: "We reply within 1 business day",
    text: "A real person — often the owner — reviews every request and calls, texts, or emails back.",
  },
  {
    icon: CalendarCheck,
    title: "On-site visit that fits your week",
    text: "We measure, look at the substrate and plumbing, and talk materials and budget honestly.",
  },
  {
    icon: ClipboardCheck,
    title: "Written, fixed-price estimate",
    text: "Line-item pricing you can compare. No allowances, no pressure, no expiration games.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact & Free Estimates", path: "/contact" },
        ])}
      />

      <section className="blueprint pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] font-medium tracking-[0.28em] text-clay-600 uppercase">
              Contact · Free estimates
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,5.6vw,4.5rem)] leading-[1.02] font-medium tracking-[-0.02em] text-balance text-ink-900">
              Let&rsquo;s talk about <em className="text-clay-600 italic">your</em> project.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              Call for the fastest answer, or send the form with a few photos of the space —
              they help us give you a realistic ballpark before we even visit. Serving
              Redmond, Bellevue, Kirkland, and Eastside homes within ~{site.radiusMiles} miles.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* ------------------------------------------------ form */}
          <Reveal className="lg:col-span-7">
            <EstimateForm />
          </Reveal>

          {/* ------------------------------------------------ sidebar */}
          <div className="space-y-6 lg:col-span-5">
            {/* Contact card */}
            <Reveal delay={100}>
              <div className="rounded-3xl border border-line bg-ink-950 p-8 text-paper">
                <h2 className="font-mono text-[11px] tracking-[0.28em] text-clay-300 uppercase">
                  Prefer to talk?
                </h2>
                <a
                  href={site.phoneHref}
                  className="mt-5 flex items-center gap-4 font-display text-3xl font-medium tracking-tight text-paper transition-colors hover:text-clay-300 md:text-4xl"
                >
                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-clay-600 p-3.5">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </span>
                  {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="mt-4 flex items-center gap-3 text-sm text-paper/70 transition-colors hover:text-clay-300"
                >
                  <Mail className="h-4 w-4 text-clay-400" aria-hidden="true" />
                  {site.email}
                </a>
                <div className="mt-6 space-y-2 border-t border-paper/10 pt-5 text-sm text-paper/65">
                  <div className="flex items-start gap-2.5">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                    <span>
                      {site.hours.map((h) => (
                        <span key={h.days} className="block">
                          {h.days}: {h.time}
                        </span>
                      ))}
                    </span>
                  </div>
                  <p className="flex items-start gap-2.5 pt-1">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                    {site.name} · {site.addressLabel}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* What happens next */}
            <Reveal delay={160}>
              <div className="rounded-3xl border border-line bg-paper p-8 shadow-card">
                <h2 className="font-mono text-[11px] tracking-[0.28em] text-clay-600 uppercase">
                  What happens next
                </h2>
                <ol className="mt-6 space-y-6">
                  {nextSteps.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-clay-50 text-clay-600">
                        <s.icon className="h-5 w-5" aria-hidden="true" />
                        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink-950 font-mono text-[9px] text-paper">
                          {i + 1}
                        </span>
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-ink-900">{s.title}</h3>
                        <p className="mt-1 text-[13.5px] leading-relaxed text-ink-500">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* Service area */}
            <Reveal delay={220}>
              <div className="rounded-3xl border border-line bg-cream p-8">
                <h2 className="font-mono text-[11px] tracking-[0.28em] text-clay-600 uppercase">
                  Where we work
                </h2>
                <p className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.map((a) => (
                    <span
                      key={a.name}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                        a.home
                          ? "border-clay-600/50 bg-clay-50 text-clay-700"
                          : "border-line bg-white/70 text-ink-600"
                      }`}
                    >
                      {a.name}
                    </span>
                  ))}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-ink-500">
                  Within about {site.radiusMiles} miles of downtown Redmond. Just outside the map?{" "}
                  <a href={site.phoneHref} className="font-semibold text-clay-700">
                    Call and ask
                  </a>{" "}
                  — we&rsquo;ll tell you honestly.
                </p>
              </div>
            </Reveal>

            {/* Trust quote */}
            <Reveal delay={280}>
              <figure className="rounded-3xl border border-line bg-paper p-8">
                <div className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-clay-500 text-clay-500" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-700">
                  &ldquo;From the first phone call to the final walkthrough, everything was exactly
                  as promised.&rdquo;
                </blockquote>
                <figcaption className="mt-3 font-mono text-[10px] tracking-[0.18em] text-ink-400 uppercase">
                  Sarah M. · Redmond · Google review
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
