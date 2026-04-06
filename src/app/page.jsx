import dynamicImport from "next/dynamic";

// Imorting necessary components for the homepage
const Hero = dynamicImport(() => import("@/components/Hero.jsx"));
import Navbar from "../components/Navbar.jsx";
import StepsSection from "@/components/StepSection.jsx";
import GoalsSection from "@/components/GoalsSection.jsx";
import Footer from "@/components/Footer.jsx";
const LatestBlogs = dynamicImport(() => import("@/components/LatestBlog.jsx"))
import ServicesSection from "@/components/ServicesSection.jsx";
import ServiceAreasSection from "@/components/ServiceAreasSection.jsx";
import WhyUsSection from "@/components/WhyUsSection.jsx";
import DoctorsCarousel from "@/components/DoctorsCarousel.jsx";
import PatientReviewsSection from "@/components/PatientReviewsSection.jsx";
import FAQSection from "@/components/FaqSection.jsx";
import NeedDoctorCTA from "@/components/NeedDoctorCTA.jsx";
import DoctorHomeSection from "@/components/DoctorHomeSection.jsx";

// Main homepage component that assembles all the sections together
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />
      <Hero cityName="15 minutes" />
      <GoalsSection />
      <ServicesSection cityName="quickHomeDoctor" citySlug={"delhi"} />
      <StepsSection />
      <DoctorHomeSection />
      <ServiceAreasSection currentCity="Delhi" />
      <WhyUsSection cityName="QuickHomeDoctor" />
      <DoctorsCarousel />
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        {/* CALL NOW */}
        <a
          href="tel:+917303771900"
          className="w-full sm:w-auto text-center bg-brand-secondary text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
        >
          Call Now
        </a>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/917303771900"
          target="_blank"
          className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
        >
          WhatsApp
        </a>
      </div>
      {/* <div className="max-w-6xl mb-20 mx-auto px-4 py-2">
        <div className="flex justify-center">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary text-white font-bold rounded-xl text-sm sm:text-base shadow-lg shadow-blue-100 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            View All Doctors
            <ArrowUpRightFromSquare className="w-4 h-4" />
          </Link>
        </div>
      </div> */}
      <PatientReviewsSection cityName="QuickHomeDoctor" />
      <LatestBlogs />
      <FAQSection citySlug="delhi" cityName="Delhi" />
      <NeedDoctorCTA cityName="QuickHomeDoctor" />
      <Footer />
    </main>
  );
};