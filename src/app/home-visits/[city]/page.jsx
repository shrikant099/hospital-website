import { cityContent } from "../content";
import CityClient from "../components/CityClient";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const rawCity = resolvedParams.city;

  const cityKey = rawCity?.toLowerCase().trim().replace(/\/$/, "");
  const data = cityContent[cityKey];

  console.log("🔹 generateMetadata cityKey:", cityKey);

  if (!data) {
    return {
      title: "Doctor Home Visit | Quick Home Doctor",
      description:
        "Doctor and nurse home visit services available across Delhi NCR.",
      robots: "noindex",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://quickhomedoctor.com/home-visits/${cityKey}`,
    },
    robots: "index, follow",
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const rawCity = resolvedParams.city;

  const cityKey = rawCity?.toLowerCase().trim().replace(/\/$/, "");

  return <CityClient city={cityKey} />;
}
