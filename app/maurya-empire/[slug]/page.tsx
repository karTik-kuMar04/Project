import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { mauryaSubpages } from "@/data/mauryaEmpireData";
import { ArchivePageShell } from "@/src/components/era/ArchivePageShell";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "chandragupta" } },
    { params: { slug: "pataliputra" } },
    { params: { slug: "military" } },
    { params: { slug: "arthashastra" } },
    { params: { slug: "international" } },
    { params: { slug: "ashoka" } },
  ],
};

export async function generateStaticParams() {
  return mauryaSubpages.map((subpage) => ({
    slug: subpage.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subpage = mauryaSubpages.find((p) => p.id === slug);
  return {
    title: subpage ? `${subpage.title} | Maurya Empire` : "Maurya Empire Archive",
    description: subpage ? subpage.hook : "Detailed historical registry of the Maurya Empire.",
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

export default async function MauryaEmpireSubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subpageIndex = mauryaSubpages.findIndex((p) => p.id === slug);

  if (subpageIndex === -1) {
    notFound();
  }

  const subpage = mauryaSubpages[subpageIndex];
  const nextSubpage =
    subpageIndex < mauryaSubpages.length - 1 ? mauryaSubpages[subpageIndex + 1] : null;

  const sections = subpage.sections.map((section) => ({
    title: section.title,
    content: section.content,
    bulletPoints: section.bulletPoints,
  }));

  return (
    <div className={`${cinzel.variable} ${cormorant.variable}`}>
      <ArchivePageShell
        title={subpage.title}
        eraLabel="Maurya Empire"
        eraHref="/maurya-empire"
        hook={subpage.hook}
        image={subpage.image}
        recordNumber={subpageIndex + 1}
        sections={sections}
        alertText={
          slug === "ashoka"
            ? "Warning: While Ashoka's era marked the emergence of monumental stone carving and early Buddhist stupas, several subsequent elements are strictly anachronistic and must be flagged if they appear: Mughal/Rajput architectural styles, plate armor, firearms, or Roman military helmets."
            : "Warning: During the early Mauryan phase, the following elements did not exist and must be excluded from historical reconstructions: stone temples (shikhara/gopuram), Buddhist stupas (these rose after 261 BCE), Mughal/Rajput architectural styles, plate armor, firearms, Ashokan chakra banners, swastika symbols, or Roman helmets. The authentic aesthetic remains strictly timber-and-brick, leather, cotton, iron weapons, and punch-marked coins."
        }
        footerPrevious={
          slug === "chandragupta"
            ? { href: "/vedic-period/end-of-vedic-age", label: "Previous Era: End of Vedic Age" }
            : { href: "/maurya-empire", label: "All Records" }
        }
        footerNext={
          nextSubpage
            ? { href: `/maurya-empire/${nextSubpage.id}`, label: nextSubpage.title }
            : { href: "/gupta-empire", label: "The Gupta Empire" }
        }
        footerNextLabel={nextSubpage ? "Next Record" : "Next Era"}
        footerNextDetail={nextSubpage ? nextSubpage.title : "The Gupta Empire"}
        variant="archive"
      >
        {slug === "chandragupta" ? (
          <div className="rounded-[24px] border border-[#a38560]/20 bg-stone-950/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#d16c3d]"
            >
              Chronological Context: Five Mauryan Phases
            </h3>
            <div className="grid grid-cols-1 gap-6 text-xs font-medium text-stone-300 sm:grid-cols-2 md:grid-cols-5">
              {[
                { label: "01. Chandragupta", desc: "Empire Foundation & Expansion" },
                { label: "02. Bindusara", desc: "Deccan Subjugation" },
                { label: "03. Ashoka (Early)", desc: "Consolidation & Conquest" },
                { label: "04. Kalinga War", desc: "The Pivotal Bloodbath" },
                { label: "05. Ashoka (Later)", desc: "Rule by Dharma" },
              ].map((phase, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-l-2 border-[#d16c3d]/30 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                  <span className="font-bold text-[#ebd6bd]">{phase.label}</span>
                  <span className="text-[10px] leading-normal text-stone-400">{phase.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </ArchivePageShell>
    </div>
  );
}
