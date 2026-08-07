"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, ChevronDown, Flame, Menu, Phone, Snowflake, Wrench, X } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { images, site } from "@/data/site";

const links = [["Home", "/"], ["Projects", "/projects"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]] as const;
const serviceGroups = [
  { title: "Cooling", icon: Snowflake, slugs: ["ac-repair", "ac-installation"] },
  { title: "Heating", icon: Flame, slugs: ["heating-repair", "heating-installation"] },
  { title: "System care", icon: Wrench, slugs: ["hvac-maintenance", "duct-cleaning", "water-heaters"] },
  { title: "Property services", icon: Building2, slugs: ["commercial-hvac", "apartment-hvac"] },
].map((group) => ({ ...group, items: group.slugs.map((slug) => services.find((service) => service.slug === slug)!) }));

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(pathname.startsWith("/services"));
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(pathname.startsWith("/services"));
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return <>
    <div className="topbar"><div className="container topbar-inner"><span>Serving Northern Virginia, Maryland & Washington, DC</span><a href={site.phoneHref}><Phone size={15}/> {site.phone}</a></div></div>
    <header className="header">
      <div className="container nav-wrap">
        <Link href="/" className="brand brand-image" aria-label="Hot & Cool Services home"><Image src={images.logoRectangle} alt="Hot & Cool Services" width={220} height={70} priority sizes="(max-width: 620px) 150px, (max-width: 1100px) 180px, 220px"/></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <div
            className={`nav-services ${pathname.startsWith("/services") ? "is-active" : ""} ${megaOpen ? "is-open" : ""}`}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
            onFocusCapture={() => setMegaOpen(true)}
            onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setMegaOpen(false); }}
            onKeyDown={(event) => { if (event.key === "Escape") setMegaOpen(false); }}
          >
            <button className="nav-services-trigger" type="button" aria-expanded={megaOpen} aria-controls="services-mega-menu" aria-current={pathname.startsWith("/services") ? "page" : undefined} onClick={() => setMegaOpen((value) => !value)}>
              Services <ChevronDown size={16}/>
            </button>
            <div className="mega-menu" id="services-mega-menu" aria-hidden={!megaOpen}>
              <div className="mega-menu-inner container">
                <div className="mega-menu-intro">
                  <span className="mega-kicker">Complete comfort support</span>
                  <h2>Service for every system and property.</h2>
                  <p>Repairs, replacements, maintenance, air quality, and coordinated commercial support.</p>
                  <Link className="mega-overview" href="/services">Explore all services <span aria-hidden="true">→</span></Link>
                </div>
                <div className="mega-menu-groups">
                  {serviceGroups.map(({ title, icon: Icon, items }) => <section className="mega-group" key={title}>
                    <h3><Icon size={17}/>{title}</h3>
                    {items.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><strong>{service.title}</strong><span>{service.short}</span></Link>)}
                  </section>)}
                </div>
                <aside className="mega-menu-callout">
                  <span>Need help now?</span>
                  <strong>Talk with our HVAC team.</strong>
                  <a href={site.phoneHref}><Phone size={17}/> {site.phone}</a>
                </aside>
              </div>
            </div>
          </div>
          {links.map(([label, href]) => <Link className={`nav-link ${isActive(href) ? "is-active" : ""}`} aria-current={isActive(href) ? "page" : undefined} href={href} key={href}>{label}</Link>)}
          <Link className="btn btn-red" href="/contact">Request Service</Link>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Close navigation" : "Open navigation"}>{mobileOpen ? <X/> : <Menu/>}</button>
      </div>
      {mobileOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
        <button className="mobile-services-trigger" type="button" onClick={() => setMobileServicesOpen((value) => !value)} aria-expanded={mobileServicesOpen} aria-controls="mobile-services-list" aria-current={pathname.startsWith("/services") ? "page" : undefined}>
          <span>Services</span><ChevronDown size={19}/>
        </button>
        {mobileServicesOpen && <div className="mobile-services-list" id="mobile-services-list">
          <Link onClick={closeMobile} href="/services"><strong>View all services</strong><span>See every heating, cooling, and property solution</span></Link>
          {services.map((service) => <Link onClick={closeMobile} href={`/services/${service.slug}`} key={service.slug}><strong>{service.title}</strong><span>{service.short}</span></Link>)}
        </div>}
        {links.map(([label, href]) => <Link className={isActive(href) ? "is-active" : undefined} aria-current={isActive(href) ? "page" : undefined} onClick={closeMobile} href={href} key={href}>{label}</Link>)}
        <Link className="mobile-request" onClick={closeMobile} href="/contact">Request Service</Link>
        <a className="mobile-menu-phone" href={site.phoneHref}><Phone size={18}/> Call {site.phone}</a>
      </nav>}
    </header>
  </>;
}
