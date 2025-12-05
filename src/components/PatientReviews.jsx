"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function PatientReviews() {
    const reviews = [
        {
            name: "Chandan Pawar",
            rating: 5,
            review:
                "It was a Sunday morning when my father was ill. They arrived quickly with all equipment. Professional, polite, and extremely knowledgeable. Highly recommended!",
        },
        {
            name: "Rita Verma",
            rating: 5,
            review:
                "Doctor visited on time and examined carefully. The guidance was perfect and their home care team was extremely supportive throughout the process.",
        },
        {
            name: "Mohit Sharma",
            rating: 5,
            review:
                "Best home doctor service I’ve experienced. Quick response, clear communication, and quality medical support at home. Very reliable.",
        },
    ];

    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    // AUTO SLIDER — every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-6 py-20">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10"
            >
                WHAT PATIENTS ARE{" "}
                <span className="bg-gradient-to-r from-[#d76c24] to-[#ffb070] text-transparent bg-clip-text">
                    SAYING
                </span>
            </motion.h2>

            <div className="relative bg-white/90 backdrop-blur rounded-2xl p-10 shadow-xl border border-gray-200">

                {/* Left Arrow (optional) */}
                <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-50 transition hidden md:block"
                >
                    <FiChevronLeft size={20} />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-50 transition hidden md:block"
                >
                    <FiChevronRight size={20} />
                </button>

                {/* Review Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="text-center"
                    >
                        {/* Google Logo */}
                        {/* <div className="flex justify-center mb-4">
                            <img src="/googleLogo.png" alt="Google" className="w-10 opacity-90" />
                        </div> */}

                        {/* Name */}
                        <p className="text-gray-700 font-semibold text-lg mb-2">
                            – {reviews[index].name}
                        </p>

                        {/* Animated Stars */}
                        <div className="flex justify-center mb-4">
                            {Array(reviews[index].rating)
                                .fill(0)
                                .map((_, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <FaStar className="text-[#f5b400] text-2xl" />
                                    </motion.span>
                                ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-600 text-md md:text-lg leading-relaxed italic max-w-3xl mx-auto">
                            “ {reviews[index].review} ”
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
