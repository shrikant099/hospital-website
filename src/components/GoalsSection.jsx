"use client";

import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiHomeHeartFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";

export default function GoalsSection() {
    const stats = [
        {
            icon: <FaUsers size={40} />,
            number: "5021",
            label: "Happy Patients",
        },
        {
            icon: <FaUserDoctor size={40} />,
            number: "11",
            label: "Expert Doctors",
        },
        {
            icon: <RiHomeHeartFill size={40} />,
            number: "2102",
            label: "Home Visits",
        },
        {
            icon: <FaHeartbeat size={40} />,
            number: "12",
            label: "Medical Services",
        },
    ];

    return (
        <section
            className="relative py-40 bg-fixed bg-center bg-cover"
            style={{
                backgroundImage:
                    "url('/heroImage.jpg')", // put your background image in public folder
            }}
        >
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
                {stats.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="flex flex-col items-center"
                    >
                        {/* Icon Box */}
                        <div className="w-20 h-20 border-2 border-[#0f706b] rounded-lg flex items-center justify-center bg-white/60 shadow-md">
                            <span className="text-[#0f706b]">{item.icon}</span>
                        </div>

                        {/* Number */}
                        <h3 className="text-4xl mt-5 font-extrabold text-[#0f706b]">
                            {item.number}
                        </h3>

                        {/* Label */}
                        <p className="text-gray-700 font-medium mt-2">{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
