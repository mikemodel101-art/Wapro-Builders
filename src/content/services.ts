/**
 * ============================================================================
 *  SERVICES CONTENT — lists used on the Home page and both service pages.
 *  Edit text freely; icons come from the Lucide icon set (lucide.dev).
 * ============================================================================
 */

import {
  Bath,
  CookingPot,
  Drill,
  Flame,
  Grid3x3,
  Hammer,
  PaintRoller,
  Ruler,
  ShowerHead,
  Sparkles,
  Thermometer,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/** Two headline services — homepage cards + footer links */
export const serviceSummaries = [
  {
    title: "Tile Installation & Kitchen Backsplashes",
    href: "/tile-installation",
    image: "/images/kitchen-2.jpg",
    alt: "Kitchen with a freshly installed patterned ceramic tile backsplash",
    text: "Floors, showers, and statement backsplashes — set level, spaced tight, and sealed to last through years of Pacific Northwest living.",
    points: [
      "Floor, wall & shower tile",
      "Backsplashes & accent walls",
      "Porcelain, ceramic & natural stone",
      "Waterproofing done to code, every time",
    ],
  },
  {
    title: "Bathroom Improvements & Handyman",
    href: "/bathroom-handyman",
    image: "/images/bath-2.jpg",
    alt: "Updated bathroom with a walk-in shower, new vanity, and fresh tile",
    text: "From tub-to-shower conversions to the punch list nobody else wants — one call handles the whole bathroom, plus the odd jobs around it.",
    points: [
      "Walk-in showers & tub conversions",
      "Vanities, fixtures & flooring",
      "Regrouting, caulk & grout repair",
      "Handyman punch lists — small jobs welcome",
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
    text: "Porcelain, ceramic, and stone floors over properly prepped substrates — crack-isolation membrane and self-leveling where the slab demands it.",
  },
  {
    icon: ShowerHead,
    title: "Shower & Tub Surrounds",
    text: "Full waterproofing systems behind every wall, sloped pans, niches, benches, and niche lighting coordination for showers that stay tight.",
  },
  {
    icon: CookingPot,
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
    title: "Grout, Caulk & Tile Repair",
    text: "Regrouting, re-caulking, loose-tile resets, and cracked-tile replacement that can add years to an otherwise healthy installation.",
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
    icon: ShowerHead,
    title: "Walk-In Showers & Tub Conversions",
    text: "Tub-to-shower conversions, curbless entries, glass-door-ready openings, and waterproofing you can trust for the long haul.",
  },
  {
    icon: Bath,
    title: "Vanities, Mirrors & Lighting",
    text: "Vanity removal and install, faucet set, mirror and sconce mounting, and the finishing caulk lines that make it look factory.",
  },
  {
    icon: Grid3x3,
    title: "Bathroom Flooring & Heated Floors",
    text: "Slip-rated porcelain, mosaic, or stone floors — with optional radiant heat installed and thermostat-tested before we set a tile.",
  },
  {
    icon: Sparkles,
    title: "Regrout & Refresh",
    text: "The honest alternative to a full remodel: regrout, re-caulk, fixture swaps, and paint that make a tired bath feel new again.",
  },
  {
    icon: Ruler,
    title: "Layout & Accessibility Updates",
    text: "Grab bars, comfort-height fixtures, wider clearances, and curbless entries — practical upgrades that age gracefully with you.",
  },
  {
    icon: Sparkles,
    title: "Ventilation & Moisture Fixes",
    text: "Quiet exhaust fans, moisture-resistant drywall, and mildew-prone spot repair — essential in our damp Northwest climate.",
  },
];

export const handymanServices: ServiceItem[] = [
  {
    icon: Hammer,
    title: "Drywall & Paint Touch-Ups",
    text: "Patches blended flat, texture matched, and paint touched up so the wall looks like nothing ever happened.",
  },
  {
    icon: Wrench,
    title: "Caulk, Grout & Sealant Lines",
    text: "Kitchens, baths, windows, and trim — crisp new sealant lines that keep water out and rooms looking finished.",
  },
  {
    icon: Drill,
    title: "Mounting & Installation",
    text: "TVs, shelving, grab bars, curtain rods, and hardware — anchored correctly, level, and into structure every time.",
  },
  {
    icon: PaintRoller,
    title: "Door, Trim & Hardware Repairs",
    text: "Sticking doors planed, hinges and latches replaced, baseboard and casing patched, and hardware swaps throughout the house.",
  },
  {
    icon: Ruler,
    title: "Fixture & Faucet Swaps",
    text: "Faucets, disposals, light fixtures, fans, and thermostats replaced safely, with everything tested before we leave.",
  },
  {
    icon: Sparkles,
    title: "Pre-Listing & Move-In Punch Lists",
    text: "Two-page list, one crew, one invoice. The fastest way to get a home market-ready — or to settle into a new one.",
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
    text: "We measure, check the substrate and plumbing, talk materials, and hand you a fixed, line-item estimate. No vague allowances.",
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
    icon: "file",
    title: "Written, Fixed-Price Estimates",
    text: "Line-item proposals before work starts. The number we agree on is the number you pay, unless you change the scope.",
  },
  {
    icon: "sparkles",
    title: "Tidy, Respectful Crews",
    text: "Floor protection, dust control, and a broom-clean site every night. We work in your home like we're guests — because we are.",
  },
  {
    icon: "award",
    title: "1-Year Workmanship Warranty",
    text: "Every installation is backed in writing. If our workmanship causes a problem in year one, we come back and make it right.",
  },
] as const;
