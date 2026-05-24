import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Heating Maintenance & Tune-Ups | Bodnar Heating & Air Conditioning | Redwood City, CA",
  description:
    "Annual heating system maintenance for furnaces, wall heaters, and heat pumps across the Mid-Peninsula. Safety-first diagnostics by John Bodnar. Call (650) 368-4408.",
};

export default function HeatingMaintenancePage() {
  return (
    <>
      <PageHeroSection
        title="Heating Maintenance & Tune-Ups"
        subtitle="Safety-first annual heating maintenance — John personally performs every first-time visit to establish a rigorous baseline."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Heating Maintenance & Tune-Ups" },
        ]}
      />
      <ServiceDetailSection
        activeService="Heating Maintenance & Tune-Ups"
        sidebarImage="/images/AdobeStock_1370273000-1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Annual Heating Maintenance — Done Right"
        intro={[
          "John Bodnar personally performs every first-time heating maintenance visit. This isn't a courtesy — it's how we establish a proper safety and performance baseline for your system. Ted handles all subsequent tune-ups with the same installer's eye for detail.",
          "We service furnaces, wall heaters, and heat pump systems across all major brands. Combustion safety is never optional — every visit includes CO and heat exchanger inspection.",
        ]}
        whatWeDo={[
          "Combustion analysis and CO safety testing",
          "Heat exchanger visual and pressure inspection",
          "Gas valve, igniter, and burner cleaning",
          "Blower wheel cleaning and belt/bearing check",
          "Flue and venting inspection for blockages",
        ]}
        whyChooseUs={[
          "John personally handles every first-time maintenance visit",
          "Safety-first — combustion testing on every call",
          "Covers furnaces, wall heaters, and heat pump systems",
          "Honest reporting with no pressure to upgrade",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
