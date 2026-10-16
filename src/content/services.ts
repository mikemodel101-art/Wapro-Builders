/**
 * ============================================================================
 *  SERVICES CONTENT — lists used on the Home page and both service pages.
 *  Edit text freely; icons come from the Lucide icon set (lucide.dev).
 * ============================================================================
 */

import {
  Armchair,
  Bath,
  Drill,
  Flame,
  Grid3x3,
  Hammer,
  Layers,
  PaintRoller,
  Ruler,
  ShowerHead,
  Sparkles,
  Thermometer,
  ThermometerSun,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/** Two headline services — homepage cards + footer links (order = priority) */
export const serviceSummaries = [
  {
    title: "Bathroom Remodeling & Improvements",
    href: "/bathroom-handyman",
    image: "/images/bath-2.jpg",
    alt: "Updated bathroom with a walk-in shower, new vanity, and fresh tile",
    text: "Full bathroom renovations and custom tile showers — plus every fixture, floor, and finishing detail that makes the room complete.",
    points: [
      "Full bathroom renovations",
      "Custom tile showers & bathtub installs",
      "Vanity, toilet, mirror & faucet installs",
      "LVP & tile flooring, subfloor included",
    ],
  },
  {
    title: "Tile Installation & Repairs",
    href: "/tile-installation",
    image: "/images/kitchen-2.jpg",
    alt: "Kitchen with a freshly installed patterned ceramic tile backsplash",
    text: "Wall, floor, and shower tile set level and sealed to last — from kitchen backsplashes to cracked-tile repairs that disappear.",
    points: [
      "Wall, floor & shower tile",
      "Kitchen backsplashes & accent walls",
      "Tile repair, regrouting & reglazing",
      "Porcelain, ceramic & natural stone",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Tile page                                                           */
/* ------------------------------------------------------------------ */

export const tileServices: ServiceItem[] = [
  {
    icon: Grid3x3,
    title: "Floor Tile Installation",
    text: "Porcelain, ceramic, and stone floors over properly prepped substrates — OSB and plywood subfloor repair handled first, so floors stay flat and quiet.",
  },
  {
    icon: ShowerHead,
    title: "Custom Tile Showers",
    text: "Full waterproofing systems behind every wall, sloped pans, niches, and benches — showers built to stay tight for decades, not years.",
  },
  {
    icon: Layers,
    title: "Kitchen Backsplashes",
    text: "Subway to zellige, layout dry-fit first, outlets and under-cabinet details handled, finished with color-matched, sealed grout lines.",
  },
  {
    icon: Flame,
    title: "Fireplaces & Accent Walls",
    text: "Floor-to-ceiling stone, stacked ledger, or large-format porcelain to turn a fireplace or entry wall into the room's centerpiece.",
  },
  {
    icon: Thermometer,
    title: "Heated Floor Systems",
    text: "Electric radiant mats installed and tested under new tile — the single most-loved upgrade in a Pacific Northwest bathroom.",
  },
  {
    icon: Wrench,
    title: "Tile Repair & Regrouting",
    text: "Regrouting, re-caulking, tile reglazing, loose-tile resets, and cracked-tile replacement that can add years to an otherwise healthy installation.",
  },
];

export const tileMaterials = [
  {
    name: "Porcelain",
    text: "Dense, nearly waterproof, and our most-installed material — ideal for floors, showers, and busy family kitchens.",
  },
  {
    name: "Ceramic",
    text: "Budget-friendly with endless colors and shapes. A great pick for backsplashes and lower-traffic walls.",
  },
  {
    name: "Natural Stone",
    text: "Marble, travertine, and slate with real movement. We seal every stone install and walk you through its care.",
  },
  {
    name: "Glass & Mosaic",
    text: "Light-catching accents, niche inlays, and full feature walls — set with non-sag mortars for clean, even lines.",
  },
  {
    name: "Large Format",
    text: "24×48 and bigger panels with minimal grout lines. Requires perfect flatness — where careful prep pays off.",
  },
  {
    name: "Handmade & Zellige",
    text: "Beautifully irregular artisan tile. We dry-fit and blend boxes so the natural variation reads intentional, never random.",
  },
];

/* ------------------------------------------------------------------ */
/* Bathroom / handyman page                                            */
/* ------------------------------------------------------------------ */

export const bathroomServices: ServiceItem[] = [
  {
    icon: Sparkles,
    title: "Full Bathroom Remodels",
    text: "Complete renovations from demo to final caulk line — layout, waterproofing, tile, floors, fixtures, and paint from one accountable crew.",
  },
  {
    icon: ShowerHead,
    title: "Custom Tile Showers",
    text: "Walk-in showers, tub-to-shower conversions, curbless entries, niches and benches — waterproofed correctly before a single tile is set.",
  },
  {
    icon: Bath,
    title: "Bathtub Install & Refinishing",
    text: "New tub installation, plus repair, refinishing, and reglazing for tubs that have years left — an honest alternative to replacement.",
  },
  {
    icon: Wrench,
    title: "Vanities, Toilets & Fixtures",
    text: "Vanity, toilet, mirror, and faucet installation with clean supply and drain work — the hardware that finishes the room, fitted right.",
  },
  {
    icon: Grid3x3,
    title: "LVP & Tile Bathroom Floors",
    text: "Luxury vinyl plank or tile flooring with subfloor repair (OSB and plywood) handled first — warm, level, and waterproof underfoot.",
  },
  {
    icon: ThermometerSun,
    title: "Heated Floors & Ventilation",
    text: "Radiant floor heat, quiet exhaust fans, and moisture fixes — the upgrades that make a Northwest bathroom comfortable and mold-free.",
  },
];

export const bathroomRefreshList = [
  "Regrout & re-caulk every joint — instant visual reset",
  "Tile reglazing and worktop resurfacing",
  "New vanity, toilet, faucet, mirror & light fixtures",
  "LVP flooring over the existing subfloor",
  "Moisture-resistant paint in a fresh color",
] as const;

export const handymanServices: ServiceItem[] = [
  {
    icon: Hammer,
    title: "Drywall Repair & Texturing",
    text: "Patches blended flat and texture matched — from doorknob dents to full sections after plumbing work, ready for paint.",
  },
  {
    icon: Layers,
    title: "Subfloor Repair",
    text: "OSB and plywood subfloor replacement for soft spots, squeaks, and water damage — solid, level structure before new flooring goes down.",
  },
  {
    icon: PaintRoller,
    title: "Interior Painting",
    text: "Rooms, ceilings, trim, and accent walls — sharp lines, careful masking, and dust-minimized prep in lived-in homes.",
  },
  {
    icon: Ruler,
    title: "Cabinet Installation",
    text: "Kitchen and bath cabinets set level, scribed, and secured to structure — box install through hardware alignment.",
  },
  {
    icon: Drill,
    title: "Trim & Molding Installation",
    text: "Baseboard, casing, and crown molding with tight miters and finished nail work — the detail that makes rooms look complete.",
  },
  {
    icon: Armchair,
    title: "Furniture Assembly",
    text: "Flat-pack furniture, shelving, and wall mounting assembled square, anchored to studs, and leveled — boxes hauled out when we're done.",
  },
];

/* ------------------------------------------------------------------ */
/* Shared                                                              */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    title: "Call or request online",
    text: "Reach us by phone or the estimate form. Tell us about the space — photos help a lot — and we respond within one business day.",
  },
  {
    title: "On-site visit & written estimate",
    text: "Evgenii measures, checks the substrate and plumbing, talks materials, and hands you a fixed, line-item estimate. No vague allowances.",
  },
  {
    title: "Scheduled, tidy installation",
    text: "Dust protection down before tools come out. Daily cleanup, clear communication, and a crew that treats your home like its own.",
  },
  {
    title: "Walkthrough & workmanship warranty",
    text: "We inspect every grout line together, review care and sealing, and back the work with a 1-year workmanship warranty.",
  },
] as const;

export const trustPoints = [
  {
    icon: "shield",
    title: "Licensed, Bonded & Insured",
    text: "A registered Washington State contractor carrying full liability and workers' comp — certificates available on request.",
  },
  {
    icon: "user",
    title: "Owner on Every Job",
    text: "You hire Evgenii, you get Evgenii. The person who quotes your project is the person laying the tile and answering the phone.",
  },
  {
    icon: "sparkles",
    title: "Tidy, Respectful Crews",
    text: "Floor protection, dust control, and a broom-clean site every night. Reviewers mention our cleanliness again and again.",
  },
  {
    icon: "award",
    title: "1-Year Workmanship Warranty",
    text: "Every installation is backed in writing. If our workmanship causes a problem in year one, we come back and make it right.",
  },
] as const;
