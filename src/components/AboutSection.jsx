"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function AboutQuickHomeDoctor() {
    const images = [
        "/about/doctor1.jpg",
        "/about/doctor2.jpg",
        "/about/doctor3.jpg",
    ];

    const [index, setIndex] = useState(0);

    // Smooth auto slider
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const items = [
        {
            title: "We treat every patient like our own family",
            desc: "Our team provides compassionate, respectful and personalized care for every patient.",
        },
        {
            title: "Our doctors bring decades of experience",
            desc: "Highly qualified specialists with years of clinical expertise ensure accurate diagnosis.",
        },
        {
            title: "Beyond a simple clinic experience",
            desc: "We offer modern home healthcare with advanced monitoring and expert support.",
        },
        {
            title: "Ethical and honest medical practice",
            desc: "No unnecessary tests, no over-treatment — only patient-first healthcare.",
        },
        {
            title: "Preventive & wellness-focused approach",
            desc: "We promote long-term health improvement through early detection and care.",
        },
        {
            title: "Faster recovery with clinical precision",
            desc: "Accurate evaluation helps patients recover better and more efficiently.",
        },
    ];

    const [open, setOpen] = useState(null);
    function toggle(i) {
        setOpen(open === i ? null : i);
    }

    return (
        <section className="py-20 overflow-hidden mb-10 bg-[#f0f0f0]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

                {/* LEFT SIDE */}
                <div className="w-full">

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug"
                    >
                        <span className="text-[#024C4A]">About </span>
                        <span className="bg-gradient-to-r from-[#d76c24] to-[#ffb070] bg-clip-text text-transparent">
                            QuickHomeDoctor
                        </span>
                    </motion.h2>

                    {/* Line Under Heading */}
                    <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#d76c24] to-[#ffb070] mb-6"></div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="border border-[#dbecec] rounded-xl"
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="flex items-center justify-between w-full px-4 py-4"
                                >
                                    <span className="font-semibold text-[#024C4A] text-[15px]">
                                        {item.title}
                                    </span>

                                    <FiChevronDown
                                        className={`text-[#0f706b] text-2xl transition-all duration-300 ${open === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {open === i && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="px-4 pb-4 text-gray-600 text-sm leading-relaxed"
                                        >
                                            {item.desc}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* RIGHT SIDE — IMAGE SLIDER */}
                <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={images[index]}
                                alt="Doctor Team"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}


