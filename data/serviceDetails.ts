// Service detail page data — nguồn truth từ carpenter-electric.com/service/[slug]/
// Rule 8: Component chỉ chứa JSX — nội dung đặt tại đây

import type { ServiceDetail } from "@/lib/types";

// ── Sidebar navigation (dùng chung cho mọi service detail page) ─────────────
export const servicesSidebarLinks = [
  { label: "Residential Electrical & Lighting",     href: "/service/residential/" },
  { label: "Commercial Electrical & Lighting",      href: "/service/commercial/" },
  { label: "EV Charging Stations",                  href: "/service/ev-charging-stations/" },
  { label: "Smart Home, Security & Low Voltage",    href: "/service/smart-home-security-low-voltage/" },
  { label: "Diagnostics, Testing & Safety",         href: "/service/electrical-diagnostics-safety/" },
  { label: "Electrical Engineering & Planning",     href: "/service/electrical-engineering-planning/" },
  { label: "Generator Services",                    href: "/service/generator-services/" },
  { label: "Motorized Shades, Screens & Shutters",  href: "/service/specialty-installations/" },
];

// ── All service detail pages data ───────────────────────────────────────────
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "commercial",
    title: "Commercial",
    metaDescription:
      "Commercial electrical & lighting services by Carpenter Electric — security lighting, dock & marine, site lighting, retrofitting, and more in West Palm Beach.",
    content: [
      {
        type: "image",
        src: "/images/services/commercial-main.jpg",
        alt: "Commercial electrical services",
      },
      { type: "h2", text: "SECURITY LIGHTING" },
      {
        type: "paragraph",
        text: "Security lighting is one of the most effective ways to deter crime and enhance safety for commercial properties. Well-lit buildings, entrances, and surrounding areas are less attractive to criminal activity and provide better visibility for employees and visitors. Our commercial electrical team designs, installs, and maintains security lighting systems that improve safety, reduce risk, and support compliance requirements for offices, warehouses, retail spaces, and industrial facilities.",
      },
      { type: "h3", text: "We Offer:" },
      {
        type: "list",
        items: [
          "Repairs",
          "Maintenance monitoring",
          "Full electrical gear swap-outs (main gear, meter banks, busduct)",
          "Retrofitting old electrical (including FPE / Zinsco equipment)",
          "Site + parking lot lighting",
          "Security lighting",
          "High mast lighting",
          "Dock + marine lighting",
          "Bucket truck service",
        ],
      },
      { type: "h3", text: "DOCK AND MARINE LIGHTING" },
      {
        type: "paragraph",
        text: "Carpenter Electric provides complete dock and marine electrical and lighting solutions for commercial and marina environments. From site lighting and power pedestals to davit power and dock infrastructure, we deliver reliable systems built to withstand harsh marine conditions. We also support marinas of all sizes with ongoing service and maintenance, ensuring long-term performance, safety, and operational consistency.",
      },
      {
        type: "image",
        src: "/images/services/commercial-dock.webp",
        alt: "Dock and marine lighting",
      },
      { type: "h3", text: "SITE AND PARKING LOT" },
      {
        type: "paragraph",
        text: "Proper site and parking lot lighting is essential for safety, security, and accessibility at commercial properties. We supply and install a wide range of parking lot lighting fixtures and poles suitable for retail centers, medical offices, industrial sites, churches, and roadways. Our solutions enhance visibility, improve traffic flow, and create secure, well-lit environments while supporting energy efficiency and long-term durability.",
      },
      {
        type: "image",
        src: "/images/services/commercial-parking.webp",
        alt: "Site and parking lot lighting",
      },
      { type: "h3", text: "HIGH MAST LIGHTING" },
      {
        type: "image",
        src: "/images/services/commercial-highmast.jpg",
        alt: "High mast lighting",
      },
      { type: "h3", text: "Retrofitting old electrical, including FPE Zinsco equipment" },
      {
        type: "image",
        src: "/images/services/commercial-retrofit.jpg",
        alt: "Retrofitting old electrical equipment",
      },
      { type: "h3", text: "Full electrical gear swap-outs (main gear, meter banks, busduct)" },
      {
        type: "image",
        src: "/images/services/commercial-gear.jpg",
        alt: "Electrical gear swap-outs",
      },
      { type: "h3", text: "Bucket truck service" },
      {
        type: "image",
        src: "/images/services/commercial-bucket.jpg",
        alt: "Bucket truck service",
      },
      { type: "h3", text: "Repairs" },
      {
        type: "image",
        src: "/images/services/commercial-repairs.webp",
        alt: "Electrical repairs",
      },
      { type: "h3", text: "Maintenance monitoring" },
      {
        type: "image",
        src: "/images/services/commercial-maintenance.jpg",
        alt: "Maintenance monitoring",
      },
    ],
  },

  // ── Stub entries — sẽ bổ sung nội dung đầy đủ sau ─────────────────────────
  {
    slug: "residential",
    title: "Residential",
    metaDescription:
      "Residential electrical & lighting services by Carpenter Electric — landscape lighting, panel upgrades, whole-home rewiring, and more.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1661331836-1.jpg",
        alt: "Residential electrical services",
      },
      { type: "h2", text: "RESIDENTIAL ELECTRICAL & LIGHTING" },
      {
        type: "paragraph",
        text: "Our residential electrical and lighting services include professional landscape lighting solutions designed to enhance safety, visibility, and curb appeal. From panel upgrades to full home rewiring, we deliver quality workmanship with dependable results.",
      },
    ],
  },
  {
    slug: "ev-charging-stations",
    title: "EV Charging Stations",
    metaDescription:
      "EV charging station installation by Carpenter Electric — residential and commercial EV chargers in West Palm Beach.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_830008704-1.jpg",
        alt: "EV Charging Stations",
      },
      { type: "h2", text: "EV CHARGING STATIONS" },
      {
        type: "paragraph",
        text: "The world's smartest, smallest, and most advanced home electric vehicle (EV) charging station. We install and service Level 1, Level 2, and DC fast chargers for residential and commercial clients.",
      },
    ],
  },
  {
    slug: "smart-home-security-low-voltage",
    title: "Smart Home, Security & Low Voltage",
    metaDescription:
      "Smart home automation, security systems, and low voltage wiring by Carpenter Electric in West Palm Beach.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1429423159.jpg",
        alt: "Smart Home, Security & Low Voltage",
      },
      { type: "h2", text: "SMART HOME, SECURITY & LOW VOLTAGE" },
      {
        type: "paragraph",
        text: "We create intelligent home automation systems that place complete control at your fingertips. From security cameras and access control to structured wiring and audio/visual systems, our low voltage team handles the full scope.",
      },
    ],
  },
  {
    slug: "electrical-diagnostics-safety",
    title: "Diagnostics, Testing & Safety",
    metaDescription:
      "Electrical diagnostics, infrared thermography, and safety testing by Carpenter Electric in West Palm Beach.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1568613684.jpg",
        alt: "Diagnostics, Testing & Safety",
      },
      { type: "h2", text: "DIAGNOSTICS, TESTING & SAFETY" },
      {
        type: "paragraph",
        text: "Infrared thermography allows Carpenter Electric to inspect electrical systems without disrupting operations. Our licensed electricians identify potential hazards before they become costly failures.",
      },
    ],
  },
  {
    slug: "electrical-engineering-planning",
    title: "Electrical Engineering & Planning",
    metaDescription:
      "Electrical engineering, CAD design, and project planning by Carpenter Electric in West Palm Beach.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1781483078.jpg",
        alt: "Electrical Engineering & Planning",
      },
      { type: "h2", text: "ELECTRICAL ENGINEERING & PLANNING" },
      {
        type: "paragraph",
        text: "CAD design (high voltage & low voltage) for commercial and residential projects, from initial planning through final installation. Our engineering team ensures every project meets code and exceeds expectations.",
      },
    ],
  },
  {
    slug: "generator-services",
    title: "Generator Services",
    metaDescription:
      "Professional generator installation, maintenance, and repair by Carpenter Electric in West Palm Beach.",
    content: [
      {
        type: "image",
        src: "/images/generator-1.jpg",
        alt: "Generator Services",
      },
      { type: "h2", text: "GENERATOR SERVICES" },
      {
        type: "paragraph",
        text: "Carpenter Electric provides professional generator installation and setup for residential, commercial, and industrial properties. We service all major brands and offer ongoing maintenance agreements to keep your power on.",
      },
    ],
  },
  {
    slug: "specialty-installations",
    title: "Motorized Shades, Screens & Shutters",
    metaDescription:
      "Motorized window treatments, blackout shades, screens, and shutters by Carpenter Electric in West Palm Beach.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1370273000-1.jpg",
        alt: "Motorized Shades, Screens & Shutters",
      },
      { type: "h2", text: "MOTORIZED SHADES, SCREENS & SHUTTERS" },
      {
        type: "paragraph",
        text: "Carpenter Electric specializes in motorized window treatments and blackout shades for homes and businesses. We install and program roller shades, screen systems, and storm shutters for complete comfort and protection.",
      },
    ],
  },
];

/** Helper: lấy service detail theo slug */
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
