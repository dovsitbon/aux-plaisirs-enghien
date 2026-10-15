import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const siteUrl = "https://aux-plaisirs-enghien.vercel.app";
const description =
  "Restaurant chinois et vietnamien près de la gare d'Enghien-les-Bains : nems et bo bun maison, canard laqué, dim sum. Sur place ou à emporter. 01 39 64 15 01.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aux Plaisirs d'Enghien · Restaurant chinois & vietnamien à Enghien",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Aux Plaisirs d'Enghien",
    title: "Aux Plaisirs d'Enghien — Cuisine chinoise & vietnamienne",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aux Plaisirs d'Enghien",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
