"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import type { Faq } from "@/content/faqs";

/**
 * Accessible FAQ accordion. One item open at a time.
 */
export default function FaqAccordion({ faqs, tone = "light" }: { faqs: Faq[]; tone?: "light" | "dark" }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const border = tone === "dark" ? "border-paper/12" : "border-line";
  const qColor = tone === "dark" ? "text-paper" : "text-ink-900";
  const aColor = tone === "dark" ? "text-paper/65" : "text-ink-600";

  return (
    <div className={`divide-y ${border} divide-y border-y`}>
      {faqs.map((faq, i) => {
        const open = openIdx === i;
        return (
          <div key={faq.q} className={`${i === 0 ? "" : ""}`}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIdx(open ? null : i)}
                aria-expanded={open}
                aria-controls={`faq-panel-${i}`}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={`text-base font-semibold md:text-lg ${qColor}`}>{faq.q}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    open
                      ? "rotate-45 border-clay-600 bg-clay-600 text-paper"
                      : tone === "dark"
                        ? "border-paper/20 text-paper/70 group-hover:border-clay-400 group-hover:text-clay-300"
                        : "border-ink-900/15 text-ink-600 group-hover:border-clay-600 group-hover:text-clay-600"
                  }`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className={`max-w-3xl pb-7 text-[15px] leading-relaxed ${aColor}`}>{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
