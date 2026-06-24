import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { cholaSubpages } from "@/data/cholaEmpireData";
import { ArchivePageShell } from "@/src/components/era/ArchivePageShell";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "rise" } },
    { params: { slug: "temples" } },
    { params: { slug: "naval-power" } },
    { params: { slug: "administration" } },
    { params: { slug: "culture" } },
    { params: { slug: "economy" } },
  ],
};

export async function generateStaticParams() {
  return cholaSubpages.map((subpage) => ({
    slug: subpage.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subpage = cholaSubpages.find((p) => p.id === slug);
  return {
    title: subpage ? `${subpage.title} | Chola Empire` : "Chola Empire Archive",
    description: subpage ? subpage.hook : "Detailed historical registry of the Chola Empire.",
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

export default async function CholaEmpireSubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subpageIndex = cholaSubpages.findIndex((p) => p.id === slug);

  if (subpageIndex === -1) {
    notFound();
  }

  const subpage = cholaSubpages[subpageIndex];
  const nextSubpage =
    subpageIndex < cholaSubpages.length - 1 ? cholaSubpages[subpageIndex + 1] : null;

  const sections = subpage.sections.map((section) => ({
    title: section.title,
    content: section.content,
    bulletPoints: section.bulletPoints,
  }));

  return (
    <div className={`${cinzel.variable} ${cormorant.variable}`}>
      <ArchivePageShell
        title={subpage.title}
        eraLabel="Chola Empire"
        eraHref="/chola-empire"
        hook={subpage.hook}
        image={subpage.image}
        recordNumber={subpageIndex + 1}
        sections={sections}
        alertText="Warning: The following items represent historical anachronisms for the Chola era and must be excluded from all reconstructions: any post-13th-century items (gunpowder weapons, Mughal court dress, Rajput-style forts, or Maratha-style architecture), and any description of Christianity or Islam as dominant cultural forces. Chola kings must appear in historically generic Tamil regal attire, not in mythic, fantasy, or multi-armed representations."
        footerPrevious={
          slug === "rise"
            ? { href: "/pallava-dynasty/rulers", label: "Previous Era: Rulers (Pallava Dynasty)" }
            : { href: "/chola-empire", label: "All Records" }
        }
        footerNext={
          nextSubpage
            ? { href: `/chola-empire/${nextSubpage.id}`, label: nextSubpage.title }
            : { href: "/vijayanagara-empire/capital", label: "The Vijayanagara Empire" }
        }
        footerNextLabel={nextSubpage ? "Next Record" : "Next Era"}
        footerNextDetail={nextSubpage ? nextSubpage.title : "The Vijayanagara Empire"}
        variant="archive"
      >
        {slug === "temples" ? (
          <div className="rounded-[24px] border border-[#a38560]/20 bg-stone-950/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#d16c3d]"
            >
              Dravidian Architectural Glossary
            </h3>
            <div className="grid grid-cols-1 gap-6 text-xs text-stone-300 sm:grid-cols-2 md:grid-cols-5">
              {[
                { term: "Vimana", definition: "The towering, tiered spire constructed directly over the inner sanctum. Heights are verified at 59.8m (Thanjavur), 53m (Gangaikonda Cholapuram), and 24m (Darasuram)." },
                { term: "Gopuram", definition: "The monumental, elaborately sculpted entrance gatehouse tower of the temple complex." },
                { term: "Garbhagriha", definition: "The innermost sanctum chamber where the primary deity icon is housed." },
                { term: "Mandapa", definition: "A pillared, open or closed assembly hall preceding the main sanctum." },
                { term: "Prakara", definition: "The vast outer colonnade and walled enclosure surrounding the temple." },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-l-2 border-[#d16c3d]/30 pl-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ebd6bd]">{item.term}</span>
                  <span className="text-[10px] leading-relaxed text-stone-400">{item.definition}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </ArchivePageShell>
    </div>
  );
}
