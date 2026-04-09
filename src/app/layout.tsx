import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoToTop } from "@/components/go-to-top";
import { SmoothScroll } from "@/components/smooth-scroll";
import "plyr/dist/plyr.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://viswanth.com";
const siteName = "Viswanth Gudiwada";
const defaultTitle = "Viswanth Gudiwada | Brand Identity & Motion Designer";
const defaultDescription =
  "Portfolio of Viswanth Gudiwada - brand identity, motion, packaging, and publication design.";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Viswanth Gudiwada",
  url: siteUrl,
  jobTitle: "Brand Identity and Motion Designer",
  sameAs: [
    "https://www.instagram.com/viswanthgudiwada_/",
    "https://in.pinterest.com/viswanthgudiwada_/",
    "https://giphy.com/viswanthg",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "en",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Viswanth Gudiwada",
  },
  description: defaultDescription,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
        <SmoothScroll />
        {children}
        <GoToTop />
      </body>
    </html>
  );
}
