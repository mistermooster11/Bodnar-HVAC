import type { ServiceDetail } from "@/lib/types";

// ── Sidebar navigation (shared across all service detail pages) ──────────────
export const servicesSidebarLinks = [
  { label: "Furnace Repair & Diagnostics",    href: "/service/furnace-repair/" },
  { label: "New Furnace Installation",         href: "/service/furnace-installation/" },
  { label: "Wall Heater Repair",               href: "/service/wall-heater-repair/" },
  { label: "Heat Pump Systems",                href: "/service/heat-pump-systems/" },
  { label: "A/C Repair & Troubleshooting",     href: "/service/ac-repair/" },
  { label: "Precision A/C Installation",       href: "/service/ac-installation/" },
  { label: "A/C Maintenance & Tune-Ups",       href: "/service/ac-maintenance/" },
  { label: "Heating Maintenance & Tune-Ups",   href: "/service/heating-maintenance/" },
  { label: "Airflow Balancing",                href: "/service/airflow-balancing/" },
  { label: "Filtration System Upgrades",       href: "/service/filtration-upgrades/" },
  { label: "Dryer Duct Replacement",           href: "/service/dryer-duct-replacement/" },
  { label: "Thermostat Installation",          href: "/service/thermostat-installation/" },
];

// ── All service detail pages ─────────────────────────────────────────────────
export const serviceDetails: ServiceDetail[] = [
  {
    slug: "furnace-repair",
    title: "Furnace Repair & Diagnostics",
    metaDescription:
      "Furnace repair and diagnostics in Redwood City by Bodnar HVAC — Repair-First approach, owner-operated, all major brands. Serving the Mid-Peninsula since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-heating.webp",
        alt: "Furnace repair and diagnostics — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "REPAIR-FIRST FURNACE DIAGNOSTICS" },
      {
        type: "paragraph",
        text: "John Bodnar, a 3rd-generation HVAC technician with 20+ years of experience, personally handles every furnace diagnosis in Redwood City and across the Mid-Peninsula. When your furnace isn't heating properly, cycling on and off, or making unfamiliar noises, John's first instinct is to fix it — not replace it.",
      },
      { type: "h3", text: "What We Diagnose & Repair:" },
      {
        type: "list",
        items: [
          "No heat or insufficient heating",
          "Short cycling (system turns on and off frequently)",
          "Pilot light and ignition failures",
          "Cracked heat exchangers and safety shutdowns",
          "Gas valve, pressure switch, and control board issues",
          "Blower motor and capacitor failures",
          "Unusual noises: banging, rattling, squealing",
          "All major brands: Carrier, Bryant, Trane, Lennox, Goodman, Rheem",
        ],
      },
      { type: "h3", text: "Our Repair Warranty" },
      {
        type: "paragraph",
        text: "We stand behind our workmanship with a 60-day labor warranty on every repair. If the same issue returns within that window, we'll come back and make it right at no additional labor cost — backed by our BBB-accredited, fully licensed status.",
      },
    ],
  },

  {
    slug: "furnace-installation",
    title: "New Furnace Installation",
    metaDescription:
      "Furnace installation and replacement in Redwood City by Bodnar HVAC — properly sized, meticulously installed by Ted. Serving the Mid-Peninsula since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-heating.webp",
        alt: "Furnace installation — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "FURNACE REPLACEMENT DONE RIGHT" },
      {
        type: "paragraph",
        text: "Choosing a new furnace is a major investment. At Bodnar HVAC, we don't just 'swap boxes' — we engineer a long-term comfort solution for your home. Ted Becker, our lead installer with over a decade of Mid-Peninsula experience, personally handles every installation to ensure your new system is properly sized, correctly installed, and set up for maximum efficiency.",
      },
      { type: "h3", text: "Our Installation Process:" },
      {
        type: "list",
        items: [
          "Free estimate and load calculation to properly size the system",
          "Equipment recommendation based on your home's ductwork and layout — not dealer incentives",
          "Professional removal and disposal of your old unit",
          "Master-level installation by Ted with no shortcuts",
          "System startup, testing, and full walkthrough",
          "All major brands installed: Carrier, Bryant, Trane, Lennox, Goodman, Rheem",
        ],
      },
      { type: "h3", text: "Why Proper Sizing Matters" },
      {
        type: "paragraph",
        text: "An oversized furnace short-cycles and wears out faster. An undersized one runs constantly and never fully heats your home. We match equipment to your home's specific needs — not to what's easiest for us to install or most profitable to sell.",
      },
    ],
  },

  {
    slug: "wall-heater-repair",
    title: "Wall Heater Repair",
    metaDescription:
      "Wall heater repair in Redwood City and the Mid-Peninsula by Bodnar HVAC — specialized service for classic Peninsula homes since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-specialized.webp",
        alt: "Wall heater repair — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "WALL HEATER REPAIR FOR MID-PENINSULA HOMES" },
      {
        type: "paragraph",
        text: "Wall heaters are a fixture in many older Mid-Peninsula homes, and most HVAC companies have stopped servicing them. Bodnar HVAC specializes in diagnosing and repairing these systems, keeping your existing unit running safely rather than pushing a full replacement.",
      },
      { type: "h3", text: "Common Wall Heater Issues We Fix:" },
      {
        type: "list",
        items: [
          "Pilot light won't stay lit",
          "Thermocouple failure",
          "No ignition or intermittent operation",
          "Thermostat and control issues",
          "Gas valve problems",
          "Blower failure (on fan-forced models)",
          "Safety shutoff triggers",
        ],
      },
      {
        type: "paragraph",
        text: "If your wall heater is a classic gas model or a fan-forced unit, call us before assuming it needs to be replaced. With 50+ years of experience on Mid-Peninsula homes, we've seen — and fixed — all of them.",
      },
    ],
  },

  {
    slug: "heat-pump-systems",
    title: "Heat Pump Systems",
    metaDescription:
      "Heat pump installation and repair in Redwood City by Bodnar HVAC — modern, efficient heating and cooling for Mid-Peninsula homes since 1976.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1861036262-e1774388962336.jpg",
        alt: "Heat pump systems — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "HEAT PUMP SYSTEMS — REPAIR & INSTALLATION" },
      {
        type: "paragraph",
        text: "Heat pumps are the most efficient way to heat and cool a home in the Bay Area's mild climate. Whether you're considering upgrading to a heat pump system or your existing unit needs repair, Bodnar HVAC has the expertise to evaluate, recommend, and execute the right solution for your home.",
      },
      { type: "h3", text: "Heat Pump Services:" },
      {
        type: "list",
        items: [
          "Heat pump system evaluation and recommendations",
          "New heat pump installation (ducted and ductless/mini-split)",
          "Heat pump repair and diagnostics",
          "Refrigerant recharge and leak detection",
          "Defrost cycle issues and reversing valve failures",
          "Mini-split installation and service",
          "Brands serviced: Mitsubishi, Daikin, Carrier, Trane, and more",
        ],
      },
      { type: "h3", text: "Is a Heat Pump Right for My Home?" },
      {
        type: "paragraph",
        text: "We'll give you an honest evaluation based on your home's existing infrastructure and energy costs — not based on what we have on the truck. If a heat pump transition makes sense for your situation, we'll tell you exactly why and what it will cost.",
      },
    ],
  },

  {
    slug: "ac-repair",
    title: "A/C Repair & Troubleshooting",
    metaDescription:
      "A/C repair and diagnostics in Redwood City by Bodnar HVAC — refrigerant leaks, electrical faults, and performance issues. Mid-Peninsula since 1976.",
    content: [
      {
        type: "image",
        src: "/images/AdobeStock_1861036262-e1774388962336.jpg",
        alt: "AC repair and troubleshooting — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "EXPERT A/C REPAIR ACROSS THE MID-PENINSULA" },
      {
        type: "paragraph",
        text: "If your air conditioner is running but not cooling, short-cycling, leaking, or making unusual sounds, Bodnar HVAC diagnoses the actual problem — not just the most expensive fix. John's 20+ years of hands-on experience cover complex refrigerant issues and electrical faults that most technicians escalate unnecessarily.",
      },
      { type: "h3", text: "What We Diagnose & Repair:" },
      {
        type: "list",
        items: [
          "Not cooling or insufficient cooling",
          "Refrigerant leaks and recharge",
          "Capacitor and contactor failures",
          "Compressor diagnostics",
          "Electrical faults and blown fuses",
          "Frozen evaporator coils",
          "Thermostat and control board issues",
          "All major brands: Carrier, Bryant, Trane, Lennox, Goodman, Rheem",
        ],
      },
      {
        type: "paragraph",
        text: "Most A/C repairs are completed on the same visit. We carry common parts on the truck and won't schedule a return trip for something that can be resolved today.",
      },
    ],
  },

  {
    slug: "ac-installation",
    title: "Precision A/C Installation",
    metaDescription:
      "A/C installation and replacement in Redwood City by Bodnar HVAC — properly sized for Mid-Peninsula homes. Serving the area since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-ac.webp",
        alt: "AC installation — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "PRECISION A/C INSTALLATION" },
      {
        type: "paragraph",
        text: "A properly installed air conditioner will outlast a sloppily installed one by years. At Bodnar HVAC, Ted personally handles every installation, ensuring your new system is sized to your home's specific layout and ductwork — not just the closest available model. We aren't beholden to a single manufacturer, so you get the unit that actually fits your needs.",
      },
      { type: "h3", text: "Our Installation Includes:" },
      {
        type: "list",
        items: [
          "Free estimate and load calculation",
          "Equipment recommendation independent of dealer incentives",
          "Proper refrigerant line sizing and installation",
          "Electrical connection and circuit verification",
          "Ductwork inspection and adjustment if needed",
          "System startup, performance testing, and owner walkthrough",
        ],
      },
    ],
  },

  {
    slug: "ac-maintenance",
    title: "A/C Maintenance & Tune-Ups",
    metaDescription:
      "A/C maintenance and tune-ups in Redwood City by Bodnar HVAC — real-load testing during peak summer heat. Serving the Mid-Peninsula since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-ac.webp",
        alt: "AC maintenance and tune-up — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "A/C MAINTENANCE — REAL PERFORMANCE TESTING" },
      {
        type: "paragraph",
        text: "Bodnar HVAC performs A/C maintenance under real-world loads — not just a visual check during mild weather. We test your system when the heat is actually on, so we can catch failures before they leave you without cooling during a Bay Area heat event.",
      },
      { type: "h3", text: "What's Included in Our A/C Tune-Up:" },
      {
        type: "list",
        items: [
          "Refrigerant level check and leak inspection",
          "Capacitor, contactor, and electrical connection testing",
          "Evaporator and condenser coil inspection",
          "Airflow measurement and filter check",
          "Thermostat calibration and operation test",
          "Safety controls verification",
          "Performance report and honest recommendations",
        ],
      },
      {
        type: "paragraph",
        text: "New clients: John personally performs every initial maintenance visit to establish a rigorous baseline for your system. Returning clients are handled by Ted, our lead installer, who brings an installer's eye for wear patterns and potential failures.",
      },
    ],
  },

  {
    slug: "heating-maintenance",
    title: "Heating Maintenance & Tune-Ups",
    metaDescription:
      "Furnace and heating maintenance in Redwood City by Bodnar HVAC — seasonal tune-ups that prevent mid-winter breakdowns. Mid-Peninsula since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-heating.webp",
        alt: "Heating maintenance and tune-up — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "HEATING MAINTENANCE THAT ACTUALLY PREVENTS BREAKDOWNS" },
      {
        type: "paragraph",
        text: "The whole point of annual maintenance is to prevent problems during extreme weather — when wait times for appointments are typically 2–3 weeks. Bodnar HVAC performs heating maintenance in the fall, before the season, so your system is tested and verified before you actually need it.",
      },
      { type: "h3", text: "What's Included in Our Heating Tune-Up:" },
      {
        type: "list",
        items: [
          "Heat exchanger inspection for cracks or safety hazards",
          "Burner inspection and cleaning",
          "Igniter and flame sensor testing",
          "Gas valve and pressure check",
          "Electrical connections and control board inspection",
          "Blower motor and belt inspection",
          "Filter replacement (customer-supplied or we can provide)",
          "Full safety baseline documentation on first visit",
        ],
      },
    ],
  },

  {
    slug: "airflow-balancing",
    title: "Airflow Balancing",
    metaDescription:
      "Airflow balancing in Redwood City by Bodnar HVAC — solving the hot-and-cold-room problem for Mid-Peninsula homes. Since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-heating.webp",
        alt: "Airflow balancing — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "AIRFLOW BALANCING — SOLVING THE HOT AND COLD ROOM PROBLEM" },
      {
        type: "paragraph",
        text: "If some rooms in your home never reach the right temperature while others are too warm, the problem is usually airflow imbalance — not your thermostat. Bodnar HVAC diagnoses duct distribution issues and corrects them properly, without guesswork or unnecessary upgrades.",
      },
      { type: "h3", text: "What We Address:" },
      {
        type: "list",
        items: [
          "Rooms that won't heat or cool to thermostat setpoint",
          "Duct leakage reducing system efficiency",
          "Improperly sized or damper-restricted branches",
          "Pressure imbalances causing equipment strain",
          "Recommendations for duct modification or damper installation",
        ],
      },
    ],
  },

  {
    slug: "filtration-upgrades",
    title: "Filtration System Upgrades",
    metaDescription:
      "Air filtration system upgrades in Redwood City by Bodnar HVAC — electronic air cleaners and high-efficiency filter boxes for Mid-Peninsula homes.",
    content: [
      {
        type: "image",
        src: "/images/process-specialized.webp",
        alt: "Filtration system upgrades — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "FILTRATION SYSTEM UPGRADES" },
      {
        type: "paragraph",
        text: "Better filtration improves indoor air quality and protects your HVAC equipment from premature wear. Bodnar HVAC installs electronic air cleaners and high-efficiency media filter boxes that outperform standard 1-inch filters without restricting airflow or damaging your system.",
      },
      { type: "h3", text: "Filtration Options We Install:" },
      {
        type: "list",
        items: [
          "High-efficiency media filter boxes (MERV 11–16)",
          "Electronic air cleaners (whole-home)",
          "UV air purifiers for biologicals and mold",
          "Consultation on the right filtration level for your system's airflow",
        ],
      },
    ],
  },

  {
    slug: "dryer-duct-replacement",
    title: "Dryer Duct Replacement",
    metaDescription:
      "Dryer duct replacement in Redwood City by Bodnar HVAC — ensuring safety and efficiency beyond the HVAC unit. Mid-Peninsula since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-heating.webp",
        alt: "Dryer duct replacement — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "DRYER DUCT REPLACEMENT" },
      {
        type: "paragraph",
        text: "A blocked, kinked, or foil-flex dryer duct is a fire hazard — and one of the most common home safety oversights. Bodnar HVAC replaces dryer ducts with rigid or semi-rigid metal ductwork that meets current code, improves dryer efficiency, and eliminates the lint buildup risk that causes fires.",
      },
      { type: "h3", text: "Signs Your Dryer Duct Needs Replacement:" },
      {
        type: "list",
        items: [
          "Dryer takes multiple cycles to dry a load",
          "Dryer runs hot or shuts off from thermal overload",
          "Visible foil-flex duct (fire code violation in many jurisdictions)",
          "Duct runs more than 25 feet or has multiple bends",
          "Lint accumulating around the dryer or exterior vent",
        ],
      },
    ],
  },

  {
    slug: "thermostat-installation",
    title: "Thermostat Installation",
    metaDescription:
      "Thermostat installation in Redwood City by Bodnar HVAC — smart home integration and proper system compatibility. Mid-Peninsula since 1976.",
    content: [
      {
        type: "image",
        src: "/images/process-specialized.webp",
        alt: "Thermostat installation — Bodnar HVAC Redwood City",
      },
      { type: "h2", text: "THERMOSTAT INSTALLATION & SMART HOME INTEGRATION" },
      {
        type: "paragraph",
        text: "A thermostat that isn't properly matched to your HVAC system causes short-cycling, inaccurate temperatures, and premature equipment wear. Bodnar HVAC installs and configures thermostats that actually communicate correctly with your furnace, A/C, or heat pump — including smart thermostats for energy management.",
      },
      { type: "h3", text: "Thermostat Services:" },
      {
        type: "list",
        items: [
          "Smart thermostat installation (Nest, Ecobee, Honeywell, and more)",
          "Compatibility check before any purchase",
          "Wiring and configuration for single-stage and two-stage systems",
          "Heat pump thermostat wiring (O/B wire, aux heat setup)",
          "Thermostat repair and replacement",
        ],
      },
    ],
  },
];

/** Helper: find service detail by slug */
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
