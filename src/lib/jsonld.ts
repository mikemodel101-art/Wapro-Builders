/**
 * ============================================================================
 *  STRUCTURED DATA (schema.org / JSON-LD)
 * ----------------------------------------------------------------------------
 *  LocalBusiness + Service + FAQPage schema for search and AI discovery.
 *  All values are pulled from src/content/site.ts so the schema always
 *  matches the visible site content and (after launch) your Google
 *  Business Profile — consistency across all three matters for local SEO.
 * ============================================================================
 */

import { serviceAreas, site } from "@/content/site";

const businessId = `${site.url}/#business`;

export function localBusinessJsonLd() {
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: site.name,
    alternateName: site.shortName,
    description:
      "WA Pro Builders LLC is a licensed, bonded, and insured tile installation and home improvement contractor based in Redmond, WA — serving Bellevue, Kirkland, Sammamish, Woodinville, and Eastside homeowners within about 20 miles.",
    url: site.url,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    image: [`${site.url}/images/og.jpg`],
    logo: `${site.url}/icon.svg`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Check, Credit Card, Zelle",
    foundingDate: String(site.established),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: "98052",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: [
      ...serviceAreas.map((a) => ({
        "@type": "City",
        name: `${a.name}, WA`,
      })),
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        geoRadius: String(Math.round(site.radiusMiles * 1609.34)),
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(site.rating.value),
      reviewCount: String(site.rating.count),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tile & Home Improvement Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tile Installation & Kitchen Backsplashes",
            url: `${site.url}/tile-installation`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Improvements & Handyman Services",
            url: `${site.url}/bathroom-handyman`,
          },
        },
      ],
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: `${site.name} — Tile & Home Improvement in Redmond, WA`,
    publisher: { "@id": businessId },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    image: `${site.url}${opts.image}`,
    provider: { "@id": businessId },
    areaServed: serviceAreas.map((a) => ({ "@type": "City", name: `${a.name}, WA` })),
    serviceType: "Home improvement",
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
