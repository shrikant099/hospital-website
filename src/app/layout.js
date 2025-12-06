import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // ⭐ REQUIRED to remove warning & fix OG image absolute URL
  metadataBase: new URL("https://quickhomedoctor.com"),

  title: "Home Doctor & Nurse Visit | Delhi, Noida, Ghaziabad | Quick Home Doctor",
  description:
    "Doctor and nurse home visit within 30 minutes in Delhi NCR. 24/7 medical care at home.",

  // ⭐ OPEN GRAPH (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "Quick Home Doctor – Doctor & Nurse Home Visit in Delhi NCR",
    description:
      "24/7 Doctor/Nurse Home Visit Service in Delhi, Noida, Ghaziabad. Quick, Reliable & Trusted.",
    url: "https://quickhomedoctor.com",
    siteName: "Quick Home Doctor",
    images: [
      {
        url: "/ogImage.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  // ⭐ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Quick Home Doctor – Home Visit Doctor/Nurse",
    description:
      "24/7 Home Visit Doctors & Nurses in Delhi NCR. Fast, professional medical care.",
    images: ["/ogImage.png"],
  },

  // ⭐ FAVICON / LOGO
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Quick Home Doctor",
              url: "https://quickhomedoctor.com",
              logo: "https://quickhomedoctor.com/logo.ico",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+917303771900",
                contactType: "customer support",
              },
            }),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Quick Home Doctor",
              telephone: "+917303771900",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi NCR",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* CALL BUTTON */}
        <a href="tel:+7303771900" className="call-float">
          <img
            src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
            alt="Call"
          />
        </a>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/7303771900"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
          />
        </a>
        {children}
      </body>
    </html>
  );
}
