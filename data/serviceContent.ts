type Resource = { title: string; href: string };
type Section = { heading: string; paragraphs: string[]; links?: Resource[] };
type ServiceContent = { title: string; description: string; sections: Section[] };

export const serviceContent: Record<string, ServiceContent> = {
  "ac-repair": {
    title: "AC Repair in Manassas & Northern Virginia",
    description: "Request AC repair for warm air, weak airflow, frozen coils, or cooling breakdowns in Manassas, Northern Virginia, and Washington, DC. Call 703-863-1011.",
    sections: [
      { heading: "Cooling repair starts with the cause", paragraphs: ["An air conditioner that runs without cooling needs a different evaluation from a system that will not start. Tell us whether the problem affects the whole property or one room, when it began, and whether you have noticed ice, water, unusual sounds, or repeated shutdowns.", "Our team evaluates the reported symptoms and relevant equipment before recommending work. We explain the findings and discuss the appropriate repair. When equipment condition or recurring failures make replacement worth considering, we can explain that option too."], links: [{ title: "AC running but not cooling: what to check safely", href: "/blog/why-is-my-ac-running-but-not-cooling" }, { title: "Water around the AC: causes and next steps", href: "/blog/ac-leaking-water-northern-virginia" }] },
      { heading: "AC service for homes and occupied properties", paragraphs: ["For a home, share the system location and how the temperature has changed. For an apartment or managed property, include the affected unit, the onsite contact, access requirements, and any approval process. This information helps us plan the visit and keep the right people informed."], links: [{ title: "AC repair and HVAC service in Manassas", href: "/service-areas/manassas-va" }, { title: "Rockville heating and cooling service", href: "/service-areas/rockville-md" }, { title: "AC replacement and installation options", href: "/services/ac-installation" }] }
    ]
  },
  "heating-repair": {
    title: "Heating & Furnace Repair in Manassas & Northern Virginia",
    description: "Furnace and heat-pump repair for no heat, short cycling, and uneven temperatures in Manassas, Northern Virginia, and Washington, DC. Request service.",
    sections: [
      { heading: "Furnace and heat-pump repair for loss of heat", paragraphs: ["Tell us whether the system is a furnace or heat pump if you know, what the thermostat shows, and whether all rooms are affected. No heat, repeated cycling, and a system that cannot maintain the set temperature are different symptoms; recording the pattern helps us understand the request.", "We evaluate the equipment and relevant controls, explain the findings, and review appropriate repair options before approved work begins. Calling lets the team discuss availability for an active heating problem. Appointment timing depends on location, schedule, and the scope of work."], links: [{ title: "Heating repair and HVAC service in Manassas", href: "/service-areas/manassas-va" }, { title: "Heating and cooling support in Rockville", href: "/service-areas/rockville-md" }] },
      { heading: "Repair, maintenance, or replacement?", paragraphs: ["An active loss of heat calls for diagnosis. Planned maintenance is for checking equipment condition and preparing for seasonal use. If the system has recurring faults or is nearing replacement, we can discuss its condition and the practical options rather than assuming every problem requires new equipment."], links: [{ title: "Plan HVAC maintenance", href: "/services/hvac-maintenance" }, { title: "Heating installation and replacement", href: "/services/heating-installation" }, { title: "Furnace and carbon monoxide safety guidance", href: "/blog/furnace-carbon-monoxide-safety-checklist" }] }
    ]
  },
  "hvac-maintenance": {
    title: "HVAC Maintenance in Manassas & Northern Virginia",
    description: "Plan heating and AC maintenance in Manassas, Northern Virginia, and Washington, DC. Seasonal service for homes, apartments, and managed properties.",
    sections: [
      { heading: "Plan maintenance around your heating and cooling equipment", paragraphs: ["A useful maintenance plan starts with the equipment type, age, operating hours, and service history. Discuss seasonal timing before heavy heating or cooling use, along with any recurring comfort concerns. The appropriate scope and frequency depend on the system and property.", "Maintenance can help identify component condition, airflow restrictions, drainage concerns, loose connections, and wear. Ask what applies to your equipment and what follow-up is recommended. A maintenance visit does not guarantee that equipment will avoid future breakdowns."], links: [{ title: "How often should HVAC maintenance be scheduled?", href: "/blog/how-often-should-hvac-maintenance-be-scheduled" }, { title: "Seasonal HVAC tips for local homeowners", href: "/blog/7-hvac-tips-for-homeowners-this-summer" }] },
      { heading: "Coordinated maintenance for apartments and businesses", paragraphs: ["Property teams can share the number of systems, unit access requirements, operating schedules, and the designated approval contact. These details help define a manageable scope for recurring work and communicate findings across the property.", "If the equipment currently has no heat, cannot cool, or repeatedly shuts down, describe that problem when requesting service so the visit can be planned as a diagnostic request."], links: [{ title: "Manassas HVAC service", href: "/service-areas/manassas-va" }, { title: "Northern Virginia service coverage", href: "/service-areas/northern-virginia" }, { title: "Apartment and multifamily HVAC support", href: "/services/apartment-hvac" }] }
    ]
  },
  "ac-installation": {
    title: "AC Installation & Replacement in Northern Virginia",
    description: "AC installation and replacement for homes, apartments, and businesses in Manassas and Northern Virginia. Discuss system condition, sizing, and equipment options.",
    sections: [
      { heading: "Consider replacement using the system's actual condition", paragraphs: ["Repeated repairs, unreliable cooling, equipment condition, and renovation plans can all lead to a replacement discussion. We review the existing system and property needs before explaining installation options. Age alone does not tell the whole story.", "Equipment selection should account for the building and its cooling needs. Share any humidity concerns, uneven room temperatures, past repairs, and planned changes to the property so those issues can be considered alongside the replacement."], links: [{ title: "AC repair before deciding on replacement", href: "/services/ac-repair" }, { title: "HVAC service across Northern Virginia", href: "/service-areas/northern-virginia" }, { title: "Service for Manassas homes and properties", href: "/service-areas/manassas-va" }] }
    ]
  }
};

