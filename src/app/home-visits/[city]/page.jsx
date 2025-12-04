"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { cityContent } from "../content";
import Footer from "@/components/Footer";
import EnquirySection from "@/components/EnquirySection";
import BookAppointment from "@/components/BookAppointment";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import WhyAboutSection from "@/components/WhyAboutSection";
import DoctorsCarousel from "@/components/DoctorsCarousel";

export default function CityPage() {
    const { city } = useParams();
    const data = cityContent[city];

    if (!data) {
        return (
            <div className="p-20 text-center text-3xl font-bold text-red-600">
                Invalid City
            </div>
        );
    }

    return (
        <>
            <AnnouncementBar />
            <Navbar />

          {/* HERO SECTION - Fully Responsive */}
<section className="w-full mt-20">

{/* Desktop & Tablet Layout */}
<div className="hidden md:flex relative w-full h-[90vh] overflow-hidden">

  {/* BACKGROUND IMAGE RIGHT SIDE */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src={data.image}
      alt={data.city}
      fill
      priority
      className="object-cover object-right brightness-95"
    />
  </div>

  {/* LEFT CONTENT BOX */}
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="
      absolute top-[20%] left-[6%]
      bg-white/90 backdrop-blur-md
      shadow-2xl rounded-2xl
      p-10
      max-w-lg
      border border-white/70
      z-20
    "
  >
    <h1 className="text-4xl font-extrabold text-[#005f5e] leading-snug">
      {data.title} <br /> IN {data.city}
    </h1>

    <ul className="mt-5 space-y-3 text-gray-700 font-medium">
      {data.bulletPoints.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-[#d76c24] text-xl">•</span>
          {item}
        </li>
      ))}
    </ul>

    {/* Buttons */}
    <div className="flex gap-4 mt-7">
      <a
        href="tel:+917303771900"
        className="bg-[#d76c24] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#bd591c] transition"
      >
        Call Now
      </a>

      <a
        href="https://wa.me/7303771900"
        target="_blank"
        className="bg-[#0a6664] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#084d4b] transition"
      >
        WhatsApp
      </a>
    </div>
  </motion.div>
</div>


{/* MOBILE LAYOUT */}
<div className="md:hidden flex flex-col w-full">

  {/* Background Image */}
  <div className="relative w-full h-[300px]">
    <Image
      src={data.image}
      fill
      alt={data.city}
      className="object-cover object-center brightness-90"
    />
  </div>

  {/* CONTENT BOX */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="p-6 bg-white/95 shadow-xl rounded-2xl mx-4 -mt-12 relative z-10"
  >
    <h1 className="text-3xl font-extrabold text-[#005f5e] leading-snug text-center">
      {data.title}
      <br />
      IN {data.city}
    </h1>

    <ul className="mt-5 space-y-2 text-gray-700 font-medium">
      {data.bulletPoints.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-[#d76c24] text-xl">•</span>
          {item}
        </li>
      ))}
    </ul>

    {/* Buttons */}
    <div className="flex flex-col gap-4 mt-7">
      <a
        href="tel:+917303771900"
        className="bg-[#d76c24] text-white px-6 py-3 rounded-full font-semibold text-center"
      >
        Call Now
      </a>

      <a
        href="https://wa.me/7303771900"
        target="_blank"
        className="bg-[#0a6664] text-white px-6 py-3 rounded-full font-semibold text-center"
      >
        WhatsApp
      </a>
    </div>
  </motion.div>

</div>
</section>
<DoctorsCarousel/>
            <WhyAboutSection/>
            <BookAppointment />
            <EnquirySection />
            <Footer />
        </>
    );
}
