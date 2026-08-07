import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTA, Eyebrow } from "@/components/sections";
import { FAQSection } from "@/components/faq";
import { projectsFaqs } from "@/data/faqs";
import { projects } from "@/data/projects";
import { metadata as createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Multifamily & Commercial HVAC Projects",
  "See managed-property and commercial HVAC work across Rockville, Washington, DC, Arlington, Alexandria, and Northern Virginia.",
  "/projects",
);

export default function Projects() {
  return <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs"><Link href="/">Home</Link> / Projects</div>
        <Eyebrow>Commercial & multifamily work</Eyebrow>
        <h1>HVAC experience trusted by property teams.</h1>
        <p>Selected apartment and commercial properties supported across Maryland, Washington, DC, and Northern Virginia.</p>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container project-grid">
        {projects.map((project) => <article className="project-card" key={project.name}>
          <div className="project-gallery">
            {project.images.map((src, index) => <Image key={src} src={src} alt={`${project.name} property view ${index + 1}`} width={900} height={650}/>)}
          </div>
          <div className="project-copy">
            <span className="project-meta">{project.location} • {project.type}</span>
            <h2><Link href={`/projects/${project.slug}`}>{project.name}</Link></h2>
            <p>{project.description}</p>
            <Link className="project-case-link" href={`/projects/${project.slug}`}>See how we support this property <ArrowUpRight size={15}/></Link>
            {project.management && <a className="project-management" href={project.management.url} target="_blank" rel="noreferrer">
              Managed by {project.management.name} <ArrowUpRight size={15}/>
            </a>}
          </div>
        </article>)}
      </div>
    </section>

    <section className="section">
      <div className="container split">
        <div>
          <Eyebrow>Built for coordination</Eyebrow>
          <h2>Property HVAC work needs more than technical skill.</h2>
          <p>Managed properties depend on scheduling, access, communication, documentation, and follow-through. We work with the designated property contact to understand priorities, affected spaces, equipment needs, and timing before the work begins.</p>
          <ul className="check-list">
            <li>Clear point-of-contact communication</li>
            <li>Unit and equipment coordination</li>
            <li>Repair, replacement, and maintenance support</li>
            <li>Practical updates through completion</li>
          </ul>
        </div>
        <div className="sidebar-card">
          <Eyebrow>Project inquiry</Eyebrow>
          <h3>Information that helps us scope the work</h3>
          <ul><li>Property name and address</li><li>Number of units or systems</li><li>Known equipment and symptoms</li><li>Access requirements</li><li>Desired schedule or deadline</li></ul>
          <Link className="btn btn-red" href="/contact">Discuss a project</Link>
        </div>
      </div>
    </section>
    <FAQSection items={projectsFaqs} title="Commercial project questions"/>
    <CTA dark title="Planning property HVAC work?" text="Talk with our team about repairs, replacements, maintenance, or multi-unit service coordination."/>
  </>;
}
