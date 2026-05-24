import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Bodnar Heating & Air Conditioning | (650) 368-4408",
  description:
    "Contact Bodnar Heating & Air Conditioning for HVAC service across the Mid-Peninsula. Call (650) 368-4408 or fill out our form — same-day diagnostics available.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Call or text (650) 368-4408 — same-day diagnostics available across the Mid-Peninsula."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="Bodnar Heating & Air Conditioning Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.2!2d-122.2278!3d37.4849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1251+Fifth+Ave%2C+Redwood+City%2C+CA+94063!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
