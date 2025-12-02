"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Quote, Star } from "lucide-react";

export default function AboutSection() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    const services = [
        "Home Hospitalization",
        "Home care services",
        "Critical Care/Specialized Services",
        "Diagnostics & Monitoring",
        "Other Services",
        "ICU-Level Care at Home",
        "Diagnostic Services (ECG, X-Ray, Blood Tests)",
        "Skilled Nursing Care",
        "Injection & Medication Administration",
        "Ambulance Assistance",
        "IV Drips & Fluids Management",
    ];

    const reviews = [
        "my dad was suddenly got the vomiting and illness in his body my mind got shut at that time what to do, so i just call quickhomedoctor they immediately respond my call and sent a good female doctor at home, it was really very helpful i must recommend quickhomedoctor for noida",
        "very good service, they set up the bad here in our mom’s room and take care for 10 days, it was very well happened now my mom is feeling good by god’s grace. Again thankss",
        "i am rahul i got accident nd for that doctor told me for physiotherapy sessions it was very hard to travel in a car because my leg problem is still hurting me, i hired quickhomedoctor’s physiotherapist he is daily coming to home he is very good at his work if anyone needed for physiotherapist you can contact these guys",
        "most required service it is very difficult to find a good doctor for home who charges less nd give a nice clinic treatment at home.",
        "anjali is my sis and she is bed rest it has been very hard to get her to the doctor place so we got to know about quickhomedoctor and called them….they sent a very doctor he come to home weekly basis n she’s recovering rapidly too…you guys are doing such a great job god bless you",
    ];

    return (
        <>
            <section className="relative w-full min-h-[60vh] mt-30 md:min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/2.png"
                        alt="About QuickHomeDoctor"
                        fill
                        priority
                        className="
            object-cover 
            object-center 
            brightness-[0.95]
          "
                    />
                </div>

                {/* GRADIENT OVERLAY FOR BETTER READABILITY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-[1]"></div>

                {/* TITLE & SUBTITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative z-[2] text-center px-6"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
                        ABOUT US
                    </h1>

                    <p className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-white/90 drop-shadow">
                        QuickHomeDoctor – Expert Doctor at your home in just 15 mins
                    </p>
                </motion.div>
            </section>
            <section className="py-10 mt-20 bg-white">
                {/* ABOUT US */}
                <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col items-center md:items-start">
                    {/* RIGHT CONTENT */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-gray-700 leading-relaxed"
                    >
                        <h2 className="text-4xl font-extrabold text-[#0a6664]">ABOUT US</h2>

                        <p className="mt-4">
                            Expert Care at your home with Quickhomedoctor - Expert Doctor at
                            your home in just 15 mins. QuickHomeDoctor brings quality
                            healthcare straight to your home whenever you need it, wherever it
                            is urgent or without urgency. Our network of experienced
                            physicians and trained medical professionals make sure that you
                            receive safe, comfortable, and stress-free treatment at your home
                            comfort.
                        </p>

                        <p className="mt-3">
                            QuickHomeDoctor was created to fill the gap of home treatment with
                            most needed services. Whether you prefer in home care or require
                            an expert doctor consultation for more advanced care, our team is
                            well equipped to support you at every stage and at any time.
                        </p>

                        <h3 className="text-xl font-bold text-[#0a6664] mt-6">
                            What We Offer in QuickHomedoctor
                        </h3>

                        {/* Services List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            {services.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ type: "spring", stiffness: 250 }}
                                    className="flex items-start gap-2"
                                >
                                    <CheckCircle size={22} className="text-[#d76c24]" />
                                    <span>{service}</span>
                                </motion.div>
                            ))}
                        </div>

                        <p className="mt-6">
                            Every service is delivered with expertise, safety, and with
                            precautions because your comfort matters more than everything for
                            us.
                        </p>
                    </motion.div>
                </div>

                {/* OUR MISSION */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto text-center mt-20 px-6"
                >
                    <h2 className="text-4xl font-extrabold text-[#0a6664]">
                        OUR MISSION
                    </h2>

                    <p className="mt-5">
                        Healthcare is our top priority. At QuickHomeDoctor, our mission is
                        very simple: To provide home healthcare with hospital like care,
                        comfortable, and clinical excellence.
                    </p>

                    <p className="mt-3">
                        We believe that the best medical care is patient focused care,
                        transparent, and passionate. That’s why we’ve built a dedicated team
                        of doctors, nurses, and care takers who lead with heart as much as
                        expertise. Every decision we make is for patient care, trust, and
                        respect.
                    </p>

                    <p className="mt-3">
                        Our goal is to offer medical support that feels personal touch at
                        home providing not just treatment, but comfort, clinical experience,
                        and genuine human connection in every visit.
                    </p>
                </motion.div>

                {/* REVIEWS */}
                <div className="max-w-6xl mx-auto mt-20 px-6">
                    <h2 className="text-3xl font-extrabold text-[#0a6664] text-center mb-10">
                        What our Patient says about Quickhomedoctor
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {reviews.map((review, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                                className="bg-[#f8fdfd] p-7 rounded-2xl shadow-lg border border-gray-200"
                            >
                                <Quote size={26} className="text-[#0a6664]" />
                                <p className="mt-3">{review}</p>

                                <div className="flex gap-1 mt-4">
                                    <Star size={20} className="text-yellow-500" />
                                    <Star size={20} className="text-yellow-500" />
                                    <Star size={20} className="text-yellow-500" />
                                    <Star size={20} className="text-yellow-500" />
                                    <Star size={20} className="text-yellow-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
