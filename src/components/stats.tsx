"use client";

import { useEffect, useRef, useState } from "react";

function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          const start = performance.now();
          const dur = 1600;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            setDisplay((value * easeOutExpo(p)).toFixed(decimals));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export type Stat = { value: number; suffix?: string; decimals?: number; label: string };

/** Animated stat band — numbers count up when scrolled into view. */
export default function Stats({ items, tone = "light" }: { items: Stat[]; tone?: "light" | "dark" }) {
  const border = tone === "dark" ? "border-paper/12" : "border-line";
  const label = tone === "dark" ? "text-paper/55" : "text-ink-500";
  const number = tone === "dark" ? "text-paper" : "text-ink-900";

  return (
    <dl className={`grid grid-cols-2 gap-px overflow-hidden rounded-3xl border ${border} bg-current/0 lg:grid-cols-4`}>
      {items.map((s) => (
        <div
          key={s.label}
          className={`flex flex-col gap-2 border ${border} px-6 py-7 ${tone === "dark" ? "bg-ink-900/40" : "bg-cream/60"}`}
        >
          <dd className={`font-display text-4xl font-medium tracking-tight md:text-5xl ${number}`}>
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
          </dd>
          <dt className={`text-xs leading-snug tracking-wide uppercase ${label}`}>{s.label}</dt>
        </div>
      ))}
    </dl>
  );
}
