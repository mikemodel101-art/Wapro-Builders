/**
 * ============================================================================
 *  CUSTOMER REVIEWS
 * ----------------------------------------------------------------------------
 *  IMPORTANT: these are realistic PLACEHOLDER reviews used for layout.
 *  Before launch, replace each entry with a genuine review from your Google
 *  Business Profile (copy the text verbatim and keep the reviewer's first
 *  name + last initial). Keep the total count in sync with `site.rating`
 *  in  src/content/site.ts.
 * ============================================================================
 */

export type Review = {
  name: string;
  location: string;
  project: string;
  text: string;
  rating: number; // 1–5
  when: string;
  source: "Google";
};

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    location: "Redmond",
    project: "Kitchen backsplash",
    text: "From the first phone call to the final walkthrough, everything was exactly as promised. They helped me pick a tile that worked with my counters, laid out the pattern before setting anything, and my kitchen looks like it belongs in a magazine. The workspace was spotless every evening.",
    rating: 5,
    when: "February 2026",
    source: "Google",
  },
  {
    name: "Daniel & Priya K.",
    location: "Bellevue",
    project: "Walk-in shower remodel",
    text: "We converted our old tub into a walk-in shower and couldn't be happier. The waterproofing was explained step by step, the tile lines are perfectly straight, and the niche is exactly where we asked. On time, on budget, zero surprises.",
    rating: 5,
    when: "January 2026",
    source: "Google",
  },
  {
    name: "Karen T.",
    location: "Kirkland",
    project: "Bathroom refresh + handyman list",
    text: "I had a long list of small things other companies wouldn't touch — regrouting the shower, fixing two doors, patching drywall, new caulk everywhere. One crew handled all of it in two days. Fair price and genuinely nice people to have in the house.",
    rating: 5,
    when: "December 2025",
    source: "Google",
  },
  {
    name: "Mike R.",
    location: "Sammamish",
    project: "Porcelain floor tile",
    text: "Three rooms of wood-look porcelain over a crack membrane. The leveling work underneath took longer than expected and they told me upfront instead of tiling over a problem. That's the kind of honesty you want. Floors are flat, quiet, and beautiful.",
    rating: 5,
    when: "November 2025",
    source: "Google",
  },
  {
    name: "Jessica L.",
    location: "Woodinville",
    project: "Blue artisan backsplash",
    text: "The tile I chose was handmade and a little irregular — not every installer likes that. They dry-fitted the tricky sections, kept the variation looking intentional, and the result is the first thing guests comment on. Highly recommend for backsplash work.",
    rating: 5,
    when: "October 2025",
    source: "Google",
  },
  {
    name: "Tom H.",
    location: "Bothell",
    project: "Shower regrout & fixtures",
    text: "Thought I needed a whole new shower. They told me honestly that regrouting, fresh caulk, and new matte-black fixtures would get me 90% of the way there — and it did. Saved me thousands. I'll call them first for the real remodel when it's time.",
    rating: 5,
    when: "September 2025",
    source: "Google",
  },
];
