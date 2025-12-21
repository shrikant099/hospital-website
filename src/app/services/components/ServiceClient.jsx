"use client";

import AnnouncementBar from '@/components/AnnouncementBar'
import BookAppointment from '@/components/BookAppointment'
import EnquirySection from '@/components/EnquirySection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import OtherServices from '@/components/OtherServices'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { servicesContent } from '../content';
export const ServiceClient = ({slug}) => {
    console.log("🟡 ServiceClient slug:", slug);

    const service = slug ? servicesContent[slug] : null;

    if (!service) {
        return (
            <div className="p-10 text-center text-2xl font-bold text-gray-600">
                Not Found
            </div>
        );
    }
    return (
        <>

            <AnnouncementBar />
            <Navbar />

            {/* HERO SECTION */}
            <section className="relative h-[60vh] mt-20 w-full overflow-hidden">
                <Image
                    src={service.heroImage}
                    fill
                    quality={70}
                    alt={service.title}
                    className="object-cover brightness-[0.45]"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-4xl md:text-5xl font-extrabold"
                    >
                        {service.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 max-w-2xl text-lg md:text-xl text-white/90"
                    >
                        Professional care delivered with compassion & expertise.
                    </motion.p>
                </div>
            </section>

            {/* MAIN DESCRIPTION WITH IMAGE */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-teal-700 mb-5">
                            About Our {service.title}
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                            {service.description}
                        </p>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <Image
                            src={service.sectionImage}
                            width={650}
                            quality={70}
                            height={450}
                            className="rounded-2xl shadow-xl object-cover"
                            alt="service section"
                        />
                    </motion.div>
                </div>
            </section>

            {/* FEATURES BLOCKS */}
            <section className="bg-teal-50 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl text-center font-bold text-teal-800 mb-14">
                        Why Choose Our {service.title}?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10 px-6">
                        <div className="bg-white p-8 rounded-2xl shadow-md border">
                            <h3 className="text-xl font-semibold text-teal-700">
                                Experienced Team
                            </h3>
                            <p className="text-gray-700 mt-3">
                                Certified doctors and trained care professionals for trusted treatment.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border">
                            <h3 className="text-xl font-semibold text-teal-700">
                                Fast Response
                            </h3>
                            <p className="text-gray-700 mt-3">
                                Immediate scheduling & quick home visits when you need us.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border">
                            <h3 className="text-xl font-semibold text-teal-700">
                                Complete Support
                            </h3>
                            <p className="text-gray-700 mt-3">
                                End-to-end medical care, monitoring & follow-ups.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OTHER SERVICES CAROUSEL ONLY FOR OTHER-SERVICES */}
            {slug === "other-services" && <OtherServices />}

            <BookAppointment />
            <EnquirySection />
            <Footer />
        </>
    )
}
