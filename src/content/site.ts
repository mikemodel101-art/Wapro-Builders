/**
 * ============================================================================
 *  SITE SETTINGS — WA Pro Builders LLC
 * ----------------------------------------------------------------------------
 *  This is the main file to edit when business details change.
 *  Phone, email, hours, license number, and service area are pulled from here
 *  into every page, the footer, and the LocalBusiness structured data (SEO),
 *  so updating this file keeps everything consistent — including what Google
 *  sees (it should always match your Google Business Profile).
 *
 *  Phone / hours / rating / reviews were updated from the live Google
 *  Business Profile. Remaining placeholders are marked TODO(launch).
 * ============================================================================
 */

export const site = {
  /** Legal business name (must match Google Business Profile exactly) */
  name: "WA Pro Builders LLC",
  /** Shorter name used in the logo / header */
  shortName: "WA Pro Builders",
  tagline: "Bathroom Remodeling & Home Improvement",

  /** Business phone (matches Google Business Profile) */
  phone: "(206) 804-1196",
  phoneHref: "tel:+12068041196",

  /** Owner / lead — shown in copy and LocalBusiness `founder` schema */
  owner: "Evgenii Chepachenko",
  ownerFirstName: "Evgenii",

  /** TODO(launch): replace with the real business email */
  email: "hello@waprobuilders.com",
  emailHref: "mailto:hello@waprobuilders.com",

  city: "Redmond",
  state: "WA",
  /** Service-based business: we list city/state only, no street address */
  addressLabel: "Redmond, WA 98052",

  /** TODO(launch): replace with the real WA contractor license number */
  license: "WA Lic. #WAPROBL882JD",
  licensedInsured: "Licensed, Bonded & Insured",

  /** Canonical domain — set NEXT_PUBLIC_SITE_URL in .env for production */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.waprobuilders.com").replace(/\/$/, ""),

  /** Approximate service radius used in copy + schema (GeoCircle) */
  radiusMiles: 20,
  /** Geographic center of the service area (downtown Redmond) */
  geo: { lat: 47.674, lng: -122.1215 },

  /**
   * Live Google Business Profile rating (5.0 — 13 reviews).
   * `label` is the display string, `value`/`count` feed schema + stats.
   * Keep in sync with the GBP as new reviews come in.
   */
  rating: { value: 5, label: "5.0", count: 13 },

  /** TODO(launch): confirm real founding year + project count */
  established: 2013,
  yearsExperience: 12,
  projectsCompleted: 350,

  /** GBP hours: Mon–Fri 7:00 AM – 9:00 PM · Sat & Sun closed */
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 9:00 PM" },
    { days: "Saturday & Sunday", time: "Closed" },
  ],

  /**
   * TODO(launch): paste real profile URLs (used for footer icons and the
   * "sameAs" field in LocalBusiness structured data). E.g. Thumbtack,
   * Facebook, Instagram, Yelp.
   */
  social: {
    googleBusiness: "",
    facebook: "",
    instagram: "",
    yelp: "",
    thumbtack: "",
  },
};

/** Primary navigation — order matters (header + mobile menu + footer) */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Bathroom & Handyman", href: "/bathroom-handyman" },
  { label: "Tile & Backsplashes", href: "/tile-installation" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/**
 * Service area — cities within ~20 miles of Redmond.
 * `x` / `y` are hand-placed positions for the stylized service-area map
 * (SVG viewBox 0 0 480 330, Redmond at 300,150, ~7.5px per mile).
 * Add/remove places here and the map, chips, footer, and SEO copy update.
 */
export type ServiceArea = {
  name: string;
  x: number;
  y: number;
  /** HQ city gets a highlighted pin */
  home?: boolean;
};

export const serviceAreas: ServiceArea[] = [
  { name: "Redmond", x: 300, y: 150, home: true },
  { name: "Bellevue", x: 252, y: 196 },
  { name: "Kirkland", x: 246, y: 122 },
  { name: "Sammamish", x: 344, y: 172 },
  { name: "Woodinville", x: 284, y: 94 },
  { name: "Bothell", x: 252, y: 74 },
  { name: "Kenmore", x: 222, y: 76 },
  { name: "Duvall", x: 372, y: 98 },
  { name: "Carnation", x: 384, y: 142 },
  { name: "Issaquah", x: 318, y: 226 },
  { name: "Renton", x: 228, y: 236 },
  { name: "Mercer Island", x: 210, y: 172 },
  { name: "Fall City", x: 394, y: 208 },
];

/** Plain city list for SEO copy blocks ("Serving Redmond, Bellevue…") */
export const areaNames = serviceAreas.map((a) => a.name);
