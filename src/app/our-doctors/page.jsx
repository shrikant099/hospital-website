import AnnouncementBar from '@/components/AnnouncementBar'
import EnquirySection from '@/components/EnquirySection'
import FAQSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import LatestBlogs from '@/components/LatestBlog'
import Navbar from '@/components/Navbar'
import DoctorsSection from '@/components/Our-doctors-Card'
import React from 'react'

const page = () => {
    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <DoctorsSection />
            <LatestBlogs />
            <FAQSection />
            <EnquirySection />
            <Footer />
        </>
    )
}

export default page