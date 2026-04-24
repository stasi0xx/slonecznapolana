import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Pod Orzechem — Dom Wypoczynkowy Chudzewo",
  description:
    "Dom Wypoczynkowy Pod Orzechem w Chudzewie. 200 m², 8-12 osób, prywatna sauna, taras 30 m². Idealne na eventy, urodziny i wypoczynek. Rezerwacje online.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${outfit.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-forest text-cream">
        {children}
      </body>
    </html>
  );
}
