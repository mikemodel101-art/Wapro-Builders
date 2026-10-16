import { Clock, Mail, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import TileMark from "@/components/tile-mark";
import { nav, serviceAreas, site } from "@/content/site";

/**
 * Global footer. The NAP block (Name / Address / Phone) here is intentionally
 * plain crawlable text that matches the Google Business Profile — a local-SEO
 * consistency requirement.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-paper">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-28 md:px-8 md:pt-20 md:pb-12">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <p className="flex items-center gap-3">
              <span className="text-clay-400">
                <TileMark className="h-10 w-10" />
              </span>
              <span className="leading-none">
                <span className="block font-display text-xl font-semibold">WA Pro Builders</span>
                <span className="mt-1 block font-mono text-[9.5px] tracking-[0.22em] text-paper/50 uppercase">
                  Tile & Home Improvement
                </span>
              </span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              A licensed, bonded &amp; insured bathroom remodeling and home improvement
              contractor based in Redmond, Washington — serving Eastside homeowners within
              roughly {site.radiusMiles} miles. Owner-led by {site.owner}.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1.5 text-[11px] font-medium text-paper/75">
                <ShieldCheck className="h-3.5 w-3.5 text-clay-400" aria-hidden="true" />
                {site.licensedInsured}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-paper/15 px-3 py-1.5 text-[11px] font-medium text-paper/75">
                <Star className="h-3.5 w-3.5 fill-clay-400 text-clay-400" aria-hidden="true" />
                {site.rating.label} on Google ({site.rating.count} reviews)
              </span>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services" className="lg:col-span-2">
            <h2 className="font-mono text-[11px] tracking-[0.28em] text-clay-300 uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/bathroom-handyman" className="link-sweep text-paper/70 hover:text-paper">
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link href="/bathroom-handyman" className="link-sweep text-paper/70 hover:text-paper">
                  Custom Tile Showers
                </Link>
              </li>
              <li>
                <Link href="/tile-installation" className="link-sweep text-paper/70 hover:text-paper">
                  Tile Installation &amp; Repairs
                </Link>
              </li>
              <li>
                <Link href="/tile-installation#backsplashes" className="link-sweep text-paper/70 hover:text-paper">
                  Kitchen Backsplashes
                </Link>
              </li>
              <li>
                <Link href="/bathroom-handyman#handyman" className="link-sweep text-paper/70 hover:text-paper">
                  Handyman &amp; General Repairs
                </Link>
              </li>
            </ul>
          </nav>

          {/* Explore */}
          <nav aria-label="Explore" className="lg:col-span-2">
            <h2 className="font-mono text-[11px] tracking-[0.28em] text-clay-300 uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-sweep text-paper/70 hover:text-paper">
                    {item.label === "Contact" ? "Request an Estimate" : item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/sitemap.xml" className="link-sweep text-paper/70 hover:text-paper">
                  Sitemap
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact / NAP */}
          <div className="lg:col-span-4">
            <h2 className="font-mono text-[11px] tracking-[0.28em] text-clay-300 uppercase">
              Contact
            </h2>
            <address className="mt-5 space-y-4 text-sm not-italic">
              <p className="font-medium text-paper">{site.name}</p>
              <p className="flex items-start gap-3 text-paper/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                {site.addressLabel} — serving homes within ~{site.radiusMiles} miles
              </p>
              <p>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 font-semibold text-paper transition-colors hover:text-clay-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 text-paper/70 transition-colors hover:text-clay-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                  {site.email}
                </a>
              </p>
              <p className="flex items-start gap-3 text-paper/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-clay-400" aria-hidden="true" />
                <span>
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.time}
                    </span>
                  ))}
                </span>
              </p>
            </address>
          </div>
        </div>

        {/* Service area */}
        <div className="mt-14 border-t border-paper/10 pt-8">
          <p className="font-mono text-[11px] tracking-[0.28em] text-paper/45 uppercase">
            Service area
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {serviceAreas.map((a) => (
              <li
                key={a.name}
                className={`rounded-full border px-3 py-1.5 text-xs ${
                  a.home
                    ? "border-clay-400/60 bg-clay-600/20 text-clay-300"
                    : "border-paper/12 text-paper/60"
                }`}
              >
                {a.name}
                {a.home ? ", WA — home base" : ", WA"}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-paper/10 pt-7 text-xs text-paper/45 md:flex-row md:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.license} · {site.licensedInsured}</p>
          <p>Redmond, Washington, USA</p>
        </div>
      </div>
    </footer>
  );
}
