"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const doctors = [
    {
        name: "Dr. Mahendra Mandiya",
        img: "/doctors/Dr-mahendra-mandiya.png",
        degree: "MBBS (MGMCH) DMC-87872",
        exp: "10 year Experience OPD, IPD, Emergency",
        details: [
            "CMO (Ex.) Medanta Hospital Gurugram",
            "Consultant (visiting) - Balaji Action Cancer Hospital Delhi",
            "MD - Pulse Clinic and VJMandia Pvt Ltd",
            "Medical Officer (Ex.) - Raj govt NRHM",
        ],
    },
    {
        name: "Dr. Vijay Meena",
        img: "/doctors/Dr-vijay-meena.png",
        degree: "MBBS (GGSMCH) DMC-93176",
        exp: "11 Years Experience OPD , IPD , Emergency",
        details: [
            "Consultant (visiting)-Balaji action cancer hospital delhi",
            "EX CMO (Maharaja Agrasen Hospital)",
            "MD - Pulse Clinics and VJMandia Pvt Ltd",
            "Medical officer(Ex) - Raj Govt",
        ],
    },
    {
        name: "Dr. Sabiya Ansari",
        img: "/doctors/Dr-sabiya-ansari.png",
        degree: "MBBS (KGMU) — DMC (Delhi Medical Council)",
        exp: "8 year Experience VC, IRP , JR, Emergency",
        details: [
            "IRP - Hindu Rao Hospital Delhi, North BMC",
            "BMC Medical College Delhi",
            "JR - Baba Saheb Ambedkar Hospital Delhi",
            "VC - Action Cancer Hospital Delhi",
            "RMO - Sant Parmanand Hospital New Delhi",
        ],
    },
    {
        name: "Dr. Anuj Mishra",
        img: "/doctors/Dr-anuj-mishra.png",
        degree: "MBBS (VSMU Belarus)",
        exp: "10 year Experience JREM, IRP, Emergency",
        details: [
            "JREM - AIIMS New Delhi",
            "IRP - Hindu Rao Hospital New Delhi",
            "JREM - Safdarjung Hospital and VMMC",
            "DMC (Delhi Medical Council)",
        ],
    },
    {
        name: "Dr. Monika Kajla",
        img: "/doctors/Dr-monika-kajla.png",
        degree: "MBBS (KGMU, KZK) RMC-64653",
        exp: "8 year Experience CMO, IRP, Emergency",
        details: [
            "CMO - Balaji Action Cancer Hospital Delhi",
            "IRP - GMCH Udaipur",
            "FMG - NMC Delhi",
        ],
    },
    {
        name: "Dr. Chitranshu Trivedi",
        img: "/doctors/dr-chitranshu-trivedi.png",
        degree: "MBBS (RIMRI, MJPR) Bareilly",
        exp: "11 year Experience OPD, ER, IPD, Emergency",
        details: [
            "CMO - Balaji Action Cancer Hospital, Delhi",
            "NAJR - BLK Max Delhi (Urology)",
            "DMC - 118234",
            "Visiting Consultant - Pulse & VJMandia Pvt. Ltd",
            "Experience: OPD, IPD, ER",
        ],
    },
];

export default function DoctorsCarousel() {
    const [index, setIndex] = useState(0);

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const current = doctors[index];

    return (
        <section className="py-20 px-6 bg-white">
            <h2 className="text-4xl font-extrabold text-center text-[#005f5e] mb-10">
                MEET OUR DOCTORS
            </h2>

            <div className="max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.5 }}
                        className="
                            bg-white shadow-xl border rounded-2xl
                            p-6 md:p-10 flex flex-col md:flex-row gap-8
                        "
                    >

                        {/* DOCTOR IMAGE */}
                        <div
                            className="
                                relative w-full md:w-1/3 
                                h-[470px] sm:h-[6   80px]
                                md:h-90 lg:h-95 xl:h-80
                                flex-shrink-0 overflow-hidden
                            "
                        >
                            <Image
                                src={current.img}
                                alt={current.name}
                                fill
                                quality={70}
                                className="object-cover object-top rounded-xl"
                            />
                        </div>

                        {/* TEXT CONTENT */}
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-bold text-[#005f5e]">
                                {current.name}
                            </h3>

                            <p className="text-[#0a6664] font-semibold mt-1">
                                {current.degree}
                            </p>

                            {/* EXPERIENCE ADDED */}
                            {current.exp && (
                                <p className="text-sm text-green-600 font-semibold mt-2">
                                    {current.exp}
                                </p>
                            )}

                            <ul className="mt-4 text-gray-700 space-y-1">
                                {current.details.map((d, idx) => (
                                    <li key={idx}>• {d}</li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>
                </AnimatePresence>

                {/* DOTS */}
                <div className="flex justify-center mt-6 gap-3">
                    {doctors.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition ${
                                i === index ? "bg-[#0a6664]" : "bg-gray-300"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
