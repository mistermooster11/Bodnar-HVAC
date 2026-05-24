export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "AC Repair & Troubleshooting",      href: "/ac-repair/" },
  { label: "Furnace Repair & Diagnostics",     href: "/furnace-repair/" },
  { label: "Heat Pump Systems",                href: "/heat-pump/" },
  { label: "AC Maintenance & Tune-Ups",        href: "/ac-maintenance/" },
  { label: "Heating Maintenance & Tune-Ups",   href: "/heating-maintenance/" },
];

export const servicesContent = {
  subtitle: "HVAC Services — Redwood City & Mid-Peninsula",
  heading: "Every service performed personally by John or Ted",
  body: "From a stubborn wall heater to a full heat pump upgrade, we handle every job with the same Repair-First commitment. No commission-based technicians. No one-size-fits-all recommendations. Just honest diagnostics and expert work.",
  cta: { label: "View All Services", href: "/services/" },
};

export interface ServiceItem {
  title: string;
  href: string;
  imgKey: string;
}

export const servicesList: ServiceItem[] = [
  { title: "AC Repair & Troubleshooting",      href: "/ac-repair/",           imgKey: "serviceDiagnostics" },
  { title: "Furnace Repair & Diagnostics",     href: "/furnace-repair/",      imgKey: "serviceResidential" },
  { title: "Heat Pump Systems",               href: "/heat-pump/",           imgKey: "serviceSmart" },
  { title: "AC Maintenance & Tune-Ups",        href: "/ac-maintenance/",      imgKey: "serviceGenerator" },
  { title: "Heating Maintenance & Tune-Ups",   href: "/heating-maintenance/", imgKey: "serviceMisc" },
  { title: "Airflow Balancing",               href: "/services-page/",       imgKey: "serviceResidential" },
  { title: "Thermostat Installation",         href: "/services-page/",       imgKey: "serviceSmart" },
  { title: "Dryer Duct Replacement",          href: "/services-page/",       imgKey: "serviceEV" },
];

export interface ServicePageItem {
  title: string;
  slug: string;
  image: string;
  excerpt: string;
}

export const servicesPageData = {
  subtitle: "HVAC Services — Redwood City & Mid-Peninsula",
  heading: "Repair-First HVAC Solutions for Every Mid-Peninsula Home",
  services: [
    {
      title: "AC Repair & Troubleshooting",
      slug: "/ac-repair/",
      image: "/images/AdobeStock_1568613684.jpg",
      excerpt: "Expert diagnostics for refrigerant leaks, electrical faults, and performance issues. Most repairs completed on the same visit.",
    },
    {
      title: "Furnace Repair & Diagnostics",
      slug: "/furnace-repair/",
      image: "/images/AdobeStock_1661331836-1.jpg",
      excerpt: "John personally diagnoses every furnace issue with a Repair-First focus. Expert diagnostics covering gas, electric, and heat pump furnaces.",
    },
    {
      title: "Heat Pump Systems",
      slug: "/heat-pump/",
      image: "/images/AdobeStock_1429423159.jpg",
      excerpt: "Modern, efficient heating and cooling transitions. We evaluate your home's needs and recommend the system that actually fits.",
    },
    {
      title: "AC Maintenance & Tune-Ups",
      slug: "/ac-maintenance/",
      image: "/images/AdobeStock_1781483078.jpg",
      excerpt: "Real-load testing during peak summer heat to catch preventable failures before they strand you.",
    },
    {
      title: "Heating Maintenance & Tune-Ups",
      slug: "/heating-maintenance/",
      image: "/images/AdobeStock_1370273000-1.jpg",
      excerpt: "John personally performs every first-time visit to establish a rigorous safety baseline.",
    },
  ] as ServicePageItem[],
};

export const services: Service[] = [
  {
    number: "01",
    title: "AC Repair & Troubleshooting",
    image: "/images/AdobeStock_1568613684.jpg",
    href: "/ac-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Furnace Repair & Diagnostics",
    image: "/images/AdobeStock_1661331836-1.jpg",
    href: "/furnace-repair/",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Heat Pump Systems",
    image: "/images/AdobeStock_1429423159.jpg",
    href: "/heat-pump/",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "AC Maintenance & Tune-Ups",
    image: "/images/AdobeStock_1781483078.jpg",
    href: "/ac-maintenance/",
    width: 535,
    height: 643,
  },
  {
    number: "05",
    title: "Heating Maintenance & Tune-Ups",
    image: "/images/AdobeStock_1370273000-1.jpg",
    href: "/heating-maintenance/",
    width: 535,
    height: 643,
  },
];
