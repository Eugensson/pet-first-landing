import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Pet First - Expert Pet & Bird Care Services",
    template: "%s | Pet First - Expert Pet & Bird Care Services",
  },
  description:
    "Pet First provides professional and caring services for pets and birds, including grooming, breed-specific haircuts, pharmacy support, adoption guidance, and personalized care plans. Safe, reliable, and tailored to keep your pets happy and healthy every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
