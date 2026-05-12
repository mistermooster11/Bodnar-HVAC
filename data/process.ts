// Process section data — 3 cột tab từ HTML gốc carpenter-electric.com
// Layout: left 3 tabs | right crossfade bg image

export interface ProcessTab {
  index: string;
  title: string;
  href: string;
  items: string[];
  bgKey: string; // key trong images
}

export const processTabs: ProcessTab[] = [
  {
    index: "01",
    title: "Commercial",
    href: "/service/commercial/",
    items: ["Security Lighting", "Dock and Marine Lighting", "Site and Parking Lot"],
    bgKey: "processCommercial",
  },
  {
    index: "02",
    title: "Industrial",
    href: "/service/ev-charging-stations/",
    items: ["Car Charging Stations", "Single home or Multiple Family solutions"],
    bgKey: "processIndustrial",
  },
  {
    index: "03",
    title: "Residential",
    href: "/service/residential/",
    items: ["Landscaping", "Dimming and Controls", "Accent Lighting"],
    bgKey: "processResidential",
  },
];
