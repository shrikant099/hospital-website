import { cities } from "@/data/homePageData";
import Link from "next/link";

// ── Main Component
// currentCity = "Delhi NCR" — homepage default
// On /noida page → pass "Noida"
export default function ServiceAreasSection({ currentCity = "Delhi NCR" }) {
  return (
    <section className="w-full bg-white py-16 px-4" id="service-areas">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-brand-primary uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Service Areas
          </span>

          {/* H2 — Dynamic city name for SEO */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Certified Home healthcare at home in Delhi, Noida, Gurgaon, Ghaziabad & Delhi NCR {" "}
            {/* <span className="text-brand-primary-600">{currentCity}</span> */}
          </h3>

          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Certified MD & GP doctors, nurses, and physicians serving at your home across Delhi, Noida, Gurgaon, Ghaziabad, and the entire NCR region.
          </p>
        </div>

        {/* ── City Cards Grid ── */}
        {/* Mobile: 1 col | sm: 2 cols | lg: 4 cols (last card spans) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className={`
                  group relative bg-white border border-gray-200 rounded-2xl p-5
                  hover:border-[#C26418] hover:shadow-lg
                  transition-all duration-250 ease-out
                  flex flex-col gap-3
                  ${
                    city.slug === "delhi-ncr"
                      ? "sm:col-span-1 lg:col-span-1"
                      : ""
                  }
                `}
            >
              {/* Badge */}
              {city.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold bg-brand-secondary text-white px-2 py-0.5 rounded-full">
                  {city.badge}
                </span>
              )}

              {/* City name */}
              <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-primary transition-colors duration-200">
                {city.name}
              </h3>

              {/* Areas */}
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                {city.areas}
              </p>

              {/* Service tags */}
              <div className="flex flex-wrap gap-1.5">
                {city.services.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-medium bg-blue-50 text-brand-primary px-2.5 py-1 rounded-lg"
                  >
                    {s}
                  </span>
                ))}
                {city.extraCount && (
                  <span className="text-[11px] font-medium bg-gray-100 text-gray-500 px-2.5 py-1 rounded-lg">
                    +{city.extraCount} more
                  </span>
                )}
              </div>

              {/* CTA link */}
              <p className="text-brand-primary-600 text-xs font-semibold mt-auto pt-1 group-hover:underline underline-offset-2">
                {city.linkLabel} →
              </p>

              {/* Hover bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
