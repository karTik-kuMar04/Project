import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { mauryaSubpages } from "@/data/mauryaEmpireData";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = { prefetch: "static" };

export const metadata: Metadata = {
  title: "Maurya Empire | Archives",
  description: "Examine the registry of the Maurya Empire, exploring its foundation, capital, military, administration, diplomacy, and conversion to dharma.",
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

export default function MauryaEmpireHub() {
  return (
    <main
      className={`relative min-h-screen bg-[#090604] py-20 px-6 md:px-12 overflow-hidden ${cinzel.variable} ${cormorant.variable}`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#21130b_0%,#110804_50%,#090604_100%)] pointer-events-none" />
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#b25329]/5 blur-[120px] pointer-events-none" />

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
            href="/vedic-period"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#d16c3d] hover:text-[#ebd6bd] transition-colors duration-300"
          >
            Previous Era: Vedic Period
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
            Chapter 03 &nbsp;•&nbsp; 321 BCE – 185 BCE
          </span>
          
          <h1
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="mb-8 text-4xl md:text-6xl font-extrabold tracking-widest text-[#FFF0D4] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            <span className="block bg-linear-to-b from-[#FFFFFF] via-[#E2E8F0] to-[#8a9db4] bg-clip-text text-transparent pb-1">
              THE MAURYA
            </span>
            <span className="block bg-linear-to-b from-[#FFF0D4] via-[#D4AF37] to-[#7A5C13] bg-clip-text text-transparent">
              EMPIRE
            </span>
          </h1>

          <p
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-lg md:text-xl leading-relaxed text-stone-300/85 font-light italic"
          >
            Around 321 BCE, a young commander named Chandragupta Maurya overthrew the Nanda dynasty and founded India’s first pan-subcontinental empire. Within two decades it stretched from the Hindu Kush to the Bay of Bengal. It produced the ancient world’s most ruthless manual of statecraft, fielded one of antiquity’s largest armies, and forged diplomatic ties with the Greek successor kingdoms of Alexander the Great. It ended with an emperor so horrified by the carnage of conquest that he renounced war, embraced the dharma, and sent missionaries across Asia. The Maurya Empire is the hinge on which ancient India turns. Explore six facets below.
          </p>
        </div>

        {/* Grid of Six Subpage Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mauryaSubpages.map((subpage, index) => (
            <Link
              key={subpage.id}
              href={`/maurya-empire/${subpage.id}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#a38560]/20 bg-stone-950/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
            >
              {/* Card Header Image */}
              <div className="relative h-48 w-full overflow-hidden border-b border-[#a38560]/20 bg-stone-900">
                {/* Fallback to ME.png since it is in public, but let's prioritize subpage image if generated */}
                <Image
                  src={subpage.image}
                  alt={subpage.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110 opacity-70 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Visual Vignette gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/90 to-transparent pointer-events-none" />

                {/* Chapter Number Badge */}
                <div className="absolute bottom-4 left-6">
                  <span className="bg-[#090604]/80 border border-[#d16c3d]/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d16c3d] backdrop-blur-sm rounded-sm">
                    Record 0{index + 1}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="flex flex-col p-6 flex-grow">
                <h3
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                  className="mb-3 text-xl font-bold tracking-wide text-[#FFF0D4] group-hover:text-amber-200 transition-colors duration-300"
                >
                  {subpage.title}
                </h3>

                <p
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  className="mb-6 flex-grow text-stone-300 leading-relaxed font-light italic text-[1.05rem]"
                >
                  {subpage.hook}
                </p>

                {/* Bottom CTA text */}
                <div
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                  className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#d16c3d] group-hover:text-[#f3a97e] transition-colors duration-300"
                >
                  Examine Log
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
