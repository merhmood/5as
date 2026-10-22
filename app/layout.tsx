import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { siteName, siteUrl } from "./_seo";

const sans = Inter({ variable: "--font-inter", subsets: ["latin"] });
const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const description =
  "5As brings construction, electrical power, IT networks and smart automation together under one plan, one team and one point of accountability. Based in Lokoja, Kogi State.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "5As | Construction, Power, Networks & Smart Systems. One Partner.",
    template: "%s | 5As",
  },
  description,
  applicationName: siteName,
  keywords: [
    "construction",
    "general contracting",
    "electrical power",
    "solar and backup power",
    "structured cabling",
    "IT networks",
    "smart building automation",
    "healthcare technology",
    "Lokoja",
    "Kogi State",
    "Nigeria",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_NG",
    url: "/",
    title: "5As | One Partner. Every System.",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "5As | One Partner. Every System.",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${mono.variable} antialiased`}>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
