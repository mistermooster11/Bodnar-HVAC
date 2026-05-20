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
  { title: "Furnace Repair & Diagnostics",      href: "/service/furnace-repair/",        imgKey: "serviceResidential" },
  { title: "New Furnace Installation",           href: "/service/furnace-installation/",  imgKey: "serviceCommercial" },
  { title: "Wall Heater Repair",                 href: "/service/wall-heater-repair/",    imgKey: "serviceEV" },
  { title: "Heat Pump Systems",                  href: "/service/heat-pump-systems/",     imgKey: "serviceSmart" },
  { title: "A/C Repair & Troubleshooting",       href: "/service/ac-repair/",             imgKey: "serviceDiagnostics" },
  { title: "Precision A/C Installation",         href: "/service/ac-installation/",       imgKey: "serviceEngineering" },
  { title: "A/C Maintenance & Tune-Ups",         href: "/service/ac-maintenance/",        imgKey: "serviceGenerator" },
  { title: "Heating Maintenance & Tune-Ups",     href: "/service/heating-maintenance/",   imgKey: "serviceMisc" },
  { title: "Airflow Balancing",                  href: "/service/airflow-balancing/",     imgKey: "serviceResidential" },
  { title: "Filtration System Upgrades",         href: "/service/filtration-upgrades/",   imgKey: "serviceCommercial" },
  { title: "Dryer Duct Replacement",             href: "/service/dryer-duct-replacement/",imgKey: "serviceEV" },
  { title: "Thermostat Installation",            href: "/service/thermostat-installation/",imgKey: "serviceSmart" },
];

// ── Services PAGE data (app/services/page.tsx) ─────────────────────────────

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
      title: "Furnace Repair & Diagnostics",
      slug: "/service/furnace-repair/",
      image: "/images/AdobeStock_1661331836-1.jpg",
      excerpt:
        "John personally diagnoses every furnace issue with a Repair-First focus. Expert diagnostics covering gas, electric, and heat pump furnaces across all major brands.",
    },
    {
      title: "New Furnace Installation",
      slug: "/service/furnace-installation/",
      image: "/images/AdobeStock_1738812468-e1774389187161.jpg",
      excerpt:
        "Meticulously engineered by Ted for maximum longevity. We size every system to your home's specific ductwork — not just the easiest box to swap.",
    },
    {
      title: "Wall Heater Repair",
      slug: "/service/wall-heater-repair/",
      image: "/images/AdobeStock_830008704-1.jpg",
      excerpt:
        "Specialized service for classic Mid-Peninsula homes. We repair and restore wall heaters that other companies no longer support.",
    },
    {
      title: "Heat Pump Systems",
      slug: "/service/heat-pump-systems/",
      image: "/images/AdobeStock_1429423159.jpg",
      excerpt:
        "Modern, efficient heating and cooling transitions. We evaluate your home's needs and recommend the heat pump system that actually fits — not the one a dealer is pushing.",
    },
    {
      title: "A/C Repair & Troubleshooting",
      slug: "/service/ac-repair/",
      image: "/images/AdobeStock_1568613684.jpg",
      excerpt:
        "Expert diagnostics for refrigerant leaks, electrical faults, and performance issues. Most repairs completed on the same visit.",
    },
    {
      title: "Precision A/C Installation",
      slug: "/service/ac-installation/",
      image: "/images/AdobeStock_1781483078.jpg",
      excerpt:
        "Properly sized and installed units to ensure efficiency and comfort for the long haul. We match equipment to your home, not to our margins.",
    },
    {
      title: "A/C Maintenance & Tune-Ups",
      slug: "/service/ac-maintenance/",
      image: "/images/generator-1.jpg",
      excerpt:
        "Real-load testing during peak summer heat to catch preventable failures before they strand you. Serving new and existing clients.",
    },
    {
      title: "Heating Maintenance & Tune-Ups",
      slug: "/service/heating-maintenance/",
      image: "/images/AdobeStock_1370273000-1.jpg",
      excerpt:
        "John personally performs every first-time visit to establish a rigorous safety baseline. Ted handles all subsequent tune-ups with the installer's eye for detail.",
    },
    {
      title: "Airflow Balancing",
      slug: "/service/airflow-balancing/",
      image: "/images/AdobeStock_1661331836-1.jpg",
      excerpt:
        "Solving the hot-and-cold-room problem for good. We diagnose duct imbalances and correct them without guesswork.",
    },
    {
      title: "Filtration System Upgrades",
      slug: "/service/filtration-upgrades/",
      image: "/images/AdobeStock_1738812468-e1774389187161.jpg",
      excerpt:
        "Electronic air cleaners and high-efficiency filter box installs to improve indoor air quality throughout your home.",
    },
    {
      title: "Dryer Duct Replacement",
      slug: "/service/dryer-duct-replacement/",
      image: "/images/AdobeStock_830008704-1.jpg",
      excerpt:
        "Ensuring safety and efficiency beyond the HVAC unit. Blocked or kinked dryer ducts are a fire hazard — we replace them properly.",
    },
    {
      title: "Thermostat Installation",
      slug: "/service/thermostat-installation/",
      image: "/images/AdobeStock_1429423159.jpg",
      excerpt:
        "Smart home integration for better energy management. We install and configure thermostats that actually communicate with your system.",
    },
  ] as ServicePageItem[],
};
