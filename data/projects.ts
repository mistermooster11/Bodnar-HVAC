export interface Project {
  id: string;
  title: string;
  location: string;
  href: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "furnace-repair",
    title: "Furnace Repair & Diagnostic",
    location: "Redwood City, CA",
    href: "/service/furnace-repair/",
    image: "/images/lopo1-1.jpg", // [TODO: Replace with real Bodnar job photo]
  },
  {
    id: "heat-pump-install",
    title: "Heat Pump System Installation",
    location: "Palo Alto, CA",
    href: "/service/heat-pump-systems/",
    image: "/images/lopo2.jpg", // [TODO: Replace with real Bodnar job photo]
  },
  {
    id: "ac-maintenance",
    title: "A/C Maintenance & Tune-Up",
    location: "San Carlos, CA",
    href: "/service/ac-maintenance/",
    image: "/images/lopo3.jpg", // [TODO: Replace with real Bodnar job photo]
  },
  {
    id: "furnace-installation",
    title: "New Furnace Installation",
    location: "Menlo Park, CA",
    href: "/service/furnace-installation/",
    image: "/images/lopo4.jpg", // [TODO: Replace with real Bodnar job photo]
  },
  {
    id: "airflow-balancing",
    title: "Airflow Balancing",
    location: "Atherton, CA",
    href: "/service/airflow-balancing/",
    image: "/images/lopo5.jpg", // [TODO: Replace with real Bodnar job photo]
  },
  {
    id: "wall-heater-repair",
    title: "Wall Heater Repair",
    location: "Woodside, CA",
    href: "/service/wall-heater-repair/",
    image: "/images/lopo6.jpg", // [TODO: Replace with real Bodnar job photo]
  },
];

export const projectsSectionContent = {
  subtitle: "PAST PROJECTS",
  heading: "Precision HVAC work across the Mid-Peninsula — built to last",
};
