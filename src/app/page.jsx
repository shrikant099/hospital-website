
import Hero from "@/components/Hero.jsx"
import Navbar from "../components/Navbar.jsx"
import StepsSection from "@/components/StepSection.jsx"
import TestimonialCarousel from "@/components/TestimonialCarousel.jsx"
import AboutSection from "@/components/AboutSection.jsx"
import GoalsSection from "@/components/GoalsSection.jsx"
import Footer from "@/components/Footer.jsx"
import EnquirySection from "@/components/EnquirySection.jsx"
import PatientReviews from "@/components/PatientReviews.jsx"
import OurServices from "@/components/OurServices.jsx"
import BookAppointment from "@/components/BookAppointment.jsx"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with padding for fixed navbar */}
      {/* <section className="pt-40 md:pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">HealthCare</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Providing quality healthcare services with compassion and excellence. Your health is our priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Book Appointment
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all">
              Our Services
            </button>
          </div>
        </div>
      </section> */}
      <Hero />

      {/* Dummy content to test scroll */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Emergency Care", "Home Visits", "Lab Tests", "Cardiology", "Orthopedics", "Pediatrics"].map(
              (service) => (
                <div key={service} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">+</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service}</h3>
                  <p className="text-gray-600">Quality healthcare services available 24/7 for your convenience.</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* More content for scrolling */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We provide world-class medical facilities with experienced doctors and staff dedicated to your well-being.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "50+", label: "Doctors" },
              { num: "10K+", label: "Patients" },
              { num: "15+", label: "Years" },
              { num: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.num}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="h-96 bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Scroll up to see navbar effect ↑</p>
      </section> */}
      <StepsSection />
      <TestimonialCarousel />
      <AboutSection />  
      <BookAppointment />
      <OurServices />
      <GoalsSection />
      <PatientReviews />
      <EnquirySection />
      <Footer />
    </main>
  )
}
