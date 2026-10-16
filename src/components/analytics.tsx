"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackEvent } from "@/lib/track";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * GA4 + lead-event tracking.
 *
 * Setup: create a free GA4 property at analytics.google.com (your own Google
 * account = you own the data), copy the Measurement ID (G-XXXXXXX), and add
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX
 * to .env / hosting env vars. Until then this component loads no scripts.
 *
 * Tracked conversions:
 *  - click_to_call   (any tap on a tel: link)
 *  - click_to_email  (any tap on a mailto: link)
 *  - generate_lead   (estimate form success — fired by EstimateForm)
 */
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a");
      const href = anchor?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackEvent("click_to_call", {
          event_category: "engagement",
          event_label: href.replace("tel:", ""),
        });
      } else if (href.startsWith("mailto:")) {
        trackEvent("click_to_email", {
          event_category: "engagement",
          event_label: href.replace("mailto:", ""),
        });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}
      </Script>
    </>
  );
}
