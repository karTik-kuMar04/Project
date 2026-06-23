"use client";
import Hero from "@/src/components/hero/hero";
import StorySection from "@/src/components/story/StorySection";
import { Analytics } from "@vercel/analytics/next";
export default function Home() {
  return (
    <main className="bg-[#090604]">
      {/* Wrap Hero inside StorySection to tie them to the same pinning trigger */}
      <StorySection>
        <Hero />
      </StorySection>
      <Analytics />
    </main>
  );
}