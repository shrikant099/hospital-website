import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://quickhomedoctor.com"),

  title: "Home Doctor & Nurse Visit | Delhi, Noida, Ghaziabad | Quick Home Doctor",
  description:
    "Doctor and nurse home visit within 30 minutes in Delhi NCR. 24/7 medical care at home.",

  // ✅ ROBOTS (AUDIT PASSED)
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
    maxVideoPreview: -1,
  },

  // ✅ CANONICAL (IMPORTANT FIX)
  alternates: {
    canonical: "https://quickhomedoctor.com",
  },

  // ✅ OPEN GRAPH (FIXED)
  openGraph: {
    title: "Quick Home Doctor – Doctor & Nurse Home Visit in Delhi NCR",
    description:
      "24/7 Doctor and Nurse Home Visit Service in Delhi NCR. Fast, reliable and professional medical care at home.",
    url: "https://quickhomedoctor.com",
    siteName: "Quick Home Doctor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quick Home Doctor – Doctor & Nurse Home Visit",
      },
    ],
    type: "website",
  },

  // ✅ TWITTER CARD
  twitter: {
    card: "summary_large_image",
    title: "Quick Home Doctor – Home Visit Doctor & Nurse",
    description:
      "24/7 Doctor & Nurse Home Visit in Delhi NCR. Trusted medical care delivered at home.",
    images: ["/og-image.png"],
  },

  // ✅ ICONS
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
        {/* Google tag manager */}


        {/* ================= GOOGLE TAG MANAGER ================= */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5HPQH6V5');
            `,
          }}
        />
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

        {/* LOCAL BUSINESS SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "Quick Home Doctor",
              url: "https://quickhomedoctor.com",
              telephone: "+91-7303771900",
              areaServed: "Delhi NCR",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi NCR",
                addressCountry: "IN",
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
        {/* ================= GTM NOSCRIPT ================= */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5HPQH6V5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
