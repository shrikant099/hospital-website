import { replacePlaceholders as rp } from "@/utils/replacePlaceholders";

export default function AreaHomeHealthcareSection({ areaName, cityName, data }) {
  if (!data) return null; // safety check

  const title = rp(data.title, areaName, cityName);
  const description = rp(data.description, areaName, cityName);

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--brand-secondary)] leading-snug">
          {title}
        </h2>
        <div className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
          {description.split(". ").filter(Boolean).map((para, i) => (
            <p key={i}>{para.endsWith(".") ? para : `${para}.`}</p>
          ))}
        </div>
      </div>
    </section>
  );
}