import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { guptaSubpages } from "@/data/guptaEmpireData";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "dynasty" } },
    { params: { slug: "cities-daily-life" } },
    { params: { slug: "government" } },
    { params: { slug: "economy" } },
    { params: { slug: "golden-age-of-knowledge" } },
    { params: { slug: "religion-and-decline" } },
  ],
};

export async function generateStaticParams() {
  return guptaSubpages.map((subpage) => ({
    slug: subpage.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subpage = guptaSubpages.find((p) => p.id === slug);
  return {
    title: subpage ? `${subpage.title} | Gupta Empire` : "Gupta Empire Archive",
    description: subpage ? subpage.hook : "Detailed historical registry of the Gupta Empire.",
  };
}

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

export default async function GuptaEmpireSubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subpageIndex = guptaSubpages.findIndex((p) => p.id === slug);
  
  if (subpageIndex === -1) {
    notFound();
  }

  const subpage = guptaSubpages[subpageIndex];
  
  // Calculate next subpage for navigation footer
  const nextSubpage =
    subpageIndex < guptaSubpages.length - 1
      ? guptaSubpages[subpageIndex + 1]
      : null;

  return (
    <main
      className={`relative min-h-screen bg-[#090604] py-16 px-6 md:px-12 overflow-hidden ${cinzel.variable} ${cormorant.variable}`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#21130b_0%,#110804_50%,#090604_100%)] pointer-events-none" />
      <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-[#b25329]/3 blur-[140px] pointer-events-none" />

      {/* Floating Dust particles overlay */}
      <div className="dust absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        
        {/* Breadcrumb Navigation */}
        <nav
          style={{ fontFamily: "var(--font-cinzel), serif" }}
          className="mb-12 flex flex-wrap items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#a38560]"
        >
          <Link href="/" className="hover:text-[#ebd6bd] transition-colors">
            Home
          </Link>
          <span className="text-stone-700">/</span>
          <Link href="/gupta-empire" className="hover:text-[#ebd6bd] transition-colors">
            Gupta Empire
          </Link>
          <span className="text-stone-700">/</span>
          <span className="text-[#FFF0D4]">{subpage.title}</span>
        </nav>

        {/* Hero Header Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#a38560]/10 pb-16">
          <div className="lg:col-span-7">
            <span
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-3 block text-xs font-bold uppercase tracking-[0.4em] text-[#d16c3d]"
            >
              Record 0{subpageIndex + 1}
            </span>
            <h1
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-6 text-3xl md:text-5xl font-extrabold tracking-widest text-[#FFF0D4] leading-tight"
            >
              {subpage.title}
            </h1>
            <p
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-lg md:text-2xl leading-relaxed text-[#ebd6bd] font-light italic pl-4 border-l-2 border-[#D4AF37]/50 py-1"
            >
              {subpage.hook}
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-[#a38560]/30 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-stone-900">
            <Image
              src={subpage.image}
              alt={subpage.title}
              fill
              className="object-cover brightness-[0.8] contrast-[1.05]"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-stone-950/60 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Custom Chronological Phase Timeline on Dynasty page */}
        {slug === "dynasty" && (
          <div className="mb-16 bg-amber-950/15 border border-[#a38560]/20 rounded-xl p-6 backdrop-blur-md">
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#d16c3d] mb-6"
            >
              Dynastic Succession: Seven Royal Phases
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4 text-xs font-medium text-stone-300">
              {[
                { label: "01. Sri Gupta", desc: "Dynastic Founder" },
                { label: "02. Ghatotkacha", desc: "Early Magadha Rule" },
                { label: "03. Chandragupta I", desc: "Licchavi Marriage & Expansion" },
                { label: "04. Samudragupta", desc: "Conquests & Campaigns" },
                { label: "05. Chandragupta II", desc: "Golden Age Peak" },
                { label: "06. Kumaragupta I", desc: "Nalanda & Prosperity" },
                { label: "07. Skandagupta", desc: "Huna Wars & Decline" },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col gap-1 border-l-2 md:border-l-0 md:border-t-2 border-[#d16c3d]/30 pl-4 md:pl-0 md:pt-4"
                >
                  <span className="text-[#ebd6bd] font-bold">{phase.label}</span>
                  <span className="text-[10px] text-stone-400 leading-normal">{phase.desc}</span>
                  {idx < 6 && (
                    <span className="hidden md:inline absolute right-0 top-4 text-[#d16c3d]/40 translate-x-2">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sections Listing */}
        <div className="space-y-20">
          {subpage.sections.map((section, idx) => (
            <section
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-stone-900/50 last:border-0"
            >
              {/* Narrative block */}
              <div className="lg:col-span-7">
                <h2
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                  className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#d16c3d] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d16c3d]" />
                  {section.title}
                </h2>
                
                {/* Visual grouping of narrative content */}
                <div
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  className="text-stone-300 leading-relaxed text-lg md:text-xl font-light space-y-4"
                >
                  <p>{section.content}</p>
                </div>
              </div>

              {/* Raw Research Notes panel */}
              <div className="lg:col-span-5 bg-stone-950/45 border border-[#a38560]/20 rounded-xl p-6 relative overflow-hidden backdrop-blur-xs shadow-inner">
                {/* Corner water-mark text */}
                <span
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                  className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.2em] text-[#a38560]/40 uppercase pointer-events-none"
                >
                  RESEARCH LOG
                </span>

                <h3
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#ebd6bd]/80 border-b border-[#a38560]/10 pb-2"
                >
                  Key Evidence
                </h3>

                <ul className="space-y-3">
                  {section.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-3 text-xs text-stone-400 font-medium leading-relaxed">
                      <span className="text-[#D4AF37] mt-1 select-none flex-shrink-0">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* Registry Alert: Anachronism Check */}
        <div className="mt-16 bg-red-950/10 border border-red-900/20 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.2em] text-red-500/40 uppercase">
            REGISTRY ALERT
          </div>
          <h3
            style={{ fontFamily: "var(--font-cinzel), serif" }}
            className="mb-3 text-[10px] font-bold uppercase tracking-widest text-red-400 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Anachronism Warning & Authenticity
          </h3>
          <p
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-sm text-stone-400 leading-relaxed italic"
          >
            Warning: The following items represent historical anachronisms for the Gupta era and are strictly excluded from all registry reconstructions: medieval or Islamic architectural styles (Mughal arches, Rajput forts, Dravidian gopurams), fantasy multi-armed or flying deities, Western-style chainmail or plate armor, and gunpowder weaponry. The authentic Gupta aesthetic remains centered on flat-roofed temples, simple stepped towers, cotton and leather gear, bows, swords, and war elephants.
          </p>
        </div>

        {/* Subpage Footer Navigation */}
        <div className="mt-24 border-t border-[#a38560]/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {slug === "dynasty" ? (
            <Link
              href="/maurya-empire/ashoka"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="group flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a38560] hover:text-[#ebd6bd] transition-colors"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Previous Era: Ashoka (Maurya Empire)
            </Link>
          ) : (
            <Link
              href="/gupta-empire"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="group flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a38560] hover:text-[#ebd6bd] transition-colors"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              All Records
            </Link>
          )}

          {nextSubpage ? (
            <Link
              href={`/gupta-empire/${nextSubpage.id}`}
              className="group text-right flex flex-col items-center md:items-end gap-1.5"
            >
              <span className="text-[9px] font-bold tracking-widest text-[#d16c3d] uppercase">
                Next Record
              </span>
              <span
                style={{ fontFamily: "var(--font-cinzel), serif" }}
                className="text-sm font-bold tracking-wider text-[#ebd6bd] group-hover:text-amber-200 transition-colors flex items-center gap-2"
              >
                {nextSubpage.title}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </Link>
          ) : (
            <Link
              href="/pallava-dynasty/origins"
              className="group text-right flex flex-col items-center md:items-end gap-1.5"
            >
              <span className="text-[9px] font-bold tracking-widest text-[#d16c3d] uppercase">
                Next Era
              </span>
              <span
                style={{ fontFamily: "var(--font-cinzel), serif" }}
                className="text-sm font-bold tracking-wider text-[#ebd6bd] group-hover:text-amber-200 transition-colors flex items-center gap-2"
              >
                The Pallava Dynasty
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </span>
            </Link>
          )}
        </div>

      </div>
    </main>
  );
}
