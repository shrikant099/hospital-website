// src/app/[city]/[service]/doctor-and-nurse-at-home/components/AreaStatsSection.jsx

import { areaContent } from "@/data/areaContent";
import { replacePlaceholders as rp } from "@/utils/replacePlaceholders";

export default function AreaStatsSection({ areaName, cityName }) {
  const stats = [
    {
      value: "6000 +",
      label: rp("Happy Patients", areaName, cityName),
    },
    {
      value: "15 Mins",
      label: rp("ETA in {{cityName}}", areaName, cityName),
    },
    {
      value: "20 +",
      label: "Certified Doctor & Nurses",
    },
    {
      value: "24/7",
      label: rp("Available in {{area.name}}", areaName, cityName),
    },
  ];

  return (
    <section className="w-full bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile: 2x2 grid | Tablet+: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center justify-center text-center
                py-6 px-4 sm:py-8 sm:px-6
                ${i < stats.length - 1 ? "border-r border-gray-100" : ""}
                ${i < 2 ? "border-b md:border-b-0 border-gray-100" : ""}
                group hover:bg-[#064E53]/[0.03] transition-colors duration-200
              `}
            >
              {/* Value */}
              <span className="text-2xl sm:text-3xl font-extrabold text-[#064E53] leading-none mb-1.5 tabular-nums">
                {stat.value}
              </span>
              {/* Label */}
              <span className="text-xs sm:text-sm text-gray-500 font-medium leading-snug max-w-[120px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}