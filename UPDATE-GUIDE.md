# WA Pro Builders LLC — Website Owner's Guide

Everything you need to update, measure, and maintain the site — written for a
busy owner, not a developer. ~10 minutes of reading. Keep this file.

---

## 1. The 60-second tour

| What                        | Where                                         |
| --------------------------- | --------------------------------------------- |
| Phone, email, hours, license| `src/content/site.ts`                         |
| Service-area cities         | `src/content/site.ts` (bottom)                |
| Gallery projects            | `src/content/projects.ts`                     |
| Customer reviews            | `src/content/reviews.ts`                      |
| Service descriptions        | `src/content/services.ts`                     |
| FAQs                        | `src/content/faqs.ts`                         |
| Photos                      | `src/assets/images/` (registry: `src/assets/images.ts`) |
| Share card (OG image)       | `public/images/og.jpg`                        |
| Page text (headings, copy)  | `src/app/**/page.tsx`                         |

**Rule of thumb: text lives in `src/content/`, photos in `src/assets/images/`,
and nothing else ever needs to change.**

### Where the current photos came from

All current photos are stock images from **Pexels** (pexels.com) — a free,
open stock-photo license allowing commercial use with no attribution
required. They are stand-ins: replace them with your real job photos as soon
as you have them (same filename = instant replacement). If you ever want more
stock, the equally free **Unsplash** (unsplash.com) library has the same kind
of license.

---

## 2. Business details — what's real and what's still placeholder

**Already wired with real GBP data** (phone, hours, 5.0 rating / 13 reviews,
owner Evgenii Chepachenko, and 11 verbatim Google reviews shown in the
animated sliding review rail on the homepage).

Search every file for `TODO(launch)` — the remaining placeholders are:

1. **Email** — `src/content/site.ts`
2. **WA contractor license number** — `src/content/site.ts` (`license`)
3. **Founding year, years of experience, project count** — `src/content/site.ts`
   (`established`, `yearsExperience`, `projectsCompleted`)
4. **Social / profile URLs** (Google Business Profile, Thumbtack, Facebook,
   Instagram, Yelp) — `src/content/site.ts` (`social`). These feed the
   `sameAs` field in your LocalBusiness structured data.
5. **Gallery photos** — currently licensed stock stand-ins. Replace with real
   job photos as described in §3 — same filename = instant replacement.

When new Google reviews come in, add them to `src/content/reviews.ts` and bump
`site.rating.count` so the site, structured data, and GBP always match.

Then set the env vars (see §5–7), deploy, and you're live.

---

## 3. Updating content yourself

### Add / replace a project photo
1. Export the photo as JPG, roughly 1600px on the long edge (any phone photo
   works — export via Lightroom/Photos or just use as-is).
2. Drop it into `src/assets/images/` — e.g. `src/assets/images/kirkland-shower.jpg`.
3. Run `node scripts/optimize-images.mjs` to compress it in place.
4. Register it in `src/assets/images.ts` (copy one import line + one key).
5. Open `src/content/projects.ts`, copy an existing entry, and edit:
   `slug` (one-time id), `title`, `category`, `location`, `year`,
   `image` (your new asset key, e.g. `assets.kirklandShower`), `alt`
   (describe the photo), `blurb` (2 sentences), `tall` (true if portrait).
6. Set `featured: true` on up to 6 projects to pin them to the homepage.

Because photos are imported through code, they are bundled and fingerprinted
by the build — they load on every host with zero extra setup.

### Update reviews
Edit entries in `src/content/reviews.ts`. Keep them genuine and verbatim from
Google — fake reviews violate Google's and Washington State's rules.

### Change business details / hours / service area
All in `src/content/site.ts`. The footer, contact page, homepage, sitemap,
robots.txt, and LocalBusiness schema all update automatically — this is what
keeps the site consistent with your Google Business Profile.

---

## 3.5 Deploying to Vercel (and why images can't go missing)

**How photos work on this site:** photos are real, pre-compressed JPGs in
`src/assets/images/` and are **imported through the code** (see
`src/assets/images.ts`). Because they're part of the module graph, the build
bundles and fingerprints them automatically — they can never be missing from
a deployment, on Vercel or anywhere else. Serving goes straight to static
files (`next.config.ts` sets `images.unoptimized: true`), so no server-side
image proxy is involved. The only file in `public/` is `og.jpg`, the social
share card, which needs a stable public URL for OG tags and schema.

