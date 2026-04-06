import { reasons } from "@/data/homePageData";
import Link from "next/link";

export default function WhyUsSection({cityName = "QuickHomeDoctor"}) {
    return (
      <section className="w-full bg-gray-50 py-14 px-4" id="why-us">
        <div className="max-w-6xl mx-auto">
   
          {/* ── Header ── */}
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest text-brand-primary uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              Why Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Why 6000+ Families Trust{" "}
              <span className="text-brand-primary">{cityName}</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              Not generic claims — every point has a number or a proof behind it.
            </p>
          </div>
   
          {/* ── Cards Grid ── */}
          {/* Mobile: 1 col | sm: 2 cols | lg: 3 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all duration-200 flex items-start gap-4"
              >
                {/* Green check icon */}
                <div className="flex-shrink-0 w-9 h-9 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
   
                {/* Text */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 leading-snug group-hover:text-brand-primary transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
   
          {/* ── Bottom CTA ── */}
          <div className="mt-10 text-center">
            <Link
              href="tel:+917303771900"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-secondary hover:bg-brand-secondary text-white font-bold rounded-xl text-sm sm:text-base shadow-lg shadow-blue-100 transition-all duration-200 hover:scale-105 active:scale-95"
            >
               Book a Doctor Now
            </Link>
            <p className="text-gray-400 text-xs mt-3">
              Responds in under 2 minutes · Available 24/7
            </p>
          </div>
   
        </div>
      </section>
    );
  }
   