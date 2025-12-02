import AboutSection from '@/components/About-Us'
import AnnouncementBar from '@/components/AnnouncementBar'
import EnquirySection from '@/components/EnquirySection'
import FAQSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import GoalsSection from '@/components/GoalsSection'
import LatestBlogs from '@/components/LatestBlog'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <AnnouncementBar />
      <Navbar />
    <AboutSection/>
      <FAQSection />
      <LatestBlogs />
      <GoalsSection />
      <EnquirySection />
      <Footer />
    </>
  )
}

export default page