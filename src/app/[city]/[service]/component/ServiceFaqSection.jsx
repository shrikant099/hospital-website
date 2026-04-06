"use client";
import { useState } from "react";

export default function ServiceFAQSection({ city, service }) {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = service?.faqs ?? [];

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions – {service.name} in {city.name}
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg bg-white shadow-sm">
              <button
                className="w-full text-left p-4 font-medium flex justify-between items-center"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {faq.question.replace("{city}", city.name)}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600 text-sm md:text-base">
                  {faq.answer.replace("{city}", city.name)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}