// src/components/ServicesSection.jsx
"use client";
import Link from "next/link";
import { services } from "@/data/homePageData";

// cityName  = display name  → "Delhi NCR", "Noida" etc.
// citySlug  = URL slug      → "delhi-ncr", "noida" etc.
//
// HOMEPAGE usage  : <ServicesSection />
//   → citySlug stays undefined → cards non-clickable (no redirect)
//
// CITY PAGE usage : <ServicesSection cityName="Noida" citySlug="noida" />
//   → cards link to /noida/doctor-at-home etc.

export default function ServicesSection({ cityName = "Delhi NCR", citySlug }) {
  // true  → city page  → cards are clickable Links
  // false → homepage   → cards are plain divs
  const isCityPage = Boolean(citySlug);

  return (
    <section className="w-full bg-gray-50 py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#c26418] uppercase bg-gray-200 px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Complete home healthcare solutions with {" "}
            <span className="text-brand-secondary">{cityName}</span>
          </h3>

          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
          From expert doctor consultations, professional nursing, general physician and diagnostic support get 11+ most needed healthcare services across Delhi, Delhi NCR, Gurgaon, Ghaziabad, and Noida without leaving your home {cityName}.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service) => {
            const Icon = service.icon;

            // Shared card content — same for both cases
            const CardContent = (
              <>
                {/* Icon box */}
                <div
                  className={`w-11 h-11 ${service.bg} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`text-3xl mb-3 ${service.iconColor}`} />
                </div>

                {/* Service name */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed flex-1">
                  {service.desc}
                </p>

                {/* "Book now" — only show on city pages since homepage cards are non-clickable */}
                {isCityPage && (
                  <p className="text-brand-primary text-xs sm:text-sm font-semibold mt-3 group-hover:underline">
                    Book now →
                  </p>
                )}
              </>
            );

            // Shared card class
            const cardClass =
              "group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 transition-all duration-200 flex flex-col";

            // CITY PAGE → clickable Link
            if (isCityPage) {
              return (
                <Link
                  key={service.slug}
                  href={`/${citySlug}/${service.slug}`}
                  className={`${cardClass} hover:shadow-md hover:border-blue-100`}
                >
                  {CardContent}
                </Link>
              );
            }

            // HOMEPAGE → non-clickable div (no redirect)
            return (
              <div
                key={service.slug}
                className={`${cardClass} cursor-default`}
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Need immediate assistance? Reach us instantly —
          </p>
          <div className="flex flex-row gap-3 justify-center">
            <a
              href="tel:+917303771900"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-primary-700 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-105"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/917303771900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}