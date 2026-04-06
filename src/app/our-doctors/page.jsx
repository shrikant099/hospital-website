// This file defines the page component for the "Our Doctors" page of the Quick Home Doctor website. It uses dynamic imports for heavy components to optimize performance and sets metadata for SEO purposes. The page includes an announcement bar, navigation bar, doctors section, latest blogs, FAQ section, enquiry section, and footer.
export const dynamic = "force-static";
export const revalidate = 604800; // 7 days

// Dynamically imported components that are heavy or have client-side interactivity
import dynamicImport from "next/dynamic";

import AnnouncementBar from '@/components/AnnouncementBar'
import EnquirySection from '@/components/EnquirySection'
import FAQSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import LatestBlogs from '@/components/LatestBlog'
import Navbar from '@/components/Navbar'

const DoctorsSection = dynamicImport(() => import("@/components/Our-doctors-Card"));

import React from 'react';

export const metadata = {
    title: "Our Doctors | Quick Home Doctor",
    description: "Meet experienced doctors at Quick Home Doctor. Book home consultation easily.",
    alternates: {
      canonical: "https://quickhomedoctor.com/our-doctors",
    },
  };
  
const page = () => {
    return (
        <>
            <AnnouncementBar />
            <Navbar />
            <DoctorsSection />
            <LatestBlogs />
            <FAQSection citySlug="delhi-ncr" cityName="Delhi NCR" />
            <EnquirySection />
            <Footer />
        </>
    )
}

export default page