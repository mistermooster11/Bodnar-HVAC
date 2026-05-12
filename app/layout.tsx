import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import "@/styles/homepage.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";

export const metadata: Metadata = {
  title: "Carpenter Electric | Electrical Contractor West Palm Beach FL",
  description:
    "Since 1982, Carpenter Electric, Inc. has been the premier electrical contractor in West Palm Beach, FL — residential, commercial, industrial, EV charging, and more.",
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
