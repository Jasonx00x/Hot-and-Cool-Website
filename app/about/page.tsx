import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { CTA, Eyebrow } from "@/components/sections";
import { FAQSection } from "@/components/faq";
import { aboutFaqs } from "@/data/faqs";
import { images } from "@/data/site";
import { metadata as createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "About Our HVAC Company",
  "Meet Hot & Cool Services, serving homeowners, businesses, apartment communities, and commercial properties across Northern Virginia and Washington, DC.",
  "/about",
);

export default function About() {
  return <>
    <section className="page-hero about-hero">
      <div className="container about-hero-grid">
        <div className="about-hero-copy">
          <div className="breadcrumbs"><Link href="/">Home</Link> / About</div>
          <Eyebrow>About Hot & Cool Services</Eyebrow>
          <h1>Reliable work. Clear communication. Comfort that lasts.</h1>
          <p>Professional HVAC service for homeowners, businesses, apartment communities, and managed properties across Northern Virginia, Maryland, and Washington, DC.</p>
          <div className="about-hero-proof"><Check size={17}/> Local technicians trusted inside real homes</div>
        </div>
        <div className="about-hero-photo">
          <Image
            src={images.happyClient}
            alt="Hot & Cool Services technicians with a happy customer after HVAC service"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
          />
          <div className="about-photo-caption"><strong>People-first service</strong><span>Real customers. Real follow-through.</span></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container split">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2>A service company built around the needs of real properties.</h2>
          <p>Hot & Cool Services delivers heating, cooling, water heater, duct, and commercial HVAC support with a simple goal: make necessary service easier to understand and easier to manage.</p>
          <p>Our team supports both individual homeowners and complex property operations. That range of experience helps us communicate clearly, work carefully, and keep the right people informed.</p>
          <p>Whether the request involves one home, several apartment units, a commercial space, or ongoing property support, we begin by understanding what is happening and who needs to be kept informed.</p>
        </div>
        <div className="sidebar-card">
          <h3>Who we serve</h3>
          <ul className="check-list">
            <li><Check/>Homeowners and landlords</li>
            <li><Check/>Apartment and multifamily communities</li>
            <li><Check/>Property managers</li>
            <li><Check/>General contractors</li>
            <li><Check/>Offices and commercial spaces</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section section-soft">
      <div className="container">
        <div className="section-head"><div><Eyebrow>What we stand for</Eyebrow><h2>Professional service from the first conversation.</h2></div></div>
        <div className="why-grid">
          {[["01","Honest communication","We explain findings and keep customers informed."],["02","Quality workmanship","We approach every property with care and attention."],["03","Reliable response","We understand comfort issues disrupt homes and operations."],["04","Long-term relationships","We aim to be the team customers call again."]].map(([n,t,d]) => <div className="why-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </div>
    </section>
    <FAQSection items={aboutFaqs} title="About Hot & Cool Services"/>
    <CTA/>
  </>;
}
