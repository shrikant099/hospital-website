"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";

export default function ServiceHeroSection({ city, service }) {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-white pt-14 pb-0 px-4 sm:px-6">
        <div className="max-w-[1160px] mt-[75px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-1 lg:gap-16 items-start">

          {/* ── LEFT: Content ─────────────────────────────────────────────── */}
          <div className="pt-4 pb-10 lg:pb-16">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-gray-400 text-xs mb-6 flex-wrap">
              <Link href="/" className="hover:text-gray-700 font-bold transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/${city.slug}`} className="hover:text-gray-700 font-bold transition-colors">{city.name}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-600 font-bold">{service.name}</span>
            </nav>

            {/* H1 — italic teal city name like PDF */}
            <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl md:text-[2.8rem] leading-[1.15] mb-4">
              {service.name} in{" "}
              <span className="italic text-[#0a7075]">{city.name}</span>
              {" – "}
              24/7 Home Visit in{" "}
              <span className="italic text-[#0a7075]">
                {city.avgArrivalTime ?? "15–30 Minutes"}
              </span>
            </h1>

            {/* Sub */}
            <p className="text-gray-600 text-base sm:text-[1.05rem] max-w-[540px] leading-relaxed mb-8">
  {(service.heroDesc ?? "")
    .replace("{city}", city.name)
    .replace("{trafficNote}", city.trafficNote ?? "city traffic")}
</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="tel:+917303771900"
                className="inline-flex items-center gap-2 bg-[#c26418] hover:bg-[#a8531a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Book Home Visit
              </a>
              <a
                href="tel:+917303771900"
                className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold text-sm sm:text-base px-7 py-3.5 rounded-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

          </div>

          {/* ── RIGHT: Form — hidden on mobile, shown on desktop ──────────── */}
          <div className="lg:block lg:self-start lg:sticky lg:top-[100px] mt-8 pb-0">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl px-6 pt-6 pb-7">

              <h2 className="text-lg font-bold text-gray-900 mb-0.5">
                Book a {service.name}
              </h2>
              <p className="text-gray-400 text-xs mb-5">Usually responds within 2 minutes</p>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:border-[#c26418] transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">
                  Phone Number
                </label>
                <div className="flex items-center border border-gray-200 rounded-lg bg-white focus-within:border-[#c26418] transition-colors overflow-hidden">
                  <span className="px-3 text-sm text-gray-400 border-r border-gray-200 py-2.5 select-none">+91</span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/, ""))}
                    className="flex-1 px-3 py-2.5 bg-transparent text-sm text-gray-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Button */}
              <button className="w-full cursor-pointer bg-[#c26418] hover:bg-[#a8531a] text-white font-bold text-sm py-3.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md">
                Submit
              </button>

              <p className="text-center text-[11px] text-gray-400 mt-3">
                No spam. No hidden charges. 100% confidential.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── DIVIDER ──────────────────────────────────────────────────────── */}
      <div className="border-b border-gray-100" />
    </>
  );
}