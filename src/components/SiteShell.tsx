"use client";

import Footer from "@/src/components/footer/Footer";
import ScrollToTop from "@/src/components/footer/ScrollToTop";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}
