import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Roman Castro",
  metadataBase: new URL("https://rromancastro.vercel.app"),
  description:
    "Portafolio de Roman Castro, desarrollador Front-End especializado en React, Next.js y Firebase.",
  openGraph: {
    title: "Roman Castro - Portfolio",
    description: "Mi portafolio como desarrollador web.",
    url: "/",
    siteName: "Roman Castro",
    images: [
      {
        url: "/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Vista previa del portafolio de Roman Castro",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roman Castro - Portfolio",
    description: "Mi portafolio como desarrollador web.",
    images: ["/social-preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
