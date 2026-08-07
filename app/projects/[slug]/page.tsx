import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Building2, Check, MapPin, Phone, ShieldCheck } from "lucide-react";
import { CTA, Eyebrow } from "@/components/sections";
import { FAQSection } from "@/components/faq";
import { projectBySlug, projects } from "@/data/projects";
import { site } from "@/data/site";
import { JsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) return {};

  const title = `${project.name} HVAC Service Case Study`;
  const description = `See how Hot & Cool Services supports ${project.name} in ${project.location} with organized HVAC service, property coordination, and clear communication.`;
  const url = `${site.url}/projects/${project.slug}`;

  return {
    title,
    description,
    keywords: [project.name, `${project.location} HVAC`, "multifamily HVAC service", "apartment HVAC contractor", "property management HVAC"],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: site.name,
      images: [{ url: project.images[0], width: 1200, height: 800, alt: `${project.name} in ${project.location}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [project.images[0]] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug[slug];
  if (!project) notFound();

  const relatedProjects = projects.filter((candidate) => candidate.slug !== project.slug).slice(0, 3);
  const projectUrl = `${site.url}/projects/${project.slug}`;
  const faqs = [
    {
      question: `How does Hot & Cool Services support ${project.name}?`,
      answer: `${project.serviceSummary} The exact work on any visit depends on the reported issue, equipment condition, approved scope, and access available that day.`,
    },
    {
      question: `How is HVAC service coordinated at ${project.name}?`,
      answer: "We work through the designated property contact to confirm the affected area, resident or building access, urgency, known symptoms, and communication expectations before and after the visit.",
    },
    {
      question: "Can Hot & Cool Services support another apartment or managed property?",
      answer: `Yes. Hot & Cool Services works with apartments, multifamily communities, commercial properties, and property teams across Northern Virginia, Maryland, and Washington, DC. Call ${site.phone} to discuss the property and requested scope.`,
    },
  ];

  return <>
    <section className="page-hero project-detail-hero">
      <div className="container">
        <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/projects">Projects</Link> / {project.name}</div>
        <Eyebrow>{project.type} • {project.location}</Eyebrow>
        <h1>HVAC support for {project.name}.</h1>
        <p>{project.description}</p>
        <div className="hero-actions">
          <Link className="btn btn-red" href="/contact">Discuss a property project <ArrowRight size={18}/></Link>
          <a className="btn btn-outline" href={site.phoneHref}><Phone size={18}/> Call {site.phone}</a>
        </div>
      </div>
    </section>

    <section className="section project-overview-section">
      <div className="container project-detail-layout">
        <article className="project-detail-story">
          <Eyebrow>The property</Eyebrow>
          <h2>A community with its own operational needs.</h2>
          <p className="project-lead">{project.propertySummary}</p>
          <p>Apartment HVAC work affects more than equipment. It can also affect a resident's day, onsite schedules, access planning, and the information a property team needs to keep everyone updated. Our approach accounts for that full service environment.</p>
          <a className="project-source-link" href={project.propertyUrl} target="_blank" rel="noreferrer">View {project.propertySource} <ArrowUpRight size={16}/></a>
        </article>
        <aside className="project-fact-card" aria-label={`${project.name} property facts`}>
          <div className="project-fact-heading"><Building2 size={21}/><div><span>Property profile</span><strong>{project.name}</strong></div></div>
          <div className="project-fact-address"><MapPin size={18}/><span>{project.address}</span></div>
          <dl>{project.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
          {project.management && <a href={project.management.url} target="_blank" rel="noreferrer">Managed by {project.management.name} <ArrowUpRight size={15}/></a>}
        </aside>
      </div>
    </section>

    <section className="project-detail-gallery-section" aria-label={`${project.name} photo gallery`}>
      <div className="container project-detail-gallery">
        {project.images.map((image, index) => <figure key={image}><Image src={image} alt={`${project.name} property view ${index + 1}`} width={1200} height={800} priority={index === 0}/></figure>)}
      </div>
    </section>

    <section className="section section-soft">
      <div className="container project-service-layout">
        <div className="project-service-intro">
          <Eyebrow>How Hot & Cool helps</Eyebrow>
          <h2>Service built around comfort and property coordination.</h2>
          <p>{project.serviceSummary}</p>
        </div>
        <div className="project-support-grid">
          {project.support.map((item) => <div className="project-support-item" key={item}><Check size={19}/><span>{item}</span></div>)}
        </div>
      </div>
    </section>

    <section className="section section-dark project-relationship-section">
      <div className="container project-relationship">
        <ShieldCheck size={38}/>
        <div><Eyebrow>A relationship built through follow-through</Eyebrow><h2>What dependable support means here.</h2><p>{project.relationship}</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head"><div><Eyebrow>From request to closeout</Eyebrow><h2>How service stays organized.</h2><p>The technical need may change from visit to visit, but the coordination standard remains consistent.</p></div></div>
        <div className="why-grid project-process-grid">{project.coordination.map((item, index) => <div className="why-card" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{["Confirm the need", "Coordinate access", "Complete the work", "Communicate closeout"][index]}</h3><p>{item}</p></div>)}</div>
      </div>
    </section>

    <section className="section section-soft related-projects-section">
      <div className="container">
        <div className="section-head"><div><Eyebrow>More property work</Eyebrow><h2>Explore other communities we support.</h2></div><Link className="text-link" href="/projects">View all projects <ArrowRight size={18}/></Link></div>
        <div className="related-project-grid">{relatedProjects.map((related) => <Link href={`/projects/${related.slug}`} key={related.slug}><Image src={related.images[0]} alt={`${related.name} HVAC project`} width={700} height={460}/><span>{related.location}</span><strong>{related.name}</strong><em>Read case study <ArrowRight size={15}/></em></Link>)}</div>
      </div>
    </section>

    <FAQSection items={faqs} title={`${project.name} HVAC service questions`} intro="Clear information about our property-service role and how similar communities can request support."/>
    <CTA dark title="Need an HVAC partner for your property?" text="Tell us about the building, systems, access needs, and current priorities. We will help organize the next step."/>

    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${projectUrl}#webpage`,
      url: projectUrl,
      name: `${project.name} HVAC Service Case Study`,
      description: project.description,
      primaryImageOfPage: { "@type": "ImageObject", url: project.images[0] },
      about: { "@type": "Place", name: project.name, address: project.address },
      provider: { "@type": "HVACBusiness", name: site.name, url: site.url, telephone: "+1-703-863-1011" },
    }}/>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${site.url}/projects` },
        { "@type": "ListItem", position: 3, name: project.name, item: projectUrl },
      ],
    }}/>
  </>;
}
