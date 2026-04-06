import Link from "next/link";

// Helper: "South Delhi" → "south-delhi"
function toSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function ServicePageAreasSection({ city }) {
  if (!city) return null;

  const { slug, name, areas = [], phoneNumber } = city;

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-[#C26418] inline-block" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C26418]">
            Service Areas
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#064E53] leading-snug mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Doctor &amp; Home Healthcare Services
          <br className="hidden sm:block" />
          {" "}Available Across{" "}
          <span className="text-[#C26418]">{name}</span>
        </h2>

        {/* Description */}
        <p className="text-sm text-[#5a7a7b] max-w-xl leading-relaxed mb-7">
          We cover all major localities across {name}. Click on your area for
          specific information about our home healthcare service near you.
        </p>

        {/* Area Pills */}
        <div className="flex flex-wrap gap-2.5">
          {areas.map((area) => (
            <Link
              key={area}
              href={`/${slug}/${toSlug(area)}/doctor-and-nurse-at-home`}
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                         border border-[#d4e9ea] bg-white
                         text-[13px] font-medium text-[#064E53]
                         hover:bg-[#064E53] hover:border-[#064E53] hover:text-white
                         transition-all duration-150"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#C26418]
                           group-hover:bg-white transition-colors duration-150 flex-shrink-0"
              />
              {area}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}