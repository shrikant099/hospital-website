import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContactForm from "./components/ContactForm";

export const metadata = {
    title: "Contact Quick Home Doctor | Doctor & Nurse Home Visit in Delhi NCR",
    description:
        "Contact Quick Home Doctor for 24/7 doctor and nurse home visit services in Delhi NCR. Fast medical assistance at your doorstep.",
    alternates: {
        canonical: "https://quickhomedoctor.com/contact-us",
    },
};

export default function ContactUsPage() {
    return (
        <>
            <AnnouncementBar />
            <Navbar />

            <section className="max-w-5xl mt-20 mx-auto px-6 py-16">
                {/* H1 */}
                <h1 className="text-4xl font-bold mb-4">
                    Contact Quick Home Doctor
                </h1>

                {/* INTRO */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                    <strong>Quick Home Doctor</strong> provides trusted and professional
                    <strong> doctor and nurse home visit services in Delhi NCR</strong>.
                    If you are looking for immediate medical assistance at home, our
                    experienced healthcare professionals are available <strong>24/7</strong>
                    to support you.
                </p>

                {/* SEO CONTENT BLOCK */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Whether you need a general physician, trained nurse, elderly care,
                    post-surgery medical support, or emergency medical consultation at
                    home, Quick Home Doctor ensures timely and reliable healthcare
                    services across <strong>Delhi, Noida, Ghaziabad, Gurugram</strong> and
                    nearby areas.
                </p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                    You can contact us directly by phone or submit the contact form below.
                    Our medical support team will reach out to you quickly to understand
                    your requirements and arrange the appropriate healthcare service at
                    your doorstep.
                </p>

                {/* INTERNAL LINKS */}
                <p className="mb-10 text-sm text-gray-600">
                    To know more about our services, visit the{" "}
                    <a href="/" className="text-blue-600 underline">Home</a>{" "}
                    page or learn more{" "}
                    <a href="/about" className="text-blue-600 underline">About Us</a>.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* CONTACT INFO */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-semibold mb-4">
                            Get in Touch with Quick Home Doctor
                        </h2>

                        <p className="mb-4">
                            📞 <strong>Phone:</strong>{" "}
                            <a href="tel:+917303771900" className="text-blue-600">
                                +91-7303771900
                            </a>
                        </p>

                        <p className="mb-4">
                            📧 <strong>Email:</strong>{" "}
                            <a
                                href="mailto:quickhomedoctor@gmail.com"
                                className="text-blue-600"
                            >
                                quickhomedoctor@gmail.com
                            </a>
                        </p>

                        <p className="mb-2">
                            📍 <strong>Service Area:</strong> Delhi NCR
                        </p>

                        <p className="text-sm text-gray-600 mt-4">
                            Our home healthcare services are designed to provide comfort,
                            safety, and professional medical care without the need to visit
                            hospitals or clinics.
                        </p>
                    </div>

                    {/* FORM */}
                    <ContactForm />
                </div>

                {/* EXTRA SEO SECTION */}
                <div className="mt-16">
                    <h2 className="text-2xl font-semibold mb-4">
                        Why Choose Quick Home Doctor?
                    </h2>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>24/7 doctor and nurse availability</li>
                        <li>Fast response and doorstep medical care</li>
                        <li>Experienced and verified medical professionals</li>
                        <li>Trusted home healthcare service in Delhi NCR</li>
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    );
}
