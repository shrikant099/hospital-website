// src/components/FaqAccordion.jsx
// Client component — accordion interaction ke liye
// Service page aur city page dono use kar sakte hain

"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0); // pehla FAQ default open

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
              isOpen ? "border-brand-secondary/40 shadow-sm" : "border-gray-100 bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`text-sm sm:text-base font-semibold leading-snug ${isOpen ? "text-brand-secondary" : "text-gray-900"}`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-secondary" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}