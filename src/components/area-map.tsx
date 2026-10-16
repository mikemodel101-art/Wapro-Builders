import { serviceAreas, site } from "@/content/site";

/**
 * Stylized service-area map: concentric 10/20-mile rings around Redmond with
 * city pins. Decorative but geographically honest — each pin sits at roughly
 * its true bearing and distance (≈7.5px per mile, viewBox 0 0 480 330).
 */
export default function AreaMap({ tone = "light" }: { tone?: "light" | "dark" }) {
  const ink = tone === "dark" ? "#faf7f1" : "#1e1913";
  const faint = tone === "dark" ? "rgba(250,247,241,0.16)" : "rgba(64,55,44,0.18)";
  const clay = "#c4633a";

  return (
    <svg
      viewBox="0 0 480 330"
      role="img"
      aria-label={`Map of cities served within roughly ${site.radiusMiles} miles of Redmond, Washington, including Bellevue, Kirkland, Sammamish, Woodinville, Bothell, and Issaquah`}
      className="h-auto w-full"
    >
      {/* range rings */}
      <circle cx="300" cy="150" r="150" fill="none" stroke={faint} strokeWidth="1" strokeDasharray="3 5" />
      <circle cx="300" cy="150" r="75" fill="none" stroke={faint} strokeWidth="1" strokeDasharray="3 5" />
      <circle cx="300" cy="150" r="150" fill={clay} opacity="0.05" />

      {/* ring labels */}
      <text x="300" y="78" textAnchor="middle" fontSize="9" fill={ink} opacity="0.45" fontFamily="ui-monospace, monospace" letterSpacing="2">
        10 MI
      </text>
      <text x="300" y="6" textAnchor="middle" fontSize="9" fill={ink} opacity="0.45" fontFamily="ui-monospace, monospace" letterSpacing="2">
        20 MI
      </text>

      {/* city pins */}
      {serviceAreas.map((a) => (
        <g key={a.name}>
          {a.home ? (
            <>
              <circle cx={a.x} cy={a.y} r="14" fill={clay} opacity="0.18">
                <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.25;0.05;0.25" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx={a.x} cy={a.y} r="5.5" fill={clay} stroke="#faf7f1" strokeWidth="1.5" />
              <text
                x={a.x}
                y={a.y - 12}
                textAnchor="middle"
                fontSize="11.5"
                fontWeight="700"
                fill={ink}
                fontFamily="inherit"
              >
                {a.name}
              </text>
            </>
          ) : (
            <>
              <circle cx={a.x} cy={a.y} r="3.5" fill={ink} opacity="0.75" />
              <text
                x={a.x}
                y={a.y - 8}
                textAnchor="middle"
                fontSize="10"
                fill={ink}
                opacity="0.7"
                fontFamily="inherit"
              >
                {a.name}
              </text>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}
