"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocationDetect } from "@/hooks/useLocationDetect";
import { MapPin, X, AlertCircle, Navigation } from "lucide-react";

export default function LocationHandler() {
  const { status, detectedSlug } = useLocationDetect();
  const router = useRouter();
  const [showDeniedPopup, setShowDeniedPopup] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  // AUTO REDIRECT — city detect hote hi
  useEffect(() => {
    if (status === "granted" && detectedSlug) {
      setRedirecting(true);
      // Slight delay for better UX (instant feel nahi ata kabhi kabhi)
      const timer = setTimeout(() => {
        router.push(`/${detectedSlug}`);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [status, detectedSlug, router]);

  // DENIED POPUP — delay ke baad dikhao (page load ke saath clash na ho)
// DENIED POPUP — delay ke baad dikhao
useEffect(() => {
    if (status === "denied") {
      // Check karo pehle is session mein dikhaya tha kya
      const alreadyShown = sessionStorage.getItem("locationPopupShown");
      if (alreadyShown) return; // Pehle dikha chuka hai — skip
  
      const timer = setTimeout(() => {
        setShowDeniedPopup(true);
        sessionStorage.setItem("locationPopupShown", "true"); // Mark karo
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  // Redirecting toast
  if (redirecting) {
    return (
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 bg-white border border-green-200 shadow-lg rounded-2xl px-5 py-3 flex items-center gap-3 animate-fade-in">
        <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm font-medium text-gray-700">
          Redirecting to your city...
        </span>
      </div>
    );
  }

  // Denied popup
  if (showDeniedPopup) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Location access denied"
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      >
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
          {/* Top accent bar */}
          <div className="h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />

          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-base leading-tight">
                    Enable Location for Better Experience
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    We'll show doctors near you instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDeniedPopup(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mt-1 -mr-1"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Info box */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5 flex gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">
                Location access is blocked. To enable it, click the 🔒 lock icon
                in your browser's address bar → Site settings → Allow Location.
              </p>
            </div>

            {/* Manual city select */}
            <p className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-wide">
              Or select your city manually
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                { label: "Delhi", slug: "delhi" },
                { label: "Noida", slug: "noida" },
                { label: "Gurgaon", slug: "gurgaon" },
                { label: "Ghaziabad", slug: "ghaziabad" },,
                { label: "Delhi NCR", slug: "delhi-ncr" },
              ].map(({ label, slug }) => (
                <button
                  key={slug}
                  onClick={() => router.push(`/${slug}`)}
                  className="flex cursor-pointer items-center justify-between px-4 py-3 border border-gray-200 rounded-xl hover:border-brand-primary hover:bg-blue-50 transition-all duration-200 group"
                >
                  <span className="text-sm font-semibold text-gray-800">
                    {label}
                  </span>
                  <Navigation className="w-3.5 h-3.5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowDeniedPopup(false)}
              className="w-full text-center text-xs text-gray-400 hover:text-gray-600 py-1 transition-colors"
            >
              Continue without location
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}