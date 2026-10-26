import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import { CTA, Eyebrow } from "@/components/sections";
import { ContentSections } from "@/components/content-sections";
import { FAQSection } from "@/components/faq";
import { areaBySlug, serviceAreas } from "@/data/serviceAreas";
import { areaContent } from "@/data/serviceContent";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import type { FAQ } from "@/data/faqs";
import { metadata as createMetadata, JsonLd, businessId, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/data/site";

export const dynamicParams = false;
export function generateStaticParams() { return serviceAreas.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = areaBySlug[slug];
  const content = areaContent[slug];
  return area ? createMetadata(content?.title ?? area.title, content?.description ?? area.description, `/service-areas/${slug}`) : {};
}

export default async function Area({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areaBySlug[slug];
  if (!area) notFound();
  const content = areaContent[slug];
  const project = projects.find((item) => item.slug === content?.projectSlug);
  const faqs: FAQ[] = [
    { question: `What HVAC services are available in ${area.name}?`, answer: `Hot & Cool Services provides heating and cooling repair, installation, maintenance, water-heater service, duct cleaning, and property HVAC support in and around ${area.name}.` },
    { question: `Do you work with apartments and businesses in ${area.name}?`, answer: "Yes. We serve homeowners, apartment communities, property managers, offices, businesses, and other managed properties." },
    { question: "How do I confirm service for my exact address?", answer: "Call 703-863-1011 with the property address and service need. Current availability depends on location, schedule, and the scope of work." },
    { question: "Can I request urgent heating or cooling help?", answer: "Yes. Call directly and explain the symptoms, property type, and who is affected so the team can discuss the fastest available next step." }
  ];
  return <>
    <section className="page-hero"><div className="container">
      <div className="breadcrumbs"><Link href="/">Home</Link> / Service Areas / {area.name}</div>
      <Eyebrow>Local heating & cooling service</Eyebrow><h1>{content?.title ?? area.title}</h1><p>{content?.description ?? area.description}</p>
      <div className="hero-actions"><Link className="btn btn-red" href="/contact">Request service in {area.name}</Link><a className="btn btn-outline" href={site.phoneHref}>Call {site.phone}</a></div>
    </div></section>
    <section className="section"><div className="container content-grid"><article className="prose">
      <Eyebrow>Complete comfort support</Eyebrow>
      {content ? <ContentSections sections={content.sections}/> : <><h2>Professional service for every type of property in {area.name}.</h2><p>Hot & Cool Services supports homeowners, apartment communities, managed properties, and local businesses with responsive repair, replacement, and maintenance.</p></>}
      {project && <ContentSections sections={[{ heading: `Local property experience: ${project.name}`, paragraphs: [project.serviceSummary], links: [{ title: `See our ${project.name} project in ${project.location}`, href: `/projects/${project.slug}` }] }]}/>}
      <h2>Explore services in {area.name}</h2>
      <div className="benefit-grid">{services.map((service) => <Link className="benefit" href={`/services/${service.slug}`} key={service.slug}>{service.title}</Link>)}</div>
      <h3>Communities we serve in and around {area.name}</h3><ul className="check-list">{area.neighborhoods.map((name) => <li key={name}><Check size={18}/>{name}</li>)}</ul>
      <p>Service availability varies by schedule and project scope. Call to confirm the fastest appointment for your address.</p>
      {!content && <><h3>Local service for different property needs</h3><p>Homeowners may need a single repair or planned replacement, while apartment and commercial properties often require access coordination, communication with a designated contact, and service across more than one system. We adapt the service process to the property.</p></>}
    </article><aside><div className="sidebar-card"><Eyebrow>Local service</Eyebrow><h3>Request HVAC service in {area.name}</h3><p>Tell us what is happening and we will help you determine the next step.</p><a className="btn btn-red" href={site.phoneHref}>{site.phone}</a><Link className="btn" href="/contact">Request online</Link></div></aside></div></section>
    <FAQSection items={faqs} title={`HVAC questions in ${area.name}`}/><CTA dark/>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", "@id": `${site.url}/service-areas/${slug}#service`, url: `${site.url}/service-areas/${slug}`, name: content?.title ?? area.title, description: content?.description ?? area.description, provider: { "@id": businessId }, areaServed: area.name }}/>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: area.name, path: `/service-areas/${slug}` }])}/>
  </>;
}
