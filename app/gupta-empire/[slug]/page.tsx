import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { guptaSubpages } from "@/data/guptaEmpireData";
import { ArchivePageShell } from "@/src/components/era/ArchivePageShell";

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
  const nextSubpage =
    subpageIndex < guptaSubpages.length - 1 ? guptaSubpages[subpageIndex + 1] : null;

  const sections = subpage.sections.map((section) => ({
    title: section.title,
    content: section.content,
    bulletPoints: section.bulletPoints,
  }));

  return (
    <div className={`${cinzel.variable} ${cormorant.variable}`}>
      <ArchivePageShell
        title={subpage.title}
        eraLabel="Gupta Empire"
        eraHref="/gupta-empire"
        hook={subpage.hook}
        image={subpage.image}
        recordNumber={subpageIndex + 1}
        sections={sections}
        alertText="Warning: The following items represent historical anachronisms for the Gupta era and are strictly excluded from all registry reconstructions: medieval or Islamic architectural styles (Mughal arches, Rajput forts, Dravidian gopurams), fantasy multi-armed or flying deities, Western-style chainmail or plate armor, and gunpowder weaponry. The authentic Gupta aesthetic remains centered on flat-roofed temples, simple stepped towers, cotton and leather gear, bows, swords, and war elephants."
        footerPrevious={
          slug === "dynasty"
            ? { href: "/maurya-empire/ashoka", label: "Previous Era: Ashoka (Maurya Empire)" }
            : { href: "/gupta-empire", label: "All Records" }
        }
        footerNext={
          nextSubpage
            ? { href: `/gupta-empire/${nextSubpage.id}`, label: nextSubpage.title }
            : { href: "/pallava-dynasty/origins", label: "The Pallava Dynasty" }
        }
        footerNextLabel={nextSubpage ? "Next Record" : "Next Era"}
        footerNextDetail={nextSubpage ? nextSubpage.title : "The Pallava Dynasty"}
        variant="archive"
      >
        {slug === "dynasty" ? (
          <div className="rounded-[24px] border border-[#a38560]/20 bg-stone-950/70 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <h3
              style={{ fontFamily: "var(--font-cinzel), serif" }}
              className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#d16c3d]"
            >
              Dynastic Succession: Seven Royal Phases
            </h3>
            <div className="grid grid-cols-1 gap-4 text-xs font-medium text-stone-300 sm:grid-cols-2 md:grid-cols-7">
              {[
                { label: "01. Sri Gupta", desc: "Dynastic Founder" },
                { label: "02. Ghatotkacha", desc: "Early Magadha Rule" },
                { label: "03. Chandragupta I", desc: "Licchavi Marriage & Expansion" },
                { label: "04. Samudragupta", desc: "Conquests & Campaigns" },
                { label: "05. Chandragupta II", desc: "Golden Age Peak" },
                { label: "06. Kumaragupta I", desc: "Nalanda & Prosperity" },
                { label: "07. Skandagupta", desc: "Huna Wars & Decline" },
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
