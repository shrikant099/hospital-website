import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Contact Us | Quick Home Doctor – Home Healthcare in Delhi NCR",
    description:
        "Contact Quick Home Doctor for doctor and nurse home visit services across Delhi NCR. Call or WhatsApp us for quick assistance.",
};

export default function ContactUsPage() {
    return (
        <>

            <AnnouncementBar />
            <Navbar />
            <section className="max-w-4xl mx-auto px-6 mt-25 py-16">
                <h1 className="text-4xl font-bold mb-6">
                    Contact Quick Home Doctor
                </h1>

                <p className="text-gray-700 mb-8">
                    Need a doctor or nurse at home? Our team is available 24/7 to assist
                    you with fast and reliable home healthcare services across Delhi NCR.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <p className="text-lg mb-4">
                        📞 <strong>Phone:</strong>{" "}
                        <a href="tel:+917303771900">+91-7303771900</a>
                    </p>

                    <p className="text-lg mb-4">
                        📧 <strong>Email:</strong>{" "}
                        <a href="mailto:quickhomedoctor@gmail.com">
                            quickhomedoctor@gmail.com
                        </a>
                    </p>

                    <p className="text-lg">
                        📍 <strong>Service Area:</strong> Delhi NCR
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
}
