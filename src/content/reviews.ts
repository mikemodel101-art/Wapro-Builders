/**
 * ============================================================================
 *  CUSTOMER REVIEWS — real, verified Google reviews for WA Pro Builders LLC
 * ----------------------------------------------------------------------------
 *  These are the actual reviews from the Google Business Profile (5.0, 13
 *  reviews; two of the 13 are star-only ratings with no text, so 11 cards
 *  are displayed). Names appear exactly as on Google — do not edit wording.
 *
 *  To add a new review: copy an entry, paste the review text verbatim, and
 *  bump `site.rating.count` in src/content/site.ts to stay in sync with GBP.
 * ============================================================================
 */

export type Review = {
  /** Reviewer's display name exactly as shown on Google */
  name: string;
  text: string;
  rating: number; // 1–5
  /** Optional job-type tag rendered as a small chip */
  meta?: string;
  /** Relative date as shown on Google */
  when: string;
  source: "Google";
};

export const reviews: Review[] = [
  {
    name: "Salvatore Cirillo",
    text: "I can't speak highly enough about the quality of work and professionalism. The thoughtful approach, consultation, and collaboration was integral to the finished product. Evgenii and his wife are so kind. We would highly recommend them and will use them again for any of our tile needs.",
    rating: 5,
    meta: "Tile work",
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Ihor Kolomiiets",
    text: "Our friends recommended WA Pro Builders to us, and we're really glad they did. Yevgen remodeled our bathroom and did a great job. He was professional, easy to work with, and kept everything clean during the project.",
    rating: 5,
    meta: "Bathroom remodel",
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Daniil Matiukhin",
    text: "Great experience with WA Pro Builders. They were professional, showed up on time, and did quality work. Everything was completed cleanly and exactly as discussed. Fair pricing and good communication throughout the project. Would definitely recommend them.",
    rating: 5,
    when: "A week ago",
    source: "Google",
  },
  {
    name: "Влад Kwi",
    text: "A huge thank you to Evgeniy and his team for the excellent work! We are extremely happy with the results and very impressed with the quality of their work. Everything was done professionally and with great attention to detail. We truly appreciate all their hard work and would definitely recommend Evgeniy and his team!",
    rating: 5,
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Timothy M",
    text: "Great experience with WA Pro Builders! Professional, reliable, and easy to work with. The work was completed on time and with great attention to detail. Highly recommend!",
    rating: 5,
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Павел Иванюк",
    text: "I had a great experience working with this company. They were professional, reliable, and did an excellent job. The quality of their work was impressive, especially the tile and construction work.",
    rating: 5,
    meta: "Tile & construction",
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Alyona Pivovarova",
    text: "They're always very clean and responsible with their work. They're always on time, honest, and their prices are reasonable.",
    rating: 5,
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Andrey Khlunov",
    text: "Very satisfied with a professional execution, strong customer service and communication, attention to details and punctuality. Highly recommend.",
    rating: 5,
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Igor Filipov",
    text: "Great guys! It's always a pleasure dealing with people who truly know what they're doing. Professional, friendly, and easy to work with. Highly recommend!",
    rating: 5,
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Sergey Klymok",
    text: "Very honest and reliable. Definitely would do business together again.",
    rating: 5,
    when: "2 weeks ago",
    source: "Google",
  },
  {
    name: "Ostap Bender",
    text: "Thanks so much, very professional work. Very recommended. Thanks again.",
    rating: 5,
    when: "2 weeks ago",
    source: "Google",
  },
];
