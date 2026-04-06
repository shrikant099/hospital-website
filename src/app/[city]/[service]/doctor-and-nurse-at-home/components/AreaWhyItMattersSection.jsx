// src/app/[city]/[area]/doctor-and-nurse-at-home/components/AreaWhyItMattersSection.jsx
// Usage in page.jsx:
// import { areaContent } from "@/data/areaContent";
// <AreaWhyItMattersSection areaName={areaName} cityName={cityData.name} data={areaContent.whyItMatters} />

import { replacePlaceholders as rp } from "@/utils/replacePlaceholders";

// ── Highlight stat pills shown alongside the text ─────────────────────────────
const STATS = [
  { value: "15–30 min", label: "Doctor & Nurse arrives" },
  { value: "24 / 7", label: "Always available" },
];

// ── Trust bullet points ───────────────────────────────────────────────────────
const TRUST_POINTS = [
  "Local doctors who know your area's roads",
  "No hospital queues or travel stress",
  "Every inquiry treated with urgency",
  "Certified MBBS / MD professionals",
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function AreaWhyItMattersSection({ areaName, cityName, data }) {
  if (!data) return null;

  const title = rp(data.title, areaName, cityName);

  // Split description into sentences for richer rendering
  const rawDesc = rp(data.description, areaName, cityName);
  const sentences = rawDesc
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  // Group into paragraphs: first 2 sentences → para 1, rest → para 2
  const para1 = sentences.slice(0, 2).join(" ");
  const para2 = sentences.slice(2).join(" ");

  return (
    <section
      className="bg-[#f8faff] py-12 px-4 sm:py-16"
      aria-labelledby="why-matters-heading"
    >
      <div className="max-w-5xl mx-auto">

        {/* ── Eyebrow label ── */}
        <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--brand-primary,#0d6efd)] mb-3">
          Why It Matters
        </span>

        {/* ── Heading ── */}
        <h2
          id="why-matters-heading"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug max-w-3xl"
        >
          {title}
        </h2>

        {/* accent bar */}
        <div className="mt-3 mb-8 w-14 h-1 rounded-full bg-[var(--brand-primary,#0d6efd)]" />

        {/* ── Main content: text left + stats right on md+ ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left — paragraphs + trust bullets */}
          <div className="flex-1 min-w-0 space-y-4">
            {para1 && (
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {para1}
              </p>
            )}
            {para2 && (
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {para2}
              </p>
            )}
          </div>

          {/* Right — stat cards + CTA card */}
          <div className="w-full lg:w-64 flex-shrink-0 flex flex-col gap-4">

            {/* Stat pills — horizontal scroll on mobile */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-1 lg:overflow-visible lg:pb-0">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 bg-white border border-gray-200 rounded-2xl px-5 py-4 text-center shadow-sm min-w-[120px] lg:min-w-0"
                >
                  <p className="text-xl sm:text-2xl font-extrabold text-[var(--brand-primary,#0d6efd)] leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="bg-[var(--brand-primary,#0d6efd)] rounded-2xl p-5 text-white text-center shadow-md">
              <p className="text-sm font-semibold leading-snug mb-3">
                Book a home visit in {areaName} in immediately, no waiting, no queues.
              </p>
              <a
                href="tel:+917303771900"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-primary,#0d6efd)] font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 w-full"
                aria-label={`Call QuickHomeDoctor for home visit in ${areaName}`}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M2 3a2 2 0 0 1 2-2h2.153a2 2 0 0 1 1.94 1.515l.547 2.734a2 2 0 0 1-.45 1.732l-.7.7a11.042 11.042 0 0 0 4.829 4.829l.7-.7a2 2 0 0 1 1.732-.45l2.734.547A2 2 0 0 1 19 13.847V16a2 2 0 0 1-2 2C8.163 18 2 11.837 2 4V3z" />
                </svg>
                Call Now
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}