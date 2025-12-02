"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomeVisitsOpen, setIsHomeVisitsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/about" },

    {
      name: "Home Visits",
      type: "home",
      subItems: [
        { name: "Delhi", href: "/home-visits/delhi" },
        { name: "Delhi NCR", href: "/home-visits/delhiNcr" },
        { name: "Gurugram", href: "/home-visits/gurugram" },
        { name: "Noida", href: "/home-visits/noida" },
        { name: "Gajiabad", href: "/home-visits/gajiabad" },
      ],
    },


    { name: "Our Doctors", href: "/our-doctors" },
    {
      name: "Services",
      type: "services",
      subItems: [
        { name: "Home Care Services", href: "/services/home-care" },
        {
          name: "Critical Care / Specialized",
          href: "/services/critical-care",
        },
        { name: "Diagnostics & Monitoring", href: "/services/diagnostics" },
        { name: "Other Services", href: "/services" },
      ],
    },
    { name: "Privacy & Policy", href: "/privacy-policy" },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.25 } },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const subMenuVariants = {
    closed: { opacity: 0, y: -8, height: 0, transition: { duration: 0.25 } },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <>
      <AnnouncementBar />

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300 ease-out border-b",
          isScrolled
            ? "top-8 sm:top-10 md:top-12 bg-white/80 backdrop-blur-md shadow-sm border-gray-200/60"
            : "top-8 sm:top-10 md:top-12 bg-white border-gray-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative mr-2 mt-1 w-[50px] h-[50px] rounded sm:w-11 sm:h-11 md:w-14 md:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md border border-gray-100"
              >
                <img
                  src="/logo.png"
                  className="w-[40px] h-[40px] object-contain"
                  alt="QuickHomeDoctor Logo"
                />
              </motion.div>
              <div>
                <h1 className="text-gray-900 font-bold text-xs sm:text-sm md:text-xl leading-tight">
                  QuickHomeDoctor
                </h1>
                <p className="text-gray-500 font-medium text-[8px] sm:text-[10px] md:text-xs leading-tight">
                  Expert doctor at home in 15 min
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <button className="flex font-semibold items-center gap-1 px-4 py-3 text-gray-700 hover:text-gray-900 transition">
                      {item.name}
                      <ChevronDown className="w-4 h-4 mt-[2px] group-hover:rotate-180 transition" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-3 font-semibold text-gray-700 hover:text-gray-900 transition"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.subItems && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="
      absolute top-full left-0 font-semibold w-60 bg-white rounded-2xl
      shadow-xl border border-gray-100
      opacity-0 invisible translate-y-3
      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      transition-all duration-300
    "
                    >
                      <div className="p-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
          className="overflow-hidden lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 px-3 py-2 space-y-1"
        >
          {navItems.map((item) => {
            const isOpen =
              item.type === "home"
                ? isHomeVisitsOpen
                : item.type === "services"
                  ? isServicesOpen
                  : false;

            return (
              <div key={item.name}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => {
                        if (item.type === "home")
                          setIsHomeVisitsOpen(!isHomeVisitsOpen);
                        if (item.type === "services")
                          setIsServicesOpen(!isServicesOpen);
                      }}
                      className="w-full flex items-center justify-between px-3 py-3 text-gray-700 font-medium text-base"
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "closed"}
                      variants={subMenuVariants}
                      className="overflow-hidden pl-4 border-l border-gray-200 space-y-2"
                    >
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-2 py-2 text-gray-500 hover:text-gray-900 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-3 text-gray-700 font-medium hover:text-gray-900 text-base"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </motion.div>
      </motion.nav>
    </>
  );
}
