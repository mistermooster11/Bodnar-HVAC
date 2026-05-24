import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import AboutSection from "@/components/custom/about/AboutSection";
import WhyChooseSection from "@/components/custom/why-choose/WhyChooseSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "About Us | Bodnar Heating & Air Conditioning | Redwood City, CA",
  description:
    "Family-owned HVAC experts since 1976. John and Ted Bodnar bring 3rd-generation expertise and a Repair-First philosophy to every job across the Mid-Peninsula.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeroSection
        title="About Us"
        subtitle="3rd-generation family HVAC experts serving the Mid-Peninsula since 1976 — repair-first, owner-operated, no commission sales reps."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTAFormSection />
    </>
  );
}
