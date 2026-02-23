import type { Metadata } from "next";
import { Cinzel, Rajdhani, Space_Mono } from 'next/font/google';
import "./globals.css";

const cinzel = Cinzel({ 
  subsets: ['latin'], 
  variable: '--font-cinzel',
  display: 'swap',
});

const rajdhani = Rajdhani({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-rajdhani',
  display: 'swap',
});

const spaceMono = Space_Mono({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DREAM NOVA | Mutate Reality from Inside',
  description: 'DCS + Genie 3 + Na Nach = Hafatsa 25% Global Tipping Point',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" className="scroll-smooth">
      <body className={`${cinzel.variable} ${rajdhani.variable} ${spaceMono.variable} antialiased selection:bg-sacred/30 selection:text-white relative min-h-screen`}>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,rgba(10,10,10,1)_100%)] pointer-events-none z-[-1]" />
        {children}
      </body>
    </html>
  );
}