**Correct Vercel deployment steps:**

1. Commit **everything** (`git add -A` — this includes deletions, so old
   stale files disappear) and push.
2. In Vercel: **Add New Project → Import → Framework: Next.js**
   (detection is also pinned in `vercel.json`).
3. Add the env vars from `.env` (Analytics ID, verification token, form
   webhook, `NEXT_PUBLIC_SITE_URL` = your real domain) in **Settings →
   Environment Variables**.
4. Deploy, then attach your domain (**Settings → Domains**) — HTTPS is
   automatic. Set the same domain in `NEXT_PUBLIC_SITE_URL` and redeploy so
   the sitemap, robots.txt, and schema point at the real URL.

**If anything misbehaves on Vercel**, check the deploy log (Project →
Deployments → select build) — it prints the exact failing step.

## 4. What the site already does for search & AI discovery

- Unique title + meta description per page, semantic headings, internal links
- `HomeAndConstructionBusiness` (LocalBusiness) JSON-LD built from
  `src/content/site.ts` — name, phone, hours, geo, 20-mile service radius,
  cities served, rating
- `Service`, `BreadcrumbList`, and `FAQPage` schema on the right pages
- `/sitemap.xml` — submit once in Search Console
- `/robots.txt` — explicitly allows **Googlebot, Bingbot, OAI-SearchBot,
  GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot** (verify after deploy at
  `yourdomain.com/robots.txt`)
- Crawlable plain-text service and city lists (no text hidden in images)
- Fast pages: images optimized (AVIF/WebP), fonts self-hosted by Next.js

## 5. Google Search Console (5 minutes)

1. Go to <https://search.google.com/search-console> with your Google account.
2. Add property → **URL prefix** → enter your domain.
3. Choose "HTML tag" verification, copy only the long token from the
   `content="…"` attribute.
4. Add to your hosting env vars: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>`
5. Redeploy, click **Verify**, then **Sitemaps → add `sitemap.xml`**.

## 6. Google Analytics 4 + lead tracking (10 minutes)

1. <https://analytics.google.com> → Admin → Create property (account name:
   "WA Pro Builders" — **this is your account, you own the data**).
2. Create a Web data stream with your domain; copy the Measurement ID
   (`G-XXXXXXX`).
3. Add env var `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX` → redeploy.

Already wired events (no extra setup):
- `generate_lead` — estimate form successfully submitted
- `click_to_call` — every tap on a phone link (mobile.call bar, header, footer)
- `click_to_email` — every tap on an email link

In GA4 → Admin → Events, mark `generate_lead` and `click_to_call` as
**Key events** to see them as conversions.

## 7. Estimate form delivery

The form validates and spam-checks everything server-side. To receive
submissions in your inbox, create a form endpoint on a service you own —
[Formspree](https://formspree.io), [Basin](https://usebasin.com), or a
Zapier/Make webhook — then set `ESTIMATE_WEBHOOK_URL` to that endpoint and
redeploy. Photos are forwarded with the request. Test after enabling: submit
one real form, confirm the email arrives, then check GA4's Realtime view for
the `generate_lead` event.

Spam protection included out of the box: honeypot field, submission time
trap, per-IP rate limiting (5/hour), and strict server validation — no CAPTCHA
friction for real customers.

## 8. Accounts & ownership checklist

You should personally own (with admin access): domain registrar, hosting,
Google Business Profile, Google Analytics, Google Search Console, and the form
endpoint service. Keep them all under one Google account you control. Never
share the login — grant users/developers "Manager" access instead.

## 9. Agreement terms (what's included)

- **Revisions:** two rounds of copy/photo/layout feedback included.
- **Defects:** anything broken in the agreed scope is fixed free for 14 days
  after launch (content changes and new features aren't defects).
- **SEO:** sound technical implementation is included; rankings and lead
  volume depend on reviews, photos, and the market — nobody can honestly
  guarantee them. What guarantees results over time: add real photos after
  every job and ask every happy customer for a Google review.

---

*Questions about this file? It was written to be self-serve — start with the
table in §1.*
