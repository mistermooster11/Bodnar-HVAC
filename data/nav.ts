export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    href: "/services-page",
    children: [
      { label: "AC Repair & Troubleshooting", href: "/ac-repair" },
      { label: "Furnace Repair & Diagnostics", href: "/furnace-repair" },
      { label: "Heat Pump Systems", href: "/heat-pump" },
      { label: "AC Maintenance & Tune-Ups", href: "/ac-maintenance" },
      { label: "Heating Maintenance & Tune-Ups", href: "/heating-maintenance" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Contact",
    href: "/contact-us",
    children: [
      { label: "Get In Touch", href: "/contact-us" },
    ],
  },
];

/* ── Legacy nav shape (used by DesktopNav.tsx) ──── */
export const nav = [
  { label: "Home",     href: "/",            hasDropdown: false },
  { label: "About",    href: "/about-us",    hasDropdown: false },
  { label: "Services", href: "/services-page", hasDropdown: true },
  { label: "Blog",     href: "/blog",        hasDropdown: false },
  { label: "Contact",  href: "/contact-us",  hasDropdown: false },
];

export const services = [
  { label: "AC Repair & Troubleshooting",    href: "/ac-repair" },
  { label: "Furnace Repair & Diagnostics",   href: "/furnace-repair" },
  { label: "Heat Pump Systems",              href: "/heat-pump" },
  { label: "AC Maintenance & Tune-Ups",      href: "/ac-maintenance" },
  { label: "Heating Maintenance & Tune-Ups", href: "/heating-maintenance" },
];

/* ── Footer links ─────────────────────────────── */
export type FooterLink = { label: string; href: string };

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Services", href: "/services-page/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact-us/" },
];

export const servicesLinks: FooterLink[] = [
  { label: "AC Repair & Troubleshooting", href: "/ac-repair/" },
  { label: "Furnace Repair & Diagnostics", href: "/furnace-repair/" },
  { label: "Heat Pump Systems", href: "/heat-pump/" },
  { label: "AC Maintenance & Tune-Ups", href: "/ac-maintenance/" },
  { label: "Heating Maintenance & Tune-Ups", href: "/heating-maintenance/" },
];
