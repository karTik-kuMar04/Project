import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import SiteShell from "@/src/components/SiteShell";
import { Analytics } from '@vercel/analytics/next';
import { Suspense } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ancient India",
  description: "Created and developed by Kartik Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense>
          <SiteShell>{children}</SiteShell>
        </Suspense>
      </body>

      <Analytics />
    </html>
  );
}
