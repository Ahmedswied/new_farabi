import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ALFarabi International Group | Professional Workforce Supply",
  description: "ALFarabi International Group provides comprehensive workforce solutions with tested and certified professionals. Construction, infrastructure, and project staffing services.",
  keywords: "workforce supply, construction crew, professional staffing, Egypt, international",
  authors: [{ name: "ALFarabi International Group" }],
  openGraph: {
    title: "ALFarabi International Group",
    description: "Professional Workforce Supply and Project Services",
    url: "https://alfarabi.com",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 256,
        height: 256,
        alt: "ALFarabi Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
