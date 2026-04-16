import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ServicesGrid from "./components/ServicesGrid";

const page = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Footer />
    </>
  );
};

export default page;
