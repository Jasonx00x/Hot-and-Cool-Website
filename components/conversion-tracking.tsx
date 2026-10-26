"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/tracking";

export function ConversionTracking() {
  useEffect(() => {
    function trackPhoneClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (link) trackConversion("phone_click", { contact_method: "phone" });
    }
    document.addEventListener("click", trackPhoneClick);
    return () => document.removeEventListener("click", trackPhoneClick);
  }, []);
  return null;
}
