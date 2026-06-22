import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { vijayanagaraSubpages } from "@/data/vijayanagaraEmpireData";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "capital" } },
    { params: { slug: "rulers" } },
    { params: { slug: "military" } },
    { params: { slug: "economy" } },
    { params: { slug: "arts" } },
    { params: { slug: "decline" } },
  ],
};

export async function generateStaticParams() {
  return vijayanagaraSubpages.map((subpage) => ({
    slug: subpage.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subpage = vijayanagaraSubpages.find((p) => p.id === slug);
  return {
    title: subpage ? `${subpage.title} | Vijayanagara Empire` : "Vijayanagara Empire Archive",
    description: subpage ? subpage.hook : "Detailed historical registry of the Vijayanagara Empire.",
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

export default async function VijayanagaraEmpireSubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subpageIndex = vijayanagaraSubpages.findIndex((p) => p.id === slug);
  
  if (subpageIndex === -1) {
    notFound();
  }

  const subpage = vijayanagaraSubpages[subpageIndex];
  
  // Calculate next subpage for navigation footer
  const nextSubpage =
    subpageIndex < vijayanagaraSubpages.length - 1
      ? vijayanagaraSubpages[subpageIndex + 1]
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
          <Link href="/vijayanagara-empire" className="hover:text-[#ebd6bd] transition-colors">
            Vijayanagara Empire
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

        {/* Eyewitness Testimony Highlights on Capital and Economy pages */}
        {(slug === "capital" || slug === "economy") && (
          <div className="mb-16 bg-amber-950/15 border border-[#a38560]/20 rounded-xl p-6 backdrop-blur-md relative overflow-hidden">
            <span
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.2em] text-[#d16c3d]/40 uppercase pointer-events-none"
            >
              EYEWITNESS CHRONICLES
            </span>
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#d16c3d] mb-6"
            >
              Accounts of Foreign Observers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="border-l-2 border-[#d16c3d]/40 pl-4 flex flex-col gap-2">
                <p
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  className="text-sm text-stone-300 italic leading-relaxed"
                >
                  &ldquo;The city is circumscribed by a massive stone wall of sixty miles, containing gates of immense strength, and its ruler commands ninety thousand men fit to bear arms.&rdquo;
                </p>
                <cite className="text-[10px] text-stone-400 font-bold uppercase tracking-wider not-italic">
                  &mdash; Niccol&ograve; de&apos; Conti, c. 1420 CE
                </cite>
              </blockquote>
              <blockquote className="border-l-2 border-[#d16c3d]/40 pl-4 flex flex-col gap-2">
                <p
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  className="text-sm text-stone-300 italic leading-relaxed"
                >
                  &ldquo;The rose is sold everywhere... I counted seven concentric walls, with markets and bazaars of gold and gems that are the richest in the world.&rdquo;
                </p>
                <cite className="text-[10px] text-stone-400 font-bold uppercase tracking-wider not-italic">
                  &mdash; Abdur Razzaq, 1443 CE
                </cite>
              </blockquote>
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
            Warning: The following items represent historical anachronisms for the Vijayanagara era and must be excluded from reconstructions: Mughal court dress, Rajput-style forts, 17th-century Maratha-style architecture, or any implication that the empire fell to the Mughals (it did not). Note on Gunpowder: Firearm and artillery adoption is documented *only* from the 16th century (Krishnadevaraya&apos;s era onwards). Do not project matchlocks or cannons into the Sangama or early Saluva phases (before c. 1500 CE). Islamic architectural fusions (such as the Queen&apos;s Bath pointed arches or Elephant Stables domes) are historically verified and authentic.
          </p>
        </div>

        {/* Closing Registry Note for final subpage */}
        {slug === "decline" && (
          <div className="mt-16 bg-stone-950/40 border border-[#a38560]/20 rounded-xl p-6 relative overflow-hidden backdrop-blur-xs text-center shadow-inner">
            <span
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.2em] text-[#a38560]/40 uppercase pointer-events-none"
            >
              ARCHIVE END
            </span>
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#ebd6bd]/80"
            >
              Registry Status
            </h3>
            <p
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-sm text-stone-400 leading-relaxed italic"
            >
              Closing Note: The Vijayanagara Empire is the final era currently compiled within this registry. The story of South India continues beyond 1646 CE (into the Nayaka kingdoms, Maratha Thanjavur, and the Mughal and colonial periods) but those pages are not yet built.
            </p>
          </div>
        )}

        {/* Subpage Footer Navigation */}
        <div className="mt-24 border-t border-[#a38560]/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {slug === "capital" ? (
            <Link
              href="/chola-empire/economy"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="group flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a38560] hover:text-[#ebd6bd] transition-colors"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Previous Era: Economy (Chola Empire)
            </Link>
          ) : (
            <Link
              href="/vijayanagara-empire"
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
              href={`/vijayanagara-empire/${nextSubpage.id}`}
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
            <div className="group text-right flex flex-col items-center md:items-end gap-1.5 opacity-60">
              <span className="text-[9px] font-bold tracking-widest text-stone-500 uppercase">
                End of Timeline
              </span>
              <span
                style={{ fontFamily: "var(--font-cinzel), serif" }}
                className="text-sm font-bold tracking-wider text-stone-400 flex items-center gap-2 select-none"
              >
                No Later Eras Compiled
                <span>→</span>
              </span>
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
