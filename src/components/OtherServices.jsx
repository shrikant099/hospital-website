"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const allServicesCarousel = [
  {
    name: "Doctor Visit At Home",
    desc: "Certified doctors visit your home for diagnosis, treatment and follow-up care.",
  },
  {
    name: "Nursing Care At Home",
    desc: "Experienced nurses provide wound care, IV, injections and recovery monitoring.",
  },
  {
    name: "Healthcare Attendant at Home",
    desc: "Attendants help with hygiene, mobility, meals and daily support tasks.",
  },
  {
    name: "Female Nurse (12/24 Hour)",
    desc: "Certified female nurses for long duty monitoring and patient handling at home.",
  },
  {
    name: "Elderly Caretaker Services",
    desc: "Friendly caretakers support seniors with mobility, meals, medication and care.",
  },
  {
    name: "Nursing Procedure at Home",
    desc: "RT tube, catheter, dressing, IV and other procedures done safely at home.",
  },
  {
    name: "Injection Service At Home",
    desc: "IM/IV injections provided by trained healthcare professionals at home.",
  },
  {
    name: "Physiotherapy At Home",
    desc: "Pain relief, mobility improvement and strengthening by expert physiotherapists.",
  },
  {
    name: "Orthopaedic Physiotherapy",
    desc: "Ortho rehab for back pain, fractures, arthritis and joint conditions.",
  },
  {
    name: "Speech Therapy At Home",
    desc: "Improves speech clarity, fluency, communication skills and oral strength.",
  },
  {
    name: "Voice Therapy",
    desc: "Enhances vocal tone, clarity and heals voice-related conditions.",
  },
  {
    name: "Japa Maid Service",
    desc: "Post-delivery mother and newborn care by trained japa maids.",
  },

  // Repeat again as requested
  {
    name: "Doctor Visit At Home",
    desc: "Personalised home doctor care for all medical needs.",
  },
  {
    name: "Nursing Care At Home",
    desc: "Nurses provide essential medical support for safe recovery at home.",
  },
  {
    name: "Healthcare Attendant at Home",
    desc: "Support for daily tasks, hygiene and routine home care.",
  },
  {
    name: "Female Nurse (12/24 Hour)",
    desc: "Full-time female nursing support for patient assistance.",
  },
  {
    name: "Elderly Caretaker Services",
    desc: "Daily companionship and assistance for elderly patients.",
  },
  {
    name: "Nursing Procedure at Home",
    desc: "Safe medical procedures performed by trained nurses at home.",
  },
  {
    name: "Injection Service At Home",
    desc: "Avoid hospital queues with safe injections at home.",
  },
  {
    name: "Physiotherapy At Home",
    desc: "Strength, mobility & pain management therapy at home.",
  },
  {
    name: "Orthopaedic Physiotherapy",
    desc: "Specialist ortho rehab therapy for bones and joints.",
  },
  {
    name: "Speech Therapy At Home",
    desc: "Speech clarity and communication improvement sessions.",
  },
  {
    name: "Voice Therapy",
    desc: "Special voice strengthening and recovery sessions.",
  },
  {
    name: "Japa Maid Service",
    desc: "Mother & baby care through expert japa maids.",
  },
];

export default function OtherServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === allServicesCarousel.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-teal-800 mb-12">
        Our Complete Home Healthcare Services
      </h2>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-all duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {allServicesCarousel.map((item, index) => (
            <div key={index} className="min-w-full px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-teal-50 p-10 rounded-2xl shadow-xl border text-center"
              >
                <h3 className="text-2xl font-semibold text-teal-700">
                  {item.name}
                </h3>
                <p className="text-gray-700 mt-3">{item.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? allServicesCarousel.length - 1 : prev - 1
            )
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === allServicesCarousel.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
