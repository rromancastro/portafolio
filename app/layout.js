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
