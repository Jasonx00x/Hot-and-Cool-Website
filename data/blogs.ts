export type BlogSection = { heading: string; body: string; bullets?: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  dateModified: string;
  readTime: string;
  category: string;
  focusKeyword: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  quickAnswer: string;
  intro: string;
  sections: BlogSection[];
  relatedServices: string[];
};

const articleImages = {
  cooling: "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1600,h_900,c_fill,g_auto/v1785417137/Hot-and-Cool-Home-page_neiygp.webp",
  maintenance: "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1600,h_900,c_fill,g_auto/v1785417895/IMG_1617_wsvjbw.webp",
  service: "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1600,h_900,c_fill,g_auto/v1785417874/IMG_1735_cecdax.webp",
  property: "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1600,h_900,c_fill,g_auto/v1785525538/IMG_5519_bgtglj.webp",
};

export const blogs: BlogPost[] = [
  {
    slug: "why-is-my-ac-running-but-not-cooling",
    title: "Why Is My AC Running but Not Cooling?",
    seoTitle: "AC Running but Not Cooling? Northern Virginia Guide",
    description: "Find common reasons an AC runs without cooling, safe checks to try, and when to request AC repair in Northern Virginia, Manassas, or Washington, DC.",
    date: "2026-07-28",
    dateModified: "2026-08-03",
    readTime: "8 min read",
    category: "AC troubleshooting",
    focusKeyword: "AC running but not cooling",
    keywords: ["AC running but not cooling", "air conditioner not cooling", "AC repair Northern Virginia", "AC repair Manassas VA", "air conditioning repair Washington DC"],
    image: articleImages.cooling,
    imageAlt: "Hot & Cool Services technicians arriving for an HVAC service visit",
    quickAnswer: "An air conditioner may run without cooling because of an incorrect thermostat setting, restricted airflow, a dirty outdoor coil, a frozen indoor coil, an electrical problem, or a refrigerant-related fault. Check only the thermostat, filter, registers, and accessible breaker. Turn the system off and call for service if you see ice, water near electrical equipment, repeated breaker trips, or hear abnormal mechanical sounds.",
    intro: "When the air conditioner sounds normal but the rooms keep getting warmer, the system is using energy without delivering the comfort you need. Some causes are simple enough for a homeowner to check safely. Others require testing by an HVAC professional. This guide explains the likely possibilities and the best next step for homes and managed properties across Northern Virginia and Washington, DC.",
    sections: [
      { heading: "Start with the thermostat and operating mode", body: "Confirm that the thermostat is set to Cool and that the target temperature is below the current room temperature. If the thermostat uses batteries, replace them when the display is weak or blank. A fan setting of On can make air move even when the compressor is not actively cooling, which may create the impression that the AC is running continuously. Auto is usually the clearer setting for troubleshooting normal cooling cycles." },
      { heading: "Restricted airflow can make an AC feel ineffective", body: "A heavily loaded filter, blocked return, closed supply registers, or a blower problem can reduce the amount of conditioned air reaching the rooms. Check the accessible filter and make sure furniture, rugs, and curtains are not covering registers or returns. Do not operate the system without the correct filter or open sealed equipment panels.", bullets: ["Replace a visibly dirty disposable filter with the correct size and type", "Keep supply registers open and unobstructed", "Make sure return grilles have room to draw air", "Call for help if airflow remains weak after basic checks"] },
      { heading: "A frozen coil needs prompt attention", body: "Ice on the refrigerant line or indoor coil can result from inadequate airflow or a refrigeration-system problem. Continuing to run a frozen air conditioner can lead to water damage and additional equipment stress. Turn cooling off and contact an HVAC company. Melting the visible ice does not correct the condition that caused it." },
      { heading: "Outdoor equipment needs clear airflow", body: "The outdoor condenser releases heat collected from inside the property. Leaves, vegetation, construction debris, or other obstructions can interfere with airflow. Remove loose debris around the unit while keeping hands and tools away from the fan, electrical compartment, and coil fins. Do not use a pressure washer or attempt to disassemble the cabinet." },
      { heading: "Electrical and refrigerant faults require professional testing", body: "Failed capacitors, contactors, motors, sensors, wiring, compressor components, and refrigerant-side problems can all allow parts of the system to operate while cooling performance disappears. These faults cannot be diagnosed reliably from the thermostat alone. Repeated breaker trips, buzzing, burning odors, or a silent outdoor unit are reasons to stop and request professional AC repair." },
      { heading: "When to request AC repair in Northern Virginia", body: "Request service when basic thermostat and filter checks do not restore cooling, the temperature keeps rising, or the system shows ice, leaking water, short cycling, weak airflow, or unusual sounds. In Manassas, Northern Virginia, Maryland, and Washington, DC, summer heat and humidity can turn a small cooling issue into an urgent comfort problem quickly. Calling early gives the service team better information and may help prevent additional damage." },
    ],
    relatedServices: ["ac-repair", "hvac-maintenance", "ac-installation"],
  },
  {
    slug: "5-signs-you-need-ac-repair-in-manassas-va",
    title: "5 Signs You Need AC Repair in Manassas, VA",
    seoTitle: "5 Signs You Need AC Repair in Manassas, VA",
    description: "Learn five warning signs of an air conditioning problem, what they may mean, and when to schedule professional AC repair in Manassas, Virginia.",
    date: "2026-06-25",
    dateModified: "2026-08-03",
    readTime: "8 min read",
    category: "AC repair",
    focusKeyword: "AC repair Manassas VA",
    keywords: ["AC repair Manassas VA", "air conditioning repair Manassas", "signs AC needs repair", "HVAC repair Northern Virginia", "emergency AC service Manassas"],
    image: articleImages.service,
    imageAlt: "Hot & Cool Services HVAC project team at a local property",
    quickAnswer: "Warm air, weak airflow, constant cycling, ice or water around the indoor unit, and an unexplained rise in summer energy use are five common signs that an air conditioner needs attention. Shut the system down and call promptly if you notice burning odors, repeated breaker trips, significant leaking, or ice on the refrigerant line.",
    intro: "A cooling problem rarely improves on its own. Recognizing the early signs can help you avoid a hotter home, higher energy use, and a more expensive breakdown. Homeowners and property teams in Manassas can use the warning signs below to decide when a basic check is reasonable and when professional AC repair is the safer next step.",
    sections: [
      { heading: "1. Your AC blows warm air", body: "Warm or room-temperature air from the supply registers can point to thermostat settings, restricted airflow, an electrical fault, a frozen coil, or a refrigeration issue. Confirm the thermostat is set to Cool and the filter is accessible and reasonably clean. If those checks do not solve the problem, schedule a diagnosis rather than repeatedly lowering the thermostat." },
      { heading: "2. Airflow feels weak in several rooms", body: "Weak airflow may come from a clogged filter, blower problem, dirty coil, duct restriction, or blocked return. Rooms farthest from the system may show the first symptoms, but whole-home airflow loss often indicates an equipment or distribution problem. Keep registers open and avoid opening mechanical panels to investigate." },
      { heading: "3. The system starts and stops constantly", body: "Short cycling means the equipment runs for unusually brief periods and starts again before completing a normal cooling cycle. Dirty components, thermostat placement, electrical problems, equipment sizing, and other faults can contribute. Frequent cycling increases wear and often leaves humidity and room temperatures inconsistent." },
      { heading: "4. You notice ice, water, or drainage trouble", body: "Ice on refrigerant tubing or water around the indoor unit deserves prompt attention. Restricted airflow, a frozen coil, or a clogged condensate drain may be involved. Turn cooling off if ice is present and keep water away from electrical equipment. Continuing to operate a frozen system may worsen the issue or create property damage." },
      { heading: "5. Energy use rises without a clear reason", body: "A sudden summer utility increase can mean the air conditioner is operating longer or working harder than normal. Compare similar weather periods when possible and consider whether thermostat habits changed. If comfort has declined at the same time, maintenance or repair may restore more reliable operation." },
      { heading: "Choosing an AC repair company in Manassas", body: "Look for a local HVAC company that asks about the symptoms, evaluates the system before recommending work, and explains repair or replacement options clearly. Hot & Cool Services supports homeowners, landlords, apartment communities, and businesses in Manassas and across Northern Virginia. Share the property address, equipment type if known, and when the problem began when requesting service." },
    ],
    relatedServices: ["ac-repair", "hvac-maintenance", "ac-installation"],
  },
  {
    slug: "7-hvac-tips-for-homeowners-this-summer",
    title: "7 Summer HVAC Tips for Northern Virginia Homeowners",
    seoTitle: "7 Summer HVAC Tips for Northern Virginia Homes",
    description: "Use seven practical HVAC tips to improve cooling comfort, efficiency, and reliability during hot, humid Northern Virginia summers.",
    date: "2026-06-15",
    dateModified: "2026-08-03",
    readTime: "9 min read",
    category: "Summer HVAC maintenance",
    focusKeyword: "summer HVAC tips Northern Virginia",
    keywords: ["summer HVAC tips Northern Virginia", "AC maintenance tips", "home cooling tips Virginia", "HVAC maintenance Northern Virginia", "air conditioner efficiency tips"],
    image: articleImages.maintenance,
    imageAlt: "HVAC technicians working on heating and cooling equipment",
    quickAnswer: "The most useful summer HVAC habits are checking the filter, keeping the outdoor unit and indoor registers clear, using a steady thermostat schedule, reducing afternoon heat gain, monitoring humidity and warning signs, and arranging seasonal maintenance before the system is under its heaviest load.",
    intro: "Northern Virginia heat and humidity put real demand on a cooling system. A few practical habits can improve comfort, reduce avoidable strain, and make unusual behavior easier to recognize. These tips apply to many central air conditioners and heat pumps, but the equipment manufacturer’s instructions and property rules should always come first.",
    sections: [
      { heading: "1. Replace or clean the HVAC filter", body: "Check the filter monthly during heavy use and follow the equipment or filter manufacturer’s replacement guidance. A dirty filter can restrict airflow and make the system operate longer. Use the correct dimensions and avoid choosing a filter that is more restrictive than the equipment can support." },
      { heading: "2. Keep the outdoor condenser clear", body: "Remove leaves and loose debris around the outdoor unit and maintain open space for airflow. Trim vegetation without sending clippings into the coil. Do not bend fins, spray electrical areas, or open equipment panels. Property residents should follow community access rules when outdoor equipment is shared or restricted." },
      { heading: "3. Use a steady thermostat schedule", body: "Large, frequent temperature changes can make the system work harder to recover during the hottest part of the day. A programmable or smart schedule can support more consistent comfort. Avoid setting the thermostat far below the desired temperature; it generally does not make a standard system cool faster." },
      { heading: "4. Keep supply and return airflow open", body: "Closing too many vents can disrupt system airflow. Make sure rugs, curtains, furniture, and stored items do not block supply registers or return grilles. If one area stays uncomfortable even with open registers, uneven airflow, duct leakage, insulation, sun exposure, or system capacity may need evaluation." },
      { heading: "5. Reduce afternoon heat gain", body: "Close shades on sun-facing windows during the hottest hours, use exhaust fans appropriately, and avoid adding unnecessary indoor heat from cooking or appliances at peak times. Weather stripping and attic insulation can also influence comfort, although those improvements fall outside routine HVAC maintenance." },
      { heading: "6. Watch humidity and early warning signs", body: "New noises, odors, weak airflow, short cycling, water near the indoor equipment, ice on refrigerant lines, or widening temperature differences are good reasons to request service before a complete breakdown. High indoor humidity despite normal thermostat settings can also indicate that the system is not operating as expected." },
      { heading: "7. Schedule seasonal HVAC maintenance", body: "A professional tune-up can identify drainage trouble, dirty components, loose electrical connections, unusual wear, and other conditions that may affect summer reliability. The right maintenance schedule depends on equipment type, age, operating hours, and property needs, but planning before peak demand is usually easier than reacting during a heat wave." },
      { heading: "Summer HVAC help across Northern Virginia", body: "Hot & Cool Services provides AC repair, installation, and HVAC maintenance for homes, apartments, businesses, and managed properties in Manassas, Northern Virginia, nearby Maryland communities, and Washington, DC. If your system is already struggling, maintenance alone may not correct an active fault; request a diagnosis so the cause can be identified." },
    ],
    relatedServices: ["hvac-maintenance", "ac-repair", "duct-cleaning"],
  },
  {
    slug: "how-often-should-hvac-maintenance-be-scheduled",
    title: "How Often Should HVAC Maintenance Be Scheduled?",
    seoTitle: "How Often to Schedule HVAC Maintenance in Virginia",
    description: "Learn when to schedule HVAC maintenance in Virginia, what affects service frequency, and what a seasonal heating or AC tune-up can help identify.",
    date: "2026-07-18",
    dateModified: "2026-08-03",
    readTime: "8 min read",
    category: "HVAC maintenance",
    focusKeyword: "HVAC maintenance Northern Virginia",
    keywords: ["HVAC maintenance Northern Virginia", "how often HVAC maintenance", "AC tune up Manassas VA", "heating maintenance Virginia", "commercial HVAC maintenance"],
    image: articleImages.property,
    imageAlt: "Hot & Cool Services technicians completing property HVAC work",
    quickAnswer: "Many homes benefit from a cooling-system check before summer and a heating-system check before winter. Equipment age, fuel type, operating hours, manufacturer guidance, indoor-air concerns, and whether the system serves a home or commercial property can change the appropriate schedule.",
    intro: "HVAC maintenance is most useful when it is planned around the equipment and the way the property operates. A lightly used residential system and equipment serving an active commercial or multifamily property may not need the same schedule. The goal is to prepare for peak weather, identify developing problems, and keep essential components operating as intended.",
    sections: [
      { heading: "Plan cooling maintenance before sustained summer heat", body: "Spring service gives the cooling system an opportunity to be checked before long run times and high humidity arrive. Scheduling early can also make it easier to address drainage, airflow, electrical, or component concerns before cooling becomes urgent." },
      { heading: "Plan heating maintenance before cold weather", body: "A fall check can help prepare a furnace or heat pump for winter demand. Heating equipment should be evaluated with attention to its energy source, controls, airflow, electrical components, and safe operation. Any gas odor, combustion concern, or carbon-monoxide alarm requires immediate safety action rather than a routine appointment." },
      { heading: "Some systems and properties need more frequent attention", body: "Maintenance needs can increase when equipment operates for long hours, serves many occupants, is exposed to dust or construction activity, has a history of drainage trouble, or supports temperature-sensitive operations. Apartment and commercial properties may also need coordinated filter, access, and documentation schedules.", bullets: ["Older equipment or a history of recurring faults", "Heavy operating hours or high occupancy", "Multiple systems at one managed property", "Renovation dust or unusual environmental conditions", "Manufacturer or warranty maintenance requirements"] },
      { heading: "What an HVAC maintenance visit can help identify", body: "The exact checklist depends on the system. A professional may review operating condition, temperature response, accessible electrical components, drainage, airflow, filters, coils, controls, and visible signs of wear. Maintenance does not guarantee that equipment will never fail, but it can reveal conditions worth addressing before they become more disruptive." },
      { heading: "Maintenance and repair are different services", body: "A tune-up is not a substitute for diagnosing an active failure. If the system is not heating or cooling, trips a breaker, leaks, freezes, produces a burning odor, or makes a new mechanical sound, describe those symptoms when scheduling. The visit may need to be treated as repair rather than routine maintenance." },
      { heading: "HVAC maintenance for Northern Virginia properties", body: "Hot & Cool Services supports seasonal maintenance for homeowners, businesses, apartment communities, and managed properties throughout Manassas, Northern Virginia, Washington, DC, and nearby Maryland. Property teams can provide unit counts, equipment information, access requirements, and timing goals so recurring work can be discussed clearly." },
    ],
    relatedServices: ["hvac-maintenance", "commercial-hvac", "apartment-hvac"],
  },
  {
    slug: "heat-pump-vs-furnace-northern-virginia",
    title: "Heat Pump vs. Furnace for Northern Virginia Homes",
    seoTitle: "Heat Pump vs. Furnace in Northern Virginia",
    description: "Compare heat pumps and furnaces for Northern Virginia homes, including comfort, efficiency, existing utilities, installation, and replacement considerations.",
    date: "2026-07-08",
    dateModified: "2026-08-03",
    readTime: "9 min read",
    category: "Heating installation",
    focusKeyword: "heat pump vs furnace Northern Virginia",
    keywords: ["heat pump vs furnace Northern Virginia", "heat pump installation Virginia", "furnace replacement Manassas VA", "best heating system Northern Virginia", "HVAC installation Northern Virginia"],
    image: articleImages.cooling,
    imageAlt: "Hot & Cool Services technicians prepared for an HVAC service visit",
    quickAnswer: "A heat pump provides both heating and cooling with electricity, while a furnace produces heat using gas, oil, or electricity and is normally paired with a separate cooling system. The better option depends on the home’s existing utilities and ductwork, equipment condition, comfort goals, electrical capacity, installation scope, and budget—not on one technology being best for every property.",
    intro: "Replacing a heating system is a long-term decision, and Northern Virginia homeowners often compare a heat pump with a furnace. Both can be appropriate. The most practical choice starts with the building, the existing system, available utilities, and how the household wants heating and cooling to operate.",
    sections: [
      { heading: "How a heat pump heats and cools", body: "An air-source heat pump moves heat rather than creating it directly. In cooling mode it operates much like an air conditioner. In heating mode it draws available heat from outside air and transfers it indoors. Many systems use auxiliary or backup heat during certain conditions, and system design matters for comfort and electrical demand." },
      { heading: "How a furnace provides heat", body: "A furnace heats air and distributes it through ductwork. Gas furnaces use combustion, while electric furnaces use electric resistance elements. A furnace does not provide cooling by itself, so homes with central AC typically combine the furnace blower and duct system with separate cooling equipment." },
      { heading: "Compare the home’s existing utilities and equipment", body: "An existing gas service, electrical panel capacity, duct layout, indoor and outdoor equipment locations, and remaining equipment condition all affect project scope. Reusing compatible infrastructure may reduce changes, while switching system types can introduce electrical, venting, drainage, or equipment-location work." },
      { heading: "Comfort and efficiency depend on correct design", body: "Equipment type is only one part of performance. Correct sizing, duct condition, airflow, controls, installation quality, insulation, and building heat loss all influence room temperature and operating cost. Oversized equipment can create short cycles and uneven comfort, so replacement should not be based only on the old unit’s nameplate size." },
      { heading: "Questions to ask before choosing a replacement", body: "A useful proposal should explain how the recommendation fits the property and which parts of the existing system will change. Homeowners should understand equipment capacity, efficiency ratings, backup heat strategy where applicable, thermostat compatibility, warranty terms, maintenance needs, and the expected installation scope.", bullets: ["Will existing ductwork support the proposed airflow?", "Does the electrical service need modification?", "How will backup heat operate?", "Which indoor and outdoor components are being replaced?", "What maintenance does the manufacturer require?"] },
      { heading: "Get a property-specific heating recommendation", body: "A heat pump versus furnace decision cannot be made reliably from climate alone. Hot & Cool Services evaluates heating and cooling needs for homes and managed properties in Manassas, Northern Virginia, Washington, DC, and nearby Maryland. An on-site assessment can identify practical repair and replacement paths for the actual equipment and building." },
    ],
    relatedServices: ["heating-installation", "ac-installation", "hvac-maintenance"],
  },
];

export const blogBySlug = Object.fromEntries(blogs.map((post) => [post.slug, post]));
