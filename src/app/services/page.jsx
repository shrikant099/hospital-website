import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ServicesGrid from "./components/ServicesGrid";

export const metadata = {
  title: "Home Healthcare Services in Delhi NCR | Quick Home Doctor",
  description:
    "Explore doctor visits, nursing, physiotherapy, diagnostics, elderly care, ICU setup, and more home healthcare services across New Delhi.",
  alternates: {
    canonical: "https://quickhomedoctor.com/services",
  },
};

const page = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <ServicesGrid />
      <Footer />
    </>
  );
};

export default page;
