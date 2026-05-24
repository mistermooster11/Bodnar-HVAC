import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";

export const metadata: Metadata = {
  title: "Blog | Bodnar Heating & Air Conditioning | HVAC Tips & Insights",
  description:
    "Expert HVAC tips, maintenance guides, and industry insights from Bodnar Heating & Air Conditioning — serving Mid-Peninsula homeowners since 1976.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Blog"
        subtitle="Expert HVAC tips, maintenance guides, and insights from the Bodnar team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
    </>
  );
}
