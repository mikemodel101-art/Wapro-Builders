/**
 * ============================================================================
 *  FAQs — rendered on the service pages AND emitted as FAQPage structured
 *  data for search engines. Keep answers factual and genuinely helpful.
 * ============================================================================
 */

export type Faq = { q: string; a: string };

export const tileFaqs: Faq[] = [
  {
    q: "How much does a kitchen backsplash cost in the Redmond area?",
    a: "Most standard kitchen backsplashes in our area run between $900 and $2,800 installed, depending on tile choice, square footage, and outlet or pattern complexity. Handmade or large-format tile, full-height walls, and herringbone layouts sit toward the top of that range. Every project starts with a free on-site visit and a fixed, written estimate — so you know the number before we start.",
  },
  {
    q: "How long does a typical shower tile installation take?",
    a: "A straightforward tub-surround re-tile usually takes 3 to 4 working days. A full walk-in shower with waterproofing, pan tile, niches, and glass-ready openings typically takes 5 to 8 working days, plus 24 hours of cure time before first use. We give you a day-by-day schedule before work begins.",
  },
  {
    q: "Do you supply the tile, or do I buy it myself?",
    a: "Either works. Many homeowners buy their own tile — we're happy to check quantities and add the industry-standard 10–15% overage before you order. We can also source porcelain, ceramic, and natural stone through local distributors and pass along contractor pricing where available.",
  },
  {
    q: "Is waterproofing really included behind every shower?",
    a: "Yes — always. Wet-area installs get a full waterproofing or vapor-management system (membrane or backer with integrated waterproofing) before a single tile is set. It's the part you never see, and the reason our showers don't leak. We photograph the waterproofing stage so you have a record.",
  },
  {
    q: "Can you match my existing tile for a repair?",
    a: "Often, yes — many popular lines stay in production for years. When an exact match isn't available, we'll show you the closest current options, or design a deliberate contrast (a band or niche in a complementary tile) that looks intentional. We always bring physical samples before deciding.",
  },
  {
    q: "Are you licensed and insured to work in my home?",
    a: "Yes. WA Pro Builders LLC is a licensed, bonded, and insured general contractor in Washington State, carrying general liability and workers' compensation coverage. We're glad to provide certificates with your estimate — and you can verify our registration on the WA Labor & Industries website.",
  },
];

export const bathroomFaqs: Faq[] = [
  {
    q: "Can you convert my bathtub into a walk-in shower?",
    a: "Yes — tub-to-shower conversions are one of our most common projects. We handle demolition, drain and valve adjustments, waterproofing, pan and wall tile, and glass-ready openings. Most conversions finish in about a week of on-site work, and we can add curbless entries and grab bars for accessibility.",
  },
  {
    q: "Do I need a full remodel, or can you just refresh my bathroom?",
    a: "Many bathrooms don't need a gut job. Regrouting, fresh caulk, a new vanity and faucet, updated lighting, and paint can transform the room for a fraction of a remodel's cost. We'll tell you honestly which camp your bathroom falls into — the refresh is often the smarter spend.",
  },
  {
    q: "What counts as a handyman visit — is there a minimum?",
    a: "Our handyman service is built for punch lists: drywall patches, door and trim repairs, caulking, fixture swaps, shelving, and mounting. There's a half-day minimum, and most homeowners bundle several small jobs into one visit to get the best value. If it's not a fit, we'll tell you on the phone before you spend anything.",
  },
  {
    q: "Can you install heated floors in an existing bathroom?",
    a: "In most cases, yes. Electric radiant mats are installed over the existing subfloor when we replace the tile, adding very little floor height. We install and test the system and set the thermostat before grouting, so everything is verified working before the floor is finished.",
  },
  {
    q: "How disruptive is a bathroom project to daily life?",
    a: "We contain dust with zip walls and floor protection, keep the water shut off only during active plumbing work (usually a few hours), and clean the space daily. For single-bathroom homes we plan the schedule so you always have a working toilet by end of day whenever possible.",
  },
  {
    q: "Which cities do you serve for bathroom and handyman work?",
    a: "We're based in Redmond and serve homes within roughly 20 miles — including Bellevue, Kirkland, Sammamish, Woodinville, Bothell, Issaquah, Duvall, Carnation, Renton, Mercer Island, Kenmore, and Fall City. Not sure if you're in range? Call (206) 804-1196 and we'll tell you right away.",
  },
];
