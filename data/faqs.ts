export type FAQ = { question: string; answer: string };

export const commonServiceFaqs: FAQ[] = [
  { question: "What areas does Hot & Cool Services cover?", answer: "We serve Manassas, Northern Virginia, Washington, DC, nearby Maryland communities, and surrounding areas. Call with your address to confirm current scheduling for your location." },
  { question: "Do you work with both residential and commercial properties?", answer: "Yes. We support homeowners, businesses, apartment communities, property managers, and other managed properties." },
  { question: "How do I request the fastest available service?", answer: "Calling 703-863-1011 is the fastest way to explain an urgent heating or cooling issue. For planned work, you can also submit the online service request form." },
];

export const serviceFaqs: Record<string, FAQ[]> = {
  "ac-repair": [
    { question: "Why is my AC running but not cooling?", answer: "Possible causes include restricted airflow, a dirty coil, thermostat trouble, an electrical failure, or a refrigerant-related issue. A system evaluation is the safest way to identify the actual cause." },
    { question: "Should I turn off an AC system with ice on it?", answer: "Yes. Continuing to run a frozen system may worsen the problem. Turn cooling off, keep the fan setting appropriate, and call for service so the airflow and refrigeration system can be inspected." },
    { question: "Can you help with an unexpected summer breakdown?", answer: "Yes. Call directly and describe the symptoms, property type, and location so we can discuss the fastest available service option." },
  ],
  "ac-installation": [
    { question: "How do I know whether to repair or replace my AC?", answer: "System age, repair frequency, comfort problems, efficiency, equipment condition, and the cost of the current repair all matter. We can inspect the system and explain practical options." },
    { question: "Why does equipment sizing matter?", answer: "A correctly sized system supports better humidity control, comfort, efficiency, and equipment life. Bigger equipment is not automatically better." },
    { question: "Can you replace systems in apartments or commercial spaces?", answer: "Yes. We coordinate replacements for homes, multifamily properties, and commercial spaces, including access and scheduling requirements." },
  ],
  "heating-repair": [
    { question: "What are common signs that a heating system needs repair?", answer: "No heat, weak airflow, cold rooms, short cycling, unusual smells, new noises, and rapidly rising energy use are all reasons to schedule an evaluation." },
    { question: "Do you repair furnaces and heat pumps?", answer: "We diagnose common furnace and heat-pump problems, along with thermostat, airflow, and electrical issues connected to the heating system." },
    { question: "What should I do if the heat stops working?", answer: "Check the thermostat setting and accessible breaker or filter conditions without opening equipment panels. If heat does not return, call and describe what the system is doing." },
  ],
  "heating-installation": [
    { question: "When should a heating system be replaced?", answer: "Replacement may make sense when equipment is aging, repairs are frequent, comfort is inconsistent, or operating costs continue to rise. The right decision depends on the system's actual condition." },
    { question: "Can you help select between replacement options?", answer: "Yes. We discuss the property, existing equipment, comfort priorities, and practical budget considerations before recommending an installation path." },
    { question: "Do you install heating systems for managed properties?", answer: "Yes. We work with property teams to coordinate access, installation timing, and communication for apartments and commercial properties." },
  ],
  "hvac-maintenance": [
    { question: "How often should HVAC maintenance be scheduled?", answer: "Many properties benefit from seasonal checks before periods of heavy cooling and heating use. Equipment type, age, operating hours, and property needs may change the appropriate schedule." },
    { question: "What does a maintenance visit help identify?", answer: "Maintenance can reveal airflow restrictions, dirty components, drainage problems, loose electrical connections, unusual wear, and other conditions that may affect reliability." },
    { question: "Do you offer maintenance for multiple units?", answer: "Yes. We can discuss coordinated maintenance for apartment communities, managed properties, and commercial equipment." },
  ],
  "water-heaters": [
    { question: "Do you repair and replace water heaters?", answer: "Yes. We evaluate water-heater problems and discuss repair or replacement based on equipment condition, age, symptoms, and the needs of the property." },
    { question: "What are signs that a water heater needs attention?", answer: "Leaks, inconsistent hot water, slow recovery, unusual noises, discolored water, and visible corrosion should be evaluated promptly." },
    { question: "Can you support multifamily water-heater work?", answer: "Yes. We work with apartment and managed-property teams to coordinate access, equipment needs, and service timing." },
  ],
  "duct-cleaning": [
    { question: "When should duct cleaning be considered?", answer: "Visible buildup at registers, renovation debris, persistent dust concerns, musty airflow, or a long period without cleaning may justify an inspection." },
    { question: "Will duct cleaning fix every indoor air-quality problem?", answer: "No. Indoor air quality can also involve filtration, humidity, moisture, ventilation, housekeeping, and equipment condition. Duct cleaning is one possible part of a broader solution." },
    { question: "Do you clean ducts in apartments and commercial properties?", answer: "Yes. Scope and access requirements vary, so property teams should contact us with building and system details." },
  ],
  "commercial-hvac": [
    { question: "What commercial buildings do you service?", answer: "We support offices, retail and commercial spaces, apartment communities, managed properties, and other facilities across the region." },
    { question: "Can you coordinate with property managers and general contractors?", answer: "Yes. Clear scheduling, site access, project communication, and status updates are central to our commercial service approach." },
    { question: "Do you offer commercial maintenance planning?", answer: "Yes. We can discuss maintenance needs based on equipment, operating demands, property priorities, and the number of systems involved." },
  ],
  "apartment-hvac": [
    { question: "Can you handle HVAC service across multiple apartment units?", answer: "Yes. We coordinate multi-unit repair, replacement, and maintenance work with property teams and account for access, tenant communication, and scheduling needs." },
    { question: "Do you support vacant-unit turns?", answer: "Yes. Contact us with the property, unit count, equipment concerns, and required timing so the work can be scoped appropriately." },
    { question: "How do you communicate during managed-property work?", answer: "We focus on clear points of contact, organized scheduling, practical updates, and confirmation of completed work." },
  ],
};

