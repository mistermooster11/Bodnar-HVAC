import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SalePopup from "@/components/custom/popup/SalePopup"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Bodnar Heating & Air Conditioning | HVAC Repair & Installation | Redwood City, CA",
  description:
    "Mid-Peninsula HVAC experts since 1976. Repair-first philosophy, owner-operated, 60-day labor warranty. Serving Redwood City, Palo Alto, Menlo Park & 14 more cities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <PageTransition />
        <SalePopup businessName="Bodnar Heating & Air Conditioning" expiryDate="June 20, 2026" trade="HVAC contractors" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
