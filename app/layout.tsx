import type { Metadata } from "next";
import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Will You Be My Valentine?",
  description: "A special invitation for a special person.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
