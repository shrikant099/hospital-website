"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { MdMonitorHeart } from "react-icons/md";
import Link from "next/link";

export default function OurServices() {
    const services = [
        {
            title: "Home Care Service",
            desc: "Comprehensive medical care delivered at your doorstep — including doctor visits, skilled nursing care, 12/24-hour female/nursing attendants, elderly caregiving, injections, dressing, catheter care, physiotherapy, and orthopedic rehabilitation — all from the comfort of your home.",
            icon: <FaUserDoctor size={40} className="text-white" />,
            topIconBg: "bg-[#0a6664]",
        },
        {
            title: "Critical Care/Specialized Services",
            desc: "Advanced ICU-level support at home with complete setup, ventilator management, critical monitoring, and specialized procedures like at-home dialysis — ensuring hospital-grade care in the safety of your home.",
            icon: <MdHealthAndSafety size={40} className="text-white" />,
            topIconBg: "bg-[#0a6664]",
        },
        {
            title: "Diagnostics & Monitoring",
            desc: "Convenient at-home diagnostics including blood tests, X-ray, ECG, ABG analysis, sleep study, Holter monitoring, and 24-hour ambulatory BP monitoring — ensuring accurate results without visiting a clinic. Our trained medical team ensures safe sample collection and precise monitoring right at your home.",
            icon: <MdMonitorHeart size={40} className="text-white" />,
            topIconBg: "bg-[#0a6664]",
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-30">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold text-center text-[#024c4a]"
            >
                OUR <span className="bg-gradient-to-r from-[#d76c24] to-[#ffb070] bg-clip-text text-transparent">SERVICES</span>
            </motion.h2>

            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-12 leading-relaxed">
                Explore our highlighted medical services that bring quality healthcare directly to your home.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="relative border border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white p-8 text-center hover:-translate-y-1"
                    >
                        {/* TOP ANGLED BADGE */}
                        <div
                            className={`absolute top-0 left-0 w-20 h-20 ${s.topIconBg}`}
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 0 100%)",
                            }}
                        ></div>

                        {/* ICON */}
                        <div className="absolute top-4 left-4">
                            {s.icon}
                        </div>

                        {/* Card Content */}
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-10">
                            {s.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-6">
                            {s.desc}
                        </p>

                        {/* Read More */}
                        <Link href="/services/home-care">
                            <div className="flex items-center justify-center gap-2 text-[#0a6664] font-semibold hover:gap-3 transition-all">
                                Read More <FiArrowRight />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
