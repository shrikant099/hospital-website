
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
import LatestBlogs from "@/components/LatestBlog.jsx"
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StepsSection />
      <TestimonialCarousel />
      <AboutSection />  
      <OurServices />
      <BookAppointment />
      <GoalsSection />
      <PatientReviews />
      <LatestBlogs />
      <EnquirySection />
      <Footer />
    </main>
  )
}
