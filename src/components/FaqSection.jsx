"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
 import { cityFAQs } from "@/data/homePageData";
// ── Main Component 
export default function FAQSection({ citySlug = "delhi-ncr", cityName = "Delhi NCR" }) {
    const [activeIndex, setActiveIndex] = useState(null);
   
    // City ke hisab se FAQs pick karo — fallback default
    const faqs = cityFAQs[citySlug] || cityFAQs["default"];
   
    const toggleFAQ = (i) => setActiveIndex(activeIndex === i ? null : i);
   
    // JSON-LD Schema — Google Featured Snippets ke liye
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    };
   
    return (
      <section className="w-full bg-gray-50 py-14 px-4" id="faq">
   
        {/* JSON-LD Schema — SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
   
        <div className="max-w-4xl mx-auto">
   
          {/* ── Header ── */}
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest text-brand-primary uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Common questions about our home healthcare services in{" "}
              <span className="font-semibold text-gray-700">{cityName}</span>
            </p>
          </div>
   
          {/* ── FAQ List ── */}
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={`${citySlug}-${i}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:border-blue-200 transition-colors duration-200"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center py-4 px-5 text-left gap-3"
                  aria-expanded={activeIndex === i}
                >
                  <span className="text-gray-800 font-semibold text-sm sm:text-base leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-primary flex-shrink-0 transition-transform duration-300 ${
                      activeIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
   
                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
   
          {/* ── Bottom CTA ── */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Still have questions? Our team is available 24/7
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <a
                href="tel:+917303771900"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:scale-105"
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
   
