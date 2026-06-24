import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond } from "next/font/google";
import { vedicSubpages } from "@/data/vedicPeriodData";
import { ArchivePageShell } from "@/src/components/era/ArchivePageShell";

// Next.js 16/React 19 Instant Navigation configuration
export const unstable_instant = {
  prefetch: "runtime",
  samples: [
    { params: { slug: "origins" } },
    { params: { slug: "tribes-kingdoms" } },
    { params: { slug: "society" } },
    { params: { slug: "religion" } },
    { params: { slug: "literature" } },
    { params: { slug: "end-of-vedic-age" } },
  ],
};

export async function generateStaticParams() {
  return vedicSubpages.map((subpage) => ({
    slug: subpage.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const subpage = vedicSubpages.find((p) => p.id === slug);
  return {
    title: subpage ? `${subpage.title} | Vedic Period` : "Vedic Period Archive",
    description: subpage ? subpage.hook : "Detailed archaeological registry of the Vedic era.",
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

export default async function VedicPeriodSubpage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subpageIndex = vedicSubpages.findIndex((p) => p.id === slug);

  if (subpageIndex === -1) {
    notFound();
  }

  const subpage = vedicSubpages[subpageIndex];
  const nextSubpage =
    subpageIndex < vedicSubpages.length - 1 ? vedicSubpages[subpageIndex + 1] : null;

  const sections = subpage.sections.map((section) => ({
    title: section.title,
    content: section.content,
    bulletPoints: section.bulletPoints,
  }));

  return (
    <div className={`${cinzel.variable} ${cormorant.variable}`}>
      <ArchivePageShell
        title={subpage.title}
        eraLabel="Vedic Period"
        eraHref="/vedic-period"
        hook={subpage.hook}
        image={subpage.image}
        recordNumber={subpageIndex + 1}
        sections={sections}
        alertText="The Vedic period is reconstructed from a combination of textual, archaeological, linguistic, and comparative evidence. This archive prioritizes transparent scholarly framing over romanticized narration, keeping chronology, interpretation, and evidence visibly distinct."
        footerPrevious={
          slug === "origins"
            ? { href: "/indus-valley/decline", label: "Previous Era: Decline of IVC" }
            : { href: "/vedic-period", label: "All Records" }
        }
        footerNext={
          nextSubpage
            ? { href: `/vedic-period/${nextSubpage.id}`, label: nextSubpage.title }
            : { href: "/maurya-empire", label: "The Maurya Empire" }
        }
        footerNextLabel={nextSubpage ? "Next Record" : "Next Era"}
        footerNextDetail={nextSubpage ? nextSubpage.title : "The Maurya Empire"}
        variant="archive"
      />
    </div>
  );
}
