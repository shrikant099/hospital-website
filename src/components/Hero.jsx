"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/constant";

export default function Hero() {
    const cities = ["Delhi", "Gurugram", "Noida", "Ghaziabad"];
    const [cityIndex, setCityIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const [form, setForm] = useState({
        name: "",
        mobile: "",
        email: "",
    });

    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    useEffect(() => {
        let currentCity = cities[cityIndex];
        let speed = isDeleting ? 60 : 120;

        const typing = setTimeout(() => {
            setText((prev) =>
                isDeleting
                    ? currentCity.substring(0, prev.length - 1)
                    : currentCity.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === currentCity) {
                setTimeout(() => setIsDeleting(true), 800);
            }

            if (isDeleting && text === "") {
                setIsDeleting(false);
                setCityIndex((prev) => (prev + 1) % cities.length);
            }
        }, speed);

        return () => clearTimeout(typing);
    }, [text, isDeleting, cityIndex]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMsg("");

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    patient_name: form.name,
                    mobile: form.mobile,
                    email: form.email,
                },
                PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                setSuccessMsg("Appointment Request Sent Successfully!");
                setForm({ name: "", mobile: "", email: "" });
            })
            .catch((err) => {
                setLoading(false);
                alert("Failed to send. Please try again.");
                console.log(err);
            });
    };

    return (
        <section className="relative mt-[90px] pt-20 pb-10 w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <div className="absolute inset-0">
                <Image
                    src="/1.png"
                    alt="Hospital Background"
                    fill
                    className="object-cover object-center brightness-[0.45]"
                    priority
                />
            </div>

            <div className="relative items-center w-full flex flex-col-reverse md:flex-row max-w-7xl mx-auto px-4 sm:px-6 md:px-10 gap-14 md:gap-20">

                {/* LEFT BOX */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 text-white max-w-md w-full"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        Schedule an Appointment
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-1 font-semibold">Patient Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter patient name"
                                className="w-full px-4 py-3 rounded-lg border bg-white/30 border-white/40 text-white placeholder-white/70"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Enter Mobile Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={form.mobile}
                                onChange={(e) => {
                                    // Only numbers + limit 10
                                    const value = e.target.value.replace(/\D/g, "");
                                    if (value.length <= 10) {
                                        setForm({ ...form, mobile: value });
                                    }
                                }} placeholder="Enter number"
                                className="w-full px-4 py-3 rounded-lg border bg-white/30 border-white/40 text-white placeholder-white/70"
                                required
                                maxLength={10}
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Enter Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                className="w-full px-4 py-3 rounded-lg border bg-white/30 border-white/40 text-white placeholder-white/70"
                                required
                            />
                        </div>

                        {/* SUCCESS MESSAGE */}
                        {successMsg && (
                            <p className="text-green-300 font-semibold">{successMsg}</p>
                        )}

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto px-8 py-3 bg-blue-600 disabled:bg-blue-400 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    "Submit Now"
                                )}
                            </button>

                            <a
                                href="tel:+917303771900"
                                className="w-full sm:w-auto px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg text-center"
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
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white md:pr-8 text-center md:text-left"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-[22px] sm:text-[30px] md:text-[28px] lg:text-[39px] font-extrabold leading-tight mb-6"
                    >
                        DOCTOR & NURSE <span className=" font-extrabold">HOME</span> <br />
                        VISIT IN{" "}
                        <span
                            className="
                           font-extrabold
                           text-[21px] sm:text-[22px] md:text-[28px] lg:text-[32px]
                           bg-gradient-to-r from-[#f5f5f5] via-[#f7f7f7] to-[#ede9ed8c]
                           text-transparent bg-clip-text
                       "

                        >
                            {text}
                            <span className="animate-pulse">|</span>
                        </span>
                    </motion.h1>

                    <ul className="space-y-1 text-base sm:text-lg md:text-xl text-gray-200">
                        <motion.li className="flex gap-3 justify-center md:justify-start font-bold">
                            <span className="text-white text-2xl">•</span>
                            GP & MD Doctor Consultation
                        </motion.li>

                        <motion.li className="flex gap-3 justify-center md:justify-start font-bold">
                            <span className="text-white text-2xl">•</span>
                            Comfortable Check-up at Home
                        </motion.li>

                        <motion.li className="flex gap-3 justify-center md:justify-start font-bold">
                            <span className="text-white text-2xl">•</span>
                            Personalized Home Care Services
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
