
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BookAppointment() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-extrabold text-center text-[#024c4a]"
            >
                BOOK{" "}
                <span className="bg-gradient-to-r from-[#d76c24] to-[#ffb070] text-transparent bg-clip-text">
                    APPOINTMENT
                </span>
            </motion.h2>

            <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 mb-12 leading-relaxed">
                Our coordination team ensures fast medical response. Book your
                appointment and connect with certified doctors for personalized care at home.
            </p>

            {/* Wrapper Card */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 grid grid-cols-1 md:grid-cols-3 p-8 md:p-12 gap-10"
            >
                {/* FORM SECTION */}
                <div className="md:col-span-2 space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Patient Name */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Patient Name*</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-600 outline-none"
                            />
                        </div>

                        {/* Mobile Number */}
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Mobile Number*</label>
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-600 outline-none"
                            />
                        </div>
                    </div>

                    {/* Email & Time Slot */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm font-semibold text-gray-700">Email*</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-600 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700">Time Slots*</label>
                            <select className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-teal-600 outline-none">
                                <option>08:00 - 10:00 AM</option>
                                <option>10:00 - 12:00 PM</option>
                                <option>12:00 - 02:00 PM</option>
                                <option>02:00 - 04:00 PM</option>
                                <option>04:00 - 06:00 PM</option>
                            </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700">Message</label>
                        <textarea
                            placeholder="Write your message"
                            className="w-full mt-1 px-4 py-3 border rounded-xl bg-gray-50 h-28 focus:ring-2 focus:ring-teal-600 outline-none"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="w-full md:w-auto bg-[#0a6664] text-white font-semibold px-10 py-3 rounded-xl shadow-md hover:bg-[#0c4f4d] transition"
                    >
                        Request a Callback
                    </motion.button>
                </div>

                {/* Right Side – Doctor + WhatsApp */}
                <div className="flex flex-col items-center justify-center text-center">

                    {/* Doctor Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-36 h-36 rounded-full overflow-hidden shadow-lg"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1758691463331-2ac00e6f676f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEFwcG9pbnRtZW50fGVufDB8fDB8fHww"
                            alt="Doctor"
                            width={200}
                            height={200}
                            className="object-cover h-full"
                        />
                    </motion.div>

                    {/* WhatsApp Button */}
                    <Link
                        href="https://wa.me/7303771900"
                        target="_blank"
                        className="bg-[#0a6664] text-white mt-6 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-[#0c4f4d] transition flex items-center gap-2"
                    >
                        WhatsApp Us
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
