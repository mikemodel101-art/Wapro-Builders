/**
 * Decorative herringbone line pattern (chevron rows) — absolutely positioned
 * to fill its parent. Color via text-* (currentColor); control opacity on
 * the parent. Purely ornamental.
 */
export default function Herringbone({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <pattern id="herringbone" width="56" height="28" patternUnits="userSpaceOnUse">
          <path
            d="M0 28 L28 0 L56 28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path
            d="M0 14 L14 0 L28 14 L42 0 L56 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.45"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#herringbone)" />
    </svg>
  );
}
