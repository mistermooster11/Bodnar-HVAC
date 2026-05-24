import type { Metadata } from "next";
import "@/styles/homepage.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "HVAC Services | Bodnar Heating & Air Conditioning | Redwood City, CA",
  description:
    "AC repair, furnace repair, heat pump systems, and maintenance tune-ups across the Mid-Peninsula. Repair-first HVAC solutions since 1976. Call (650) 368-4408.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeroSection
        title="Our Services"
        subtitle="Repair-first HVAC solutions for every Mid-Peninsula home — AC, furnace, heat pump, and maintenance services by John and Ted Bodnar."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <ServicesSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
