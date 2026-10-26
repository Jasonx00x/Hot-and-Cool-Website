import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/hvac-maintenance", destination: "/services/hvac-maintenance", permanent: true },
      { source: "/ac-repair", destination: "/services/ac-repair", permanent: true },
      { source: "/heating-repair-manassas-va", destination: "/service-areas/manassas-va", permanent: true },
      { source: "/hvac-installation-manassas-va", destination: "/service-areas/manassas-va", permanent: true },
      { source: "/duct-cleaning-manassas-va", destination: "/services/duct-cleaning", permanent: true },
      { source: "/service", destination: "/services", permanent: true },
      { source: "/allat-old-town-2", destination: "/projects/alate-old-town", permanent: true },
      { source: "/merdian-at-gallaery-place-2", destination: "/projects/meridian-at-gallery-place", permanent: true },
    ];
  },
  images: { remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }] }
};

export default nextConfig;
