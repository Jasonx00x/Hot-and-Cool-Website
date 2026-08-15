import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { CTA, Eyebrow } from "@/components/sections";
import { FAQSection } from "@/components/faq";
import { blogFaqs } from "@/data/faqs";
import { blogBySlug, blogs } from "@/data/blogs";
import { serviceBySlug } from "@/data/services";
import { images, site } from "@/data/site";
import { JsonLd } from "@/lib/seo";

const sectionId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const isoDate = (date: string) => `${date}T09:00:00-04:00`;
const bodyText = (body: string | string[]) => Array.isArray(body) ? body : [body];

export function generateStaticParams() { return blogs.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) return {};
  const url = `${site.url}/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: site.name, url: `${site.url}/about` }],
    creator: site.name,
    publisher: site.name,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.description,
      url,
      siteName: site.name,
      publishedTime: isoDate(post.date),
      modifiedTime: isoDate(post.dateModified),
      authors: [site.name],
      section: post.category,
      tags: post.keywords,
      images: [{ url: post.image, width: 1600, height: 900, alt: post.imageAlt }],
    },
    twitter: { card: "summary_large_image", title: post.seoTitle, description: post.description, images: [post.image] },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) notFound();
  const published = new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const modified = new Date(`${post.dateModified}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const relatedServices = post.relatedServices.map((serviceSlug) => serviceBySlug[serviceSlug]).filter(Boolean);
  const relatedPosts = blogs.filter((candidate) => candidate.slug !== post.slug).slice(0, 3);
  const articleFaqs = post.faqs ?? blogFaqs;
  const wordCount = [
    post.quickAnswer,
    post.intro,
    ...post.sections.flatMap((section) => [
      ...bodyText(section.body),
      ...(section.bullets ?? []),
      ...(section.subsections ?? []).flatMap((subsection) => [subsection.heading, ...bodyText(subsection.body), ...(subsection.bullets ?? [])]),
    ]),
    ...articleFaqs.flatMap((faq) => [faq.question, faq.answer]),
  ].join(" ").split(/\s+/).length;
  const articleUrl = `${site.url}/blog/${post.slug}`;

  return <>
    <section className="page-hero article-hero"><div className="container post">
      <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/blog">HVAC Blog</Link> / {post.title}</div>
      <Eyebrow>{post.category}</Eyebrow>
      <h1>{post.title}</h1>
      <div className="post-meta"><span>By <Link href="/about">Hot & Cool Services</Link></span><span><time dateTime={post.date}>{published}</time></span><span><Clock3 size={15}/>{post.readTime}</span></div>
    </div></section>

    <article className="section article-section"><div className="container post post-body">
      <figure className="article-image"><Image src={post.image} alt={post.imageAlt} width={1600} height={900} priority/><figcaption>Local HVAC guidance from Hot & Cool Services.</figcaption></figure>
      <p className="article-lead">{post.intro}</p>
      <aside className="quick-answer" aria-labelledby="quick-answer-title"><Eyebrow>Quick answer</Eyebrow><h2 id="quick-answer-title">What homeowners should know</h2><p>{post.quickAnswer}</p></aside>
      <nav className="article-toc" aria-label="Article contents"><strong>In this guide</strong><ol>{post.sections.map((section) => <li key={section.heading}><a href={`#${sectionId(section.heading)}`}>{section.heading}</a></li>)}</ol></nav>
      {post.sections.map((section) => <section key={section.heading} id={sectionId(section.heading)}><h2>{section.heading}</h2>{bodyText(section.body).map((paragraph, index) => <p key={`${section.heading}-${index}`}>{paragraph}</p>)}{section.bullets && <ul className="article-checklist">{section.bullets.map((item) => <li key={item}><Check size={18}/>{item}</li>)}</ul>}{section.subsections?.map((subsection) => <div className="article-subsection" key={subsection.heading}><h3>{subsection.heading}</h3>{bodyText(subsection.body).map((paragraph, index) => <p key={`${subsection.heading}-${index}`}>{paragraph}</p>)}{subsection.bullets && <ul className="article-checklist">{subsection.bullets.map((item) => <li key={item}><Check size={18}/>{item}</li>)}</ul>}</div>)}</section>)}

      {post.internalLinks && <section className="article-internal" aria-labelledby="local-resources-title"><Eyebrow>Local resources</Eyebrow><h2 id="local-resources-title">Plan the right next step</h2><div className="article-related-grid">{post.internalLinks.map((item) => <Link href={item.href} key={item.href}><span>Hot & Cool resource</span><strong>{item.title}</strong><p>{item.description}</p><em>Explore resource <ArrowRight size={15}/></em></Link>)}</div></section>}

      {post.sources && <section className="article-sources" aria-labelledby="sources-title"><Eyebrow>Sources</Eyebrow><h2 id="sources-title">Technical and safety references</h2><p>Material technical, safety, moisture, and code statements in this guide were checked against the following primary sources.</p><ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer"><strong>{source.title}</strong><span>{source.publisher}</span></a></li>)}</ol></section>}

      <section className="article-services" aria-labelledby="related-services-title"><Eyebrow>Related services</Eyebrow><h2 id="related-services-title">Professional help for the next step</h2><div className="article-service-links">{relatedServices.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><strong>{service.title}</strong><span>{service.short}</span><em>Explore service <ArrowRight size={15}/></em></Link>)}</div></section>

      <aside className="article-review"><div><strong>Written and reviewed by Hot & Cool Services</strong><p>Local heating and cooling guidance for homeowners, businesses, apartments, and managed properties across Northern Virginia, Maryland, and Washington, DC.</p></div><Link href="/about">About our team <ArrowRight size={16}/></Link></aside>

      <section className="article-related" aria-labelledby="related-reading-title"><Eyebrow>Keep reading</Eyebrow><h2 id="related-reading-title">Related HVAC guides</h2><div className="article-related-grid">{relatedPosts.map((related) => <Link href={`/blog/${related.slug}`} key={related.slug}><span>{related.category}</span><strong>{related.title}</strong><em>Read guide <ArrowRight size={15}/></em></Link>)}</div></section>

      <p className="article-updated">Last updated <time dateTime={post.dateModified}>{modified}</time>. General information only; actual HVAC conditions require property-specific evaluation.</p>
    </div></article>

    <FAQSection items={articleFaqs} title={post.faqs ? "AC water leak questions" : "HVAC advice questions"} intro={post.faqs ? "Practical answers for protecting the property and choosing a safe next step." : undefined}/>
    <CTA dark title="Need professional HVAC help?" text={`Hot & Cool Services serves Manassas, Northern Virginia, Maryland, and Washington, DC. Call ${site.phone} or request service online.`}/>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${articleUrl}#article`,
      headline: post.title,
      alternativeHeadline: post.seoTitle,
      description: post.description,
      image: [post.image],
      datePublished: isoDate(post.date),
      dateModified: isoDate(post.dateModified),
      inLanguage: "en-US",
      articleSection: post.category,
      keywords: post.keywords.join(", "),
      wordCount,
      isAccessibleForFree: true,
      mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
      author: { "@type": "Organization", name: site.name, url: `${site.url}/about` },
      publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: images.logoSquare } },
      about: post.keywords.slice(0, 4).map((keyword) => ({ "@type": "Thing", name: keyword })),
      citation: post.sources?.map((source) => source.url),
    }}/>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "HVAC Blog", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
      ],
    }}/>
  </>;
}
