import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhjindieshow.netlify.app"
  ),
  title: "The DHJ Indie Show — Doris Hall-James",
  description:
    "Celebrating music, creativity, and the power of independent artistry. Join Doris Hall-James on a journey through unforgettable performances and inspiring stories.",
  openGraph: {
    title: "The DHJ Indie Show",
    description: "Celebrating music, creativity, and the power of independent artistry.",
    images: ["/images/dhj-keyart.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body className="font-sans bg-cream text-brown antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
