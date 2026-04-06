// src/app/[city]/[area]/doctor-and-nurse-at-home/components/AreaFaqSection.jsx
// Usage in page.jsx:
// import { areaContent } from "@/data/areaContent";
// <AreaFaqSection areaName={areaName} cityName={cityData.name} faqs={areaContent.FAQ} />

"use client";

import { useState } from "react";
import { replacePlaceholders as rp } from "@/utils/replacePlaceholders";

// ── ChevronIcon ───────────────────────────────────────────────────────────────
function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      } text-[var(--brand-primary,#0d6efd)]`}
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Single FAQ item ───────────────────────────────────────────────────────────
function FaqItem({ question, answer, index, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        isOpen
          ? "border-[var(--brand-primary,#0d6efd)] shadow-sm shadow-blue-100"
          : "border-gray-200 hover:border-blue-200"
      } bg-white`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary,#0d6efd)] focus-visible:ring-offset-1 rounded-2xl"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        {/* Q label + question */}
        <div className="flex items-start gap-3 min-w-0">
          <span
            className={`flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-extrabold transition-colors duration-200 ${
              isOpen
                ? "bg-[var(--brand-primary,#0d6efd)] text-white"
                : "bg-blue-50 text-[var(--brand-primary,#0d6efd)]"
            }`}
            aria-hidden="true"
          >
            Q
          </span>
          <span
            className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
              isOpen ? "text-[var(--brand-primary,#0d6efd)]" : "text-gray-900"
            }`}
          >
            {question}
          </span>
        </div>

        <ChevronIcon open={isOpen} />
      </button>

      {/* Answer panel — CSS height trick for smooth animation */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex gap-3 px-4 sm:px-5 pb-4 pt-1">
            <span
              className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-xs font-extrabold text-green-600"
              aria-hidden="true"
            >
              A
            </span>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function AreaFaqSection({ areaName, cityName, faqs }) {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  if (!faqs?.length) return null;

  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx));

  // Replace placeholders in all faqs
  const processedFaqs = faqs.map((faq) => ({
    question: rp(faq.question, areaName, cityName),
    answer: rp(faq.answer, areaName, cityName),
  }));

  return (
    <section
      className="bg-white py-12 px-4 sm:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--brand-primary,#0d6efd)] mb-3">
            FAQs
          </span>
          <h2
            id="faq-heading"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
          >
            Frequently Asked Questions
            <span className="block text-base sm:text-lg font-medium text-gray-500 mt-1">
              about Doctor &amp; Nurse at Home in{" "}
              <span className="text-[var(--brand-primary,#0d6efd)]">{areaName}</span>
            </span>
          </h2>
          <div className="mt-3 mx-auto w-14 h-1 rounded-full bg-[var(--brand-primary,#0d6efd)]" />
        </div>

        {/* ── Accordion list ── */}
        <div
          className="space-y-3"
          role="list"
        >
          {processedFaqs.map((faq, idx) => (
            <div key={idx} role="listitem">
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
              />
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 text-center">
          <p className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
            Still have questions?
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mb-4">
            Our team in {areaName} is available 24/7 — call or WhatsApp us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+917303771900"
              className="inline-flex items-center justify-center gap-2 bg-[var(--brand-primary,#0d6efd)] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md shadow-blue-100 hover:shadow-lg hover:scale-105 transition-all duration-200"
              aria-label="Call QuickHomeDoctor"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M2 3a2 2 0 0 1 2-2h2.153a2 2 0 0 1 1.94 1.515l.547 2.734a2 2 0 0 1-.45 1.732l-.7.7a11.042 11.042 0 0 0 4.829 4.829l.7-.7a2 2 0 0 1 1.732-.45l2.734.547A2 2 0 0 1 19 13.847V16a2 2 0 0 1-2 2C8.163 18 2 11.837 2 4V3z"/>
              </svg>
              Call Now
            </a>
            <a
              href="https://wa.me/917303771900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-green-500 text-green-600 font-bold text-sm px-6 py-2.5 rounded-full hover:bg-green-50 hover:scale-105 transition-all duration-200"
              aria-label="WhatsApp QuickHomeDoctor"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}