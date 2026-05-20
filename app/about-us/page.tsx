import React from "react";
import AboutHeroSection from "@/components/custom/sections/AboutHeroSection";
import AboutMissionSection from "@/components/custom/sections/AboutMissionSection";
import AboutStatsSection from "@/components/custom/sections/AboutStatsSection";
import AboutTalentsSection from "@/components/custom/sections/AboutTalentsSection";
import AboutTestimonialsSection from "@/components/custom/sections/AboutTestimonialsSection";
import "@/styles/about.css";

export const metadata = {
  title: "About Us | Bodnar Heating & Air Conditioning",
  description:
    "Learn about Bodnar Heating & Air Conditioning, Inc. — Redwood City's trusted HVAC experts since 1976. Three generations of family expertise, Repair-First philosophy, and owner-operated service.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutStatsSection />
      <AboutTalentsSection />
      <AboutTestimonialsSection />
    </>
  );
}
