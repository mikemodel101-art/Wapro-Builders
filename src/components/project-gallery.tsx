"use client";

import { ChevronLeft, ChevronRight, MapPin, Plus, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { projectCategories, type Project } from "@/content/projects";

/**
 * Filterable masonry gallery with an accessible lightbox.
 * Data comes from src/content/projects.ts.
 */
export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((idx) =>
        idx === null ? null : (idx + dir + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  const active = lightbox !== null ? filtered[lightbox] : null;

  return (
    <div>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectCategories.map((cat) => {
          const activeChip = filter === cat;
          const count = cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setFilter(cat);
                setLightbox(null);
              }}
              aria-pressed={activeChip}
              className={`rounded-full border px-4.5 py-2.5 text-[13px] font-semibold transition-all ${
                activeChip
                  ? "border-ink-950 bg-ink-950 text-paper"
                  : "border-ink-900/15 text-ink-600 hover:border-ink-900/50 hover:text-ink-900"
              }`}
            >
              {cat}
              <span className={`ml-2 text-[11px] ${activeChip ? "text-clay-300" : "text-ink-400"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 gap-4 md:columns-3 md:gap-5">
        {filtered.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`Open ${p.title} project photo`}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-line text-left break-inside-avoid md:mb-5"
          >
            <span className={`relative block ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute top-3 right-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-paper/90 text-ink-900 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Plus className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[13px] font-semibold text-paper">{p.title}</span>
                <span className="mt-0.5 flex items-center gap-1 text-[11px] text-paper/70">
                  <MapPin className="h-3 w-3 text-clay-300" aria-hidden="true" />
                  {p.location} · {p.category}
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          className="fixed inset-0 z-[80] flex flex-col bg-ink-950/96 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — project photo`}
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-4 text-paper/80">
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase">
              {String((lightbox ?? 0) + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 transition-colors hover:bg-paper hover:text-ink-950"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className="relative mx-auto flex w-full max-w-5xl flex-1 items-center px-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[62vh] w-full overflow-hidden rounded-2xl md:h-[68vh]">
              <Image
                key={active.slug}
                src={active.image}
                alt={active.alt}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous project"
              className="absolute left-2 flex h-12 w-12 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur transition-colors hover:bg-clay-600 md:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next project"
              className="absolute right-2 flex h-12 w-12 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur transition-colors hover:bg-clay-600 md:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mx-auto w-full max-w-5xl px-5 pt-4 pb-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-clay-600 px-3 py-1 text-[11px] font-semibold text-paper">
                {active.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-paper/60">
                <MapPin className="h-3.5 w-3.5 text-clay-300" aria-hidden="true" />
                {active.location}, WA · {active.year}
              </span>
            </div>
            <h3 className="mt-2 font-display text-2xl font-medium text-paper">{active.title}</h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-paper/65">{active.blurb}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
