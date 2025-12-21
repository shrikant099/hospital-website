
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Privacy Policy | Quick Home Doctor",
    description:
        "Read how Quick Home Doctor protects your personal and medical information while delivering trusted home healthcare services.",
};
export default function PrivacyPolicyPage() {
    // const fadeUp = {
    //     hidden: { opacity: 0, y: 30 },
    //     show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    // };

    return (

        <>
            <AnnouncementBar />
            <Navbar />
            <section className="max-w-5xl mt-20 mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold mb-6">
                    Privacy Policy – Quick Home Doctor
                </h1>

                <p className="text-gray-700 mb-6">
                    At <strong>Quick Home Doctor</strong>, we understand how important your
                    privacy is—especially when it comes to your medical and personal
                    information. We are fully committed to protecting the trust you place in
                    us.
                </p>

                <p className="text-gray-700 mb-10">
                    This Privacy Policy explains what information we collect, how we use it,
                    and how we keep it safe when you use our website and home healthcare
                    services.
                </p>

                {/* SECTION 1 */}
                <h2 className="text-2xl font-semibold mb-4">
                    1. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold mt-4 mb-2">
                    1.1 Personal & Health Information
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
                    <li>Name, phone number and email address</li>
                    <li>Home address for doctor visits</li>
                    <li>Date of birth and relevant medical history</li>
                    <li>Health insurance details (if applicable)</li>
                </ul>

                <h3 className="text-xl font-semibold mt-4 mb-2">
                    1.2 Website Usage Information
                </h3>
                <p className="text-gray-700 mb-6">
                    You may contact us directly via phone, browse our services, view doctor
                    profiles or submit your name and phone number for a callback. This helps
                    us respond quickly and improve our services.
                </p>

                {/* SECTION 2 */}
                <h2 className="text-2xl font-semibold mb-4">
                    2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Booking and managing doctor home visit appointments</li>
                    <li>Communicating appointment updates and reminders</li>
                    <li>Providing doctors with necessary medical information</li>
                    <li>Improving service quality and user experience</li>
                    <li>Responding to queries and support requests</li>
                    <li>Meeting legal and regulatory requirements</li>
                </ul>

                {/* SECTION 3 */}
                <h2 className="text-2xl font-semibold mb-4">
                    3. Information Sharing
                </h2>
                <p className="text-gray-700 mb-4">
                    We only share your information when required to provide care or comply
                    with the law:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Doctors and healthcare professionals attending you</li>
                    <li>Trusted service partners (hosting, payment services)</li>
                    <li>Government or legal authorities when legally required</li>
                </ul>

                {/* SECTION 4 */}
                <h2 className="text-2xl font-semibold mb-4">
                    4. Data Security
                </h2>
                <p className="text-gray-700 mb-6">
                    We use industry-standard security measures to protect your data.
                    However, no online system is completely risk-free, and we advise users
                    to share information responsibly.
                </p>

                {/* SECTION 5 */}
                <h2 className="text-2xl font-semibold mb-4">
                    5. Your Choices
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>You may choose not to provide certain information</li>
                    <li>You can unsubscribe from promotional communication anytime</li>
                </ul>

                {/* SECTION 6 */}
                <h2 className="text-2xl font-semibold mb-4">
                    6. Policy Updates
                </h2>
                <p className="text-gray-700 mb-6">
                    This policy may be updated from time to time. Please review it
                    periodically for any changes.
                </p>

                {/* SECTION 7 */}
                <h2 className="text-2xl font-semibold mb-4">
                    7. Contact Information
                </h2>
                <p className="text-gray-700">
                    📧 Email: quickhomedoctor@gmail.com <br />
                    📞 Phone: <a href="tel:+917303771900">+91-7303771900</a>
                </p>
            </section>
            <Footer />
        </>

    );
}
