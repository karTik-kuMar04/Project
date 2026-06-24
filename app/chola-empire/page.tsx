import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { cholaSubpages } from "@/data/cholaEmpireData";
import EraChapterStack from "@/src/components/ui/EraChapterStack";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "Chola Empire | Archives",
  description: "Examine the registry of the Chola Empire, exploring its rise, temples, naval power, administration, culture, and economy.",
};

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export default function CholaEmpireHub() {
  return (
    <main
      className={`relative min-h-screen bg-[#090604] py-20 px-6 md:px-12 ${cinzel.variable} ${cormorant.variable}`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#21130b_0%,#110804_50%,#090604_100%)] pointer-events-none" />
      <div className="absolute left-1/2 top-1/4 h-125 w-125 -translate-x-1/2 rounded-full bg-[#b25329]/5 blur-[120px] pointer-events-none" />

      {/* Floating Dust Effect (CSS) */}
      <div className="dust absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="mb-12 flex flex-wrap justify-between items-center gap-4">
          <Link
            href="/"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#a38560] hover:text-[#ebd6bd] transition-colors duration-300"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1.5">
              ←
            </span>
            Back to Registry
          </Link>

          <Link
            href="/pallava-dynasty"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#d16c3d] hover:text-[#ebd6bd] transition-colors duration-300"
          >
            Previous Era: Pallava Dynasty
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="mb-4 block text-xs font-bold uppercase tracking-[0.45em] bg-linear-to-r from-[#d16c3d] via-[#f3a97e] to-[#b05224] bg-clip-text text-transparent"
          >
            Chapter 06 &nbsp;•&nbsp; 848 CE – 1279 CE
          </span>
          
          <h1
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="mb-8 text-4xl md:text-6xl font-extrabold tracking-widest text-[#FFF0D4] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            <span className="block bg-linear-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#8a9db4] bg-clip-text text-transparent pb-1">
              THE CHOLA
            </span>
            <span className="block bg-linear-to-b from-[#FFF0D4] via-[#D4AF37] to-[#7A5C13] bg-clip-text text-transparent">
              EMPIRE
            </span>
          </h1>

          <p
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-lg md:text-xl leading-relaxed text-stone-300/85 font-light italic"
          >
            The Chola Empire is the reason the world still recognises Tamil Nadu. From Thanjavur, a granite temple soars 60 metres into the sky — the tallest structure in India at its completion in 1010 CE. Chola fleets reached Sumatra. Chola administrations invented the village assembly. Chola bronzes set the standard by which all Indian metalwork is judged. And Chola kings who called themselves devotees of Shiva nevertheless funded Buddhist monasteries and employed Muslim merchants. The empire that grew from a minor chieftain’s coup in 848 CE lasted four and a half centuries and left a mark on South and Southeast Asia that has never faded. Explore six facets below.
          </p>
        </div>

        <EraChapterStack title="The Chola Empire" chapters={cholaSubpages} era={"chola-empire"}/>
      </div>
    </main>
  );
}
