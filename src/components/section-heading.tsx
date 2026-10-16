import Reveal from "@/components/reveal";

/**
 * Editorial section header: mono eyebrow, large display title, optional intro.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  const eyebrowCls = tone === "dark" ? "text-clay-300" : "text-clay-600";
  const titleCls = tone === "dark" ? "text-paper" : "text-ink-900";
  const introCls = tone === "dark" ? "text-paper/65" : "text-ink-600";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      <p className={`font-mono text-[11px] font-medium tracking-[0.28em] uppercase ${eyebrowCls}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] font-medium tracking-[-0.015em] text-balance ${titleCls}`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {intro ? <p className={`max-w-xl text-base leading-relaxed md:text-lg ${introCls}`}>{intro}</p> : null}
    </Reveal>
  );
}
