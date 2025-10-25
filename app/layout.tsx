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
    default: "Pet First - Trusted Pet & Bird Care",
    template: "%s | Pet First - Trusted Pet & Bird Care",
  },
  description:
    "Professional and compassionate pet & bird care by experienced, insured caregivers. We offer home visits, overnight boarding, grooming, medication administration, and personalized care plans with daily photo updates. Flexible scheduling and COVID-safe procedures.",
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
