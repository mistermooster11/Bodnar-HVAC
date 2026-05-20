import type { MetadataRoute } from "next";

const BASE = "https://[TODO: production-domain]";

const serviceSlugs = [
  "furnace-repair",
  "furnace-installation",
  "wall-heater-repair",
  "heat-pump-systems",
  "ac-repair",
  "ac-installation",
  "ac-maintenance",
  "heating-maintenance",
  "airflow-balancing",
  "filtration-upgrades",
  "dryer-duct-replacement",
  "thermostat-installation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = serviceSlugs.map((slug) => ({
    url: `${BASE}/service/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/about-us/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/services/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/contact-us/`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.8 },
    ...serviceUrls,
  ];
}
