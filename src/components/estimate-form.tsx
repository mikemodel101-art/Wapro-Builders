"use client";

import {
  CheckCircle2,
  ImagePlus,
  Loader2,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { site } from "@/content/site";
import { trackEvent } from "@/lib/track";

const SERVICE_OPTIONS = [
  "Full bathroom remodel",
  "Custom tile shower",
  "Kitchen backsplash",
  "Floor tile or LVP flooring",
  "Handyman / small repairs",
  "Something else",
];

const CITY_OPTIONS = [
  "Redmond",
  "Bellevue",
  "Kirkland",
  "Sammamish",
  "Woodinville",
  "Bothell",
  "Issaquah",
  "Other — nearby",
];

const MAX_FILES = 5;
const MAX_MB = 8;
const OK_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

type Status = "idle" | "sending" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 transition-colors focus:border-clay-600 focus:outline-none focus:ring-2 focus:ring-clay-600/20";
const labelCls = "mb-2 block font-mono text-[11px] font-medium tracking-[0.18em] text-ink-500 uppercase";

export default function EstimateForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    city: "",
    timeline: "",
    preferred: "Call",
    details: "",
    company: "", // honeypot — humans never see or fill this
    consent: false,
  });
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [refId, setRefId] = useState("");
  const [serverMsg, setServerMsg] = useState("");
  const startedAt = useRef(0);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  // Photo previews
  const previews = useMemo(
    () =>
      files.map((f) => ({
        name: f.name,
        url: f.type.startsWith("image/hei") ? "" : URL.createObjectURL(f),
      })),
    [files],
  );
  useEffect(
    () => () => previews.forEach((p) => p.url && URL.revokeObjectURL(p.url)),
    [previews],
  );

  useEffect(() => {
    if (status === "success") successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

  const set = (k: keyof typeof values, v: string | boolean) =>
    setValues((prev) => ({ ...prev, [k]: v }));

  function addFiles(list: FileList | null) {
    if (!list) return;
    const next = [...files];
    for (const f of Array.from(list)) {
      if (next.length >= MAX_FILES) break;
      if (!OK_TYPES.includes(f.type)) {
        setErrors((e) => ({ ...e, photos: "Photos must be JPG, PNG, WebP, or HEIC." }));
        continue;
      }
      if (f.size > MAX_MB * 1024 * 1024) {
        setErrors((e) => ({ ...e, photos: `Each photo must be under ${MAX_MB} MB.` }));
        continue;
      }
      if (next.some((n) => n.name === f.name && n.size === f.size)) continue;
      next.push(f);
    }
    setFiles(next);
    setErrors((e) => ({ ...e, photos: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (values.name.trim().length < 2) e.name = "Please enter your name.";
    if (values.phone.replace(/\D/g, "").length < 10) e.phone = "Please enter a valid phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = "That email doesn't look right.";
    if (!values.service) e.service = "What type of project is it?";
    if (!values.city) e.city = "Which city are you in?";
    if (values.details.trim().length < 10)
      e.details = "Tell us a little about the project (a sentence or two is plenty).";
    if (!values.consent) e.consent = "Please confirm it's OK to contact you.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (status === "sending") return;
    if (!validate()) return;

    setStatus("sending");
    setServerMsg("");

    const fd = new FormData();
    Object.entries(values).forEach(([k, v]) => fd.append(k, String(v)));
    fd.append("startedAt", String(startedAt.current));
    files.forEach((f) => fd.append("photos", f));

    try {
      const res = await fetch("/api/estimate", { method: "POST", body: fd });
      const data = (await res.json()) as { ok: boolean; ref?: string; error?: string };
      if (res.ok && data.ok) {
        setRefId(data.ref ?? "");
        setStatus("success");
        trackEvent("generate_lead", {
          event_category: "lead",
          event_label: values.service,
          city: values.city,
        });
      } else {
        setServerMsg(data.error ?? "Something went wrong — please call us instead.");
        setStatus("error");
      }
    } catch {
      setServerMsg("Couldn't reach the server — please call us instead.");
      setStatus("error");
    }
  }

  /* ---------------------------------------------------------- success --- */
  if (status === "success") {
    return (
      <div
        ref={successRef}
        className="rounded-3xl border border-moss-600/25 bg-moss-100 p-8 md:p-12"
        role="status"
      >
        <CheckCircle2 className="h-12 w-12 text-moss-600" aria-hidden="true" />
        <h2 className="mt-5 font-display text-3xl font-medium text-ink-900 md:text-4xl">
          Request received — thank you, {values.name.split(" ")[0]}.
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-ink-600">
          Your estimate request is in. We review every request personally and typically respond{" "}
          <strong className="text-ink-900">within one business day</strong> — usually by{" "}
          {values.preferred.toLowerCase()}. If it&rsquo;s urgent, don&rsquo;t wait: give us a call.
        </p>
        <p className="mt-6 inline-block rounded-full border border-ink-900/10 bg-white px-4 py-2 font-mono text-xs tracking-[0.15em] text-ink-600">
          REFERENCE: {refId}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-clay-600"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {site.phone}
          </a>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-ink-900/20 px-6 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950 hover:text-paper"
          >
            Browse Recent Projects
          </Link>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------- form --- */
  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-cream/70 p-6 shadow-card md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="ef-name" className={labelCls}>
            Full name *
          </label>
          <input
            id="ef-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputCls}
            placeholder="Jordan Smith"
            aria-invalid={!!errors.name}
          />
          {errors.name ? <p className="mt-1.5 text-xs text-red-700">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="ef-phone" className={labelCls}>
            Phone *
          </label>
          <input
            id="ef-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputCls}
            placeholder="(425) 555-0123"
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? <p className="mt-1.5 text-xs text-red-700">{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="ef-email" className={labelCls}>
            Email <span className="normal-case text-ink-400">(optional)</span>
          </label>
          <input
            id="ef-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputCls}
            placeholder="you@email.com"
            aria-invalid={!!errors.email}
          />
          {errors.email ? <p className="mt-1.5 text-xs text-red-700">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="ef-city" className={labelCls}>
            City *
          </label>
          <select
            id="ef-city"
            name="city"
            value={values.city}
            onChange={(e) => set("city", e.target.value)}
            className={`${inputCls} ${values.city ? "" : "text-ink-400"}`}
            aria-invalid={!!errors.city}
          >
            <option value="" disabled>
              Select your city
            </option>
            {CITY_OPTIONS.map((c) => (
              <option key={c} value={c} className="text-ink-900">
                {c}
              </option>
            ))}
          </select>
          {errors.city ? <p className="mt-1.5 text-xs text-red-700">{errors.city}</p> : null}
        </div>

        <div>
          <label htmlFor="ef-service" className={labelCls}>
            Project type *
          </label>
          <select
            id="ef-service"
            name="service"
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
            className={`${inputCls} ${values.service ? "" : "text-ink-400"}`}
            aria-invalid={!!errors.service}
          >
            <option value="" disabled>
              What can we help with?
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s} className="text-ink-900">
                {s}
              </option>
            ))}
          </select>
          {errors.service ? <p className="mt-1.5 text-xs text-red-700">{errors.service}</p> : null}
        </div>

        <div>
          <label htmlFor="ef-timeline" className={labelCls}>
            Timeline
          </label>
          <select
            id="ef-timeline"
            name="timeline"
            value={values.timeline}
            onChange={(e) => set("timeline", e.target.value)}
            className={`${inputCls} ${values.timeline ? "" : "text-ink-400"}`}
          >
            <option value="" disabled>
              When are you hoping to start?
            </option>
            {["As soon as possible", "Within 1 month", "1–3 months", "Just researching"].map((t) => (
              <option key={t} value={t} className="text-ink-900">
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="ef-details" className={labelCls}>
            Project details *
          </label>
          <textarea
            id="ef-details"
            name="details"
            rows={5}
            value={values.details}
            onChange={(e) => set("details", e.target.value)}
            className={`${inputCls} resize-y`}
            placeholder="Example: We want to re-tile our master shower (about 3×5 ft), add a niche, and replace the floor tile. House was built in 1998 — current shower has some grout cracking."
            aria-invalid={!!errors.details}
          />
          {errors.details ? <p className="mt-1.5 text-xs text-red-700">{errors.details}</p> : null}
        </div>

        {/* Photos */}
        <div className="sm:col-span-2">
          <span className={labelCls}>
            Photos <span className="normal-case text-ink-400">(optional — up to {MAX_FILES})</span>
          </span>
          <label
            htmlFor="ef-photos"
            className="flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-line bg-white/70 px-6 py-8 text-center transition-colors hover:border-clay-500 hover:bg-clay-50"
          >
            <ImagePlus className="h-7 w-7 text-clay-500" aria-hidden="true" />
            <span className="text-sm font-medium text-ink-800">
              Add photos of the space
            </span>
            <span className="text-xs text-ink-500">
              JPG, PNG, WebP or HEIC · max {MAX_MB} MB each · they help us price accurately
            </span>
          </label>
          <input
            id="ef-photos"
            name="photos"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic"
            multiple
            className="sr-only"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
          />
          {errors.photos ? <p className="mt-2 text-xs text-red-700">{errors.photos}</p> : null}

          {files.length > 0 ? (
            <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {previews.map((p, i) => (
                <li key={`${p.name}-${i}`} className="group relative">
                  <span className="relative block aspect-square overflow-hidden rounded-xl border border-line bg-linen">
                    {p.url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.url} alt={`Selected photo ${i + 1}: ${p.name}`} className="h-full w-full object-cover" />
                    ) : (
                      <span className="flex h-full items-center justify-center p-2 text-center font-mono text-[9px] text-ink-500">
                        {p.name}
                      </span>
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                    aria-label={`Remove photo ${p.name}`}
                    className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink-950 text-paper shadow transition-colors hover:bg-clay-600"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Preferred contact */}
        <fieldset className="sm:col-span-2">
          <legend className={labelCls}>Best way to reach you</legend>
          <div className="flex flex-wrap gap-2">
            {["Call", "Text", "Email"].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => set("preferred", opt)}
                aria-pressed={values.preferred === opt}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                  values.preferred === opt
                    ? "border-ink-950 bg-ink-950 text-paper"
                    : "border-ink-900/15 bg-white text-ink-600 hover:border-ink-900/50"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Consent */}
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-700">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={(e) => set("consent", e.target.checked)}
              className="mt-0.5 h-5 w-5 rounded border-line text-clay-600 accent-clay-600"
            />
            <span>
              It&rsquo;s OK for WA Pro Builders to call, text, or email me about my project. *
              <span className="mt-0.5 block text-xs text-ink-400">
                We never share your information. No marketing spam — ever.
              </span>
            </span>
          </label>
          {errors.consent ? <p className="mt-1.5 text-xs text-red-700">{errors.consent}</p> : null}
        </div>

        {/* Honeypot — invisible to humans, bots fill it and get silently dropped */}
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="ef-company">Company (leave blank)</label>
          <input
            id="ef-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.company}
            onChange={(e) => set("company", e.target.value)}
          />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-6 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          {serverMsg || "Something went wrong. Please try again — or call us directly."}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-clay-600 px-8 py-4.5 text-base font-semibold text-paper shadow-[0_14px_30px_-12px_rgb(180_80_42/0.8)] transition-all hover:bg-clay-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending your request…
          </>
        ) : (
          <>Send My Estimate Request</>
        )}
      </button>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-ink-400">
        <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
        Protected by anti-spam checks · Typical response time: one business day
      </p>
    </form>
  );
}
