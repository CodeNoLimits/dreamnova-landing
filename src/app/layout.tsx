import type { Metadata } from "next";
import { Cinzel, Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Nova | DCS - Dream Consistency Score",
  description:
    "Le premier passeport qualitatif du mérite humain. Crée ton monde avec Genie 3. Débloque-le avec la Nova Key NFC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${rajdhani.variable} ${spaceMono.variable} antialiased selection:bg-gold/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
