"use client";

import Link from "next/link";
import { services } from "@/data/homePageData";

export default function ServicesGrid() {
  return (
    <section className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Our Healthcare Services
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Book trusted home healthcare services anytime. Fast response, certified professionals.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 flex flex-col transition-all duration-200 hover:shadow-md hover:border-blue-100"
              >
                {/* ICON */}
                <div
                  className={`w-11 h-11 ${service.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  {Icon && (
                    <Icon className={`text-xl ${service.iconColor}`} />
                  )}
                </div>

                {/* TITLE */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  {service.name}
                </h3>

                {/* DESC */}
                <p className="text-xs sm:text-sm text-gray-500 flex-1">
                  {service.desc}
                </p>

                {/* CTA */}
                <p className="text-brand-primary text-xs sm:text-sm font-semibold mt-3 group-hover:underline">
                  Book now →
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}