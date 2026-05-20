// Process section — 3 service category tabs

export interface ProcessTab {
  index: string;
  title: string;
  href: string;
  items: string[];
  bgKey: string;
}

export const processTabs: ProcessTab[] = [
  {
    index: "01",
    title: "Heating & Furnace",
    href: "/service/furnace-repair/",
    items: [
      "Furnace Repair & Diagnostics",
      "New Furnace Installation",
      "Wall Heater Repair",
      "Heating Maintenance & Tune-Ups",
    ],
    bgKey: "processCommercial",
  },
  {
    index: "02",
    title: "Air Conditioning",
    href: "/service/ac-repair/",
    items: [
      "A/C Repair & Troubleshooting",
      "Precision A/C Installation",
      "A/C Maintenance & Tune-Ups",
      "Heat Pump Systems",
    ],
    bgKey: "processIndustrial",
  },
  {
    index: "03",
    title: "Specialized Services",
    href: "/service/airflow-balancing/",
    items: [
      "Airflow Balancing",
      "Filtration System Upgrades",
      "Dryer Duct Replacement",
      "Thermostat Installation",
    ],
    bgKey: "processResidential",
  },
];
