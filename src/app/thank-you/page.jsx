import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LeadTracker from "./components/LeadTracker";

export const metadata = {
    title: "Thank You | Quick Home Doctor",
    description: "Thank you for contacting Quick Home Doctor. Our team will reach out shortly.",
    robots: "index, follow",
    alternates: {
        canonical: "https://quickhomedoctor.com/thank-you",
    },
};

const nextSteps = [
    {
        step: "01",
        title: "Request received",
        description: "Our care coordination team has your form details safely in our system.",
    },
    {
        step: "02",
        title: "Quick confirmation call",
        description: "A team member will call you shortly to understand the patient needs.",
    },
    {
        step: "03",
        title: "Service arrangement",
        description: "We will guide the right doctor, nurse, or healthcare support for your case.",
    },
];

const reassurancePoints = [
    "Fast callback support from our healthcare coordination team",
    "Trusted home visit assistance across Delhi NCR",
    "Guidance for doctor visit, nursing care, and urgent home support",
];

export default function ThankYouPage() {
    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <LeadTracker />

            <main className="overflow-hidden bg-[linear-gradient(180deg,#f2fbfa_0%,#ffffff_35%,#fff8f2_100%)] pt-24 sm:pt-28">
                <section className="relative">
                    <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-56 w-56 rounded-full bg-[#C26418]/12 blur-3xl sm:h-72 sm:w-72" />
                    <div className="absolute right-0 top-24 -z-10 h-52 w-52 rounded-full bg-[#064E53]/10 blur-3xl sm:h-72 sm:w-72" />

                    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid lg:grid-cols-[minmax(0,1.1fr)_420px] lg:items-center lg:gap-10 lg:px-8">
                        <div className="rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_20px_80px_rgba(6,78,83,0.12)] backdrop-blur sm:p-8 lg:p-10">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e7f6f5] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#064E53] sm:text-sm">
                                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0f7c73]" />
                                Form submitted successfully
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#064E53_0%,#0f7c73_100%)] text-white shadow-lg shadow-[#064E53]/20 sm:h-20 sm:w-20">
                                    <span className="text-2xl font-black sm:text-3xl">OK</span>
                                </div>

                                <div>
                                    <h1 className="max-w-2xl text-3xl font-black leading-tight text-[#053b3f] sm:text-4xl lg:text-5xl">
                                        Thank you. Your request is with our medical support team.
                                    </h1>
                                    <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                                        We have received your enquiry and our team will contact you shortly to
                                        confirm the details and help arrange the right home healthcare support.
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-3">
                                    {reassurancePoints.map((point) => (
                                        <div
                                            key={point}
                                            className="rounded-2xl border border-[#d9ecea] bg-[#f7fbfb] px-4 py-4 text-left text-sm font-medium leading-6 text-[#24565a]"
                                        >
                                            {point}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                                    <a
                                        href="tel:+917303771900"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C26418] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ab5816]"
                                    >
                                        <span className="text-base leading-none">•</span>
                                        Call Support Now
                                    </a>
                                    <Link
                                        href="/"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#064E53]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#064E53] transition hover:border-[#064E53] hover:bg-[#f1f8f8]"
                                    >
                                        <span className="text-base leading-none">•</span>
                                        Back to Homepage
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <aside className="rounded-[28px] border border-[#d7ebe9] bg-white p-5 shadow-[0_20px_70px_rgba(10,77,74,0.10)] sm:p-7">
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff3e8] text-[#C26418]">
                                    <span className="text-lg font-black">24</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C26418]">
                                        What happens next
                                    </p>
                                    <p className="text-sm text-gray-500">A simple update on the next few steps</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {nextSteps.map((step, index) => {
                                    return (
                                        <div
                                            key={step.title}
                                            className="flex gap-4 rounded-2xl border border-[#edf4f3] bg-[#fcfefe] p-4"
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e7f6f5] text-[#064E53]">
                                                    <span className="text-sm font-black">{step.step}</span>
                                                </div>
                                                {index !== nextSteps.length - 1 && (
                                                    <div className="mt-2 h-full w-px bg-gradient-to-b from-[#c9e5e2] to-transparent" />
                                                )}
                                            </div>

                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7aa3a0]">
                                                    Step {index + 1}
                                                </p>
                                                <h2 className="mt-1 text-lg font-bold text-[#073f43]">
                                                    {step.title}
                                                </h2>
                                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-6 rounded-2xl bg-[linear-gradient(135deg,#064E53_0%,#0b6662_100%)] p-5 text-white">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                                    Need urgent help?
                                </p>
                                <h3 className="mt-2 text-2xl font-bold">Speak with our team directly</h3>
                                <p className="mt-2 text-sm leading-6 text-white/80">
                                    If the patient needs immediate support, please call us now for a faster response.
                                </p>
                                <a
                                    href="tel:+917303771900"
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
                                >
                                    +91 7303771900
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </aside>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
                    <div className="grid gap-4 rounded-[28px] border border-[#efe7dd] bg-[#fffaf5] p-5 sm:p-6 lg:grid-cols-3 lg:p-8">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C26418]">
                                Why families choose us
                            </p>
                            <h2 className="mt-2 text-2xl font-bold text-[#073f43]">
                                Home healthcare that feels responsive and dependable
                            </h2>
                        </div>

                        <div className="rounded-2xl bg-white p-5 shadow-sm">
                            <p className="text-lg font-bold text-[#064E53]">24/7 support line</p>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Our team helps coordinate urgent doctor and nurse support when you need it most.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 shadow-sm">
                            <p className="text-lg font-bold text-[#064E53]">Verified care guidance</p>
                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                We aim to connect patients with the right home visit care based on their condition.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
