import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/sections/PageHeroSection";
import ApplyNowSection from "@/components/custom/sections/ApplyNowSection";
import "@/styles/service-detail.css"; /* page-hero CSS */
import "@/styles/apply-now.css";

export const metadata: Metadata = {
  title: "Get a Quote | Bodnar Heating & Air Conditioning",
  description:
    "Request a free estimate or book a service call with Bodnar HVAC in Redwood City. Call or text (650) 368-4408 or use our online booking.",
};

export default function ApplyNowPage() {
  return (
    <>
      <PageHeroSection title="Get a Quote" />
      <ApplyNowSection />
    </>
  );
}
