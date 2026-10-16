import { Quote, Star } from "lucide-react";
import Reveal from "@/components/reveal";
import { reviews } from "@/content/reviews";
import { site } from "@/content/site";

function Stars({ rating, className = "h-4 w-4" }: { rating: number; className?: string }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < rating ? "fill-clay-500 text-clay-500" : "fill-line text-line"}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

/** Review cards. Content lives in src/content/reviews.ts. */
export default function ReviewGrid({ limit }: { limit?: number }) {
  const shown = typeof limit === "number" ? reviews.slice(0, limit) : reviews;

  return (
    <div>
      <Reveal className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <p className="flex items-center gap-3">
          <span className="font-display text-5xl leading-none font-medium text-ink-900">
            {site.rating.value}
          </span>
          <span>
            <Stars rating={5} />
            <span className="mt-1 block text-xs text-ink-500">
              Based on {site.rating.count} Google reviews
            </span>
          </span>
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((r, i) => (
          <Reveal key={r.name} delay={(i % 3) * 100}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-white/60 p-7 shadow-[0_1px_0_rgb(22_18_13/0.04)] transition-shadow hover:shadow-card">
              <Quote className="h-6 w-6 text-clay-400" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{r.name}</p>
                    <p className="mt-0.5 text-xs text-ink-500">
                      {r.project} · {r.location}, WA
                    </p>
                  </div>
                  <Stars rating={r.rating} className="h-3.5 w-3.5" />
                </div>
                <p className="mt-3 font-mono text-[10px] tracking-[0.18em] text-ink-400 uppercase">
                  {r.source} review · {r.when}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
