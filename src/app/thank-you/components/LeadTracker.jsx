
"use client";

import { useEffect } from "react";

export default function LeadTracker () {
    useEffect(()=> {
        if (!sessionStorage.getItem("lead_tracked")) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "lead_submit",
              page: "thank_you",
            });
            sessionStorage.setItem("lead_tracked", "true");
          }
    },[])

    return null;
}
