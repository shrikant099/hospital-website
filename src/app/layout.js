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
  title: "Quick Home Doctor",
  description: "Quick Home Doctor",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* CALL BUTTON */}
        <a
          href="tel:+7303771900"
          className="call-float"
        >
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
