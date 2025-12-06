"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const doctors = [
    {
        name: "Dr. Mahendra Mandiya",
        img: "/doctors/Dr-mahendra-mandiya.png",
        degree: "MBBS (MGMCH) DMC-87872",
        exp: "10 year Experience OPD, IPD, Emergency",
        details: [
            "CMO (Ex.) Medanta Hospital Gurugram",
            "Consultant (visiting) - Balaji Action Cancer Hospital Delhi",
            "MD - Pulse Clinic and Vjmandia Pvt Ltd",
            "Medical Officer (Ex.) - Raj govt NRHM",
        ],
    },
    {
        name: "Dr. Vijay Meena",
        img: "/doctors/Dr-vijay-meena.png",
        exp: "11 Years Experience OPD , IPD , Emergency",
        degree: "MBBS (GGSMCH) DMC-93176",
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

export default function DoctorsSection() {
    return (
        <section className="py-20 px-6 mt-20 bg-gradient-to-b from-blue-50 to-white">
            <h2 className="text-4xl text-center font-extrabold text-blue-900">
                Meet Our Doctors
            </h2>

            <p className="text-center mt-3 text-gray-600 max-w-2xl mx-auto">
                Highly qualified & trusted medical experts available for top-quality home care.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-16">
                {doctors.map((doc, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        whileHover={{ scale: 1.04 }}
                        className="relative bg-white/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 flex flex-col"
                    >

                        {/* FIXED LARGE IMAGE */}
                        <div className="relative w-full h-[580px] sm:h-[430px] md:h-[440px] lg:h-[460px] xl:h-[480px] overflow-hidden">
                            <Image
                                src={doc.img}
                                alt={doc.name}
                                fill
                                quality={70}
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        {/* TEXT CONTENT */}
                        <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold text-blue-900">{doc.name}</h3>

                            <p className="text-sm text-gray-500 mt-1">{doc.degree}</p>

                            {doc.exp && (
                                <p className="text-sm text-green-600 font-semibold mt-1">
                                    {doc.exp}
                                </p>
                            )}

                            <ul className="mt-4 text-sm text-gray-700 space-y-1">
                                {doc.details.map((d, idx) => (
                                    <li key={idx}>• {d}</li>
                                ))}
                            </ul>
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
