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
| Photos                      | `public/images/`                              |
| Page text (headings, copy)  | `src/app/**/page.tsx`                         |

**Rule of thumb: text and photos live in `src/content/` and `public/images/`,
and nothing else ever needs to change.**

---

## 2. BEFORE LAUNCH — replace the placeholders

Search every file for `TODO(launch)` — there are exactly 4 things to replace:

1. **Phone number** — `src/content/site.ts` (change `phone` and `phoneHref`)
2. **Email** — `src/content/site.ts`
3. **WA contractor license number** — `src/content/site.ts` (`license`)
4. **Reviews** — `src/content/reviews.ts`. Paste real Google reviews verbatim
   (first name + last initial), then update the rating/count in
   `src/content/site.ts` under `site.rating` so the website, the structured
   data, and your Google Business Profile all match.

Also update the social profile URLs in `src/content/site.ts` (`social`) — these
feed the `sameAs` field in your LocalBusiness structured data.

Then set the env vars (see §5–7), deploy, and you're live.

---

## 3. Updating content yourself

### Add / replace a project photo
1. Export the photo as JPG, roughly 1600px on the long edge (any phone photo
   works — export via Lightroom/Photos or just use as-is).
2. Drop it into `public/images/` — e.g. `public/images/kirkland-shower.jpg`.
3. Open `src/content/projects.ts`, copy an existing entry, and edit:
   `slug` (one-time id), `title`, `category`, `location`, `year`,
   `image` ("/images/kirkland-shower.jpg"), `alt` (describe the photo),
   `blurb` (2 sentences), `tall` (true if portrait).
4. Set `featured: true` on up to 6 projects to pin them to the homepage.

The site automatically optimizes every image to responsive WebP/AVIF — no
manual compression needed.

### Update reviews
Edit entries in `src/content/reviews.ts`. Keep them genuine and verbatim from
Google — fake reviews violate Google's and Washington State's rules.

### Change business details / hours / service area
All in `src/content/site.ts`. The footer, contact page, homepage, sitemap,
robots.txt, and LocalBusiness schema all update automatically — this is what
keeps the site consistent with your Google Business Profile.

---

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
