import dynamicImport from "next/dynamic";
export const dynamic = "force-static";
export const revalidate = 86400;
export const dynamicParams = false;
// Dynamically imported components that are heavy or have client-side interactivity
const DoctorsCarousel = dynamicImport(() => import("@/components/DoctorsCarousel"));
const FAQSection = dynamicImport(() => import("@/components/FaqSection"));
const GoalsSection = dynamicImport(() => import("@/components/GoalsSection"));
const Hero = dynamicImport(() => import("@/components/Hero"));
const LatestBlogs = dynamicImport(() => import("@/components/LatestBlog"));
const NeedDoctorCTA = dynamicImport(() => import("@/components/NeedDoctorCTA"));
const PatientReviewsSection = dynamicImport(() =>
  import("@/components/PatientReviewsSection")
);
const ServiceAreasSection = dynamicImport(() =>
  import("@/components/ServiceAreasSection")
);
const ServicesSection = dynamicImport(() => import("@/components/ServicesSection"));
const StepsSection = dynamicImport(() => import("@/components/StepSection"));
const WhyUsSection = dynamicImport(() => import("@/components/WhyUsSection"));

// Static components that are not heavy or do not have client-side interactivity can be imported normally
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { seoCities } from "@/data/seoCities";
import { ArrowUpRightFromSquare } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
const LocalAreaSection = dynamicImport(() => import("./components/LocalAreaSection"));

// ─── Static Params (SSG — pre-renders all 5 city pages at build time) ────────
export async function generateStaticParams() {
  return seoCities.map((city) => ({ city: city.slug }));
}

// Dynamic meta data generation based on city slug
export async function generateMetadata({ params }) {
  const { city: citySlug } = await params;
  const cityData = seoCities.find((city) => city.slug === citySlug);

  if (!cityData) {
    return {
      title: "Page Not Found | QuickHomeDoctor",
      description: "The page you are looking for does not exist.",
    };
  }

  const canonicalUrl = `https://quickhomedoctor.com/${cityData.slug}`;
  return {
    title: cityData.metaTitle,
    description: cityData.metaDesc,
    keywords: [
      `doctor at home ${cityData.name}`,
      `home doctor ${cityData.name}`,
      `doctor home visit ${cityData.name}`,
      `MBBS doctor at home ${cityData.name}`,
      `24/7 doctor ${cityData.name}`,
      `emergency doctor ${cityData.name}`,
      `online doctor consultation ${cityData.name}`,
      ...cityData.areas.map((area) => `doctor at home ${area}`),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: cityData.metaTitle,
      description: cityData.metaDesc,
      url: canonicalUrl,
      siteName: "QuickHomeDoctor",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cityData.metaTitle,
      description: cityData.metaDesc,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
function CityJsonLd({ cityData }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `QuickHomeDoctor — ${cityData.name}`,
    description: cityData.description,
    url: `https://quickhomedoctor.com/${cityData.slug}`,
    telephone: "+91-XXXXXXXXXX", // ← replace with real number
    areaServed: cityData.areas.map((area) => ({
      "@type": "Place",
      name: `${area}, ${cityData.name}`,
    })),
    medicalSpecialty: "General Practice",
    availableService: {
      "@type": "MedicalTherapy",
      name: "Doctor Home Visit",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://quickhomedoctor.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cityData.name,
        item: `https://quickhomedoctor.com/${cityData.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function CityPage({ params }) {
  const { city: citySlug } = await params;
  const cityData = seoCities.find((c) => c.slug === citySlug);
  // 404 for any slug not in seoCities
  if (!cityData) notFound();
  return (
    <main className="min-h-screen bg-white">
      {/* Structured data — injected in <head> via Next.js */}
      <CityJsonLd cityData={cityData} />

      <Navbar />

      {/* Hero — pass city-specific heading/subheading if your Hero supports props,
          otherwise it falls back to its own defaults */}
      <Hero
        cityName={cityData.name}
        heading={cityData.heroHeading}
        subheading={cityData.heroSubheading}
      />

      {/* Services grid — links go to /[city]/[service] */}
      <ServicesSection cityName={cityData.name} citySlug={cityData.slug} />

    
      <StepsSection />
      <LocalAreaSection currentCity={cityData.name} />
      <WhyUsSection cityName={cityData.name} />
      <DoctorsCarousel />

      {/* View all doctors CTA */}
      <div className="max-w-6xl mb-20 mx-auto px-4 py-2">
        <div className="flex justify-center">
          <Link
            href="/our-doctors"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary text-white font-bold rounded-xl text-sm sm:text-base shadow-lg shadow-blue-100 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            View All Doctors
            <ArrowUpRightFromSquare className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <PatientReviewsSection cityName={cityData.name} />
      <GoalsSection />

      {/* FAQ — pass city-specific FAQs */}
      <FAQSection
        citySlug={cityData.slug}
        cityName={cityData.name}
        faqs={cityData.faqs}
      />

      <LatestBlogs />

        {/* Areas covered in this city */}
        <ServiceAreasSection currentCity={cityData.name} />

      <NeedDoctorCTA cityName={cityData.name} />
      <Footer />
    </main>
  );
}
