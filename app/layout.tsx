import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import "@/styles/homepage.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bodnar HVAC — Heating & Air Conditioning | Redwood City, CA",
    template: "%s | Bodnar Heating & Air Conditioning",
  },
  description:
    "Family-owned HVAC experts serving Redwood City and the Mid-Peninsula since 1976. Repair-first diagnostics, furnace repair, A/C service, and heat pump installation. EPA & BBB certified.",
  alternates: {
    canonical: "https://[TODO: production-domain]",
  },
  openGraph: {
    type: "website",
    siteName: "Bodnar Heating & Air Conditioning, Inc.",
    title: "Bodnar HVAC — Heating & Air Conditioning | Redwood City, CA",
    description:
      "Family-owned HVAC experts serving Redwood City and the Mid-Peninsula since 1976. Repair-first diagnostics, furnace repair, A/C service, and heat pump installation.",
    images: [
      {
        url: "/og-image.jpg", // [TODO: Add 1200x630 OG image for social sharing]
        width: 1200,
        height: 630,
        alt: "Bodnar Heating & Air Conditioning, Inc. — Redwood City HVAC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Bodnar Heating & Air Conditioning, Inc.",
  telephone: "+16503684408",
  url: "https://[TODO: production-domain]",
  email: "info@bodnarhvac.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1251 Fifth Ave.",
    addressLocality: "Redwood City",
    addressRegion: "CA",
    postalCode: "94063",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", "name": "Redwood City" },
    { "@type": "City", "name": "Atherton" },
    { "@type": "City", "name": "Belmont" },
    { "@type": "City", "name": "Burlingame" },
    { "@type": "City", "name": "Foster City" },
    { "@type": "City", "name": "Los Altos" },
    { "@type": "City", "name": "Los Altos Hills" },
    { "@type": "City", "name": "Menlo Park" },
    { "@type": "City", "name": "Millbrae" },
    { "@type": "City", "name": "Palo Alto" },
    { "@type": "City", "name": "Portola Valley" },
    { "@type": "City", "name": "San Bruno" },
    { "@type": "City", "name": "San Carlos" },
    { "@type": "City", "name": "San Mateo" },
    { "@type": "City", "name": "South San Francisco" },
    { "@type": "City", "name": "Stanford" },
    { "@type": "City", "name": "Woodside" },
  ],
  openingHours: "[TODO: Confirm hours — currently 24/7 by phone]",
  priceRange: "$$",
  foundingDate: "1976",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "EPA Certification" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "BBB Accreditation" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
