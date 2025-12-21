import { ServiceClient } from "../components/ServiceClient";
import { servicesContent } from "../content";

export async function generateMetadata({ params }) {
  const resolvedParams = await params; // 🔥 REQUIRED IN NEXT.JS 15
  const rawSlug = resolvedParams.slug;

  const slugKey = rawSlug?.toLowerCase().trim().replace(/\/$/, "");
  const service = servicesContent[slugKey];

  console.log("🔹 Service SEO slug:", slugKey);

  if (!service) {
    return {
      title: "Medical Services | Quick Home Doctor",
      description:
        "Professional medical services delivered at home by Quick Home Doctor.",
      robots: "noindex",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://quickhomedoctor.com/services/${slugKey}`,
    },
    robots: "index, follow",
  };
}

// 🔥 MUST be async
export default async function Page({ params }) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug;

  const slugKey = rawSlug?.toLowerCase().trim().replace(/\/$/, "");

  return <ServiceClient slug={slugKey} />;
}
