import AnnouncementBar from '@/components/AnnouncementBar'
import EnquirySection from '@/components/EnquirySection'
import FAQSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import LatestBlogs from '@/components/LatestBlog'
import Navbar from '@/components/Navbar'
import DoctorsSection from '@/components/Our-doctors-Card'
import React from 'react'
export const metadata = {
    title: "Our Doctors | Experienced Home Visit Doctors in Delhi NCR",
    description:
        "Meet our experienced and certified doctors providing trusted home visit medical care across Delhi NCR.",
};

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