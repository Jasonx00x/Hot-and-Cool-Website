import Script from "next/script";
import { site } from "@/data/site";

export function Analytics() {
  // Netlify previews must not contribute test visits to the production property.
  if (process.env.CONTEXT && process.env.CONTEXT !== "production") return null;
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || site.analyticsMeasurementId;
  if (!/^G-[A-Z0-9]+$/.test(id)) return null;
  return <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive"/>
    <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}');`}</Script>
  </>;
}
