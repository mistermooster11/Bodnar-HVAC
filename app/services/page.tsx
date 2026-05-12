import "@/styles/services.css";
import ServicesHeroSection from "@/components/custom/sections/ServicesHeroSection";
import ServicesGridSection from "@/components/custom/sections/ServicesGridSection";

export const metadata = {
  title: "Services | Carpenter Electric",
  description:
    "Outstanding residential & commercial electrical services — available 24/7. EV charging, smart home, diagnostics, generator services and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
    </>
  );
}
