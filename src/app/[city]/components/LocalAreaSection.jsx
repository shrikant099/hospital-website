// src/components/ServiceAreasSection.jsx
// Area cards — same style as service cards
// Homepage  → <ServiceAreasSection />                      (all cities + their areas)
// City page → <ServiceAreasSection currentCity="Delhi" />  (sirf us city ke areas)

import { seoCities } from "@/data/seoCities";
import Link from "next/link";

// "South Delhi" → "south-delhi"
function toSlug(str) {
  return str.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

// ── Single area card ───────────────────────────────────────────────────────
function AreaCard({ area, citySlug, cityName }) {
  return (
    <Link
      href={`/${citySlug}/${toSlug(area)}/doctor-and-nurse-at-home`}
      className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5
                 hover:shadow-md hover:border-brand-secondary/40
                 transition-all duration-200 flex flex-col gap-2"
    >
      {/* Map pin icon */}
      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-secondary" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.013 3.5-4.653 3.5-8.327a8.25 8.25 0 00-16.5 0c0 3.675 1.556 6.315 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Area name */}
      <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-brand-secondary transition-colors duration-150">
        {area}
      </h3>

      {/* City label */}
      <p className="text-xs text-gray-400 font-medium">{cityName}</p>

      {/* CTA */}
      <p className="text-brand-primary text-xs sm:text-sm font-semibold mt-1 group-hover:underline">
        Book now →
      </p>
    </Link>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────
export default function LocalAreaSection({ currentCity = null }) {
  const citiesToShow = currentCity
    ? seoCities.filter((c) => c.name.toLowerCase() === currentCity.toLowerCase())
    : seoCities;

  return (
    <section className="w-full bg-gray-50 py-16 px-4" id="service-areas">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#c26418] uppercase bg-gray-200 px-4 py-1.5 rounded-full mb-4">
            Service Areas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Home Doctor Service Areas —{" "}
            <span className="text-brand-secondary">
              {currentCity ?? "Delhi NCR"}
            </span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Certified doctors &amp; nurses at your doorstep across Delhi, Noida,
            Gurgaon, Ghaziabad and the entire NCR region.
          </p>
        </div>

        {/* ── Cities loop ── */}
        <div className="space-y-10">
          {citiesToShow.map((city) => (
            <div key={city.slug}>

              {/* City group label — homepage pe show, city page pe hide */}
              {!currentCity && (
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest shrink-0">
                    {city.name}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200" />
                  <Link
                    href={`/${city.slug}`}
                    className="text-xs text-brand-secondary font-semibold hover:underline shrink-0"
                  >
                    View all →
                  </Link>
                </div>
              )}

              {/* Area cards — 2 col mobile → 3 col tablet → 4 col desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {city.areas.map((area) => (
                  <AreaCard
                    key={area}
                    area={area}
                    citySlug={city.slug}
                    cityName={city.name}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}