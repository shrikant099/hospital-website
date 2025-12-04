"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function WhyAboutSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const whyCall = [
        "Immediate doctor support for urgent medical needs.",
        "Fever, infection & routine illness treatment at home.",
        "Injury dressing, stitches, bedsore care & wound management.",
        "GP & Specialist consultation for bedridden or elderly patients.",
    ];

    const about = [
        "GP & Specialist Consultation by highly experienced doctors.",
        "Affordable Home Visit, Nursing Care & Home Admission support.",
        "Available 7 days a week across Delhi, Noida, Ghaziabad & Gurugram.",
        "Friendly and dedicated patient support by trained Care Managers.",
    ];

    return (
        <section className="py-20 bg-white px-6">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="max-w-6xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* WHY CALL US */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#005f5e] text-center md:text-left">
                            Why call us?
                        </h2>

                        <ul className="mt-6 space-y-5">
                            {whyCall.map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start gap-3 text-gray-700 text-[16px]"
                                >
                                    <Heart size={20} className="text-[#d76c24] mt-1" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* ABOUT QUICKHOMEDOCTOR */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#005f5e] text-center md:text-left">
                            About QuickHomeDoctor
                        </h2>

                        <ul className="mt-6 space-y-5">
                            {about.map((item, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-start gap-3 text-gray-700 text-[16px]"
                                >
                                    <Heart size={20} className="text-[#d76c24] mt-1" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
