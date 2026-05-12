// Services section data — từ HTML gốc carpenter-electric.com
// 8 services theo đúng thứ tự slider

export const servicesContent = {
  subtitle: "24/7 Electrician Services",
  heading: "Trusted electrical solutions for every need",
  body: "Our team of skilled electricians provide top quality services tailored to your needs. From ensuring electrical safety to improving energy efficiency, we are here to handle everything with precision and care.",
  cta: { label: "More Services", href: "/services-01/" },
};

export interface ServiceItem {
  title: string;
  href: string;
  imgKey: string;
}

export const servicesList: ServiceItem[] = [
  { title: "Residential Electrical & Lighting",       href: "/service/residential/",                    imgKey: "serviceResidential" },
  { title: "Commercial Electrical & Lighting",        href: "/service/commercial/",                     imgKey: "serviceCommercial" },
  { title: "EV Charging Stations",                   href: "/service/ev-charging-stations/",            imgKey: "serviceEV" },
  { title: "Smart Home, Security & Low Voltage",     href: "/service/smart-home-security-low-voltage/", imgKey: "serviceSmart" },
  { title: "Diagnostics, Testing & Safety",          href: "/service/electrical-diagnostics-safety/",   imgKey: "serviceDiagnostics" },
  { title: "Electrical Engineering & Planning",      href: "/service/electrical-engineering-planning/", imgKey: "serviceEngineering" },
  { title: "Generator Services",                     href: "/service/generator-services/",              imgKey: "serviceGenerator" },
  { title: "Motorized Shades, Screens & Shutters",   href: "/service/specialty-installations/",         imgKey: "serviceMisc" },
];

// ── Services PAGE data (app/services/page.tsx) ─────────────────────────────
// Source: https://carpenter-electric.com/services/ (post-81)

export interface ServicePageItem {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
}

export const servicesPageData = {
  subtitle: "24/7 Electrician Services",
  heading: "Outstanding Residential & Commercial Services",
  services: [
    {
      title: "Residential Electrical & Lighting",
      slug: "/service/residential/",
      image: "/images/AdobeStock_1661331836-1.jpg",
      excerpt:
        "Our residential electrical and lighting services include professional landscape lighting solutions designed to enhance safety, visibility, and curb appeal.",
    },
    {
      title: "Commercial Electrical & Lighting",
      slug: "/service/commercial/",
      image: "/images/AdobeStock_1738812468-e1774389187161.jpg",
      excerpt:
        "We specialize in retrofitting outdated commercial electrical systems, including FPE and Zinsco equipment.",
    },
    {
      title: "EV Charging Stations",
      slug: "/service/ev-charging-stations/",
      image: "/images/AdobeStock_830008704-1.jpg",
      excerpt:
        "The world's smartest, smallest, and most advanced home electric vehicle (EV) charging station.",
    },
    {
      title: "Smart Home, Security & Low Voltage",
      slug: "/service/smart-home-security-low-voltage/",
      image: "/images/AdobeStock_1429423159.jpg",
      excerpt:
        "We create intelligent home automation systems that place complete control at your fingertips.",
    },
    {
      title: "Diagnostics, Testing & Safety",
      slug: "/service/electrical-diagnostics-safety/",
      image: "/images/AdobeStock_1568613684.jpg",
      excerpt:
        "Infrared thermography allows Carpenter Electric to inspect electrical systems without disrupting operations.",
    },
    {
      title: "Electrical Engineering & Planning",
      slug: "/service/electrical-engineering-planning/",
      image: "/images/AdobeStock_1781483078.jpg",
      excerpt:
        "CAD design (high voltage & low voltage) for commercial and residential projects, from initial planning through final installation.",
    },
    {
      title: "Generator Services",
      slug: "/service/generator-services/",
      image: "/images/generator-1.jpg",
      excerpt:
        "Carpenter Electric provides professional generator installation and setup for residential, commercial, and industrial properties.",
    },
    {
      title: "Motorized Shades, Screens & Shutters",
      slug: "/service/specialty-installations/",
      image: "/images/AdobeStock_1370273000-1.jpg",
      excerpt:
        "Carpenter Electric specializes in motorized window treatments and blackout shades for homes and businesses.",
    },
  ] as ServicePageItem[],
};
