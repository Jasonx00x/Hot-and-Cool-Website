const transform = "f_auto,q_auto,w_1200,h_800,c_fill,g_auto";
const cloudinary = (version: string, publicId: string) =>
  `https://res.cloudinary.com/kw3mrd3f/image/upload/${transform}/${version}/${publicId}.jpg`;

export type ProjectFact = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  address: string;
  type: string;
  description: string;
  propertySummary: string;
  serviceSummary: string;
  support: string[];
  coordination: string[];
  relationship: string;
  facts: ProjectFact[];
  images: string[];
  propertyUrl: string;
  propertySource: string;
  management?: {
    name: string;
    url: string;
  };
};

export const projects: Project[] = [
  {
    slug: "parkside-landing",
    name: "Parkside Landing",
    location: "Rockville, MD",
    address: "735 Monroe Street, Rockville, MD 20850",
    type: "Managed Property HVAC",
    description: "HVAC and property-service support for a Rockville apartment community managed by Grady Management.",
    propertySummary: "Parkside Landing is a Rockville apartment community with one-, two-, and three-bedroom homes, a swimming pool, and a playground. Its Montgomery County location provides access to nearby transit, shopping, dining, and major routes into the wider DC metro area.",
    serviceSummary: "Hot & Cool Services supports Parkside Landing with multifamily HVAC service organized around occupied homes, resident comfort, and the property team's schedule. Each request is approached with clear communication, practical diagnostics, and an orderly path from access through closeout.",
    support: [
      "Heating and cooling troubleshooting for reported comfort issues",
      "Occupied-unit access coordinated with the designated property contact",
      "Repair and maintenance recommendations based on observed conditions",
      "Status updates that help management communicate the next step",
    ],
    coordination: [
      "Confirm the affected unit, area, equipment, and urgency",
      "Plan access around resident availability and property operations",
      "Work carefully in occupied spaces and protect the surrounding area",
      "Verify system operation and communicate any recommended follow-up",
    ],
    relationship: "Dependable property service is built one visit at a time. At Parkside Landing, our goal is to give the management team a responsive HVAC partner that respects residents, communicates clearly, and follows each approved task through to completion.",
    facts: [
      { label: "Community", value: "Multifamily apartments" },
      { label: "Homes", value: "1–3 bedrooms" },
      { label: "Setting", value: "Rockville, Maryland" },
      { label: "Management", value: "Grady Management" },
    ],
    management: {
      name: "Grady Management",
      url: "https://www.gradymgt.com/mdparksidelanding",
    },
    propertyUrl: "https://www.gradymgt.com/mdparksidelanding",
    propertySource: "Grady Management property profile",
    images: [
      "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1200,h_800,c_fill,g_auto/v1786063923/933dac_689ac0e2eac347b1bbb2c8ad7961f937_mv2_qjrdfg.avif",
      "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1200,h_800,c_fill,g_auto/v1786064057/Parkside_Landing_hdk74v.webp",
      "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1200,h_800,c_fill,g_auto/v1786063923/933dac_0c70e0cc2f0d4e4fb60010f130e62c23_mv2_xheqsm.avif",
    ],
  },
  {
    slug: "meridian-at-gallery-place",
    name: "Meridian at Gallery Place",
    location: "Washington, DC",
    address: "450 Massachusetts Avenue NW, Washington, DC 20001",
    type: "Managed Property HVAC",
    description: "Responsive HVAC and property service support for a prominent downtown Washington multifamily community.",
    propertySummary: "Meridian at Gallery Place is a 14-story apartment community in downtown Washington, DC. The property includes studio, one-, and two-bedroom homes, underground parking, fitness amenities, and rooftop resident spaces near the Gallery Place–Chinatown Metro station.",
    serviceSummary: "Hot & Cool Services helps the property team respond to heating and cooling needs in a busy high-rise environment. Our service approach keeps building access, occupied apartments, resident communication, and management approvals aligned so technical work can move forward with less disruption.",
    support: [
      "Responsive HVAC diagnostics for apartment comfort concerns",
      "Service coordination for a high-rise, occupied community",
      "Repair and maintenance support for applicable comfort equipment",
      "Clear findings and follow-up information for property contacts",
    ],
    coordination: [
      "Review the service request and identify the affected apartment or area",
      "Coordinate arrival, access, and any building-specific procedures",
      "Explain findings before moving ahead with approved work",
      "Confirm operation and close the communication loop with management",
    ],
    relationship: "In a downtown high-rise, reliability includes much more than the repair itself. We work to earn continued confidence through punctual coordination, respect for occupied spaces, straightforward recommendations, and useful updates for the property team.",
    facts: [
      { label: "Building", value: "14-story apartment tower" },
      { label: "Homes", value: "Studio–2 bedrooms" },
      { label: "Setting", value: "Downtown Washington, DC" },
      { label: "Management", value: "Paradigm Management II" },
    ],
    management: {
      name: "Paradigm Management II",
      url: "https://www.paradigmcos.com/meridian-at-gallery-place",
    },
    propertyUrl: "https://www.meridiangalleryplace.com/",
    propertySource: "Official Meridian at Gallery Place website",
    images: [
      cloudinary("v1785417816", "Merdian-at-Gallery-Place_mffsxo"),
      cloudinary("v1785417820", "Merdian-at-Gallaery-Place-2_hlarwt"),
      cloudinary("v1785417836", "Merdian-at-Gallaery-Place-3_j5sztj"),
    ],
  },
  {
    slug: "meridian-at-ballston-commons",
    name: "Meridian at Ballston Commons",
    location: "Arlington, VA",
    address: "900 N Stuart Street, Arlington, VA 22203",
    type: "Commercial HVAC",
    description: "Heating and cooling support coordinated for a large, high-demand Arlington apartment property.",
    propertySummary: "Meridian at Ballston Commons is a 21-story, 438-unit apartment community in Arlington's Ballston neighborhood. The property includes individual climate control, underground parking, resident workspaces, fitness facilities, and rooftop amenities near the Ballston Metro station.",
    serviceSummary: "Hot & Cool Services provides property-focused HVAC support suited to the scale and access needs of this high-rise community. We organize service around the property contact, the affected residents, system conditions, and the approvals needed to complete the work responsibly.",
    support: [
      "Heating and cooling diagnostics for resident comfort requests",
      "High-rise access and scheduling coordinated with property staff",
      "Repair, maintenance, and equipment-condition guidance",
      "Practical documentation of findings and recommended next steps",
    ],
    coordination: [
      "Prioritize the request based on comfort impact and system symptoms",
      "Confirm access instructions before the scheduled arrival",
      "Keep the property contact informed as findings become clear",
      "Test applicable operation and report any additional needs",
    ],
    relationship: "A community of this scale needs vendors who can fit into established property operations. Our aim is to be the HVAC team management can call for organized communication, careful work, and consistent follow-through across service requests.",
    facts: [
      { label: "Building", value: "21-story high-rise" },
      { label: "Scale", value: "438 apartments" },
      { label: "Setting", value: "Ballston, Arlington" },
      { label: "Management", value: "Paradigm Management II" },
    ],
    management: {
      name: "Paradigm Management II",
      url: "https://www.paradigmcos.com/meridian-at-ballston-commons",
    },
    propertyUrl: "https://www.meridianballston.com/",
    propertySource: "Official Meridian at Ballston Commons website",
    images: [
      cloudinary("v1785417303", "Meredian-at-Ballston-commons-Arlington_1_mxqx1p"),
      cloudinary("v1785417349", "Meredian-at-Ballston-commons-Arlington-2_sjcv6p"),
      cloudinary("v1785417356", "Meredian-at-Ballston-commons-Arlington-3_iajz8e"),
    ],
  },
  {
    slug: "the-clarendon-apartments",
    name: "The Clarendon Apartments",
    location: "Arlington, VA",
    address: "1200 N Herndon Street, Arlington, VA 22201",
    type: "Apartment HVAC Service",
    description: "Ongoing HVAC and maintenance support for an occupied multifamily community in Clarendon.",
    propertySummary: "The Clarendon is an Arlington apartment community offering studio through three-bedroom homes with central air conditioning, resident lounges, fitness facilities, a swimming pool, controlled access, and concierge service near the Clarendon Metro station.",
    serviceSummary: "Hot & Cool Services supports comfort needs at The Clarendon with an occupied-property mindset. We coordinate with the property team, arrive prepared for the reported issue, protect the work area, and communicate findings so management can make informed repair and maintenance decisions.",
    support: [
      "Troubleshooting for central-air comfort and performance concerns",
      "Occupied-apartment service coordinated through property staff",
      "Repair and preventative maintenance support where applicable",
      "Clear explanations for management and resident-facing follow-up",
    ],
    coordination: [
      "Gather useful system symptoms before dispatch",
      "Confirm unit access and the designated onsite contact",
      "Complete approved work with attention to cleanliness and disruption",
      "Share results, operating status, and any future recommendation",
    ],
    relationship: "Trust with a property team grows from predictable service: answer the call, respect the resident's home, explain the issue, and finish the approved work carefully. That standard guides our support at The Clarendon.",
    facts: [
      { label: "Community", value: "Urban apartment property" },
      { label: "Homes", value: "Studio–3 bedrooms" },
      { label: "Comfort", value: "Central air conditioning" },
      { label: "Setting", value: "Clarendon, Arlington" },
    ],
    propertyUrl: "https://clarendonapts.com/",
    propertySource: "Official The Clarendon website",
    images: [
      cloudinary("v1785417721", "Clarendon-Apartments_hbjhm1"),
      cloudinary("v1785417760", "Clarendon-Apartments-2_dmkmwz"),
      cloudinary("v1785417781", "Clarendon-Apartments3_zfx76n"),
    ],
  },
  {
    slug: "alate-old-town",
    name: "Alate Old Town",
    location: "Alexandria, VA",
    address: "1112 First Street, Alexandria, VA 22314",
    type: "HVAC Repair & Maintenance",
    description: "Comfort-system support for a 62+ apartment community in Old Town Alexandria.",
    propertySummary: "Alate Old Town is a 62+ senior living rental community with one- and two-bedroom apartments near the Potomac River and Braddock Road Metro. The property includes elevators, around-the-clock onsite staff, resident gathering spaces, fitness facilities, and in-home heating and air conditioning.",
    serviceSummary: "Hot & Cool Services approaches work at Alate Old Town with particular attention to resident comfort, communication, and low-disruption access. We coordinate with onsite staff so HVAC needs can be evaluated and addressed in a way that respects both the residents and the community's daily operations.",
    support: [
      "Heating and air-conditioning troubleshooting for resident comfort",
      "Service scheduling coordinated with onsite community staff",
      "Repair and maintenance guidance based on equipment conditions",
      "Respectful work practices suited to an occupied senior community",
    ],
    coordination: [
      "Confirm the resident area, reported symptoms, and urgency",
      "Coordinate access with the appropriate onsite team member",
      "Minimize disruption and keep the immediate work area orderly",
      "Verify operation and clearly explain any recommended follow-up",
    ],
    relationship: "For a senior living community, dependable comfort service should feel calm, respectful, and well coordinated. We work to give onsite staff confidence that each request will receive careful attention and a clear next step.",
    facts: [
      { label: "Community", value: "62+ senior apartments" },
      { label: "Homes", value: "1–2 bedrooms" },
      { label: "Support", value: "24/7 onsite staff" },
      { label: "Setting", value: "Old Town Alexandria" },
    ],
    propertyUrl: "https://alateoldtown.com/",
    propertySource: "Official Alate Old Town website",
    images: [
      cloudinary("v1785417566", "Allat-Old-town_1_sme5l8"),
      cloudinary("v1785417571", "Allat-Old-town-2_cz8toe"),
      cloudinary("v1785417661", "Allat-Old-town-3_umrotf"),
    ],
  },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
