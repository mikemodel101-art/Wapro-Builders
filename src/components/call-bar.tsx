import { ClipboardList, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Persistent mobile click-to-call bar. Hidden on md+ screens.
 * (Server component on purpose — tracking is handled globally by Analytics.)
 */
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="grid grid-cols-2 gap-px border-t border-line bg-line shadow-[0_-8px_30px_rgb(22_18_13/0.18)]">
        <a
          href={site.phoneHref}
          aria-label={`Call WA Pro Builders at ${site.phone}`}
          className="flex items-center justify-center gap-2 bg-clay-600 py-4 text-sm font-semibold text-paper active:bg-clay-700"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href="/contact"
          aria-label="Request a free estimate"
          className="flex items-center justify-center gap-2 bg-ink-950 py-4 text-sm font-semibold text-paper active:bg-ink-800"
        >
          <ClipboardList className="h-4 w-4" aria-hidden="true" />
          Free Estimate
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-ink-950" />
    </div>
  );
}
