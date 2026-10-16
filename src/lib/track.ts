/**
 * Thin wrapper around gtag() for GA4 custom events.
 * Safe to call anywhere on the client — no-ops when GA is not configured.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
