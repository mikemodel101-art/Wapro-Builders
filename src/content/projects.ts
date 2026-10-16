/**
 * ============================================================================
 *  PROJECT GALLERY — edit this file to add / remove / reorder projects.
 * ----------------------------------------------------------------------------
 *  1. Drop a new photo into  public/images/  (JPG, ~1600px wide is plenty —
 *     Next.js automatically optimizes and serves responsive WebP/AVIF).
 *  2. Copy one of the entries below and update the fields.
 *  3. The Gallery page, filters, and homepage "featured" row update on their own.
 *
 *  Photos below are placeholder stock images. Swap in real job photos as the
 *  project library grows — same filename = instant replacement.
 * ============================================================================
 */

export type ProjectCategory = "Kitchen" | "Bathroom" | "Floors" | "Handyman";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Neighborhood or city — shown with the project; great for local SEO */
  location: string;
  year: string;
  image: string;
  /** Describe the photo for accessibility + image SEO */
  alt: string;
  blurb: string;
  /** Set true for portrait-orientation photos (nicer masonry layout) */
  tall?: boolean;
  /** Featured projects appear on the homepage (first 6 are used) */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "education-hill-backsplash",
    title: "Full-Height Kitchen Backsplash",
    category: "Kitchen",
    location: "Education Hill, Redmond",
    year: "2026",
    image: "/images/kitchen-1.jpg",
    alt: "Bright Redmond kitchen with a new full-height tile backsplash behind a stainless range",
    blurb:
      "Counter-to-cabinet ceramic tile with a pencil-trim edge, new grout lines aligned to the range hood, and fresh caulk at every joint.",
    featured: true,
  },
  {
    slug: "west-bellevue-marble-shower",
    title: "Marble-Look Walk-In Shower",
    category: "Bathroom",
    location: "West Bellevue",
    year: "2026",
    image: "/images/bath-1.jpg",
    alt: "Walk-in shower in Bellevue with large marble-look porcelain tile and a frameless glass door",
    blurb:
      "Tub-to-shower conversion with 24×48 porcelain panels, a recessed niche, linear drain, and full waterproofing membrane behind every tile.",
    featured: true,
  },
  {
    slug: "kirkland-highlands-patterned-backsplash",
    title: "Patterned Ceramic Backsplash",
    category: "Kitchen",
    location: "The Highlands, Kirkland",
    year: "2025",
    image: "/images/kitchen-2.jpg",
    alt: "Kirkland kitchen with a colorful patterned ceramic tile backsplash and white shaker cabinets",
    blurb:
      "A statement patterned ceramic splash with careful pattern-matching at the corners, plus under-cabinet outlet relocation.",
    featured: true,
  },
  {
    slug: "redmond-ridge-curbless-shower",
    title: "Curbless Shower Conversion",
    category: "Bathroom",
    location: "Redmond Ridge",
    year: "2025",
    image: "/images/bath-3.jpg",
    alt: "Minimal curbless walk-in shower in Redmond with clear glass and light gray tile",
    blurb:
      "Zero-threshold entry with a sloped pan, heated floor under the tile, and a simple frameless panel for an accessible, spa-clean look.",
    featured: true,
  },
  {
    slug: "downtown-bellevue-subway-backsplash",
    title: "Classic Subway Backsplash",
    category: "Kitchen",
    location: "Downtown Bellevue",
    year: "2026",
    image: "/images/kitchen-3.jpg",
    alt: "Condo kitchen in downtown Bellevue with a white subway tile backsplash and light wood cabinetry",
    blurb:
      "Hand-set 3×12 subway tile in a stacked pattern with warm gray grout — two days in home, fully sealed and cleaned.",
  },
  {
    slug: "sammamish-range-wall",
    title: "Range Wall Tile & Feature",
    category: "Kitchen",
    location: "Sammamish Plateau",
    year: "2025",
    image: "/images/kitchen-5.jpg",
    alt: "Sammamish kitchen range wall finished in textured artisan tile with a wood hood",
    blurb:
      "Textured handmade-look tile carried to the ceiling around the range, with outlet and pot-filler coordination handled in house.",
    tall: true,
  },
  {
    slug: "rose-hill-spa-bath",
    title: "Spa Shower & Vanity Refresh",
    category: "Bathroom",
    location: "Rose Hill, Kirkland",
    year: "2026",
    image: "/images/bath-2.jpg",
    alt: "Kirkland bathroom with a walk-in shower, wood-look vanity, and soft neutral wall tile",
    blurb:
      "New shower wall tile, floating vanity set and leveled, mirror and sconce install, and fresh paint — one crew, nine working days.",
    featured: true,
  },
  {
    slug: "issaquah-floor-to-ceiling-shower",
    title: "Floor-to-Ceiling Shower Tile",
    category: "Bathroom",
    location: "Issaquah Highlands",
    year: "2025",
    image: "/images/bath-5.jpg",
    alt: "Issaquah shower with floor-to-ceiling marble tile and matte black fixtures",
    blurb:
      "Marble-look porcelain to the ceiling, matte-black trim kit swap, and new glass — with schluter edging for crisp, chip-proof corners.",
  },
  {
    slug: "carnation-entry-tile",
    title: "Entryway Porcelain Tile",
    category: "Floors",
    location: "Carnation",
    year: "2025",
    image: "/images/floor-1.jpg",
    alt: "Carnation farmhouse entryway with durable stone-look porcelain floor tile",
    blurb:
      "300 sq ft of stone-look porcelain over a crack-isolation membrane — built to take muddy boots and dog traffic for decades.",
  },
  {
    slug: "redmond-hex-mudroom",
    title: "Hexagon Mudroom Floor",
    category: "Floors",
    location: "Overlake, Redmond",
    year: "2026",
    image: "/images/floor-2.jpg",
    alt: "Redmond mudroom with a charcoal hexagon tile floor and white wainscoting",
    blurb:
      "Charcoal hex mosaic with a tight border detail and sealed grout for easy cleanup at the busiest door in the house.",
  },
  {
    slug: "duvall-mosaic-floor-bath",
    title: "Mosaic Floor & Vanity Swap",
    category: "Bathroom",
    location: "Duvall",
    year: "2025",
    image: "/images/bath-6.jpg",
    alt: "Duvall hall bathroom with a patterned mosaic floor and a new vanity",
    blurb:
      "Patterned sheet mosaic floor, new vanity and faucet set, toilet re-set with a new flange seal, and re-caulked tub surround.",
    tall: true,
  },
  {
    slug: "woodinville-blue-backsplash",
    title: "Blue Artisan Backsplash",
    category: "Kitchen",
    location: "Woodinville Wine Country",
    year: "2025",
    image: "/images/kitchen-4.jpg",
    alt: "Woodinville kitchen with a deep blue handmade-look tile backsplash and white cabinets",
    blurb:
      "Glazed artisan tile with natural variation, laid in a soldier course over the range with color-matched caulk trim lines.",
    tall: true,
  },
  {
    slug: "bothell-fixture-upgrade",
    title: "Matte-Black Fixture Upgrade",
    category: "Bathroom",
    location: "Bothell",
    year: "2026",
    image: "/images/bath-4.jpg",
    alt: "Bothell shower with fresh matte black fixtures on a newly regrouted tiled wall",
    blurb:
      "Regrout and re-caulk plus a full matte-black fixture swap — valve trim, rain head, and hardware set in a single visit.",
    tall: true,
  },
  {
    slug: "kirkland-punch-list",
    title: "Pre-Listing Punch List",
    category: "Handyman",
    location: "Juanita, Kirkland",
    year: "2026",
    image: "/images/handy-1.jpg",
    alt: "Handyman drilling and mounting hardware during a pre-listing repair visit in Kirkland",
    blurb:
      "Two days, one visit list: drywall patches, door adjustments, caulk lines, grab-bar install, and a refreshed shower regrout.",
  },
  {
    slug: "bellevue-shelving-trim",
    title: "Shelving & Trim Repairs",
    category: "Handyman",
    location: "Crossroads, Bellevue",
    year: "2025",
    image: "/images/handy-2.jpg",
    alt: "Craftsman fastening custom shelving during a handyman visit in Bellevue",
    blurb:
      "Floating shelves anchored to studs, baseboard and casing repairs, and a hallway of drywall touch-ups — done and dusted in a day.",
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Kitchen",
  "Bathroom",
  "Floors",
  "Handyman",
];

export const featuredProjects = projects.filter((p) => p.featured);
