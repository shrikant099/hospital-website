"use client";

import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import Link from "next/link";

export default function StepsSection() {
    const steps = [
        {
            id: 1,
            title: "Call Our Medical Team",
            desc: "Our medical support team instantly connects you with an expert for quick assistance. Call, WhatsApp, or fill the form.",
            icon: <FiPhoneCall className="text-brand-primary" size={60} />,
        },
        {
            id: 2,
            title: "Explain Symptoms",
            desc: "Share the patient's condition clearly. Our doctor notes symptoms and verifies your location in Delhi NCR.",
            icon: <FaUserDoctor className="text-brand-primary" size={60} />,
        },
        {
            id: 3,
            title: "Doctor Visits Your Home",
            desc: "A certified doctor or nurse arrives at your home for check-up, treatment or medical care in 15 minutes.",
            icon: <MdHealthAndSafety className="text-brand-primary" size={65} />,
        },
    ];

    return (
        <section className="py-30 bg-[#fcfafae1]">
            <div className="max-w-7xl mx-auto px-5 text-center">

                {/* Heading */}
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 leading-snug"
                >
                   How to Book Doctor’s consultation at home in delhi 
                </motion.h3>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            className="border border-gray-300 rounded-2xl p-10 bg-white 
                            hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            {/* ICON FIXED — THIS DISPLAYS ICONS */}
                            <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                                {step.icon}
                            </div>

                            {/* Step Number */}
                            <h4 className="text-lg font-semibold text-gray-700">
                                Step {step.id}
                            </h4>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mt-2">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center lg:flex mt-10 items-center gap-2">
              {/* Book Now */}
              <Link
                href="/contact-us"
                className="flex items-center gap-2 px-5 py-3.5 font-bold bg-brand-secondary text-white rounded-xl transition text-sm shadow-md shadow-blue-200"
              >
             Book a Doctor Now
              </Link>
            </div>
        </section>
    );
}
