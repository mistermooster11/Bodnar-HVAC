import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Furnace Repair & Diagnostics | Bodnar Heating & Air Conditioning | Redwood City, CA",
  description:
    "Precision furnace diagnostics and repair for gas, electric, and heat pump furnaces. Owner-operated. 60-day labor warranty. Serving the Mid-Peninsula since 1976. Call (650) 368-4408.",
};

export default function FurnaceRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Furnace Repair & Diagnostics"
        subtitle="Precision furnace diagnostics for gas, electric, and heat pump furnaces across all major brands — Mid-Peninsula's Repair-First HVAC experts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Furnace Repair & Diagnostics" },
        ]}
      />
      <ServiceDetailSection
        activeService="Furnace Repair & Diagnostics"
        sidebarImage="/images/process-heating.webp"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Expert Furnace Repair — Fixed Right the First Time"
        intro={[
          "A failing furnace in a Mid-Peninsula winter is more than an inconvenience. John Bodnar specializes in complex furnace diagnostics — the kind of technical problems that other companies resolve by writing a replacement quote.",
          "Whether it's a gas valve issue, a failing heat exchanger, a broken igniter, or an intermittent electrical fault, we find the root cause and fix it properly.",
        ]}
        whatWeDo={[
          "Gas valve, igniter, and flame sensor diagnosis",
          "Heat exchanger inspection and repair",
          "Blower motor and capacitor replacement",
          "Control board diagnostics and repair",
          "Combustion safety and CO testing",
        ]}
        whyChooseUs={[
          "Repair-First philosophy — we extend system life, not replace prematurely",
          "John personally manages every estimate and repair",
          "All major brands: Carrier, Bryant, Trane, Lennox, Rheem",
          "60-day labor warranty on every repair",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
