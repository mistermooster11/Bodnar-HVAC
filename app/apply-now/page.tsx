import type { Metadata } from "next";
import PageHeroSection from "@/components/custom/sections/PageHeroSection";
import ApplyNowSection from "@/components/custom/sections/ApplyNowSection";
import "@/styles/service-detail.css"; /* page-hero CSS */
import "@/styles/apply-now.css";

export const metadata: Metadata = {
  title: "Apply Now | Carpenter Electric",
  description:
    "Interested in joining the Carpenter Electric team? Fill out your employment application, upload your resume, and complete the Predictive Index Behavioral Assessment.",
};

export default function ApplyNowPage() {
  return (
    <>
      <PageHeroSection title="Apply Now" />
      <ApplyNowSection />
    </>
  );
}
