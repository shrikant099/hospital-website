import AboutSection from '@/components/About-Us'
import AnnouncementBar from '@/components/AnnouncementBar'
import EnquirySection from '@/components/EnquirySection'
import FAQSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import GoalsSection from '@/components/GoalsSection'
import LatestBlogs from '@/components/LatestBlog'
import Navbar from '@/components/Navbar'
import React from 'react'
export const metadata = {
  title: "About Us | Quick Home Doctor",
  description:
    "Learn about Quick Home Doctor, our mission, and our team providing trusted doctor and nurse home visit services across Delhi NCR with quality medical care at home.",
  alternates: {
    canonical: "https://quickhomedoctor.com/about-us",
    
  },
};
const page = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <AboutSection />
      <FAQSection />

      <GoalsSection />
      <EnquirySection />
      <Footer />
    </>
  )
}

export default page