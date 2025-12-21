import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Terms & Conditions | Quick Home Doctor",
    description:
        "Read the terms and conditions for using Quick Home Doctor services, including doctor and nurse home visits across Delhi NCR.",
};

export default function TermsAndConditionsPage() {
    return (
        <>

            <AnnouncementBar />
            <Navbar />
            <section className="max-w-5xl mx-auto mt-25 px-6 py-16">
                {/* H1 */}
                <h1 className="text-4xl font-bold mb-6">
                    Terms & Conditions
                </h1>

                <p className="text-gray-700 mb-6">
                    Welcome to <strong>Quick Home Doctor</strong>. By accessing or using our
                    website and services, you agree to comply with and be bound by the
                    following Terms and Conditions. Please read them carefully.
                </p>

                {/* SECTION 1 */}
                <h2 className="text-2xl font-semibold mb-3">
                    1. Use of Our Services
                </h2>
                <p className="text-gray-700 mb-6">
                    Quick Home Doctor provides doctor and nurse home visit services,
                    diagnostics, and home healthcare support across Delhi NCR. Our services
                    are subject to availability and medical suitability.
                </p>

                {/* SECTION 2 */}
                <h2 className="text-2xl font-semibold mb-3">
                    2. Medical Disclaimer
                </h2>
                <p className="text-gray-700 mb-6">
                    The information provided on this website is for general guidance only
                    and does not replace professional medical advice. Treatment decisions
                    are taken by qualified medical professionals based on individual
                    patient needs.
                </p>

                {/* SECTION 3 */}
                <h2 className="text-2xl font-semibold mb-3">
                    3. Appointments & Payments
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Appointments are confirmed based on availability.</li>
                    <li>Service charges may vary depending on treatment and location.</li>
                    <li>Payments must be made as communicated during booking.</li>
                </ul>

                {/* SECTION 4 */}
                <h2 className="text-2xl font-semibold mb-3">
                    4. User Responsibilities
                </h2>
                <p className="text-gray-700 mb-6">
                    You agree to provide accurate personal and medical information to help
                    our healthcare professionals deliver safe and effective care. Any
                    misuse of services may result in service denial.
                </p>

                {/* SECTION 5 */}
                <h2 className="text-2xl font-semibold mb-3">
                    5. Privacy & Data Protection
                </h2>
                <p className="text-gray-700 mb-6">
                    Your privacy is important to us. All personal and medical data is
                    handled according to our{" "}
                    <a href="/privacy-policy" className="text-blue-600 underline">
                        Privacy Policy
                    </a>.
                </p>

                {/* SECTION 6 */}
                <h2 className="text-2xl font-semibold mb-3">
                    6. Limitation of Liability
                </h2>
                <p className="text-gray-700 mb-6">
                    Quick Home Doctor shall not be held liable for any indirect or
                    consequential damages arising from the use of our services, except as
                    required by law.
                </p>

                {/* SECTION 7 */}
                <h2 className="text-2xl font-semibold mb-3">
                    7. Changes to Terms
                </h2>
                <p className="text-gray-700 mb-6">
                    We may update these Terms and Conditions from time to time. Continued
                    use of our services after updates implies acceptance of the revised
                    terms.
                </p>

                {/* SECTION 8 */}
                <h2 className="text-2xl font-semibold mb-3">
                    8. Contact Information
                </h2>
                <p className="text-gray-700">
                    If you have any questions regarding these Terms & Conditions, please
                    contact us:
                    <br />
                    📧 Email:{" "}
                    <a href="mailto:quickhomedoctor@gmail.com">
                        quickhomedoctor@gmail.com
                    </a>
                    <br />
                    📞 Phone:{" "}
                    <a href="tel:+917303771900">
                        +91-7303771900
                    </a>
                </p>
            </section>
            <Footer />
        </>
    );
}
