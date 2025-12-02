"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Shield, Lock, Mail, Phone } from "lucide-react";

export default function PrivacyPolicyPage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (

        <>
            <AnnouncementBar />
            <Navbar />
            <div className="min-h-screen bg-gradient-to-b from-[#f3fafa] to-white mt-20 py-20 px-5">
                <div className="max-w-7xl mx-auto">

                    {/* HEADER */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        className="text-center mb-14"
                    >
                        <Shield className="w-14 h-14 mx-auto text-[#0a6664] mb-4" />

                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a6664]">
                            Privacy Policy
                        </h1>

                        <p className="text-gray-600 mt-3 text-sm md:text-base font-medium">
                            Last Updated: December, 2025
                        </p>
                    </motion.div>

                    {/* SECTION BOX */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-white shadow-lg rounded-2xl p-8 mb-10 border border-gray-100"
                    >
                        <div className="prose max-w-none prose-headings:text-[#0a6664] prose-li:text-gray-700 prose-p:text-gray-700 leading-relaxed">

                            <h2 className="text-2xl font-bold">This is the updated Privacy Policy.</h2>

                            <h3 className="text-xl font-semibold mt-6">The QuickHomeDoctor Privacy Guarantee</h3>

                            <p>
                                Here at QuickHomeDoctor we understand how important it is to protect your privacy,
                                particularly when it comes to your medical privacy. We are fully committed to protecting
                                the trust you place with quickhomedoctor.
                            </p>

                            <p>
                                This Privacy Promise what information we collect, how we use it to care for you, and how we
                                keep it safe when you use our website and services.
                            </p>

                            <p>
                                By using QuickHomeDoctor, you are agreeing to the practices described below. If anything
                                here makes you uncomfortable, please let us know before using our services.
                            </p>

                            <h3 className="text-xl font-semibold mt-10">1. The Data That We Gather</h3>

                            <p>
                                The main reason we gather information is to make sure you receive the best and safest care
                                possible. Among these are:
                            </p>

                            <h4 className="text-lg font-semibold mt-4">
                                1.1 Personal & Health Information (The Essentials for Care):
                            </h4>

                            <ul className="list-disc list-inside">
                                <li>Identity: Your name, phone number, and email address.</li>
                                <li>Location: Your address so our physicians are aware of where to come and serve.</li>
                                <li>Health Background: Your date of birth, medical history, and health insurance details.</li>
                            </ul>

                            <h4 className="text-lg font-semibold mt-5">1.2 Technical Details, or How You Use Our Site:</h4>

                            <ul className="list-disc list-inside">
                                <li>You can simply call us or contact us on +91- 7303771900</li>
                                <li>The Services that we do is mentioned in the Service tab</li>
                                <li>You can find the expert doctors info on our page</li>
                                <li>Simply fill Name and Mob. Number to request a call back for immediate response.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-10">2. How We Utilize Your Data</h3>

                            <p>
                                Your information is used for one main goal: providing high-quality, convenient home
                                healthcare. In particular, we employ it for:
                            </p>

                            <ul className="list-disc list-inside">
                                <li>Offering Your Assistance & Care:</li>
                                <li>Scheduling: Booking your doctor and home treatment appointments.</li>
                                <li>Communication: Sending you reminders and connecting you with our healthcare team.</li>
                                <li>Treatment: Giving your particular healthcare provider the information they need to properly treat you.</li>
                                <li>Enhancing Your Experience: Examining user patterns to improve the speed, ease, and quality of our services for you.</li>
                                <li>Developing new features and services based on what our users need.</li>
                                <li>Keeping in Touch: Responding to your questions, providing support, and communicating important service updates.</li>
                                <li>Meeting Legal Needs: If required, complying with official legal requests, laws, and regulations.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-10">3. Who We Share Your Information With</h3>

                            <p>
                                We treat your information with the utmost respect. We only share it when absolutely
                                necessary to deliver your care or meet a legal requirement:
                            </p>

                            <ul className="list-disc list-inside">
                                <li>Your Care Team: The doctors and healthcare professionals who are coming to your home must have the relevant information to provide care.</li>
                                <li>Trusted Helpers (Third Parties): We use other companies (like our website host or payment processor) to run our business. They are strictly bound to protect your data.</li>
                                <li>Legal Requirements: If we are legally required (by a court order or government agency), we must share the requested information.</li>
                                <li>Business Growth: If QuickHomeDoctor were ever involved in a merger or sale, your information would be transferred to the new owner, who would still be bound by privacy obligations.</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-10">4. Keeping Your Data Safe</h3>

                            <p>
                                We use a variety of security measures to protect your personal and health information from
                                unauthorized people getting access to it. However, a crucial note: no system is 100% secure.
                                We do our best, but please be aware that sharing data online always carries a slight risk.
                            </p>

                            <h3 className="text-xl font-semibold mt-10">5. You Are in Control (Your Choices)</h3>

                            <ul className="list-disc list-inside">
                                <li>
                                    What You Share: You can choose not to give us certain information, but this might mean
                                    you can't access some of our features or services.
                                </li>
                                <li>
                                    Marketing: You always have the right to stop receiving our promotional emails and
                                    newsletters. Just follow the "unsubscribe" link in any marketing email.
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-10">6. Updates to This Promise</h3>

                            <p>
                                We may occasionally update this Privacy Promise as our services change. When we do, we
                                will update the "Last Updated" date at the top of the page. We encourage you to check back
                                periodically.
                            </p>

                            <h3 className="text-xl font-semibold mt-10">7. Contact Us</h3>

                            <p>We’re always here to answer your questions. If you have any concerns about this Privacy Promise or how we handle your data, please don't hesitate to reach out:</p>

                            <p>Email: quickhomedoctor@gmail.com</p>
                            <p>Phone Number: +91-7303771900</p>

                        </div>
                    </motion.div>

                </div>
            <Footer />
            </div>
        </>

    );
}
