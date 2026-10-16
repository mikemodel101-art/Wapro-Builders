/**
 * WA Pro Builders mark — a 2×2 tile grid with one rotated "set" tile.
 * Pure SVG, scales cleanly from favicon to footer.
 */
export default function TileMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.28" />
      <rect x="26" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.28" />
      <rect x="2" y="26" width="20" height="20" rx="3" fill="currentColor" opacity="0.28" />
      <rect
        x="26"
        y="26"
        width="20"
        height="20"
        rx="3"
        fill="currentColor"
        transform="rotate(45 36 36)"
      />
    </svg>
  );
}
