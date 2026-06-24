import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { pallavaSubpages } from "@/data/pallavaDynastyData";
import { ArchivePageShell } from "@/src/components/era/ArchivePageShell";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "origins" } },
    { params: { slug: "cities" } },
    { params: { slug: "architecture" } },
    { params: { slug: "rulers" } },
    { params: { slug: "military-trade" } },
    { params: { slug: "culture" } },
  ],
};

export async function generateStaticParams() {
  return pallavaSubpages.map((subpage) => ({
    slug: subpage.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subpage = pallavaSubpages.find((p) => p.id === slug);
  return {
    title: subpage ? `${subpage.title} | Pallava Dynasty` : "Pallava Dynasty Archive",
    description: subpage ? subpage.hook : "Detailed historical registry of the Pallava Dynasty.",
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

export default async function PallavaDynastySubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subpageIndex = pallavaSubpages.findIndex((p) => p.id === slug);

  if (subpageIndex === -1) {
    notFound();
  }

  const subpage = pallavaSubpages[subpageIndex];
  const nextSubpage =
    subpageIndex < pallavaSubpages.length - 1 ? pallavaSubpages[subpageIndex + 1] : null;

  const sections = subpage.sections.map((section) => ({
    title: section.title,
    content: section.content,
    bulletPoints: section.bulletPoints,
  }));

  return (
    <div className={`${cinzel.variable} ${cormorant.variable}`}>
      <ArchivePageShell
        title={subpage.title}
        eraLabel="Pallava Dynasty"
        eraHref="/pallava-dynasty"
        hook={subpage.hook}
        image={subpage.image}
        recordNumber={subpageIndex + 1}
        sections={sections}
        alertText="Warning: The following items represent historical anachronisms for the Pallava era and must be excluded from all reconstructions: later Chola or Vijayanagara temple styles (those derived from the Pallava style, not the other way around), Mughal/Islamic arches or motifs, North Indian nagara-style temple towers (shikharas of the northern type), and literal flying or multi-armed deities. Depict only architectural and iconographic forms verified for 7th–8th century South India."
        footerPrevious={
          slug === "origins"
            ? { href: "/gupta-empire/religion-and-decline", label: "Previous Era: End of Gupta Empire" }
            : { href: "/pallava-dynasty", label: "All Records" }
        }
        footerNext={
          nextSubpage
            ? { href: `/pallava-dynasty/${nextSubpage.id}`, label: nextSubpage.title }
            : { href: "/chola-empire/rise", label: "The Chola Empire" }
        }
        footerNextLabel={nextSubpage ? "Next Record" : "Next Era"}
        footerNextDetail={nextSubpage ? nextSubpage.title : "The Chola Empire"}
        variant="archive"
      >
        {(slug === "architecture" || slug === "cities") ? (
          <div className="rounded-[24px] border border-[#a38560]/20 bg-stone-950/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#d16c3d]"
            >
              Dravidian Architectural Glossary
            </h3>
            <div className="grid grid-cols-1 gap-6 text-xs text-stone-300 sm:grid-cols-2 md:grid-cols-5">
              {[
                { term: "Vimana", definition: "The soaring, tiered tower constructed directly over the inner sanctum." },
                { term: "Gopuram", definition: "The monumental, elaborately sculpted entrance gatehouse tower of the temple complex." },
                { term: "Garbhagriha", definition: "The innermost sanctum chamber where the primary deity icon is housed." },
                { term: "Mandapa", definition: "A pillared, open or closed assembly hall preceding the main sanctum." },
                { term: "Ratha", definition: "A monolithic temple shrine carved in the shape of a ceremonial chariot from a single boulder." },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-l-2 border-[#d16c3d]/30 pl-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ebd6bd]">{item.term}</span>
                  <span className="text-[10px] leading-relaxed text-stone-400">{item.definition}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {slug === "rulers" ? (
          <div className="rounded-[24px] border border-[#a38560]/20 bg-stone-950/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <span
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-3 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#d16c3d]"
            >
              Historical Transition
            </span>
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#ebd6bd]"
            >
              Aditya I&apos;s Conquest of Kanchi (c. 875 CE)
            </h3>
            <p
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="mb-4 text-sm leading-7 text-stone-300"
            >
              Aditya I&apos;s conquest of Kanchipuram is the handover moment of southern sovereignty. His victory ended centuries of Pallava dynastic power, transferring control of Tondaimandalam to the rising Chola Empire.
            </p>
          </div>
        ) : null}
      </ArchivePageShell>
    </div>
  );
}
