"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LatestBlogs() {
  const blogs = [
    {
      category: "Health Care",
      title:
        "Foot Care Basics for Elderly Diabetics: A Daily Checklist for Caregivers",
      author: "Admin",
      date: "19 November 2025",
      description:
        "Daily foot care tips for elderly diabetics. A simple checklist for caregivers to prevent complications.",
      image: "/1.png",
    },
    {
      category: "Health Care",
      title:
        "Recognizing Warning Signs of Heart Issues in the Elderly: When to Call a Doctor",
      author: "Admin",
      date: "27 October 2025",
      description:
        "Learn to identify early signs of heart issues in seniors and know exactly when a doctor's care is needed.",
      image: "/2.png",
    },
    {
      category: "Health Care",
      title:
        "Soothing Senior Coughs & Colds: Safe Home Remedies Your Parents Can Try",
      author: "Admin",
      date: "30 September 2025",
      description:
        "Ease your parents’ coughs and colds with these safe home remedies made specially for seniors.",
      image: "/3.png",
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a6664] tracking-wide">
            LATEST BLOG POSTS
          </h2>

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
                <p className="text-gray-600 text-sm mt-3">
                  {blog.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
