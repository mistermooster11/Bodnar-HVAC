import "@/styles/services.css";
import ServicesHeroSection from "@/components/custom/sections/ServicesHeroSection";
import ServicesGridSection from "@/components/custom/sections/ServicesGridSection";

export const metadata = {
  title: "HVAC Services | Bodnar Heating & Air Conditioning",
  description:
    "Repair-First HVAC services for Redwood City and the Mid-Peninsula — furnace repair, A/C service, heat pump installation, maintenance, and specialized system services. EPA & BBB certified.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesGridSection />
    </>
  );
}
