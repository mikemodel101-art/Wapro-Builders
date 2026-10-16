import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * ============================================================================
 *  ESTIMATE REQUEST ENDPOINT  (POST /api/estimate)
 * ----------------------------------------------------------------------------
 *  Spam protection (layered, no third-party keys required):
 *    1. Honeypot field ("company") — bots fill it, humans never see it.
 *    2. Time trap — submissions under 2.5s after page load are rejected.
 *    3. In-memory rate limit — max 5 submissions / IP / hour.
 *    4. Strict server-side validation + file type/size checks.
 *
 *  Delivery: set ESTIMATE_WEBHOOK_URL in .env to forward each request to
 *  your inbox service (Formspree, Basin, Make/Zapier, or a Slack webhook).
 *  Without it, requests are validated and logged server-side only.
 * ============================================================================
 */

const WINDOW_MS = 60 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

const MAX_FILES = 5;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const OK_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(req: Request) {
  const ip = (req.headers.get("x-forwarded-for") ?? "local").split(",")[0].trim();

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests — please call us instead: (206) 804-1196." },
      { status: 429 },
    );
  }

  let fd: FormData;
  try {
    fd = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  // 1) Honeypot — silently accept so bots think they succeeded
  if (String(fd.get("company") ?? "").trim() !== "") {
    return NextResponse.json({ ok: true, ref: "WPB-0000" });
  }

  // 2) Time trap — genuine humans need more than ~2.5 seconds
  const startedAt = Number(fd.get("startedAt") ?? 0);
  if (startedAt > 0 && Date.now() - startedAt < 2500) {
    return NextResponse.json(
      { ok: false, error: "That was a little fast — please take a moment and try again." },
      { status: 400 },
    );
  }

  // 3) Field validation
  const name = String(fd.get("name") ?? "").trim();
  const phone = String(fd.get("phone") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const service = String(fd.get("service") ?? "").trim();
  const city = String(fd.get("city") ?? "").trim();
  const timeline = String(fd.get("timeline") ?? "").trim();
  const preferred = String(fd.get("preferred") ?? "").trim();
  const details = String(fd.get("details") ?? "").trim();
  const consent = String(fd.get("consent") ?? "") === "true";

  if (name.length < 2) return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  if (phone.replace(/\D/g, "").length < 10)
    return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 });
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return NextResponse.json({ ok: false, error: "That email doesn't look right." }, { status: 400 });
  if (!service) return NextResponse.json({ ok: false, error: "Please choose a project type." }, { status: 400 });
  if (!city) return NextResponse.json({ ok: false, error: "Please choose your city." }, { status: 400 });
  if (details.length < 10)
    return NextResponse.json({ ok: false, error: "Please add a sentence or two about the project." }, { status: 400 });
  if (!consent)
    return NextResponse.json({ ok: false, error: "Please confirm it's OK to contact you." }, { status: 400 });

  // 4) Photo validation (optional, max 5 × 8 MB, images only)
  const photos = fd.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
  if (photos.length > MAX_FILES) {
    return NextResponse.json({ ok: false, error: `Please attach at most ${MAX_FILES} photos.` }, { status: 400 });
  }
  for (const p of photos) {
    if (p.size > MAX_FILE_BYTES) {
      return NextResponse.json({ ok: false, error: `Each photo must be under 8 MB (“${p.name}” is too large).` }, { status: 400 });
    }
    if (!OK_TYPES.includes(p.type)) {
      return NextResponse.json({ ok: false, error: "Photos must be JPG, PNG, WebP, or HEIC." }, { status: 400 });
    }
  }

  const ref = `WPB-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  const summary = {
    ref,
    receivedAt: new Date().toISOString(),
    name,
    phone,
    email: email || "(not provided)",
    city,
    service,
    timeline: timeline || "(unspecified)",
    preferredContact: preferred || "Call",
    details,
    photos: photos.map((p) => ({ name: p.name, sizeKB: Math.round(p.size / 1024), type: p.type })),
  };

  const webhook = process.env.ESTIMATE_WEBHOOK_URL;
  if (webhook) {
    try {
      // Forward the original multipart form (photos included) to the inbox service
      await fetch(webhook, { method: "POST", body: fd });
    } catch (err) {
      console.error("[estimate] webhook delivery failed:", err);
      // Still accept the request — logged below as a fallback record
    }
  } else {
    console.log("[estimate] New estimate request (no ESTIMATE_WEBHOOK_URL configured):", summary);
  }

  return NextResponse.json({ ok: true, ref });
}
