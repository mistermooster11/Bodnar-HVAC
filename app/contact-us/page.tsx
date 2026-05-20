import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/sections/PageHeroSection";
import ContactFormSection from "@/components/custom/sections/ContactFormSection";
import ContactInfoSection from "@/components/custom/sections/ContactInfoSection";
import "@/styles/service-detail.css"; /* page-hero CSS */
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Bodnar Heating & Air Conditioning",
  description:
    "Contact Bodnar HVAC — call or text (650) 368-4408. Serving Redwood City and the Mid-Peninsula. Address: 1251 Fifth Ave., Redwood City, CA 94063. Available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection title="Contact us" />
      <ContactFormSection />
      <ContactInfoSection />
    </>
  );
}
