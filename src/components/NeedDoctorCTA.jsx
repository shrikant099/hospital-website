// Reusable component — homepage, city pages, service pages sab jagah use kar sakte ho
// cityName prop optional hai — default "Your Location"

export default function NeedDoctorCTA({ cityName = "", areaName = "" }) {
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white px-6 py-10 sm:px-10 sm:py-12 text-center">
          {/* Background decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary rounded-full opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-primary rounded-full opacity-40" />

          {/* Content */}
          <div className="relative z-10">
            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
              Need a Doctor at{" "}
              <span className="text-brand-primary">
                {cityName ? cityName : areaName}?
              </span>
            </h3>

            {/* Subtext */}
            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Our certified MBBS & MD doctors are ready to visit your home in{" "}
              {cityName}. Available 24/7 including nights, weekends &
              holidays.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 justify-center flex-wrap">
              <a
                href="tel:+917303771900"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary text-white font-bold rounded-full text-sm sm:text-base shadow-lg shadow-red-100 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                </svg>
                Call Us Now
              </a>

              <a
                href="https://wa.me/917303771900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-full text-sm sm:text-base border border-gray-200 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.121 1.523 5.854L.057 23.215a.75.75 0 00.92.92l5.361-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.497-5.207-1.367l-.374-.216-3.876 1.059 1.059-3.876-.216-.374A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Chat With Us
              </a>
            </div>
          </div>
        </div>

        <p
          className="
text-gray-900 text-2xl mt-4
  "
        >
          Need a Doctor & Nurse at{" "}
          <span
            className="
text-brand-primary font-bold
  "
          >
            {cityName ? cityName : areaName}
          </span>
          ?
        </p>
      </div>
    </section>
  );
}
