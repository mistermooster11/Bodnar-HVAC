export const images = {
  // Logo
  logo: "/images/bodnar-hvac-logo.png",

  // Hero slider backgrounds (3 slides) — real Bodnar HVAC photos
  heroSlide1: "/images/hero-1.webp",   // Technician working on AC unit
  heroSlide2: "/images/hero-2.webp",   // Aerial view of the Mid-Peninsula
  heroSlide3: "/images/hero-3.jpg",    // B&W control board repair detail

  // About / How We Can Help section
  aboutHero: "/images/about-team.webp",      // John & Ted team photo
  aboutBanner: "/images/about-baner-3.png",
  aboutOverlay: "/images/john-bodnar.webp",  // John Bodnar portrait

  // What We Do / Process section tabs
  processCommercial: "/images/process-heating.webp",    // Maintenance tools
  processIndustrial: "/images/process-ac.webp",         // Installation shot
  processResidential: "/images/process-specialized.webp", // Repair specialist

  // "What We Do" section image (square)
  whatWeDo: "/images/what-we-do.webp",  // Workmanship detail

  // Testimonials section
  testimonialsSide: "/images/testimonials-side.webp",  // Comfort/home photo
  testimonialAvatar1: "/images/testimo-avatar-4.jpg",
  testimonialAvatar2: "/images/testimo-avatar-5.jpg",
  testimonialAvatar3: "/images/testimo-avatar-6.jpg",

  // FAQ section
  faqImage: "/images/john-bodnar.webp",

  // Gallery / Past Projects — real Bodnar HVAC job photos
  gallery1: "/images/gallery-1.webp",  // Technician at AC unit
  gallery2: "/images/gallery-2.webp",  // Repair specialist on job
  gallery3: "/images/gallery-3.webp",  // Daikin heat pump install
  gallery4: "/images/gallery-4.webp",  // Maintenance tools
  gallery5: "/images/gallery-5.webp",  // Workmanship detail
  gallery6: "/images/gallery-6.webp",  // System installation
  gallery7: "/images/gallery-1.webp",
  gallery8: "/images/gallery-2.webp",
  gallery9: "/images/gallery-3.webp",

  // Services section imagery
  serviceResidential:  "/images/hero-1.webp",
  serviceCommercial:   "/images/gallery-6.webp",
  serviceEV:           "/images/gallery-3.webp",
  serviceSmart:        "/images/gallery-5.webp",
  serviceDiagnostics:  "/images/hero-3.jpg",
  serviceEngineering:  "/images/what-we-do.webp",
  serviceGenerator:    "/images/gallery-4.webp",
  serviceMisc:         "/images/gallery-2.webp",

  // Decorative
  decoBg: "/images/h4-deco-1-min.png",
} as const;

export type ImageKey = keyof typeof images;
