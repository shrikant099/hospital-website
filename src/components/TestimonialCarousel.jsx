"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      text:
        "QuickHomeDoctor helped my mother during a critical time. Their home-care assistance was professional, compassionate and reliable.",
      author: "Sona Damania",
    },
    {
      text:
        "The doctor arrived on time and handled the situation with expertise. Their service is incredibly convenient for elderly patients.",
      author: "Aarav Malhotra",
    },
    {
      text:
        "Highly impressed with the quality of care. The nurse was well-trained and genuinely caring. A trustworthy service.",
      author: "Priya Sharma",
    },
    {
      text:
        "Excellent experience. Their home visit service saved us multiple hospital trips. Completely recommend them.",
      author: "Raghav Sethi",
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    // 💡 REAL 3-SECOND DELAY
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center relative">

        {/* Quote Icon */}
        <FaQuoteLeft className="text-[#060606] text-4xl mx-auto mb-6" />

        {/* Testimonial */}
        <div className="min-h-[160px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4"
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {testimonials[index].text}
              </p>

              <p className="text-gray-500 mt-4 text-right font-medium text-sm md:text-base">
                – {testimonials[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#000000]"
                  : "border border-[#000000] bg-transparent"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
