export const metadata = {
    title: "Thank You | Quick Home Doctor",
    description: "Thank you for contacting Quick Home Doctor. Our team will reach out shortly.",
    robots: "index, follow",
    alternates: {
        canonical: "https://quickhomedoctor.com/thank-you",
        
    },
};

export default function ThankYouPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-5">
            <h1 className="text-4xl font-bold text-[#005f5e]">Thank You!</h1>
            <p className="mt-4 text-gray-600 max-w-xl">
                Your request has been received. Our medical team will contact you shortly.
            </p>

            <a
                href="/"
                className="mt-6 bg-[#d76c24] text-white px-6 py-3 rounded-full"
            >
                Go Back Home
            </a>
        </section>
    );
};