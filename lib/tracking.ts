type ConversionEvent = "phone_click" | "generate_lead";
type ConversionParams = { contact_method: "phone" | "form"; form_name?: "service-request" };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(event: ConversionEvent, params: ConversionParams) {
  // Only category data is sent. Form values, phone numbers, and URL queries are excluded.
  // Tracking must never interfere with calling or with a successful service request.
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", event, { ...params, page_path: window.location.pathname });
    }
  } catch {
    // Analytics can be unavailable when blocked by the visitor's browser.
  }
}
