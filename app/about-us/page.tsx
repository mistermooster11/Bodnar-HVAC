import React from "react";
import AboutHeroSection from "@/components/custom/sections/AboutHeroSection";
import AboutMissionSection from "@/components/custom/sections/AboutMissionSection";
import AboutStatsSection from "@/components/custom/sections/AboutStatsSection";
import AboutTalentsSection from "@/components/custom/sections/AboutTalentsSection";
import AboutTestimonialsSection from "@/components/custom/sections/AboutTestimonialsSection";
import "@/styles/about.css";

export const metadata = {
  title: "About Us | Carpenter Electric",
  description:
    "Learn about Carpenter Electric — West Palm Beach's trusted electricians since 1982. Our mission, core values, and why clients choose us.",
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
