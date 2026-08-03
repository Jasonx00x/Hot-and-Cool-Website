"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const body = new URLSearchParams(Array.from(new FormData(form).entries()).map(([key, value]) => [key, String(value)]));
    try {
      const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!response.ok) throw new Error();
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return <form className="contact-form" name="service-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit}>
    <input type="hidden" name="form-name" value="service-request"/>
    <p hidden><label>Do not fill: <input name="bot-field"/></label></p>

    <fieldset className="form-step"><legend><span>01</span>Your contact information</legend><div className="form-field-grid">
      <div className="field"><label htmlFor="name">Full name <b aria-hidden="true">*</b></label><input id="name" name="name" required autoComplete="name" placeholder="Your full name"/></div>
      <div className="field"><label htmlFor="phone">Phone number <b aria-hidden="true">*</b></label><input id="phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="(703) 555-0123"/></div>
      <div className="field field-full"><label htmlFor="email">Email address <b aria-hidden="true">*</b></label><input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com"/></div>
    </div></fieldset>

    <fieldset className="form-step"><legend><span>02</span>Property and service</legend><div className="form-field-grid">
      <div className="field"><label htmlFor="property-type">Property type <b aria-hidden="true">*</b></label><select id="property-type" name="property-type" required defaultValue=""><option value="" disabled>Select property type</option><option>Single-family home</option><option>Apartment / Condominium</option><option>Multifamily property</option><option>Commercial property</option><option>Other</option></select></div>
      <div className="field"><label htmlFor="service">Service needed <b aria-hidden="true">*</b></label><select id="service" name="service" required defaultValue=""><option value="" disabled>Select service</option><option>AC Repair</option><option>AC Installation</option><option>Heating Repair</option><option>Heating Installation</option><option>HVAC Maintenance</option><option>Water Heater Services</option><option>Duct Cleaning</option><option>Commercial HVAC</option><option>Apartment / Multifamily HVAC</option><option>Other</option></select></div>
      <div className="field field-full"><label htmlFor="address">Service address</label><input id="address" name="address" autoComplete="street-address" placeholder="Street address, city, state, ZIP"/><small>Include the property name or unit number when relevant.</small></div>
    </div></fieldset>

    <fieldset className="form-step form-step-last"><legend><span>03</span>Tell us what is happening</legend><div className="form-field-grid">
      <div className="field field-full"><label htmlFor="message">Service details <b aria-hidden="true">*</b></label><textarea id="message" name="message" required placeholder="Describe the symptoms, when they started, equipment information if known, and any scheduling or access needs."/><small>Please do not include payment details or other sensitive information.</small></div>
    </div></fieldset>

    <div className="form-submit-row"><button className="btn btn-red" disabled={state === "sending"}>{state === "sending" ? "Sending…" : <>Send Service Request <ArrowRight size={18}/></>}</button><span><ShieldCheck size={17}/>Your details are used to respond to this service request.</span></div>
    <div className={`form-status ${state}`} aria-live="polite">{state === "sent" && "Thank you. Your request was sent successfully."}{state === "error" && "We could not send the form. Please call 703-863-1011."}</div>
  </form>;
}
