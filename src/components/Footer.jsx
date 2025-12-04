"use client";

import { motion } from "framer-motion";
import {
    FiPhone,
    FiMail,
    FiInstagram,
    FiLinkedin,
    FiFacebook,
    FiChevronRight,
} from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative mt-20 bg-[#f6f9f9] overflow-hidden">

            {/* Background Accent Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#eef6f6] to-[#fdfdfd]"></div>

            {/* Soft Glass Layer */}
            <div className="absolute inset-0 backdrop-blur-[3px] bg-white/40"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

                {/* BRANDING */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-extrabold text-[#024c4a] mb-2">
                        Quick
                        <span className="bg-gradient-to-r from-[#d76c24] to-[#ffb070] bg-clip-text text-transparent pb-4">
                            &nbsp;  <br /> HomeDoctor
                        </span>
                    </h2>

                    <p className="text-gray-600 leading-relaxed mt-3 text-sm">
                        Trusted home healthcare delivering expert medical services right at
                        your doorstep with compassion & professionalism.
                    </p>

                    {/* Contact */}
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 group">
                            <div className="w-11 h-11 bg-white shadow-md rounded-xl flex items-center justify-center border border-[#0f706b]/30 group-hover:border-[#0f706b] transition">
                                <FiPhone className="text-[#0f706b]" size={20} />
                            </div>
                            <span className="text-gray-700 text-sm group-hover:text-[#0f706b] transition">
                                <a href="tel:+917303771900">
                                    +91 7303771900
                                </a>
                            </span>
                        </div>

                        <div className="flex items-center gap-3 group">
                            <div className="w-11 h-11 bg-white shadow-md rounded-xl flex items-center justify-center border border-[#0f706b]/30 group-hover:border-[#0f706b] transition">
                                <FiMail className="text-[#0f706b]" size={20} />
                            </div>
                            <span className="text-gray-700 text-sm group-hover:text-[#0f706b] transition">
                                <a
                                    href="mailto:shrikantsoni809@gmail.com"
                                >
                                    quickhomedoctor@gmail.com
                                </a>
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* SERVICES */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h3 className="text-xl font-extrabold text-[#024c4a] mb-2">
                        SERVICES
                    </h3>
                    <div className="w-7 h-1 bg-gradient-to-r from-[#d76c24] to-[#ffb070] mb-4 rounded"></div>

                    <ul className="space-y-3 text-gray-700 text-sm">
                        {[
                            "Doctor At Home",
                            "Diagnostic Support",
                            "Elderly Care Made Convenient",
                            "Chronic Disease Management",
                            "Injection At Home",
                            "Nursing At Home",
                            "Other Services"
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href="/services/other-services"
                                className="flex items-center gap-2 hover:text-[#0f706b] transition cursor-pointer"
                            >
                                <FiChevronRight size={16} />
                                {item}
                            </Link>
                        ))}
                    </ul>
                </motion.div>

                {/* USEFUL LINKS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-xl font-extrabold text-[#024c4a] mb-2">
                        USEFUL LINKS
                    </h3>
                    <div className="w-7 h-1 bg-gradient-to-r from-[#d76c24] to-[#ffb070] mb-4 rounded"></div>

                    {/* USEFUL LINKS */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >

                        <ul className="space-y-3 text-gray-700 text-sm">

                            <li className="flex items-center gap-2 hover:text-[#0f706b] transition">
                                <FiChevronRight size={16} />
                                <Link href="/">Home</Link>
                            </li>

                            <li className="flex items-center gap-2 hover:text-[#0f706b] transition">
                                <FiChevronRight size={16} />
                                <Link href="/about">About Us</Link>
                            </li>

                            <li className="flex items-center gap-2 hover:text-[#0f706b] transition">
                                <FiChevronRight size={16} />
                                <Link href="/home-visits/delhi">Home Visit</Link>
                            </li>

                            <li className="flex items-center gap-2 hover:text-[#0f706b] transition">
                                <FiChevronRight size={16} />
                                <Link href="/services/home-care">Services</Link>
                            </li>

                            <li className="flex items-center gap-2 hover:text-[#0f706b] transition">
                                <FiChevronRight size={16} />
                                <Link href="/our-doctors">Our Doctors</Link>
                            </li>

                            <li className="flex items-center gap-2 hover:text-[#0f706b] transition">
                                <FiChevronRight size={16} />
                                <Link href="/privacy-policy">Privacy Policy</Link>
                            </li>

                        </ul>
                    </motion.div>

                </motion.div>

                {/* SOCIAL + HOURS */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <h3 className="text-xl font-extrabold text-[#024c4a] mb-2">
                        OPENING HOURS
                    </h3>
                    <div className="w-7 h-1 bg-gradient-to-r from-[#d76c24] to-[#ffb070] mb-5 rounded"></div>

                    <p className="text-gray-700 text-sm mb-6">Available 24/7</p>

                    <div className="flex items-center gap-5 mt-4">
                        <FiInstagram
                            size={22}
                            className="text-[#024c4a] hover:text-[#d76c24] transition cursor-pointer"
                        />
                        <FiLinkedin
                            size={22}
                            className="text-[#024c4a] hover:text-[#d76c24] transition cursor-pointer"
                        />
                        <FiFacebook
                            size={22}
                            className="text-[#024c4a] hover:text-[#d76c24] transition cursor-pointer"
                        />
                    </div>
                </motion.div>
            </div>

            {/* COPYRIGHT */}
            <div className="relative border-t mt-12 py-6 bg-white/70 backdrop-blur-sm">
                <p className="text-center text-gray-600 text-sm">
                    © {new Date().getFullYear()} QuickHomeDoctor — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
