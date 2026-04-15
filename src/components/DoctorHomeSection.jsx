"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const images = [
  "/quickHomeDoctorImage1.jpeg",
  "/quickHomeDoctorImage2.jpeg",
];

export default function DoctorHomeSection() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* LEFT IMAGE CAROUSEL */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[350px] md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
              
              <Image
                key={index}
                src={images[index]}
                alt="Doctor Home Visit Service"
                fill
                className="object-cover animate-fade"
                priority
              />
              
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              24/7 Available to Assist You with Certified Doctor at Home
            </h3>

            <p className="text-gray-600 mb-4">
              At <strong>QuickHomeDoctor</strong>, we believe in caring for
              patients and their health problems where you’re most comfortable:
              at home. We aren't just sending a professional; we’re bringing
              back the era of the family doctor who truly knows you.
            </p>

            <p className="text-gray-600 mb-6">
              From certified doctor consultations and professional nursing to
              solving your health problems without even stepping out of your
              home. Our team doesn't just treat symptoms; we show up with a
              smile and personal attention you simply won't find in a busy
              hospital hallway.
            </p>

            <Link
            href={"/contact-us"}
              onClick={() => router.push("/contact-us")}
              className="bg-brand-secondary text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Get Doctor Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}