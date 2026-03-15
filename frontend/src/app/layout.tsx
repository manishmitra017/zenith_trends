import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteCart from "@/components/QuoteCart";
import { QuoteCartProvider } from "@/contexts/QuoteCartContext";
import { siteConfig } from "@/data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenith Trends | Corporate & Promotional Merchandise Australia",
  description: siteConfig.description,
  keywords: [
    "promotional products",
    "corporate merchandise",
    "branded merchandise",
    "Australia",
    "promotional items",
    "corporate gifts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <QuoteCartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <QuoteCart />
        </QuoteCartProvider>
      </body>
    </html>
  );
}
