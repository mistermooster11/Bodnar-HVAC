import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Heat Pump Systems | Bodnar Heating & Air Conditioning | Redwood City, CA",
  description:
    "Heat pump installation, repair, and maintenance across the Mid-Peninsula. Honest system recommendations — no dealer incentives. Call (650) 368-4408.",
};

export default function HeatPumpPage() {
  return (
    <>
      <PageHeroSection
        title="Heat Pump Systems"
        subtitle="Modern, efficient heating and cooling for Mid-Peninsula homes — sized and installed to fit your home, not a dealer's quota."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Heat Pump Systems" },
        ]}
      />
      <ServiceDetailSection
        activeService="Heat Pump Systems"
        sidebarImage="/images/AdobeStock_1429423159.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Heat Pump Installation & Service"
        intro={[
          "Heat pumps are an excellent fit for the Mid-Peninsula's mild climate — but only when they're properly sized and installed. Ted Becker, our lead installer, engineers every heat pump system around your home's specific ductwork and load requirements.",
          "We evaluate your home honestly and recommend the system that actually fits — not the one with the highest dealer margin. Brands we install and service include Mitsubishi, Daikin, Carrier, and Trane.",
        ]}
        whatWeDo={[
          "Whole-home heat pump system design and installation",
          "Ductless mini-split installation and service",
          "Heat pump repair and refrigerant diagnostics",
          "Load calculations and proper system sizing",
          "Utility rebate guidance for California programs",
        ]}
        whyChooseUs={[
          "No commissioned sales reps — honest system recommendations",
          "Proper load calculations, not oversized installs",
          "3rd-generation expertise across all major heat pump brands",
          "60-day labor warranty on all work",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
