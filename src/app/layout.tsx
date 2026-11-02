import type { Metadata } from "next";
import { Familjen_Grotesk, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const display = Familjen_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eshimov Azizbek | AI Engineer",
  description:
    "AI engineer from Samarkand. Builder of Portail, a unified AI workspace valued at $450K.",
  openGraph: {
    title: "Eshimov Azizbek | AI Engineer",
    description:
      "AI engineer from Samarkand. Builder of Portail, a unified AI workspace valued at $450K.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} antialiased`}>
      <body className="bg-bg text-ink">
        <Nav />
        {children}
      </body>
    </html>
  );
}
