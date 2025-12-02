"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative mt-[90px] pt-20 pb-10 w-full min-h-screen flex items-center justify-center overflow-hidden">

            {/* BACKGROUND IMAGE FIXED & CENTERED */}
            <div className="absolute inset-0">
                <Image
                    src="/1.png"
                    alt="Hospital Background"
                    fill
                    className="object-cover overflow-hidden object-center brightness-[0.85]"
                    priority
                />
            </div>

            <div className="relative items-center w-full flex flex-col-reverse md:flex-row max-w-7xl mx-auto px-4 sm:px-6 md:px-10 gap-14 md:gap-20">

                {/* LEFT BOX (FORM) */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 text-white max-w-md w-full"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Schedule an Appointment
                    </h2>

                    <form className="space-y-5">
                        <div>
                            <label className="block mb-1 font-semibold">Patient Name</label>
                            <input
                                type="text"
                                placeholder="Enter patient name"
                                className="w-full px-4 py-3 rounded-lg border bg-white/30 border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Enter Mobile Number</label>
                            <input
                                type="text"
                                placeholder="Enter number"
                                className="w-full px-4 py-3 rounded-lg border bg-white/30 border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Enter Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full px-4 py-3 rounded-lg border bg-white/30 border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="w-full cursor-pointer sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/30 transition-all"
                            >
                                Submit Now
                            </button>

                            <a
                                href="tel:+917303771900"
                                className="w-full sm:w-auto px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-blue-50 transition-all text-center"
                            >
                                Call Now
                            </a>
                        </div>
                    </form>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-white md:pr-8 text-center md:text-left"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-[40px] sm:text-[35px] md:text-[50px] lg:text-[68px] font-extrabold leading-tight mb-6 text-white"
                    >
                        DOCTOR & NURSE <span className=" font-extrabold">
                            HOME
                        </span> <br />
                        VISIT IN{" "}
                        <span
                            className="
                    font-extrabold 
                    text-[45px] sm:text-[55px] md:text-[65px]
                    bg-gradient-to-r from-[#f5f5f5] via-[#f7f7f7] to-[#ede9ed8c]
                    text-transparent bg-clip-text
                  "
                        >
                            Delhi
                        </span>
                    </motion.h1>




                    <ul className="space-y-4 text-base sm:text-lg md:text-xl text-gray-200">
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex gap-3 justify-center md:justify-start font-bold"
                        >
                            <span className="text-white text-2xl font-bold">•</span>
                            GP & MD Doctor Consultation
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex gap-3 justify-center md:justify-start font-bold"
                        >
                            <span className="text-white text-2xl">•</span>
                            Comfortable Check-up at Home
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex gap-3 justify-center md:justify-start font-bold"
                        >
                            <span className="text-white text-2xl">•</span>
                            Personalized Home Care Services
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
