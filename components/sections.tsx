import Link from "next/link";
import { ArrowRight, Check, Clock3, Phone, ShieldCheck, Wrench } from "lucide-react";
import { site } from "@/data/site";
export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p> }
export function CTA({ title = "Ready to get comfortable again?", text = "Tell us what your property needs. Our team will follow up with clear next steps.", dark = false }: { title?: string; text?: string; dark?: boolean }) { return <section className={dark ? "cta cta-dark" : "cta"}><div className="container cta-inner"><div><Eyebrow>Schedule service</Eyebrow><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><a className="btn btn-red" href={site.phoneHref}><Phone size={18}/> Call {site.phone}</a><Link className="btn btn-light" href="/contact">Request Service <ArrowRight size={18}/></Link></div></div></section> }
export function TrustRow() { return <div className="trust-row"><span><Clock3/>Responsive scheduling</span><span><ShieldCheck/>Professional workmanship</span><span><Wrench/>Residential & commercial</span><span><Check/>Clear communication</span></div> }
