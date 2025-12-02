"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "Why would I need a Home Visit Doctor?",
            a: "A home visit doctor provides immediate medical care in the comfort of your home—ideal for elderly patients, post-surgery care, bedridden patients, or when you need urgent treatment without visiting a clinic.",
        },
        {
            q: "How can I schedule a visit for a Home Visit Doctor?",
            a: "You can book a doctor at home through a quick call, WhatsApp, or by filling out our online appointment form. Our care team responds within minutes.",
        },
        {
            q: "Can a Home Visit Doctor handle Emergency Situations?",
            a: "Yes, trained doctors and nurses can assess emergencies, provide initial treatment, stabilize the patient, and guide whether shifting to a hospital is required.",
        },
        {
            q: "Is a Home Visit Doctor covered by insurance?",
            a: "Some health policies and corporate insurances cover home medical visits. Coverage depends on the insurer and chosen plan.",
        },
    ];

    const toggleFAQ = (i) => {
        setActiveIndex(activeIndex === i ? null : i);
    };

    return (
        <section className="max-w-6xl mx-auto px-5 mt-20 py-16">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold text-[#086d6d] mb-10"
            >
                FREQUENTLY ASKED QUESTIONS
            </motion.h2>

            {/* FAQ LIST */}
            <div className="space-y-4">
                {faqs.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(i)}
                            className="w-full flex justify-between items-center py-5 px-5 text-left"
                        >
                            <span className="text-gray-800 font-semibold text-base sm:text-lg">
                                {item.q}
                            </span>

                            <ChevronDown
                                className={`w-6 h-6 text-gray-600 transition-transform ${activeIndex === i ? "rotate-180" : ""
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
                                    className="px-5 pb-5 text-gray-600 text-sm sm:text-base"
                                >
                                    {item.a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
