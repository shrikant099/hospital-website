"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LatestBlogs() {
  const blogs = [
    {
      category: "Home Healthcare",
      title: "Doctor at Home in Delhi NCR: When to Call & What to Expect",
      author: "QuickHomeDoctor Team",
      date: "15 March 2026",
      description:
        "Not sure when to call a doctor home? This guide explains the right time to book a home visit doctor in Delhi NCR — symptoms, process and what to expect.",
      image: "/1.png",
      slug: "doctor-at-home-delhi-ncr-guide",
    },
    {
      category: "Elderly Care",
      title: "Elderly Care at Home in Delhi: Complete Guide for Families",
      author: "QuickHomeDoctor Team",
      date: "28 February 2026",
      description:
        "Planning home care for your elderly parents in Delhi? Learn about caretaker services, nurse at home, doctor visits and what to look for when hiring home healthcare.",
      image: "/2.png",
      slug: "elderly-care-at-home-delhi-guide",
    },
    {
      category: "Home Healthcare",
      title:
        "Nurse at Home vs Hospital: Which Is Better for Post-Surgery Recovery?",
      author: "QuickHomeDoctor Team",
      date: "10 February 2026",
      description:
        "Recovering after surgery? Know when a nurse at home in Delhi NCR is better than staying in hospital — cost, comfort, and care quality compared.",
      image: "/3.png",
      slug: "nurse-at-home-vs-hospital-recovery",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0a6664] tracking-wide">
            LATEST BLOG POSTS
          </h3>

          <div className="flex justify-center mt-2">
            <span className="w-12 h-1 bg-gradient-to-r from-[#d76c24] to-[#ffb070] rounded"></span>
          </div>
        </motion.div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white border border-gray-100 shadow-md hover:shadow-xl rounded-3xl overflow-hidden transition-all"
            >
              {/* IMAGE */}
              <div className="relative w-full h-56">
                <Image
                  quality={70}
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                {/* CATEGORY TAG */}
                <span className="inline-block bg-[#e4f5f5] text-[#0a6664] text-xs font-semibold px-4 py-1 rounded-full mb-3">
                  {blog.category}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-gray-800 leading-snug hover:text-[#0a6664] cursor-pointer transition">
                  {blog.title}
                </h3>

                {/* META */}
                <p className="text-gray-500 text-sm mt-2">
                  {blog.author} &nbsp; | &nbsp; {blog.date}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm mt-3">{blog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
