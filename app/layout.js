import { Geist, Geist_Mono } from "next/font/google";
import { CursorFollower, SmoothScroll } from "./components";
import "./globals.css";

const siteUrl = "https://romancastro.vercel.app";
const siteName = "Roman Castro Portfolio";
const title = "Roman Castro | Creative Front-End Developer";
const description =
  "Portfolio of Roman Castro, a creative front-end developer specialized in React, Next.js, interactive websites, performance, and visual detail.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Roman Castro",
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Roman Castro", url: siteUrl }],
  creator: "Roman Castro",
  publisher: "Roman Castro",
  keywords: [
    "Roman Castro",
    "frontend developer",
    "front-end developer",
    "creative developer",
    "React developer",
    "Next.js developer",
    "portfolio",
    "web development",
    "interactive websites",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roman Castro portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScroll />
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
