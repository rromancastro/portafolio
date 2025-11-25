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
  description: "Portafolio de Román Castro, desarrollador Front-End especializado en React, NextJS y Firebase. Me apasiona crear soluciones digitales intuitivas y eficientes, enfocadas en diseño responsivo y experiencia de usuario. Mi objetivo es contribuir con creatividad y optimización para impulsar proyectos innovadores que generen impacto real. Busco crecer profesionalmente desarrollando productos que mejoren la interacción entre usuarios y tecnología. ",
  openGraph: {
    title: "Roman Castro – Portfolio",
    description: "Mi portafolio como desarrollador web.",
    url: "https://rromancastro.vercel.app/",
    siteName: "Roman Castro",
    images: [
      {
        url: "https://rromancastro.vercel.app/og-image.png",
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
    title: "Roman Castro – Portfolio",
    description: "Mi portafolio como desarrollador web.",
    images: ["https://rromancastro.vercel.app/og-image.png"]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
