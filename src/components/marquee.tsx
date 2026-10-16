/**
 * Infinite marquee strip. Content is duplicated exactly 2× and the track
 * translates -50%, so the loop is seamless. Second copy is aria-hidden.
 */
export default function Marquee({
  items,
  className = "",
  itemClassName = "",
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className={`flex items-center gap-6 pr-6 md:gap-10 md:pr-10 ${itemClassName}`}>
          <span className="whitespace-nowrap">{item}</span>
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 shrink-0 opacity-60" aria-hidden="true">
            <rect x="2" y="2" width="8" height="8" transform="rotate(45 6 6)" fill="currentColor" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee-hover overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
