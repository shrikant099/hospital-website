"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquirySection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ENQUIRY STRIP */}
            <section
                className="
                    bg-[#dff0f6] py-6 px-4
                    flex flex-col sm:flex-row
                    items-center sm:items-center
                    justify-between gap-4
                    max-w-7xl mx-auto rounded-xl shadow-sm mt-16
                "
            >
                <h3
                    className="
                        text-base sm:text-lg md:text-xl 
                        font-semibold text-gray-700 tracking-wide
                        text-center sm:text-left
                    "
                >
                    HAVE QUESTIONS? GET IN TOUCH WITH OUR CARE COORDINATOR:
                </h3>

                <button
                    onClick={() => setOpen(true)}
                    className="
                        px-6 py-3 bg-white rounded-full 
                        shadow-md font-semibold text-gray-700 
                        hover:bg-gray-100 transition w-full sm:w-auto
                    "
                >
                    Enquiry
                </button>
            </section>

            {/* POPUP MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            fixed inset-0 bg-black/40 backdrop-blur-sm 
                            flex items-center justify-center z-50 p-4
                        "
                    >
                        {/* MODAL BOX */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ duration: 0.3 }}
                            className="
                     bg-white 
                                w-[95%]           /* ← mobile perfect */
                                max-w-sm          /* ← prevents overflow */
                                rounded-2xl 
                                shadow-xl 
                                p-6 sm:p-8 
                                relative 
                                overflow-hidden   /* ← fixes dropdown overflow */
                            "
                        >
                            {/* CLOSE BTN */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                            >
                                ✕
                            </button>

                            <h2 className="text-xl sm:text-2xl font-bold text-[#064e53] text-center mb-6">
                                Share Your Details
                            </h2>

                            {/* FORM */}
                            <form className="space-y-5">
                                <div>
                                    <label className="text-sm font-semibold text-gray-600">
                                        Patient Name*
                                    </label>
                                    <input
                                        type="text"
                                        className="
                                            w-full mt-1 px-4 py-3 border rounded-xl 
                                            bg-gray-50 focus:ring-2 focus:ring-teal-500 outline-none
                                        "
                                        placeholder="Enter Your Name"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-600">
                                        Mobile Number*
                                    </label>

                                    <div className="flex items-center gap-2 mt-1 w-full">
                                        <select
                                            className="
        w-20               /* FIXED WIDTH → No overflow */
        px-2 py-3 
        border rounded-xl bg-gray-50
        focus:ring-2 focus:ring-teal-500 outline-none
      "
                                        >
                                            <option>+91</option>
                                            <option>+1</option>
                                            <option>+44</option>
                                        </select>

                                        <input
                                            type="text"
                                            className="
                                            w-[20px]
        flex-1 
        min-w-0           /* VERY IMPORTANT → prevents overflow */
        px-3 py-3 
        border rounded-xl bg-gray-50
        focus:ring-2 focus:ring-teal-500 outline-none
      "
                                            placeholder="Enter Mobile Number"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-600">
                                        Email*
                                    </label>
                                    <input
                                        type="email"
                                        className="
                                            w-full mt-1 px-4 py-3 border rounded-xl 
                                            bg-gray-50 focus:ring-2 focus:ring-teal-500 outline-none
                                        "
                                        placeholder="Enter Your Email"
                                    />
                                </div>

                                {/* SUBMIT BUTTON */}
                                <button
                                    type="submit"
                                    className="
                                        w-full mt-4 py-3 bg-[#0f706b] hover:bg-[#0d5d5a] 
                                        text-white font-semibold rounded-xl shadow-md transition
                                    "
                                >
                                    Get a Call Back
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
