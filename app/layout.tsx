import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";
import { JsonLd } from "@/lib/seo";
import { Analytics } from "@/components/analytics";
import "./globals.css";

export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: "Hot & Cool Services | HVAC in Northern Virginia & DC", template: "%s | Hot & Cool Services" }, description: "Professional HVAC repair, installation, maintenance, water heater, and duct services across Northern Virginia, Maryland, and Washington, DC." };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader/><main id="main">{children}</main><SiteFooter/><a className="mobile-call" href={site.phoneHref}><span>Call now</span>{site.phone}</a><Analytics/><JsonLd data={{ "@context": "https://schema.org", "@type": "HVACBusiness", name: site.name, url: site.url, telephone: "+1-703-863-1011", areaServed: ["Northern Virginia", "Manassas, VA", "Washington, DC", "Maryland"], address: { "@type": "PostalAddress", addressLocality: "Manassas", addressRegion: "VA", addressCountry: "US" } }}/></body></html> }
