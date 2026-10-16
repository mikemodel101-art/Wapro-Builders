import { BadgeCheck, Star } from "lucide-react";
import { reviews, type Review } from "@/content/reviews";

/**
 * ============================================================================
 *  REVIEW RAIL — continuously sliding review cards ("moving rail").
 * ----------------------------------------------------------------------------
 *  Two rows glide in opposite directions on pure CSS animations and pause on
 *  hover. The content is duplicated exactly 2× and the track translates -50%,
 *  so the loop is seamless. Edge fades are done with a mask (.rail-mask).
 *
 *  Review data lives in src/content/reviews.ts — add a review there and it
 *  joins the rail automatically.
 * ============================================================================
 */

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-clay-500 text-clay-500" aria-hidden="true" />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-line bg-white/70 p-6 shadow-[0_1px_0_rgb(22_18_13/0.04)] transition-shadow hover:shadow-card md:w-[380px] md:p-7">
      <div className="flex items-center justify-between gap-3">
        <Stars />
        {review.meta ? (
          <span className="rounded-full bg-clay-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-clay-700 uppercase">
            {review.meta}
          </span>
        ) : null}
      </div>
      <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-ink-700">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <div>
          <p className="text-[13px] font-semibold text-ink-900">{review.name}</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-ink-400">
            <BadgeCheck className="h-3.5 w-3.5 text-moss-600" aria-hidden="true" />
            {review.source} review · {review.when}
          </p>
        </div>
        {/* Google "G" mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 opacity-70" aria-hidden="true">
          <path fill="#4285F4" d="M23.5 12.3c0-.9-.1-1.5-.3-2.2H12v4.1h6.5c-.1 1.1-.8 2.7-2.4 3.8l-.02.15 3.5 2.7.24.02c2.2-2 3.5-5 3.5-8.5z" />
          <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.8-2.9c-1 .7-2.4 1.2-4.1 1.2-3.1 0-5.8-2.1-6.8-5l-.14.01-3.1 2.4-.04.13C3.8 21.3 7.6 24 12 24z" />
          <path fill="#FBBC05" d="M5.2 14.4c-.24-.7-.4-1.5-.4-2.4s.14-1.7.38-2.4l-.01-.16-3.14-2.4-.1.05C1.1 8.8.5 10.3.5 12s.6 3.2 1.43 4.9l3.27-2.5z" />
          <path fill="#EA4335" d="M12 4.6c2.2 0 3.7 1 4.6 1.8l3.35-3.3C17.9 1.2 15.2 0 12 0 7.6 0 3.8 2.7 1.93 7.1l3.24 2.5c1-2.9 3.7-5 6.83-5z" />
        </svg>
      </figcaption>
    </figure>
  );
}

function Rail({ items, reverse = false }: { items: Review[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="rail-mask marquee-hover overflow-hidden" dir="ltr">
      <div
        className="animate-marquee flex w-max items-start gap-5 pr-5"
        style={{
          animationDuration: reverse ? "88s" : "72s",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((r, i) => (
          <div key={`${r.name}-${i}`} aria-hidden={i >= items.length}>
            <ReviewCard review={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ReviewRail() {
  const midpoint = Math.ceil(reviews.length / 2);
  return (
    <div className="space-y-5" aria-label="Customer reviews — continuously scrolling">
      <Rail items={reviews.slice(0, midpoint)} />
      <Rail items={reviews.slice(midpoint)} reverse />
    </div>
  );
}