export const homeFaqs: FAQ[] = [
  { question: "What HVAC services do you provide?", answer: "Hot & Cool Services provides AC repair and installation, heating repair and installation, HVAC maintenance, water-heater service, duct cleaning, commercial HVAC, and apartment or multifamily support." },
  ...commonServiceFaqs,
  { question: "Can I request an estimate for planned work?", answer: "Yes. Send a service request with the property address, equipment details, and the work you are considering. An evaluation may be needed before exact pricing can be provided." },
  { question: "What information should I provide when calling?", answer: "Share the property address, system type if known, symptoms, when the problem started, and whether the issue affects a home, business, or multiple units." },
];

export const servicesPageFaqs: FAQ[] = [
  { question: "How does the service process work?", answer: "Start by calling or submitting a request. We evaluate the system, explain what we find, discuss practical options, complete approved work, and verify operation." },
  { question: "Do you provide repair, installation, and maintenance?", answer: "Yes. Our services cover troubleshooting and repair, planned equipment replacement, new installation, seasonal maintenance, and property-level coordination." },
  ...commonServiceFaqs,
];

export const projectsFaqs: FAQ[] = [
  { question: "Do you work directly with property-management teams?", answer: "Yes. Hot & Cool Services supports property managers with scheduling, access coordination, project communication, repairs, maintenance, and planned equipment work." },
  { question: "Can you handle multiple units at one property?", answer: "Yes. We can discuss unit counts, equipment types, access requirements, priorities, and scheduling before defining the right service approach." },
  { question: "What locations are represented in the project gallery?", answer: "Featured properties include communities in Washington, DC, Arlington, Virginia, and Alexandria, Virginia." },
  { question: "How can I discuss a commercial project?", answer: "Use the contact form and include the property name, location, approximate number of systems or units, desired timing, and the best point of contact." },
];

export const aboutFaqs: FAQ[] = [
  { question: "Who does Hot & Cool Services work with?", answer: "We work with homeowners, landlords, businesses, apartment communities, managed properties, property managers, and general contractors." },
  { question: "Where is the company based?", answer: "Hot & Cool Services is based in Manassas, Virginia and serves Northern Virginia, Washington, DC, nearby Maryland communities, and surrounding areas." },
  { question: "What types of work can your team handle?", answer: "Our work includes heating and cooling repair, installation, maintenance, water heaters, duct cleaning, commercial systems, and multifamily service coordination." },
  { question: "What can customers expect during service?", answer: "Customers can expect clear communication, an evaluation of the issue, practical recommendations, professional work, and confirmation that the approved work is complete." },
];

export const contactFaqs: FAQ[] = [
  { question: "Should I call or use the service request form?", answer: "Call for the fastest response to an urgent comfort problem. Use the form for planned work, estimates, maintenance, and detailed property inquiries." },
  { question: "What happens after I submit the form?", answer: "The request is sent to the Hot & Cool Services team for follow-up. Include accurate contact information and enough detail to help us understand the service need." },
  { question: "Can property managers use this form?", answer: "Yes. Include the property name, address, unit or system information, access requirements, desired timing, and the best contact person." },
  ...commonServiceFaqs.slice(0, 2),
];

export const blogFaqs: FAQ[] = [
  { question: "Is online HVAC advice a substitute for an inspection?", answer: "No. Articles can help you recognize symptoms, but safe diagnosis and repair depend on the equipment, property, and actual system conditions." },
  { question: "When should I stop troubleshooting and call?", answer: "Call when equipment is leaking, frozen, repeatedly tripping a breaker, producing unusual odors or sounds, failing to heat or cool, or presenting any safety concern." },
  { question: "Can I request service directly from an article?", answer: "Yes. Every article includes a call-to-action, and you can call 703-863-1011 or use the contact form." },
  { question: "Are the tips relevant to multifamily properties?", answer: "Some general maintenance and warning-sign guidance applies, but tenants and property staff should follow building procedures and avoid opening or modifying shared equipment." },
];
