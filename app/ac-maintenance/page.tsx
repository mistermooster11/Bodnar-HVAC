import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "AC Maintenance & Tune-Ups | Bodnar Heating & Air Conditioning | Redwood City, CA",
  description:
    "Professional AC maintenance and tune-ups across the Mid-Peninsula. Real-load testing during peak summer heat catches failures before they strand you. Call (650) 368-4408.",
};

export default function ACMaintenancePage() {
  return (
    <>
      <PageHeroSection
        title="AC Maintenance & Tune-Ups"
        subtitle="Preventive AC maintenance that actually prevents failures — real-load testing during peak heat, not a checkbox inspection."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "AC Maintenance & Tune-Ups" },
        ]}
      />
      <ServiceDetailSection
        activeService="AC Maintenance & Tune-Ups"
        sidebarImage="/images/process-specialized.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="AC Maintenance That Prevents Costly Breakdowns"
        intro={[
          "Most HVAC maintenance visits are a 20-minute checkup with a sales pitch at the end. Bodnar's approach is different: we perform real-load testing under actual operating conditions to catch performance issues before they become emergency repairs.",
          "Annual AC maintenance extends system life, maintains efficiency, and keeps manufacturer warranties valid. We serve both new and existing clients across all 17 Mid-Peninsula cities.",
        ]}
        whatWeDo={[
          "Refrigerant pressure and superheat testing under load",
          "Condenser and evaporator coil cleaning",
          "Electrical connection inspection and tightening",
          "Capacitor and contactor condition assessment",
          "Filter replacement and airflow measurement",
        ]}
        whyChooseUs={[
          "Real-load testing — not just a visual inspection",
          "No upselling — we report what we find, nothing more",
          "Owner-operated with consistent technician quality",
          "Serving new and existing clients across the Mid-Peninsula",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
