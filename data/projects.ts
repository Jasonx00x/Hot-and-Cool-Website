const transform = "f_auto,q_auto,w_1200,h_800,c_fill,g_auto";
const cloudinary = (version: string, publicId: string) =>
  `https://res.cloudinary.com/kw3mrd3f/image/upload/${transform}/${version}/${publicId}.jpg`;

export type Project = {
  name: string;
  location: string;
  type: string;
  description: string;
  images: string[];
  management?: {
    name: string;
    url: string;
  };
};

export const projects: Project[] = [
  {
    name: "Parkside Landing",
    location: "Rockville, MD",
    type: "Managed Property HVAC",
    description: "HVAC and property-service support for a Rockville apartment community managed by Grady Management.",
    management: {
      name: "Grady Management",
      url: "https://www.gradymgt.com/mdparksidelanding",
    },
    images: [
      "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1200,h_800,c_fill,g_auto/v1786063923/933dac_689ac0e2eac347b1bbb2c8ad7961f937_mv2_qjrdfg.avif",
      "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1200,h_800,c_fill,g_auto/v1786064057/Parkside_Landing_hdk74v.webp",
      "https://res.cloudinary.com/kw3mrd3f/image/upload/f_auto,q_auto,w_1200,h_800,c_fill,g_auto/v1786063923/933dac_0c70e0cc2f0d4e4fb60010f130e62c23_mv2_xheqsm.avif",
    ],
  },
  {
    name: "Meridian at Gallery Place",
    location: "Washington, DC",
    type: "Managed Property HVAC",
    description: "Responsive HVAC and property service support for a prominent multifamily community.",
    images: [
      cloudinary("v1785417816", "Merdian-at-Gallery-Place_mffsxo"),
      cloudinary("v1785417820", "Merdian-at-Gallaery-Place-2_hlarwt"),
      cloudinary("v1785417836", "Merdian-at-Gallaery-Place-3_j5sztj"),
    ],
  },
  {
    name: "Meridian at Ballston Commons",
    location: "Arlington, VA",
    type: "Commercial HVAC",
    description: "Heating and cooling support coordinated for a high-demand Arlington property.",
    images: [
      cloudinary("v1785417303", "Meredian-at-Ballston-commons-Arlington_1_mxqx1p"),
      cloudinary("v1785417349", "Meredian-at-Ballston-commons-Arlington-2_sjcv6p"),
      cloudinary("v1785417356", "Meredian-at-Ballston-commons-Arlington-3_iajz8e"),
    ],
  },
  {
    name: "Clarendon Apartments",
    location: "Arlington, VA",
    type: "Apartment Service",
    description: "Ongoing HVAC and maintenance support for multifamily property needs.",
    images: [
      cloudinary("v1785417721", "Clarendon-Apartments_hbjhm1"),
      cloudinary("v1785417760", "Clarendon-Apartments-2_dmkmwz"),
      cloudinary("v1785417781", "Clarendon-Apartments3_zfx76n"),
    ],
  },
  {
    name: "Alate Old Towne",
    location: "Alexandria, VA",
    type: "HVAC Repair & Maintenance",
    description: "Reliable comfort-system support for a modern Alexandria community.",
    images: [
      cloudinary("v1785417566", "Allat-Old-town_1_sme5l8"),
      cloudinary("v1785417571", "Allat-Old-town-2_cz8toe"),
      cloudinary("v1785417661", "Allat-Old-town-3_umrotf"),
    ],
  },
];
