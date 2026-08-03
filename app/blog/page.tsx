import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow, CTA } from "@/components/sections";
import { FAQSection } from "@/components/faq";
import { blogFaqs } from "@/data/faqs";
import { blogs } from "@/data/blogs";
import { site } from "@/data/site";
import { JsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "HVAC Blog: Tips for Northern Virginia Homeowners",
  description: "Local HVAC tips, AC troubleshooting, maintenance guidance, and heating advice for homeowners and property teams in Northern Virginia and Washington, DC.",
  keywords: ["HVAC blog Northern Virginia", "HVAC tips", "AC repair advice", "HVAC maintenance Virginia", "heating and cooling tips", "Manassas HVAC"],
  alternates: { canonical: `${site.url}/blog` },
  openGraph: { title: "HVAC Tips for Northern Virginia Homeowners", description: "Practical local guidance for AC repair, heating, maintenance, and year-round comfort.", url: `${site.url}/blog`, siteName: site.name, type: "website", images: [{ url: blogs[0].image, width: 1600, height: 900, alt: blogs[0].imageAlt }] },
  twitter: { card: "summary_large_image", title: "HVAC Tips for Northern Virginia Homeowners", description: "Practical local heating and cooling guidance from Hot & Cool Services.", images: [blogs[0].image] },
};

const topics = [
  ["AC repair", "/services/ac-repair"],
  ["HVAC maintenance", "/services/hvac-maintenance"],
  ["Heating systems", "/services/heating-installation"],
  ["Duct cleaning", "/services/duct-cleaning"],
  ["Property HVAC", "/services/commercial-hvac"],
];

export default function Blog() {
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / HVAC Blog</div><Eyebrow>Northern Virginia HVAC resources</Eyebrow><h1>HVAC tips for a more comfortable, reliable property.</h1><p>Local AC troubleshooting, heating guidance, seasonal maintenance advice, and practical answers for homeowners and property teams across Northern Virginia and Washington, DC.</p></div></section>
    <nav className="blog-topic-nav" aria-label="HVAC topics"><div className="container"><strong>Explore topics</strong>{topics.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div></nav>
    <section className="section section-soft"><div className="container"><div className="section-head"><div><Eyebrow>Latest HVAC guides</Eyebrow><h2>Useful answers for real heating and cooling questions.</h2><p>Each guide explains safe homeowner checks, warning signs, local considerations, and when professional HVAC service is the appropriate next step.</p></div></div><div className="blog-grid blog-index-grid">{blogs.map((post) => <article className="blog-card blog-index-card" key={post.slug}><Link className="blog-card-image" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><Image src={post.image} alt={post.imageAlt} width={900} height={506}/></Link><div className="blog-card-copy"><span className="blog-category">{post.category}</span><time dateTime={post.date}>{new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} • {post.readTime}</time><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.description}</p><Link className="text-link" href={`/blog/${post.slug}`}>Read full guide <ArrowRight size={16}/></Link></div></article>)}</div></div></section>
    <section className="section"><div className="container split"><div><Eyebrow>Local expertise</Eyebrow><h2>Advice grounded in the systems and properties we serve.</h2><p>Hot & Cool Services supports homes, apartment communities, managed properties, and businesses in Manassas, Northern Virginia, Maryland, and Washington, DC. Our resource center focuses on the HVAC questions local customers ask before repair, maintenance, and replacement decisions.</p><p>Use these articles to recognize symptoms and prepare for a service conversation—not to open equipment panels, handle refrigerant, or perform electrical or combustion work.</p></div><div className="sidebar-card"><h3>Call promptly for</h3><ul><li>Burning or gas-like odors</li><li>Water near electrical equipment</li><li>Repeated breaker trips</li><li>Ice on refrigerant lines</li><li>Complete loss of heating or cooling</li></ul><Link className="btn btn-red" href="/contact">Request HVAC service</Link></div></div></section>
    <FAQSection items={blogFaqs} title="Questions about HVAC advice"/>
    <CTA/>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Hot & Cool Services HVAC Blog", description: "Heating and cooling guides for Northern Virginia homeowners and property teams.", url: `${site.url}/blog`, isPartOf: { "@type": "WebSite", name: site.name, url: site.url }, hasPart: blogs.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${site.url}/blog/${post.slug}`, datePublished: post.date, dateModified: post.dateModified })) }}/>
  </>;
}
