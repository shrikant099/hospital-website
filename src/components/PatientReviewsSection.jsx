import { reviews } from "@/data/homePageData";


function StarRating({ count = 5 }) {
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  }
  
  // cityName = "Delhi NCR" default, changes on city pages
export default function PatientReviewsSection({ cityName = "Delhi NCR" }) {
    return (
      <section className="w-full bg-white py-15 px-4" id="patient-reviews">
        <div className="max-w-6xl mx-auto">
   
          {/* ── Header ── */}
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-widest text-brand-primary uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              Patient Reviews
            </span>
   
            {/* H2 — dynamic city name for SEO */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              What Patients Are Saying
              <span className="text-brand-primary">{cityName}</span>
            </h3>
   
            {/* Social proof subtext */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-gray-500 text-sm sm:text-base">
                Real experiences from real families.
              </span>
              <span className="flex items-center gap-1 font-semibold text-gray-800 text-sm sm:text-base">
                4.8
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                on Google
              </span>
              <span className="text-gray-400 text-sm">(6000+ patients)</span>
            </div>
          </div>
   
          {/* ── Review Cards ── */}
          {/* Mobile: 1 col | sm: 2 cols | lg: 3 cols */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 hover:shadow-md hover:border-blue-100 transition-all duration-200"
              >
                {/* Stars */}
                <StarRating count={review.rating} />
   
                {/* Review text */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic flex-1">
                  "{review.text}"
                </p>
   
                {/* Reviewer info */}
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.city}</p>
                  </div>
                  {/* Verified badge */}
                  <div className="ml-auto flex items-center gap-1 text-green-600">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>   
        </div>
      </section>
    );
  }