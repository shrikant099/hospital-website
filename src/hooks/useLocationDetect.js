"use client";
import { useEffect, useState } from "react";
import { detectCitySlug } from "@/lib/locationUtils";

export function useLocationDetect() {
  const [status, setStatus] = useState("idle");
  const [detectedSlug, setDetectedSlug] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("unsupported");
      return;
    }

    const startDetection = async () => {
      try {
        const result = await navigator.permissions.query({ name: "geolocation" });
        console.log("[LocationDetect] Permission state:", result.state);

        if (result.state === "denied") {
          // Already blocked — directly show denied popup
          setStatus("denied");
          return;
        }

        // "granted" ya "prompt" dono mein fetchLocation karo
        fetchLocation();

        // Live listen karo agar user settings se change kare
        result.onchange = () => {
          console.log("[LocationDetect] Permission changed to:", result.state);
          if (result.state === "granted") fetchLocation();
          else if (result.state === "denied") setStatus("denied");
        };

      } catch (err) {
        // Kuch browsers permissions API support nahi karte (Firefox)
        console.log("[LocationDetect] Permissions API not supported, trying directly");
        fetchLocation();
      }
    };

    startDetection();
  }, []);

  const fetchLocation = () => {
    setStatus("checking");
    console.log("[LocationDetect] Requesting location...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude: lat, longitude: lon } = position.coords;
          console.log("[LocationDetect] Got coords:", lat, lon);

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
          );
          const data = await res.json();
          console.log("[LocationDetect] Nominatim response:", data.address);

          const slug = detectCitySlug(data.address);
          console.log("[LocationDetect] Detected city slug:", slug);

          setDetectedSlug(slug);
          setStatus("granted");
        } catch (err) {
          console.log("[LocationDetect] Reverse geocoding failed:", err);
          setStatus("granted"); // Location mili, city nahi — graceful
        }
      },
      (error) => {
        console.log("[LocationDetect] Location denied/error:", error.message);
        setStatus("denied");
      },
      { timeout: 8000, maximumAge: 300000 }
    );
  };

  return { status, detectedSlug };
}

// ✅ page.jsx mein sirf <LocationHandler /> — baki dono remove
// ✅ useLocationDetect.js updated version se replace
// ✅ locationUtils.js exist karta hai /lib/ mein
// ✅ Browser console open rakh — logs se pata chalega kahan ruk raha hai