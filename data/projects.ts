export interface Project {
  id: string;
  title: string;
  location: string;
  href: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "circuit-breaker",
    title: "Circuit Breaker Troubleshooting",
    location: "Wembley, London",
    href: "/projects/circuit-breaker-troubleshooting/",
    image: "/images/lopo1-1.jpg",
  },
  {
    id: "industrial",
    title: "Industrial Electrical Solutions",
    location: "Camden, London",
    href: "/projects/industrial-electrical-solutions/",
    image: "/images/lopo2.jpg",
  },
  {
    id: "generator",
    title: "Generator Installation & Maintenance",
    location: "Hackney, London",
    href: "/projects/generator-installation-maintenance/",
    image: "/images/lopo3.jpg",
  },
  {
    id: "ceiling-fan",
    title: "Ceiling Fan & Fixture Wiring",
    location: "Islington, London",
    href: "/projects/ceiling-fan-fixture-wiring/",
    image: "/images/lopo4.jpg",
  },
  {
    id: "panel-upgrade",
    title: "Electrical Panel Upgrade",
    location: "Southwark, London",
    href: "/projects/electrical-panel-upgrade/",
    image: "/images/lopo5.jpg",
  },
  {
    id: "outdoor-lighting",
    title: "Outdoor Lighting Installation",
    location: "Greenwich, London",
    href: "/projects/outdoor-lighting-installation/",
    image: "/images/lopo6.jpg",
  },
];

export const projectsSectionContent = {
  subtitle: "PAST PROJECTS",
  heading: "Top-grade electrical solutions built by trusted industry experts",
};
