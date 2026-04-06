"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Default conditions — doctor-at-home ke liye ─────────────────────────────
const DEFAULT_CONDITIONS = [
  "Fever, cold, and flu",
  "Viral and bacterial infections",
  "Blood pressure monitoring and management",
  "Diabetes check-ups and management",
  "Stomach infections, nausea, and vomiting",
  "General weakness and fatigue",
  "Headaches and body pain",
  "Minor injuries and wound dressing",
];

// ─── Placeholder images — real images aane par replace karo ──────────────────
// images = array of { src, alt } — pass karo service/city se ya hardcode karo
const DEFAULT_IMAGES = [
  { src: "/quickHomeDoctorImage1.jpeg", alt: "Doctor visiting patient at home in Delhi" },
  { src: "/quickHomeDoctorImage2.jpeg", alt: "Home doctor checking blood pressure" },
  { src: null, alt: "Certified GP doctor at doorstep" },
];

export default function ServiceConditionsSection({ city, service, images }) {
  const conditions = service?.conditions ?? DEFAULT_CONDITIONS;
  const slides = images ?? DEFAULT_IMAGES;

  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="bg-[#f8fffe] py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-[1160px] mx-auto">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="mb-8">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#c26418] bg-orange-50 px-3 py-1 rounded-full mb-3">
            Conditions We Treat
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
            What Can a {service.treat} Treat at Home{" "}
            <span className="text-[#0a7075]">in {city.name}?</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-2xl">
            Our expert home visit {service.treat}s in{" "}
            <strong className="text-gray-700">{city.name}</strong> are well experienced and liscenced to handle
            many common conditions safely and effectively.
          </p>
        </div>

        {/* ── Main Grid: conditions left, carousel right ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">

          {/* ── Conditions List ────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {conditions.map((condition, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white border border-[#0a7075]/10 rounded-xl px-4 py-3 hover:border-[#0a7075]/30 hover:shadow-sm transition-all duration-200 group"
              >
                {/* Dot */}
                <span className="w-2 h-2 rounded-full bg-[#0a7075] shrink-0 group-hover:scale-125 transition-transform duration-200" />
                <span className="text-sm text-gray-700 font-medium leading-snug">
                  {condition}
                </span>
              </div>
            ))}
          </div>

          {/* ── Image Carousel ─────────────────────────────────────────────── */}
          <div className="w-full">
            {/* Carousel wrapper */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md aspect-[4/3]">

              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {slide.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* Placeholder — real image aane tak */
                    <div className="w-full h-full bg-gradient-to-br from-[#0a7075]/5 to-[#c26418]/5 flex flex-col items-center justify-center gap-3 text-gray-400">
                      <svg className="w-14 h-14 opacity-25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <rect x="3" y="3" width="18" height="18" rx="3"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <path d="M21 15l-5-5L5 21"/>
                      </svg>
                      <span className="text-xs text-center px-4 leading-relaxed">{slide.alt}</span>
                    </div>
                  )}
                </div>
              ))}

              {/* Prev / Next arrows */}
              {slides.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </>
              )}

              {/* Alt text badge bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/40 to-transparent px-4 py-3">
                <p className="text-white text-xs font-medium">{slides[current].alt}</p>
              </div>
            </div>

            {/* Dot indicators */}
            {slides.length > 1 && (
              <div className="flex justify-center gap-2 mt-3">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`rounded-full transition-all duration-200 ${
                      i === current
                        ? "w-6 h-2 bg-[#0a7075]"
                        : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─── Usage ──────────────────────────────────────────────────────────────────
  import ConditionsSection from "./components/ConditionsSection";

  // Basic — default conditions + placeholder images
  <ConditionsSection city={city} service={service} />

  // With real images:
  const DOCTOR_IMAGES = [
    { src: "/images/doctor-home-visit-1.jpg", alt: "Doctor visiting patient at home in Delhi" },
    { src: "/images/doctor-home-visit-2.jpg", alt: "Home doctor checking blood pressure" },
    { src: "/images/doctor-at-home-3.jpg",    alt: "Certified GP doctor at doorstep" },
  ];
  <ConditionsSection city={city} service={service} images={DOCTOR_IMAGES} />

  // seoServices me per-service conditions add karo:
  conditions: [
    "Fever, cold, and flu",
    "Viral and bacterial infections",
    "Blood pressure monitoring",
    ...
  ]
──────────────────────────────────────────────────────────────────────────── */