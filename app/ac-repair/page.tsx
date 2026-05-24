import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "AC Repair & Troubleshooting | Bodnar Heating & Air Conditioning | Redwood City, CA",
  description:
    "Expert AC diagnostics and repair across the Mid-Peninsula. Refrigerant leaks, electrical faults, compressor issues — most repairs completed same-day. Call (650) 368-4408.",
};

export default function ACRepairPage() {
  return (
    <>
      <PageHeroSection
        title="AC Repair & Troubleshooting"
        subtitle="Expert diagnostics and same-day repairs for all major AC brands across Redwood City and the Mid-Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "AC Repair & Troubleshooting" },
        ]}
      />
      <ServiceDetailSection
        activeService="AC Repair & Troubleshooting"
        sidebarImage="/images/AdobeStock_1568613684.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="AC Repair You Can Count On"
        intro={[
          "When your air conditioner stops working, you need a technician who diagnoses the actual problem — not one who defaults to a system replacement quote. John Bodnar personally handles every AC repair visit, bringing 20+ years of hands-on experience to every call.",
          "We service all major brands including Carrier, Bryant, Trane, Mitsubishi, and Daikin across Redwood City, Palo Alto, Menlo Park, and 14 surrounding Mid-Peninsula cities.",
        ]}
        whatWeDo={[
          "Refrigerant leak detection and recharge",
          "Compressor, capacitor, and contactor replacement",
          "Electrical fault diagnosis and repair",
          "Thermostat calibration and wiring issues",
          "Evaporator and condenser coil cleaning",
        ]}
        whyChooseUs={[
          "Repair-First approach — we fix before we recommend replacement",
          "Owner John Bodnar personally handles every repair",
          "60-day labor warranty on all repairs",
          "Transparent pricing — you know the cost before work begins",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