type AreaContent = { title: string; description: string; sections: Section[]; projectSlug?: string };

export const areaContent: Record<string, AreaContent> = {
  "manassas-va": {
    title: "HVAC, AC & Heating Repair in Manassas, VA",
    description: "Hot & Cool Services provides AC repair, heating repair, HVAC maintenance, and installation in Manassas, VA. Call 703-863-1011 to confirm service availability.",
    sections: [
      { heading: "AC and heating repair in Manassas", paragraphs: ["Hot & Cool Services is based in Manassas and supports homeowners, businesses, apartments, and managed properties. If the AC is blowing warm air or the heating system is not maintaining temperature, call with the service address and symptoms so our team can discuss the next step.", "We evaluate the reported issue, explain what we find, and review appropriate options before completing approved work. Service availability depends on the address, current schedule, and scope; call to confirm timing rather than assuming same-day availability."], links: [{ title: "AC repair and cooling diagnostics", href: "/services/ac-repair" }, { title: "Furnace and heat-pump repair", href: "/services/heating-repair" }, { title: "Five signs you need AC repair in Manassas", href: "/blog/5-signs-you-need-ac-repair-in-manassas-va" }] },
      { heading: "Maintenance and planned equipment work", paragraphs: ["For seasonal maintenance or a planned replacement, share the equipment type, service history, and any comfort concerns. Our team can discuss maintenance, AC installation, and heating replacement based on the system and property.", "For apartments and commercial properties, include the property contact, affected systems or units, access instructions, and approval requirements. We coordinate the work around those details and communicate findings to the designated contact."], links: [{ title: "HVAC maintenance", href: "/services/hvac-maintenance" }, { title: "AC installation and replacement", href: "/services/ac-installation" }, { title: "Apartment and multifamily HVAC", href: "/services/apartment-hvac" }] }
    ]
  },
  "rockville-md": {
    title: "AC Repair & Heating Services in Rockville, MD",
    description: "Heating, AC repair, and HVAC maintenance for Rockville homes, businesses, and apartment communities. Explore local property experience and request service.",
    projectSlug: "parkside-landing",
    sections: [
      { heading: "Heating and cooling help for Rockville properties", paragraphs: ["A home with one cooling problem and an apartment community with several comfort requests need different service coordination. Hot & Cool Services supports Rockville homeowners, businesses, and property teams with repair, maintenance, and planned equipment work.", "For an active problem, tell us what the equipment is doing and whether one room, a whole home, or multiple units are affected. Include the property address so the team can confirm coverage and current availability."], links: [{ title: "AC repair", href: "/services/ac-repair" }, { title: "Heating repair", href: "/services/heating-repair" }, { title: "Water heater repair and replacement", href: "/services/water-heaters" }] },
      { heading: "Service planning for occupied apartments", paragraphs: ["Managed-property work depends on more than equipment access. Share the unit or area involved, the onsite contact, resident access arrangements, and the approval process. Clear information helps keep the property team informed from diagnosis through approved work and follow-up."], links: [{ title: "Apartment and multifamily HVAC service", href: "/services/apartment-hvac" }, { title: "Planned HVAC maintenance", href: "/services/hvac-maintenance" }] }
    ]
  }
};
