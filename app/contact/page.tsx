import Link from "next/link";
import { Building2, Check, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CTA, Eyebrow } from "@/components/sections";
import { FAQSection } from "@/components/faq";
import { contactFaqs } from "@/data/faqs";
import { site } from "@/data/site";
import { metadata as createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Contact & Request HVAC Service", "Request heating, cooling, water heater, duct, or commercial HVAC service from Hot & Cool Services. Serving Northern Virginia, Maryland, and Washington, DC.", "/contact");

const requestPaths = [
  { icon: Phone, title: "Urgent comfort problem", text: "No heat, no cooling, leaking, ice, or another active concern.", action: "Call for the fastest response", href: site.phoneHref },
  { icon: Clock3, title: "Planned home service", text: "Maintenance, replacement planning, estimates, and non-urgent repairs.", action: "Complete the service form", href: "#service-request" },
  { icon: Building2, title: "Property & commercial work", text: "Multi-unit, managed-property, contractor, and business inquiries.", action: "Share the project details", href: "#service-request" },
];

export default function Contact() {
  return <>
    <section className="page-hero contact-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link> / Contact</div><Eyebrow>Contact Hot & Cool Services</Eyebrow><h1>Request HVAC service with clear next steps.</h1><p>Tell us what is happening, where the property is located, and who the service affects. Our team will review the details and follow up.</p></div></section>

    <section className="contact-paths" aria-label="Ways to request service"><div className="container contact-path-grid">{requestPaths.map(({ icon: Icon, title, text, action, href }) => <a href={href} className="contact-path" key={title}><span className="contact-path-icon"><Icon size={21}/></span><span><strong>{title}</strong><small>{text}</small><em>{action} →</em></span></a>)}</div></section>

    <section className="section contact-main"><div className="container contact-layout">
      <aside className="contact-sidebar">
        <section className="contact-call-card"><Eyebrow>Call for fast service</Eyebrow><h2>Speak directly with our team.</h2><p>Calling is the quickest way to explain an active heating or cooling problem.</p><a className="contact-phone" href={site.phoneHref}><Phone size={22}/>{site.phone}</a><span>Residential • Commercial • Apartments</span></section>

        <section className="contact-details-card"><h3>Contact details</h3><div className="contact-detail"><MapPin size={19}/><div><strong>Service region</strong><span>Northern Virginia, Maryland & Washington, DC</span></div></div><div className="contact-detail"><Mail size={19}/><div><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="contact-detail"><Clock3 size={19}/><div><strong>Scheduling</strong><span>Availability depends on location, urgency, and project scope.</span></div></div></section>

        <section className="contact-prep-card"><h3>Helpful details to include</h3><ul><li><Check size={17}/>Property address and type</li><li><Check size={17}/>System or equipment type, if known</li><li><Check size={17}/>Symptoms and when they started</li><li><Check size={17}/>Number of affected rooms, units, or systems</li></ul></section>
      </aside>

      <div className="contact-form-card" id="service-request"><div className="contact-form-heading"><Eyebrow>Online service request</Eyebrow><h2>How can we help?</h2><p>Complete the form below for planned work and detailed inquiries. Required fields are marked with an asterisk.</p></div><ContactForm/></div>
    </div></section>

    <section className="section section-soft contact-expect"><div className="container"><div className="section-head"><div><Eyebrow>What happens next</Eyebrow><h2>A straightforward request process.</h2></div></div><div className="why-grid">{[["01", "We review the request", "We look at the service type, property details, symptoms, and contact information."], ["02", "We follow up", "Our team contacts you to clarify the need and discuss current scheduling."], ["03", "We evaluate the system", "The appropriate next step may include an on-site inspection before exact work or pricing is confirmed."], ["04", "We keep you informed", "For property work, we coordinate with the designated point of contact through completion."]].map(([number, title, text]) => <article className="why-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <FAQSection items={contactFaqs} title="Service request questions"/>
    <CTA dark title="Still deciding what to request?" text="Call and describe what the system is doing. Our team can help identify the appropriate next step."/>
  </>;
}
