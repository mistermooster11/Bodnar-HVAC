import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/sections/PageHeroSection";
import ContactFormSection from "@/components/custom/sections/ContactFormSection";
import ContactInfoSection from "@/components/custom/sections/ContactInfoSection";
import "@/styles/service-detail.css"; /* page-hero CSS */
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Carpenter Electric",
  description:
    "Contact us & let's collaborate! Call Us! Carpenter-Electric proudly serves the entire Stuart-to-Miami region. Address: 1333 53rd St, West Palm Beach, FL 33407. Phone: 561-848-7881.",
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
