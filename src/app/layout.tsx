import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import Analytics from "@/components/analytics";
import CallBar from "@/components/call-bar";
import JsonLd from "@/components/json-ld";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { site } from "@/content/site";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "WA Pro Builders LLC — licensed, bonded & insured bathroom remodeling and home improvement in Redmond, WA. Full bathroom renovations, custom tile showers, tile & LVP flooring, vanities & fixtures, and handyman repairs. 5.0-rated on Google. Serving Bellevue, Kirkland & the Eastside. Call (206) 804-1196.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "WA Pro Builders LLC | Bathroom Remodeling & Home Improvement — Redmond, WA",
    template: "%s | WA Pro Builders LLC",
  },
  description,
  keywords: [
    "bathroom remodel Redmond WA",
    "custom tile shower Redmond",
    "bathroom renovation Bellevue",
    "tile installation Kirkland",
    "LVP flooring Redmond WA",
    "handyman Redmond WA",
    "WA Pro Builders",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "WA Pro Builders LLC | Bathroom Remodeling — Redmond, WA",
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Remodeled Eastside kitchen and bath work by WA Pro Builders LLC of Redmond, WA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WA Pro Builders LLC | Bathroom Remodeling — Redmond, WA",
    description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  /** Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in .env to verify Search Console */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "Home improvement",
};

export const viewport: Viewport = {
  themeColor: "#faf7f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink-900 antialiased" id="top">
        {/* Skip link for keyboard + screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink-950 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <CallBar />
        <Analytics />

        {/* LocalBusiness + WebSite structured data (values from src/content/site.ts) */}
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
