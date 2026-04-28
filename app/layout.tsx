import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { property } from "@/app/config/property";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: property.meta.title,
  description: property.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={property.meta.language} className={`${outfit.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-forest text-cream">
        {children}
      </body>
    </html>
  );
}
