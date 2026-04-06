// src/app/[city]/[area]/doctor-and-nurse-at-home/components/AreaHowToBookSection.jsx
// Usage in page.jsx:
// <AreaHowToBookSection areaName={areaName} cityName={cityData.name} />

// ── Steps data (static) ───────────────────────────────────────────────────────
const STEPS = [
    {
      step: "01",
      title: "Call, WhatsApp, or Book Online",
      description: "Reach us instantly via phone call, WhatsApp message, or our online form — whichever is easiest for you.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: "02",
      title: "Share Your Requirements & Location",
      description: "Tell us your symptoms, the type of care needed, and your exact address in the area.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        </svg>
      ),
    },
    {
      step: "03",
      title: "Verified Doctor & Nurse Assigned Instantly",
      description: "A certified MBBS/MD doctor or trained nurse is assigned to your case within minutes.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
          <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M16 9l1.5 1.5L21 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      step: "04",
      title: "Quick Home Visit Within 15–20 Minutes",
      description: "Your doctor or nurse arrives at your home — no travel, no waiting rooms, real care at your door.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" aria-hidden="true">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];
  
  // ── Component ─────────────────────────────────────────────────────────────────
  export default function AreaHowToBookSection({ areaName, cityName }) {
    return (
      <section
        className="bg-white py-12 px-4 sm:py-16"
        aria-labelledby="how-to-book-heading"
      >
        <div className="max-w-5xl mx-auto">
  
          {/* ── Header ── */}
          <div className="mb-10 sm:mb-12">
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-[var(--brand-primary,#0d6efd)] mb-3">
              Simple 4-Step Process
            </span>
            <h2
              id="how-to-book-heading"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug"
            >
              How to Book a Doctor &amp; Nurse at Home in{" "}
              <span className="text-[var(--brand-primary,#0d6efd)]">{areaName}</span>
              {cityName ? `, ${cityName}` : ""}
            </h2>
            <div className="mt-3 w-14 h-1 rounded-full bg-[var(--brand-primary,#0d6efd)]" />
          </div>
  
          {/* ── Steps ── */}
          <ol className="relative list-none p-0 m-0 space-y-0" role="list">
            {STEPS.map((item, idx) => {
              const isLast = idx === STEPS.length - 1;
              const stepTitle = item.title.replace("{{area.name}}", areaName);
              const stepDesc = item.description.replace("{{area.name}}", areaName);
  
              return (
                <li key={idx} className="relative flex gap-4 sm:gap-6">
  
                  {/* ── Left: number + connector line ── */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* circle */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--brand-primary,#0d6efd)] flex items-center justify-center text-white font-extrabold text-sm sm:text-base shadow-md shadow-blue-200 flex-shrink-0 z-10">
                      {item.step}
                    </div>
                    {/* connector line — hidden on last */}
                    {!isLast && (
                      <div
                        className="w-0.5 flex-1 my-1 bg-gradient-to-b from-[var(--brand-primary,#0d6efd)] to-blue-100"
                        aria-hidden="true"
                      />
                    )}
                  </div>
  
                  {/* ── Right: card ── */}
                  <div
                    className={`flex-1 min-w-0 bg-[#f8faff] border border-gray-100 rounded-2xl p-4 sm:p-5 flex gap-4 items-start ${
                      isLast ? "mb-0" : "mb-4"
                    } hover:shadow-sm transition-shadow duration-200`}
                  >
                    {/* icon bubble */}
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--brand-primary,#0d6efd)]/10 text-[var(--brand-primary,#0d6efd)] flex items-center justify-center"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
  
                    {/* text */}
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-1">
                        {stepTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {stepDesc}
                      </p>
                    </div>
                  </div>
  
                </li>
              );
            })}
          </ol>
  
          {/* ── CTA buttons ── */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--brand-primary,#0d6efd)] text-white font-bold text-sm px-7 py-3 rounded-full shadow-md shadow-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-200"
              aria-label={`Book a home visit in ${areaName}`}
            >
              {/* calendar icon */}
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M6 2a1 1 0 0 0-1 1v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1V3a1 1 0 1 0-2 0v1H7V3a1 1 0 0 0-1-1zM4 8h12v8H4V8z" clipRule="evenodd"/>
              </svg>
              Book Home Visit
            </a>
  
            <a
              href="tel:+917303771900"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-[var(--brand-primary,#0d6efd)] text-[var(--brand-primary,#0d6efd)] font-bold text-sm px-7 py-3 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-200"
              aria-label="Call QuickHomeDoctor now"
            >
              {/* phone icon */}
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <path d="M2 3a2 2 0 0 1 2-2h2.153a2 2 0 0 1 1.94 1.515l.547 2.734a2 2 0 0 1-.45 1.732l-.7.7a11.042 11.042 0 0 0 4.829 4.829l.7-.7a2 2 0 0 1 1.732-.45l2.734.547A2 2 0 0 1 19 13.847V16a2 2 0 0 1-2 2C8.163 18 2 11.837 2 4V3z"/>
              </svg>
              Call Now
            </a>
          </div>
  
        </div>
      </section>
    );
  }