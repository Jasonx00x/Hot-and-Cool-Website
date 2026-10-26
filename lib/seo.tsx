import type { Metadata } from "next";
import { site } from "@/data/site";

export const businessId = `${site.url}/#business`;

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${site.url}${item.path}` })) };
}

export function metadata(title: string, description: string, path = ""): Metadata {
  const url = `${site.url}${path}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, siteName: site.name, type: "website" }, twitter: { card: "summary_large_image", title, description } };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
